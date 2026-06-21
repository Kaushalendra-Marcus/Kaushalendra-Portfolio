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
        className="mb-24 pb-16 border-b border-white/[0.06]"
        aria-label="Featured Projects"
      >
        <div className="flex items-baseline justify-between mb-8">
          <p className="section-label" style={{ marginBottom: 0 }}>Selected work</p>
          <span className="text-[11px] text-white/35 font-mono">{projects.length} projects</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10">
          {projects.map((project, index) => (
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
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
