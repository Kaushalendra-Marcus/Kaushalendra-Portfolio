"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (origin?: { x: number; y: number }) => void;
}

// The View Transitions API isn't in TS's DOM lib on every version we might
// build with, so we type just the bit we use rather than pulling in a
// third-party lib.dom augmentation.
type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => {
    ready: Promise<void>;
    finished: Promise<void>;
  };
};

/**
 * Start/end clip-path polygons for a "curtain drag" reveal: the incoming
 * theme sweeps in from one edge of the screen to the other — top-down when
 * switching to dark (night falling), bottom-up when switching to light
 * (dawn breaking) — instead of just cutting over. The two points along the
 * leading edge are offset by `tilt`, biased toward whichever side the
 * toggle was clicked on, so the edge reads as a hand dragging a shade
 * rather than a robotic straight line. Only two keyframes are needed —
 * the browser interpolates each polygon point linearly between them.
 */
function buildCurtainClipPath(
  toDark: boolean,
  origin?: { x: number; y: number }
): [string, string] {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const tilt = Math.min(w, h) * 0.07;
  const clickX = origin?.x ?? w - 28;
  const leftLeads = clickX <= w / 2;

  if (toDark) {
    // Curtain falls from the top edge down to the bottom.
    const leftStart = leftLeads ? 0 : -tilt;
    const rightStart = leftLeads ? -tilt : 0;
    const start = `polygon(0px 0px, ${w}px 0px, ${w}px ${rightStart}px, 0px ${leftStart}px)`;
    const end = `polygon(0px 0px, ${w}px 0px, ${w}px ${h + tilt}px, 0px ${h + tilt}px)`;
    return [start, end];
  }

  // Curtain rises from the bottom edge up to the top.
  const leftStart = leftLeads ? h : h + tilt;
  const rightStart = leftLeads ? h + tilt : h;
  const start = `polygon(0px ${h}px, ${w}px ${h}px, ${w}px ${rightStart}px, 0px ${leftStart}px)`;
  const end = `polygon(0px ${h}px, ${w}px ${h}px, ${w}px ${-tilt}px, 0px ${-tilt}px)`;
  return [start, end];
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // The blocking inline script in layout.tsx already set the correct
  // class on <html> before hydration (avoids a flash of the wrong
  // theme). We just read it back here so React's state agrees with
  // what's already painted.
  const [theme, setTheme] = useState<Theme>("dark");
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const playClickSound = () => {
    if (!clickSoundRef.current) {
      clickSoundRef.current = new Audio("/audio/click-effect-sound.mp3");
      clickSoundRef.current.volume = 0.4;
    }
    clickSoundRef.current.currentTime = 0;
    clickSoundRef.current.play().catch(() => {
      // Autoplay can be blocked before any user gesture; safe to ignore
      // since this always fires from a click/keypress handler.
    });
  };

  const toggleTheme = (origin?: { x: number; y: number }) => {
    playClickSound();

    const next = theme === "dark" ? "light" : "dark";
    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem("theme", next);
      } catch {
        // localStorage unavailable (private browsing etc.) — theme just
        // won't persist across visits, not worth failing over.
      }
      setTheme(next);
    };

    const doc = document as ViewTransitionDocument;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // No View Transitions support (or the user asked for less motion) —
    // fall back to the plain instant swap, still backed by the 0.3s
    // color transition already on <body>.
    if (!doc.startViewTransition || reducedMotion) {
      applyTheme();
      return;
    }

    const [startClip, endClip] = buildCurtainClipPath(next === "dark", origin);
    const transition = doc.startViewTransition(applyTheme);

    transition.ready
      .then(() => {
        document.documentElement.animate(
          { clipPath: [startClip, endClip] },
          {
            duration: 750,
            easing: "cubic-bezier(0.65, 0, 0.35, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch(() => {
        // A second click before the first transition finishes causes the
        // browser to skip this one and reject `ready` — applyTheme()
        // already ran via the startViewTransition callback either way.
      });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
