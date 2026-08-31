"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Projects",      href: "/projects" },
  { label: "Proof of Work", href: "/proof-of-work" },
  { label: "Resume",        href: "/resume" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const openSearch = () => {
    setMenuOpen(false);
    // CommandPalette listens for this same synthetic combo it already
    // handles for real ⌘K presses — one trigger path, no duplicate logic.
    const ev = new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true });
    window.dispatchEvent(ev);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-popover/90 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 h-14 flex items-center justify-between">

        {/* Logo — profile photo, links home */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          aria-label="Home"
          className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden border border-border
            hover:border-foreground/30 transition-colors duration-200"
        >
          <Image
            src="/kaushal.jpeg"
            alt="Kaushalendra Singh"
            width={32}
            height={32}
            className="object-cover w-full h-full"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-xs transition-colors duration-200 ${
                  isActive ? "text-foreground/90 font-medium" : "text-foreground/45 hover:text-foreground/75"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right: search + theme toggle */}
        <div className="flex items-center gap-0.5">
          <button
            onClick={openSearch}
            aria-label="Search"
            title="Search (⌘K)"
            className="flex items-center justify-center w-7 h-7 rounded-lg text-foreground/45
              hover:text-foreground/85 hover:bg-foreground/[0.06] transition-colors duration-200"
          >
            <Search className="w-[15px] h-[15px]" />
          </button>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1 ml-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
          >
            <span className={`block h-px w-4 bg-foreground/50 transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-px w-4 bg-foreground/50 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-4 bg-foreground/50 transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden bg-popover/95 backdrop-blur-xl border-b border-border px-6 pb-5 pt-3">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-left py-2 text-sm text-foreground/55 hover:text-foreground/90 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
      </header>

      {/* Tap-outside-to-close backdrop — sits below the header/drawer (z-50)
          but above page content (z-10), so a tap anywhere on the page behind
          the drawer dismisses it instead of silently hitting content underneath. */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
