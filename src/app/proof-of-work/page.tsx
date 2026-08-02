import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ContributionGraph from "@/components/ContributionGraph";
import PullRequestsList from "@/components/PullRequestsList";

export const metadata: Metadata = {
  title: "Proof of Work",
  description: "Open source activity, GitHub contributions, and pull requests.",
};

export default function ProofOfWorkPage() {
  return (
    <PageShell>
      <div className="mb-10">
        <p className="section-label" style={{ marginBottom: 6 }}>Proof of Work</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3">Proof Of Work</h1>
        <p className="text-sm text-foreground/55 max-w-lg leading-relaxed">
          I love spending time in open source, building real stuff and solving real problems.
        </p>
      </div>

      {/* Contribution heatmap */}
      <div className="bg-card border border-foreground/[0.06] rounded-2xl p-5 mb-6
        hover:border-foreground/[0.12] transition-colors duration-300">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Contribution graph
          </p>
          <a
            href="https://github.com/Kaushalendra-Marcus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-muted-foreground hover:text-[var(--ring)] transition-colors"
          >
            View on GitHub →
          </a>
        </div>
        <ContributionGraph />
      </div>

      {/* Pull requests */}
      <div className="mb-16">
        <div className="flex items-baseline justify-between mb-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Pull Requests
          </p>
          <span className="text-[11px] text-muted-foreground font-mono">All pull requests</span>
        </div>
        <PullRequestsList />
      </div>
    </PageShell>
  );
}
