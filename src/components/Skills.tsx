import Image from "next/image";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiTailwindcss,
  SiSocketdotio,
  SiLangchain,
  SiHuggingface,
  SiOllama,
  SiDocker,
  SiAmazonwebservices,
  SiRedis,
  SiVercel,
} from "react-icons/si";
import {
  Search,
  Database,
  Layers,
  MessageSquare,
  Workflow,
  Wrench,
  Cpu,
  Eye,
  Sparkles,
  Brain,
  Globe,
  Braces,
  Link2,
  Lock,
  ShieldCheck,
  KeyRound,
  Blocks,
  Cloud,
  RefreshCw,
  Server,
  Terminal,
  Binary,
  Boxes,
  CheckCircle2,
  Network,
  Zap,
  Shapes,
  BadgeCheck,
  Code2,
  Layout,
  LayoutGrid,
  Wand2,
  FileCode,
  Palette,
} from "lucide-react";
import type { CSSProperties, ComponentType } from "react";
import { skills } from "@/data/skills";

type SkillIcon = ComponentType<{ className?: string; style?: CSSProperties }>;

// Brand marks (Simple Icons) for real tools, generic Lucide icons standing
// in for concepts/methodologies that have no official logo. Everything
// renders in one muted tone below (not brand colors) — keeps the grid
// editorial rather than a logo wall.
const ICONS: Record<string, SkillIcon> = {
  // Languages
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "Python": SiPython,
  "C": Code2,
  "C++": SiCplusplus,
  "SQL": Database,

  // AI / Agentic Systems
  "LangChain": SiLangchain,
  "RAG (Retrieval Augmented Generation)": Search,
  "Vector Databases (Pinecone, FAISS)": Database,
  "Embeddings": Layers,
  "Prompt Engineering": MessageSquare,
  "Agents (ReAct, Plan & Execute)": Workflow,
  "Tool Calling": Wrench,
  "Hugging Face (Transformers, Pipelines)": SiHuggingface,
  "Open Source LLMs": Cpu,
  "Model Serving (Ollama, HF Inference API)": SiOllama,
  "YOLO": Eye,
  "Gemini API": Sparkles,
  "OpenAI API": Brain,

  // Backend
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "FastAPI": SiFastapi,
  "REST APIs": Globe,
  "GraphQL": Braces,
  "Prisma": SiPrisma,
  "Mongoose": Link2,
  "NextAuth": Lock,
  "Zod": ShieldCheck,
  "Socket.IO": SiSocketdotio,
  "Authentication (JWT, OAuth)": KeyRound,
  "API Design": Blocks,

  // Database
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "PostgreSQL": SiPostgresql,
  "Redis (Caching)": SiRedis,

  // DevOps & Cloud
  "Docker": SiDocker,
  "AWS (EC2, S3)": SiAmazonwebservices,
  "Vercel": SiVercel,
  "Render": Cloud,
  "CI/CD Pipelines": RefreshCw,
  "Nginx (Basics)": Server,
  "Linux": Terminal,

  // Core Concepts
  "Data Structures & Algorithms": Binary,
  "OOP": Boxes,
  "SOLID Principles": CheckCircle2,
  "System Design (LLD, HLD)": Network,
  "Concurrency & Async Programming": Zap,
  "Design Patterns": Shapes,
  "Type Safety": BadgeCheck,

  // Frontend
  "Next.js": SiNextdotjs,
  "React": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "ShadCN UI": LayoutGrid,
  "Radix UI": Layout,
  "Framer Motion": Wand2,
  "HTML5": FileCode,
  "CSS3": Palette,
};

// Custom brand marks dropped into /public/icons — no entry in the Simple
// Icons set (same assets TechStack.tsx uses).
const IMAGE_ICONS: Record<string, string> = {
  "LangGraph": "/icons/langgraph.png",
  "WebSockets": "/icons/websocket-io.png",
};

function SkillBadge({ name }: { name: string }) {
  const Icon = ICONS[name];
  const imageSrc = IMAGE_ICONS[name];

  return (
    <div
      className="group inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg
        bg-white/[0.05] border border-white/[0.10]
        hover:bg-white/[0.09] hover:border-white/[0.22]
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
        <Icon className="text-[15px] text-white/45 group-hover:text-white/85 transition-colors duration-200 flex-shrink-0" />
      ) : null}
      <span className="text-[13px] text-white/70 group-hover:text-white/95 transition-colors duration-200 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="mb-16 pb-10 border-b border-white/[0.06]"
      aria-label="Technical Skills"
    >
      <p className="section-label">Skills</p>

      <div className="space-y-8">
        {skills.map((group, index) => (
          <div
            key={group.category}
            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.06}s both` }}
          >
            <p className="text-[11px] text-white/40 uppercase tracking-[0.1em] font-medium mb-3">
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
