import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "buildify-labs",
    title: "Buildify Labs",
    subtitle: "Agentic AI Business Intelligence System",

    description:
      "Agentic analytics platform that turns a plain-English business question into a governed SQL query, an analysis, and a rendered chart - with guardrails against hallucinated or unsafe SQL built into the architecture, not bolted on after.",

    detailedDescription: [
      "The core problem: letting non-technical users query a real database in plain English safely - without hallucinated SQL, unbounded queries, or unguarded execution - is the part most 'chat with your data' tools skip. Solved with an agentic system (LangGraph + DeepAgents) that runs query understanding → SQL generation → sanitization → execution → analysis → structured output as a stateful graph, not a single prompt.",

      "Built modular agents (SQL generator, analysis engine, visual selector, insight generator) that each own one pipeline step, coordinated through the execution graph so failures are isolated and each stage is independently testable.",

      "Integrated MCP for structured tool interaction, giving the agents controlled, auditable access to SQL execution, data analysis, and external context sources instead of unrestricted tool calls.",

      "Implemented the safety layer that makes natural-language-to-SQL tractable: schema-constrained query generation, SQL sanitization, and execution guards that block unsafe operations before they reach the database.",

      "Developed strict Pydantic-typed JSON output pipelines so the frontend renders charts, KPI cards, anomalies, and insights without ad-hoc parsing of LLM output.",

      "Added the production controls a real product needs - authentication, rate limiting, plan-based access, and file validation - rather than treating them as an afterthought.",

      "Built a dynamic Next.js frontend that renders AI-generated UI components in real time from those structured responses, so the interface adapts to whatever the agents return.",
    ],

    technologies: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Groq (LLM)",
      "LangGraph",
      "DeepAgents",
      "MCP",
      "LangChain",
      "Zustand",
      "TypeScript",
      "Tailwind",
    ],

    github: "https://github.com/Kaushalendra-Marcus/AI-Business-Intelligence",
    live: "https://buildifylabs.in",
    gradient: "from-blue-600 to-cyan-600",
    image: "/projects/buildify-labs.png",
  },
  {
    id: "evident",
    title: "Evident",
    subtitle: "Open-Source AI Extraction & Trust Layer",

    description:
      "Open-source extraction engine built for a specific problem: AI agents can scrape a page but have no way to know if the result is complete or trustworthy. Evident returns typed data with transparent confidence scoring, over MCP, REST, and a native Python SDK.",

    detailedDescription: [
      "The problem: most extraction tools return data with no signal about how much to trust it - no indication if a JS-rendered page silently failed on a static fetch, or if a result is partial. Solved with a resilience ladder that escalates from static requests to JavaScript rendering only when needed, instead of defaulting to a headless browser for everything.",

      "Designed a deterministic confidence scoring system that returns structured provenance, extraction method, and trust metadata with every response - so an autonomous agent can decide whether to trust the answer or retry, instead of guessing.",

      "Built a versioned recipe registry for high-confidence deterministic extraction on supported platforms, falling back to LLM-powered schema extraction for arbitrary sites - so common cases don't pay an LLM-inference cost.",

      "Implemented protocol-agnostic interfaces - MCP server, REST API, and native Python SDK - all backed by the same orchestration engine and identical response contracts, so extraction logic is written once and consumed three ways.",

      "Hardened server-side fetching with SSRF protection, URL validation, and failure diagnostics, treating fetching as an attack surface rather than a convenience feature - no opaque scraping.",

      "Built an extensible plugin architecture (structured extraction, health checks, crawling, search integration, community-contributed recipes) so the extraction surface grows without touching the core engine.",

      "Built comprehensive automated tests using mocked HTTP fixtures, so extraction behavior stays deterministic and testable without depending on live network responses.",
    ],

    technologies: [
      "Python",
      "MCP",
      "FastAPI",
      "Crawl4AI",
      "Playwright",
      "Anthropic",
      "Pydantic",
      "httpx",
      "Trafilatura",
      "Docker",
    ],

    github: "https://github.com/Kaushalendra-Marcus/evident",
    live: "https://evident.kaushalendra.me",
    gradient: "from-amber-500 to-orange-600",
    image: "/projects/evident.png",
  },
  {
    id: "repograph-ai",
    title: "RepoGraph AI",
    subtitle: "VS Code Extension",
    description:
      "Free VS Code extension that maps any codebase into an interactive dependency graph with AI-powered summaries and codebase Q&A - built so nothing leaves your machine and no single model provider is required.",
    detailedDescription: [
      "The problem: understanding an unfamiliar codebase is slow, and most AI code tools either send your code to a third-party backend or lock you into one model provider. Built a VS Code extension that scans the workspace locally and maps every file relationship into an interactive force-directed dependency graph instead.",
      "Integrated 5 AI providers — Groq, Ollama, Gemini, Anthropic, and OpenAI — with support for custom model names, so the choice of model, including fully local via Ollama, stays with the user.",
      "Implemented a multi-turn Q&A agent with full graph, summary, and file context, so follow-up questions build on prior answers instead of starting over each time.",
      "Designed smart filtering to auto-skip node_modules, dist, build outputs, and generated code across 20+ languages, so the graph reflects actual source, not build noise.",
      "Built with privacy as an architectural constraint, not a feature: no backend, no account required, API keys stored in VS Code's SecretStorage via the OS keychain - the code never leaves the machine.",
    ],
    technologies: [
      "TypeScript",
      "VS Code API",
      "Groq",
      "Ollama",
      "Gemini",
      "Anthropic",
      "OpenAI",
    ],
    github: "https://github.com/Kaushalendra-Marcus/RepoGraph-AI",
    live: "https://repograph.kaushalendra.me",
    gradient: "from-violet-600 to-indigo-600",
    image: "/projects/repograph-ai.svg",
  },
  {
    id: "ai-context-engine",
    title: "AI Context Engine",
    subtitle: "Context-Aware Backend Intelligence System",
    description:
      "RAG system that answers 'how does this part of the system work' by retrieving against the actual codebase, docs, and system data - and returning structured output instead of a wall of text.",
    detailedDescription: [
      "The problem: answering how a system works usually means manually grepping through code, docs, and tickets. Built a context-aware backend that ingests codebases, docs, and system data to answer that directly.",
      "Implemented a RAG pipeline using LangChain with semantic search over a Pinecone vector database as the retrieval layer.",
      "Used HuggingFace embeddings for the similarity search layer, tuned for contextual accuracy over raw retrieval speed.",
      "Designed a modular ingestion/query pipeline split so new data sources can be added without touching retrieval or generation logic.",
      "Constrained LLM output to Pydantic schemas - summary, dependencies, risks - so results are structured data a UI or another system can consume, not just a paragraph of prose.",
      "Outcome: turns a manual code-exploration-and-doc-search task into a direct query - the retrieval and schema-constraint work is the actual engineering problem this solves.",
    ],
    technologies: [
      "Python",
      "LangChain",
      "HuggingFace",
      "Pinecone",
      "Pydantic",
      "RAG",
    ],
    github: "https://github.com/Kaushalendra-Marcus/ai-context-engine",
    live: "", // optional (add later if you deploy)
    gradient: "from-indigo-600 to-purple-600",
    image: "/projects/ai-context-engine.png",
  },
  {
    id: "postly",
    title: "Postly",
    subtitle: "Modern Social Media Platform",
    description:
      "Full-stack social app - auth, posting, media uploads, real-time feed - built to get a complete social-app data model down end to end.",
    detailedDescription: [
      "Full-stack social app built end to end to get a real social-app data model down: auth, posting, media uploads, feed.",
      "Used Clerk for authentication across multiple sign-in methods.",
      "Built a real-time feed with infinite scroll, likes, and comments.",
      "Handled media uploads and a responsive UI on top of the feed.",
      "Used MongoDB as the data layer with queries structured for the feed's access patterns.",
    ],
    technologies: ["Next.js", "Clerk", "MongoDB", "TypeScript", "Tailwind"],
    github: "https://github.com/Kaushalendra-Marcus/Postly",
    live: "https://postly-lake.vercel.app",
    image: "/projects/postly-image.png",
  },
  {
    id: "myattendance",
    title: "MyAttendance",
    subtitle: "Smart Attendance Management System",
    description:
      "Progressive Web App used by 1300+ active students to track attendance against a 75% minimum requirement, with a prediction algorithm for how many classes can safely be missed.",
    detailedDescription: [
      "Used by 1300+ active students to track attendance against a 75% minimum requirement.",
      "Built a prediction algorithm that tells a student how many classes they can miss, or need to attend, to stay above the threshold - the actual problem the app solves, not just a log of numbers.",
      "Built as a Progressive Web App so it works offline and feels native, since students check it between classes without reliable signal.",
      "Calendar view and stats dashboard for present/absent history, plus alerts when attendance gets close to the threshold.",
      "Grew from a personal tool to something classmates started relying on daily - real usage that shaped the prediction algorithm and offline handling more than any spec would have.",
    ],
    technologies: ["Next.js", "MongoDB", "PWA", "TypeScript", "Chart.js"],
    github: "https://github.com/Kaushalendra-Marcus/attendance-tracker",
    live: "https://myattendance-eta.vercel.app",
    image: "/projects/myattendance.png",
  },
  {
    id: "grs-worker",
    title: "GRS Worker Business",
    subtitle: "Worker Management System",
    description:
      "The client-facing product behind the GRS Worker internship listed under Experience - an admin platform for worker records, attendance, and payroll.",
    detailedDescription: [
      "Architected the full-stack application with Next.js 15, Prisma ORM, and NextAuth for secure session management.",
      "Integrated Twilio SMS for automated worker notifications and shift communication.",
      "Implemented QR-code generation for worker identification and quick check-ins.",
      "Built the admin dashboard covering worker management, attendance tracking, and payroll processing.",
      "Used Zod for schema validation across API routes, catching malformed submissions before they hit the database.",
      "Built on Next.js 15 with Prisma/PostgreSQL, using Turbopack and Server Actions for faster page loads.",
    ],
    technologies: [
      "Next.js 15",
      "Prisma",
      "Twilio",
      "NextAuth",
      "PostgreSQL",
      "Zod",
    ],
    github: "https://github.com/Kaushalendra-Marcus/grsp",
    live: "https://grsworker.com",
    gradient: "from-emerald-600 to-teal-600",
    image: "/projects/grs-worker.png",
  },

  {
    id: "twitter-bot",
    title: "Twitter AI Bot",
    subtitle: "AI-Powered Twitter Automation",
    description:
      "Side project automating AI-generated tweets via the Twitter API v2 - built to get hands-on with the API and prompt-driven content, not a production content system.",
    detailedDescription: [
      "Side project built to get hands-on with the Twitter API v2 - automated posting via an AI-generated content pipeline.",
      "Used an LLM to generate tweet content from prompts rather than static templates.",
      "Built basic scheduling logic to space out posting times.",
      "Added a lightweight content check before anything posts, to avoid off-brand or repetitive tweets.",
      "Logged basic engagement metrics to see what the bot was posting and how it performed.",
    ],
    technologies: ["Python", "AI/ML", "Twitter API", "OpenAI", "MongoDB"],
    github: "https://github.com/Kaushalendra-Marcus/TwitterBotAI",
    live: "https://tweetbotai.vercel.app/",
    image: "/projects/twitterbot.png",
  },
];
