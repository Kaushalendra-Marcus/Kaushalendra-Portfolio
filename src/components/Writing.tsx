import Image from "next/image";

const articles = [
  {
    title: "I Built an AI-Powered VS Code Extension That Understands Your Entire Codebase",
    description:
      "How I went from find + mental models to a visual dependency graph, static flow analysis, and RAG-powered Q&A — inside VS Code.",
    url: "https://medium.com/@Kaushalendra-marcus/i-built-an-ai-powered-vs-code-extension-that-understands-your-entire-codebase-c0c2a6e817de",
    thumbnail: "https://miro.medium.com/v2/format:webp/1*Bf-P4ZDUm9a4hkbFeyLnaw.png",
    readTime: "9 min",
    date: "Aug 31, 2026",
  },
  {
    title: "Building Your First MCP Server",
    description:
      "There is a specific kind of frustration that comes from tracking expenses through an app — you open it, tap through three screens. Here's how a simple MCP server fixes it.",
    url: "https://medium.com/@Kaushalendra-marcus/building-your-first-mcp-server-9aca1726d39c",
    thumbnail: "https://miro.medium.com/v2/resize:fit:1200/1*cNyEGqix1bTVyTGP_GVb3w.png",
    readTime: "8 min",
    date: "Aug 31, 2026",
  },
  {
    title: "Understanding MCP Architecture from First Principles",
    description:
      "A practical breakdown of how AI systems talk to external tools like GitHub, Slack, and databases - and why MCP is the protocol that makes it clean.",
    url: "https://medium.com/kairi-ai/understanding-mcp-architecture-from-first-principles-complete-guide-for-ai-engineers-ef5b2e510bb5",
    thumbnail: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*RjdInJAfEMhe90rYh5kkPg.png",
    readTime: "4 min",
    date: "Apr 24, 2026",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="mb-16 pb-10 border-b border-foreground/[0.06]">
      <div className="flex items-baseline justify-between mb-8">
        <p className="section-label" style={{ marginBottom: 0 }}>Writing</p>
        <a
          href="https://medium.com/@Kaushalendra-marcus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-foreground/40 hover:text-foreground/70 transition-colors font-mono link-underline"
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
              bg-foreground/[0.03] border border-foreground/[0.06]
              group-hover:border-foreground/[0.12] transition-colors duration-300 mb-3 flex-shrink-0">
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
              <p className="text-sm font-medium text-foreground/65 group-hover:text-foreground/95
                transition-colors duration-200 leading-snug mb-1.5 line-clamp-2">
                {article.title}
              </p>
              <p className="text-xs text-foreground/45 leading-relaxed line-clamp-2 flex-1 mb-3">
                {article.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-foreground/40 font-mono">{article.date}</span>
                <span className="text-foreground/15 text-[10px]">·</span>
                <span className="text-[10px] text-foreground/40 font-mono">{article.readTime} read</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
