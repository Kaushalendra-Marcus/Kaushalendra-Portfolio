"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter, FaCalendar } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="section-fade text-center pt-12 border-t border-white/10">

      {/* Closing CTA */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Got a project in mind?
        </h2>
        <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
          I&apos;m open to freelance work, internships, and interesting side projects.
          Let&apos;s build something together.
        </p>
        <a
          href="https://cal.com/kaushalendra/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3
            bg-gradient-to-r from-blue-600 to-cyan-600
            hover:from-blue-500 hover:to-cyan-500
            rounded-xl text-sm font-semibold text-white
            transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-blue-900/30"
        >
          <FaCalendar className="text-xs" />
          Schedule a 30-min call →
        </a>
      </div>

      {/* Social icons */}
      <div className="flex justify-center gap-5 mb-8">
        {[
          {
            href: "https://github.com/Kaushalendra-Marcus",
            icon: <FaGithub className="text-xl" />,
            label: "GitHub",
            hover: "hover:text-white",
          },
          {
            href: "https://www.linkedin.com/in/kaushalendra-singh-45b933272/",
            icon: <FaLinkedin className="text-xl" />,
            label: "LinkedIn",
            hover: "hover:text-blue-400",
          },
          {
            href: "mailto:yadavkausha4a5@gmail.com",
            icon: <FaEnvelope className="text-xl" />,
            label: "Email",
            hover: "hover:text-cyan-400",
          },
          {
            href: "https://x.com/Kaushal__marcus",
            icon: <FaXTwitter className="text-xl" />,
            label: "X / Twitter",
            hover: "hover:text-gray-200",
          },
        ].map(({ href, icon, label, hover }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className={`text-gray-600 transition-colors duration-200 ${hover}`}
          >
            {icon}
          </a>
        ))}
      </div>

      <p className="text-gray-700 text-xs">
        © {new Date().getFullYear()} Kaushalendra Singh. Built from zero.
      </p>
    </footer>
  );
}
