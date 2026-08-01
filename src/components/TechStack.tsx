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
import type { CSSProperties, ComponentType } from "react";
import { techStack } from "@/data/skills";

type TechIcon = ComponentType<{ className?: string; style?: CSSProperties }>;

// Tools with a real, verified brand mark via Simple Icons.
const ICONS: Record<string, TechIcon> = {
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Python": SiPython,
  "C++": SiCplusplus,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "FastAPI": SiFastapi,
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "MySQL": SiMysql,
  "Prisma": SiPrisma,
  "Tailwind CSS": SiTailwindcss,
  "Socket.IO": SiSocketdotio,
  "LangChain": SiLangchain,
  "Hugging Face": SiHuggingface,
  "Ollama": SiOllama,
  "Docker": SiDocker,
  "AWS": SiAmazonwebservices,
  "Redis": SiRedis,
  "Vercel": SiVercel,
};

const ICON_COLORS: Record<string, string> = {
  "TypeScript": "#3178C6",
  "JavaScript": "#F7DF1E",
  "Python": "#3776AB",
  "C++": "#00599C",
  "React": "#61DAFB",
  "Next.js": "#FFFFFF",
  "Node.js": "#5FA04E",
  "Express": "#FFFFFF",
  "FastAPI": "#009688",
  "MongoDB": "#47A248",
  "PostgreSQL": "#4169E1",
  "MySQL": "#4479A1",
  "Prisma": "#2D3748",
  "Tailwind CSS": "#06B6D4",
  "Socket.IO": "#FFFFFF",
  "LangChain": "#1C3C3C",
  "Hugging Face": "#FFD21E",
  "Ollama": "#FFFFFF",
  "Docker": "#2496ED",
  "AWS": "#FF9900",
  "Redis": "#DC382D",
  "Vercel": "#FFFFFF",
};

// Custom brand icons dropped into /public/icons — used for tools that have
// no entry in the Simple Icons set.
const IMAGE_ICONS: Record<string, string> = {
  "Langfuse": "/icons/langfuse.png",
  "LangSmith": "/icons/langsmith.png",
  "FAISS": "/icons/FAISS.png",
  "WebSockets": "/icons/websocket-io.png",
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="mb-16 pb-10 border-b border-white/[0.06]" aria-label="Tech Stack">
      <p className="section-label">Tech Stack</p>

      <div className="flex flex-wrap gap-2.5">
        {techStack.map((name) => {
          const Icon = ICONS[name];
          const imageSrc = IMAGE_ICONS[name];

          if (Icon) {
            return (
              <div
                key={name}
                title={name}
                className="group w-12 h-12 flex items-center justify-center rounded-xl
                  bg-white/[0.04] border border-white/[0.07]
                  hover:bg-white/[0.07] hover:border-white/[0.16]
                  transition-all duration-200 cursor-default"
              >
                <Icon
                  className="text-[20px] opacity-80 transition-all duration-200 group-hover:opacity-100 group-hover:scale-110"
                  style={{ color: ICON_COLORS[name] }}
                />
              </div>
            );
          }

          if (imageSrc) {
            return (
              <div
                key={name}
                title={name}
                className="group w-12 h-12 flex items-center justify-center rounded-xl
                  bg-white/[0.04] border border-white/[0.07]
                  hover:bg-white/[0.07] hover:border-white/[0.16]
                  transition-all duration-200 cursor-default"
              >
                <Image
                  src={imageSrc}
                  alt={name}
                  width={22}
                  height={22}
                  className="object-contain opacity-80 transition-all duration-200 group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
            );
          }

          // No verified brand mark for this one — show it as a labeled
          // pill instead of a made-up logo.
          return (
            <div
              key={name}
              title={name}
              className="group h-12 px-3.5 flex items-center justify-center rounded-xl
                bg-white/[0.04] border border-white/[0.07]
                hover:bg-white/[0.07] hover:border-white/[0.16]
                transition-all duration-200 cursor-default"
            >
              <span className="text-[11px] font-mono uppercase tracking-wide whitespace-nowrap text-white/65 group-hover:text-white/90 transition-colors duration-200">
                {name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
