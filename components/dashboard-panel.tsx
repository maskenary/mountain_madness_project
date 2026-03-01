"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

type Gear = "R" | "N" | "D"

interface DashboardPanelProps {
  gear: Gear
  onGearChange: (g: Gear) => void
  movingLightOn: boolean
}

const RPM_TICKS = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const gears: Gear[] = ["R", "N", "D"]

export const DashboardPanel = forwardRef<HTMLDivElement, DashboardPanelProps>(
  function DashboardPanel({ gear, onGearChange, movingLightOn }, ref) {
    return (
      <div
        className="fixed left-4 bottom-4 z-[1001] select-none"
        aria-label="Dashboard"
      >
        <div
          className="relative flex flex-col items-center rounded-2xl overflow-hidden"
          style={{
            width: 200,
            background: "linear-gradient(180deg, rgba(24,26,30,0.96) 0%, rgba(18,20,24,0.98) 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 12px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
            backdropFilter: "blur(24px)",
          }}
        >
          {/* RPM Gauge Section */}
          <div className="relative w-full pointer-events-none" style={{ height: 130, padding: "12px 10px 0" }}>
            <svg
              viewBox="0 0 180 105"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background arc */}
              <path
                d="M 15 95 A 75 75 0 0 1 165 95"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="12"
                strokeLinecap="round"
              />
              {/* Track arc */}
              <path
                d="M 15 95 A 75 75 0 0 1 165 95"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Redline zone */}
              <path
                d="M 132 22 A 75 75 0 0 1 165 95"
                fill="none"
                stroke="rgba(220,50,50,0.25)"
                strokeWidth="10"
                strokeLinecap="round"
              />

              {/* Tick marks + labels */}
              {RPM_TICKS.map((i) => {
                const angle = Math.PI + (i / 8) * Math.PI
                const cx = 90
                const cy = 95
                const r1 = 64
                const r2 = 76
                const x1 = cx + r1 * Math.cos(angle)
                const y1 = cy + r1 * Math.sin(angle)
                const x2 = cx + r2 * Math.cos(angle)
                const y2 = cy + r2 * Math.sin(angle)
                const isRedline = i >= 6
                return (
                  <g key={i}>
                    <line
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke={isRedline ? "rgba(220,50,50,0.8)" : "rgba(255,255,255,0.35)"}
                      strokeWidth={i % 2 === 0 ? "2" : "1.2"}
                      strokeLinecap="round"
                    />
                    {i % 2 === 0 && (
                      <text
                        x={cx + (r1 - 14) * Math.cos(angle)}
                        y={cy + (r1 - 14) * Math.sin(angle)}
                        fill={isRedline ? "rgba(220,50,50,0.85)" : "rgba(255,255,255,0.45)"}
                        fontSize="10"
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
              <circle cx="90" cy="95" r="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <circle cx="90" cy="95" r="3" fill="rgba(255,255,255,0.2)" />

              {/* RPM label */}
              <text x="90" y="85" fill="rgba(255,255,255,0.25)" fontSize="7" fontFamily="var(--font-mono, monospace)" textAnchor="middle" letterSpacing="0.15em">
                RPM x1000
              </text>
            </svg>

            {/* Needle (positioned over the SVG) */}
            <div
              ref={ref}
              className="absolute"
              style={{
                left: "50%",
                bottom: "22px",
                width: "3px",
                height: "60px",
                marginLeft: "-1.5px",
                transformOrigin: "50% 100%",
                transform: "rotate(-90deg)",
                transition: "transform 0.08s ease-out",
              }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(to top, #dc3232, #ff6b6b)",
                  boxShadow: "0 0 8px rgba(220,50,50,0.5)",
                }}
              />
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-2 rounded-full"
                style={{ background: "#ff8888" }}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="w-3/4 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />

          {/* Gear Selector Section */}
          <div className="flex flex-col items-center gap-2 py-3 px-3">
            {/* Status light */}
            <div className="relative flex items-center justify-center w-4 h-4 mb-0.5">
              <div
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-200",
                  movingLightOn && gear === "D" && "scale-110",
                  movingLightOn && gear === "R" && "scale-110"
                )}
                style={{
                  background: movingLightOn
                    ? gear === "D" ? "#22c55e" : gear === "R" ? "#ef4444" : "rgba(255,255,255,0.12)"
                    : "rgba(255,255,255,0.08)",
                  boxShadow: movingLightOn
                    ? gear === "D"
                      ? "0 0 10px rgba(34,197,94,0.7), 0 0 3px rgba(34,197,94,0.4)"
                      : gear === "R"
                        ? "0 0 10px rgba(239,68,68,0.7), 0 0 3px rgba(239,68,68,0.4)"
                        : "none"
                    : "none",
                }}
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: `1px solid ${movingLightOn ? (gear === "D" ? "rgba(34,197,94,0.25)" : gear === "R" ? "rgba(239,68,68,0.25)" : "rgba(255,255,255,0.05)") : "rgba(255,255,255,0.05)"}`,
                }}
              />
            </div>

            {/* Gear buttons - horizontal */}
            <div className="flex items-center gap-1.5">
              {gears.map((g) => {
                const isSelected = gear === g
                const isDrive = g === "D" && isSelected
                const isReverse = g === "R" && isSelected

                return (
                  <button
                    key={g}
                    type="button"
                    onClick={() => onGearChange(g)}
                    aria-pressed={isSelected}
                    className={cn(
                      "relative z-10 w-11 h-11 flex items-center justify-center rounded-lg",
                      "font-mono text-sm font-semibold tracking-wider",
                      "transition-all duration-200 ease-out cursor-pointer",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    )}
                    style={{
                      color: isDrive ? "#22c55e" : isReverse ? "#ef4444" : isSelected ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.28)",
                      background: isDrive ? "rgba(34,197,94,0.1)" : isReverse ? "rgba(239,68,68,0.1)" : isSelected ? "rgba(255,255,255,0.07)" : "transparent",
                      border: isDrive ? "1px solid rgba(34,197,94,0.3)" : isReverse ? "1px solid rgba(239,68,68,0.3)" : isSelected ? "1px solid rgba(255,255,255,0.12)" : "1px solid transparent",
                      boxShadow: isDrive
                        ? "0 0 16px rgba(34,197,94,0.12)"
                        : isReverse
                          ? "0 0 16px rgba(239,68,68,0.12)"
                          : "none",
                    }}
                  >
                    {g}
                  </button>
                )
              })}
            </div>

            {/* Label */}
            <div className="text-[7px] font-mono tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
              GEAR
            </div>
          </div>
        </div>
      </div>
    )
  }
)
