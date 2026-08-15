import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "EpicWise",
    role: "AI Founding Engineer Intern",
    website: "https://epicwise.io",
    period: "May 2026 - Present",
    logo: "/companieslogo/epicwise.png",
    note: "Canada startup",
    technologies: ["LangGraph", "LangChain", "Pinecone", "Neo4j", "MCP", "Langfuse"],
    achievements: [
      "Working directly with the founding team on EpicWise's core context engine - designing the multi-step retrieval and reasoning pipelines (LangGraph) that decide what context the system surfaces and why.",
      "Built hybrid retrieval combining vector search (Pinecone) and graph-based retrieval (Neo4j), so the engine surfaces relationships pure similarity search misses - not just similar text, but connected context.",
      "Authoring system prompts, execution routers, and tool-calling schemas; building the MCP integrations that connect EpicWise to a developer's existing tools instead of asking them to switch context.",
      "Built the internal tracing and observability layer (Langfuse + structured logging) the team uses to debug retrieval quality - the infrastructure that's invisible until it's missing, and why architecture decisions here aren't guesses.",
    ],
  },
  {
    company: "FaxLab",
    role: "Frontend Developer Intern",
    website: "https://www.faxlab.in/",
    period: "Feb 2026 - Mar 2026",
    logo: "/companieslogo/faxlab.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    achievements: [
      "Built the UI for an AI course platform using Next.js, TypeScript, and Tailwind CSS - improving the learning experience for 50K+ active learners.",
      "Replaced hardcoded data with Graphy's REST APIs and implemented SSR + code splitting, cutting page load time by 30% and bundle size by ~22%.",
      "Delivered course catalog, auth flows, and learner dashboards end-to-end within 6 weeks, shipping all features on time without QA rollbacks.",
    ],
  },
  {
    company: "GRS Worker",
    role: "Full Stack Developer Intern",
    website: "https://grsworker.com/",
    period: "Sep 2025 - Nov 2025",
    logo: "/companieslogo/grsworker.png",
    technologies: ["Next.js", "Prisma", "MongoDB", "Zod", "Twilio"],
    achievements: [
      "Architected a full-stack worker management app with Next.js 15, Prisma ORM, and NextAuth - handling complex relational DB schemas and secure session management.",
      "Integrated Zod validation across all API routes, reducing form submission errors by 40% in the first month post-launch.",
      "Added Twilio SMS, QR-code check-in flows, and Framer Motion animations; cut average API response time by ~35% using Turbopack and Server Actions.",
    ],
  },
];
