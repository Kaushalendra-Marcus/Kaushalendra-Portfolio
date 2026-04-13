import { skills } from "@/data/skills";

// Each category gets a distinct accent color
const categoryAccent: Record<string, { label: string; pill: string }> = {
  Languages:  { label: "text-yellow-400/70",  pill: "hover:border-yellow-400/25 hover:text-yellow-200" },
  Frontend:   { label: "text-blue-400/70",    pill: "hover:border-blue-400/25 hover:text-blue-200" },
  Backend:    { label: "text-green-400/70",   pill: "hover:border-green-400/25 hover:text-green-200" },
  "AI/ML":    { label: "text-purple-400/70",  pill: "hover:border-purple-400/25 hover:text-purple-200" },
  Database:   { label: "text-orange-400/70",  pill: "hover:border-orange-400/25 hover:text-orange-200" },
  DevOps:     { label: "text-cyan-400/70",    pill: "hover:border-cyan-400/25 hover:text-cyan-200" },
  Core:       { label: "text-pink-400/70",    pill: "hover:border-pink-400/25 hover:text-pink-200" },
};

const fallback = {
  label: "text-gray-400/70",
  pill: "hover:border-white/20 hover:text-white",
};

export default function Skills() {
  const totalSkills = skills.reduce((acc, curr) => acc + curr.items.length, 0);

  return (
    <section
      id="skills"
      className="mb-20 pb-12 border-b border-white/10"
      aria-label="Technical Skills"
    >
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Technical Skills
      </h2>

      <p className="sr-only" role="status">
        {skills.length} skill categories with {totalSkills} individual skills listed.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => {
          const accent = categoryAccent[skill.category] ?? fallback;

          return (
            <div
              key={skill.category}
              className="bg-white/[0.025] border border-white/[0.06] rounded-2xl p-5
                hover:border-white/10 hover:bg-white/[0.035] transition-all duration-300"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.07}s both` }}
            >
              <h3 className={`text-[11px] font-bold uppercase tracking-[0.14em] mb-3 ${accent.label}`}>
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className={`px-2.5 py-1 bg-white/[0.04] border border-white/[0.07] rounded-lg
                      text-xs text-gray-400 transition-all duration-200 cursor-default
                      hover:bg-white/[0.07] hover:scale-[1.04] ${accent.pill}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Technical Skills",
            numberOfItems: totalSkills,
            itemListElement: skills.flatMap((category, ci) =>
              category.items.map((s, si) => ({
                "@type": "ListItem",
                position: ci * 100 + si + 1,
                name: s,
                category: category.category,
              }))
            ),
          }),
        }}
      />
    </section>
  );
}