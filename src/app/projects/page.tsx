import type { Metadata } from "next";
import Script from "next/script";
import PageShell from "@/components/PageShell";
import Projects from "@/components/Projects";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by Full Stack AI Engineer Kaushalendra Singh — agentic AI platforms, RAG systems, LLM evals, and full-stack apps built and shipped.",
  alternates: {
    canonical: "https://kaushalendra.me/projects",
  },
  openGraph: {
    title: "Projects | Kaushalendra Singh — Full Stack AI Engineer",
    description: "Agentic AI platforms, RAG systems, LLM evals, and full-stack apps by Kaushalendra Singh.",
    url: "https://kaushalendra.me/projects",
    siteName: "Kaushalendra Singh",
    images: [
      {
        url: "/kaushalendra-singh.png",
        width: 1730,
        height: 909,
        alt: "Kaushalendra Singh – Full Stack AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Kaushalendra Singh — Full Stack AI Engineer",
    description: "Agentic AI platforms, RAG systems, LLM evals, and full-stack apps by Kaushalendra Singh.",
    images: ["/kaushalendra-singh.png"],
  },
};

// Every project as structured data, so Google can list them as rich
// results under the portfolio for "kaushalendra" / project-name queries.
const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projects by Kaushalendra Singh",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareSourceCode",
      name: project.title,
      description: project.description,
      author: { "@id": "https://kaushalendra.me/#person" },
      codeRepository: project.github,
      ...(project.live ? { url: project.live } : {}),
      programmingLanguage: project.technologies,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Kaushalendra Singh",
      item: "https://kaushalendra.me/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: "https://kaushalendra.me/projects",
    },
  ],
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <Script
        id="projects-itemlist-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Script
        id="projects-breadcrumb-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
