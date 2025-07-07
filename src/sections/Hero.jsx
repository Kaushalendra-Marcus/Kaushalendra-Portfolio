import { useRef, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GradientSpheres from "../components/GradientSpheres";
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from '../components/Navbar';

gsap.registerPlugin(ScrollTrigger);

// Laptop Model Component
function LaptopModel(props) {
  const { nodes, materials } = useGLTF('/models/laptop-transformed.glb');
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} position={[-1.199, 0.096, 0]} rotation={[0, 0, -1.38]} />
      <mesh geometry={nodes.Object_7.geometry} material={materials['Material.004']} position={[-1.199, 0.096, 0]} rotation={[0, 0, -1.38]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.PaletteMaterial002} position={[-1.199, 0.096, 0]} rotation={[0, 0, -1.38]} />
      <mesh geometry={nodes.Object_14.geometry} material={materials['Material.009']} />
      <mesh geometry={nodes.Object_16.geometry} material={materials['Material.010']} />
    </group>
  );
}

const Hero = () => {
  const [isDragging, setIsDragging] = useState(false);
  const controlsRef = useRef();
  const heroContentRef = useRef();
  const exploreRef = useRef();
  const developerRef = useRef();

  useGSAP(() => {
    // Main content animation
    gsap.from(heroContentRef.current.children, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.3
    });

    // Explore section animation
    gsap.from(exploreRef.current.children, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)",
      delay: 1
    });

    // Developer section animation
    gsap.from(developerRef.current.children, {
      opacity: 0,
      x: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: "elastic.out(1, 0.5)",
      delay: 1.2
    });

    // Continuous arrow animation
    gsap.to(exploreRef.current.querySelector('img'), {
      y: -5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.5
    });

  }, []);

  return (
    <section
      id="home"
      className="relative w-screen h-dvh overflow-hidden text-white-50"
    >
      <Navbar />

      {/* Background Elements */}
      <div className={`absolute inset-0 z-0 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} flex items-center justify-center h-full w-full`}>
        <Canvas
          camera={{ position: [0, 3, 4], fov: 50 }}
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={1.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <LaptopModel
            scale={window.innerWidth < 768 ? 1 : 1.5}
            position={[0, -0.6, 0]}
            rotation={[0.1, 2, 0]}
          />
          <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
            onStart={() => setIsDragging(true)}
            onEnd={() => setIsDragging(false)}
            target={[0, 0, 0]}
          />
        </Canvas>
      </div>

      {/* Reduced opacity gradient box */}
      <div className="gradient-box w-full h-96 absolute bottom-0 left-0 z-10 opacity-70"></div>
      
      {/* Gradient Spheres with reduced opacity */}
      <div className="opacity-60">
        <GradientSpheres
          sphere1Class="gradient-sphere sphere-1"
          sphere2Class="gradient-sphere sphere-2"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-5 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="hero-content" ref={heroContentRef}>
            <p className="font md:text-2xl text-base">
              👋 Hey, I&apos;m Here
            </p>
            <h1 className="font-bold md:text-7xl lg:text-8xl xl:text-9xl text-4xl leading-tight mt-2">
              KAUSHALENDRA
            </h1>
            <h1 className="font-bold md:text-7xl lg:text-8xl xl:text-9xl text-4xl leading-tight mt-2 lg:hidden">
              SINGH
            </h1>
            <h1 className="font-bold md:text-7xl lg:text-8xl xl:text-9xl text-4xl leading-tight">
              CREATIVE
            </h1>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute w-full bottom-20 right-0 px-5 md:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto flex justify-between items-end">
            <div className="flex flex-col items-center md:gap-5 gap-1 lg:ml-10" ref={exploreRef}>
              <p className="md:text-base text-xs">Explore</p>
              <img
                src="/images/arrowdown.svg"
                alt="arrowdown"
                className="size-7"
              />
            </div>
            <div className="flex flex-col items-end lg:mr-10" ref={developerRef}>
              <img src="/images/shape.svg" alt="shape" />
              <h1 className="font-bold md:text-7xl lg:text-8xl xl:text-9xl text-4xl pr-2">DEVELOPER</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;