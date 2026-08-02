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
  summary,
  achievements,
  tags,
  index,
}: {
  logo?: string;
  title: string;
  subtitle: string;
  href: string;
  period?: string;
  meta?: string;
  summary?: string;
  achievements: string[];
  tags?: string[];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((o) => !o)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((o) => !o);
        }
      }}
      aria-expanded={open}
      className="group py-6 px-4 -mx-4 rounded-xl border-b border-dashed border-white/[0.12] last:border-b-0 cursor-pointer transition-colors duration-300 hover:bg-white/[0.03] hover:border-white/[0.18]"
      style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
        {/* Left: logo + title/subtitle */}
        <div className="flex items-start gap-4 min-w-0">
          <span className="w-14 h-14 rounded-2xl overflow-hidden bg-white/[0.08] border border-white/[0.12] group-hover:border-white/[0.22] transition-colors duration-300 flex-shrink-0 flex items-center justify-center p-2">
            {logo ? (
              <Image
                src={logo}
                alt=""
                width={40}
                height={40}
                className="object-contain w-full h-full"
              />
            ) : (
              <span className="w-full h-full rounded-xl bg-white/[0.08]" />
            )}
          </span>
          <div className="min-w-0 pt-0.5">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="block text-[15px] font-semibold text-white hover:text-white transition-colors link-underline link-underline-solid"
            >
              {title}
            </a>
            <p className="text-sm text-white/55 group-hover:text-white/70 transition-colors mt-0.5">{subtitle}</p>
          </div>
        </div>

        {/* Right: period/meta + expand toggle. Full-width indented row on
            mobile (date left, chevron right); right-aligned inline on sm+ */}
        <div className="flex items-center sm:items-start justify-between sm:justify-end gap-3 pl-[4.5rem] sm:pl-0 flex-shrink-0">
          {(period || meta) && (
            <div className="text-left sm:text-right">
              {period && (
                <p className="text-sm font-semibold text-white/85 whitespace-nowrap">{period}</p>
              )}
              {meta && (
                <p className="text-xs text-white/45 mt-0.5 whitespace-nowrap">{meta}</p>
              )}
            </div>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen((o) => !o);
            }}
            aria-expanded={open}
            aria-label={open ? "Hide details" : "Show details"}
            className="text-white/50 group-hover:text-white/80 hover:text-white transition-colors p-1 -m-1 sm:mt-0.5"
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
          maxHeight: open ? "1000px" : "0px",
          opacity: open ? 1 : 0,
          marginTop: open ? "0.9rem" : "0px",
        }}
      >
        <ul className="space-y-2 pb-1 pl-[4.5rem]">
          {summary && (
            <li className="text-sm text-white/70 leading-relaxed mb-1 pl-3 relative
              before:absolute before:left-0 before:top-[9px]
              before:w-1 before:h-px before:bg-white/40">
              {summary}
            </li>
          )}
          {achievements.map((item, i) => (
            <li
              key={i}
              className="text-sm text-white/62 leading-relaxed pl-3 relative
                before:absolute before:left-0 before:top-[9px]
                before:w-1 before:h-px before:bg-white/25"
            >
              {item}
            </li>
          ))}
        </ul>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-1 pl-[4.5rem] mt-3">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] text-white/55 font-mono">
                {tag}
              </span>
            ))}
          </div>
        )}
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
            tags={exp.technologies}
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
            period={contribution.period}
            summary={contribution.summary}
            achievements={contribution.achievements}
            tags={contribution.technologies}
            index={experiences.length + index}
          />
        ))}
      </div>
    </section>
  );
}
