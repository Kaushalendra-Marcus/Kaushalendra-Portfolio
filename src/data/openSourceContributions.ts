// src/data/openSourceContributions.ts

export const openSourceContributions = [
  {
    project: "XERJ Corpus Hub",
    role: "Selected Contributor · XERJ Corpus Hub",
    website: "https://hub.xerj.org/contributors/Kaushalendra-Marcus",
    logo: "/contributionorg/xerj_hub_logo.png",
    logoSize: 40, // px - bigger than the default 24 so the XERJ logo reads clearly
    period: "Oct 2026",
    technologies: ["TypeScript", "JavaScript"],
    summary:
      "XERJ Corpus Hub is the open reference memory that AI coding agents search before they write code - RepoGraph AI was selected for it, so when an agent meets the same problem it gets this implementation back as a worked example, with the author and repository attached.",
    achievements: [
      "RepoGraph AI (Kaushalendra-Marcus/RepoGraph-AI) was selected for the XERJ Corpus Hub and now has a live contributor page, with the corpus licence cleared (MIT).",
      "Selected commit \"llm model chat section fixed\" (606d8d4991): 11 files and 585 lines across src/providers, src/analyzer and src/agents; the whole repository is indexed at that pinned commit.",
      "Agents can look up how RepoGraph AI implements graph, repograph and aicontext, with answers cited to file and line, instead of answering from memory.",
    ],
  },
  {
    project: "Joplin",
    role: "Open Source Contributor · Joplin",
    website: "https://github.com/laurent22/joplin/pulls?q=author:Kaushalendra-Marcus",
    logo: "/contributionorg/joplin.png",
    period: "Mar 2026 - Apr 2026",
    technologies: ["React", "Node.js", "TypeScript"],
    summary:
      "Joplin is a privacy-focused, open-source note-taking app with 45,000+ GitHub stars - opened 7 pull requests against its Desktop and mobile apps, with 2 merged into a mature, actively-maintained codebase under real reviewer scrutiny.",
    achievements: [
      "Fixed a Desktop renderer crash triggered when closing a secondary window (#14849) — merged into Joplin's production codebase.",
      "Fixed OneNote .zip import handling when .one files sit at the root level of the archive (#14605) — merged.",
      "Opened fixes for Markdown↔Rich Text Editor switching (preventing HTML blocks from being escaped), duplicate tag syncing across devices, and truncated or corrupted .one file imports during OneNote migration.",
      "Contributed a mobile fix for title field border thickness on Android and investigated OAuth support for Joplin Server on Desktop.",
    ],
  },
];
