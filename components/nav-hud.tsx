"use client"

import { useEffect, useState, useCallback, useMemo, useRef } from "react"

/* ── helpers: sample a cubic bezier at t ───────────────────────── */
function cubicBezier(
  t: number,
  p0: [number, number],
  p1: [number, number],
  p2: [number, number],
  p3: [number, number]
): [number, number] {
  const u = 1 - t
  return [
    u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
    u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1],
  ]
}
function cubicBezierTangent(
  t: number,
  p0: [number, number],
  p1: [number, number],
  p2: [number, number],
  p3: [number, number]
): [number, number] {
  const u = 1 - t
  return [
    3 * u * u * (p1[0] - p0[0]) + 6 * u * t * (p2[0] - p1[0]) + 3 * t * t * (p3[0] - p2[0]),
    3 * u * u * (p1[1] - p0[1]) + 6 * u * t * (p2[1] - p1[1]) + 3 * t * t * (p3[1] - p2[1]),
  ]
}

/* The road is made of 3 joined cubic bezier segments */
const SEG: [number, number][][] = [
  [[60, 8], [20, 30], [100, 55], [60, 80]],
  [[60, 80], [20, 105], [100, 125], [60, 150]],
  [[60, 150], [30, 168], [85, 182], [60, 195]],
]

function sampleRoad(progress: number): { x: number; y: number; angle: number } {
  const total = SEG.length
  const raw = Math.max(0, Math.min(progress * total, total - 1e-6))
  const idx = Math.min(Math.max(0, Math.floor(raw)), total - 1)
  const lt = raw - idx
  const seg = SEG[idx] ?? SEG[0]
  const [x, y] = cubicBezier(lt, seg[0], seg[1], seg[2], seg[3])
  const [dx, dy] = cubicBezierTangent(lt, seg[0], seg[1], seg[2], seg[3])
  const angle = Math.atan2(dy, dx) * (180 / Math.PI)
  return { x, y, angle }
}

/* Build the SVG d-string for the full road path */
function roadD(): string {
  return SEG.map((s, i) =>
    i === 0
      ? `M${s[0][0]},${s[0][1]} C${s[1][0]},${s[1][1]} ${s[2][0]},${s[2][1]} ${s[3][0]},${s[3][1]}`
      : `C${s[1][0]},${s[1][1]} ${s[2][0]},${s[2][1]} ${s[3][0]},${s[3][1]}`
  ).join(" ")
}

export function NavHud({ onReachEnd, lightOn = false }: { onReachEnd?: () => void; lightOn?: boolean }) {
  const [progress, setProgress] = useState(0)
  const [remainingLabel, setRemainingLabel] = useState("--")
  const reachedEndRef = useRef(false)

  const update = useCallback(() => {
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
    const scrollY = window.scrollY || document.documentElement.scrollTop
    const p = maxScroll > 0 ? Math.min(1, scrollY / maxScroll) : 0
    setProgress(p)

    const totalKm = (maxScroll / window.innerHeight) * 0.45
    const remainingKm = totalKm * (1 - p)

    if (p < 0.95) {
      reachedEndRef.current = false
    }
    if (remainingKm <= 0 || p >= 0.95) {
      setRemainingLabel("0 m")
      if (!reachedEndRef.current && onReachEnd) {
        reachedEndRef.current = true
        onReachEnd()
      }
    } else if (remainingKm < 1) {
      setRemainingLabel(`${(remainingKm * 1000).toFixed(0)} m`)
    } else {
      setRemainingLabel(`${remainingKm.toFixed(1)} km`)
    }
  }, [onReachEnd])

  useEffect(() => {
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [update])

  const d = useMemo(() => roadD(), [])
  const { x: ax, y: ay, angle } = sampleRoad(progress)

  return (
    <div
      className="fixed top-[25.75rem] left-24 z-[1001] pointer-events-none select-none"
      aria-hidden="true"
    >
      <div
        className="relative flex flex-col items-center rounded-2xl overflow-hidden"
          style={{
            width: 232,
            height: 502,
            background: "rgba(18,22,26,0.92)",
            border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Map area */}
        <div className="relative w-full flex-1 p-1">
          <svg
            viewBox="0 0 120 200"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Subtle grid */}
            {[40, 80, 120, 160].map((yy) => (
              <line key={`h${yy}`} x1="0" y1={yy} x2="120" y2={yy} stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" />
            ))}
            {[30, 60, 90].map((xx) => (
              <line key={`v${xx}`} x1={xx} y1="0" x2={xx} y2="200" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" />
            ))}

            {/* Side streets */}
            <line x1="5" y1="50" x2="42" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="3" strokeLinecap="round" />
            <line x1="78" y1="50" x2="115" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="3" strokeLinecap="round" />
            <line x1="5" y1="120" x2="38" y2="120" stroke="rgba(255,255,255,0.05)" strokeWidth="3" strokeLinecap="round" />
            <line x1="82" y1="120" x2="115" y2="120" stroke="rgba(255,255,255,0.05)" strokeWidth="3" strokeLinecap="round" />

            {/* Road border */}
            <path d={d} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
            {/* Road surface */}
            <path d={d} fill="none" stroke="rgba(50,55,65,0.9)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            {/* Center dashed line */}
            <path d={d} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" strokeDasharray="4,6" strokeLinecap="round" />

            {/* Traveled portion (blue glow) */}
            <path
              d={d}
              fill="none"
              stroke="rgba(66,133,244,0.45)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1000"
              strokeDashoffset={1000 - progress * 1000}
              style={{ transition: "stroke-dashoffset 0.15s ease-out" }}
            />

            {/* Destination pin */}
            <g transform="translate(60,195)">
              <circle r="4" fill="rgba(234,67,53,0.7)" />
              <circle r="1.8" fill="#ea4335" />
            </g>

            {/* Start dot */}
            <g transform="translate(60,8)">
              <circle r="2.5" fill="rgba(66,133,244,0.4)" />
              <circle r="1.2" fill="rgba(66,133,244,0.8)" />
            </g>

            {/* Navigation arrow: rotate to follow road curve tangent (default up → angle+90) */}
            <g
              transform={`translate(${ax},${ay}) rotate(${angle + 90})`}
              style={{ transition: "transform 0.15s ease-out" }}
            >
              {/* Glow */}
              <circle r="9" fill="rgba(66,133,244,0.1)" />
              {/* Arrow */}
              <path
                d="M0,-7 L5,5 L0,2 L-5,5 Z"
                fill="#4285F4"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="0.5"
              />
            </g>
          </svg>
        </div>

        {/* Bottom bar */}
        <div
          className="w-full flex items-center justify-between px-4 py-3 transition-colors duration-200"
          style={{
            background: "rgba(255,255,255,0.03)",
            borderTop: "1px solid rgba(255,255,255,0.14)",
          }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: progress < 1 ? "#4285F4" : "#34a853",
                boxShadow: `0 0 6px ${progress < 1 ? "rgba(66,133,244,0.6)" : "rgba(52,168,83,0.6)"}`,
              }}
            />
            <span
              className="text-sm font-mono font-medium tabular-nums tracking-tight"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              {remainingLabel}
            </span>
          </div>
          <span
            className="text-xs font-mono uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {progress >= 1 ? "Done" : "LEFT"}
          </span>
        </div>
      </div>
    </div>
  )
}
