"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        className="mb-20 pb-12 border-b border-white/10"
        aria-label="Featured Projects"
      >
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <span className="text-xs text-gray-600 font-mono">{projects.length} projects</span>
        </div>

        <p className="sr-only" role="status">
          Showing {projects.length} featured projects. Click on any project card to view details.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{ animation: `fadeInUp 0.55s ease-out ${index * 0.08}s both` }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}