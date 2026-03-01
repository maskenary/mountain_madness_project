"use client"

import { useCallback, useEffect, useRef, useState } from "react"

export type Gear = "R" | "N" | "D"

const LOW_HZ = 80
const HIGH_HZ = 200
const VOLUME_THRESHOLD = 140
const CONSISTENT_FRAMES = 8
const SCROLL_AMOUNT = 75
const MOVING_LIGHT_MS = 380
const PITCH_FOR_RPM = { minHz: 70, maxHz: 280 }
const VOL_FOR_RPM = { min: 30, max: 200 }
const RPM_DECAY = 0.985
/** Rate at which needle smoothly follows target RPM (lower = slower) */
const RPM_SMOOTH_RISE = 0.11
/** Max displayed RPM (1 = full scale, 0.85 = 85%) — reduces needle pegging */
const RPM_DISPLAY_CAP = 0.88
const PITCH_MIN_LAG = 40
const PITCH_MAX_LAG = 600

// Parking minigame constants
const PARKING_MOVE_PER_TICK = 1.2
const PARKING_QUIET_FRAMES_FOR_CHECK = 8
const PARKING_SCENE_HEIGHT = 460
const PARKING_CAR_HEIGHT = 32
const PARKING_MAX_TOP = 500
/** Parking success zone: same as yellow box (parking-lot.tsx top/height) */
const PARKING_BOX_TOP = 390
const PARKING_BOX_HEIGHT = 80
/** On-screen car height (80): success only when car is fully inside the box */
const PARKING_CAR_VISUAL_HEIGHT = 80
/** Tolerance (px) for car fully inside box */
const PARKING_FULL_FIT_TOLERANCE = 4

function getPitchHz(buffer: Float32Array, sampleRate: number): number {
  const len = buffer.length
  const minLag = PITCH_MIN_LAG
  const maxLag = Math.min(PITCH_MAX_LAG, (len >> 1) - 1)
  let bestLag = minLag
  let bestCorr = -1
  for (let lag = minLag; lag <= maxLag; lag++) {
    let corr = 0
    for (let i = 0; i < len - lag; i++) corr += buffer[i] * buffer[i + lag]
    if (corr > bestCorr) {
      bestCorr = corr
      bestLag = lag
    }
  }
  return bestCorr > 0 ? sampleRate / bestLag : 0
}

function binForHz(hz: number, fftSize: number, sampleRate: number): number {
  return Math.min(Math.floor((hz * fftSize) / sampleRate), (fftSize >> 1) - 1)
}

