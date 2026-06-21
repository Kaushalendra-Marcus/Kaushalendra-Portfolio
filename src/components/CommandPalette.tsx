"use client";

import { useEffect, useState, useCallback } from "react";

const SECTIONS = [
  { label: "About",              id: "hero" },
  { label: "Experience",         id: "experience" },
  { label: "Projects",           id: "projects" },
  { label: "Open Source",        id: "open-source" },
  { label: "GitHub Activity",    id: "github" },
  { label: "Writing",            id: "writing" },
  { label: "Skills",             id: "skills" },
  { label: "Contact",            id: "contact" },
];

export default function CommandPalette() {
  const [open,   setOpen]   = useState(false);
  const [query,  setQuery]  = useState("");
  const [active, setActive] = useState(0);

  const close = useCallback(() => { setOpen(false); setQuery(""); setActive(0); }, []);

  const filtered = query.trim()
    ? SECTIONS.filter(s => s.label.toLowerCase().includes(query.toLowerCase()))
    : SECTIONS;

  const go = useCallback((id: string) => {
    close();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, [close]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // open with / or cmd/ctrl+K — but not when typing in an input
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key === "k")) {
        e.preventDefault();
        setOpen(o => !o);
      }
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowDown") setActive(a => Math.min(a + 1, filtered.length - 1));
      if (e.key === "ArrowUp")   setActive(a => Math.max(a - 1, 0));
      if (e.key === "Enter" && filtered[active]) go(filtered[active].id);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, close, filtered, active, go]);

  // reset active when query changes
  useEffect(() => setActive(0), [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]"
      onClick={close}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* palette */}
      <div
        className="relative w-full max-w-md mx-4 bg-[#111] border border-white/[0.10]
          rounded-2xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white/30 flex-shrink-0">
            <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M9.5 9.5L12.5 12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <input
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Jump to section..."
            className="flex-1 bg-transparent text-sm text-white placeholder-white/30
              outline-none border-none"
          />
          <kbd className="text-[10px] text-white/35 font-mono bg-white/[0.05]
            border border-white/[0.08] rounded px-1.5 py-0.5">
            esc
          </kbd>
        </div>

        {/* results */}
        <div className="py-1.5 max-h-72 overflow-y-auto">
          {filtered.length === 0 ? (
            <p className="px-4 py-3 text-sm text-white/40">No sections found</p>
          ) : (
            filtered.map((s, i) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                onMouseEnter={() => setActive(i)}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${
                  active === i ? "bg-white/[0.06] text-white" : "text-white/55 hover:text-white/80"
                }`}
              >
                {s.label}
                {active === i && (
                  <kbd className="text-[10px] text-white/35 font-mono">enter</kbd>
                )}
              </button>
            ))
          )}
        </div>

        {/* footer hint */}
        <div className="px-4 py-2 border-t border-white/[0.06] flex items-center gap-4">
          <span className="text-[10px] text-white/35 font-mono">↑↓ navigate</span>
          <span className="text-[10px] text-white/35 font-mono">↵ go</span>
          <span className="text-[10px] text-white/35 font-mono">esc close</span>
        </div>
      </div>
    </div>
  );
}
