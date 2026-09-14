"use client";

import { useEffect, useRef, useState } from "react";
import { MousePointer2, Sparkles, Circle, Ghost, Ban, Check } from "lucide-react";
import {
  CURSOR_COLOR_EVENT,
  CURSOR_COLOR_KEY,
  CURSOR_MODE_EVENT,
  CURSOR_MODE_KEY,
  DEFAULT_CURSOR_COLOR,
  type CursorMode,
} from "./CustomCursor";

const OPTIONS: Array<{
  value: CursorMode;
  label: string;
  hint: string;
  Icon: typeof Sparkles;
}> = [
  { value: "trail", label: "Trail", hint: "Dot + fading trail", Icon: Sparkles },
  { value: "ring", label: "Ring", hint: "Dot + trailing ring", Icon: Circle },
  { value: "ghost", label: "Ghost", hint: "Bouncy little companion", Icon: Ghost },
  { value: "off", label: "Off", hint: "System cursor", Icon: Ban },
];

// Tint applied over the difference blend — stays visible in both themes,
// tinted toward the chosen hue.
const COLORS: Array<{ value: string; label: string }> = [
  { value: DEFAULT_CURSOR_COLOR, label: "Auto white" },
  { value: "#22D3EE", label: "Cyan" },
  { value: "#A78BFA", label: "Violet" },
  { value: "#A3E635", label: "Lime" },
  { value: "#F472B6", label: "Pink" },
];

// Navbar control for the custom cursor style. Persists to localStorage and
// notifies CustomCursor through window events — no shared state needed.
export default function CursorSettings() {
  const [mode, setMode] = useState<CursorMode>("trail");
  const [color, setColor] = useState<string>(DEFAULT_CURSOR_COLOR);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const v = window.localStorage.getItem(CURSOR_MODE_KEY);
      if (v === "ring" || v === "ghost" || v === "off") setMode(v);
      const c = window.localStorage.getItem(CURSOR_COLOR_KEY);
      if (c && /^#[0-9a-fA-F]{6}$/.test(c)) setColor(c);
    } catch {
      // Storage unavailable — defaults still apply.
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open ]);

  const pick = (next: CursorMode) => {
    setMode(next);
    try {
      window.localStorage.setItem(CURSOR_MODE_KEY, next);
    } catch {
      // Non-persistent session — still applies for this visit.
    }
    window.dispatchEvent(
      new CustomEvent<CursorMode>(CURSOR_MODE_EVENT, { detail: next })
    );
    setOpen(false);
  };

  const pickColor = (next: string) => {
    setColor(next);
    try {
      window.localStorage.setItem(CURSOR_COLOR_KEY, next);
    } catch {
      // Non-persistent session — still applies for this visit.
    }
    window.dispatchEvent(
      new CustomEvent<string>(CURSOR_COLOR_EVENT, { detail: next })
    );
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Cursor style settings"
        title="Cursor style"
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center justify-center w-7 h-7 rounded-lg text-foreground/45
          hover:text-foreground/85 hover:bg-foreground/[0.06] transition-colors duration-200"
      >
        <MousePointer2 className="w-[15px] h-[15px]" />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Cursor style"
          className="absolute right-0 top-9 w-52 overflow-hidden rounded-xl border border-border
            bg-popover/95 backdrop-blur-xl shadow-lg animate-fadeIn"
        >
          <p className="px-3 pt-2.5 pb-1 text-[10px] font-mono uppercase tracking-[0.1em] text-foreground/40">
            Cursor
          </p>
          <div className="pb-1.5">
            {OPTIONS.map(({ value, label, hint, Icon }) => (
              <button
                key={value}
                role="menuitemradio"
                aria-checked={mode === value}
                onClick={() => pick(value)}
                className="flex w-full items-center gap-2.5 px-3 py-2 text-left
                  hover:bg-foreground/[0.06] transition-colors duration-150"
              >
                <Icon className="h-[14px] w-[14px] flex-shrink-0 text-foreground/50" />
                <span className="flex-1">
                  <span className="block text-xs text-foreground/80">{label}</span>
                  <span className="block text-[10px] text-foreground/40">{hint}</span>
                </span>
                {mode === value && (
                  <Check className="h-3.5 w-3.5 flex-shrink-0 text-foreground/70" />
                )}
              </button>
            ))}
          </div>

          <div className="border-t border-border px-3 pt-2 pb-2.5">
            <p className="pb-1.5 text-[10px] font-mono uppercase tracking-[0.1em] text-foreground/40">
              Color
            </p>
            <div className="flex items-center gap-2" role="radiogroup" aria-label="Cursor color">
              {COLORS.map(({ value, label }) => {
                const active = color === value;
                return (
                  <button
                    key={value}
                    role="radio"
                    aria-checked={active}
                    title={label}
                    aria-label={label}
                    onClick={() => pickColor(value)}
                    style={{ backgroundColor: value }}
                    className={`h-5 w-5 rounded-full border border-black/20 transition-transform duration-150 hover:scale-110 dark:border-white/25 ${
                      active ? "ring-2 ring-foreground/60 ring-offset-2 ring-offset-popover" : ""
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
