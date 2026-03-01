"use client"

interface ParkingLotProps {
  carTop: number
  success: boolean
  visible: boolean
}

export function ParkingLot({ carTop, success, visible }: ParkingLotProps) {
  const stallW = 64
  const stallH = 100
  const cols = 5
  const targetCol = 2 // middle stall (0-indexed)

  return (
    <div className="mt-12 mb-8 flex flex-col items-center">
      <div
        className="relative overflow-hidden rounded-xl"
        style={{
          width: "100%",
          maxWidth: 420,
          height: 560,
          background: "#23252a",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* Asphalt texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.012) 1px, transparent 1px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.01) 1px, transparent 1px), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.008) 1px, transparent 1px)",
            backgroundSize: "6px 6px, 8px 8px, 10px 10px",
          }}
        />

        {/* "P" sign top */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          <div
            className="w-7 h-7 rounded flex items-center justify-center font-mono font-bold text-sm"
            style={{
              background: "rgba(66,133,244,0.9)",
              color: "#fff",
              boxShadow: "0 2px 8px rgba(66,133,244,0.3)",
            }}
          >
            P
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
            Parking
          </span>
        </div>

        {/* Lane markings - horizontal lines at top and bottom of stalls */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 80, width: stallW * cols + 20 }}>
          {/* Top horizontal line */}
          <div className="absolute left-0 right-0 h-[2px]" style={{ top: 0, background: "rgba(255,255,255,0.15)" }} />
          {/* Bottom horizontal line */}
          <div className="absolute left-0 right-0 h-[2px]" style={{ top: stallH, background: "rgba(255,255,255,0.15)" }} />

          {/* Vertical stall dividers */}
          {Array.from({ length: cols + 1 }).map((__, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: 10 + i * stallW,
                top: 0,
                width: 2,
                height: stallH,
                background: "rgba(255,255,255,0.15)",
              }}
            />
          ))}

          {/* Target stall highlight (the one you need to park in) */}
          <div
            className="absolute"
            style={{
              left: 10 + targetCol * stallW + 2,
              top: 2,
              width: stallW - 4,
              height: stallH - 4,
              border: "2px dashed rgba(232,200,48,0.5)",
              borderRadius: 4,
              boxShadow: "inset 0 0 20px rgba(232,200,48,0.05)",
            }}
          />
        </div>

        {/* Bottom row of stalls (parked cars) */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 380, width: stallW * cols + 20 }}>
          <div className="absolute left-0 right-0 h-[2px]" style={{ top: 0, background: "rgba(255,255,255,0.15)" }} />
          <div className="absolute left-0 right-0 h-[2px]" style={{ top: stallH, background: "rgba(255,255,255,0.15)" }} />
          {Array.from({ length: cols + 1 }).map((__, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: 10 + i * stallW,
                top: 0,
                width: 2,
                height: stallH,
                background: "rgba(255,255,255,0.15)",
              }}
            />
          ))}
          {/* Parked cars in bottom row (not all stalls filled) */}
          {[0, 1, 3, 4].map((col) => (
            <div
              key={col}
              className="absolute rounded"
              style={{
                left: 10 + col * stallW + 10,
                top: 15,
                width: stallW - 20,
                height: stallH - 30,
                background: col === 0 ? "rgba(100,100,110,0.5)" : col === 1 ? "rgba(70,80,100,0.5)" : col === 3 ? "rgba(90,70,70,0.5)" : "rgba(80,90,80,0.5)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: 5,
              }}
            />
          ))}
        </div>

        {/* Road lane arrows */}
        <svg className="absolute left-1/2 -translate-x-1/2" style={{ top: 210, width: 40, height: 140 }} viewBox="0 0 40 140">
          <line x1="20" y1="0" x2="20" y2="140" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="12,10" />
          {/* Arrow pointing down */}
          <polygon points="20,130 12,115 28,115" fill="rgba(255,255,255,0.1)" />
        </svg>

        {/* Success zone: yellow solid box, sized so car (height 80px) fits fully */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center transition-all duration-300"
          style={{
            top: 390,
            width: 56,
            height: 80,
            border: success ? "3px solid rgba(255,220,0,1)" : "3px solid rgba(232,200,48,0.95)",
            borderRadius: 6,
            background: success ? "rgba(255,220,0,0.2)" : "rgba(232,200,48,0.12)",
            boxShadow: success
              ? "0 0 16px rgba(255,220,0,0.5), inset 0 0 20px rgba(255,220,0,0.12)"
              : "inset 0 0 20px rgba(232,200,48,0.08)",
          }}
          aria-hidden
        >
          <span className="text-[9px] font-mono uppercase tracking-wider" style={{ color: success ? "rgba(255,220,0,0.9)" : "rgba(232,200,48,0.65)" }}>
            {success ? "PARKED" : "PARK HERE"}
          </span>
        </div>

        {/* The car you drive – visible in parking mode, moves with mic input */}
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-20 transition-all duration-300"
          style={{
            top: carTop,
            width: 48,
            height: 80,
            transition: "top 0.14s ease-out",
            opacity: visible ? 1 : 0,
            visibility: visible ? "visible" : "hidden",
            pointerEvents: visible ? "auto" : "none",
            boxShadow: success ? "0 0 0 3px rgba(255,220,0,0.95), 0 0 20px rgba(255,220,0,0.4)" : undefined,
            borderRadius: 8,
          }}
        >
          {/* Car body */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background: "linear-gradient(180deg, #3a3e48 0%, #2c2e34 50%, #36383e 100%)",
              border: success ? "2px solid rgba(255,220,0,0.95)" : "1px solid rgba(255,255,255,0.1)",
              boxShadow: success
                ? "0 4px 16px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 12px rgba(255,220,0,0.3)"
                : "0 4px 16px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          />
          {/* Windshield */}
          <div
            className="absolute left-2 right-2 rounded"
            style={{
              top: 10,
              height: 18,
              background: "rgba(100,120,160,0.3)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          />
          {/* Rear window */}
          <div
            className="absolute left-2.5 right-2.5 rounded-sm"
            style={{
              bottom: 12,
              height: 14,
              background: "rgba(100,120,160,0.2)",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          />
          {/* Headlights */}
          <div className="absolute top-1 left-1.5 w-2 h-2 rounded-full" style={{ background: "rgba(255,240,180,0.6)", boxShadow: "0 0 6px rgba(255,240,180,0.3)" }} />
          <div className="absolute top-1 right-1.5 w-2 h-2 rounded-full" style={{ background: "rgba(255,240,180,0.6)", boxShadow: "0 0 6px rgba(255,240,180,0.3)" }} />
          {/* Taillights */}
          <div className="absolute bottom-1 left-1.5 w-2 h-1.5 rounded-sm" style={{ background: "rgba(220,50,50,0.6)", boxShadow: "0 0 4px rgba(220,50,50,0.3)" }} />
          <div className="absolute bottom-1 right-1.5 w-2 h-1.5 rounded-sm" style={{ background: "rgba(220,50,50,0.6)", boxShadow: "0 0 4px rgba(220,50,50,0.3)" }} />
        </div>

        {/* Success: car + stall yellow border emphasis only; short toast if needed */}
        {visible && success && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-lg font-mono text-sm font-bold tracking-wider animate-in fade-in duration-300" style={{ background: "rgba(255,220,0,0.95)", color: "#1a1a1a", boxShadow: "0 4px 20px rgba(255,220,0,0.4)" }}>
            PARKED
          </div>
        )}
      </div>
    </div>
  )
}
