"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LayoutGrid, X, Search as SearchIcon, FileText, Sun, Moon } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import { useTheme } from "./ThemeProvider";

type Item = {
  id: string;
  label: string;
  icon: React.ReactNode;
  shortcut?: string;
  action: () => void;
};

const PAGE_META: Record<string, { label: string; description: string }> = {
  "/":               { label: "Home",          description: "About me and what I'm up to" },
  "/projects":       { label: "Projects",      description: "Things I've built and shipped" },
  "/proof-of-work":  { label: "Proof of Work", description: "Open source activity and contributions" },
  "/resume":         { label: "Resume",        description: "My experience, in one document" },
};

export default function CommandPalette() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const [open,   setOpen]   = useState(false);
  const [query,  setQuery]  = useState("");
  const [active, setActive] = useState(0);

  const close = useCallback(() => { setOpen(false); setQuery(""); setActive(0); }, []);

  const go = useCallback((path: string) => {
    close();
    router.push(path);
  }, [close, router]);

  const openExternal = useCallback((url: string) => {
    close();
    window.open(url, "_blank", "noopener,noreferrer");
  }, [close]);

  const links: Item[] = useMemo(() => [
    { id: "x",        label: "X Profile",        icon: <FaXTwitter />, shortcut: "shift+X", action: () => openExternal("https://x.com/kaushalxcode") },
    { id: "linkedin", label: "LinkedIn Profile",  icon: <FaLinkedin />, shortcut: "shift+L", action: () => openExternal("https://www.linkedin.com/in/kaushalendra-singh-45b933272/") },
    { id: "github",   label: "GitHub Profile",    icon: <FaGithub />,   shortcut: "shift+G", action: () => openExternal("https://github.com/Kaushalendra-Marcus") },
    { id: "email",    label: "Email",             icon: <FaEnvelope />, shortcut: "shift+E", action: () => openExternal("mailto:yadavkausha4a5@gmail.com") },
    { id: "resume",   label: "View Resume",       icon: <FileText className="w-[13px] h-[13px]" />, shortcut: "shift+R", action: () => go("/resume") },
  ], [openExternal, go]);

  const general: Item[] = useMemo(() => [
    { id: "home",     label: "Home",              icon: <LayoutGrid className="w-[13px] h-[13px]" />, action: () => go("/") },
    { id: "projects", label: "Projects",          icon: <LayoutGrid className="w-[13px] h-[13px]" />, action: () => go("/projects") },
    { id: "pow",      label: "Proof of Work",     icon: <LayoutGrid className="w-[13px] h-[13px]" />, action: () => go("/proof-of-work") },
    {
      id: "theme",
      label: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
      icon: theme === "dark" ? <Sun className="w-[13px] h-[13px]" /> : <Moon className="w-[13px] h-[13px]" />,
      action: () => { toggleTheme(); close(); },
    },
  ], [go, theme, toggleTheme, close]);

  const allItems = useMemo(() => [...links, ...general], [links, general]);

  const filtered = query.trim()
    ? allItems.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()))
    : allItems;

  const filteredLinks   = filtered.filter((i) => links.includes(i));
  const filteredGeneral = filtered.filter((i) => general.includes(i));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      const typing = tag === "INPUT" || tag === "TEXTAREA";

      // Global shift+letter shortcuts — work whether the palette is open or not.
      if (!typing && e.shiftKey && !e.metaKey && !e.ctrlKey) {
        const match = links.find((l) => l.shortcut === `shift+${e.key.toUpperCase()}`);
        if (match) { e.preventDefault(); match.action(); return; }
      }

      if (!typing && (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key === "k"))) {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }

      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, filtered.length - 1)); }
      if (e.key === "ArrowUp")   { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
      if (e.key === "Enter" && filtered[active]) filtered[active].action();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, close, filtered, active, links]);

  useEffect(() => setActive(0), [query]);

  if (!open) return null;

  const current = PAGE_META[pathname] ?? PAGE_META["/"];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[14vh] px-4"
      onClick={close}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-md bg-popover border border-border
          rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Current page header */}
        <div className="flex items-start justify-between gap-3 px-4 pt-4 pb-3">
          <div className="flex items-start gap-3 min-w-0">
            <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-foreground/[0.06] border border-border
              flex items-center justify-center text-foreground/70">
              <LayoutGrid className="w-[16px] h-[16px]" />
            </span>
            <div className="min-w-0 pt-0.5">
              <p className="text-sm font-semibold text-popover-foreground">{current.label}</p>
              <p className="text-xs text-muted-foreground truncate">{current.description}</p>
            </div>
          </div>
          <button
            onClick={close}
            aria-label="Close"
            className="flex-shrink-0 p-1 text-foreground/35 hover:text-foreground/70 transition-colors"
          >
            <X className="w-[15px] h-[15px]" />
          </button>
        </div>

        {/* search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-t border-b border-border">
          <SearchIcon className="w-[14px] h-[14px] text-foreground/30 flex-shrink-0" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for actions..."
            className="flex-1 bg-transparent text-sm text-popover-foreground placeholder-foreground/30
              outline-none border-none"
          />
          <kbd className="text-[10px] text-foreground/35 font-mono bg-foreground/[0.05]
            border border-border rounded px-1.5 py-0.5">
            esc
          </kbd>
        </div>

        {/* results */}
        <div className="py-1.5 max-h-80 overflow-y-auto">
          {filtered.length === 0 ? (
            <p className="px-4 py-3 text-sm text-foreground/40">No actions found</p>
          ) : (
            <>
              {filteredLinks.length > 0 && (
                <div className="mb-1">
                  <p className="px-4 pt-2 pb-1 text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Links</p>
                  {filteredLinks.map((item) => {
                    const i = filtered.indexOf(item);
                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        onMouseEnter={() => setActive(i)}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between gap-3 ${
                          active === i ? "bg-foreground/[0.06] text-popover-foreground" : "text-foreground/60 hover:text-foreground/85"
                        }`}
                      >
                        <span className="flex items-center gap-3 min-w-0">
                          <span className="flex-shrink-0 w-4 text-center text-[13px]">{item.icon}</span>
                          <span className="truncate">{item.label}</span>
                        </span>
                        {item.shortcut && (
                          <kbd className="flex-shrink-0 text-[10px] text-foreground/35 font-mono bg-foreground/[0.05]
                            border border-border rounded px-1.5 py-0.5">
                            {item.shortcut}
                          </kbd>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {filteredGeneral.length > 0 && (
                <div>
                  <p className="px-4 pt-2 pb-1 text-[10px] uppercase tracking-wider text-muted-foreground font-medium">General</p>
                  {filteredGeneral.map((item) => {
                    const i = filtered.indexOf(item);
                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        onMouseEnter={() => setActive(i)}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-3 ${
                          active === i ? "bg-foreground/[0.06] text-popover-foreground" : "text-foreground/60 hover:text-foreground/85"
                        }`}
                      >
                        <span className="flex-shrink-0 w-4 text-center text-[13px]">{item.icon}</span>
                        <span className="truncate">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>

        {/* footer hint */}
        <div className="px-4 py-2 border-t border-border flex items-center gap-4">
          <span className="text-[10px] text-foreground/35 font-mono">↑↓ to navigate</span>
          <span className="text-[10px] text-foreground/35 font-mono">↵ to select</span>
          <span className="text-[10px] text-foreground/35 font-mono">esc to close</span>
        </div>
      </div>
    </div>
  );
}
