import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mb-24 pb-16 border-b border-white/[0.06]"
      aria-label="Technical Skills"
    >
      <p className="section-label">Skills</p>

      <div className="space-y-5">
        {skills.map((group, index) => (
          <div
            key={group.category}
            className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-4 items-baseline"
            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.06}s both` }}
          >
            <p className="text-[11px] text-white/20 uppercase tracking-[0.1em] font-medium pt-0.5">
              {group.category}
            </p>
            <p className="text-sm text-white/45 leading-relaxed">
              {group.items.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
