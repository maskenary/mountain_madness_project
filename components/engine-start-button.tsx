"use client"

import { useState, useCallback, useRef, useEffect } from "react"

interface EngineStartButtonProps {
  /** Called with true when engine starts, false when it fails (50% chance). */
  onEngineStart?: (success: boolean) => void
}

export function EngineStartButton({ onEngineStart }: EngineStartButtonProps) {
  const [smokeActive, setSmokeActive] = useState(false)
  const roarRef = useRef<HTMLAudioElement | null>(null)
  const failRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    roarRef.current = new Audio("/engine-roar.mp3")
    failRef.current = new Audio("/engine-fail.mp3")
    return () => {
      roarRef.current?.pause()
      roarRef.current = null
      failRef.current?.pause()
      failRef.current = null
    }
  }, [])

  const handleClick = useCallback(() => {
    const success = Math.random() < 0.5 // 50% chance engine starts
    onEngineStart?.(success)

    if (success) {
      setSmokeActive(true)
      try {
        const audio = roarRef.current
        if (audio) {
          audio.currentTime = 0
          audio.play().catch(() => {})
        }
      } catch {
        // ignore
      }
      const t = setTimeout(() => setSmokeActive(false), 10500)
      return () => clearTimeout(t)
    } else {
      // 시동 실패: 실패음만 재생, 연기 없음, fuel/gear는 page에서 변경 없음
      try {
        const audio = failRef.current
        if (audio) {
          audio.currentTime = 0
          audio.play().catch(() => {})
        }
      } catch {
        // ignore
      }
    }
  }, [onEngineStart])

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="engine-start-btn"
        aria-label="Engine start - trigger smoke effect"
      >
        <span className="engine-start-btn-text">
          <span>ENGINE</span>
          <span>START</span>
          <span>STOP</span>
        </span>
      </button>
      {smokeActive && (
        <div className="smoke-effect" aria-hidden>
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="exhaust-smoke" />
          ))}
        </div>
      )}
    </>
  )
}
