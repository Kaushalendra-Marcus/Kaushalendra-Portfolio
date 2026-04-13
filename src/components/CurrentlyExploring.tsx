export default function CurrentlyExploring() {
  const interests = [
    {
      title: "Agentic AI Systems",
      description:
        "Designing autonomous agents using LangGraph with planning, tool calling, and multi-step reasoning",
    },
    {
      title: "RAG & Retrieval Systems",
      description:
        "Building pipelines with embeddings, vector databases, and semantic search for context-aware AI",
    },
    {
      title: "LLM Pipelines",
      description:
        "Developing structured workflows for transforming natural language into actionable outputs and APIs",
    },
    {
      title: "Scalable Backend Architecture",
      description:
        "Designing modular backend systems with async processing, caching, and high concurrency handling",
    },
    {
      title: "AI + Backend Integration",
      description:
        "Combining LLMs with production systems using FastAPI, Node.js, and real-time APIs",
    },
    {
      title: "Real-time & Event-driven Systems",
      description:
        "Building low-latency systems using WebSockets and event-driven architectures",
    },
  ];

  return (
    <section className="mb-20 pb-12 border-b border-white/10">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Currently Exploring
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((interest, index) => (
          <div
            key={interest.title}
            className="p-6 bg-white/5 border border-white/10 rounded-xl 
              hover:bg-white/10 hover:border-cyan-400/50 
              transition-all duration-300 group"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
            }}
          >
            <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-cyan-400 transition-colors">
              {interest.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {interest.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}