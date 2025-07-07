import React, { useState, useEffect, useRef } from 'react';
import TitleHeader from "../components/TitleHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientSpheres from "../components/GradientSpheres";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const characterRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const img = characterRef.current;

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const x = (e.clientX - centerX) / 20;
            const y = (e.clientY - centerY) / 20;

            gsap.to(img, {
                rotationY: x,
                rotationX: -y,
                transformPerspective: 1000,
                ease: "power2.out",
                duration: 0.5
            });
        };

        const handleMouseLeave = () => {
            gsap.to(img, {
                rotationY: 0,
                rotationX: 0,
                duration: 1,
                ease: "elastic.out(1, 0.3)"
            });
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
            gsap.killTweensOf(img);
        };
    }, []);


    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = "Opportunity to Discuss a Role at [Your Company]";
        const body = `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `;

        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=yadavkausha4a5@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
            '_blank'
        );
    };

    return (
        <section id="contact" className="relative bg-transparent py-20 px-5 md:px-10 lg:px-20 overflow-hidden">
            <div className="opacity-60">
        <GradientSpheres
          sphere1Class="gradient-sphere sphere-1"
          sphere2Class="gradient-sphere sphere-2"
        />
      </div>
            <div className="max-w-7xl mx-auto">
                <TitleHeader
                    title="Contact Me"
                    number="04"
                    text="Let's collaborate on tailored, sustainable solutions"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-center">
                    {/* Contact Form */}
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg z-10">
                        <form onSubmit={handleSubmit} className="space-y-6 bg-transparent">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 font-sans">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-sans"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 font-sans">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-sans"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 font-sans">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-sans"
                                    placeholder="Your message here..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 font-sans"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Character Image Container */}
                    <div
                        ref={containerRef}
                        className="flex items-center justify-center lg:justify-end relative  cursor-pointer lg:w-[500px] lg:h-[500px]"
                    >
                        <img
                            ref={characterRef}
                            src="/images/contact.png"
                            alt="Confident character"
                            onLoad={() => {
                                gsap.from(characterRef.current, {
                                    opacity: 0,
                                    x: 100,
                                    duration: 0.3,
                                    ease: "power3.out",
                                    scrollTrigger: {
                                        trigger: characterRef.current,
                                        start: "top 80%",
                                        toggleActions: "play none none none"
                                    }
                                });

                                // floating
                                gsap.to(characterRef.current, {
                                    y: 20,
                                    duration: 3,
                                    repeat: -1,
                                    yoyo: true,
                                    ease: "sine.inOut"
                                });

                                // refresh ScrollTrigger to re-calculate positions
                                ScrollTrigger.refresh();
                            }}
                            className="w-full h-full object-contain transform-style-preserve-3d"
                            style={{ transformOrigin: "center center" }}
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;