"use client";

import { openSourceContributions } from "@/data/openSourceContributions"; 

export default function OpenSourceContributions() {
  return (
    <section
      id="open-source"
      className="mb-20 pb-12 border-b border-white/10"
      aria-label="Open Source Contributions"
    >
      <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Open Source Contributions
      </h2>

      <p className="sr-only" role="status">
        {openSourceContributions.length} projects listed.
      </p>

      <div className="space-y-10">
        {openSourceContributions.map((contribution, index) => (
          <div
            key={contribution.project}
            className="relative grid grid-cols-[20px_1fr] gap-5"
            style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both` }}
            itemScope
            itemType="https://schema.org/OrganizationRole"
          >
            {/* Timeline column */}
            <div className="flex flex-col items-center pt-1.5 gap-0">
              <div
                className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400
                  shadow-[0_0_10px_rgba(59,130,246,0.55)] flex-shrink-0 z-10"
              />
              {index < openSourceContributions.length - 1 && (
                <div className="w-px flex-1 mt-2 bg-gradient-to-b from-white/10 to-transparent" />
              )}
            </div>

            {/* Content column */}
            <div className="pb-2 min-w-0">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-x-2 gap-y-0.5">
                  <a
                    href={contribution.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-white hover:text-cyan-300 transition-colors"
                    itemProp="name"
                  >
                    {contribution.project}
                  </a>
                  <span className="hidden sm:block text-white/20 text-sm">·</span>
                  <span className="text-sm text-gray-500" itemProp="roleName">
                    {contribution.role}
                  </span>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-2" aria-label={`Key contributions to ${contribution.project}`}>
                {contribution.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                    <span className="text-cyan-500/50 flex-shrink-0 mt-1 text-xs" aria-hidden="true">
                      ▹
                    </span>
                    <span
                      dangerouslySetInnerHTML={{ __html: achievement }}
                      itemProp="description"
                    />
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