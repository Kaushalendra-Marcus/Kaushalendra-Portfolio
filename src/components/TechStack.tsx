import { techStack } from "@/data/skills";

export default function TechStack() {
  return (
    <section className="mb-20 pb-12 border-b border-white/10">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        My Stack
      </h2>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech, index) => (
          <span
            key={tech}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-sm text-white/90 transition-all duration-200 hover:scale-105 hover:border-cyan-400/50 cursor-default"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
