import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "FaxLab AI",
    role: "Frontend Developer Intern",
    website: "https://www.faxlab.in/",
    period: "Feb 2026 - Mar 2026",
    achievements: [
      "Built the UI for an AI course platform using Next.js, TypeScript, and Tailwind CSS - directly improving the learning experience for 50K+ active learners.",
      "Replaced hardcoded data with Graphy's REST APIs and implemented SSR + code splitting, cutting page load time by 30% and reducing initial bundle size by ~22%.",
      "Delivered course catalog, auth flows, and learner dashboards end-to-end within a 6-week internship, shipping all features on time without QA rollbacks.",
    ],
  },
  {
    company: "GRS Worker",
    role: "Full Stack Developer Intern",
    website: "https://grsworker.com/",
    period: "Sep 2025 - Nov 2025",
    achievements: [
      "Architected a full-stack worker management app with Next.js 15, Prisma ORM, and NextAuth - handling complex relational DB schemas and secure session management from scratch.",
      "Integrated Zod schema validation across all API routes, reducing form and data submission errors by 40% in the first month post-launch.",
      "Added Twilio SMS notifications, QR-code check-in flows, and Framer Motion UI animations; optimised API response times using Turbopack and Server Actions, cutting average response time by ~35%.",
    ],
  },
];
