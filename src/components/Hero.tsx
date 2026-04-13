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
      hover: "hover:text-gray-200 hover:border-white/20",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kaushalendra-singh-45b933272/",
      icon: <FaLinkedin />,
      hover: "hover:text-blue-400 hover:border-blue-400/30",
    },
    {
      name: "GitHub",
      href: "https://github.com/Kaushalendra-Marcus",
      icon: <FaGithub />,
      hover: "hover:text-purple-400 hover:border-purple-400/30",
    },
    {
      name: "Resume",
      href: "/Kaushalendr_Singh.pdf",
      icon: <FaFilePdf />,
      hover: "hover:text-cyan-400 hover:border-cyan-400/30",
    },
    {
      name: "Email",
      href: "mailto:yadavkausha4a5@gmail.com",
      icon: <FaEnvelope />,
      hover: "hover:text-cyan-400 hover:border-cyan-400/30",
    },
  ];

  return (
    <section id="hero" className="mb-20 pb-12 border-b border-white/10">
      <style>{`
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50%       { opacity: 0.65; transform: scale(1.06); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        .h1 { animation: heroIn 0.6s ease-out 0.05s both; }
        .h2 { animation: heroIn 0.6s ease-out 0.18s both; }
        .h3 { animation: heroIn 0.6s ease-out 0.30s both; }
      `}</style>

      <div className="flex flex-col md:flex-row items-start gap-8 mb-6">

        {/* Profile */}
        <div className="relative pt-1 h1 flex-shrink-0">
          <div
            className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-600/25 to-cyan-500/20 blur-2xl"
            style={{ animation: "glowPulse 3.5s ease-in-out infinite" }}
          />
          <div className="relative w-32 h-36 rounded-3xl overflow-hidden border border-white/15 shadow-xl shadow-black/60">
            <Image
              src="/kaushal.jpeg"
              alt="Kaushalendra Singh"
              width={138}
              height={144}
              className="object-cover"
              priority
            />
          </div>

          {/* Availability */}
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 border border-green-500/25 rounded-full text-[11px] text-green-400 backdrop-blur-sm">
            <span
              className="w-1.5 h-1.5 rounded-full bg-green-400"
              style={{ animation: "blink 2.2s ease-in-out infinite" }}
            />
            Available
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">

          <div className="h2">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              Kaushalendra Singh
            </h1>

            {/*UPDATED ROLE */}
            <p className="text-base md:text-lg text-gray-300 font-medium mb-2">
              Full Stack Engineer • AI Backend • LLM & Agentic Systems
            </p>

            {/*TAGLINE */}
            <p className="text-sm text-gray-500 mb-6 max-w-lg leading-relaxed">
              Building full-stack applications and intelligent AI systems - from scalable backend architectures to RAG pipelines and agentic workflows.
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap gap-2.5 h3">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center gap-2 px-3.5 py-2 bg-white/[0.04] border border-white/[0.08] rounded-xl
                  transition-all duration-300 text-gray-500 hover:bg-white/[0.07] ${item.hover}`}
              >
                <span className="text-base group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="max-w-0 overflow-hidden group-hover:max-w-[80px] transition-all duration-300 text-xs font-medium">
                  {item.name}
                </span>
              </a>
            ))}

            {/* CTA */}
            <a
              href="https://cal.com/kaushalendra/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600
                hover:from-blue-500 hover:to-cyan-500 rounded-xl transition-all duration-300
                text-white text-sm font-semibold shadow-lg hover:-translate-y-0.5"
            >
              <FaCalendar />
              Schedule a call
            </a>

            {/* Phone */}
            <div className="flex items-center gap-2 px-3.5 py-2 bg-white/[0.03] border border-white/[0.06] rounded-xl text-gray-600">
              <FaPhone className="text-xs" />
              <span className="text-xs">+91 6398519072</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}