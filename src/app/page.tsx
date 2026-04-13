import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import BuildingFromZero from "@/components/BuildingFromZero";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import ScrollLine from "@/components/ScrollLine";
import OpenSourceContributions from "@/components/OpenSourceContributions";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollLine />
      
      <main className="w-full max-w-5xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        <Hero />
        <TechStack />
        <Experience />
        <OpenSourceContributions />
        <Projects />
        <BuildingFromZero />
        <Education />
        <Skills />
        <CurrentlyExploring />
        <Footer />
      </main>
    </div>
  );
}
