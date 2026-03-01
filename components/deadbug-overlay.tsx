"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export function DeadbugOverlay({ isParkingMode = false }: { isParkingMode?: boolean }) {
  const [show, setShow] = useState(false)
  const accumRef = useRef(0)
  const lastYRef = useRef(0)
  const nextAtRef = useRef(1000 + (Math.random() * 600 - 300))
  const bugSoundRef = useRef<HTMLAudioElement | null>(null)
  const bugCtxRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    const audio = new Audio("/bug-appear.mp3")
    audio.volume = 1
    bugSoundRef.current = audio

    try {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      const ctx = new Ctx()
      bugCtxRef.current = ctx
      const source = ctx.createMediaElementSource(audio)
      const gain = ctx.createGain()
      gain.gain.value = 2.5
      source.connect(gain)
      gain.connect(ctx.destination)
    } catch {
      bugCtxRef.current = null
    }

    return () => {
      bugSoundRef.current?.pause()
      bugSoundRef.current = null
      bugCtxRef.current?.close()
      bugCtxRef.current = null
    }
  }, [])

  useEffect(() => {
    if (show) {
      try {
        if (bugCtxRef.current?.state === "suspended") bugCtxRef.current.resume()
        const audio = bugSoundRef.current
        if (audio) {
          audio.currentTime = 0
          audio.volume = 1
          audio.play().catch(() => {})
        }
      } catch {
        // ignore
      }
    }
  }, [show])

  const dismiss = useCallback(() => {
    setShow(false)
  }, [])

  useEffect(() => {
    lastYRef.current = window.scrollY || document.documentElement.scrollTop

    const handleScroll = () => {
      if (show) return // don't accumulate while showing
      if (isParkingMode) return // 주차장 구간에서는 벌레 안 나옴
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
      const currentY = window.scrollY || document.documentElement.scrollTop
      const delta = currentY - lastYRef.current
      if (delta > 0 && maxScroll > 0) {
        const totalKm = (maxScroll / window.innerHeight) * 0.45
        const metersPerPx = (totalKm * 1000) / maxScroll
        accumRef.current += delta * metersPerPx
        if (accumRef.current >= nextAtRef.current) {
          setShow(true)
          accumRef.current = 0
          nextAtRef.current = 1000 + (Math.random() * 600 - 300)
        }
      }
      lastYRef.current = currentY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [show, isParkingMode])

  if (!show) return null

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/deadbug.png"
      alt=""
      onClick={dismiss}
      className="fixed z-[1500] cursor-pointer"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "80vw",
        maxHeight: "80vh",
        opacity: show ? 1 : 0,
        transition: "opacity 0.4s ease-in-out",
        pointerEvents: show ? "auto" : "none",
      }}
    />
  )
}
