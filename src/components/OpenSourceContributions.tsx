"use client";

import { useState } from "react";
import Image from "next/image";
import { openSourceContributions } from "@/data/openSourceContributions";

function ContributionItem({
  contribution,
  index,
}: {
  contribution: (typeof openSourceContributions)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}>
      <div className="flex flex-col sm:flex-row sm:gap-8">
        {/* Left meta */}
        <div className="flex-shrink-0 sm:w-44 mb-3 sm:mb-0 sm:pt-0.5">
          <div className="flex items-center gap-2">
            {contribution.logo && (
              <span className="w-6 h-6 rounded-md overflow-hidden bg-white/[0.06] border border-white/[0.08] flex-shrink-0 flex items-center justify-center">
                <Image
                  src={contribution.logo}
                  alt=""
                  width={24}
                  height={24}
                  className="object-contain w-full h-full"
                />
              </span>
            )}
            <a
              href={contribution.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/50 hover:text-white/80 transition-colors link-underline"
            >
              {contribution.project}
            </a>
          </div>
          <p className="text-[11px] text-white/20 font-mono mt-1.5 pl-8">
            {contribution.role}
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 min-w-0">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="flex items-center gap-1.5 text-[11px] text-white/25 hover:text-white/50
              font-mono transition-colors duration-200 -ml-3 px-3 py-1"
          >
            <span
              className="inline-block text-white/30 transition-transform duration-300"
              style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              ›
            </span>
            {open ? "Hide details" : `${contribution.achievements.length} highlights`}
          </button>

          <div
            className="overflow-hidden transition-all duration-300 ease-out"
            style={{
              maxHeight: open ? "600px" : "0px",
              opacity: open ? 1 : 0,
              marginTop: open ? "0.75rem" : "0px",
            }}
          >
            <ul className="space-y-2 pb-1">
              {contribution.achievements.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-white/35 leading-relaxed pl-3 relative
                    before:absolute before:left-0 before:top-[9px]
                    before:w-1 before:h-px before:bg-white/15"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OpenSourceContributions() {
  return (
    <section
      id="open-source"
      className="mb-24 pb-16 border-b border-white/[0.06]"
      aria-label="Open Source Contributions"
    >
      <p className="section-label">Open Source</p>

      <div className="space-y-10">
        {openSourceContributions.map((contribution, index) => (
          <ContributionItem
            key={contribution.project}
            contribution={contribution}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
