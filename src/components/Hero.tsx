"use client";

import Image from "next/image";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaCalendar,
  FaGithub,
  FaFilePdf,
} from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  const socials = [
    {
      name: "X",
      href: "https://x.com/Kaushal__marcus",
      icon: <FaXTwitter />,
      hover: "hover:text-gray-200",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kaushalendra-singh-45b933272/",
      icon: <FaLinkedin />,
      hover: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      href: "https://github.com/Kaushalendra-Marcus",
      icon: <FaGithub />,
      hover: "hover:text-purple-400",
    },
    {
      name: "Resume",
      href: "/Kaushal_resume.pdf",
      icon: <FaFilePdf />,
      hover: "hover:text-cyan-400",
    },
    {
      name: "Email",
      href: "mailto:yadavkausha4a5@gmail.com",
      icon: <FaEnvelope />,
      hover: "hover:text-cyan-400",
    },
  ];

  return (
    <section id="hero" className="section-fade mb-20 pb-12 border-b border-white/10">
      <div className="flex flex-col md:flex-row items-start gap-8 mb-6">
        {/* Profile Image */}
        <div className="relative group pt-1">
          <div className="absolute -inset-1 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300" />
          <div className="relative w-32 h-36 rounded-3xl overflow-hidden border-4 border-white/70">
            <Image
              src="/kaushal.jpeg"
              alt="Kaushalendra Singh"
              width={138}
              height={138}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Kaushalendra Singh
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Building production systems that solve real problems
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3 mb-5">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 text-gray-300 ${item.hover}`}
              >
                <span className="text-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>

                {/* Hover Text */}
                <span className="max-w-0 overflow-hidden group-hover:max-w-[80px] transition-all duration-300 text-sm">
                  {item.name}
                </span>
              </a>
            ))}

            {/* Schedule */}
            <a
              href="https://cal.com/kaushalendra/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg transition-all duration-300 text-white font-semibold"
            >
              <FaCalendar className="text-lg group-hover:scale-110 transition-transform" />
              <span className="text-sm">Schedule</span>
            </a>

            {/* Phone */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400">
              <FaPhone className="text-sm" />
              <span className="text-sm">+91 6398519072</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}