export function useVroomEngine(needleRef: React.RefObject<HTMLDivElement | null>) {
  const [gear, setGearState] = useState<Gear>("N")
  const [movingLightOn, setMovingLightOn] = useState(false)
  const [isParkingMode, setIsParkingMode] = useState(false)
  const [parkingCarTop, setParkingCarTop] = useState(0)
  const [parkingSuccess, setParkingSuccess] = useState(false)

  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const rafRef = useRef<number | null>(null)
  const framesAboveRef = useRef(0)
  const displayedRpmTRef = useRef(0)
  const movingLightTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const gearRef = useRef<Gear>("N")
  const parkingCarTopRef = useRef(0)
  const parkingFramesQuietRef = useRef(0)
  const parkingSuccessRef = useRef(false)
  const isParkingModeRef = useRef(false)
  const parkingPaintFrameRef = useRef(0)

  const showMovingLight = useCallback(() => {
    if (movingLightTimeoutRef.current) clearTimeout(movingLightTimeoutRef.current)
    setMovingLightOn(true)
    movingLightTimeoutRef.current = setTimeout(() => {
      setMovingLightOn(false)
      movingLightTimeoutRef.current = null
    }, MOVING_LIGHT_MS)
  }, [])

  const stopEngine = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop())
      streamRef.current = null
    }
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {})
      audioContextRef.current = null
    }
    analyserRef.current = null
    framesAboveRef.current = 0
    if (movingLightTimeoutRef.current) {
      clearTimeout(movingLightTimeoutRef.current)
      movingLightTimeoutRef.current = null
    }
    setMovingLightOn(false)
    displayedRpmTRef.current = 0
    if (needleRef.current) {
      needleRef.current.style.transform = "rotate(-90deg)"
    }
  }, [needleRef])

  const startEngine = useCallback(() => {
    const g = gearRef.current
    if (g !== "R" && g !== "D") return
    if (streamRef.current && audioContextRef.current) return

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((mediaStream) => {
        streamRef.current = mediaStream
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
        const ctx = new AudioContextClass()
        audioContextRef.current = ctx
        const source = ctx.createMediaStreamSource(mediaStream)
        const analyser = ctx.createAnalyser()
        analyser.fftSize = 2048
        analyser.smoothingTimeConstant = 0.6
        source.connect(analyser)
        analyserRef.current = analyser

        const sampleRate = ctx.sampleRate
        const fftSize = analyser.fftSize
        const lowBin = binForHz(LOW_HZ, fftSize, sampleRate)
        const highBin = binForHz(HIGH_HZ, fftSize, sampleRate)
        const frequencyData = new Uint8Array(analyser.frequencyBinCount)
        const timeData = new Float32Array(2048)

        function tick() {
          const currentGear = gearRef.current
          if (!analyserRef.current || (currentGear !== "R" && currentGear !== "D")) return

          analyserRef.current.getByteFrequencyData(frequencyData)
          analyserRef.current.getFloatTimeDomainData(timeData)

          let sum = 0
          let count = 0
          for (let i = lowBin; i <= highBin; i++) {
            sum += frequencyData[i]
            count++
          }
          const level = count > 0 ? sum / count : 0

          const pitchHz = getPitchHz(timeData, sampleRate)
          const pitchT =
            pitchHz <= PITCH_FOR_RPM.minHz
              ? 0
              : Math.min(1, (pitchHz - PITCH_FOR_RPM.minHz) / (PITCH_FOR_RPM.maxHz - PITCH_FOR_RPM.minHz))
          const volT =
            level <= VOL_FOR_RPM.min
              ? 0
              : Math.min(1, (level - VOL_FOR_RPM.min) / (VOL_FOR_RPM.max - VOL_FOR_RPM.min))
          const rawRpmT = pitchT * (0.25 + 0.75 * volT)
          const currentRpmT = Math.min(rawRpmT, RPM_DISPLAY_CAP)

          // Parking mode
          if (isParkingModeRef.current) {
            if (parkingSuccessRef.current) {
              displayedRpmTRef.current = Math.max(0, displayedRpmTRef.current * RPM_DECAY)
            } else {
              if (level >= VOLUME_THRESHOLD && (currentGear === "D" || currentGear === "R")) {
                parkingFramesQuietRef.current = 0
                const delta = (level / 255) * PARKING_MOVE_PER_TICK
                if (currentGear === "D") {
                  parkingCarTopRef.current = Math.min(PARKING_MAX_TOP, parkingCarTopRef.current + delta)
                } else {
                  parkingCarTopRef.current = Math.max(0, parkingCarTopRef.current - delta)
                }
                // setState every 2 frames for smooth interpolation and less re-render cost
                parkingPaintFrameRef.current++
                if (parkingPaintFrameRef.current % 2 === 0) {
                  setParkingCarTop(parkingCarTopRef.current)
                }
                showMovingLight()
                const d = displayedRpmTRef.current
                displayedRpmTRef.current = d + (currentRpmT - d) * RPM_SMOOTH_RISE
              } else {
                parkingFramesQuietRef.current++
                if (parkingFramesQuietRef.current === 1) setParkingCarTop(parkingCarTopRef.current)
                if (parkingFramesQuietRef.current >= PARKING_QUIET_FRAMES_FOR_CHECK) {
                  const carTop = parkingCarTopRef.current
                  const carBottom = carTop + PARKING_CAR_VISUAL_HEIGHT
                  const boxBottom = PARKING_BOX_TOP + PARKING_BOX_HEIGHT
                  const fullyInside =
                    carTop >= PARKING_BOX_TOP - PARKING_FULL_FIT_TOLERANCE &&
                    carBottom <= boxBottom + PARKING_FULL_FIT_TOLERANCE
                  if (fullyInside) {
                    parkingSuccessRef.current = true
                    setParkingSuccess(true)
                  }
                }
                displayedRpmTRef.current = Math.max(0, displayedRpmTRef.current * RPM_DECAY)
              }
            }
          } else {
            // Normal scroll mode
            if (level >= VOLUME_THRESHOLD) {
              framesAboveRef.current++
              if (framesAboveRef.current >= CONSISTENT_FRAMES) {
                if (currentGear === "D") {
                  window.scrollBy({ top: SCROLL_AMOUNT, behavior: "smooth" })
                } else if (currentGear === "R") {
                  window.scrollBy({ top: -SCROLL_AMOUNT, behavior: "smooth" })
                }
                showMovingLight()
                framesAboveRef.current = 0
                const d = displayedRpmTRef.current
                displayedRpmTRef.current = d + (currentRpmT - d) * RPM_SMOOTH_RISE
              }
            } else {
              framesAboveRef.current = 0
              displayedRpmTRef.current = Math.max(0, displayedRpmTRef.current * RPM_DECAY)
            }
          }

          const deg = -90 + displayedRpmTRef.current * 180
          if (needleRef.current) {
            needleRef.current.style.transform = `rotate(${deg}deg)`
          }

          rafRef.current = requestAnimationFrame(tick)
        }
        rafRef.current = requestAnimationFrame(tick)
      })
      .catch(() => {
        setGearState("N")
        gearRef.current = "N"
      })
  }, [showMovingLight, needleRef])

  const setGear = useCallback(
    (g: Gear) => {
      setGearState(g)
      gearRef.current = g
      if (g === "N") {
        stopEngine()
      } else {
        startEngine()
      }
    },
    [stopEngine, startEngine]
  )

  // Activate parking mode
  const activateParking = useCallback(() => {
    isParkingModeRef.current = true
    parkingCarTopRef.current = 0
    parkingFramesQuietRef.current = 0
    parkingSuccessRef.current = false
    setIsParkingMode(true)
    setParkingCarTop(0)
    setParkingSuccess(false)
  }, [])

  // Exit parking mode when user scrolls back up (progress < 0.98)
  useEffect(() => {
    const onScroll = () => {
      if (!isParkingModeRef.current) return
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
      const scrollY = window.scrollY || document.documentElement.scrollTop
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0
      if (progress < 0.95) {
        isParkingModeRef.current = false
        setIsParkingMode(false)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    return () => {
      stopEngine()
    }
  }, [stopEngine])

  return {
    gear,
    setGear,
    movingLightOn,
    isParkingMode,
    parkingCarTop,
    parkingSuccess,
    activateParking,
  }
}
