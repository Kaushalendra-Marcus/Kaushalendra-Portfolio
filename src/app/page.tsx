"use client";

import { useState, useLayoutEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import GitHubStats from "@/components/GitHubStats";
import Writing from "@/components/Writing";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import VisitorWidget from "@/components/VisitorWidget";
import Footer from "@/components/Footer";
import ScrollLine from "@/components/ScrollLine";
import CommandPalette from "@/components/CommandPalette";
import Loader from "@/components/Loader";

const VISITED_KEY = "kp_intro_seen";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  // Drives the page's own reveal. Starts false so first-time visitors see
  // nothing but the loader; flips true the moment the loader begins its
  // exit (see onExitStart on <Loader>), so the page fades/settles into
  // view IN SYNC with the loader dissolving instead of snapping into
  // view the instant the loader finishes and unmounts.
  const [revealed, setRevealed] = useState(false);

  // Client-only, runs before paint. Skips the intro instantly on repeat
  // visits within the same tab session — no flash, no replaying a 3.6s
  // animation every time someone comes back. The page content below is
  // ALWAYS rendered into the markup regardless of this — the loader is
  // just a visual overlay on top of it, never a gate that hides content
  // from the initial HTML (search engines / link-preview bots included).
  useLayoutEffect(() => {
    if (sessionStorage.getItem(VISITED_KEY)) {
      setShowLoader(false);
      setRevealed(true);
    } else {
      sessionStorage.setItem(VISITED_KEY, "1");
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <ScrollLine />
      <CommandPalette />
      <main
        className={`w-full max-w-5xl mx-auto px-6 lg:px-12 py-20 pt-28 relative z-10
          transition-opacity duration-700 ease-out motion-reduce:transition-none
          ${revealed ? "opacity-100" : "opacity-0"}`}
      >
        <Hero revealed={revealed} />
        <Experience />
        <GitHubStats />
        <Projects />
        <TechStack />
        <Skills />
        <ContactForm />
        <Writing />
        <VisitorWidget />
        <Footer />
      </main>

      {showLoader && (
        <Loader
          onExitStart={() => setRevealed(true)}
          onDone={() => setShowLoader(false)}
        />
      )}
    </div>
  );
}
