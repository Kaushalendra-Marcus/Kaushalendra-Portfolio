import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mb-20 pb-12 border-b border-white/10">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Experience
      </h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={exp.company}
            className="relative pl-8 border-l-2 border-white/10"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
            }}
          >
            {/* Timeline dot */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {exp.company}
                  </a>
                </h3>
                <p className="text-gray-400">{exp.role}</p>
              </div>
              <span className="text-gray-500 text-sm mt-1 sm:mt-0">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-2 mt-4">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-cyan-400 mt-1.5 flex-shrink-0">▹</span>
                  <span dangerouslySetInnerHTML={{ __html: achievement }} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}