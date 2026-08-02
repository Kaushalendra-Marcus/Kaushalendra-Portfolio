"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 4;
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const remaining = projects.length - INITIAL_COUNT;

  return (
    <>
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
            className="text-xs font-medium text-foreground/70 hover:text-foreground/95
              bg-foreground/[0.04] hover:bg-foreground/[0.08] border border-foreground/[0.09]
              hover:border-foreground/[0.18] rounded-lg px-4 py-2 transition-all duration-200"
          >
            {showAll ? "Show less" : `Show all projects (${remaining} more)`}
          </button>
        </div>
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
