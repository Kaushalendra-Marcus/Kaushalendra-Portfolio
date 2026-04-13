import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "FaxLab AI",
    role: "Frontend Developer Intern",
    website: "https://www.faxlab.in/",
    period: "Feb 2026 – Mar 2026",
    achievements: [
      "Developed UI for AI course platform using Next.js, TypeScript, Tailwind; improved engagement for 50K+ learners.",
      "Implemented course catalog, auth flows, dashboards; replaced hardcoded data with Graphy's API, boosting page load by 30% via SSR and code splitting.",
      "Integrated Graphy's REST APIs for real‑time course data and learner progress tracking.",
    ],
  },
  {
    company: "GRS Worker",
    role: "Full Stack Developer Intern",
    website: "https://grsworker.com/",
    period: "Sep 2025 – Nov 2025",
    achievements: [
      "Architected full-stack app with Next.js 15, Prisma, NextAuth; secured sessions and complex DB relations.",
      "Integrated Twilio SMS, QR codes, Zod validation; cut data errors by 40%.",
      "Built UI with Radix UI, Framer Motion; optimized API with Turbopack and Server Actions.",
    ],
  },
];
