"use client";

import { useState } from "react";
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
import CurrentlyExploring from "@/components/CurrentlyExploring";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollLine from "@/components/ScrollLine";
import CommandPalette from "@/components/CommandPalette";
import Loader from "@/components/Loader";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return <Loader onDone={() => setLoaded(true)} />;
  }

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
        <CurrentlyExploring />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}
