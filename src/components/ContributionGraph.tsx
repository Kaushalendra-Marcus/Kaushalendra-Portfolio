"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const GITHUB_USER = "Kaushalendra-Marcus";

type Week = { contributionDays: { contributionCount: number; date: string }[] };

const LEVEL_COLORS = ["#14532d", "#166534", "#16a34a", "#22c55e", "#4ade80"];

function getColor(count: number, emptyColor: string): string {
  if (count === 0)  return emptyColor;
  if (count <= 3)   return LEVEL_COLORS[0];
  if (count <= 6)   return LEVEL_COLORS[1];
  if (count <= 9)   return LEVEL_COLORS[2];
  if (count <= 15)  return LEVEL_COLORS[3];
  return LEVEL_COLORS[4];
}

// Contribution heatmap, extracted out of the old GitHubStats section so it
// can be reused as the centerpiece of the /proof-of-work page. Colors are
// theme-aware (GitHub itself uses a different "empty cell" gray in light
// vs dark mode — same convention here).
export default function ContributionGraph() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const emptyColor = isDark ? "#161b22" : "#ebedf0";
  const labelColor = isDark ? "#6b7280" : "#78716c";

  const [weeks, setWeeks]     = useState<Week[]>([]);
  const [total, setTotal]     = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);

  useEffect(() => {
    // github-contributions-api.jogruber.de — free, CORS-open, no auth needed
    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`)
      .then((r) => r.json())
      .then((data: { contributions: { date: string; count: number; level: number }[]; total: Record<string, number> }) => {
        const flat = data.contributions;
        const totalCount = Object.values(data.total).reduce((a, b) => a + b, 0);
        setTotal(totalCount);

        const grouped: Week[] = [];
        let week: Week["contributionDays"] = [];

        const firstDay = new Date(flat[0].date).getDay();
        for (let i = 0; i < firstDay; i++) {
          week.push({ contributionCount: -1, date: "" }); // placeholder
        }

        flat.forEach((day) => {
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
    return <div className="w-full h-32 bg-foreground/[0.04] rounded-lg animate-pulse" />;
  }

  if (error || weeks.length === 0) {
    return (
      <p className="text-xs text-muted-foreground text-center py-6">
        Could not load graph.{" "}
        <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer" className="text-[var(--ring)] hover:underline">
          View on GitHub →
        </a>
      </p>
    );
  }

  const monthLabels: { col: number; label: string }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, col) => {
    const firstReal = week.contributionDays.find((d) => d.date && d.contributionCount >= 0);
    if (firstReal) {
      const m = new Date(firstReal.date).getMonth();
      if (m !== lastMonth) {
        monthLabels.push({ col, label: MONTHS[m] });
        lastMonth = m;
      }
    }
  });

  const CELL = 11;
  const GAP  = 3;
  const STEP = CELL + GAP;

  return (
    <div>
      {total !== null && (
        <p className="text-xs text-muted-foreground mb-3">
          <span className="text-foreground font-semibold">{total.toLocaleString()}</span> contributions in the last year
        </p>
      )}

      <div className="overflow-x-auto pb-1">
        <svg
          width={weeks.length * STEP + 30}
          height={7 * STEP + 24}
          aria-label="GitHub contribution heatmap"
        >
          {monthLabels.map(({ col, label }) => (
            <text key={`${col}-${label}`} x={col * STEP + 30} y={10} fontSize={9} fill={labelColor}>
              {label}
            </text>
          ))}

          {DAYS.map((d, i) => d && (
            <text key={d} x={4} y={i * STEP + 22} fontSize={9} fill={labelColor}>
              {d}
            </text>
          ))}

          {weeks.map((week, col) =>
            week.contributionDays.map((day, row) => {
              if (day.contributionCount < 0) return null;
              return (
                <rect
                  key={`${col}-${row}`}
                  x={col * STEP + 30}
                  y={row * STEP + 14}
                  width={CELL}
                  height={CELL}
                  rx={2}
                  fill={getColor(day.contributionCount, emptyColor)}
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
        <span className="text-[10px] text-muted-foreground">Less</span>
        {[emptyColor, ...LEVEL_COLORS].map((c) => (
          <span key={c} style={{ display: "inline-block", width: 11, height: 11, borderRadius: 2, background: c, flexShrink: 0 }} />
        ))}
        <span className="text-[10px] text-muted-foreground">More</span>
      </div>
    </div>
  );
}
