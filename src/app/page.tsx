"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Writing from "@/components/Writing";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import VisitorWidget from "@/components/VisitorWidget";
import Footer from "@/components/Footer";
import ScrollLine from "@/components/ScrollLine";
import CommandPalette from "@/components/CommandPalette";
import Loader from "@/components/Loader";
import Projects from "@/components/Projects";
import StarField from "@/components/StarField";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  // Page reveal — starts hidden, flips true when loader begins exit
  // so page fades in sync with loader. Loader now shows on every
  // refresh/first visit (no sessionStorage gate) and drops from top.
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />
      <ScrollLine />
      <CommandPalette />
      {/* Broad starfield at page bottom — theme tokens, not footer-clipped */}
      <StarField variant="broad" />
      <main
        className={`w-full max-w-5xl mx-auto px-6 lg:px-12 py-20 pt-28 relative z-10
          transition-opacity duration-700 ease-out motion-reduce:transition-none
          ${revealed ? "opacity-100" : "opacity-0"}`}
      >
        <Hero revealed={revealed} />
        <Experience />

        <section
          id="projects"
          className="mb-16 pb-10 border-b border-foreground/[0.06]"
          aria-label="Projects"
        >
          <p className="section-label">Projects</p>
          <Projects limit={2} />
        </section>

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
