import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-24 pb-16 border-b border-white/[0.06]"
      aria-label="Professional Experience"
    >
      <p className="section-label">Experience</p>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={exp.company}
            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
          >
            {/* Mobile: stacked. Desktop: two-col */}
            <div className="flex flex-col sm:flex-row sm:gap-8">

              {/* Left meta */}
              <div className="flex-shrink-0 sm:w-44 mb-2 sm:mb-0 sm:pt-0.5">
                <p className="text-[11px] text-white/20 font-mono mb-1">{exp.period}</p>
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/50 hover:text-white/80 transition-colors link-underline"
                >
                  {exp.company}
                </a>
              </div>

              {/* Right content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white/75 mb-3">{exp.role}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-white/35 leading-relaxed pl-3 relative
                        before:absolute before:left-0 before:top-[9px]
                        before:w-1 before:h-px before:bg-white/15"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
