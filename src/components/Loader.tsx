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
    const t1 = setTimeout(() => setNameVisible(true), 150);
    const t2 = setTimeout(() => setTagVisible(true), 350);
    // Exit begins here — this is also the cue for the page underneath to
    // start revealing itself, so the two animations play as one motion
    // instead of "loader vanishes, then static page appears".
    const t3 = setTimeout(() => {
      setExiting(true);
      onExitStart?.();
    }, 700);
    const t4 = setTimeout(() => onDone(), 1000);

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
      {/* Uiverse.io speeder loader by anand_4957 */}
      <div className={`loader ${exiting ? "loader-exit" : ""}`}>
        <span>
          <span />
          <span />
          <span />
          <span />
        </span>
        <div className="base">
          <span />
          <div className="face" />
        </div>
      </div>
      <div className="longfazers">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="relative z-10 flex flex-col items-center pointer-events-none select-none mt-24 sm:mt-28">
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
        .loader {
          position: absolute;
          top: 50%;
          margin-left: -50px;
          left: 50%;
          animation: speeder 0.4s linear infinite;
        }
        .loader-exit {
          /* Revs up right before it's gone, like it's punching to hyperspace */
          animation: speeder 0.12s linear infinite;
        }
        .loader > span {
          height: 5px;
          width: 35px;
          background: #e8e8e8;
          position: absolute;
          top: -19px;
          left: 60px;
          border-radius: 2px 10px 1px 0;
        }
        .base span {
          position: absolute;
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-right: 100px solid #e8e8e8;
          border-bottom: 6px solid transparent;
        }
        .base span:before {
          content: "";
          height: 22px;
          width: 22px;
          border-radius: 50%;
          background: #e8e8e8;
          position: absolute;
          right: -110px;
          top: -16px;
        }
        .base span:after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-top: 0 solid transparent;
          border-right: 55px solid #e8e8e8;
          border-bottom: 16px solid transparent;
          top: -16px;
          right: -98px;
        }
        .face {
          position: absolute;
          height: 12px;
          width: 20px;
          background: #e8e8e8;
          border-radius: 20px 20px 0 0;
          transform: rotate(-40deg);
          right: -125px;
          top: -15px;
        }
        .face:after {
          content: "";
          height: 12px;
          width: 12px;
          background: #e8e8e8;
          right: 4px;
          top: 7px;
          position: absolute;
          transform: rotate(40deg);
          transform-origin: 50% 50%;
          border-radius: 0 0 0 2px;
        }
        .loader > span > span:nth-child(1),
        .loader > span > span:nth-child(2),
        .loader > span > span:nth-child(3),
        .loader > span > span:nth-child(4) {
          width: 30px;
          height: 1px;
          background: #e8e8e8;
          position: absolute;
          animation: fazer1 0.2s linear infinite;
        }
        .loader > span > span:nth-child(2) {
          top: 3px;
          animation: fazer2 0.4s linear infinite;
        }
        .loader > span > span:nth-child(3) {
          top: 1px;
          animation: fazer3 0.4s linear infinite;
          animation-delay: -1s;
        }
        .loader > span > span:nth-child(4) {
          top: 4px;
          animation: fazer4 1s linear infinite;
          animation-delay: -1s;
        }
        @keyframes fazer1 {
          0% {
            left: 0;
          }
          100% {
            left: -80px;
            opacity: 0;
          }
        }
        @keyframes fazer2 {
          0% {
            left: 0;
          }
          100% {
            left: -100px;
            opacity: 0;
          }
        }
        @keyframes fazer3 {
          0% {
            left: 0;
          }
          100% {
            left: -50px;
            opacity: 0;
          }
        }
        @keyframes fazer4 {
          0% {
            left: 0;
          }
          100% {
            left: -150px;
            opacity: 0;
          }
        }
        @keyframes speeder {
          0% {
            transform: translate(2px, 1px) rotate(0deg);
          }
          10% {
            transform: translate(-1px, -3px) rotate(-1deg);
          }
          20% {
            transform: translate(-2px, 0px) rotate(1deg);
          }
          30% {
            transform: translate(1px, 2px) rotate(0deg);
          }
          40% {
            transform: translate(1px, -1px) rotate(1deg);
          }
          50% {
            transform: translate(-1px, 3px) rotate(-1deg);
          }
          60% {
            transform: translate(-1px, 1px) rotate(0deg);
          }
          70% {
            transform: translate(3px, 1px) rotate(-1deg);
          }
          80% {
            transform: translate(-2px, -1px) rotate(1deg);
          }
          90% {
            transform: translate(2px, 1px) rotate(0deg);
          }
          100% {
            transform: translate(1px, -2px) rotate(-1deg);
          }
        }
        .longfazers {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .longfazers span {
          position: absolute;
          height: 2px;
          width: 20%;
          background: #e8e8e8;
        }
        .longfazers span:nth-child(1) {
          top: 20%;
          animation: lf 0.6s linear infinite;
          animation-delay: -5s;
        }
        .longfazers span:nth-child(2) {
          top: 40%;
          animation: lf2 0.8s linear infinite;
          animation-delay: -1s;
        }
        .longfazers span:nth-child(3) {
          top: 60%;
          animation: lf3 0.6s linear infinite;
        }
        .longfazers span:nth-child(4) {
          top: 80%;
          animation: lf4 0.5s linear infinite;
          animation-delay: -3s;
        }
        @keyframes lf {
          0% {
            left: 200%;
          }
          100% {
            left: -200%;
            opacity: 0;
          }
        }
        @keyframes lf2 {
          0% {
            left: 200%;
          }
          100% {
            left: -200%;
            opacity: 0;
          }
        }
        @keyframes lf3 {
          0% {
            left: 200%;
          }
          100% {
            left: -100%;
            opacity: 0;
          }
        }
        @keyframes lf4 {
          0% {
            left: 200%;
          }
          100% {
            left: -100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
