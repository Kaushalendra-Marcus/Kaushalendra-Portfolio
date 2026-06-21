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
    <div className="mb-16 bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-6
      flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-start gap-3 max-w-xl">
        <span className="text-3xl text-white/15 font-serif leading-none flex-shrink-0 -mt-1" aria-hidden="true">
          &ldquo;
        </span>
        <div>
          <p className="text-sm text-white/55 leading-relaxed">
            Don't tell people your potential. Show them your work.
          </p>
          <p className="text-xs text-white/30 font-mono mt-2">— Unknown</p>
        </div>
      </div>

      {count !== null && (
        <p className="text-sm text-white/40 font-mono flex-shrink-0 sm:text-right">
          You are the{" "}
          <span className="text-white font-semibold">
            {count.toLocaleString()}
            <sup className="text-[10px] font-normal text-white/40">{ordinalSuffix(count)}</sup>
          </span>{" "}
          visitor
        </p>
      )}
    </div>
  );
}
