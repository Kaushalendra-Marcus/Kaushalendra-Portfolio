import Image from "next/image";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiLangchain,
  SiNodedotjs,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiNeo4J,
  SiPrisma,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { Search, Network, Database, Brain } from "lucide-react";
import type { CSSProperties, ComponentType } from "react";
import { skills } from "@/data/skills";

type SkillIcon = ComponentType<{ className?: string; style?: CSSProperties }>;

// Brand marks (Simple Icons) for real tools, generic Lucide icons standing
// in for concepts that have no official logo. Everything renders in one
// muted tone below (not brand colors) — keeps the grid editorial rather
// than a logo wall.
const ICONS: Record<string, SkillIcon> = {
  // Languages
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Python": SiPython,

  // AI / LLM Engineering
  "LangChain": SiLangchain,
  "RAG (Retrieval Augmented Generation)": Search,
  "MCP (Model Context Protocol)": Network,
  "Vector Databases (Pinecone)": Database,
  "Multi-LLM Integration (OpenAI, Anthropic, Gemini, Groq)": Brain,

  // Backend & Databases
  "Node.js": SiNodedotjs,
  "FastAPI": SiFastapi,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "Neo4j": SiNeo4J,
  "Prisma": SiPrisma,

  // Frontend
  "Next.js": SiNextdotjs,
  "React": SiReact,
  "Tailwind CSS": SiTailwindcss,
};

// Custom brand mark dropped into /public/icons — no entry in the Simple
// Icons set (same asset TechStack.tsx uses).
const IMAGE_ICONS: Record<string, string> = {
  "LangGraph": "/icons/langgraph.png",
};

function SkillBadge({ name }: { name: string }) {
  const Icon = ICONS[name];
  const imageSrc = IMAGE_ICONS[name];

  return (
    <div
      className="group inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg
        bg-foreground/[0.05] border border-foreground/[0.10]
        hover:bg-foreground/[0.09] hover:border-foreground/[0.22]
        transition-all duration-200 cursor-default"
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          width={15}
          height={15}
          className="object-contain opacity-45 group-hover:opacity-85 transition-opacity duration-200 flex-shrink-0"
        />
      ) : Icon ? (
        <Icon className="text-[15px] text-foreground/45 group-hover:text-foreground/85 transition-colors duration-200 flex-shrink-0" />
      ) : null}
      <span className="text-[13px] text-foreground/70 group-hover:text-foreground/95 transition-colors duration-200 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="mb-16 pb-10 border-b border-foreground/[0.06]"
      aria-label="Technical Skills"
    >
      <p className="section-label">Skills</p>

      <div className="space-y-8">
        {skills.map((group, index) => (
          <div
            key={group.category}
            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.06}s both` }}
          >
            <p className="text-[11px] text-muted-foreground uppercase tracking-[0.1em] font-medium mb-3">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <SkillBadge key={item} name={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
