"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const hasGradient = !!project.gradient;

  return (
    <div
      onClick={onClick}
      className="group relative bg-[#0d0d0d] border border-white/[0.08] rounded-2xl overflow-hidden
        cursor-pointer transition-all duration-400
        hover:border-white/[0.16] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/60"
    >
      {/* - Image zone */}
      <div className="relative h-44 overflow-hidden bg-[#0a0a0a]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : hasGradient ? (
          <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <span className="text-4xl font-black text-white/10 tracking-widest uppercase select-none z-10">
              {project.title.slice(0, 2)}
            </span>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl font-black text-white/[0.05] tracking-widest uppercase select-none">
              {project.title.slice(0, 2)}
            </span>
          </div>
        )}

        {/* Status badge */}
        {project.status && (
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="px-2 py-0.5 bg-blue-500/20 backdrop-blur-sm border border-blue-400/20
              text-blue-300 text-[10px] rounded-full">
              {project.status}
            </span>
          </div>
        )}

        {/* Action buttons - top right, reveal on hover */}
        <div className="absolute top-2.5 right-2.5 z-10 flex gap-1.5
          opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0
          transition-all duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="Source code"
              className="p-1.5 bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg
                text-gray-400 hover:text-white hover:border-white/20 transition-colors"
            >
              <FaGithub className="text-xs" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="Live site"
              className="p-1.5 bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg
                text-gray-400 hover:text-white hover:border-white/20 transition-colors"
            >
              <FaExternalLinkAlt className="text-[10px]" />
            </a>
          )}
        </div>
      </div>

      {/* - Divider */}
      <div className="h-px bg-white/[0.05]" />

      {/* - Text + tags */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <div className="min-w-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-cyan-400/40 mb-0.5">
              {project.subtitle}
            </p>
            <h3 className="text-sm font-semibold text-white/80 group-hover:text-white
              transition-colors duration-300 leading-snug truncate">
              {project.title}
            </h3>
          </div>
          <span className="text-[11px] text-white/15 group-hover:text-cyan-500/40
            transition-colors flex-shrink-0 mt-0.5">
            →
          </span>
        </div>

        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-white/[0.04] border border-white/[0.07]
                rounded-md text-[10px] text-white/35"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 bg-white/[0.03] border border-white/[0.05]
              rounded-md text-[10px] text-white/20">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}