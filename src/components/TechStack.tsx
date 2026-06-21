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
import type { ComponentType } from "react";
import { techStack } from "@/data/skills";

// Only items with a real, recognizable brand icon are shown here.
// Library-specific tools without an official logo (LangGraph, Pinecone,
// FAISS, LLaMA, Mistral, Mixtral, raw WebSockets) stay listed in the
// Skills section instead of getting a made-up/generic icon.
const ICONS: Record<string, ComponentType<{ className?: string }>> = {
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
              <Icon className="text-[20px] text-white/55 group-hover:text-white/90 transition-colors duration-200" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
