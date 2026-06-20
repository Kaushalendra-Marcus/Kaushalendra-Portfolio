"use client";

import { useState, useLayoutEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import OpenSourceContributions from "@/components/OpenSourceContributions";
import GitHubStats from "@/components/GitHubStats";
import Writing from "@/components/Writing";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollLine from "@/components/ScrollLine";
import CommandPalette from "@/components/CommandPalette";
import Loader from "@/components/Loader";

const VISITED_KEY = "kp_intro_seen";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  // Client-only, runs before paint. Skips the intro instantly on repeat
  // visits within the same tab session — no flash, no replaying a 3.6s
  // animation every time someone comes back. The page content below is
  // ALWAYS rendered into the markup regardless of this — the loader is
  // just a visual overlay on top of it, never a gate that hides content
  // from the initial HTML (search engines / link-preview bots included).
  useLayoutEffect(() => {
    if (sessionStorage.getItem(VISITED_KEY)) {
      setShowLoader(false);
    } else {
      sessionStorage.setItem(VISITED_KEY, "1");
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <ScrollLine />
      <CommandPalette />
      <main className="w-full max-w-5xl mx-auto px-6 lg:px-12 py-20 pt-28 relative z-10">
        <Hero />
        <GitHubStats />
        <TechStack />
        <Projects />
        <Experience />
        <OpenSourceContributions />
        <Writing />
        <Skills />
        <Education />
        <ContactForm />
        <Footer />
      </main>

      {showLoader && <Loader onDone={() => setShowLoader(false)} />}
    </div>
  );
}
