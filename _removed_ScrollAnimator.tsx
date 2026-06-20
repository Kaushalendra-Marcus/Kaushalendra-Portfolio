"use client";

import { useEffect } from "react";

/**
 * ScrollAnimator
 *
 * Observes elements and adds "in-view" when they enter the viewport.
 * Supports multiple animation variants via data attributes:
 *
 *   data-animate="fade-up"        (default)  — fade + slide up
 *   data-animate="fade-in"        — fade only
 *   data-animate="fade-left"      — fade + slide from left
 *   data-animate="fade-right"     — fade + slide from right
 *   data-animate="scale-in"       — fade + scale up from 95%
 *   data-animate="blur-in"        — fade + blur clear
 *
 * Stagger children automatically:
 *   data-stagger                  — each direct child gets an increasing delay
 *   data-stagger="0.08"           — custom delay step in seconds (default 0.07s)
 *
 * Replay when scrolled past:
 *   data-replay                   — removes "in-view" when element leaves viewport
 *
 * Delay / duration overrides:
 *   data-delay="0.2"              — delay before animation starts (seconds)
 *   data-duration="0.8"           — animation duration (seconds)
 *
 * Usage:
 *   <section data-animate="fade-up">...</section>
 *   <ul data-animate="fade-up" data-stagger>...</ul>
 *   <div class="section-fade">...</div>   ← legacy class still supported
 */
export default function ScrollAnimator() {
  useEffect(() => {
    // ── Inject styles once ──────────────────────────────────────────────────
    const styleId = "scroll-animator-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        /* ── Base state: hidden ── */
        [data-animate], .section-fade {
          transition-property: opacity, transform, filter;
          transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          transition-duration: 0.65s;
          transition-delay: 0s;
          will-change: opacity, transform;
        }

        /* fade-up (default & legacy .section-fade) */
        [data-animate="fade-up"], [data-animate], .section-fade {
          opacity: 0;
          transform: translateY(22px);
        }
        /* fade-in */
        [data-animate="fade-in"] {
          opacity: 0;
          transform: none;
        }
        /* fade-left */
        [data-animate="fade-left"] {
          opacity: 0;
          transform: translateX(-24px);
        }
        /* fade-right */
        [data-animate="fade-right"] {
          opacity: 0;
          transform: translateX(24px);
        }
        /* scale-in */
        [data-animate="scale-in"] {
          opacity: 0;
          transform: scale(0.95);
        }
        /* blur-in */
        [data-animate="blur-in"] {
          opacity: 0;
          filter: blur(8px);
          transform: translateY(10px);
        }

        /* ── In-view: visible ── */
        [data-animate].in-view, .section-fade.in-view {
          opacity: 1;
          transform: none;
          filter: none;
        }

        /* ── Stagger children ── */
        [data-stagger] > * {
          opacity: 0;
          transform: translateY(16px);
          transition-property: opacity, transform;
          transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          transition-duration: 0.55s;
        }
        [data-stagger].in-view > * {
          opacity: 1;
          transform: none;
        }
      `;
      document.head.appendChild(style);
    }

    // ── Helpers ─────────────────────────────────────────────────────────────
    const applyDelay = (el: Element) => {
      const delay = el.getAttribute("data-delay");
      const duration = el.getAttribute("data-duration");
      if (delay)    (el as HTMLElement).style.transitionDelay    = `${delay}s`;
      if (duration) (el as HTMLElement).style.transitionDuration = `${duration}s`;
    };

    const applyStagger = (el: Element) => {
      const step = parseFloat(el.getAttribute("data-stagger") || "0") || 0.07;
      Array.from(el.children).forEach((child, i) => {
        (child as HTMLElement).style.transitionDelay = `${(i * step).toFixed(2)}s`;
      });
    };

    // ── Observer ─────────────────────────────────────────────────────────────
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const replay = el.hasAttribute("data-replay");

          if (entry.isIntersecting) {
            applyDelay(el);
            if (el.hasAttribute("data-stagger")) applyStagger(el);
            // rAF so the browser registers the initial hidden state first
            requestAnimationFrame(() => el.classList.add("in-view"));
          } else if (replay) {
            el.classList.remove("in-view");
            // Reset stagger child delays so they re-stagger on next entry
            if (el.hasAttribute("data-stagger")) {
              Array.from(el.children).forEach((child) => {
                (child as HTMLElement).style.transitionDelay = "0s";
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe both new data-animate elements and legacy .section-fade
    const targets = document.querySelectorAll("[data-animate], [data-stagger], .section-fade");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}