"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollLine() {
  const [sections, setSections] = useState<{ id: string; name: string; top: number }[]>([]);
  const [hoverPercent, setHoverPercent] = useState<number | null>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  // Smooth scroll progress with framer-motion
  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Gather all sections on mount and on resize
  useEffect(() => {
    const updateSections = () => {
      const sectionElements = document.querySelectorAll("section[id]");
      const newSections = Array.from(sectionElements).map((el) => ({
        id: el.id,
        name: el.id.replace(/-/g, " "),
        top: (el as HTMLElement).offsetTop,
      }));
      setSections(newSections);
    };

    updateSections();
    window.addEventListener("resize", updateSections);
    return () => window.removeEventListener("resize", updateSections);
  }, []);

  // Handle mouse move on the line to show percentage
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!lineRef.current) return;
    const rect = lineRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const percent = Math.min(100, Math.max(0, (y / rect.height) * 100));
    setHoverPercent(Math.round(percent));
  };

  const handleMouseLeave = () => setHoverPercent(null);

  // Scroll to a section when a marker is clicked
  const scrollToSection = (top: number) => {
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div
      ref={lineRef}
      className="fixed left-[calc(50%-32rem-1rem)] top-0 h-full w-px z-50 hidden lg:block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Animated progress line with framer-motion */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        style={{ height: lineHeight }}
      >
        {/* Glowing dot at the end with pulsing animation */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400"
          animate={{
            scale: [1, 1.5, 1],
            boxShadow: [
              "0 0 10px rgba(34,211,238,0.8)",
              "0 0 20px rgba(34,211,238,1)",
              "0 0 10px rgba(34,211,238,0.8)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Section markers */}
      {sections.map((section) => (
        <div
          key={section.id}
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 group cursor-pointer"
          style={{ top: `${(section.top / document.documentElement.scrollHeight) * 100}%` }}
          onClick={() => scrollToSection(section.top)}
        >
          <div className="w-full h-full rounded-full bg-white/30 border border-white/50 group-hover:bg-cyan-400/80 transition-colors" />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {section.name}
          </span>
        </div>
      ))}

      {/* Hover tooltip for scroll percentage */}
      {hoverPercent !== null && (
        <div
          className="absolute left-4 -translate-y-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded"
          style={{ top: `${hoverPercent}%` }}
        >
          {hoverPercent}%
        </div>
      )}

      {/* Zig message – subtle and playful */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 text-xs text-gray-500 whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity">
        ⚡ like zig sometimes
      </div>
    </div>
  );
}