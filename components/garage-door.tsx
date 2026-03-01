"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronUp } from "lucide-react"

const DOOR_OPEN_SOUND_THRESHOLD = 20

export function GarageDoor() {
  const doorRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const startY = useRef(0)
  const startOffset = useRef(0)
  const playedOpenRef = useRef(false)
  const doorOpenAudioRef = useRef<HTMLAudioElement | null>(null)

  const maxOffset = useCallback(() => {
    return typeof window !== "undefined" ? window.innerHeight : 0
  }, [])

  useEffect(() => {
    doorOpenAudioRef.current = new Audio("/door-open.mp3")
    return () => {
      doorOpenAudioRef.current?.pause()
      doorOpenAudioRef.current = null
    }
  }, [])

  const setDoorTransform = useCallback(
    (px: number) => {
      const max = maxOffset()
      const clamped = Math.max(0, Math.min(px, max))
      if (clamped <= 0) playedOpenRef.current = false
      if (clamped > DOOR_OPEN_SOUND_THRESHOLD && !playedOpenRef.current) {
        playedOpenRef.current = true
        try {
          const audio = doorOpenAudioRef.current
          if (audio) {
            audio.currentTime = 0
            audio.play().catch(() => {})
          }
        } catch {
          // ignore
        }
      }
      setOffset(clamped)
      if (clamped >= max * 0.99) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    },
    [maxOffset]
  )

  const startDrag = useCallback(
    (clientY: number) => {
      setIsDragging(true)
      setIsOpen(false)
      startY.current = clientY
      startOffset.current = offset
      if (doorRef.current) {
        doorRef.current.style.transition = "none"
      }
    },
    [offset]
  )

  const moveDrag = useCallback(
    (clientY: number) => {
      if (!isDragging) return
      const delta = startY.current - clientY
      setDoorTransform(startOffset.current + delta)
    },
    [isDragging, setDoorTransform]
  )

  const endDrag = useCallback(() => {
    if (!isDragging) return
    setIsDragging(false)
    if (doorRef.current) {
      doorRef.current.style.transition = ""
    }
    const threshold = maxOffset() * 0.4
    if (offset > threshold) {
      setIsOpen(true)
      setDoorTransform(maxOffset())
    } else {
      setDoorTransform(0)
    }
  }, [isDragging, offset, maxOffset, setDoorTransform])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => moveDrag(e.clientY)
    const handleMouseUp = () => endDrag()
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length) {
        e.preventDefault()
        moveDrag(e.touches[0].clientY)
      }
    }
    const handleTouchEnd = () => endDrag()

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove, { passive: false })
    document.addEventListener("touchend", handleTouchEnd)
    document.addEventListener("touchcancel", handleTouchEnd)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
      document.removeEventListener("touchcancel", handleTouchEnd)
    }
  }, [moveDrag, endDrag, isDragging])

  useEffect(() => {
    const handleResize = () => {
      if (offset >= maxOffset()) setDoorTransform(maxOffset())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [offset, maxOffset, setDoorTransform])

  return (
    <div
      ref={doorRef}
      className="fixed inset-0 z-[1100] will-change-transform"
      style={{
        transform: `translateY(${-offset}px)`,
        pointerEvents: isOpen ? "none" : "auto",
        transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
      }}
      aria-hidden={isOpen}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/garagedoor.avif"
        alt=""
        className="block w-full h-full object-cover object-top pointer-events-none"
      />

      {/* Drag handle */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 flex flex-col items-center justify-center gap-3 cursor-grab active:cursor-grabbing select-none"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
        }}
        onMouseDown={(e) => {
          e.preventDefault()
          startDrag(e.clientY)
        }}
        onTouchStart={(e) => {
          if (e.touches.length) startDrag(e.touches[0].clientY)
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <ChevronUp className="w-5 h-5 text-foreground/70 animate-bounce" />
          <span
            className="text-sm font-sans tracking-[0.15em] uppercase text-foreground/60"
          >
            Drag up to enter
          </span>
        </div>
        {/* Handle bar */}
        <div className="w-12 h-1 rounded-full bg-foreground/30" />
      </div>
    </div>
  )
}
