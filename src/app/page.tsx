import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import OpenSourceContributions from "@/components/OpenSourceContributions";
import Projects from "@/components/Projects";
import BuildingFromZero from "@/components/BuildingFromZero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import Footer from "@/components/Footer";
import ScrollLine from "@/components/ScrollLine";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <ScrollLine />

      <main className="w-full max-w-5xl mx-auto px-6 lg:px-12 py-20 pt-28 relative z-10">
        <Hero />
        <TechStack />
        <Experience />
        <OpenSourceContributions />
        <Projects />
        <BuildingFromZero />
        <Skills />
        <Education />
        <CurrentlyExploring />
        <Footer />
      </main>
    </div>
  );
}
