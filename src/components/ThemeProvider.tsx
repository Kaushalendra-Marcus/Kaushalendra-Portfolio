"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
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

  const toggleTheme = () => {
    playClickSound();
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem("theme", next);
      } catch {
        // localStorage unavailable (private browsing etc.) — theme just
        // won't persist across visits, not worth failing over.
      }
      return next;
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
