"use client";

import { useEffect, useState } from "react";

// Live IST clock for the hero availability line. Ticks every second —
// a single tiny span re-render, nothing else on the page is touched.
const fmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

export default function LocalTime() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time} IST</span>;
}
