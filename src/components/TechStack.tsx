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
  SiPytorch,
  SiOpencv,
  SiDocker,
  SiAmazonwebservices,
  SiRedis,
  SiVercel,
} from "react-icons/si";
import type { CSSProperties, ComponentType } from "react";
import { techStack } from "@/data/skills";

// Only items with a real, recognizable brand icon are shown here.
// Library-specific tools without an official logo (LangGraph, Pinecone,
// FAISS, LLaMA, Mistral, Mixtral, raw WebSockets) stay listed in the
// Skills section instead of getting a made-up/generic icon.
const ICONS: Record<string, ComponentType<{ className?: string; style?: CSSProperties }>> = {
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
  "PyTorch": SiPytorch,
  "OpenCV": SiOpencv,
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
  "PyTorch": "#EE4C2C",
  "OpenCV": "#5C3EE8",
  "Docker": "#2496ED",
  "AWS": "#FF9900",
  "Redis": "#DC382D",
  "Vercel": "#FFFFFF",
};

export default function TechStack() {
  const items = techStack.filter((name) => ICONS[name]);

  return (
    <section id="tech-stack" className="mb-16 pb-10 border-b border-white/[0.06]" aria-label="Tech Stack">
      <p className="section-label">Tech Stack</p>

      <div className="flex flex-wrap gap-2.5">
        {items.map((name) => {
          const Icon = ICONS[name];
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
        })}
      </div>
    </section>
  );
}
