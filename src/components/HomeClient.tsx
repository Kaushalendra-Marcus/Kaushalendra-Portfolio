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

export default function HomeClient() {
  const [showLoader, setShowLoader] = useState(true);
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />
      <ScrollLine />
      <CommandPalette />
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
