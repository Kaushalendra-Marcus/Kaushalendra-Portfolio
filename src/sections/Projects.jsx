import React from 'react';
import TitleHeader from "../components/TitleHeader";
import Carousel from "../components/Carousel";
import GradientSpheres from "../components/GradientSpheres";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-transparent py-20 px-5 md:px-10 lg:px-20 overflow-hidden w-full"
    >
      <div className="opacity-80">
        <GradientSpheres
          sphere1Class="gradient-sphere sphere-1"
          sphere2Class="gradient-sphere sphere-2"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="w-full">
          <TitleHeader
            title="My PROJECTS"
            number="03"
            text="Check my recent project below for your Goal"
          />
        </div>

        <div className="mt-10 md:mt-20 w-full">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Projects;