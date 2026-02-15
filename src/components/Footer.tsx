"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="section-fade text-center pt-12 border-t border-white/10">
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://github.com/Kaushalendra-Marcus"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <FaGithub className="text-2xl text-gray-400 hover:text-white transition-colors" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            GitHub
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/kaushalendra-singh-45b933272/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <FaLinkedin className="text-2xl text-gray-400 hover:text-blue-400 transition-colors" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            LinkedIn
          </span>
        </a>
        <a
          href="mailto:yadavkausha4a5@gmail.com"
          className="relative group"
        >
          <FaEnvelope className="text-2xl text-gray-400 hover:text-cyan-400 transition-colors" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Email
          </span>
        </a>
        <a
          href="https://x.com/Kaushal__marcus"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <FaXTwitter className="text-2xl text-gray-400 hover:text-cyan-400 transition-colors" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            X
          </span>
        </a>
      </div>
      <p className="text-gray-400 text-sm">
        © 2026 Kaushalendra Singh. All rights reserved.
      </p>
    </footer>
  );
}