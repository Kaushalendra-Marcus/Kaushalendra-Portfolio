import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mb-20 pb-12 border-b border-white/10">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Technical Skills
      </h2>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div
            key={skill.category}
            className="group"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
            }}
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-300 transition-all duration-200 hover:border-cyan-400/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}