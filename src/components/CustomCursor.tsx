"use client";

import { useEffect, useRef, useState } from "react";

// Custom cursor with switchable styles (see CursorSettings.tsx).
// - Zero React re-renders per frame: one rAF loop, direct DOM transforms.
// - Desktop only (fine pointers), skipped for reduced-motion users.
// - Nodes render as fixed siblings (no wrapper): a positioned ancestor with
//   a z-index would create a stacking context that traps mix-blend-difference
//   inside it, making the dots always-white and invisible on light mode.
// - Native cursor stays hidden via body.has-custom-cursor (see globals.css),
//   except over text fields where the I-beam caret takes over.
export type CursorMode = "trail" | "ring" | "off";
export const CURSOR_MODE_KEY = "cursor-mode";
export const CURSOR_MODE_EVENT = "cursor-mode-change";
export const CURSOR_COLOR_KEY = "cursor-color";
export const CURSOR_COLOR_EVENT = "cursor-color-change";
export const DEFAULT_CURSOR_COLOR = "#ffffff";

const TRAIL_COUNT = 10;
const DOT_SIZE = 10;
const HOVER_SCALE = 2;

function readMode(): CursorMode {
  if (typeof window === "undefined") return "trail";
  try {
    const v = window.localStorage.getItem(CURSOR_MODE_KEY);
    if (v === "ring" || v === "off") return v;
  } catch {
    // Private browsing etc. — fall back to the default trail.
  }
  return "trail";
}

function readColor(): string {
  if (typeof window === "undefined") return DEFAULT_CURSOR_COLOR;
  try {
    const v = window.localStorage.getItem(CURSOR_COLOR_KEY);
    if (v && /^#[0-9a-fA-F]{6}$/.test(v)) return v;
  } catch {
    // Private browsing etc. — fall back to white.
  }
  return DEFAULT_CURSOR_COLOR;
}

export default function CustomCursor() {
  const [mode, setMode] = useState<CursorMode>(readMode);
  const [color, setColor] = useState<string>(readColor);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const onMode = (e: Event) => {
      const next = (e as CustomEvent<CursorMode>).detail;
      setMode(next === "ring" || next === "off" ? next : "trail");
    };
    window.addEventListener(CURSOR_MODE_EVENT, onMode);
    const onColor = (e: Event) => {
      const next = (e as CustomEvent<string>).detail;
      if (next && /^#[0-9a-fA-F]{6}$/.test(next)) setColor(next);
    };
    window.addEventListener(CURSOR_COLOR_EVENT, onColor);
    return () => {
      window.removeEventListener(CURSOR_MODE_EVENT, onMode);
      window.removeEventListener(CURSOR_COLOR_EVENT, onColor);
    };
  }, []);

  useEffect(() => {
    if (mode === "off") {
      document.body.classList.remove("has-custom-cursor");
      return;
    }
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const trail = trailRefs.current.filter(
      (n): n is HTMLDivElement => n !== null
    );
    if (!dot) return;

    const nodes =
      mode === "trail" ? [dot, ...trail] : ring ? [dot, ring] : [dot];
    // Trail nodes carry their fade as inline opacity — remember it so
    // show/hide restores the fade instead of flattening it to 1.
    const baseOpacity = nodes.map((n) => n.style.opacity || "1");
    const show = (v: boolean) =>
      nodes.forEach((n, i) => {
        n.style.opacity = v ? baseOpacity[i] : "0";
      });

    document.body.classList.add("has-custom-cursor");

    let mx = -100;
    let my = -100;
    const px = new Array(nodes.length).fill(-100);
    const py = new Array(nodes.length).fill(-100);
    let dotScale = 1;
    let targetDotScale = 1;
    let ringScale = 1;
    let ringTarget = 1;
    let shown = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      const t = e.target as HTMLElement | null;
      const textField = !!t?.closest?.("input, textarea, select");
      const interactive =
        !!t?.closest?.(
          "a, button, [role='button'], label, [data-cursor='hover']"
        ) && !textField;

      targetDotScale = interactive ? HOVER_SCALE : 1;
      ringTarget = interactive ? 1.8 : 1;

      // Native I-beam handles text fields — hide the custom nodes there.
      if (textField) {
        if (shown) {
          shown = false;
          show(false);
        }
        return;
      }
      if (!shown) {
        shown = true;
        show(true);
      }
    };

    const onLeave = () => {
      if (shown) {
        shown = false;
        show(false);
      }
    };

    const loop = () => {
      if (mode === "trail") {
        // Dot eases toward the pointer; each trail node chases the one ahead
        // with a looser follow the further back it sits — that falloff is
        // what reads as a natural trail rather than a rigid snake.
        px[0] += (mx - px[0]) * 0.4;
        py[0] += (my - py[0]) * 0.4;
        dotScale += (targetDotScale - dotScale) * 0.2;
        dot.style.transform = `translate3d(${px[0]}px, ${py[0]}px, 0) translate(-50%, -50%) scale(${dotScale.toFixed(3)})`;

        for (let i = 1; i < nodes.length; i++) {
          const follow = Math.max(0.12, 0.3 - (i - 1) * 0.018);
          px[i] += (px[i - 1] - px[i]) * follow;
          py[i] += (py[i - 1] - py[i]) * follow;
          nodes[i].style.transform = `translate3d(${px[i]}px, ${py[i]}px, 0) translate(-50%, -50%)`;
        }
      } else {
        // Ring mode: precise dot + a lerped ring that grows on hover.
        px[0] = mx;
        py[0] = my;
        px[1] += (mx - px[1]) * 0.16;
        py[1] += (my - py[1]) * 0.16;
        ringScale += (ringTarget - ringScale) * 0.18;
        dotScale += (targetDotScale - dotScale) * 0.2;
        dot.style.transform = `translate3d(${px[0]}px, ${py[0]}px, 0) translate(-50%, -50%) scale(${dotScale.toFixed(3)})`;
        if (ring) {
          ring.style.transform = `translate3d(${px[1]}px, ${py[1]}px, 0) translate(-50%, -50%) scale(${ringScale.toFixed(3)})`;
        }
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [mode]);

  if (mode === "off") return null;

  return (
    <>
      {/* Lead dot */}
      <div
        ref={dotRef}
        aria-hidden
        style={{ width: DOT_SIZE, height: DOT_SIZE, backgroundColor: color }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] rounded-full
          opacity-0 mix-blend-difference transition-opacity duration-200 will-change-transform"
      />
      {mode === "ring" ? (
        <div
          ref={ringRef}
          aria-hidden
          style={{ borderColor: color }}
          className="pointer-events-none fixed left-0 top-0 z-[10000] h-9 w-9 rounded-full
            border-[1.5px] opacity-0 mix-blend-difference transition-opacity duration-200 will-change-transform"
        />
      ) : (
        /* Fading trail — shrinks and fades toward the tail */
        Array.from({ length: TRAIL_COUNT }).map((_, i) => {
          const t = (i + 1) / (TRAIL_COUNT + 1);
          const size = Math.max(2, DOT_SIZE * (1 - t));
          const opacity = 0.55 * (1 - t);
          return (
            <div
              key={i}
              ref={(el) => {
                trailRefs.current[i] = el;
              }}
              aria-hidden
              style={{ width: size, height: size, opacity, backgroundColor: color }}
              className="pointer-events-none fixed left-0 top-0 z-[10000] rounded-full
                mix-blend-difference transition-opacity duration-200 will-change-transform"
            />
          );
        })
      )}
    </>
  );
}
