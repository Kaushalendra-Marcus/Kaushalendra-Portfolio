"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex items-center justify-center w-7 h-7 rounded-lg
        text-foreground/45 hover:text-foreground/85 hover:bg-foreground/[0.06]
        active:scale-90 transition-[color,background-color,transform] duration-150"
    >
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

