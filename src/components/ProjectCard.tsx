"use client";

import { useCallback } from "react";
import type { KeyboardEvent } from "react";
import Image from "next/image";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick();
      }
    },
    [onClick]
  );

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="group cursor-pointer rounded-xl outline-none
        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        focus-visible:ring-offset-background"
    >
      {/* Image zone - clean, no gradient overlays */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-card
        border border-foreground/[0.06] mb-3 sm:mb-4
        group-hover:border-foreground/[0.12] transition-colors duration-300">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.gradient ?? "from-foreground/[0.03] to-foreground/[0.01]"} flex items-end p-4`}>
            <span className="text-[10px] font-mono text-foreground/25 uppercase tracking-widest">
              {project.subtitle}
            </span>
          </div>
        )}

        {/* Links - always reachable on touch (there's no hover to reveal
            them on mobile); fade in on hover only once sm+ / a pointer is
            in play. Sit on the screenshot image itself, so a fixed dark
            scrim reads correctly in both themes. */}
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 flex gap-1.5
          sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 sm:p-1.5 bg-black/70 backdrop-blur-sm rounded-lg
                text-white/60 hover:text-white transition-colors border border-white/[0.12]
                outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <FaGithub className="text-sm sm:text-xs" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 sm:p-1.5 bg-black/70 backdrop-blur-sm rounded-lg
                text-white/60 hover:text-white transition-colors border border-white/[0.12]
                outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <FaArrowUpRightFromSquare className="text-xs sm:text-[10px]" />
            </a>
          )}
        </div>

        {project.status && (
          <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3">
            <span className="text-[10px] font-mono text-white/70 bg-black/60 px-2 py-0.5 rounded">
              {project.status}
            </span>
          </div>
        )}
      </div>

      {/* Text below image - no card background */}
      <div className="px-0.5 sm:px-1">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="text-sm sm:text-[15px] font-medium text-foreground/75
            group-hover:text-foreground transition-colors duration-200">
            {project.title}
          </h3>
          <FaArrowUpRightFromSquare className="text-[10px] text-foreground/25
            group-hover:text-foreground/60 transition-colors mt-1 flex-shrink-0" />
        </div>
        <p className="text-xs sm:text-[13px] text-foreground/50 leading-relaxed mb-2.5 sm:mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="text-[10px] text-foreground/45 font-mono">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] text-foreground/35 font-mono">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
