"use client";

import { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa6";

const NAV_LINKS = [
  { label: "About",       href: "#hero" },
  { label: "Experience",  href: "#experience" },
  { label: "Projects",    href: "#projects" },
  { label: "GitHub",      href: "#github" },
  { label: "Skills",      href: "#skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen]           = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map(l => l.href.replace("#", ""));
      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.07] shadow-2xl shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 h-14 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="text-sm font-semibold text-white/80 hover:text-white transition-colors tracking-tight"
        >
          KS<span className="text-cyan-400">.</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white bg-white/[0.08]"
                    : "text-gray-500 hover:text-gray-300 hover:bg-white/[0.05]"
                }`}
              >
                {label}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://cal.com/kaushalendra/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5
            bg-gradient-to-r from-blue-600 to-cyan-600
            hover:from-blue-500 hover:to-cyan-500
            rounded-lg text-xs font-semibold text-white
            transition-all duration-200 hover:-translate-y-px shadow-lg"
        >
          <FaCalendar className="text-[10px]" />
          Schedule a call
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1.5"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-px w-5 bg-gray-400 transition-all duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-gray-400 transition-all duration-200 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-gray-400 transition-all duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/[0.07] px-6 pb-5 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-left px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all"
              >
                {label}
              </button>
            ))}
            <a
              href="https://cal.com/kaushalendra/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 px-3.5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-sm font-semibold text-white"
            >
              <FaCalendar />
              Schedule a call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
