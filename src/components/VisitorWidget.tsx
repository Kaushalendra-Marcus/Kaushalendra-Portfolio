"use client";

import { useEffect, useState } from "react";

// Free, CORS-enabled hit counter — no backend of our own needed.
// If this third-party service is ever down, the count just stays hidden
// (caught below) and the quote still renders fine on its own.
const COUNTER_URL = "https://api.countapi.xyz/hit/kaushalendra.me/visits";

function ordinalSuffix(n: number): string {
  const v = n % 100;
  if (v >= 11 && v <= 13) return "th";
  switch (n % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

export default function VisitorWidget() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(COUNTER_URL)
      .then((r) => r.json())
      .then((data: { value: number }) => setCount(data.value))
      .catch(() => setCount(null));
  }, []);

  return (
    <div className="mb-16 bg-card border border-foreground/[0.06] rounded-2xl p-6
      flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-start gap-3 max-w-xl">
        <span className="text-3xl text-foreground/20 font-serif leading-none flex-shrink-0 -mt-1" aria-hidden="true">
          &ldquo;
        </span>
        <div>
          <p className="text-sm text-foreground/60 leading-relaxed">
            Don't tell people your potential. Show them your work.
          </p>
          <p className="text-xs text-foreground/35 font-mono mt-2">— Unknown</p>
        </div>
      </div>

      {count !== null && (
        <p className="text-sm text-foreground/45 font-mono flex-shrink-0 sm:text-right">
          You are the{" "}
          <span className="text-foreground font-semibold">
            {count.toLocaleString()}
            <sup className="text-[10px] font-normal text-foreground/45">{ordinalSuffix(count)}</sup>
          </span>{" "}
          visitor
        </p>
      )}
    </div>
  );
}
