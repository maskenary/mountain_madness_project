"use client"

import { forwardRef } from "react"

const RPM_TICKS = [0, 1, 2, 3, 4, 5, 6, 7, 8]

export const RpmGauge = forwardRef<HTMLDivElement>(function RpmGauge(_, ref) {
  return (
    <div
      className="fixed right-3 bottom-[320px] z-[1001] pointer-events-none select-none"
      aria-hidden="true"
    >
      <div className="relative w-[352px] h-[200px]">
        <svg
          viewBox="0 0 220 125"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background arc */}
          <path
            d="M 20 110 A 90 90 0 0 1 200 110"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          {/* Track arc */}
          <path
            d="M 20 110 A 90 90 0 0 1 200 110"
            fill="none"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Redline zone (last ~25%) */}
          <path
            d="M 155 25 A 90 90 0 0 1 200 110"
            fill="none"
            stroke="rgba(220,50,50,0.3)"
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* Tick marks + labels */}
          {RPM_TICKS.map((i) => {
            const angle = Math.PI + (i / 8) * Math.PI
            const cx = 110
            const cy = 110
            const r1 = 78
            const r2 = 92
            const round = (n: number) => Math.round(n * 100) / 100
            const x1 = round(cx + r1 * Math.cos(angle))
            const y1 = round(cy + r1 * Math.sin(angle))
            const x2 = round(cx + r2 * Math.cos(angle))
            const y2 = round(cy + r2 * Math.sin(angle))
            const isRedline = i >= 6
            return (
              <g key={i}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isRedline ? "rgba(220,50,50,0.8)" : "rgba(255,255,255,0.6)"}
                  strokeWidth={i % 2 === 0 ? "2.5" : "1.5"}
                  strokeLinecap="round"
                />
                {i % 2 === 0 && (
                  <text
                    x={round(cx + (r1 - 16) * Math.cos(angle))}
                    y={round(cy + (r1 - 16) * Math.sin(angle))}
                    fill={isRedline ? "rgba(220,50,50,0.9)" : "rgba(255,255,255,0.75)"}
                    fontSize="12"
                    fontFamily="var(--font-mono, monospace)"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontWeight="600"
                  >
                    {i}
                  </text>
                )}
              </g>
            )
          })}

          {/* Center hub */}
          <circle cx="110" cy="110" r="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" />
          <circle cx="110" cy="110" r="4" fill="rgba(255,255,255,0.4)" />
        </svg>

        {/* Needle */}
        <div
          ref={ref}
          className="absolute"
          style={{
            left: "176px",
            bottom: "25px",
            width: "5.5px",
            height: "116px",
            marginLeft: "-2.75px",
            transformOrigin: "50% 100%",
            transform: "rotate(-90deg)",
            transition: "transform 0.08s ease-out",
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(to top, #dc3232, #ff6b6b)",
              boxShadow: "0 0 10px rgba(220,50,50,0.5)",
            }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-2.5 rounded-full"
            style={{ background: "#ff8888" }}
          />
        </div>

        {/* RPM label */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[13px] font-mono tracking-[0.2em] uppercase"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          {"RPM x1000"}
        </div>
      </div>
    </div>
  )
})
