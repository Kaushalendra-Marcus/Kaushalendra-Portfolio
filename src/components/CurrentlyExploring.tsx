export default function CurrentlyExploring() {
  const interests = [
    {
      title: "Agentic AI Systems",
      description:
        "Building autonomous multi-step agents with LangGraph - planning loops, tool calling, and memory. Currently wiring a research agent that can autonomously browse, summarise, and cite sources.",
    },
    {
      title: "RAG & Retrieval Systems",
      description:
        "Experimenting with hybrid retrieval (BM25 + dense embeddings), re-ranking with Cohere, and parent-document chunking. Benchmarking quality across Pinecone and FAISS.",
    },
    {
      title: "LLM Pipelines & Structured Outputs",
      description:
        "Using instructor + Pydantic to enforce structured JSON from LLMs in production. Exploring prompt caching with Anthropic's API to cut latency on repeated context.",
    },
    {
      title: "Scalable Backend Architecture",
      description:
        "Studying distributed systems patterns - event sourcing, CQRS, saga orchestration. Applying this to a side project coordinating multiple AI agents via a message queue.",
    },
    {
      title: "MCP Integrations",
      description:
        "Contributing to Model Context Protocol servers that connect LLMs to developer tools. Writing about MCP architecture on Medium as I go deeper.",
    },
    {
      title: "Real-time & Event-driven Systems",
      description:
        "Prototyping a live collaboration layer using WebSockets and Redis pub/sub. Goal: sub-100ms latency for shared AI session state across browser clients.",
    },
  ];

  return (
    <section className="mb-24 pb-16 border-b border-white/[0.06]">
      <p className="section-label">Currently Exploring</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {interests.map((interest, index) => (
          <div
            key={interest.title}
            style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.07}s both` }}
          >
            <p className="text-sm font-medium text-white/60 mb-1.5">{interest.title}</p>
            <p className="text-sm text-white/30 leading-relaxed">{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
