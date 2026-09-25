import Image from "next/image";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiLangchain,
  SiPytorch,
  SiNodedotjs,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiNeo4J,
  SiPrisma,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiDocker,
  SiAmazonwebservices,
} from "react-icons/si";
import { Search, Network, Database, Brain } from "lucide-react";
import type { CSSProperties, ComponentType } from "react";
import { skills } from "@/data/skills";

type SkillIcon = ComponentType<{ className?: string; style?: CSSProperties }>;

// Brand marks (Simple Icons) for real tools, generic Lucide icons standing
// in for concepts that have no official logo. Muted by default, brand color
// on hover (see ICON_COLORS + SkillBadge) — keeps the grid editorial rather
// than a logo wall, but rewards hovering.
const ICONS: Record<string, SkillIcon> = {
  // Languages
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Python": SiPython,

  // AI / LLM Engineering
  "LangChain": SiLangchain,
  "PyTorch": SiPytorch,
  "RAG (Retrieval Augmented Generation)": Search,
  "MCP (Model Context Protocol)": Network,
  "Vector Databases (Pinecone, FAISS)": Database,
  "Multi-LLM Integration (OpenAI, Anthropic, Gemini, Groq)": Brain,

  // Backend & Databases
  "Node.js": SiNodedotjs,
  "FastAPI": SiFastapi,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "Neo4j": SiNeo4J,
  "Prisma": SiPrisma,
  "Docker": SiDocker,
  "AWS": SiAmazonwebservices,

  // Frontend
  "Next.js": SiNextdotjs,
  "React": SiReact,
  "Tailwind CSS": SiTailwindcss,
};

// Hover color per skill — brand colors for real tools, accent tones for
// concept badges (Lucide) that have no official logo. "Next.js" is
// intentionally left out: its brand is pure black/white, so the default
// muted-to-foreground hover already is its brand color in each theme.
const ICON_COLORS: Record<string, string> = {
  "TypeScript": "#3178C6",
  "JavaScript": "#EAB308",
  "Python": "#3776AB",
  "LangChain": "#65A30D",
  "PyTorch": "#EE4C2C",
  "RAG (Retrieval Augmented Generation)": "#0891B2",
  "MCP (Model Context Protocol)": "#8B5CF6",
  "Vector Databases (Pinecone, FAISS)": "#10B981",
  "Multi-LLM Integration (OpenAI, Anthropic, Gemini, Groq)": "#EC4899",
  "Node.js": "#5FA04E",
  "FastAPI": "#009688",
  "PostgreSQL": "#4169E1",
  "MongoDB": "#47A248",
  "Neo4j": "#018BFF",
  "Prisma": "#64748B",
  "Docker": "#2496ED",
  "AWS": "#FF9900",
  "React": "#0284C7",
  "Tailwind CSS": "#06B6D4",
};

// Custom brand marks dropped into /public/icons — no entry in the Simple
// Icons set (same assets TechStack.tsx uses). These are full-color images,
// so they just fade from muted to full opacity on hover.
const IMAGE_ICONS: Record<string, string> = {
  "LangGraph": "/icons/langgraph.png",
  "Langfuse": "/icons/langfuse.png",
  "LangSmith": "/icons/langsmith.png",
  "DeepEval": "/icons/deepeval.svg",
  "Jev (TypeSafe AI — System One decision model)": "/icons/jev.svg",
};

// Per-icon render size. Default is 15×15 — the Jev mark is a wide
// wireframe (190×140), so it gets a slightly wider box to stay legible.
const IMAGE_ICON_SIZES: Record<string, { w: number; h: number }> = {
  "Jev (TypeSafe AI — System One decision model)": { w: 24, h: 18 },
};

// White artwork (like the Jev mark) is invisible on light-theme badges,
// so it renders inverted there — same muted → full-opacity behavior as
// every other icon. Colored PNGs are left untouched.
const IMAGE_ICON_INVERT_ON_LIGHT = new Set([
  "Jev (TypeSafe AI — System One decision model)",
]);

const DEFAULT_IMAGE_ICON_SIZE = { w: 15, h: 15 };

function SkillBadge({ name }: { name: string }) {
  const Icon = ICONS[name];
  const imageSrc = IMAGE_ICONS[name];
  const imageSize = imageSrc ? (IMAGE_ICON_SIZES[name] ?? DEFAULT_IMAGE_ICON_SIZE) : null;
  const hoverColor = ICON_COLORS[name];

  return (
    <div
      className="group inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg
        bg-foreground/[0.05] border border-foreground/[0.10]
        hover:bg-foreground/[0.09] hover:border-foreground/[0.22]
        transition-all duration-200 cursor-default"
      style={hoverColor ? ({ "--skill-hover": hoverColor } as CSSProperties) : undefined}
    >
      {imageSrc && imageSize ? (
        <Image
          src={imageSrc}
          alt=""
          width={imageSize.w}
          height={imageSize.h}
          className={`object-contain opacity-45 group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 group-active:scale-110 transition-all duration-200 flex-shrink-0 ${
            IMAGE_ICON_INVERT_ON_LIGHT.has(name) ? "jev-mark" : ""
          }`}
        />
      ) : Icon ? (
        <Icon
          className={`text-[15px] text-foreground/45 transition-colors duration-200 flex-shrink-0 ${
            hoverColor
              ? "group-hover:text-[var(--skill-hover)] group-active:text-[var(--skill-hover)]"
              : "group-hover:text-foreground/85 group-active:text-foreground/85"
          }`}
        />
      ) : null}
      <span className="text-[13px] text-foreground/70 group-hover:text-foreground/95 group-active:text-foreground/95 transition-colors duration-200 whitespace-nowrap">
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
