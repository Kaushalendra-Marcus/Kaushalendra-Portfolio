export default function Writing() {
  const articles = [
    {
      title: "Understanding MCP Architecture from First Principles",
      description:
        "A practical breakdown of how AI systems talk to external tools like GitHub, Slack, and databases - and why MCP is the protocol that makes it clean.",
      url: "https://medium.com/p/ef5b2e510bb5",
      readTime: "4 min",
      date: "Apr 24, 2026",
    },
    {
      title: "The MCP Lifecycle, Explained",
      description:
        "What actually happens the instant Claude Desktop connects to an MCP server. A detailed walkthrough so you debug faster when building your own servers and clients.",
      url: "https://medium.com/p/400a360625e6",
      readTime: "7 min",
      date: "May 2026",
    },
    {
      title: "The Model Context Protocol: Why It Will Become an Industry Standard",
      description:
        "The story of AI's biggest integration problem - from ChatGPT's explosive growth to how MCP solves the context gap between LLMs and real-world tooling.",
      url: "https://medium.com/p/928e122844b8",
      readTime: "8 min",
      date: "May 2026",
    },
  ];

  return (
    <section id="writing" className="mb-24 pb-16 border-b border-white/[0.06]">
      <div className="flex items-baseline justify-between mb-8">
        <p className="section-label" style={{ marginBottom: 0 }}>Writing</p>
        <a
          href="https://medium.com/@Kaushalendra-marcus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-white/20 hover:text-white/50 transition-colors font-mono link-underline"
        >
          All articles
        </a>
      </div>

      <div className="space-y-0">
        {articles.map((article, index) => (
          <a
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-6 py-5 border-b border-white/[0.04]
              last:border-0 hover:bg-white/[0.015] -mx-3 px-3 rounded-lg transition-colors duration-200"
            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both` }}
          >
            {/* Index number */}
            <span className="text-[11px] font-mono text-white/15 mt-0.5 flex-shrink-0 w-4">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white/65 group-hover:text-white/90
                transition-colors duration-200 mb-1 leading-snug">
                {article.title}
              </p>
              <p className="text-xs text-white/25 leading-relaxed line-clamp-2">
                {article.description}
              </p>
            </div>

            {/* Meta */}
            <div className="flex-shrink-0 text-right hidden sm:block">
              <p className="text-[11px] text-white/20 font-mono">{article.readTime}</p>
              <p className="text-[11px] text-white/15 font-mono mt-0.5">{article.date}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
