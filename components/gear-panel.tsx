"use client"

import { useCallback, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type Gear = "R" | "N" | "D"

const GEAR_SHIFT_SOUND_DURATION_MS = 2500

interface GearPanelProps {
  gear: Gear
  onGearChange: (g: Gear) => void
  movingLightOn: boolean
  fuelLocked?: boolean
}

const gears: Gear[] = ["R", "N", "D"]

export function GearPanel({ gear, onGearChange, movingLightOn, fuelLocked = false }: GearPanelProps) {
  const gearShiftAudioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    gearShiftAudioRef.current = new Audio("/gear-shift.mp3")
    return () => {
      gearShiftAudioRef.current?.pause()
      gearShiftAudioRef.current = null
    }
  }, [])

  const playGearShiftSound = useCallback(() => {
    const audio = gearShiftAudioRef.current
    if (!audio) return
    audio.currentTime = 0
    audio.play().catch(() => {})
    const t = setTimeout(() => {
      audio.pause()
      audio.currentTime = 0
    }, GEAR_SHIFT_SOUND_DURATION_MS)
    return () => clearTimeout(t)
  }, [])

  const handleGearClick = useCallback(
    (g: Gear) => {
      if (g !== gear) playGearShiftSound()
      onGearChange(g)
    },
    [gear, onGearChange, playGearShiftSound]
  )
  return (
    <div
      className={cn("fixed bottom-6 z-[1002] -translate-x-1/2", fuelLocked && "pointer-events-none opacity-75")}
      style={{ left: "calc(100vw - 188px)" }}
      role="group"
      aria-label="Vroom scroll gear"
      aria-disabled={fuelLocked}
    >
      <div
        className="relative flex flex-col items-center gap-4 py-5 px-3 rounded-2xl"
        style={{
          background: "linear-gradient(180deg, rgba(30,32,38,0.95) 0%, rgba(22,24,28,0.98) 100%)",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05), 0 0 0 1px rgba(0,0,0,0.3)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Status indicator light - light 켜지면 글씨도 보임 */}
        <div className="relative z-10 flex items-center justify-center w-5 h-5">
          <div
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-200",
              movingLightOn && gear === "D" && "scale-110",
              movingLightOn && gear === "R" && "scale-110"
            )}
            style={{
              background: movingLightOn
                ? gear === "D"
                  ? "#22c55e"
                  : gear === "R"
                    ? "#ef4444"
                    : "rgba(255,255,255,0.15)"
                : "rgba(255,255,255,0.1)",
              boxShadow: movingLightOn
                ? gear === "D"
                  ? "0 0 12px rgba(34,197,94,0.7), 0 0 4px rgba(34,197,94,0.4)"
                  : gear === "R"
                    ? "0 0 12px rgba(239,68,68,0.7), 0 0 4px rgba(239,68,68,0.4)"
                    : "none"
                : "none",
            }}
          />
          {/* Outer ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: `1px solid ${movingLightOn ? (gear === "D" ? "rgba(34,197,94,0.3)" : gear === "R" ? "rgba(239,68,68,0.3)" : "rgba(255,255,255,0.06)") : "rgba(255,255,255,0.06)"}`,
            }}
          />
        </div>

        {/* Gear selector track */}
        <div className="relative flex flex-col items-center gap-1">
          {/* Track line behind buttons */}
          <div
            className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2"
            style={{ background: "rgba(255,255,255,0.14)" }}
          />

          {gears.map((g) => {
            const isSelected = gear === g
            const isDrive = g === "D" && isSelected
            const isReverse = g === "R" && isSelected

            return (
              <button
                key={g}
                type="button"
                onClick={() => handleGearClick(g)}
                aria-pressed={isSelected}
                className={cn(
                "relative z-10 w-12 h-12 flex items-center justify-center rounded-xl",
                "font-mono text-xl font-semibold tracking-wider",
                  "transition-all duration-200 ease-out cursor-pointer",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
                style={{
                  color: isDrive
                    ? "#22c55e"
                    : isReverse
                      ? "#ef4444"
                      : isSelected
                        ? "rgba(255,255,255,0.95)"
                        : "rgba(255,255,255,0.6)",
                  background: isDrive
                    ? "rgba(34,197,94,0.1)"
                    : isReverse
                      ? "rgba(239,68,68,0.1)"
                      : isSelected
                        ? "rgba(255,255,255,0.08)"
                        : "transparent",
                  border: isDrive
                    ? "1px solid rgba(34,197,94,0.3)"
                    : isReverse
                      ? "1px solid rgba(239,68,68,0.3)"
                      : isSelected
                        ? "1px solid rgba(255,255,255,0.15)"
                        : "1px solid transparent",
                  boxShadow: isDrive
                    ? "0 0 20px rgba(34,197,94,0.15), inset 0 1px 0 rgba(34,197,94,0.1)"
                    : isReverse
                      ? "0 0 20px rgba(239,68,68,0.15), inset 0 1px 0 rgba(239,68,68,0.1)"
                      : isSelected
                        ? "inset 0 1px 0 rgba(255,255,255,0.05)"
                        : "none",
                }}
              >
                {g}
              </button>
            )
          })}
        </div>

        {/* Label - 라이트 없어도 잘 보임 */}
        <div
          className="text-[8px] font-mono tracking-[0.2em] uppercase"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          GEAR
        </div>
      </div>
    </div>
  )
}
