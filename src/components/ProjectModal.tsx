"use client";

import Image from "next/image";
import { Project } from "@/types";
import { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      style={{ animation: "fadeIn 0.2s ease-out both" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <style>{`
        @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(16px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>

      <div
        className="bg-popover border border-border rounded-2xl max-w-2xl w-full
          max-h-[90vh] overflow-y-auto relative shadow-2xl"
        style={{ animation: "slideUp 0.25s ease-out both" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* - Hero image */}
        <div className="relative overflow-hidden rounded-t-2xl bg-popover">
          {project.image ? (
            <>
              {/* - Full screenshot, no cropping */}
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="672px"
                  className="object-contain object-top p-3"
                  priority
                />
              </div>
              {/* - Thin bottom fade into body */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-popover to-transparent" />
            </>
          ) : (
            <div className={`h-48 w-full bg-gradient-to-br ${project.gradient || "from-blue-600 to-purple-600"} relative flex items-center justify-center`}>
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              <span className="text-7xl font-black text-white/10 tracking-widest uppercase select-none z-10">
                {project.title.slice(0, 2)}
              </span>
            </div>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-md border border-white/[0.14]
              hover:bg-black/80 hover:border-white/30 rounded-xl transition-all duration-200 group z-10"
            aria-label="Close modal"
          >
            <FaTimes className="text-white/70 group-hover:text-white text-xs group-hover:rotate-90 transition-all duration-200" />
          </button>

          {/* Status badge */}
          {project.status && (
            <div className="absolute top-3 left-3 z-10">
              <span className="px-2.5 py-1 bg-blue-500/20 backdrop-blur-md border border-blue-400/20 text-blue-300 text-[10px] rounded-full">
                {project.status}
              </span>
            </div>
          )}
        </div>

        {/* - Divider */}
        <div className="h-px bg-foreground/[0.06]" />

        {/* - Body */}
        <div className="p-5 space-y-5">

          {/* - Title + links row */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--ring)]/70 mb-1">
                {project.subtitle}
              </p>
              <h2 className="text-lg font-bold text-popover-foreground leading-tight">
                {project.title}
              </h2>
            </div>
            <div className="flex gap-2 flex-shrink-0 pt-0.5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-foreground/[0.05] hover:bg-foreground/[0.09]
                    border border-border hover:border-foreground/25 rounded-xl text-xs text-foreground/70
                    hover:text-foreground transition-all duration-200"
                >
                  <FaGithub className="text-xs" />
                  <span>GitHub</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--ring)] hover:opacity-85
                    rounded-xl text-xs text-black font-semibold transition-all duration-200"
                >
                  <FaExternalLinkAlt className="text-[9px]" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-2.5">
              Technologies
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-foreground/[0.04] border border-border rounded-lg
                    text-xs text-foreground/70 hover:border-[var(--ring)]/40 hover:text-foreground/95
                    transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project details */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-2.5">
              Project Details
            </p>
            <ul className="space-y-2.5">
              {project.detailedDescription.map((detail, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-foreground/70 leading-relaxed"
                  style={{ animation: `fadeIn 0.3s ease-out ${0.05 + index * 0.05}s both` }}
                >
                  <span className="text-[var(--ring)]/60 flex-shrink-0 mt-1 text-[10px]" aria-hidden="true">▹</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
