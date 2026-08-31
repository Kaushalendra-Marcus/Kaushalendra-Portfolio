"use client";

import { useEffect, useState } from "react";

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

  const formatted = count !== null ? count.toLocaleString() : "—";
  const suffix = count !== null ? ordinalSuffix(count) : "";

  return (
    <section className="mb-16">
      {/* keeps the Uiverse structure (outer/dot/card/ray/lines) but re-skinned
          to your portfolio tokens: --card, --foreground, --border, --muted.
          No hardcoded #0c0d0d/#fff — adapts to light and dark via CSS vars. */}
      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-5 items-stretch">
        {/* Left — visitor stat — Uiverse geometry, portfolio palette */}
        <div className="vw-outer mx-auto w-full lg:mx-0">
          <div className="vw-card">
            <div className="vw-dot" aria-hidden="true" />
            <div className="vw-ray" aria-hidden="true" />

            <div className="relative z-[1] flex flex-col items-center justify-center text-center w-[74%] max-w-[15rem] sm:w-auto sm:max-w-[16rem] mx-auto px-1">
              <p className="vw-count">
                {count !== null ? formatted : "···"}
              </p>
              <p className="vw-views-label">
                {count !== null ? "Total Visitors" : "Counting…"}
              </p>

              {count !== null && (
                <p className="mt-3 sm:mt-4 text-[11px] sm:text-xs leading-relaxed text-foreground/45 font-mono break-words">
                  You&apos;re the{" "}
                  <span className="text-foreground font-semibold">
                    {formatted}
                    <sup className="text-[9px] font-normal text-foreground/50 ml-[1px]">
                      {suffix}
                    </sup>
                  </span>{" "}
                  visitor — thanks for visiting!
                </p>
              )}
            </div>

            <div className="vw-line vw-topl" aria-hidden="true" />
            <div className="vw-line vw-leftl" aria-hidden="true" />
            <div className="vw-line vw-bottoml" aria-hidden="true" />
            <div className="vw-line vw-rightl" aria-hidden="true" />
          </div>
        </div>

        {/* Right — editorial panel — matches Skills/Experience/ContactForm */}
        <div className="bg-card border border-foreground/[0.06] rounded-2xl p-6 flex flex-col justify-between gap-5">
          <div className="flex items-start gap-3">
            <span
              className="text-3xl text-foreground/15 font-serif leading-none flex-shrink-0 -mt-1"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="text-sm text-foreground/60 leading-relaxed">
              The best portfolio is running code.
            </p>
          </div>

          <div className="pt-5 border-t border-foreground/[0.06] space-y-4">
            <p className="flex items-start gap-2.5 text-sm text-foreground/55 leading-relaxed">
              <span className="relative flex h-2 w-2 flex-shrink-0 mt-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span>
                <span className="text-foreground/85 font-medium">Open to work</span> — if my
                profile fits a role you&apos;re hiring for, email or ping me. I reply within a
                day.
              </span>
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:yadavkausha4a5@gmail.com"
                className="text-sm font-medium text-foreground/75 hover:text-foreground transition-colors link-underline"
              >
                Email me
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-foreground/80 bg-foreground/[0.06] hover:bg-foreground/[0.10] border border-foreground/[0.09] rounded-lg px-4 py-1.5 transition-all duration-200"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .vw-outer {
          width: 100%;
          max-width: 360px;
          height: 250px;
          border-radius: 12px;
          padding: 1px;
          background: radial-gradient(circle 260px at 0% 0%, color-mix(in srgb, var(--foreground) 14%, transparent), transparent 55%), var(--border);
          position: relative;
        }
        .vw-dot {
          width: 5px;
          aspect-ratio: 1;
          position: absolute;
          background-color: var(--foreground);
          box-shadow: 0 0 8px color-mix(in srgb, var(--foreground) 35%, transparent);
          border-radius: 999px;
          z-index: 3;
          top: calc(10% - 2.5px);
          left: calc(90% - 2.5px);
          animation: vwMoveDot 6s linear infinite;
          opacity: 0.9;
        }
        @keyframes vwMoveDot {
          0%, 100% { top: calc(10% - 2.5px); left: calc(90% - 2.5px); }
          25% { top: calc(10% - 2.5px); left: calc(10% - 2.5px); }
          50% { top: calc(90% - 2.5px); left: calc(10% - 2.5px); }
          75% { top: calc(90% - 2.5px); left: calc(90% - 2.5px); }
        }
        .vw-card {
          z-index: 1;
          width: 100%;
          height: 100%;
          border-radius: 11px;
          border: 1px solid var(--border);
          background:
            radial-gradient(circle 320px at 0% 0%, color-mix(in srgb, var(--foreground) 7%, transparent), transparent 58%),
            var(--card);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-direction: column;
          color: var(--foreground);
          overflow: hidden;
        }
        .vw-ray {
          width: 220px;
          height: 45px;
          border-radius: 100px;
          position: absolute;
          background: var(--foreground);
          opacity: 0.04;
          box-shadow: 0 0 40px color-mix(in srgb, var(--foreground) 18%, transparent);
          filter: blur(10px);
          transform-origin: 10%;
          top: 0%;
          left: 0;
          transform: rotate(40deg);
          pointer-events: none;
        }
        :where(.dark) .vw-ray { opacity: 0.09; }
        .vw-count {
          font-weight: 800;
          font-size: 3.25rem;
          line-height: 1;
          letter-spacing: -0.04em;
          background: linear-gradient(45deg, var(--foreground) 8%, color-mix(in srgb, var(--foreground) 55%, var(--muted-foreground)), var(--foreground));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        @media (min-width: 640px) {
          .vw-count { font-size: 3.6rem; }
        }
        .vw-views-label {
          margin-top: 0.35rem;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          font-family: var(--font-geist-mono, ui-monospace, monospace);
        }
        .vw-line {
          position: absolute;
          background: var(--border);
        }
        .vw-topl {
          top: 10%;
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, color-mix(in srgb, var(--foreground) 18%, transparent) 30%, var(--border) 70%);
        }
        .vw-bottoml {
          bottom: 10%;
          height: 1px;
          width: 100%;
          background: var(--border);
          opacity: 0.9;
        }
        .vw-leftl {
          left: 10%;
          width: 1px;
          height: 100%;
          background: linear-gradient(180deg, color-mix(in srgb, var(--foreground) 18%, transparent) 30%, var(--border) 70%);
        }
        .vw-rightl {
          right: 10%;
          width: 1px;
          height: 100%;
          background: var(--border);
          opacity: 0.9;
        }
        @media (prefers-reduced-motion: reduce) {
          .vw-dot { animation: none; }
        }
      `}</style>
    </section>
  );
}
