import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-24 pb-16 border-b border-white/[0.06]"
      aria-label="Professional Experience"
    >
      <p className="section-label">Experience</p>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={exp.company}
            className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8"
            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
          >
            {/* Left col - meta */}
            <div className="pt-0.5">
              <p className="text-[11px] text-white/20 font-mono mb-1">{exp.period}</p>
              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/60 hover:text-white transition-colors link-underline"
              >
                {exp.company}
              </a>
            </div>

            {/* Right col - content */}
            <div>
              <p className="text-sm font-medium text-white/80 mb-3">{exp.role}</p>
              <ul className="space-y-2">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="text-sm text-white/40 leading-relaxed pl-3 relative
                    before:absolute before:left-0 before:top-[9px] before:w-1 before:h-px before:bg-white/20">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
