"use client";

import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaGithub, FaFilePdf } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="hero" className="mb-24 pb-16 border-b border-white/[0.06]">
      <style>{`
        @keyframes heroFade {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .h-a { animation: heroFade 0.5s ease-out 0.0s both; }
        .h-b { animation: heroFade 0.5s ease-out 0.1s both; }
        .h-c { animation: heroFade 0.5s ease-out 0.2s both; }
        .h-d { animation: heroFade 0.5s ease-out 0.32s both; }
      `}</style>

      {/* Top row: name + photo */}
      <div className="flex items-start justify-between gap-6 mb-8 h-a">
        <div>
          <h1 className="text-[2.6rem] md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            Kaushalendra
            <br />
            Singh
          </h1>
        </div>

        {/* Photo - no glow, no border-radius overload, clean */}
        <div className="relative flex-shrink-0 h-b">
          <div
            className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden
            border border-white/[0.08]"
          >
            <Image
              src="/kaushal.jpeg"
              alt="Kaushalendra Singh"
              width={96}
              height={96}
              className="object-cover w-full h-full grayscale-0 hover:grayscale transition-all duration-500"
              priority
            />
          </div>
          {/* Available dot */}
          <div
            className="absolute -bottom-1 -right-1 flex items-center gap-1 px-2 py-0.5
            bg-[#0d1f12] border border-green-900/60 rounded-full"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"
              style={{ animation: "blink 2s step-end infinite" }}
            />
            <span className="text-[10px] text-green-400/80 font-medium">
              open
            </span>
          </div>
        </div>
      </div>

      {/* Role line */}
      <div className="h-c mb-6">
        <p className="text-sm text-white/40 font-mono">
          Full Stack Engineer &nbsp;/&nbsp; AI Backend &nbsp;/&nbsp; LLM Systems
        </p>
      </div>

      {/* Bio - written like a human, not a LinkedIn summary */}
      <div className="h-d mb-8 max-w-lg">
        <p className="text-[15px] text-white/55 leading-[1.75]">
          I build AI-native products and backend systems focused on LLM
          workflows, real-time infrastructure, and scalable APIs. Recently
          worked on AI learning platforms, multi-step agent pipelines, and
          production systems used by thousands of users.
        </p>
      </div>

      {/* Links - plain text style, no pill buttons */}
      <div className="h-d flex flex-wrap items-center gap-x-6 gap-y-3">
        {[
          {
            label: "GitHub",
            href: "https://github.com/Kaushalendra-Marcus",
            icon: <FaGithub className="text-sm" />,
          },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/kaushalendra-singh-45b933272/",
            icon: <FaLinkedin className="text-sm" />,
          },
          {
            label: "X",
            href: "https://x.com/Kaushal__marcus",
            icon: <FaXTwitter className="text-sm" />,
          },
          {
            label: "Email",
            href: "mailto:yadavkausha4a5@gmail.com",
            icon: <FaEnvelope className="text-sm" />,
          },
        ].map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-1.5 text-sm text-white/30
              hover:text-white/80 transition-colors duration-200 link-underline"
          >
            {icon}
            {label}
          </a>
        ))}

        <span className="text-white/10 text-sm hidden sm:block">|</span>

        <a
          href="/Kaushalendr_Singh.pdf"
          download="Kaushalendra_Singh_Resume.pdf"
          className="flex items-center gap-1.5 text-sm text-white/40
            hover:text-white transition-colors duration-200"
        >
          <FaFilePdf className="text-sm" />
          Resume
        </a>

        <a
          href="https://cal.com/kaushalendra/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-white bg-white/[0.07] hover:bg-white/[0.12]
            border border-white/[0.10] rounded-lg px-4 py-1.5
            transition-all duration-200"
        >
          Schedule a call
        </a>
      </div>
    </section>
  );
}
