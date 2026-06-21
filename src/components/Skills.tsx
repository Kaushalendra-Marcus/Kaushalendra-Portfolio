import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mb-16 pb-10 border-b border-white/[0.06]"
      aria-label="Technical Skills"
    >
      <p className="section-label">Skills</p>

      <div className="space-y-4">
        {skills.map((group, index) => (
          <div
            key={group.category}
            className="flex flex-col sm:flex-row sm:gap-8 gap-1"
            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.06}s both` }}
          >
            <p className="text-[11px] text-white/40 uppercase tracking-[0.1em] font-medium
              sm:w-44 flex-shrink-0 pt-0.5">
              {group.category}
            </p>
            <p className="text-sm text-white/50 leading-relaxed flex-1 min-w-0">
              {group.items.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
