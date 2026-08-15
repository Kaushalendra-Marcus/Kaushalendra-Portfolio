import { Skill } from "@/types";

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python"],
  },
  {
    category: "AI / LLM Engineering",
    items: [
      "LangChain",
      "LangGraph",
      "RAG (Retrieval Augmented Generation)",
      "MCP (Model Context Protocol)",
      "Vector Databases (Pinecone)",
      "Multi-LLM Integration (OpenAI, Anthropic, Gemini, Groq)",
    ],
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "FastAPI", "PostgreSQL", "MongoDB", "Neo4j", "Prisma"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS"],
  },
];

// Deliberately NOT a repeat of the categorized list above - this is the
// secondary infra/tooling layer (observability, local inference, vector
// search, deployment) that supports the AI/LLM work without diluting it
// with generalist items already implied by "full-stack."
export const techStack = [
  "Langfuse",
  "LangSmith",
  "FAISS",
  "Hugging Face",
  "Ollama",
  "Docker",
  "AWS",
  "Redis",
];
