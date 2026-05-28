"use client";

import { openSourceContributions } from "@/data/openSourceContributions";

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
          <div
            key={contribution.project}
            className="flex flex-col sm:flex-row sm:gap-8"
            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
          >
            {/* Left meta */}
            <div className="flex-shrink-0 sm:w-44 mb-2 sm:mb-0 sm:pt-0.5">
              <a
                href={contribution.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/50 hover:text-white/80 transition-colors link-underline"
              >
                {contribution.project}
              </a>
              <p className="text-[11px] text-white/20 font-mono mt-1">{contribution.role}</p>
            </div>

            {/* Right content */}
            <div className="flex-1 min-w-0">
              <ul className="space-y-2">
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
        ))}
      </div>
    </section>
  );
}
