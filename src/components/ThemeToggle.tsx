"use client";

import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [pulseKey, setPulseKey] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleTheme({ x: e.clientX, y: e.clientY });
    // Bumping the key remounts the pulse span so the ring animation
    // restarts cleanly even if clicked again before it finishes.
    setPulseKey((k) => k + 1);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex items-center justify-center w-7 h-7 rounded-lg
        text-foreground/45 hover:text-foreground/85 hover:bg-foreground/[0.06]
        active:scale-90 transition-[color,background-color,transform] duration-150"
    >
      <span
        key={pulseKey}
        aria-hidden
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{ animation: pulseKey ? "theme-pulse-ring 0.55s ease-out" : "none" }}
      />
      <Sun
        className="absolute w-[15px] h-[15px] transition-all duration-500"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? "rotate(-180deg) scale(0.4)" : "rotate(0deg) scale(1)",
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      />
      <Moon
        className="absolute w-[15px] h-[15px] transition-all duration-500"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(180deg) scale(0.4)",
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      />
    </button>
  );
}

