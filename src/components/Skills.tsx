import { skills } from "@/data/skills";

export default function Skills() {
  // Calculate total skills for screen readers
  const totalSkills = skills.reduce((acc, curr) => acc + curr.items.length, 0);

  return (
    <section 
      id="skills" 
      className="mb-20 pb-12 border-b border-white/10"
      aria-label="Technical Skills"
    >
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Technical Skills
      </h2>

      {/* Screen reader announcement */}
      <p className="sr-only" role="status">
        {skills.length} skill categories with {totalSkills} individual skills listed.
      </p>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div
            key={skill.category}
            className="group"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
            }}
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <h3 
              className="text-lg font-semibold text-cyan-400 mb-3"
              itemProp="name"
            >
              {skill.category}
            </h3>
            <div 
              className="flex flex-wrap gap-2"
              itemProp="itemListElement"
            >
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-300 transition-all duration-200 hover:border-cyan-400/50 hover:scale-105"
                  itemProp="item"
                  role="listitem"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Hidden JSON-LD structured data for skills */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Technical Skills",
            "description": "Kaushalendra Singh's technical skills and expertise",
            "numberOfItems": totalSkills,
            "itemListElement": skills.flatMap((category, catIndex) => 
              category.items.map((skill, skillIndex) => ({
                "@type": "ListItem",
                "position": catIndex * 100 + skillIndex + 1,
                "name": skill,
                "category": category.category
              }))
            )
          })
        }}
      />
    </section>
  );
}