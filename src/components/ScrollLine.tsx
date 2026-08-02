"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

export default function ScrollLine() {
  const [sections, setSections] = useState<{ id: string; name: string; top: number }[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  
  // Smooth spring for the cursor
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  });

  const cursorTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Animate the pattern's vertical position to create a flowing/zigzag effect
  const patternOffset = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const updateSections = () => {
      const els = document.querySelectorAll("section[id]");
      const sectionsArray = Array.from(els).map((el) => ({
        id: el.id,
        name: el.id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        top: (el as HTMLElement).offsetTop,
      }));
      setSections(sectionsArray);
    };
    updateSections();
    window.addEventListener("resize", updateSections);
    return () => window.removeEventListener("resize", updateSections);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      let current = sections[0]?.id ?? "";
      for (const s of sections) {
        if (scrollY >= s.top) current = s.id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const scrollToSection = (top: number) => {
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollHeight = typeof document !== "undefined" ? document.documentElement.scrollHeight : 1;
  const labelMap: Record<string, string> = { hero: "Intro" };

  return (
    <div
      ref={lineRef}
      className="fixed top-0 h-full z-50 hidden lg:block"
      style={{
        left: `max(1.5rem, calc((100vw - 72rem) / 2 - 2rem))`,
        width: "1px",
      }}
    >
      {/* Base track */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/[0.05] to-transparent" />

      {/* Progress fill with blue gradient + moving pattern */}
      <motion.div
        className="absolute top-0 left-0 w-full overflow-hidden"
        style={{ height: progressHeight }}
      >
        {/* Blue gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/40 via-indigo-500/30 to-cyan-400/40" />
        
        {/* Animated zigzag pattern — moves as you scroll */}
        <motion.div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.2) 0px,
              rgba(255,255,255,0.2) 3px,
              transparent 3px,
              transparent 10px
            )`,
            backgroundSize: "100% 100%",
            // This makes the pattern scroll and feel alive
            backgroundPosition: `0 ${patternOffset}`,
          }}
        />
        
        {/* Subtle glass overlay */}
        <div className="absolute inset-0 bg-background/[0.08] backdrop-blur-[0.5px]" />
      </motion.div>

      {/* Section markers */}
      {sections.map((section) => {
        const pct = (section.top / scrollHeight) * 100;
        const isActive = activeSection === section.id;
        const isHovered = hoveredSection === section.id;
        const label = labelMap[section.id] ?? section.name;

        return (
          <div
            key={section.id}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ top: `${pct}%` }}
            onClick={() => scrollToSection(section.top)}
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <motion.div
              animate={{
                scale: isActive ? 1.5 : isHovered ? 1.25 : 1,
                backgroundColor: isActive
                  ? "rgba(59, 130, 246, 0.3)"  // blue-500
                  : isHovered
                  ? "var(--hover-dot-bg, rgba(0,0,0,0.12))"
                  : "var(--rest-dot-bg, rgba(0,0,0,0.05))",
                borderColor: isActive
                  ? "rgba(59, 130, 246, 0.5)"
                  : "var(--dot-border, rgba(0,0,0,0.10))",
              }}
              transition={{ duration: 0.2 }}
              className="w-1.5 h-1.5 rounded-full border backdrop-blur-sm dark:[--hover-dot-bg:rgba(255,255,255,0.12)] dark:[--rest-dot-bg:rgba(255,255,255,0.04)] dark:[--dot-border:rgba(255,255,255,0.08)]"
              style={{
                boxShadow: isActive ? "0 0 12px rgba(59, 130, 246, 0.4)" : "none",
              }}
            />

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                >
                  <div className="relative px-3 py-1.5 bg-popover/90 backdrop-blur-xl rounded-lg border border-border shadow-2xl">
                    <div className="flex items-center gap-1.5">
                      {isActive && (
                        <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                      )}
                      <span className="text-[11px] font-medium text-popover-foreground/80 whitespace-nowrap">
                        {label}
                      </span>
                    </div>
                    <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-popover/90 backdrop-blur-xl border-l border-b border-border rotate-45" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      {/* Floating cursor orb with blue glow */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ top: cursorTop }}
      >
        <motion.div
          className="relative"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 -m-1 rounded-full bg-blue-400/30 blur-md" />
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-300/40 to-indigo-400/30 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/70" />
        </motion.div>
      </motion.div>
    </div>
  );
}