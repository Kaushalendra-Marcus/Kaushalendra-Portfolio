export default function CurrentlyExploring() {
  const interests = [
    {
      title: "Agentic AI Systems",
      description:
        "Building autonomous multi-step agents with LangGraph - planning loops, tool calling, and memory. Currently wiring a research agent that can autonomously browse, summarise, and cite sources.",
      link: "https://github.com/Kaushalendra-Marcus",
      linkLabel: "See repos",
    },
    {
      title: "RAG & Retrieval Systems",
      description:
        "Experimenting with hybrid retrieval (BM25 + dense embeddings), re-ranking with Cohere, and parent-document chunking strategies. Benchmarking retrieval quality across Pinecone and FAISS.",
      link: null,
      linkLabel: null,
    },
    {
      title: "LLM Pipelines & Structured Outputs",
      description:
        "Using instructor + Pydantic to enforce structured JSON from LLMs in production. Exploring prompt caching with Anthropic's API to cut latency and cost on repeated context.",
      link: null,
      linkLabel: null,
    },
    {
      title: "Scalable Backend Architecture",
      description:
        "Studying distributed systems patterns - event sourcing, CQRS, and saga orchestration. Applying this to a side project that coordinates multiple AI agents via a message queue.",
      link: null,
      linkLabel: null,
    },
    {
      title: "AI + Backend Integration",
      description:
        "Connecting LLMs to real production systems using FastAPI webhooks, streaming SSE responses, and background task queues. Building a SaaS boilerplate with these patterns baked in.",
      link: "https://github.com/Kaushalendra-Marcus",
      linkLabel: "WIP",
    },
    {
      title: "Real-time & Event-driven Systems",
      description:
        "Prototyping a live collaboration layer using WebSockets and Redis pub/sub. Goal: sub-100ms latency for shared AI session state across browser clients.",
      link: null,
      linkLabel: null,
    },
  ];

  return (
    <section className="mb-20 pb-12 border-b border-white/10">
      <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Currently Exploring
      </h2>
      <p className="text-sm text-gray-600 mb-8">Things I&apos;m actively building, reading about, or prototyping.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {interests.map((interest, index) => (
          <div
            key={interest.title}
            className="p-5 bg-white/[0.025] border border-white/[0.06] rounded-2xl
              hover:bg-white/[0.04] hover:border-cyan-400/30
              transition-all duration-300 group flex flex-col gap-3"
            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both` }}
          >
            <h3 className="font-semibold text-sm text-white group-hover:text-cyan-400 transition-colors">
              {interest.title}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed flex-1">
              {interest.description}
            </p>
            {interest.link && (
              <a
                href={interest.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-cyan-600 hover:text-cyan-400 transition-colors w-fit"
              >
                {interest.linkLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
