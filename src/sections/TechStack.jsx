import Icons from "../components/Icons";
import TitleHeader from "../components/TitleHeader";
import { iconsListOne, iconsListTwo } from "../constants";
import GradientSpheres from "../components/GradientSpheres";

const TechStack = () => {
  return (
    <section
      id="skills"
      className="relative bg-transparent py-20 px-5 md:px-10 lg:px-20 overflow-hidden w-full"
    >
      <GradientSpheres
        sphere1Class="techstack-gradient-sphere techstack-sphere-1"
        sphere2Class="techstack-gradient-sphere techstack-sphere-2"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="w-full">
          <TitleHeader
            title="TECH STACK"
            number="02"
            text="My Go-To Tools for Crafting Solutions"
          />
        </div>

        <div className="mt-10 md:mt-20 relative">
          <div className="tech-stack-gradient-left-box w-24 md:w-36 h-full absolute bottom-0 left-0 z-20"></div>
          <div className="tech-stack-gradient-right-box w-24 md:w-36 h-full absolute bottom-0 right-0 z-20"></div>

          {/* First row - moves left to right */}
          <div className="marquee h-40 md:h-52 w-full mb-8 md:mb-12 overflow-hidden">
            <div className="marquee-content animate-marquee-left gap-5 md:gap-12">
              {iconsListOne.map((icon, index) => (
                <div className="flex flex-col items-center justify-center">
                  <Icons key={`${icon.name}-${index}`} icon={icon} />
                  <span className="text-sm">{icon.realName}</span>
                </div>

              ))}
              {iconsListOne.map((icon, index) => (
                <div className="flex flex-col items-center justify-center">
                  <Icons key={`${icon.name}-${index}`} icon={icon} />
                  <span className="text-sm">{icon.realName}</span>
                </div>

              ))}
            </div>
          </div>

          {/* Second row - moves right to left */}
          <div className="marquee h-40 md:h-52 w-full overflow-hidden">
            <div className="marquee-content animate-marquee-right gap-5 md:gap-12">
              {iconsListTwo.map((icon, index) => (
                <div className="flex flex-col items-center justify-center">
                  <Icons key={`${icon.name}-${index}`} icon={icon} />
                  <span className="text-sm">{icon.realName}</span>
                </div>
              ))}
              {iconsListTwo.map((icon, index) => (
                <div className="flex flex-col items-center justify-center">
                  <Icons key={`${icon.name}-${index}`} icon={icon} />
                  <span className="text-sm">{icon.realName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack