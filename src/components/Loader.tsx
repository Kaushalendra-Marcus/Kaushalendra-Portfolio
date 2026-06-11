"use client";

import { useEffect, useRef, useState } from "react";

export default function Loader({ onDone }: { onDone: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nameVisible, setNameVisible] = useState(false);
  const [tagVisible, setTagVisible] = useState(false);
  const [enterVisible, setEnterVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    const startTime = Date.now();

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas!.width;
    const H = () => canvas!.height;
    const CX = () => W() / 2;
    const CY = () => H() / 2;

    const chipW = () => Math.min(160, W() * 0.3);
    const chipH = () => Math.min(110, H() * 0.22);

    // 3 lines per side, evenly spaced inside chip height
    // Each line goes straight horizontal from chip edge outward
    const LINE_COUNT = 3;
    const COLORS_LEFT  = ["#aa44ff", "#00d4ff", "#ffcc00"];
    const COLORS_RIGHT = ["#00d4ff", "#00ff88", "#ff3366"];

    type Particle = { x: number; y: number; vx: number; color: string; alpha: number };
    let particles: Particle[] = [];

    function getLineY(i: number) {
      const spacing = chipH() / (LINE_COUNT + 1);
      return CY() - chipH() / 2 + spacing * (i + 1);
    }

    function getLineEndX(side: -1 | 1) {
      const lineLen = Math.min(W() * 0.22, 180);
      return CX() + side * (chipW() / 2 + lineLen);
    }

    // per-line draw progress
    const progress: number[] = new Array(LINE_COUNT * 2).fill(0);
    const STAGGER = 220; // ms between each line
    const DUR = 500;

    function getP(idx: number, elapsed: number) {
      return Math.max(0, Math.min(1, (elapsed - idx * STAGGER) / DUR));
    }

    function drawOneLine(
      side: -1 | 1,
      lineIdx: number,
      p: number,
      color: string,
      now: number
    ) {
      const y = getLineY(lineIdx);
      const startX = CX() + side * (chipW() / 2);
      const endX = getLineEndX(side);
      const drawnX = startX + (endX - startX) * p;

      // ghost
      ctx.save();
      ctx.strokeStyle = "#1c1c1c";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(startX, y);
      ctx.lineTo(endX, y);
      ctx.stroke();
      ctx.restore();

      if (p <= 0) return;

      // lit segment
      ctx.save();
      ctx.strokeStyle = "#252525";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(startX, y);
      ctx.lineTo(drawnX, y);
      ctx.stroke();
      ctx.restore();

      // dot at head of drawing line
      if (p < 0.99) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(drawnX, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      // endpoint glow bar when fully drawn
      if (p >= 0.99) {
        const flicker = 0.65 + 0.35 * Math.sin(now / 370 + lineIdx * 1.7);
        const barLen = Math.min(22, W() * 0.04);
        ctx.save();
        ctx.globalAlpha = flicker;
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.8;
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.moveTo(endX, y - 4);
        ctx.lineTo(endX + side * barLen, y - 4);
        ctx.stroke();
        ctx.restore();

        // dot at connector
        ctx.save();
        ctx.beginPath();
        ctx.arc(endX, y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = flicker;
        ctx.shadowColor = color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();

        // occasional particle
        if (Math.random() < 0.025) {
          particles.push({
            x: endX,
            y,
            vx: side * (1.0 + Math.random() * 0.8),
            color,
            alpha: 0.9,
          });
        }
      }
    }

    function updateParticles() {
      particles = particles.filter((p) => p.alpha > 0.02);
      particles.forEach((p) => {
        p.x += p.vx;
        p.alpha -= 0.02;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.restore();
      });
    }

    function drawChip(now: number) {
      const w = chipW(), h = chipH();
      const x = CX() - w / 2, y = CY() - h / 2;

      ctx.save();
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, 8);
      ctx.fillStyle = "#111";
      ctx.fill();
      ctx.strokeStyle = "#2a2a2a";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.restore();

      // top & bottom pin rows
      const pinCount = 5;
      const pinW = 5, pinH = 4;
      const gap = (w - 24) / (pinCount - 1);
      [y - pinH - 1, y + h + 1].forEach((py) => {
        for (let i = 0; i < pinCount; i++) {
          ctx.save();
          ctx.beginPath();
          ctx.roundRect(x + 12 + i * gap - pinW / 2, py, pinW, pinH, 1);
          ctx.fillStyle = "#1c1c1c";
          ctx.fill();
          ctx.strokeStyle = "#333";
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.restore();
        }
      });

      // side pin dots matching line positions
      for (let i = 0; i < LINE_COUNT; i++) {
        const ly = getLineY(i);
        [-1, 1].forEach((side) => {
          const px = side === -1 ? x - 5 : x + w + 1;
          ctx.save();
          ctx.beginPath();
          ctx.roundRect(px, ly - 3, 4, 6, 1);
          ctx.fillStyle = "#1c1c1c";
          ctx.fill();
          ctx.strokeStyle = "#2e2e2e";
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.restore();
        });
      }

      // notch
      ctx.save();
      ctx.beginPath();
      ctx.arc(x + 11, y + h / 2, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "#080808";
      ctx.fill();
      ctx.strokeStyle = "#1e1e1e";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.restore();

      // core LED
      const cg = 0.4 + 0.6 * Math.sin(now / 480);
      ctx.save();
      ctx.beginPath();
      ctx.arc(CX(), CY(), 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,212,255,${cg})`;
      ctx.shadowColor = "#00d4ff";
      ctx.shadowBlur = 10 * cg;
      ctx.fill();
      ctx.restore();

      // label
      ctx.save();
      ctx.fillStyle = "rgba(255,255,255,0.15)";
      ctx.font = "500 9px monospace";
      ctx.textAlign = "center";
      ctx.fillText("PORTFOLIO", CX(), CY() - 6);
      ctx.fillStyle = "rgba(255,255,255,0.06)";
      ctx.font = "8px monospace";
      ctx.fillText("CPU v2.0", CX(), CY() + 8);
      ctx.restore();
    }

    let uiPhase = 0;
    function tickUI(elapsed: number) {
      if (uiPhase === 0 && elapsed > 300)  { setNameVisible(true);  uiPhase = 1; }
      if (uiPhase === 1 && elapsed > 1000) { setTagVisible(true);   uiPhase = 2; }
      if (uiPhase === 2 && elapsed > 2400) { setEnterVisible(true); uiPhase = 3; }
    }

    function loop() {
      ctx.clearRect(0, 0, W(), H());
      const now = Date.now();
      const elapsed = now - startTime;

      // Left lines (side = -1), stagger 0,1,2
      for (let i = 0; i < LINE_COUNT; i++) {
        drawOneLine(-1, i, getP(i, elapsed), COLORS_LEFT[i], now);
      }
      // Right lines (side = 1), stagger 3,4,5 — slightly offset so they don't all pop at once
      for (let i = 0; i < LINE_COUNT; i++) {
        drawOneLine(1, i, getP(i + LINE_COUNT, elapsed), COLORS_RIGHT[i], now);
      }

      drawChip(now);
      updateParticles();
      tickUI(elapsed);

      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: "#080808" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      <div
        className="relative z-10 flex flex-col items-center pointer-events-none select-none"
        style={{ marginTop: "130px" }}
      >
        <p
          className="font-mono text-white uppercase tracking-[10px] sm:tracking-[14px] text-sm sm:text-base transition-opacity duration-[1200ms]"
          style={{ opacity: nameVisible ? 1 : 0 }}
        >
          Kaushalendra
        </p>
        <p
          className="font-mono text-[9px] sm:text-[10px] tracking-[4px] uppercase mt-3 transition-opacity duration-[1000ms]"
          style={{ opacity: tagVisible ? 1 : 0, color: "rgba(255,255,255,0.2)" }}
        >
          builds things that ship.
        </p>
      </div>

      <button
        onClick={onDone}
        className="relative z-10 mt-6 font-mono text-[9px] tracking-[5px] uppercase px-7 py-2 cursor-pointer transition-all duration-500"
        style={{
          opacity: enterVisible ? 1 : 0,
          border: "0.5px solid rgba(255,255,255,0.12)",
          color: "rgba(255,255,255,0.28)",
          background: "transparent",
          pointerEvents: enterVisible ? "auto" : "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
          e.currentTarget.style.color = "rgba(255,255,255,0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
          e.currentTarget.style.color = "rgba(255,255,255,0.28)";
        }}
      >
        enter ↗
      </button>
    </div>
  );
}
