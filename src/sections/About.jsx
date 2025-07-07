import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GradientSpheres from "../components/GradientSpheres";
import { LinkItems } from "../constants"
import { Alien } from "../components/models/Alien.jsx"
import TitleHeader from "../components/TitleHeader";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        gsap.from(".card", {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: "#about",
                start: "top 80%",
                markers: false
            }
        })
    }, [])

    return (
        <section id="about" className="relative py-20 px-5 md:px-10 lg:px-20 overflow-hidden">
            <GradientSpheres
                sphere1Class="about-gradient-sphere about-sphere-1"
                sphere2Class="about-gradient-sphere about-sphere-2"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <TitleHeader
                    title="About Me"
                    number="01"
                    text="Passionate Developer, Problem Solver"
                />

                <div className="mt-10 md:mt-20">
                    <div className="grid grid-cols-12 gap-5">
                        {/* Main Content Card */}
                        <div className="col-span-12 md:col-span-7">
                            <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                                <div className="relative">
                                    {/* Gradient background for the icon */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-md opacity-30 w-16 h-16 md:w-32 md:h-32"></div>

                                    {/* SVG with gradient fill */}
                                    <svg
                                        className="w-16 h-16 md:w-32 md:h-32 relative z-10"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <defs>
                                            <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#3B82F6" /> {/* blue-500 */}
                                                <stop offset="100%" stopColor="#8B5CF6" /> {/* purple-500 */}
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M14 17L17 14L14 11M10 7L7 10L10 13M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                            stroke="url(#codeGradient)"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="mt-5">
                                    <h1 className="text-blue-50 text-3xl md:text-5xl font-medium">
                                        KAUSHALENDRA SINGH
                                    </h1>
                                    <p className="text-lg md:text-2xl mt-2">
                                        Full-Stack Developer specializing in modern web technologies.
                                        I architect performant, scalable applications with clean code
                                        and intuitive interfaces. Passionate about solving complex
                                        problems through innovative technical solutions.
                                    </p>

                                    {/* Tech Stack Highlights */}
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="tech-card">
                                            <h3 className="gradient-title text-xl font-medium">Frontend Mastery</h3>
                                            <p className="mt-2">
                                                React · Next.js · TypeScript · Tailwind · ShadCN ·
                                                Redux/Zustand · GSAP · Three.js
                                            </p>
                                        </div>
                                        <div className="tech-card">
                                            <h3 className="gradient-title text-xl font-medium">Backend & DevOps</h3>
                                            <p className="mt-2">
                                                Node.js · Express · GraphQL · REST · MySQL/MongoDB ·
                                                Prisma · Docker · AWS · CI/CD Pipelines
                                            </p>
                                        </div>
                                    </div>

                                    {/* Resume CTA */}
                                    <div className="mt-8">
                                        <a
                                            href="/images/Kaushalendra_Singh_CV.pdf"
                                            download
                                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            Download Technical Resume
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3D Model Card */}
                        <div className="col-span-12 md:col-span-5">
                            <div className="bg-[#C8D751] hover:cursor-grab rounded-2xl w-full h-60 md:h-full">
                                <div className="w-full h-full">
                                    <Canvas>
                                        <ambientLight />
                                        <OrbitControls enableZoom={false} />
                                        <Alien
                                            scale={2}
                                            position={[0, -5.5, 0]}
                                            rotation={[0, -0.5, 0]}
                                        />
                                    </Canvas>
                                </div>
                            </div>
                        </div>

                        {/* Skill Cards */}
                        <div className="card col-span-12 md:col-span-6">
                            <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                                <div className="flex flex-col h-full justify-center gap-2">
                                    <h1 className="gradient-title text-2xl md:text-3xl font-medium">
                                        Full-Stack Development
                                    </h1>
                                    <p className="md:text-xl">
                                        Building performant applications with React/Next.js frontends
                                        and Node.js backends. Specializing in JAMstack architectures
                                        and serverless solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card col-span-12 md:col-span-6">
                            <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                                <div className="flex flex-col h-full justify-center gap-2">
                                    <h1 className="gradient-title text-2xl md:text-3xl font-medium">
                                        Cloud & DevOps
                                    </h1>
                                    <p className="md:text-xl">
                                        Implementing CI/CD pipelines, containerized deployments (Docker/K8s),
                                        and cloud infrastructure on AWS/Azure. Focus on scalable, secure systems.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Motivational Card */}
                        <div className="md:col-span-4 col-span-12 row-span-4">
                            <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                                <div className="flex flex-col justify-between h-full">
                                    <h1 className="gradient-title md:text-5xl text-3xl font-bold py-2">
                                        BE YOURSELF!
                                    </h1>
                                    <h1 className="gradient-title md:text-5xl text-3xl font-bold py-2">
                                        BE DIFFERENT!
                                    </h1>
                                    <h1 className="gradient-title md:text-5xl text-3xl font-bold py-2">
                                        BUILD DIFFERENT!
                                    </h1>
                                </div>
                            </div>
                        </div>

                        {/* Link Items */}
                        {LinkItems.map((item, index) => (
                            <a href={item.href} target="_blank" className="md:col-span-4 col-span-12 row-span-2">
                                <div key={index} >
                                    <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                                        <div className="flex justify-between items-center h-full">
                                            <div className="flex items-center md:gap-5">
                                                <img src={item.icon} alt={item.icon} />
                                                <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">
                                                    {item.name}
                                                </h1>
                                            </div>
                                            <div className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                                                <img
                                                    src="/images/arrowupright.svg"
                                                    alt="arrow-up"
                                                    className="md:scale-100 scale-50"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;