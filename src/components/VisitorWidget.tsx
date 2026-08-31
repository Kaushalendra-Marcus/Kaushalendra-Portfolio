"use client";

import { useEffect, useState } from "react";

// Free, CORS-enabled hit counter — no backend of our own needed.
// countapi.xyz (the previous provider) has been shut down, so this uses
// Abacus, its actively-maintained drop-in replacement (same request
// shape, same { value } response): https://abacus.jasoncameron.dev
// If this third-party service is ever down, the stats just stay hidden
// (caught below) and the quote + open-to-work CTA still render fine.
const COUNTER_URL = "https://abacus.jasoncameron.dev/hit/kaushalendra.me/visits";

function ordinalSuffix(n: number): string {
  const v = n % 100;
  if (v >= 11 && v <= 13) return "th";
  switch (n % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

export default function VisitorWidget() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(COUNTER_URL)
      .then((r) => r.json())
      .then((data: { value: number }) => setCount(data.value))
      .catch(() => setCount(null));
  }, []);

  return (
    <div className="mb-16 bg-card border border-foreground/[0.06] rounded-2xl p-6 space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-start gap-3 max-w-xl">
          <span className="text-3xl text-foreground/20 font-serif leading-none flex-shrink-0 -mt-1" aria-hidden="true">
            &ldquo;
          </span>
          <div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              The best portfolio is running code.
            </p>
          </div>
        </div>

        {count !== null && (
          <div className="flex items-center gap-5 flex-shrink-0">
            <div className="text-left sm:text-right">
              <p className="text-[10px] uppercase tracking-wider text-foreground/35 font-mono mb-0.5">
                Total Visitors
              </p>
              <p className="text-xl font-semibold text-foreground font-mono leading-none">
                {count.toLocaleString()}
              </p>
            </div>

            <div className="hidden sm:block w-px h-8 bg-foreground/[0.08]" aria-hidden="true" />

            <p className="text-sm text-foreground/45 font-mono max-w-[11rem] sm:text-right leading-snug">
              You&apos;re the{" "}
              <span className="text-foreground font-semibold">
                {count.toLocaleString()}
                <sup className="text-[10px] font-normal text-foreground/45">{ordinalSuffix(count)}</sup>
              </span>{" "}
              visitor — thanks for stopping by!
            </p>
          </div>
        )}
      </div>

      {/* Open to work — visitor just scrolled the whole page, good spot to nudge a hiring lead */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3.5 pt-5 border-t border-foreground/[0.06]">
        <p className="flex items-center gap-2.5 text-sm text-foreground/55 leading-relaxed">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span>
            <span className="text-foreground/80 font-medium">Open to work</span>
            {" "}— if my profile fits a role you&apos;re hiring for, I&apos;d love to hear from you.
          </span>
        </p>

        <div className="flex items-center gap-4 flex-shrink-0">
          <a
            href="mailto:yadavkausha4a5@gmail.com"
            className="text-sm font-medium text-foreground/75 hover:text-foreground transition-colors link-underline"
          >
            Email me
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-foreground/90 bg-foreground/[0.06] hover:bg-foreground/[0.10]
              border border-foreground/[0.09] rounded-lg px-4 py-1.5 transition-all duration-200"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
