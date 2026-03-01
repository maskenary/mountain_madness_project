"use client"

import { useEffect, useRef, ReactNode } from "react"

interface ShakeWrapperProps {
  children: ReactNode
}

export function ShakeWrapper({ children }: ShakeWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const rumbleAudioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const rumbleAudio = new Audio("/earth-rumble.mp3")
    rumbleAudio.volume = 1
    rumbleAudioRef.current = rumbleAudio

    // Volume boost so rumble is audible (increase if source is quiet)
    let audioContext: AudioContext | null = null
    let gainNode: GainNode | null = null
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
      const source = ctx.createMediaElementSource(rumbleAudio)
      gainNode = ctx.createGain()
      gainNode.gain.value = 20
      source.connect(gainNode)
      gainNode.connect(ctx.destination)
      audioContext = ctx
    } catch {
      // fallback: use default volume only
    }

    function getTriggers() {
      return wrapper ? Array.from(wrapper.querySelectorAll<HTMLElement>(".road-trigger")) : []
    }

    // Shake intensity: stronger when ad is near viewport center, weaker when far (0~1)
    function getShakeIntensity() {
      const triggers = getTriggers()
      const viewportCenterY = window.innerHeight / 2
      let best = 0
      triggers.forEach((trigger) => {
        const r = trigger.getBoundingClientRect()
        if (r.bottom <= 0 || r.top >= window.innerHeight) return
        const adCenterY = (r.top + r.bottom) / 2
        const distFromCenter = Math.abs(adCenterY - viewportCenterY)
        const halfViewport = window.innerHeight / 2
        const t = Math.max(0, 1 - distFromCenter / halfViewport)
        const intensity = t * t
        if (intensity > best) best = intensity
      })
      return best
    }

    function updateShake() {
      if (!wrapper) return
      const triggers = getTriggers()
      let adVisible = false
      triggers.forEach((trigger) => {
        const r = trigger.getBoundingClientRect()
        if (r.bottom > 0 && r.top < window.innerHeight) adVisible = true
      })
      if (adVisible) {
        wrapper.classList.add("road-shake")
        wrapper.style.setProperty("--shake", String(getShakeIntensity()))
        const audio = rumbleAudioRef.current
        if (audio) {
          audio.loop = true
          audio.volume = 1
          if (audioContext?.state === "suspended") audioContext.resume()
          audio.play().catch(() => {})
        }
      } else {
        wrapper.classList.remove("road-shake")
        wrapper.style.setProperty("--shake", "0")
        const audio = rumbleAudioRef.current
        if (audio) {
          audio.pause()
          audio.currentTime = 0
        }
      }
    }

    const triggers = getTriggers()
    const observer = new IntersectionObserver(
      () => updateShake(),
      { threshold: 0, rootMargin: "0px" }
    )
    triggers.forEach((el) => observer.observe(el))

    const handleScroll = () => {
      updateShake()
      if (wrapper.classList.contains("road-shake")) {
        const base = getShakeIntensity()
        const jitter = 0.6 + Math.random() * 0.8
        wrapper.style.setProperty("--shake", String(base * jitter))
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", updateShake)
    // Initial run + delayed run in case triggers aren’t in DOM yet
    updateShake()
    const t = setTimeout(updateShake, 100)

    return () => {
      clearTimeout(t)
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updateShake)
      rumbleAudioRef.current?.pause()
      rumbleAudioRef.current = null
      audioContext?.close()
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="min-h-screen overflow-x-hidden"
      style={{ ["--shake" as string]: "1", paddingBottom: "2rem" }}
    >
      {children}
    </div>
  )
}
