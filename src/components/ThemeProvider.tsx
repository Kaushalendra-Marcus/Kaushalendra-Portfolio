"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
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

// Total time the reveal animation runs for, start to finish.
const CORNER_WIPE_DURATION_MS = 460;

// Smooth deceleration, no overshoot — a plain, premium ease rather than
// a bounce. Fast to start, gentle to land.
const CORNER_WIPE_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Corner-to-corner wipe — the incoming theme grows as a plain rectangle
 * pinned to the top-right corner (where the toggle lives) and expanding
 * toward the bottom-left, so its free corner slides in a single straight
 * line across the screen. Two clip-path states, browser-interpolated —
 * no per-frame shape math, no wobble, no bounce.
 */
const CORNER_WIPE_KEYFRAMES: Keyframe[] = [
  { clipPath: "inset(0% 0% 100% 100%)", offset: 0 },
  { clipPath: "inset(0% 0% 0% 0%)", offset: 1 },
];

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

  const toggleTheme = () => {
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

    try {
      const transition = doc.startViewTransition(applyTheme);

      transition.ready
        .then(() => {
          document.documentElement.animate(CORNER_WIPE_KEYFRAMES, {
            duration: CORNER_WIPE_DURATION_MS,
            easing: CORNER_WIPE_EASING,
            pseudoElement: "::view-transition-new(root)",
          });
        })
        .catch(() => {
          // A second click before the first transition finishes causes the
          // browser to skip this one and reject `ready` — applyTheme()
          // already ran via the startViewTransition callback either way.
        });
    } catch {
      // Anything unexpected here should never leave a click doing
      // nothing — fall back to the instant swap.
      applyTheme();
    }
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
