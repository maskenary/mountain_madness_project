"use client"

import { useEffect, useRef } from "react"

interface FuelGaugeProps {
  /** 0 = Empty, 1 = Full */
  fuel: number
  /** Inactive needle style before engine start */
  started?: boolean
}

export function FuelGauge({ fuel, started = false }: FuelGaugeProps) {
  const clamped = Math.max(0, Math.min(1, fuel))
  const clampedRound = Math.round(clamped * 100) / 100
  const lowFuel = started && clamped > 0 && clamped < 0.2
  const alertAudioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    alertAudioRef.current = new Audio("/fuel-low-alert.mp3")
    return () => {
      alertAudioRef.current?.pause()
      alertAudioRef.current = null
    }
  }, [])

  useEffect(() => {
    const audio = alertAudioRef.current
    if (!audio) return
    if (lowFuel) {
      audio.currentTime = 0
      audio.loop = true
      audio.play().catch(() => {})
    } else {
      audio.pause()
      audio.currentTime = 0
    }
  }, [lowFuel])
  const cx = 110
  const cy = 110
  const r = 90
  const pathD = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`

  const needleAngle = -90 + clampedRound * 180

  return (
    <div
      className="fixed top-[9rem] left-[calc(50%-37.5rem)] -translate-x-1/2 z-[1001] pointer-events-none select-none"
      aria-hidden="true"
      role="img"
      aria-label={`Fuel level ${Math.round(clamped * 100)}%`}
    >
      <div className="relative w-[200px] h-[120px]">
        <svg
          viewBox="0 0 220 125"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="fuel-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background arc */}
          <path
            d={pathD}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Track arc */}
          <path
            d={pathD}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Tick marks */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
            const angle = Math.PI + (i / 8) * Math.PI
            const x1 = cx + (r - 8) * Math.cos(angle)
            const y1 = cy + (r - 8) * Math.sin(angle)
            const x2 = cx + r * Math.cos(angle)
            const y2 = cy + r * Math.sin(angle)
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )
          })}

          {/* F (Full) - left end, needle points here when tank is full */}
          <text
            x={cx - r + 12}
            y={cy + 6}
            fill="rgba(255,255,255,0.95)"
            fontSize="14"
            fontFamily="var(--font-mono, monospace)"
            fontWeight="700"
            style={{ paintOrder: "stroke", stroke: "rgba(0,0,0,0.8)", strokeWidth: 2 }}
          >
            F
          </text>
          {/* E (Empty) - right end, needle moves here as fuel drops */}
          <text
            x={cx + r - 14}
            y={cy + 6}
            fill="rgba(255,255,255,0.95)"
            fontSize="14"
            fontFamily="var(--font-mono, monospace)"
            fontWeight="700"
            style={{ paintOrder: "stroke", stroke: "rgba(0,0,0,0.8)", strokeWidth: 2 }}
          >
            E
          </text>

          {/* Center bottom fuel icon (small pump) */}
          <g transform={`translate(${cx},${cy + 25})`}>
            <path
              d="M -4 -8 L -4 4 L 0 8 L 4 4 L 4 -8 L 2 -8 L 2 2 L 0 5 L -2 2 L -2 -8 Z M 0 -4 L 0 -8 M -2 -6 L 2 -6"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>

        {/* Needle - moves from F to E as fuel decreases */}
        <div
          className="absolute left-1/2 bottom-0 origin-bottom"
          style={{
            marginLeft: "-2px",
            width: 4,
            height: 70,
            transform: `rotate(${needleAngle}deg)`,
            transition: "transform 0.4s ease-out",
            willChange: "transform",
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: started && clamped > 0 ? "linear-gradient(to top, #b91c1c, #ef4444)" : "linear-gradient(to top, #991b1b, #dc2626)",
              boxShadow: started && clamped > 0 ? "0 0 6px rgba(220,50,50,0.5)" : "0 0 4px rgba(220,50,50,0.3)",
              border: "1px solid rgba(255,255,255,0.4)",
            }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2.5 rounded-full"
            style={{
              background: started && clamped > 0 ? "#fca5a5" : "#ef4444",
            }}
          />
        </div>

        {/* Needle pivot (white circle) */}
        <div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full border-2"
          style={{
            background: "rgba(255,255,255,0.2)",
            borderColor: "rgba(255,255,255,0.4)",
          }}
        />
      </div>

      {/* Low fuel warning: yellow pump icon + alert sound (play/stop in useEffect) */}
      {lowFuel && (
        <div
          className="absolute -top-1 -left-1 w-8 h-8 flex items-center justify-center rounded-full"
          style={{
            background: "rgba(250,200,0,0.25)",
            boxShadow: "0 0 12px rgba(250,200,0,0.5)",
          }}
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="rgba(250,204,21,0.95)">
            <path d="M19 8c0-.62-.25-1.18-.65-1.57l-.07-.07-3.5-3.5-1.42 1.42 3.5 3.5.07.07c.39.4.65.95.65 1.58V8h1v10H4V6h1v2c0 .55.45 1 1 1s1-.45 1-1V5c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h1V8h-1z" />
          </svg>
        </div>
      )}
    </div>
  )
}
