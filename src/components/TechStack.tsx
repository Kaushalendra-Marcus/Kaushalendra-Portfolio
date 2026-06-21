"use client";

import { techStack } from "@/data/skills";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TechStack() {
  const mid = Math.ceil(techStack.length / 2);
  const row1 = techStack.slice(0, mid);
  const row2 = techStack.slice(mid);

  const row1Loop = [...row1, ...row1];
  const row2Loop = [...row2, ...row2];

  const [paused, setPaused] = useState(false);

  return (
    <section className="mb-16 pb-10 border-b border-white/[0.06] px-2">

      <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
        My Stack
      </h2>

      <div
        className="relative min-h-[140px] flex flex-col justify-center overflow-hidden gap-0"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />

        {/* ROW 1 — left scroll, pauses on hover */}
        <motion.div
          className="flex gap-4 whitespace-nowrap will-change-transform"
          animate={paused ? {} : { x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {row1Loop.map((tech, index) => (
            <motion.div
              key={`row1-${tech}-${index}`}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex-shrink-0"
            >
              <span className="px-5 py-2.5 rounded-xl border border-white/10
                bg-white/[0.04] text-sm text-white/70
                hover:text-white hover:border-cyan-400/40 hover:bg-white/[0.08]
                transition-all duration-200 cursor-default select-none">
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ROW 2 — right scroll, pauses on hover */}
        <motion.div
          className="flex gap-4 whitespace-nowrap mt-6 will-change-transform"
          animate={paused ? {} : { x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {row2Loop.map((tech, index) => (
            <motion.div
              key={`row2-${tech}-${index}`}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex-shrink-0"
            >
              <span className="px-5 py-2.5 rounded-xl border border-white/10
                bg-white/[0.04] text-sm text-white/70
                hover:text-white hover:border-cyan-400/40 hover:bg-white/[0.08]
                transition-all duration-200 cursor-default select-none">
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
