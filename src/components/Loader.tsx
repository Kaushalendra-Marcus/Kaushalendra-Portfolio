"use client";

import { useEffect, useState } from "react";

export default function Loader({
  onDone,
  onExitStart,
}: {
  onDone: () => void;
  onExitStart?: () => void;
}) {
  const [nameVisible, setNameVisible] = useState(false);
  const [tagVisible, setTagVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setNameVisible(true), 200);
    const t2 = setTimeout(() => setTagVisible(true), 450);
    const t3 = setTimeout(() => {
      setExiting(true);
      onExitStart?.();
    }, 2400);
    const t4 = setTimeout(() => onDone(), 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onDone, onExitStart]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "#080808",
        opacity: exiting ? 0 : 1,
        transform: exiting ? "translateX(-4%) scale(1.05)" : "translateX(0) scale(1)",
        transition:
          "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1), transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Spider — Uiverse by TechByElijah, scoped to loader */}
      <div className={`sp-stage ${exiting ? "sp-exiting" : ""}`}>
        <div className="sp-container sp-center">
          <div className="sp-rope sp-center">
            <div className="sp-legs sp-center">
              <div className="sp-boot-l"></div>
              <div className="sp-boot-r"></div>
            </div>
            <div className="sp-costume sp-center">
              <div className="sp-spider">
                <div className="sp-s1 sp-center"></div>
                <div className="sp-s2 sp-center"></div>
                <div className="sp-s3"></div>
                <div className="sp-s4"></div>
              </div>
              <div className="sp-belt sp-center"></div>
              <div className="sp-hand-r"></div>
              <div className="sp-hand-l"></div>
              <div className="sp-neck sp-center"></div>
              <div className="sp-mask sp-center">
                <div className="sp-eye-l"></div>
                <div className="sp-eye-r"></div>
              </div>
              <div className="sp-cover sp-center"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center pointer-events-none select-none mt-[140px] sm:mt-[160px]">
        <p
          className="font-mono text-white uppercase tracking-[10px] sm:tracking-[14px] text-sm sm:text-base transition-opacity duration-300"
          style={{ opacity: nameVisible ? 1 : 0 }}
        >
          Kaushalendra
        </p>
        <p
          className="font-mono text-[9px] sm:text-[10px] tracking-[4px] uppercase mt-3 transition-opacity duration-300"
          style={{ opacity: tagVisible ? 1 : 0, color: "rgba(255,255,255,0.4)" }}
        >
          builds things that ship.
        </p>
      </div>

      <style jsx>{`
        .sp-center {
          position: absolute;
          transform: translateX(-50%);
          left: 50%;
        }
        .sp-stage {
          position: absolute;
          top: 44%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 21.87em;
          height: 31.25em;
          font-size: 12px;
          transition: transform 300ms ease, opacity 300ms ease;
          animation: spDrop 0.85s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .sp-exiting {
          transform: translate(-50%, -50%) scale(1.08);
          opacity: 0.85;
          animation: none;
        }
        @keyframes spDrop {
          0% { transform: translate(-50%, -170%); }
          60% { transform: translate(-50%, -42%); }
          75% { transform: translate(-50%, -56%); }
          88% { transform: translate(-50%, -48%); }
          100% { transform: translate(-50%, -50%); }
        }
        .sp-container {
          height: 31.25em;
          width: 21.87em;
          margin-top: -325px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .sp-rope {
          height: 13.62em;
          width: 0.15em;
          background-color: #ffffff;
          animation: spSwing 2s infinite;
        }
        @keyframes spSwing {
          50% {
            transform: translateX(-50%) translateY(-0.6em);
          }
        }
        .sp-legs {
          height: 1.12em;
          width: 7.5em;
          background-color: transparent;
          box-shadow: 0 0 0 0.12em #140243, 0 0 0 1.06em #1b1676, 0 0 0 1.18em #140243;
          top: 12.5em;
          border-radius: 3.12em;
        }
        .sp-boot-l,
        .sp-boot-r {
          height: 1.25em;
          width: 2.5em;
          background-color: #e32832;
          position: absolute;
          border: 0.12em solid #140243;
          bottom: 1.12em;
        }
        .sp-boot-l { left: 1em; }
        .sp-boot-r {
          transform: rotateY(180deg);
          left: 3.81em;
        }
        .sp-boot-l:before,
        .sp-boot-r:before {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-bottom: 1.12em solid #140243;
          border-left: 1.18em solid transparent;
          bottom: 1.31em;
          left: 1.46em;
        }
        .sp-boot-l:after,
        .sp-boot-r:after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-bottom: 1.12em solid #e32832;
          border-left: 1em solid transparent;
          right: 0;
          top: -0.93em;
        }
        .sp-costume {
          height: 6.25em;
          width: 5.62em;
          background: linear-gradient(to right, #1b1676 20%, #e32832 20%, #e32832 80%, #1b1676 80%);
          border: 0.12em solid #140243;
          top: 14.68em;
        }
        .sp-spider {
          height: 1.87em;
          width: 0.93em;
          background-color: #140243;
          border-radius: 45%;
          position: absolute;
          transform: translate(-50%, -50%);
          top: calc(50% + 0.93em);
          left: 50%;
        }
        .sp-s1, .sp-s3 {
          height: 7.5em;
          width: 2.5em;
          border-radius: 0 0 1.37em 1.37em;
          border-bottom: 0.12em solid #140243;
          position: absolute;
        }
        .sp-s2, .sp-s4 {
          height: 7.5em;
          width: 3.12em;
          border-radius: 0 0 1.56em 1.56em;
          border-bottom: 0.12em solid #140243;
          position: absolute;
        }
        .sp-s1, .sp-s2, .sp-s3, .sp-s4 { left: 50%; }
        .sp-s1 { bottom: 1.43em; }
        .sp-s2 { bottom: 0.93em; }
        .sp-s3, .sp-s4 { transform: translateX(-50%) rotateX(180deg); }
        .sp-s3 { top: 1.43em; }
        .sp-s4 { top: 0.93em; }
        .sp-belt {
          height: 0.43em;
          width: 5.87em;
          background-color: #e32832;
          border: 0.12em solid #140243;
          top: -0.12em;
        }
        .sp-hand-r, .sp-hand-l {
          height: 8.12em;
          background: linear-gradient(#e32832 4.6em, #140243 4.6em, #140243 4.75em, #1b1676 4.75em, #1b1676 8.12em);
          width: 1.12em;
          border: 0.12em solid #140243;
          border-radius: 1.25em;
          position: absolute;
          transform-origin: bottom;
          bottom: -0.12em;
        }
        .sp-hand-r { right: -0.75em; transform: rotate(-22deg); }
        .sp-hand-l { left: -0.75em; transform: rotate(22deg); }
        .sp-neck {
          height: 0.37em;
          width: 1.25em;
          background-color: #e32832;
          bottom: -0.62em;
          border: 0.12em solid #140243;
        }
        .sp-mask {
          height: 4.65em;
          width: 4.06em;
          background-color: #e32832;
          border-radius: 50% 50% 50% 50% / 54% 54% 46% 46%;
          border: 0.12em solid #140243;
          top: 6.56em;
        }
        .sp-eye-l, .sp-eye-r {
          height: 0.68em;
          width: 1.37em;
          background-color: #ffffff;
          border-radius: 1.37em 1.37em 0 0;
          border: 0.12em solid #140243;
          position: absolute;
          top: 2.1em;
        }
        .sp-eye-l { left: 0.3em; }
        .sp-eye-r { right: 0.3em; }
        .sp-cover {
          height: 3.12em;
          width: 0.15em;
          background-color: #ffffff;
          bottom: 8.12em;
        }
        @media screen and (min-width: 600px) {
          .sp-stage { font-size: 15px; }
        }
        @media screen and (max-width: 400px) {
          .sp-stage { font-size: 10px; }
        }
      `}</style>
    </div>
  );
}
