"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 2000, suffix: "+", label: "Active users" },
  { value: 9,    suffix: "",  label: "Projects shipped" },
  { value: 3,    suffix: "",  label: "Internships" },
  { value: 976,  suffix: "+", label: "GitHub commits" },
  { value: 4,    suffix: "",  label: "Articles published" },
];

function useCountUp(target: number, duration = 1200, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // ease out
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return count;
}

function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, 1000, active);
  return (
    <div className="flex flex-col items-center sm:items-start gap-0.5">
      <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight tabular-nums">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-[11px] text-white/25 uppercase tracking-[0.1em] font-medium">{label}</p>
    </div>
  );
}

export default function StatsBar() {
  const ref  = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mb-24 pb-16 border-b border-white/[0.06]
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-8"
    >
      {STATS.map((s) => (
        <StatItem key={s.label} {...s} active={active} />
      ))}
    </div>
  );
}
