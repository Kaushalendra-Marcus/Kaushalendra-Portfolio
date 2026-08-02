import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Projects from "@/components/Projects";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work — AI-native products, backend systems, and full-stack apps I've built and shipped.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <div className="flex items-baseline justify-between mb-10">
        <div>
          <p className="section-label" style={{ marginBottom: 6 }}>Projects</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">Selected work</h1>
        </div>
        <span className="text-[11px] text-muted-foreground font-mono flex-shrink-0">{projects.length} projects</span>
      </div>

      <Projects />
    </PageShell>
  );
}
