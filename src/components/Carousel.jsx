import { useState } from "react";
import { slides } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useGSAP(() => {
    const offset = currentSlide * (63 + 3);
    gsap.to(".slider-container", {
      x: `-${offset}vw`,
      duration: 1.2,
      ease: "power3.inOut",
    });

    gsap.to(".slider-item", {
      scale: 0.95,
      opacity: 0.8,
      duration: 0.5,
      ease: "power2.out"
    });

    gsap.to(`.slider-item:nth-child(${currentSlide + 1})`, {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.fromTo(
      `.slider-item:nth-child(${currentSlide + 1}) img`,
      { scale: 1.2 },
      {
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
      }
    );

    gsap.fromTo(
      `.slider-item:nth-child(${currentSlide + 1}) .slide-info`,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.3,
        ease: "back.out"
      }
    );
  }, [currentSlide]);

  return (
    <div className="relative">
      <div className="w-full relative lg:h-[60vh] md:h-[40vh] h-[60vh] overflow-hidden">
        <div className="carousel-gradient-left-box md:w-52 w-16 h-full absolute bottom-0 left-0 z-20"></div>
        <div className="carousel-gradient-right-box md:w-52 w-16 h-full absolute bottom-0 right-0 z-20"></div>

        <div className="absolute w-full top-0 slider-container" style={{ left: '21.5vw' }}>
          <div className="flex w-full lg:h-[60vh] md:h-[40vh] h-[60vh] items-center gap-[3vw]">
            {slides.map((slide, index) => (
              <div
                className={`slider-item w-[60vw] h-full flex-none relative transition-all ${index === currentSlide ? "active-slide" : ""
                  }`}
                key={slide.id}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center rounded-xl"
                />
                <div className="slide-info absolute w-full bottom-0 left-0 bg-black-300 bg-opacity-90 px-5 rounded-b-xl">
                  <div className="w-full py-3 flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <div className="flex-center gap-2">
                        <p className="md:text-2xl text-white-50 opacity-80">
                          {index + 1}.
                        </p>
                        <p className="md:text-2xl text-white-50 opacity-80">
                          {slide.title}
                        </p>
                      </div>
                      <a href={slide.live} target="_blank">
                        <img
                          src="/images/arrowupright.svg"
                          alt="arrow"
                          className="md:size-7 size-5"
                        />
                      </a>
                    </div>

                    {/* Added project links section */}
                    <div className="flex gap-3 mt-2">
                      {slide.github && (
                        <a
                          href={slide.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md transition-colors"
                        >
                          <img src="/images/github.svg" alt="GitHub" className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                      {slide.live && (
                        <a
                          href={slide.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-md transition-colors"
                        >
                          <img src="/images/arrowupright.svg" alt="Live" className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-white-50 flex justify-end gap-5 md:-translate-x-32 -translate-x-5">
        <button
          onClick={prevSlide}
          className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-12 h-12 flex-center focus:outline-none"
          aria-label="Previous slide"
        >
          <img src="/images/CaretLeft.svg" alt="left" className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-12 h-12 flex-center focus:outline-none"
          aria-label="Next slide"
        >
          <img src="/images/CaretRight.svg" alt="Right" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;