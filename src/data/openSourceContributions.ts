// src/data/openSourceContributions.ts

export const openSourceContributions = [
  {
    project: "Joplin",
    role: "Open Source Contributor · Joplin",
    website: "https://github.com/laurent22/joplin/pulls?q=author:Kaushalendra-Marcus",
    logo: "/contributionorg/joplin.png",
    period: "Mar 2026 - Apr 2026",
    technologies: ["React", "Node.js", "TypeScript"],
    summary:
      "Opened 7 pull requests against the Desktop and mobile apps, with 2 merged.",
    achievements: [
      "Fixed a Desktop renderer crash that occurred when closing a secondary window (#14849) — merged.",
      "Fixed OneNote .zip import handling when .one files sit at the root level of the archive (#14605) — merged.",
      "Opened fixes for Markdown↔Rich Text Editor switching (preventing HTML blocks from being escaped), duplicate tag syncing across devices, and truncated or corrupted .one file imports during OneNote migration.",
      "Contributed a mobile fix for title field border thickness on Android and investigated OAuth support for Joplin Server on Desktop.",
    ],
  },
];
