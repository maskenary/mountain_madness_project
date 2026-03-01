(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/garage-door.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GarageDoor",
    ()=>GarageDoor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.564.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const DOOR_OPEN_SOUND_THRESHOLD = 20;
function GarageDoor() {
    _s();
    const doorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [offset, setOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const startY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const startOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const playedOpenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const doorOpenAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const maxOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GarageDoor.useCallback[maxOffset]": ()=>{
            return ("TURBOPACK compile-time truthy", 1) ? window.innerHeight : "TURBOPACK unreachable";
        }
    }["GarageDoor.useCallback[maxOffset]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GarageDoor.useEffect": ()=>{
            doorOpenAudioRef.current = new Audio("/door-open.mp3");
            return ({
                "GarageDoor.useEffect": ()=>{
                    doorOpenAudioRef.current?.pause();
                    doorOpenAudioRef.current = null;
                }
            })["GarageDoor.useEffect"];
        }
    }["GarageDoor.useEffect"], []);
    const setDoorTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GarageDoor.useCallback[setDoorTransform]": (px)=>{
            const max = maxOffset();
            const clamped = Math.max(0, Math.min(px, max));
            if (clamped <= 0) playedOpenRef.current = false;
            if (clamped > DOOR_OPEN_SOUND_THRESHOLD && !playedOpenRef.current) {
                playedOpenRef.current = true;
                try {
                    const audio = doorOpenAudioRef.current;
                    if (audio) {
                        audio.currentTime = 0;
                        audio.play().catch({
                            "GarageDoor.useCallback[setDoorTransform]": ()=>{}
                        }["GarageDoor.useCallback[setDoorTransform]"]);
                    }
                } catch  {
                // ignore
                }
            }
            setOffset(clamped);
            if (clamped >= max * 0.99) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        }
    }["GarageDoor.useCallback[setDoorTransform]"], [
        maxOffset
    ]);
    const startDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GarageDoor.useCallback[startDrag]": (clientY)=>{
            setIsDragging(true);
            setIsOpen(false);
            startY.current = clientY;
            startOffset.current = offset;
            if (doorRef.current) {
                doorRef.current.style.transition = "none";
            }
        }
    }["GarageDoor.useCallback[startDrag]"], [
        offset
    ]);
    const moveDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GarageDoor.useCallback[moveDrag]": (clientY)=>{
            if (!isDragging) return;
            const delta = startY.current - clientY;
            setDoorTransform(startOffset.current + delta);
        }
    }["GarageDoor.useCallback[moveDrag]"], [
        isDragging,
        setDoorTransform
    ]);
    const endDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GarageDoor.useCallback[endDrag]": ()=>{
            if (!isDragging) return;
            setIsDragging(false);
            if (doorRef.current) {
                doorRef.current.style.transition = "";
            }
            const threshold = maxOffset() * 0.4;
            if (offset > threshold) {
                setIsOpen(true);
                setDoorTransform(maxOffset());
            } else {
                setDoorTransform(0);
            }
        }
    }["GarageDoor.useCallback[endDrag]"], [
        isDragging,
        offset,
        maxOffset,
        setDoorTransform
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GarageDoor.useEffect": ()=>{
            const handleMouseMove = {
                "GarageDoor.useEffect.handleMouseMove": (e)=>moveDrag(e.clientY)
            }["GarageDoor.useEffect.handleMouseMove"];
            const handleMouseUp = {
                "GarageDoor.useEffect.handleMouseUp": ()=>endDrag()
            }["GarageDoor.useEffect.handleMouseUp"];
            const handleTouchMove = {
                "GarageDoor.useEffect.handleTouchMove": (e)=>{
                    if (isDragging && e.touches.length) {
                        e.preventDefault();
                        moveDrag(e.touches[0].clientY);
                    }
                }
            }["GarageDoor.useEffect.handleTouchMove"];
            const handleTouchEnd = {
                "GarageDoor.useEffect.handleTouchEnd": ()=>endDrag()
            }["GarageDoor.useEffect.handleTouchEnd"];
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
            document.addEventListener("mouseleave", handleMouseUp);
            document.addEventListener("touchmove", handleTouchMove, {
                passive: false
            });
            document.addEventListener("touchend", handleTouchEnd);
            document.addEventListener("touchcancel", handleTouchEnd);
            return ({
                "GarageDoor.useEffect": ()=>{
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                    document.removeEventListener("mouseleave", handleMouseUp);
                    document.removeEventListener("touchmove", handleTouchMove);
                    document.removeEventListener("touchend", handleTouchEnd);
                    document.removeEventListener("touchcancel", handleTouchEnd);
                }
            })["GarageDoor.useEffect"];
        }
    }["GarageDoor.useEffect"], [
        moveDrag,
        endDrag,
        isDragging
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GarageDoor.useEffect": ()=>{
            const handleResize = {
                "GarageDoor.useEffect.handleResize": ()=>{
                    if (offset >= maxOffset()) setDoorTransform(maxOffset());
                }
            }["GarageDoor.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "GarageDoor.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["GarageDoor.useEffect"];
        }
    }["GarageDoor.useEffect"], [
        offset,
        maxOffset,
        setDoorTransform
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: doorRef,
        className: "fixed inset-0 z-[1100] will-change-transform",
        style: {
            transform: `translateY(${-offset}px)`,
            pointerEvents: isOpen ? "none" : "auto",
            transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
        },
        "aria-hidden": isOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/images/garagedoor.avif",
                alt: "",
                className: "block w-full h-full object-cover object-top pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/garage-door.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-28 flex flex-col items-center justify-center gap-3 cursor-grab active:cursor-grabbing select-none",
                style: {
                    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
                },
                onMouseDown: (e)=>{
                    e.preventDefault();
                    startDrag(e.clientY);
                },
                onTouchStart: (e)=>{
                    if (e.touches.length) startDrag(e.touches[0].clientY);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$564$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                className: "w-5 h-5 text-foreground/70 animate-bounce"
                            }, void 0, false, {
                                fileName: "[project]/components/garage-door.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-sans tracking-[0.15em] uppercase text-foreground/60",
                                children: "Drag up to enter"
                            }, void 0, false, {
                                fileName: "[project]/components/garage-door.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/garage-door.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-1 rounded-full bg-foreground/30"
                    }, void 0, false, {
                        fileName: "[project]/components/garage-door.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/garage-door.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/garage-door.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s(GarageDoor, "B/je/4minLeyGdm+hdUQhWImaRY=");
_c = GarageDoor;
var _c;
__turbopack_context__.k.register(_c, "GarageDoor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/flashlight-overlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlashlightOverlay",
    ()=>FlashlightOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function FlashlightOverlay() {
    _s();
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlashlightOverlay.useEffect": ()=>{
            const el = overlayRef.current;
            if (!el) return;
            const update = {
                "FlashlightOverlay.useEffect.update": (x, y)=>{
                    el.style.setProperty("--mouse-x", `${x}px`);
                    el.style.setProperty("--mouse-y", `${y}px`);
                }
            }["FlashlightOverlay.useEffect.update"];
            const handleMouse = {
                "FlashlightOverlay.useEffect.handleMouse": (e)=>update(e.clientX, e.clientY)
            }["FlashlightOverlay.useEffect.handleMouse"];
            const handleTouch = {
                "FlashlightOverlay.useEffect.handleTouch": (e)=>{
                    if (e.touches.length) update(e.touches[0].clientX, e.touches[0].clientY);
                }
            }["FlashlightOverlay.useEffect.handleTouch"];
            update(window.innerWidth / 2, window.innerHeight / 2);
            document.addEventListener("mousemove", handleMouse);
            document.addEventListener("touchmove", handleTouch, {
                passive: true
            });
            return ({
                "FlashlightOverlay.useEffect": ()=>{
                    document.removeEventListener("mousemove", handleMouse);
                    document.removeEventListener("touchmove", handleTouch);
                }
            })["FlashlightOverlay.useEffect"];
        }
    }["FlashlightOverlay.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: overlayRef,
        className: "flashlight-overlay",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/components/flashlight-overlay.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(FlashlightOverlay, "rmj6vZ+Vy6O1wOWphXugz2fiTMw=");
_c = FlashlightOverlay;
var _c;
__turbopack_context__.k.register(_c, "FlashlightOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/rpm-gauge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RpmGauge",
    ()=>RpmGauge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const RPM_TICKS = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
];
const RpmGauge = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = function RpmGauge(_, ref) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed right-3 bottom-[320px] z-[1001] pointer-events-none select-none",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-[352px] h-[200px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 220 125",
                    className: "absolute inset-0 w-full h-full",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 20 110 A 90 90 0 0 1 200 110",
                            fill: "none",
                            stroke: "rgba(255,255,255,0.15)",
                            strokeWidth: "14",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/rpm-gauge.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 20 110 A 90 90 0 0 1 200 110",
                            fill: "none",
                            stroke: "rgba(255,255,255,0.22)",
                            strokeWidth: "3",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/rpm-gauge.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 155 25 A 90 90 0 0 1 200 110",
                            fill: "none",
                            stroke: "rgba(220,50,50,0.3)",
                            strokeWidth: "12",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/rpm-gauge.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        RPM_TICKS.map((i)=>{
                            const angle = Math.PI + i / 8 * Math.PI;
                            const cx = 110;
                            const cy = 110;
                            const r1 = 78;
                            const r2 = 92;
                            const round = (n)=>Math.round(n * 100) / 100;
                            const x1 = round(cx + r1 * Math.cos(angle));
                            const y1 = round(cy + r1 * Math.sin(angle));
                            const x2 = round(cx + r2 * Math.cos(angle));
                            const y2 = round(cy + r2 * Math.sin(angle));
                            const isRedline = i >= 6;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: x1,
                                        y1: y1,
                                        x2: x2,
                                        y2: y2,
                                        stroke: isRedline ? "rgba(220,50,50,0.8)" : "rgba(255,255,255,0.6)",
                                        strokeWidth: i % 2 === 0 ? "2.5" : "1.5",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/rpm-gauge.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this),
                                    i % 2 === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: round(cx + (r1 - 16) * Math.cos(angle)),
                                        y: round(cy + (r1 - 16) * Math.sin(angle)),
                                        fill: isRedline ? "rgba(220,50,50,0.9)" : "rgba(255,255,255,0.75)",
                                        fontSize: "12",
                                        fontFamily: "var(--font-mono, monospace)",
                                        textAnchor: "middle",
                                        dominantBaseline: "central",
                                        fontWeight: "600",
                                        children: i
                                    }, void 0, false, {
                                        fileName: "[project]/components/rpm-gauge.tsx",
                                        lineNumber: 69,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/rpm-gauge.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "110",
                            cy: "110",
                            r: "8",
                            fill: "rgba(255,255,255,0.15)",
                            stroke: "rgba(255,255,255,0.28)",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/components/rpm-gauge.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "110",
                            cy: "110",
                            r: "4",
                            fill: "rgba(255,255,255,0.4)"
                        }, void 0, false, {
                            fileName: "[project]/components/rpm-gauge.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/rpm-gauge.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: "absolute",
                    style: {
                        left: "176px",
                        bottom: "25px",
                        width: "5.5px",
                        height: "116px",
                        marginLeft: "-2.75px",
                        transformOrigin: "50% 100%",
                        transform: "rotate(-90deg)",
                        transition: "transform 0.22s ease-out"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-full",
                            style: {
                                background: "linear-gradient(to top, #dc3232, #ff6b6b)",
                                boxShadow: "0 0 10px rgba(220,50,50,0.5)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/rpm-gauge.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-2.5 rounded-full",
                            style: {
                                background: "#ff8888"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/rpm-gauge.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/rpm-gauge.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-1/2 -translate-x-1/2 text-[13px] font-mono tracking-[0.2em] uppercase",
                    style: {
                        color: "rgba(255,255,255,0.7)"
                    },
                    children: "RPM x1000"
                }, void 0, false, {
                    fileName: "[project]/components/rpm-gauge.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/rpm-gauge.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/rpm-gauge.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
});
_c1 = RpmGauge;
var _c, _c1;
__turbopack_context__.k.register(_c, "RpmGauge$forwardRef");
__turbopack_context__.k.register(_c1, "RpmGauge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.4.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$4$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/gear-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GearPanel",
    ()=>GearPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const GEAR_SHIFT_SOUND_DURATION_MS = 2500;
const gears = [
    "R",
    "N",
    "D"
];
function GearPanel({ gear, onGearChange, movingLightOn, fuelLocked = false }) {
    _s();
    const gearShiftAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GearPanel.useEffect": ()=>{
            gearShiftAudioRef.current = new Audio("/gear-shift.mp3");
            return ({
                "GearPanel.useEffect": ()=>{
                    gearShiftAudioRef.current?.pause();
                    gearShiftAudioRef.current = null;
                }
            })["GearPanel.useEffect"];
        }
    }["GearPanel.useEffect"], []);
    const playGearShiftSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GearPanel.useCallback[playGearShiftSound]": ()=>{
            const audio = gearShiftAudioRef.current;
            if (!audio) return;
            audio.currentTime = 0;
            audio.play().catch({
                "GearPanel.useCallback[playGearShiftSound]": ()=>{}
            }["GearPanel.useCallback[playGearShiftSound]"]);
            const t = setTimeout({
                "GearPanel.useCallback[playGearShiftSound].t": ()=>{
                    audio.pause();
                    audio.currentTime = 0;
                }
            }["GearPanel.useCallback[playGearShiftSound].t"], GEAR_SHIFT_SOUND_DURATION_MS);
            return ({
                "GearPanel.useCallback[playGearShiftSound]": ()=>clearTimeout(t)
            })["GearPanel.useCallback[playGearShiftSound]"];
        }
    }["GearPanel.useCallback[playGearShiftSound]"], []);
    const handleGearClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GearPanel.useCallback[handleGearClick]": (g)=>{
            if (g !== gear) playGearShiftSound();
            onGearChange(g);
        }
    }["GearPanel.useCallback[handleGearClick]"], [
        gear,
        onGearChange,
        playGearShiftSound
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed bottom-6 z-[1002] -translate-x-1/2", fuelLocked && "pointer-events-none opacity-75"),
        style: {
            left: "calc(100vw - 188px)"
        },
        role: "group",
        "aria-label": "Vroom scroll gear",
        "aria-disabled": fuelLocked,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex flex-col items-center gap-4 py-5 px-3 rounded-2xl",
            style: {
                background: "linear-gradient(180deg, rgba(30,32,38,0.95) 0%, rgba(22,24,28,0.98) 100%)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05), 0 0 0 1px rgba(0,0,0,0.3)",
                backdropFilter: "blur(20px)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 flex items-center justify-center w-5 h-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-2.5 h-2.5 rounded-full transition-all duration-200", movingLightOn && gear === "D" && "scale-110", movingLightOn && gear === "R" && "scale-110"),
                            style: {
                                background: movingLightOn ? gear === "D" ? "#22c55e" : gear === "R" ? "#ef4444" : "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.1)",
                                boxShadow: movingLightOn ? gear === "D" ? "0 0 12px rgba(34,197,94,0.7), 0 0 4px rgba(34,197,94,0.4)" : gear === "R" ? "0 0 12px rgba(239,68,68,0.7), 0 0 4px rgba(239,68,68,0.4)" : "none" : "none"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/gear-panel.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-full",
                            style: {
                                border: `1px solid ${movingLightOn ? gear === "D" ? "rgba(34,197,94,0.3)" : gear === "R" ? "rgba(239,68,68,0.3)" : "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.06)"}`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/gear-panel.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/gear-panel.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-col items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2",
                            style: {
                                background: "rgba(255,255,255,0.14)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/gear-panel.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        gears.map((g)=>{
                            const isSelected = gear === g;
                            const isDrive = g === "D" && isSelected;
                            const isReverse = g === "R" && isSelected;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handleGearClick(g),
                                "aria-pressed": isSelected,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-10 w-12 h-12 flex items-center justify-center rounded-xl", "font-mono text-xl font-semibold tracking-wider", "transition-all duration-200 ease-out cursor-pointer", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"),
                                style: {
                                    color: isDrive ? "#22c55e" : isReverse ? "#ef4444" : isSelected ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.6)",
                                    background: isDrive ? "rgba(34,197,94,0.1)" : isReverse ? "rgba(239,68,68,0.1)" : isSelected ? "rgba(255,255,255,0.08)" : "transparent",
                                    border: isDrive ? "1px solid rgba(34,197,94,0.3)" : isReverse ? "1px solid rgba(239,68,68,0.3)" : isSelected ? "1px solid rgba(255,255,255,0.15)" : "1px solid transparent",
                                    boxShadow: isDrive ? "0 0 20px rgba(34,197,94,0.15), inset 0 1px 0 rgba(34,197,94,0.1)" : isReverse ? "0 0 20px rgba(239,68,68,0.15), inset 0 1px 0 rgba(239,68,68,0.1)" : isSelected ? "inset 0 1px 0 rgba(255,255,255,0.05)" : "none"
                                },
                                children: g
                            }, g, false, {
                                fileName: "[project]/components/gear-panel.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/gear-panel.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[8px] font-mono tracking-[0.2em] uppercase",
                    style: {
                        color: "rgba(255,255,255,0.55)"
                    },
                    children: "GEAR"
                }, void 0, false, {
                    fileName: "[project]/components/gear-panel.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/gear-panel.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/gear-panel.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(GearPanel, "a55YNOFUYSBSDxwKrU41UYxu9ms=");
_c = GearPanel;
var _c;
__turbopack_context__.k.register(_c, "GearPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/nav-hud.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavHud",
    ()=>NavHud
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
/* ── helpers: sample a cubic bezier at t ───────────────────────── */ function cubicBezier(t, p0, p1, p2, p3) {
    const u = 1 - t;
    return [
        u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
        u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1]
    ];
}
function cubicBezierTangent(t, p0, p1, p2, p3) {
    const u = 1 - t;
    return [
        3 * u * u * (p1[0] - p0[0]) + 6 * u * t * (p2[0] - p1[0]) + 3 * t * t * (p3[0] - p2[0]),
        3 * u * u * (p1[1] - p0[1]) + 6 * u * t * (p2[1] - p1[1]) + 3 * t * t * (p3[1] - p2[1])
    ];
}
/* The road is made of 3 joined cubic bezier segments */ const SEG = [
    [
        [
            60,
            8
        ],
        [
            20,
            30
        ],
        [
            100,
            55
        ],
        [
            60,
            80
        ]
    ],
    [
        [
            60,
            80
        ],
        [
            20,
            105
        ],
        [
            100,
            125
        ],
        [
            60,
            150
        ]
    ],
    [
        [
            60,
            150
        ],
        [
            30,
            168
        ],
        [
            85,
            182
        ],
        [
            60,
            195
        ]
    ]
];
function sampleRoad(progress) {
    const total = SEG.length;
    const raw = Math.max(0, Math.min(progress * total, total - 1e-6));
    const idx = Math.min(Math.max(0, Math.floor(raw)), total - 1);
    const lt = raw - idx;
    const seg = SEG[idx] ?? SEG[0];
    const [x, y] = cubicBezier(lt, seg[0], seg[1], seg[2], seg[3]);
    const [dx, dy] = cubicBezierTangent(lt, seg[0], seg[1], seg[2], seg[3]);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    return {
        x,
        y,
        angle
    };
}
/* Build the SVG d-string for the full road path */ function roadD() {
    return SEG.map((s, i)=>i === 0 ? `M${s[0][0]},${s[0][1]} C${s[1][0]},${s[1][1]} ${s[2][0]},${s[2][1]} ${s[3][0]},${s[3][1]}` : `C${s[1][0]},${s[1][1]} ${s[2][0]},${s[2][1]} ${s[3][0]},${s[3][1]}`).join(" ");
}
function NavHud({ onReachEnd, lightOn = false }) {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [remainingLabel, setRemainingLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("--");
    const reachedEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const update = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavHud.useCallback[update]": ()=>{
            const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            const p = maxScroll > 0 ? Math.min(1, scrollY / maxScroll) : 0;
            setProgress(p);
            const totalKm = maxScroll / window.innerHeight * 0.45;
            const remainingKm = totalKm * (1 - p);
            if (p < 0.95) {
                reachedEndRef.current = false;
            }
            if (remainingKm <= 0 || p >= 0.95) {
                setRemainingLabel("0 m");
                if (!reachedEndRef.current && onReachEnd) {
                    reachedEndRef.current = true;
                    onReachEnd();
                }
            } else if (remainingKm < 1) {
                setRemainingLabel(`${(remainingKm * 1000).toFixed(0)} m`);
            } else {
                setRemainingLabel(`${remainingKm.toFixed(1)} km`);
            }
        }
    }["NavHud.useCallback[update]"], [
        onReachEnd
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavHud.useEffect": ()=>{
            update();
            window.addEventListener("scroll", update, {
                passive: true
            });
            window.addEventListener("resize", update);
            return ({
                "NavHud.useEffect": ()=>{
                    window.removeEventListener("scroll", update);
                    window.removeEventListener("resize", update);
                }
            })["NavHud.useEffect"];
        }
    }["NavHud.useEffect"], [
        update
    ]);
    const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NavHud.useMemo[d]": ()=>roadD()
    }["NavHud.useMemo[d]"], []);
    const { x: ax, y: ay, angle } = sampleRoad(progress);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-[25.75rem] left-24 z-[1001] pointer-events-none select-none",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex flex-col items-center rounded-2xl overflow-hidden",
            style: {
                width: 232,
                height: 502,
                background: "rgba(18,22,26,0.92)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
                backdropFilter: "blur(20px)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full flex-1 p-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 120 200",
                        className: "w-full h-full",
                        preserveAspectRatio: "xMidYMid meet",
                        children: [
                            [
                                40,
                                80,
                                120,
                                160
                            ].map((yy)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "0",
                                    y1: yy,
                                    x2: "120",
                                    y2: yy,
                                    stroke: "rgba(255,255,255,0.025)",
                                    strokeWidth: "0.5"
                                }, `h${yy}`, false, {
                                    fileName: "[project]/components/nav-hud.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)),
                            [
                                30,
                                60,
                                90
                            ].map((xx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: xx,
                                    y1: "0",
                                    x2: xx,
                                    y2: "200",
                                    stroke: "rgba(255,255,255,0.025)",
                                    strokeWidth: "0.5"
                                }, `v${xx}`, false, {
                                    fileName: "[project]/components/nav-hud.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "5",
                                y1: "50",
                                x2: "42",
                                y2: "50",
                                stroke: "rgba(255,255,255,0.05)",
                                strokeWidth: "3",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/nav-hud.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "78",
                                y1: "50",
                                x2: "115",
                                y2: "50",
                                stroke: "rgba(255,255,255,0.05)",
                                strokeWidth: "3",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/nav-hud.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "5",
                                y1: "120",
                                x2: "38",
                                y2: "120",
                                stroke: "rgba(255,255,255,0.05)",
                                strokeWidth: "3",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/nav-hud.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "82",
                                y1: "120",
                                x2: "115",
                                y2: "120",
                                stroke: "rgba(255,255,255,0.05)",
                                strokeWidth: "3",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/nav-hud.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: d,
                                fill: "none",
                                stroke: "rgba(255,255,255,0.07)",
                                strokeWidth: "16",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/nav-hud.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: d,
                                fill: "none",
                                stroke: "rgba(50,55,65,0.9)",
                                strokeWidth: "12",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/nav-hud.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: d,
                                fill: "none",
                                stroke: "rgba(255,255,255,0.12)",
                                strokeWidth: "0.8",
                                strokeDasharray: "4,6",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/nav-hud.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: d,
                                fill: "none",
                                stroke: "rgba(66,133,244,0.45)",
                                strokeWidth: "4",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeDasharray: "1000",
                                strokeDashoffset: 1000 - progress * 1000,
                                style: {
                                    transition: "stroke-dashoffset 0.15s ease-out"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/nav-hud.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                transform: "translate(60,195)",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        r: "4",
                                        fill: "rgba(234,67,53,0.7)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/nav-hud.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        r: "1.8",
                                        fill: "#ea4335"
                                    }, void 0, false, {
                                        fileName: "[project]/components/nav-hud.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/nav-hud.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                transform: "translate(60,8)",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        r: "2.5",
                                        fill: "rgba(66,133,244,0.4)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/nav-hud.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        r: "1.2",
                                        fill: "rgba(66,133,244,0.8)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/nav-hud.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/nav-hud.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                transform: `translate(${ax},${ay}) rotate(${angle + 90})`,
                                style: {
                                    transition: "transform 0.15s ease-out"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        r: "9",
                                        fill: "rgba(66,133,244,0.1)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/nav-hud.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,-7 L5,5 L0,2 L-5,5 Z",
                                        fill: "#4285F4",
                                        stroke: "rgba(255,255,255,0.25)",
                                        strokeWidth: "0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/nav-hud.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/nav-hud.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/nav-hud.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/nav-hud.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex items-center justify-between px-4 py-3 transition-colors duration-200",
                    style: {
                        background: "rgba(255,255,255,0.03)",
                        borderTop: "1px solid rgba(255,255,255,0.14)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 rounded-full",
                                    style: {
                                        background: progress < 1 ? "#4285F4" : "#34a853",
                                        boxShadow: `0 0 6px ${progress < 1 ? "rgba(66,133,244,0.6)" : "rgba(52,168,83,0.6)"}`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/nav-hud.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-mono font-medium tabular-nums tracking-tight",
                                    style: {
                                        color: "rgba(255,255,255,0.8)"
                                    },
                                    children: remainingLabel
                                }, void 0, false, {
                                    fileName: "[project]/components/nav-hud.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/nav-hud.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-mono uppercase tracking-widest",
                            style: {
                                color: "rgba(255,255,255,0.55)"
                            },
                            children: progress >= 1 ? "Done" : "LEFT"
                        }, void 0, false, {
                            fileName: "[project]/components/nav-hud.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/nav-hud.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/nav-hud.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/nav-hud.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(NavHud, "q0vwIzd2p/reUWeK3ELgfCecdSw=");
_c = NavHud;
var _c;
__turbopack_context__.k.register(_c, "NavHud");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/deadbug-overlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeadbugOverlay",
    ()=>DeadbugOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function DeadbugOverlay({ isParkingMode = false }) {
    _s();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const accumRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const nextAtRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1000 + (Math.random() * 600 - 300));
    const bugSoundRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bugCtxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeadbugOverlay.useEffect": ()=>{
            const audio = new Audio("/bug-appear.mp3");
            audio.volume = 1;
            bugSoundRef.current = audio;
            try {
                const Ctx = window.AudioContext || window.webkitAudioContext;
                const ctx = new Ctx();
                bugCtxRef.current = ctx;
                const source = ctx.createMediaElementSource(audio);
                const gain = ctx.createGain();
                gain.gain.value = 2.5;
                source.connect(gain);
                gain.connect(ctx.destination);
            } catch  {
                bugCtxRef.current = null;
            }
            return ({
                "DeadbugOverlay.useEffect": ()=>{
                    bugSoundRef.current?.pause();
                    bugSoundRef.current = null;
                    bugCtxRef.current?.close();
                    bugCtxRef.current = null;
                }
            })["DeadbugOverlay.useEffect"];
        }
    }["DeadbugOverlay.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeadbugOverlay.useEffect": ()=>{
            if (show) {
                try {
                    if (bugCtxRef.current?.state === "suspended") bugCtxRef.current.resume();
                    const audio = bugSoundRef.current;
                    if (audio) {
                        audio.currentTime = 0;
                        audio.volume = 1;
                        audio.play().catch({
                            "DeadbugOverlay.useEffect": ()=>{}
                        }["DeadbugOverlay.useEffect"]);
                    }
                } catch  {
                // ignore
                }
            }
        }
    }["DeadbugOverlay.useEffect"], [
        show
    ]);
    const dismiss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DeadbugOverlay.useCallback[dismiss]": ()=>{
            setShow(false);
        }
    }["DeadbugOverlay.useCallback[dismiss]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeadbugOverlay.useEffect": ()=>{
            lastYRef.current = window.scrollY || document.documentElement.scrollTop;
            const handleScroll = {
                "DeadbugOverlay.useEffect.handleScroll": ()=>{
                    if (show) return; // don't accumulate while showing
                    if (isParkingMode) return; // No bugs in parking lot
                    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
                    const currentY = window.scrollY || document.documentElement.scrollTop;
                    const delta = currentY - lastYRef.current;
                    if (delta > 0 && maxScroll > 0) {
                        const totalKm = maxScroll / window.innerHeight * 0.45;
                        const metersPerPx = totalKm * 1000 / maxScroll;
                        accumRef.current += delta * metersPerPx;
                        if (accumRef.current >= nextAtRef.current) {
                            setShow(true);
                            accumRef.current = 0;
                            nextAtRef.current = 1000 + (Math.random() * 600 - 300);
                        }
                    }
                    lastYRef.current = currentY;
                }
            }["DeadbugOverlay.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "DeadbugOverlay.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["DeadbugOverlay.useEffect"];
        }
    }["DeadbugOverlay.useEffect"], [
        show,
        isParkingMode
    ]);
    if (!show) return null;
    return(// eslint-disable-next-line @next/next/no-img-element
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "/images/deadbug.png",
        alt: "",
        onClick: dismiss,
        className: "fixed z-[1500] cursor-pointer",
        style: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "80vw",
            maxHeight: "80vh",
            opacity: show ? 1 : 0,
            transition: "opacity 0.4s ease-in-out",
            pointerEvents: show ? "auto" : "none"
        }
    }, void 0, false, {
        fileName: "[project]/components/deadbug-overlay.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this));
}
_s(DeadbugOverlay, "nU7rdhihVxVjEpO1xwBVNNkUpFc=");
_c = DeadbugOverlay;
var _c;
__turbopack_context__.k.register(_c, "DeadbugOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/engine-start-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EngineStartButton",
    ()=>EngineStartButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function EngineStartButton({ onEngineStart }) {
    _s();
    const [smokeActive, setSmokeActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const roarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const failRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EngineStartButton.useEffect": ()=>{
            roarRef.current = new Audio("/engine-roar.mp3");
            failRef.current = new Audio("/engine-fail.mp3");
            return ({
                "EngineStartButton.useEffect": ()=>{
                    roarRef.current?.pause();
                    roarRef.current = null;
                    failRef.current?.pause();
                    failRef.current = null;
                }
            })["EngineStartButton.useEffect"];
        }
    }["EngineStartButton.useEffect"], []);
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EngineStartButton.useCallback[handleClick]": ()=>{
            const success = Math.random() < 0.5 // 50% chance engine starts
            ;
            onEngineStart?.(success);
            if (success) {
                setSmokeActive(true);
                try {
                    const audio = roarRef.current;
                    if (audio) {
                        audio.currentTime = 0;
                        audio.play().catch({
                            "EngineStartButton.useCallback[handleClick]": ()=>{}
                        }["EngineStartButton.useCallback[handleClick]"]);
                    }
                } catch  {
                // ignore
                }
                const t = setTimeout({
                    "EngineStartButton.useCallback[handleClick].t": ()=>setSmokeActive(false)
                }["EngineStartButton.useCallback[handleClick].t"], 10500);
                return ({
                    "EngineStartButton.useCallback[handleClick]": ()=>clearTimeout(t)
                })["EngineStartButton.useCallback[handleClick]"];
            } else {
                // Engine failed: play fail sound only, no smoke; fuel/gear unchanged in page
                try {
                    const audio = failRef.current;
                    if (audio) {
                        audio.currentTime = 0;
                        audio.play().catch({
                            "EngineStartButton.useCallback[handleClick]": ()=>{}
                        }["EngineStartButton.useCallback[handleClick]"]);
                    }
                } catch  {
                // ignore
                }
            }
        }
    }["EngineStartButton.useCallback[handleClick]"], [
        onEngineStart
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleClick,
                className: "engine-start-btn",
                "aria-label": "Engine start - trigger smoke effect",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "engine-start-btn-text",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "ENGINE"
                        }, void 0, false, {
                            fileName: "[project]/components/engine-start-button.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "START"
                        }, void 0, false, {
                            fileName: "[project]/components/engine-start-button.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "STOP"
                        }, void 0, false, {
                            fileName: "[project]/components/engine-start-button.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/engine-start-button.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/engine-start-button.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            smokeActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "smoke-effect",
                "aria-hidden": true,
                children: Array.from({
                    length: 14
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exhaust-smoke"
                    }, i, false, {
                        fileName: "[project]/components/engine-start-button.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/engine-start-button.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(EngineStartButton, "E82gHVy7T6lqih5L2/hF8BRAGfQ=");
_c = EngineStartButton;
var _c;
__turbopack_context__.k.register(_c, "EngineStartButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/fuel-gauge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FuelGauge",
    ()=>FuelGauge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function FuelGauge({ fuel, started = false }) {
    _s();
    const clamped = Math.max(0, Math.min(1, fuel));
    const clampedRound = Math.round(clamped * 100) / 100;
    const lowFuel = started && clamped > 0 && clamped < 0.2;
    const alertAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FuelGauge.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            alertAudioRef.current = new Audio("/fuel-low-alert.mp3");
            return ({
                "FuelGauge.useEffect": ()=>{
                    alertAudioRef.current?.pause();
                    alertAudioRef.current = null;
                }
            })["FuelGauge.useEffect"];
        }
    }["FuelGauge.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FuelGauge.useEffect": ()=>{
            const audio = alertAudioRef.current;
            if (!audio) return;
            if (lowFuel) {
                audio.currentTime = 0;
                audio.loop = true;
                audio.play().catch({
                    "FuelGauge.useEffect": ()=>{}
                }["FuelGauge.useEffect"]);
            } else {
                audio.pause();
                audio.currentTime = 0;
            }
        }
    }["FuelGauge.useEffect"], [
        lowFuel
    ]);
    const cx = 110;
    const cy = 110;
    const r = 90;
    const pathD = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`;
    const needleAngle = -90 + clampedRound * 180;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-[9rem] left-[calc(50%-37.5rem)] -translate-x-1/2 z-[1001] pointer-events-none select-none",
        "aria-hidden": "true",
        role: "img",
        "aria-label": `Fuel level ${Math.round(clamped * 100)}%`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[200px] h-[120px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 220 125",
                        className: "absolute inset-0 w-full h-full",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                    id: "fuel-glow",
                                    x: "-20%",
                                    y: "-20%",
                                    width: "140%",
                                    height: "140%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                            in: "SourceGraphic",
                                            stdDeviation: "0.5",
                                            result: "blur"
                                        }, void 0, false, {
                                            fileName: "[project]/components/fuel-gauge.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                    in: "blur"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/fuel-gauge.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                    in: "SourceGraphic"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/fuel-gauge.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/fuel-gauge.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/fuel-gauge.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/fuel-gauge.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: pathD,
                                fill: "none",
                                stroke: "rgba(255,255,255,0.06)",
                                strokeWidth: "16",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/fuel-gauge.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: pathD,
                                fill: "none",
                                stroke: "rgba(255,255,255,0.12)",
                                strokeWidth: "3",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/fuel-gauge.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            [
                                0,
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8
                            ].map((i)=>{
                                const angle = Math.PI + i / 8 * Math.PI;
                                const x1 = cx + (r - 8) * Math.cos(angle);
                                const y1 = cy + (r - 8) * Math.sin(angle);
                                const x2 = cx + r * Math.cos(angle);
                                const y2 = cy + r * Math.sin(angle);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: x1,
                                    y1: y1,
                                    x2: x2,
                                    y2: y2,
                                    stroke: "rgba(255,255,255,0.5)",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                }, i, false, {
                                    fileName: "[project]/components/fuel-gauge.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: cx - r + 12,
                                y: cy + 6,
                                fill: "rgba(255,255,255,0.95)",
                                fontSize: "14",
                                fontFamily: "var(--font-mono, monospace)",
                                fontWeight: "700",
                                style: {
                                    paintOrder: "stroke",
                                    stroke: "rgba(0,0,0,0.8)",
                                    strokeWidth: 2
                                },
                                children: "F"
                            }, void 0, false, {
                                fileName: "[project]/components/fuel-gauge.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: cx + r - 14,
                                y: cy + 6,
                                fill: "rgba(255,255,255,0.95)",
                                fontSize: "14",
                                fontFamily: "var(--font-mono, monospace)",
                                fontWeight: "700",
                                style: {
                                    paintOrder: "stroke",
                                    stroke: "rgba(0,0,0,0.8)",
                                    strokeWidth: 2
                                },
                                children: "E"
                            }, void 0, false, {
                                fileName: "[project]/components/fuel-gauge.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                transform: `translate(${cx},${cy + 25})`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M -4 -8 L -4 4 L 0 8 L 4 4 L 4 -8 L 2 -8 L 2 2 L 0 5 L -2 2 L -2 -8 Z M 0 -4 L 0 -8 M -2 -6 L 2 -6",
                                    fill: "none",
                                    stroke: "rgba(255,255,255,0.4)",
                                    strokeWidth: "1.2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/fuel-gauge.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/fuel-gauge.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/fuel-gauge.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 bottom-0 origin-bottom",
                        style: {
                            marginLeft: "-2px",
                            width: 4,
                            height: 70,
                            transform: `rotate(${needleAngle}deg)`,
                            transition: "transform 0.4s ease-out",
                            willChange: "transform"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 rounded-full",
                                style: {
                                    background: started && clamped > 0 ? "linear-gradient(to top, #b91c1c, #ef4444)" : "linear-gradient(to top, #991b1b, #dc2626)",
                                    boxShadow: started && clamped > 0 ? "0 0 6px rgba(220,50,50,0.5)" : "0 0 4px rgba(220,50,50,0.3)",
                                    border: "1px solid rgba(255,255,255,0.4)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/fuel-gauge.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2.5 rounded-full",
                                style: {
                                    background: started && clamped > 0 ? "#fca5a5" : "#ef4444"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/fuel-gauge.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/fuel-gauge.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full border-2",
                        style: {
                            background: "rgba(255,255,255,0.2)",
                            borderColor: "rgba(255,255,255,0.4)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/fuel-gauge.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/fuel-gauge.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            lowFuel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-1 -left-1 w-8 h-8 flex items-center justify-center rounded-full",
                style: {
                    background: "rgba(250,200,0,0.25)",
                    boxShadow: "0 0 12px rgba(250,200,0,0.5)"
                },
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    className: "w-5 h-5",
                    fill: "rgba(250,204,21,0.95)",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M19 8c0-.62-.25-1.18-.65-1.57l-.07-.07-3.5-3.5-1.42 1.42 3.5 3.5.07.07c.39.4.65.95.65 1.58V8h1v10H4V6h1v2c0 .55.45 1 1 1s1-.45 1-1V5c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h1V8h-1z"
                    }, void 0, false, {
                        fileName: "[project]/components/fuel-gauge.tsx",
                        lineNumber: 194,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/fuel-gauge.tsx",
                    lineNumber: 193,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/fuel-gauge.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/fuel-gauge.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(FuelGauge, "3vHN2Vlp+zc4oe4d10hkCTWjl/0=");
_c = FuelGauge;
var _c;
__turbopack_context__.k.register(_c, "FuelGauge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/parking-lot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParkingLot",
    ()=>ParkingLot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function ParkingLot({ carTop, success, visible }) {
    const stallW = 64;
    const stallH = 100;
    const cols = 5;
    const targetCol = 2 // middle stall (0-indexed)
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-12 mb-8 flex flex-col items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden rounded-xl",
            style: {
                width: "100%",
                maxWidth: 420,
                height: 560,
                background: "#23252a",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.5)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    style: {
                        backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.012) 1px, transparent 1px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.01) 1px, transparent 1px), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.008) 1px, transparent 1px)",
                        backgroundSize: "6px 6px, 8px 8px, 10px 10px"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/parking-lot.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-7 h-7 rounded flex items-center justify-center font-mono font-bold text-sm",
                            style: {
                                background: "rgba(66,133,244,0.9)",
                                color: "#fff",
                                boxShadow: "0 2px 8px rgba(66,133,244,0.3)"
                            },
                            children: "P"
                        }, void 0, false, {
                            fileName: "[project]/components/parking-lot.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-mono uppercase tracking-widest",
                            style: {
                                color: "rgba(255,255,255,0.3)"
                            },
                            children: "Parking"
                        }, void 0, false, {
                            fileName: "[project]/components/parking-lot.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/parking-lot.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-1/2 -translate-x-1/2",
                    style: {
                        top: 80,
                        width: stallW * cols + 20
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 right-0 h-[2px]",
                            style: {
                                top: 0,
                                background: "rgba(255,255,255,0.15)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/parking-lot.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 right-0 h-[2px]",
                            style: {
                                top: stallH,
                                background: "rgba(255,255,255,0.15)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/parking-lot.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        Array.from({
                            length: cols + 1
                        }).map((__, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute",
                                style: {
                                    left: 10 + i * stallW,
                                    top: 0,
                                    width: 2,
                                    height: stallH,
                                    background: "rgba(255,255,255,0.15)"
                                }
                            }, i, false, {
                                fileName: "[project]/components/parking-lot.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute",
                            style: {
                                left: 10 + targetCol * stallW + 2,
                                top: 2,
                                width: stallW - 4,
                                height: stallH - 4,
                                border: "2px dashed rgba(232,200,48,0.5)",
                                borderRadius: 4,
                                boxShadow: "inset 0 0 20px rgba(232,200,48,0.05)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/parking-lot.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/parking-lot.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-1/2 -translate-x-1/2",
                    style: {
                        top: 380,
                        width: stallW * cols + 20
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 right-0 h-[2px]",
                            style: {
                                top: 0,
                                background: "rgba(255,255,255,0.15)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/parking-lot.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 right-0 h-[2px]",
                            style: {
                                top: stallH,
                                background: "rgba(255,255,255,0.15)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/parking-lot.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        Array.from({
                            length: cols + 1
                        }).map((__, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute",
                                style: {
                                    left: 10 + i * stallW,
                                    top: 0,
                                    width: 2,
                                    height: stallH,
                                    background: "rgba(255,255,255,0.15)"
                                }
                            }, i, false, {
                                fileName: "[project]/components/parking-lot.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)),
                        [
                            0,
                            1,
                            3,
                            4
                        ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute rounded",
                                style: {
                                    left: 10 + col * stallW + 10,
                                    top: 15,
                                    width: stallW - 20,
                                    height: stallH - 30,
                                    background: col === 0 ? "rgba(100,100,110,0.5)" : col === 1 ? "rgba(70,80,100,0.5)" : col === 3 ? "rgba(90,70,70,0.5)" : "rgba(80,90,80,0.5)",
                                    border: "1px solid rgba(255,255,255,0.05)",
                                    borderRadius: 5
                                }
                            }, col, false, {
                                fileName: "[project]/components/parking-lot.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/parking-lot.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "absolute left-1/2 -translate-x-1/2",
                    style: {
                        top: 210,
                        width: 40,
                        height: 140
                    },
                    viewBox: "0 0 40 140",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "20",
                            y1: "0",
                            x2: "20",
                            y2: "140",
                            stroke: "rgba(255,255,255,0.08)",
                            strokeWidth: "1.5",
                            strokeDasharray: "12,10"
                        }, void 0, false, {
                            fileName: "[project]/components/parking-lot.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "20,130 12,115 28,115",
                            fill: "rgba(255,255,255,0.1)"
                        }, void 0, false, {
                            fileName: "[project]/components/parking-lot.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/parking-lot.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center transition-all duration-300",
                    style: {
                        top: 390,
                        width: 56,
                        height: 80,
                        border: success ? "3px solid rgba(255,220,0,1)" : "3px solid rgba(232,200,48,0.95)",
                        borderRadius: 6,
                        background: success ? "rgba(255,220,0,0.2)" : "rgba(232,200,48,0.12)",
                        boxShadow: success ? "0 0 16px rgba(255,220,0,0.5), inset 0 0 20px rgba(255,220,0,0.12)" : "inset 0 0 20px rgba(232,200,48,0.08)"
                    },
                    "aria-hidden": true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[9px] font-mono uppercase tracking-wider",
                        style: {
                            color: success ? "rgba(255,220,0,0.9)" : "rgba(232,200,48,0.65)"
                        },
                        children: success ? "PARKED" : "PARK HERE"
                    }, void 0, false, {
                        fileName: "[project]/components/parking-lot.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/parking-lot.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-1/2 -translate-x-1/2 pointer-events-none z-20 transition-all duration-300",
                    style: {
                        top: carTop,
                        width: 48,
                        height: 80,
                        transition: "top 0.14s ease-out",
                        opacity: visible ? 1 : 0,
                        visibility: visible ? "visible" : "hidden",
                        pointerEvents: visible ? "auto" : "none",
                        boxShadow: success ? "0 0 0 3px rgba(255,220,0,0.95), 0 0 20px rgba(255,220,0,0.4)" : undefined,
                        borderRadius: 8
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-lg",
                            style: {
                                background: "linear-gradient(180deg, #3a3e48 0%, #2c2e34 50%, #36383e 100%)",
                                border: success ? "2px solid rgba(255,220,0,0.95)" : "1px solid rgba(255,255,255,0.1)",
                                boxShadow: success ? "0 4px 16px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 12px rgba(255,220,0,0.3)" : "0 4px 16px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/parking-lot.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-2 right-2 rounded",
                            style: {
                                top: 10,
                                height: 18,
                                background: "rgba(100,120,160,0.3)",
                                border: "1px solid rgba(255,255,255,0.06)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/parking-lot.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-2.5 right-2.5 rounded-sm",
                            style: {
                                bottom: 12,
                                height: 14,
                                background: "rgba(100,120,160,0.2)",
                                border: "1px solid rgba(255,255,255,0.04)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/parking-lot.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1 left-1.5 w-2 h-2 rounded-full",
                            style: {
                                background: "rgba(255,240,180,0.6)",
                                boxShadow: "0 0 6px rgba(255,240,180,0.3)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/parking-lot.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1 right-1.5 w-2 h-2 rounded-full",
                            style: {
                                background: "rgba(255,240,180,0.6)",
                                boxShadow: "0 0 6px rgba(255,240,180,0.3)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/parking-lot.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-1 left-1.5 w-2 h-1.5 rounded-sm",
                            style: {
                                background: "rgba(220,50,50,0.6)",
                                boxShadow: "0 0 4px rgba(220,50,50,0.3)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/parking-lot.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-1 right-1.5 w-2 h-1.5 rounded-sm",
                            style: {
                                background: "rgba(220,50,50,0.6)",
                                boxShadow: "0 0 4px rgba(220,50,50,0.3)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/parking-lot.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/parking-lot.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                visible && success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-lg font-mono text-sm font-bold tracking-wider animate-in fade-in duration-300",
                    style: {
                        background: "rgba(255,220,0,0.95)",
                        color: "#1a1a1a",
                        boxShadow: "0 4px 20px rgba(255,220,0,0.4)"
                    },
                    children: "PARKED"
                }, void 0, false, {
                    fileName: "[project]/components/parking-lot.tsx",
                    lineNumber: 211,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/parking-lot.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/parking-lot.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = ParkingLot;
var _c;
__turbopack_context__.k.register(_c, "ParkingLot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shake-wrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShakeWrapper",
    ()=>ShakeWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ShakeWrapper({ children }) {
    _s();
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rumbleAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShakeWrapper.useEffect": ()=>{
            const wrapper = wrapperRef.current;
            if (!wrapper) return;
            const rumbleAudio = new Audio("/earth-rumble.mp3");
            rumbleAudio.volume = 1;
            rumbleAudioRef.current = rumbleAudio;
            // Volume boost so rumble is audible (increase if source is quiet)
            let audioContext = null;
            let gainNode = null;
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const source = ctx.createMediaElementSource(rumbleAudio);
                gainNode = ctx.createGain();
                gainNode.gain.value = 20;
                source.connect(gainNode);
                gainNode.connect(ctx.destination);
                audioContext = ctx;
            } catch  {
            // fallback: use default volume only
            }
            function getTriggers() {
                return wrapper ? Array.from(wrapper.querySelectorAll(".road-trigger")) : [];
            }
            // Shake intensity: stronger when ad is near viewport center, weaker when far (0~1)
            function getShakeIntensity() {
                const triggers = getTriggers();
                const viewportCenterY = window.innerHeight / 2;
                let best = 0;
                triggers.forEach({
                    "ShakeWrapper.useEffect.getShakeIntensity": (trigger)=>{
                        const r = trigger.getBoundingClientRect();
                        if (r.bottom <= 0 || r.top >= window.innerHeight) return;
                        const adCenterY = (r.top + r.bottom) / 2;
                        const distFromCenter = Math.abs(adCenterY - viewportCenterY);
                        const halfViewport = window.innerHeight / 2;
                        const t = Math.max(0, 1 - distFromCenter / halfViewport);
                        const intensity = t * t;
                        if (intensity > best) best = intensity;
                    }
                }["ShakeWrapper.useEffect.getShakeIntensity"]);
                return best;
            }
            function updateShake() {
                if (!wrapper) return;
                const triggers = getTriggers();
                let adVisible = false;
                triggers.forEach({
                    "ShakeWrapper.useEffect.updateShake": (trigger)=>{
                        const r = trigger.getBoundingClientRect();
                        if (r.bottom > 0 && r.top < window.innerHeight) adVisible = true;
                    }
                }["ShakeWrapper.useEffect.updateShake"]);
                if (adVisible) {
                    wrapper.classList.add("road-shake");
                    wrapper.style.setProperty("--shake", String(getShakeIntensity()));
                    const audio = rumbleAudioRef.current;
                    if (audio) {
                        audio.loop = true;
                        audio.volume = 1;
                        if (audioContext?.state === "suspended") audioContext.resume();
                        audio.play().catch({
                            "ShakeWrapper.useEffect.updateShake": ()=>{}
                        }["ShakeWrapper.useEffect.updateShake"]);
                    }
                } else {
                    wrapper.classList.remove("road-shake");
                    wrapper.style.setProperty("--shake", "0");
                    const audio = rumbleAudioRef.current;
                    if (audio) {
                        audio.pause();
                        audio.currentTime = 0;
                    }
                }
            }
            const triggers = getTriggers();
            const observer = new IntersectionObserver({
                "ShakeWrapper.useEffect": ()=>updateShake()
            }["ShakeWrapper.useEffect"], {
                threshold: 0,
                rootMargin: "0px"
            });
            triggers.forEach({
                "ShakeWrapper.useEffect": (el)=>observer.observe(el)
            }["ShakeWrapper.useEffect"]);
            const handleScroll = {
                "ShakeWrapper.useEffect.handleScroll": ()=>{
                    updateShake();
                    if (wrapper.classList.contains("road-shake")) {
                        const base = getShakeIntensity();
                        const jitter = 0.6 + Math.random() * 0.8;
                        wrapper.style.setProperty("--shake", String(base * jitter));
                    }
                }
            }["ShakeWrapper.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            window.addEventListener("resize", updateShake);
            // Initial run + delayed run in case triggers aren’t in DOM yet
            updateShake();
            const t = setTimeout(updateShake, 100);
            return ({
                "ShakeWrapper.useEffect": ()=>{
                    clearTimeout(t);
                    observer.disconnect();
                    window.removeEventListener("scroll", handleScroll);
                    window.removeEventListener("resize", updateShake);
                    rumbleAudioRef.current?.pause();
                    rumbleAudioRef.current = null;
                    audioContext?.close();
                }
            })["ShakeWrapper.useEffect"];
        }
    }["ShakeWrapper.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        className: "min-h-screen overflow-x-hidden",
        style: {
            ["--shake"]: "1",
            paddingBottom: "2rem"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/shake-wrapper.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s(ShakeWrapper, "JeSDMSPbj9CRJvL7rjbzl0EMFP8=");
_c = ShakeWrapper;
var _c;
__turbopack_context__.k.register(_c, "ShakeWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-vroom-engine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVroomEngine",
    ()=>useVroomEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const LOW_HZ = 80;
const HIGH_HZ = 200;
const VOLUME_THRESHOLD = 140;
const CONSISTENT_FRAMES = 8;
const SCROLL_AMOUNT = 75;
const MOVING_LIGHT_MS = 380;
const PITCH_FOR_RPM = {
    minHz: 70,
    maxHz: 280
};
const VOL_FOR_RPM = {
    min: 30,
    max: 200
};
const RPM_DECAY = 0.985;
/** Rate at which needle smoothly follows target RPM (lower = slower) */ const RPM_SMOOTH_RISE = 0.11;
/** Max displayed RPM (1 = full scale, 0.85 = 85%) — reduces needle pegging */ const RPM_DISPLAY_CAP = 0.88;
const PITCH_MIN_LAG = 40;
const PITCH_MAX_LAG = 600;
// Parking minigame constants
const PARKING_MOVE_PER_TICK = 1.2;
const PARKING_QUIET_FRAMES_FOR_CHECK = 8;
const PARKING_SCENE_HEIGHT = 460;
const PARKING_CAR_HEIGHT = 32;
const PARKING_MAX_TOP = 500;
/** Parking success zone: same as yellow box (parking-lot.tsx top/height) */ const PARKING_BOX_TOP = 390;
const PARKING_BOX_HEIGHT = 80;
/** On-screen car height (80): success only when car is fully inside the box */ const PARKING_CAR_VISUAL_HEIGHT = 80;
/** Tolerance (px) for car fully inside box */ const PARKING_FULL_FIT_TOLERANCE = 4;
function getPitchHz(buffer, sampleRate) {
    const len = buffer.length;
    const minLag = PITCH_MIN_LAG;
    const maxLag = Math.min(PITCH_MAX_LAG, (len >> 1) - 1);
    let bestLag = minLag;
    let bestCorr = -1;
    for(let lag = minLag; lag <= maxLag; lag++){
        let corr = 0;
        for(let i = 0; i < len - lag; i++)corr += buffer[i] * buffer[i + lag];
        if (corr > bestCorr) {
            bestCorr = corr;
            bestLag = lag;
        }
    }
    return bestCorr > 0 ? sampleRate / bestLag : 0;
}
function binForHz(hz, fftSize, sampleRate) {
    return Math.min(Math.floor(hz * fftSize / sampleRate), (fftSize >> 1) - 1);
}
function useVroomEngine(needleRef) {
    _s();
    const [gear, setGearState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("N");
    const [movingLightOn, setMovingLightOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isParkingMode, setIsParkingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [parkingCarTop, setParkingCarTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [parkingSuccess, setParkingSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const framesAboveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const displayedRpmTRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const movingLightTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gearRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("N");
    const parkingCarTopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const parkingFramesQuietRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const parkingSuccessRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isParkingModeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const parkingPaintFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const showMovingLight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVroomEngine.useCallback[showMovingLight]": ()=>{
            if (movingLightTimeoutRef.current) clearTimeout(movingLightTimeoutRef.current);
            setMovingLightOn(true);
            movingLightTimeoutRef.current = setTimeout({
                "useVroomEngine.useCallback[showMovingLight]": ()=>{
                    setMovingLightOn(false);
                    movingLightTimeoutRef.current = null;
                }
            }["useVroomEngine.useCallback[showMovingLight]"], MOVING_LIGHT_MS);
        }
    }["useVroomEngine.useCallback[showMovingLight]"], []);
    const stopEngine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVroomEngine.useCallback[stopEngine]": ()=>{
            if (rafRef.current != null) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
            if (streamRef.current) {
                streamRef.current.getTracks().forEach({
                    "useVroomEngine.useCallback[stopEngine]": (t)=>t.stop()
                }["useVroomEngine.useCallback[stopEngine]"]);
                streamRef.current = null;
            }
            if (audioContextRef.current) {
                audioContextRef.current.close().catch({
                    "useVroomEngine.useCallback[stopEngine]": ()=>{}
                }["useVroomEngine.useCallback[stopEngine]"]);
                audioContextRef.current = null;
            }
            analyserRef.current = null;
            framesAboveRef.current = 0;
            if (movingLightTimeoutRef.current) {
                clearTimeout(movingLightTimeoutRef.current);
                movingLightTimeoutRef.current = null;
            }
            setMovingLightOn(false);
            displayedRpmTRef.current = 0;
            if (needleRef.current) {
                needleRef.current.style.transform = "rotate(-90deg)";
            }
        }
    }["useVroomEngine.useCallback[stopEngine]"], [
        needleRef
    ]);
    const startEngine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVroomEngine.useCallback[startEngine]": ()=>{
            const g = gearRef.current;
            if (g !== "R" && g !== "D") return;
            if (streamRef.current && audioContextRef.current) return;
            navigator.mediaDevices.getUserMedia({
                audio: true
            }).then({
                "useVroomEngine.useCallback[startEngine]": (mediaStream)=>{
                    streamRef.current = mediaStream;
                    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                    const ctx = new AudioContextClass();
                    audioContextRef.current = ctx;
                    const source = ctx.createMediaStreamSource(mediaStream);
                    const analyser = ctx.createAnalyser();
                    analyser.fftSize = 2048;
                    analyser.smoothingTimeConstant = 0.6;
                    source.connect(analyser);
                    analyserRef.current = analyser;
                    const sampleRate = ctx.sampleRate;
                    const fftSize = analyser.fftSize;
                    const lowBin = binForHz(LOW_HZ, fftSize, sampleRate);
                    const highBin = binForHz(HIGH_HZ, fftSize, sampleRate);
                    const frequencyData = new Uint8Array(analyser.frequencyBinCount);
                    const timeData = new Float32Array(2048);
                    function tick() {
                        const currentGear = gearRef.current;
                        if (!analyserRef.current || currentGear !== "R" && currentGear !== "D") return;
                        analyserRef.current.getByteFrequencyData(frequencyData);
                        analyserRef.current.getFloatTimeDomainData(timeData);
                        let sum = 0;
                        let count = 0;
                        for(let i = lowBin; i <= highBin; i++){
                            sum += frequencyData[i];
                            count++;
                        }
                        const level = count > 0 ? sum / count : 0;
                        const pitchHz = getPitchHz(timeData, sampleRate);
                        const pitchT = pitchHz <= PITCH_FOR_RPM.minHz ? 0 : Math.min(1, (pitchHz - PITCH_FOR_RPM.minHz) / (PITCH_FOR_RPM.maxHz - PITCH_FOR_RPM.minHz));
                        const volT = level <= VOL_FOR_RPM.min ? 0 : Math.min(1, (level - VOL_FOR_RPM.min) / (VOL_FOR_RPM.max - VOL_FOR_RPM.min));
                        const rawRpmT = pitchT * (0.25 + 0.75 * volT);
                        const currentRpmT = Math.min(rawRpmT, RPM_DISPLAY_CAP);
                        // Parking mode
                        if (isParkingModeRef.current) {
                            if (parkingSuccessRef.current) {
                                displayedRpmTRef.current = Math.max(0, displayedRpmTRef.current * RPM_DECAY);
                            } else {
                                if (level >= VOLUME_THRESHOLD && (currentGear === "D" || currentGear === "R")) {
                                    parkingFramesQuietRef.current = 0;
                                    const delta = level / 255 * PARKING_MOVE_PER_TICK;
                                    if (currentGear === "D") {
                                        parkingCarTopRef.current = Math.min(PARKING_MAX_TOP, parkingCarTopRef.current + delta);
                                    } else {
                                        parkingCarTopRef.current = Math.max(0, parkingCarTopRef.current - delta);
                                    }
                                    // setState every 2 frames for smooth interpolation and less re-render cost
                                    parkingPaintFrameRef.current++;
                                    if (parkingPaintFrameRef.current % 2 === 0) {
                                        setParkingCarTop(parkingCarTopRef.current);
                                    }
                                    showMovingLight();
                                    const d = displayedRpmTRef.current;
                                    displayedRpmTRef.current = d + (currentRpmT - d) * RPM_SMOOTH_RISE;
                                } else {
                                    parkingFramesQuietRef.current++;
                                    if (parkingFramesQuietRef.current === 1) setParkingCarTop(parkingCarTopRef.current);
                                    if (parkingFramesQuietRef.current >= PARKING_QUIET_FRAMES_FOR_CHECK) {
                                        const carTop = parkingCarTopRef.current;
                                        const carBottom = carTop + PARKING_CAR_VISUAL_HEIGHT;
                                        const boxBottom = PARKING_BOX_TOP + PARKING_BOX_HEIGHT;
                                        const fullyInside = carTop >= PARKING_BOX_TOP - PARKING_FULL_FIT_TOLERANCE && carBottom <= boxBottom + PARKING_FULL_FIT_TOLERANCE;
                                        if (fullyInside) {
                                            parkingSuccessRef.current = true;
                                            setParkingSuccess(true);
                                        }
                                    }
                                    displayedRpmTRef.current = Math.max(0, displayedRpmTRef.current * RPM_DECAY);
                                }
                            }
                        } else {
                            // Normal scroll mode
                            if (level >= VOLUME_THRESHOLD) {
                                framesAboveRef.current++;
                                if (framesAboveRef.current >= CONSISTENT_FRAMES) {
                                    if (currentGear === "D") {
                                        window.scrollBy({
                                            top: SCROLL_AMOUNT,
                                            behavior: "smooth"
                                        });
                                    } else if (currentGear === "R") {
                                        window.scrollBy({
                                            top: -SCROLL_AMOUNT,
                                            behavior: "smooth"
                                        });
                                    }
                                    showMovingLight();
                                    framesAboveRef.current = 0;
                                    const d = displayedRpmTRef.current;
                                    displayedRpmTRef.current = d + (currentRpmT - d) * RPM_SMOOTH_RISE;
                                }
                            } else {
                                framesAboveRef.current = 0;
                                displayedRpmTRef.current = Math.max(0, displayedRpmTRef.current * RPM_DECAY);
                            }
                        }
                        const deg = -90 + displayedRpmTRef.current * 180;
                        if (needleRef.current) {
                            needleRef.current.style.transform = `rotate(${deg}deg)`;
                        }
                        rafRef.current = requestAnimationFrame(tick);
                    }
                    rafRef.current = requestAnimationFrame(tick);
                }
            }["useVroomEngine.useCallback[startEngine]"]).catch({
                "useVroomEngine.useCallback[startEngine]": ()=>{
                    setGearState("N");
                    gearRef.current = "N";
                }
            }["useVroomEngine.useCallback[startEngine]"]);
        }
    }["useVroomEngine.useCallback[startEngine]"], [
        showMovingLight,
        needleRef
    ]);
    const setGear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVroomEngine.useCallback[setGear]": (g)=>{
            setGearState(g);
            gearRef.current = g;
            if (g === "N") {
                stopEngine();
            } else {
                startEngine();
            }
        }
    }["useVroomEngine.useCallback[setGear]"], [
        stopEngine,
        startEngine
    ]);
    // Activate parking mode
    const activateParking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVroomEngine.useCallback[activateParking]": ()=>{
            isParkingModeRef.current = true;
            parkingCarTopRef.current = 0;
            parkingFramesQuietRef.current = 0;
            parkingSuccessRef.current = false;
            setIsParkingMode(true);
            setParkingCarTop(0);
            setParkingSuccess(false);
        }
    }["useVroomEngine.useCallback[activateParking]"], []);
    // Exit parking mode when user scrolls back up (progress < 0.98)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVroomEngine.useEffect": ()=>{
            const onScroll = {
                "useVroomEngine.useEffect.onScroll": ()=>{
                    if (!isParkingModeRef.current) return;
                    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
                    const scrollY = window.scrollY || document.documentElement.scrollTop;
                    const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
                    if (progress < 0.95) {
                        isParkingModeRef.current = false;
                        setIsParkingMode(false);
                    }
                }
            }["useVroomEngine.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "useVroomEngine.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["useVroomEngine.useEffect"];
        }
    }["useVroomEngine.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVroomEngine.useEffect": ()=>{
            return ({
                "useVroomEngine.useEffect": ()=>{
                    stopEngine();
                }
            })["useVroomEngine.useEffect"];
        }
    }["useVroomEngine.useEffect"], [
        stopEngine
    ]);
    return {
        gear,
        setGear,
        movingLightOn,
        isParkingMode,
        parkingCarTop,
        parkingSuccess,
        activateParking
    };
}
_s(useVroomEngine, "mKbBPDOLO0LTI0Minja5Z7bBtDc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$garage$2d$door$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/garage-door.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$flashlight$2d$overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/flashlight-overlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rpm$2d$gauge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rpm-gauge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$gear$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/gear-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav$2d$hud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/nav-hud.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$deadbug$2d$overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/deadbug-overlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$engine$2d$start$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/engine-start-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$fuel$2d$gauge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/fuel-gauge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$parking$2d$lot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/parking-lot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shake$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shake-wrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$vroom$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-vroom-engine.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const FUEL_SCROLL_DRAIN_DOWN_PER_PX = 0.00025;
const FUEL_SCROLL_DRAIN_UP_PER_PX = 0.00025;
const AD_IMAGE_LEFT = "/images/ad-genius.png";
const AD_IMAGE_RIGHT = "/images/ad-trolling.png";
function InlineAds({ swapOrder = false }) {
    const [first, second] = swapOrder ? [
        AD_IMAGE_RIGHT,
        AD_IMAGE_LEFT
    ] : [
        AD_IMAGE_LEFT,
        AD_IMAGE_RIGHT
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "road-trigger w-full flex gap-4 justify-center items-stretch my-9",
        "aria-hidden": "false",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                className: "flex-1 min-w-0 max-w-[50%] rounded-xl overflow-hidden",
                style: {
                    boxShadow: "0 10px 30px rgba(0,0,0,0.45)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[320px] bg-muted/30 flex items-center justify-center overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: first,
                        alt: "",
                        className: "w-full h-full object-contain object-center"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                className: "flex-1 min-w-0 max-w-[50%] rounded-xl overflow-hidden",
                style: {
                    boxShadow: "0 10px 30px rgba(0,0,0,0.45)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[320px] bg-muted/30 flex items-center justify-center overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: second,
                        alt: "",
                        className: "w-full h-full object-contain object-center"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = InlineAds;
function Page() {
    _s();
    const needleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [fuelLevel, setFuelLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [engineStarted, setEngineStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const fuelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const { gear, setGear, movingLightOn, isParkingMode, parkingCarTop, parkingSuccess, activateParking } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$vroom$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVroomEngine"])(needleRef);
    const onEngineStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[onEngineStart]": (success)=>{
            if (!success) return; // 50% chance: engine doesn't start — fuel and gear stay as-is
            setEngineStarted(true);
            fuelRef.current = 1;
            setFuelLevel(1);
        }
    }["Page.useCallback[onEngineStart]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (fuelLevel <= 0) setGear("N");
        }
    }["Page.useEffect"], [
        fuelLevel,
        setGear
    ]);
    const fuelEmpty = fuelLevel <= 0;
    const displayGear = fuelEmpty ? "N" : gear;
    const handleGearChange = fuelEmpty ? ()=>{} : setGear;
    // Backup beep: play only when gear is R
    const backupBeepsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            backupBeepsRef.current = new Audio("/backup-beeps.mp3");
            return ({
                "Page.useEffect": ()=>{
                    backupBeepsRef.current?.pause();
                    backupBeepsRef.current = null;
                }
            })["Page.useEffect"];
        }
    }["Page.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const audio = backupBeepsRef.current;
            if (!audio) return;
            const shouldPlay = displayGear === "R";
            if (shouldPlay) {
                audio.loop = true;
                audio.currentTime = 0;
                audio.play().catch({
                    "Page.useEffect": ()=>{}
                }["Page.useEffect"]);
            } else {
                audio.pause();
                audio.currentTime = 0;
            }
        }
    }["Page.useEffect"], [
        isParkingMode,
        displayGear,
        parkingSuccess
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (!engineStarted) return;
            const handleScroll = {
                "Page.useEffect.handleScroll": ()=>{
                    const current = window.scrollY ?? document.documentElement.scrollTop;
                    const delta = current - lastScrollY.current;
                    if (delta !== 0) {
                        const rate = delta > 0 ? FUEL_SCROLL_DRAIN_DOWN_PER_PX : FUEL_SCROLL_DRAIN_UP_PER_PX;
                        fuelRef.current = Math.max(0, fuelRef.current - Math.abs(delta) * rate);
                        const rounded = Math.round(fuelRef.current * 500) / 500;
                        setFuelLevel(rounded);
                    }
                    lastScrollY.current = current;
                }
            }["Page.useEffect.handleScroll"];
            lastScrollY.current = window.scrollY ?? document.documentElement.scrollTop;
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Page.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Page.useEffect"];
        }
    }["Page.useEffect"], [
        engineStarted
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$garage$2d$door$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GarageDoor"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$flashlight$2d$overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashlightOverlay"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$deadbug$2d$overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeadbugOverlay"], {
                isParkingMode: isParkingMode
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$fuel$2d$gauge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FuelGauge"], {
                fuel: fuelLevel,
                started: engineStarted
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$engine$2d$start$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStartButton"], {
                onEngineStart: onEngineStart
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav$2d$hud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavHud"], {
                onReachEnd: activateParking,
                lightOn: movingLightOn
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rpm$2d$gauge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RpmGauge"], {
                ref: needleRef
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$gear$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GearPanel"], {
                gear: displayGear,
                onGearChange: handleGearChange,
                movingLightOn: movingLightOn,
                fuelLocked: fuelEmpty
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shake$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShakeWrapper"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "py-6 px-6 border-b",
                        style: {
                            borderColor: "rgba(255,255,255,0.06)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-base font-sans font-semibold tracking-wide",
                            style: {
                                color: "rgba(240,240,240,0.38)"
                            },
                            children: "\u00A0"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "mx-auto px-6 py-12 pb-16",
                        style: {
                            width: 800
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-sans font-semibold leading-tight mb-3 text-balance",
                                    style: {
                                        color: "rgba(248,248,248,0.92)"
                                    },
                                    children: "L'Étranger | The Stranger"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-sans mb-10",
                                    style: {
                                        color: "rgba(200,200,200,0.9)"
                                    },
                                    children: "By Albert Camus"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "article-road-lines",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-serif text-[22px] leading-[1.9]",
                                            style: {
                                                color: "rgba(220,220,220,0.92)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-8",
                                                    children: "Aujourd\u2019hui, maman est morte. Ou peut-\u00EAtre hier, je ne sais pas. J\u2019ai re\u00E7u un t\u00E9l\u00E9gramme de l\u2019asile\u00A0: \u00AB\u00A0M\u00E8re d\u00E9c\u00E9d\u00E9e. Enterrement demain. Sentiments distingu\u00E9s.\u00A0\u00BB Cela ne veut rien dire. C\u2019\u00E9tait peut-\u00EAtre hier. L\u2019asile de vieillards est \u00E0 Marengo, \u00E0 quatre-vingts kilom\u00E8tres d\u2019Alger. Je prendrai l\u2019autobus \u00E0 deux heures et j\u2019arriverai dans l\u2019apr\u00E8s-midi. Ainsi, je pourrai veiller et je rentrerai demain soir. J\u2019ai demand\u00E9 deux jours de cong\u00E9 \u00E0 mon patron et il ne pouvait pas me les refuser avec une excuse pareille. Mais il n\u2019avait pas l\u2019air content. Je lui ai m\u00EAme dit\u00A0: \u00AB\u00A0Ce n\u2019est pas de ma faute.\u00A0\u00BB Il n\u2019a pas r\u00E9pondu. J\u2019ai pens\u00E9 alors que je n\u2019aurais pas d\u00FB lui dire cela. En somme, je n\u2019avais pas \u00E0 m\u2019excuser. C\u2019\u00E9tait plut\u00F4t \u00E0 lui de me pr\u00E9senter ses condol\u00E9ances. Mais il le fera sans doute apr\u00E8s-demain, quand il me verra en deuil. Pour le moment, c\u2019est un peu comme si maman n\u2019\u00E9tait pas morte. Apr\u00E8s l\u2019enterrement, au contraire, ce sera une affaire class\u00E9e et tout aura rev\u00EAtu une allure plus officielle. J\u2019ai pris l\u2019autobus \u00E0 deux heures. Il faisait tr\u00E8s chaud. J\u2019ai mang\u00E9 au restaurant, chez C\u00E9leste, comme d\u2019habitude. Ils avaient tous beaucoup de peine pour moi et C\u00E9leste m\u2019a dit\u00A0: \u00AB\u00A0On n\u2019a qu\u2019une m\u00E8re.\u00A0\u00BB Quand je suis parti, ils m\u2019ont accompagn\u00E9 \u00E0 la porte. J\u2019\u00E9tais un peu \u00E9tourdi parce qu\u2019il a fallu que je monte chez Emmanuel pour lui emprunter une cravate noire et un brassard. Il a perdu son oncle, il y a quelques mois. J\u2019ai couru pour ne pas manquer le d\u00E9part. Cette h\u00E2te, cette course, c\u2019est \u00E0 cause de tout cela sans doute, ajout\u00E9 aux cahots, \u00E0 l\u2019odeur d\u2019essence, \u00E0 la r\u00E9verb\u00E9ration de la route et du ciel, que je me suis assoupi. J\u2019ai dormi pendant presque tout le trajet. Et quand je me suis r\u00E9veill\u00E9, j\u2019\u00E9tais tass\u00E9 contre un militaire qui m\u2019a souri et qui m\u2019a demand\u00E9 si je venais de loin. J\u2019ai dit \u00AB\u00A0oui\u00A0\u00BB pour n\u2019avoir plus \u00E0 parler. L\u2019asile est \u00E0 deux kilom\u00E8tres du village. J\u2019ai fait le chemin \u00E0 pied. J\u2019ai voulu voir maman tout de suite. Mais le concierge m\u2019a dit qu\u2019il fallait que je rencontre le directeur. Comme il \u00E9tait occup\u00E9, j\u2019ai attendu un peu. Pendant tout ce temps, le concierge a parl\u00E9 et ensuite, j\u2019ai vu le directeur\u00A0: il m\u2019a re\u00E7u dans son bureau. C\u2019\u00E9tait un petit vieux, avec la L\u00E9gion d\u2019honneur. Il m\u2019a regard\u00E9 de ses yeux clairs. Puis il m\u2019a serr\u00E9 la main qu\u2019il a gard\u00E9e si longtemps que je ne savais trop comment la retirer. Il a consult\u00E9 un dossier et m\u2019a dit\u00A0: \u00AB\u00A0Mme Meursault est entr\u00E9e ici il y a trois ans. Vous \u00E9tiez son seul soutien.\u00A0\u00BB J\u2019ai cru qu\u2019il me reprochait quelque chose et j\u2019ai commenc\u00E9 \u00E0 lui expliquer. Mais il m\u2019a interrompu\u00A0: \u00AB\u00A0Vous n\u2019avez pas \u00E0 vous justifier, mon cher enfant. J\u2019ai lu le"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InlineAds, {}, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-8",
                                                    children: "dossier de votre m\u00E8re. Vous ne pouviez subvenir \u00E0 ses besoins. Il lui fallait une garde. Vos salaires sont modestes. Et tout compte fait, elle \u00E9tait plus heureuse ici.\u00A0\u00BB J\u2019ai dit\u00A0: \u00AB\u00A0Oui, monsieur le Directeur.\u00A0\u00BB Il a ajout\u00E9\u00A0: \u00AB\u00A0Vous savez, elle avait des amis, des gens de son \u00E2ge. Elle pouvait partager avec eux des int\u00E9r\u00EAts qui sont d\u2019un autre temps. Vous \u00EAtes jeune et elle devait s\u2019ennuyer avec vous.\u00A0\u00BB C\u2019\u00E9tait vrai. Quand elle \u00E9tait \u00E0 la maison, maman passait son temps \u00E0 me suivre des yeux en silence. Dans les premiers jours o\u00F9 elle \u00E9tait \u00E0 l\u2019asile, elle pleurait souvent. Mais c\u2019\u00E9tait \u00E0 cause de l\u2019habitude. Au bout de quelques mois, elle aurait pleur\u00E9 si on l\u2019avait retir\u00E9e de l\u2019asile. Toujours \u00E0 cause de l\u2019habitude. C\u2019est un peu pour cela que dans la derni\u00E8re ann\u00E9e je n\u2019y suis presque plus all\u00E9. Et aussi parce que cela me prenait mon dimanche - sans compter l\u2019effort pour aller \u00E0 l\u2019autobus, prendre des tickets et faire deux heures de route. Le directeur m\u2019a encore parl\u00E9. Mais je ne l\u2019\u00E9coutais presque plus. Puis il m\u2019a dit\u00A0: \u00AB\u00A0Je suppose que vous voulez voir votre m\u00E8re.\u00A0\u00BB Je me suis lev\u00E9 sans rien dire et il m\u2019a pr\u00E9c\u00E9d\u00E9 vers la porte. Dans l\u2019escalier, il m\u2019a expliqu\u00E9\u00A0: \u00AB\u00A0Nous l\u2019avons transport\u00E9e dans notre petite morgue. Pour ne pas impressionner les autres. Chaque fois qu\u2019un pensionnaire meurt, les autres sont nerveux pendant deux ou trois jours. Et \u00E7a rend le service difficile.\u00A0\u00BB Nous avons travers\u00E9 une cour o\u00F9 il y avait beaucoup de vieillards, bavardant par petits groupes. Ils se taisaient quand nous passions. Et derri\u00E8re nous, les conversations reprenaient. On aurait dit d\u2019un jacassement assourdi de perruches. \u00C0 la porte d\u2019un petit b\u00E2timent, le directeur m\u2019a quitt\u00E9\u00A0: \u00AB\u00A0Je vous laisse, monsieur Meursault. Je suis \u00E0 votre disposition dans mon bureau. En principe, l\u2019enterrement est fix\u00E9 \u00E0 dix heures du matin. Nous avons pens\u00E9 que vous pourrez ainsi veiller la disparue. Un dernier mot\u00A0: votre m\u00E8re a, para\u00EEt-il, exprim\u00E9 souvent \u00E0 ses compagnons le d\u00E9sir d\u2019\u00EAtre enterr\u00E9e religieusement. J\u2019ai pris sur moi, de faire le n\u00E9cessaire. Mais je voulais vous en informer.\u00A0\u00BB Je l\u2019ai remerci\u00E9. Maman, sans \u00EAtre ath\u00E9e, n\u2019avait jamais pens\u00E9 de son vivant \u00E0 la religion. Je suis entr\u00E9. C\u2019\u00E9tait une salle tr\u00E8s claire, blanchie \u00E0 la chaux et recouverte d\u2019une verri\u00E8re. Elle \u00E9tait meubl\u00E9e de chaises et de chevalets en forme de X. Deux d\u2019entre eux, au centre, supportaient une bi\u00E8re recouverte de son couvercle. On voyait seulement des vis brillantes, \u00E0 peine enfonc\u00E9es, se d\u00E9tacher sur les planches pass\u00E9es au brou de noix. Pr\u00E8s de la bi\u00E8re, il y avait une infirmi\u00E8re arabe en sarrau blanc, un foulard de"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InlineAds, {
                                                    swapOrder: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-8",
                                                    children: "couleur vive sur la t\u00EAte. \u00C0 ce moment, le concierge est entr\u00E9 derri\u00E8re mon dos. Il avait d\u00FB courir. Il a b\u00E9gay\u00E9 un peu\u00A0: \u00AB\u00A0On l\u2019a couverte, mais je dois d\u00E9visser la bi\u00E8re pour que vous puissiez la voir.\u00A0\u00BB Il s\u2019approchait de la bi\u00E8re quand je l\u2019ai arr\u00EAt\u00E9. Il m\u2019a dit\u00A0: \u00AB\u00A0Vous ne voulez pas\u00A0?\u00A0\u00BB J\u2019ai r\u00E9pondu\u00A0: \u00AB\u00A0Non.\u00A0\u00BB Il s\u2019est interrompu et j\u2019\u00E9tais g\u00EAn\u00E9 parce que je sentais que je n\u2019aurais pas d\u00FB dire cela. Au bout d\u2019un moment, il m\u2019a regard\u00E9 et il m\u2019a demand\u00E9\u00A0: \u00AB\u00A0Pourquoi\u00A0?\u00A0\u00BB mais sans reproche, comme s\u2019il s\u2019informait. J\u2019ai dit\u00A0: \u00AB\u00A0Je ne sais pas.\u00A0\u00BB Alors tortillant sa moustache blanche, il a d\u00E9clar\u00E9 sans me regarder\u00A0: \u00AB\u00A0Je comprends.\u00A0\u00BB Il avait de beaux yeux, bleu clair, et un teint un peu rouge. Il m\u2019a donn\u00E9 une chaise et lui-m\u00EAme s\u2019est assis un peu en arri\u00E8re de moi. La garde s\u2019est lev\u00E9e et s\u2019est dirig\u00E9e vers la sortie. \u00C0 ce moment, le concierge m\u2019a dit\u00A0: \u00AB\u00A0C\u2019est un chancre qu\u2019elle a.\u00A0\u00BB Comme je ne comprenais pas, j\u2019ai regard\u00E9 l\u2019infirmi\u00E8re et j\u2019ai vu qu\u2019elle portait sous les yeux un bandeau qui faisait le tour de la t\u00EAte. \u00C0 la hauteur du nez, le bandeau \u00E9tait plat. On ne voyait que la blancheur du bandeau dans son visage. Quand elle est partie, le concierge a parl\u00E9\u00A0: \u00AB\u00A0Je vais vous laisser seul.\u00A0\u00BB Je ne sais pas quel geste j\u2019ai fait, mais il est rest\u00E9, debout derri\u00E8re moi. Cette pr\u00E9sence dans mon dos me g\u00EAnait. La pi\u00E8ce \u00E9tait pleine d\u2019une belle lumi\u00E8re de fin d\u2019apr\u00E8s-midi. Deux frelons bourdonnaient contre la verri\u00E8re. Et je sentais le sommeil me gagner. J\u2019ai dit au concierge, sans me retourner vers lui\u00A0: \u00AB\u00A0Il y a longtemps que vous \u00EAtes l\u00E0\u00A0?\u00A0\u00BB Imm\u00E9diatement il a r\u00E9pondu\u00A0: \u00AB\u00A0Cinq ans\u00A0\u00BB - comme s\u2019il avait attendu depuis toujours ma demande. Ensuite, il a beaucoup bavard\u00E9. On l\u2019aurait bien \u00E9tonn\u00E9 en lui disant qu\u2019il finirait concierge \u00E0 l\u2019asile de Marengo. Il avait soixante-quatre ans et il \u00E9tait Parisien. \u00C0 ce moment je l\u2019ai interrompu\u00A0: \u00AB\u00A0Ah, vous n\u2019\u00EAtes pas d\u2019ici\u00A0?\u00A0\u00BB Puis je me suis souvenu qu\u2019avant de me conduire chez le directeur, il m\u2019avait parl\u00E9 de maman. Il m\u2019avait dit qu\u2019il fallait l\u2019enterrer tr\u00E8s vite, parce que dans la plaine il faisait chaud, surtout dans ce pays. C\u2019est alors qu\u2019il m\u2019avait appris qu\u2019il avait v\u00E9cu \u00E0 Paris et qu\u2019il avait du mal \u00E0 l\u2019oublier. \u00C0 Paris, on reste avec le mort trois, quatre jours quelquefois. Ici on n\u2019a pas le temps, on ne s\u2019est pas fait \u00E0 l\u2019id\u00E9e que d\u00E9j\u00E0 il faut courir derri\u00E8re le corbillard. Sa femme lui avait dit alors\u00A0: \u00AB\u00A0Tais-toi, ce ne sont pas des choses \u00E0 raconter \u00E0 Monsieur.\u00A0\u00BB Le vieux avait rougi et s\u2019\u00E9tait excus\u00E9. J\u2019\u00E9tais intervenu pour dire\u00A0: \u00AB\u00A0Mais non. Mais non.\u00A0\u00BB Je trouvais ce qu\u2019il racontait juste et int\u00E9ressant. Dans la petite morgue, il m\u2019a appris qu\u2019il \u00E9tait entr\u00E9 \u00E0 l\u2019asile"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                            className: "mt-10 border-none h-0 text-center text-base tracking-[0.35em]",
                                            style: {
                                                color: "rgba(255,255,255,0.7)"
                                            },
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center text-base tracking-[0.35em] mt-2 mb-0",
                                            style: {
                                                color: "rgba(255,255,255,0.7)"
                                            },
                                            children: "\u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$parking$2d$lot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParkingLot"], {
                                            carTop: parkingCarTop,
                                            success: parkingSuccess,
                                            visible: isParkingMode
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "mt-12 py-4 px-4 text-center text-xs border-t",
                        style: {
                            borderColor: "rgba(51,51,51,0.5)",
                            color: "rgba(160,160,160,0.4)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "\u00A9 2025 Site Name. All rights reserved."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Page, "ZJXGIDbMMoD/bxeEe5TsLTZlZDA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$vroom$2d$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVroomEngine"]
    ];
});
_c1 = Page;
var _c, _c1;
__turbopack_context__.k.register(_c, "InlineAds");
__turbopack_context__.k.register(_c1, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1a523e8a._.js.map