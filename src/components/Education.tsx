export default function Education() {
  return (
    <section id="education" className="mb-24 pb-16 border-b border-white/[0.06]">
      <p className="section-label">Education</p>

      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8">
        <div>
          <p className="text-[11px] text-white/20 font-mono mb-1">2023 - 2027</p>
          <p className="text-sm text-white/50">HBTU Kanpur</p>
        </div>
        <div>
          <p className="text-sm font-medium text-white/80 mb-3">
            B.Tech - Computer Science
          </p>
          <ul className="space-y-2">
            {[
              "Coursework: Data Structures, Operating Systems, DBMS, Computer Networks, System Design",
              "Built AI projects independently alongside academics - RAG systems, agentic workflows, full-stack apps",
              "Participated in hackathons and open-source contribution drives",
            ].map((item, i) => (
              <li key={i} className="text-sm text-white/35 leading-relaxed pl-3 relative
                before:absolute before:left-0 before:top-[9px] before:w-1 before:h-px before:bg-white/15">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
