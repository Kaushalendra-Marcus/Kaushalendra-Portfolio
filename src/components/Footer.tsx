"use client";

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <p className="text-xs text-white/15 font-mono">
        Kaushalendra Singh &nbsp;·&nbsp; {new Date().getFullYear()}
      </p>
      <div className="flex items-center gap-6">
        {[
          { label: "GitHub",   href: "https://github.com/Kaushalendra-Marcus" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/kaushalendra-singh-45b933272/" },
          { label: "X",        href: "https://x.com/Kaushal__marcus" },
          { label: "Email",    href: "mailto:yadavkausha4a5@gmail.com" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-xs text-white/20 hover:text-white/60 transition-colors link-underline"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
