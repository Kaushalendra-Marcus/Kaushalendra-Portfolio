import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "FaxLab AI",
    role: "Frontend Developer Intern",
    website: "https://www.faxlab.in/",
    period: "Dec 2025 – Present",
    achievements: [
      "Developed UI for AI course platform using Next.js, TypeScript, Tailwind; improved engagement for 500K+ learners.",
      "Implemented course catalog, auth flows, dashboards; boosted page load by 30% via SSR and code splitting.",
      "Integrated REST APIs for course data and progress tracking.",
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
