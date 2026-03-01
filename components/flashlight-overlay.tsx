"use client"

import { useEffect, useRef } from "react"

export function FlashlightOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = overlayRef.current
    if (!el) return

    const update = (x: number, y: number) => {
      el.style.setProperty("--mouse-x", `${x}px`)
      el.style.setProperty("--mouse-y", `${y}px`)
    }
    const handleMouse = (e: MouseEvent) => update(e.clientX, e.clientY)
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length) update(e.touches[0].clientX, e.touches[0].clientY)
    }

    update(window.innerWidth / 2, window.innerHeight / 2)
    document.addEventListener("mousemove", handleMouse)
    document.addEventListener("touchmove", handleTouch, { passive: true })
    return () => {
      document.removeEventListener("mousemove", handleMouse)
      document.removeEventListener("touchmove", handleTouch)
    }
  }, [])

  return (
    <div
      ref={overlayRef}
      className="flashlight-overlay"
      aria-hidden="true"
    />
  )
}
