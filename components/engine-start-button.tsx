"use client"

import { useState, useCallback } from "react"

interface EngineStartButtonProps {
  onEngineStart?: () => void
}

export function EngineStartButton({ onEngineStart }: EngineStartButtonProps) {
  const [smokeActive, setSmokeActive] = useState(false)

  const handleClick = useCallback(() => {
    onEngineStart?.()
    setSmokeActive(true)
    const t = setTimeout(() => setSmokeActive(false), 10500)
    return () => clearTimeout(t)
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
