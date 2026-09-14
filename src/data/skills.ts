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
      "Langfuse",
      "LangSmith",
      "DeepEval",
      "RAG (Retrieval Augmented Generation)",
      "MCP (Model Context Protocol)",
      "Vector Databases (Pinecone, FAISS)",
      "PyTorch",
      "Multi-LLM Integration (OpenAI, Anthropic, Gemini, Groq)",
    ],
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "FastAPI", "PostgreSQL", "MongoDB", "Neo4j", "Prisma", "Docker", "AWS"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS"],
  },
];

// Secondary infra/tooling layer (local inference).
// Keeps every tech listed exactly once — items already covered in
// `skills` above are NOT repeated here.
export const techStack = [
  "Hugging Face",
  "Ollama",
];
