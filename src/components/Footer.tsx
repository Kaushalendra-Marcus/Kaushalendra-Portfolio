"use client";

export default function Footer() {
  return (
    <footer className="pt-16 pb-10">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 mb-4 text-center lg:text-left">
        <p className="text-xs text-foreground/40 font-mono">
          Kaushalendra Singh &nbsp;·&nbsp; {new Date().getFullYear()}
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-6 flex-wrap">
          {[
            { label: "GitHub",   href: "https://github.com/Kaushalendra-Marcus" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/kaushalendra-singh-45b933272/" },
            { label: "X",        href: "https://x.com/kaushalxcode" },
            { label: "Email",    href: "mailto:yadavkausha4a5@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-xs text-foreground/40 hover:text-foreground/75 transition-colors link-underline"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
      {/* Keyboard shortcut hint — centered only on mobile/tablet, left on desktop */}
      <p className="text-[10px] text-foreground/35 font-mono text-center lg:text-left">
        Press{" "}
        <kbd className="text-foreground/40 bg-foreground/[0.05] border border-border rounded px-1 py-0.5 text-[9px]">
          /
        </kbd>
        {" "}or{" "}
        <kbd className="text-foreground/40 bg-foreground/[0.05] border border-border rounded px-1 py-0.5 text-[9px]">
          ⌘K
        </kbd>
        {" "}to open the command palette
      </p>
    </footer>
  );
}
