import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "EpicWise",
    role: "AI Founding Engineer Intern",
    website: "https://epicwise.in",
    period: "May 2026 - Present",
    achievements: [
      "Working directly with the founding team on the core EpicWise context engine - designing multi-step retrieval and reasoning pipelines using LangGraph.",
      "Building hybrid retrieval combining vector search (Pinecone) and graph-based retrieval (Neo4j) to surface relevant organizational context.",
      "Authoring system prompts, execution routers, and tool-calling schemas; contributing to MCP integrations connecting EpicWise to developer tools.",
      "Building internal tracing and observability tooling using Langfuse and structured logging; participating in real architecture decisions with full system context.",
    ],
  },
  {
    company: "FaxLab",
    role: "Frontend Developer Intern",
    website: "https://www.faxlab.in/",
    period: "Feb 2026 - Mar 2026",
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
    achievements: [
      "Architected a full-stack worker management app with Next.js 15, Prisma ORM, and NextAuth - handling complex relational DB schemas and secure session management.",
      "Integrated Zod validation across all API routes, reducing form submission errors by 40% in the first month post-launch.",
      "Added Twilio SMS, QR-code check-in flows, and Framer Motion animations; cut average API response time by ~35% using Turbopack and Server Actions.",
    ],
  },
];
