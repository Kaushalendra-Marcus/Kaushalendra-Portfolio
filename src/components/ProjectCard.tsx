"use client";

import Image from "next/image";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer"
    >
      {/* Image zone - clean, no gradient overlays */}
      <div className="relative h-40 rounded-xl overflow-hidden bg-[#0f0f0f]
        border border-white/[0.06] mb-4
        group-hover:border-white/[0.12] transition-colors duration-300">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.gradient ?? "from-white/[0.03] to-white/[0.01]"} flex items-end p-4`}>
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
              {project.subtitle}
            </span>
          </div>
        )}

        {/* Links - show on hover, top right */}
        <div className="absolute top-3 right-3 flex gap-1.5
          opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 bg-black/70 backdrop-blur-sm rounded-lg
                text-white/50 hover:text-white transition-colors border border-white/[0.08]"
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
              className="p-1.5 bg-black/70 backdrop-blur-sm rounded-lg
                text-white/50 hover:text-white transition-colors border border-white/[0.08]"
            >
              <FaArrowUpRightFromSquare className="text-[10px]" />
            </a>
          )}
        </div>

        {project.status && (
          <div className="absolute bottom-3 left-3">
            <span className="text-[10px] font-mono text-white/45 bg-black/60 px-2 py-0.5 rounded">
              {project.status}
            </span>
          </div>
        )}
      </div>

      {/* Text below image - no card background */}
      <div className="px-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-sm font-medium text-white/70
            group-hover:text-white transition-colors duration-200">
            {project.title}
          </h3>
          <FaArrowUpRightFromSquare className="text-[10px] text-white/20
            group-hover:text-white/50 transition-colors mt-0.5 flex-shrink-0" />
        </div>
        <p className="text-xs text-white/45 leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="text-[10px] text-white/40 font-mono">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] text-white/30 font-mono">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
