"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About",      href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "GitHub",     href: "#github" },
  { label: "Writing",    href: "#writing" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen]           = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = NAV_LINKS.map(l => l.href.replace("#", ""));
      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/[0.05]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 h-12 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="text-xs font-mono text-white/30 hover:text-white/70 transition-colors tracking-widest uppercase"
        >
          KS
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`text-xs transition-colors duration-200 ${
                  isActive ? "text-white/80" : "text-white/25 hover:text-white/55"
                }`}
              >
                {label}
              </button>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="https://cal.com/kaushalendra/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-xs text-white/40 hover:text-white/80
            border border-white/[0.08] hover:border-white/[0.18]
            rounded-lg px-3 py-1.5 transition-all duration-200"
        >
          Schedule a call
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`block h-px w-4 bg-white/40 transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-px w-4 bg-white/40 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-4 bg-white/40 transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#080808]/95 backdrop-blur-xl border-b border-white/[0.05] px-6 pb-5 pt-3">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-left py-2 text-sm text-white/35 hover:text-white/70 transition-colors"
              >
                {label}
              </button>
            ))}
            <a
              href="https://cal.com/kaushalendra/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-sm text-white/50 border border-white/[0.08] rounded-lg px-4 py-2 text-center hover:text-white/80 transition-colors"
            >
              Schedule a call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
