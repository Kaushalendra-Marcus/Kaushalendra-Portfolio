"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import { experiences } from "@/data/experience";
import { openSourceContributions } from "@/data/openSourceContributions";

function EntryRow({
  logo,
  title,
  subtitle,
  href,
  period,
  meta,
  achievements,
  index,
}: {
  logo?: string;
  title: string;
  subtitle: string;
  href: string;
  period?: string;
  meta?: string;
  achievements: string[];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="py-6 border-b border-dashed border-white/[0.12] last:border-b-0"
      style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
        {/* Left: logo + title/subtitle */}
        <div className="flex items-start gap-4 min-w-0">
          <span className="w-12 h-12 rounded-xl overflow-hidden bg-white/[0.06] border border-white/[0.08] flex-shrink-0 flex items-center justify-center p-2.5">
            {logo ? (
              <Image
                src={logo}
                alt=""
                width={32}
                height={32}
                className="object-contain w-full h-full"
              />
            ) : (
              <span className="w-full h-full rounded-lg bg-white/[0.08]" />
            )}
          </span>
          <div className="min-w-0 pt-0.5">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[15px] font-semibold text-white/90 hover:text-white transition-colors link-underline"
            >
              {title}
            </a>
            <p className="text-sm text-white/40 mt-0.5">{subtitle}</p>
          </div>
        </div>

        {/* Right: period/meta + expand toggle. Full-width indented row on
            mobile (date left, chevron right); right-aligned inline on sm+ */}
        <div className="flex items-center sm:items-start justify-between sm:justify-end gap-3 pl-16 sm:pl-0 flex-shrink-0">
          {(period || meta) && (
            <div className="text-left sm:text-right">
              {period && (
                <p className="text-sm font-semibold text-white/75 whitespace-nowrap">{period}</p>
              )}
              {meta && (
                <p className="text-xs text-white/35 mt-0.5 whitespace-nowrap">{meta}</p>
              )}
            </div>
          )}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Hide details" : "Show details"}
            className="text-white/35 hover:text-white/70 transition-colors p-1 -m-1 sm:mt-0.5"
          >
            <FaChevronDown
              className="text-xs transition-transform duration-300"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: open ? "600px" : "0px",
          opacity: open ? 1 : 0,
          marginTop: open ? "0.9rem" : "0px",
        }}
      >
        <ul className="space-y-2 pb-1 pl-16">
          {achievements.map((item, i) => (
            <li
              key={i}
              className="text-sm text-white/45 leading-relaxed pl-3 relative
                before:absolute before:left-0 before:top-[9px]
                before:w-1 before:h-px before:bg-white/15"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 pb-10 border-b border-white/[0.06]"
      aria-label="Professional Experience"
    >
      <p className="section-label">Experience</p>

      <div className="border-t border-dashed border-white/[0.12]">
        {experiences.map((exp, index) => (
          <EntryRow
            key={exp.company}
            logo={exp.logo}
            title={exp.role}
            subtitle={exp.company}
            href={exp.website}
            period={exp.period}
            meta={exp.note}
            achievements={exp.achievements}
            index={index}
          />
        ))}

        {openSourceContributions.map((contribution, index) => (
          <EntryRow
            key={contribution.project}
            logo={contribution.logo}
            title={contribution.project}
            subtitle={contribution.role}
            href={contribution.website}
            achievements={contribution.achievements}
            index={experiences.length + index}
          />
        ))}
      </div>
    </section>
  );
}
