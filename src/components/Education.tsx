export default function Education() {
  const highlights = [
    "Relevant coursework: Data Structures & Algorithms, Operating Systems, DBMS, LLD, Web Development",
    "Built AI-native projects (RAG pipelines, agentic systems) as independent study alongside academics",
    "Active participant in college hackathons and open-source contribution drives",
  ];

  return (
    <section id="education" className="mb-20 pb-12 border-b border-white/10">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Education
      </h2>

      <div className="relative grid grid-cols-[20px_1fr] gap-5">
        {/* Timeline dot */}
        <div className="flex flex-col items-center pt-1.5">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.55)] flex-shrink-0 z-10" />
        </div>

        <div className="pb-2">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-base font-semibold text-white">
                Harcourt Butler Technical University
              </h3>
              <p className="text-sm text-gray-500 mt-0.5">
                Bachelor of Technology — Computer Science & Engineering
              </p>
            </div>
            <span className="text-[11px] font-mono text-gray-600 bg-white/[0.04] border border-white/[0.07] px-2.5 py-1 rounded-lg w-fit flex-shrink-0">
              2023 – 2027
            </span>
          </div>

          {/* Highlights */}
          <ul className="space-y-2">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                <span className="text-cyan-500/50 flex-shrink-0 mt-1 text-xs" aria-hidden="true">▹</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
