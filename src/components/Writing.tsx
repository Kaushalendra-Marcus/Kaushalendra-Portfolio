import Image from "next/image";

const articles = [
  {
    title: "Understanding MCP Architecture from First Principles",
    description:
      "A practical breakdown of how AI systems talk to external tools like GitHub, Slack, and databases - and why MCP is the protocol that makes it clean.",
    url: "https://medium.com/kairi-ai/understanding-mcp-architecture-from-first-principles-complete-guide-for-ai-engineers-ef5b2e510bb5",
    thumbnail: "https://miro.medium.com/v2/resize:fit:1018/1*iWBlcKoa_3_ptATziHs7ZA.png",
    readTime: "4 min",
    date: "Apr 24, 2026",
  },
  {
    title: "The MCP Lifecycle, Explained",
    description:
      "What actually happens the instant Claude Desktop connects to an MCP server - a detailed walkthrough so you debug faster when building your own servers and clients.",
    url: "https://medium.com/@Kaushalendra-marcus/the-mcp-lifecycle-explained-400a360625e6",
    thumbnail: "https://miro.medium.com/v2/resize:fit:972/1*pN71hxAvN8HE_NnDnYDUUg.png",
    readTime: "7 min",
    date: "May 21, 2026",
  },
  {
    title: "The Model Context Protocol: Why It Will Become an Industry Standard",
    description:
      "The story of AI's biggest integration problem - from ChatGPT's explosive growth to how MCP solves the context gap between LLMs and real-world tooling.",
    url: "https://medium.com/kairi-ai/the-model-context-protocol-mcp-why-it-will-become-an-industry-standard-928e122844b8",
    thumbnail: "https://miro.medium.com/v2/resize:fit:1200/1*LHdbbp1pP0nor_-rfk8MhQ.png",
    readTime: "8 min",
    date: "May 21, 2026",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="mb-16 pb-10 border-b border-white/[0.06]">
      <div className="flex items-baseline justify-between mb-8">
        <p className="section-label" style={{ marginBottom: 0 }}>Writing</p>
        <a
          href="https://medium.com/@Kaushalendra-marcus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-white/35 hover:text-white/65 transition-colors font-mono link-underline"
        >
          All articles
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {articles.map((article, index) => (
          <a
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col"
            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both` }}
          >
            {/* Thumbnail */}
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden
              bg-white/[0.03] border border-white/[0.06]
              group-hover:border-white/[0.12] transition-colors duration-300 mb-3 flex-shrink-0">
              <Image
                src={article.thumbnail}
                alt={article.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
              />
            </div>

            {/* Text */}
            <div className="flex-1 flex flex-col">
              <p className="text-sm font-medium text-white/60 group-hover:text-white/90
                transition-colors duration-200 leading-snug mb-1.5 line-clamp-2">
                {article.title}
              </p>
              <p className="text-xs text-white/40 leading-relaxed line-clamp-2 flex-1 mb-3">
                {article.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/35 font-mono">{article.date}</span>
                <span className="text-white/15 text-[10px]">·</span>
                <span className="text-[10px] text-white/35 font-mono">{article.readTime} read</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
