"use client";

import { useState, useEffect } from "react";
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

  // Only auto-open on hover for devices that truly support it (mouse /
  // trackpad). Touch devices simulate a "mouseenter" on the first tap,
  // which would otherwise silently open the row before the tap's own
  // click ever runs — leaving nothing left to close it on a second tap
  // except the chevron button specifically. Gating this means touch
  // devices rely purely on the click handler below, so tapping anywhere
  // on the row opens AND closes it, same gesture either way.
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mq.matches);
  }, []);

  return (
    <div
      onMouseEnter={() => canHover && setOpen(true)}
      onMouseLeave={() => canHover && setOpen(false)}
      onClick={() => setOpen((o) => !o)}
      className="group py-6 px-4 -mx-4 rounded-xl border-b border-dashed border-foreground/[0.12] last:border-b-0 cursor-pointer transition-colors duration-300 hover:bg-foreground/[0.03] hover:border-foreground/[0.18]"
      style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
        {/* Left: logo + title/subtitle */}
        <div className="flex items-start gap-4 min-w-0">
          <span className="w-12 h-12 rounded-xl overflow-hidden bg-foreground/[0.08] border border-foreground/[0.12] group-hover:border-foreground/[0.22] transition-colors duration-300 flex-shrink-0 flex items-center justify-center p-2.5">
            {logo ? (
              <Image
                src={logo}
                alt=""
                width={32}
                height={32}
                className="object-contain w-full h-full"
              />
            ) : (
              <span className="w-full h-full rounded-lg bg-foreground/[0.08]" />
            )}
          </span>
          <div className="min-w-0 pt-0.5">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="block text-[15px] font-semibold text-foreground hover:text-foreground transition-colors link-underline"
            >
              {title}
            </a>
            <p className="text-sm text-foreground/55 group-hover:text-foreground/70 transition-colors mt-0.5">{subtitle}</p>
          </div>
        </div>

        {/* Right: period/meta + expand toggle. Full-width indented row on
            mobile (date left, chevron right); right-aligned inline on sm+ */}
        <div className="flex items-center sm:items-start justify-between sm:justify-end gap-3 pl-16 sm:pl-0 flex-shrink-0">
          {(period || meta) && (
            <div className="text-left sm:text-right">
              {period && (
                <p className="text-sm font-semibold text-foreground/85 whitespace-nowrap">{period}</p>
              )}
              {meta && (
                <p className="text-xs text-foreground/45 mt-0.5 whitespace-nowrap">{meta}</p>
              )}
            </div>
          )}
          <button
            aria-expanded={open}
            aria-label={open ? "Hide details" : "Show details"}
            className="text-foreground/50 group-hover:text-foreground/80 hover:text-foreground transition-colors p-1 -m-1 sm:mt-0.5"
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
        <ul className="space-y-2 pb-1 pl-16">
          {summary && (
            <li className="text-sm text-foreground/70 leading-relaxed mb-1 pl-3 relative
              before:absolute before:left-0 before:top-[9px]
              before:w-1 before:h-px before:bg-foreground/40">
              {summary}
            </li>
          )}
          {achievements.map((item, i) => (
            <li
              key={i}
              className="text-sm text-foreground/62 leading-relaxed pl-3 relative
                before:absolute before:left-0 before:top-[9px]
                before:w-1 before:h-px before:bg-foreground/25"
            >
              {item}
            </li>
          ))}
        </ul>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-1 pl-16 mt-3">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] text-foreground/55 font-mono">
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
      className="mb-16 pb-10 border-b border-foreground/[0.06]"
      aria-label="Professional Experience"
    >
      <p className="section-label">Experience</p>

      <div className="border-t border-dashed border-foreground/[0.12]">
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
