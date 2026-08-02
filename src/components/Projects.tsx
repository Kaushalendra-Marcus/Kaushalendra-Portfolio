"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 2;
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const remaining = projects.length - INITIAL_COUNT;

  return (
    <>
      <section
        id="projects"
        className="mb-16 pb-10 border-b border-white/[0.06]"
        aria-label="Featured Projects"
      >
        <div className="flex items-baseline justify-between mb-8">
          <p className="section-label" style={{ marginBottom: 0 }}>Selected work</p>
          <span className="text-[11px] text-white/35 font-mono">{projects.length} projects</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.07}s both` }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>

        {remaining > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll((s) => !s)}
              className="text-xs font-medium text-white/60 hover:text-white/90
                bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08]
                hover:border-white/[0.16] rounded-lg px-4 py-2 transition-all duration-200"
            >
              {showAll ? "Show less" : `Show all projects (${remaining} more)`}
            </button>
          </div>
        )}
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
