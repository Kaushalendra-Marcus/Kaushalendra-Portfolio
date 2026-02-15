"use client";

import { Project } from "@/types";
import { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-black border border-white/20 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div
          className={`p-8 bg-gradient-to-r ${
            project.gradient || "from-blue-600 to-purple-600"
          } relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 group"
            aria-label="Close modal"
          >
            <FaTimes className="text-white text-xl group-hover:rotate-90 transition-transform duration-200" />
          </button>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-white/90 text-lg">{project.subtitle}</p>

            {/* Links */}
            <div className="flex gap-4 mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-200 text-white"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-white/90 rounded-lg transition-all duration-200 text-black font-semibold"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-sm text-white/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Project Details
            </h3>
            <ul className="space-y-3">
              {project.detailedDescription.map((detail, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-cyan-400 mt-1.5 flex-shrink-0">▹</span>
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
