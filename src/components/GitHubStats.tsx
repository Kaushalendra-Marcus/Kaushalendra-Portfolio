"use client";

import { useState, useEffect } from "react";

const GITHUB_USER = "Kaushalendra-Marcus";

const STREAK_URL = `https://streak-stats.demolab.com/?user=${GITHUB_USER}&hide_border=true&background=0d0d0d&ring=22d3ee&fire=3b82f6&currStreakLabel=9ca3af&sideLabels=9ca3af&dates=6b7280&currStreakNum=ffffff&sideNums=e5e7eb`;
const VIEWS_URL  = `https://komarev.com/ghpvc/?username=${GITHUB_USER}&color=22d3ee&style=flat&label=profile+views`;



// ─── Contribution heatmap — GitHub contributions API via a CORS proxy ───────
type Week = { contributionDays: { contributionCount: number; date: string }[] };

function getColor(count: number): string {
  if (count === 0)  return "#161b22";   // GitHub dark empty
  if (count <= 3)   return "#14532d";   // green-900
  if (count <= 6)   return "#166534";   // green-800
  if (count <= 9)   return "#16a34a";   // green-600
  if (count <= 15)  return "#22c55e";   // green-500
  return "#4ade80";                      // green-400 — max
}

function ContribHeatmap() {
  const [weeks, setWeeks]     = useState<Week[]>([]);
  const [total, setTotal]     = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);

  useEffect(() => {
    // github-contributions-api.jogruber.de — free, CORS-open, no auth needed
    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`)
      .then(r => r.json())
      .then((data: { contributions: { date: string; count: number; level: number }[]; total: Record<string, number> }) => {
        // Convert flat array to weeks
        const flat = data.contributions;
        const totalCount = Object.values(data.total).reduce((a, b) => a + b, 0);
        setTotal(totalCount);

        // Group into weeks (Sun–Sat)
        const grouped: Week[] = [];
        let week: Week["contributionDays"] = [];

        // Pad first week if it doesn't start on Sunday
        const firstDay = new Date(flat[0].date).getDay();
        for (let i = 0; i < firstDay; i++) {
          week.push({ contributionCount: -1, date: "" }); // placeholder
        }

        flat.forEach(day => {
          week.push({ contributionCount: day.count, date: day.date });
          if (week.length === 7) {
            grouped.push({ contributionDays: week });
            week = [];
          }
        });
        if (week.length > 0) grouped.push({ contributionDays: week });

        setWeeks(grouped);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const DAYS   = ["","Mon","","Wed","","Fri",""];

  if (loading) {
    return <div className="w-full h-32 bg-white/[0.03] rounded-lg animate-pulse" />;
  }

  if (error || weeks.length === 0) {
    return (
      <p className="text-xs text-gray-600 text-center py-6">
        Could not load graph.{" "}
        <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
          View on GitHub →
        </a>
      </p>
    );
  }

  // Month labels: find the first week where a new month starts
  const monthLabels: { col: number; label: string }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, col) => {
    const firstReal = week.contributionDays.find(d => d.date && d.contributionCount >= 0);
    if (firstReal) {
      const m = new Date(firstReal.date).getMonth();
      if (m !== lastMonth) {
        monthLabels.push({ col, label: MONTHS[m] });
        lastMonth = m;
      }
    }
  });

  const CELL = 11;   // cell size px
  const GAP  = 3;    // gap px
  const STEP = CELL + GAP;

  return (
    <div>
      {total !== null && (
        <p className="text-xs text-gray-500 mb-3">
          <span className="text-white font-semibold">{total.toLocaleString()}</span> contributions in the last year
        </p>
      )}

      <div className="overflow-x-auto pb-1">
        <svg
          width={weeks.length * STEP + 30}
          height={7 * STEP + 24}
          aria-label="GitHub contribution heatmap"
        >
          {/* Month labels */}
          {monthLabels.map(({ col, label }) => (
            <text
              key={`${col}-${label}`}
              x={col * STEP + 30}
              y={10}
              fontSize={9}
              fill="#6b7280"
            >
              {label}
            </text>
          ))}

          {/* Day-of-week labels */}
          {DAYS.map((d, i) => d && (
            <text key={d} x={4} y={i * STEP + 22} fontSize={9} fill="#6b7280">
              {d}
            </text>
          ))}

          {/* Cells */}
          {weeks.map((week, col) =>
            week.contributionDays.map((day, row) => {
              if (day.contributionCount < 0) return null; // padding placeholder
              return (
                <rect
                  key={`${col}-${row}`}
                  x={col * STEP + 30}
                  y={row * STEP + 14}
                  width={CELL}
                  height={CELL}
                  rx={2}
                  fill={getColor(day.contributionCount)}
                >
                  {day.date && day.contributionCount > 0 && (
                    <title>{day.contributionCount} contributions on {day.date}</title>
                  )}
                </rect>
              );
            })
          )}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1.5 mt-2 justify-end">
        <span className="text-[10px] text-gray-600">Less</span>
        {["#161b22","#14532d","#16a34a","#22c55e","#4ade80"].map(c => (
          <span key={c} style={{ display: "inline-block", width: 11, height: 11, borderRadius: 2, background: c, flexShrink: 0 }} />
        ))}
        <span className="text-[10px] text-gray-600">More</span>
      </div>
    </div>
  );
}

// ─── Main section ────────────────────────────────────────────────────────────
export default function GitHubStats() {
  return (
    <section id="github" className="mb-24 pb-16 border-b border-white/[0.06]" aria-label="GitHub Activity">

      <div className="flex items-baseline justify-between mb-8">
        <p className="section-label" style={{ marginBottom: 0 }}>GitHub</p>
        <img src={VIEWS_URL} alt="Profile views" className="h-5 opacity-60" loading="lazy" />
      </div>

      {/* Stats + Streak */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-5 hover:border-white/10 transition-all duration-300 overflow-hidden">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-600 mb-4">Stats</p>
          <img src={STREAK_URL} alt="GitHub streak" className="w-full" loading="lazy" />
        </div>
      </div>

      {/* Heatmap */}
      <div className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-5 hover:border-white/10 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-600">
            Contribution graph
          </p>
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-gray-600 hover:text-cyan-400 transition-colors"
          >
            View on GitHub →
          </a>
        </div>
        <ContribHeatmap />
      </div>

    </section>
  );
}
