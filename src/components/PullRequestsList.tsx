"use client";

import { useState, useEffect } from "react";

const GITHUB_USER = "Kaushalendra-Marcus";
const INITIAL_COUNT = 5;

interface PullRequest {
  id: number;
  title: string;
  html_url: string;
  repository_url: string;
  created_at: string;
}

function repoFullName(repositoryUrl: string): string {
  // "https://api.github.com/repos/{owner}/{repo}" -> "{owner}/{repo}"
  return repositoryUrl.replace("https://api.github.com/repos/", "");
}

// Live list of authored PRs via GitHub's public search API — no token
// needed. Unauthenticated search is rate-limited (10 req/min per IP); for
// a personal portfolio's traffic that's essentially never hit, but if it
// ever is, this fails over to a plain link instead of a broken widget.
export default function PullRequestsList() {
  const [prs, setPrs]         = useState<PullRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/search/issues?q=is:pr+author:${GITHUB_USER}&sort=created&order=desc&per_page=100`)
      .then((r) => {
        if (!r.ok) throw new Error("request failed");
        return r.json();
      })
      .then((data: { items: PullRequest[] }) => {
        setPrs(data.items ?? []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="space-y-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-14 bg-foreground/[0.04] rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  if (error || prs.length === 0) {
    return (
      <p className="text-xs text-muted-foreground text-center py-6">
        Could not load pull requests right now.{" "}
        <a
          href={`https://github.com/${GITHUB_USER}?tab=overview`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--ring)] hover:underline"
        >
          View on GitHub →
        </a>
      </p>
    );
  }

  const visible = showAll ? prs : prs.slice(0, INITIAL_COUNT);
  const remaining = prs.length - INITIAL_COUNT;

  return (
    <div>
      <div className="divide-y divide-foreground/[0.06] border-y border-foreground/[0.06]">
        {visible.map((pr) => (
          <a
            key={pr.id}
            href={pr.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block py-3.5 hover:bg-foreground/[0.02] transition-colors duration-200 -mx-1 px-1 rounded-lg"
          >
            <p className="text-sm text-foreground/75 group-hover:text-foreground transition-colors duration-200 leading-snug">
              {pr.title}
            </p>
            <p className="text-xs text-muted-foreground mt-1 font-mono">
              {repoFullName(pr.repository_url)}
            </p>
          </a>
        ))}
      </div>

      {remaining > 0 && (
        <button
          onClick={() => setShowAll((s) => !s)}
          className="mt-4 flex items-center gap-1.5 text-xs font-medium text-foreground/55
            hover:text-foreground/85 transition-colors duration-200"
        >
          <span>{showAll ? "↑" : "↓"}</span>
          {showAll ? "Show less" : `Expand • ${remaining} more`}
        </button>
      )}
    </div>
  );
}
