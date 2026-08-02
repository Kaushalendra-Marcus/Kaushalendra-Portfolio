"use client";

import { useState } from "react";
import { ExternalLink, Download } from "lucide-react";

const RESUME_PATH = "/Kaushalendr_Singh.pdf";

export default function ResumeViewer() {
  const [mode, setMode] = useState<"preview" | "document">("preview");

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        {/* Preview vs PDF Document toggle — Preview hides the browser's
            native PDF toolbar for a cleaner look, Document mode shows it
            (full zoom/search/print controls). Real difference, not just
            a relabeled duplicate. */}
        <div className="flex items-center gap-1 bg-foreground/[0.04] border border-border rounded-lg p-1">
          <button
            onClick={() => setMode("preview")}
            className={`text-xs font-medium px-3 py-1.5 rounded-md transition-colors duration-200 ${
              mode === "preview"
                ? "bg-card text-foreground shadow-sm"
                : "text-foreground/50 hover:text-foreground/80"
            }`}
          >
            Preview Image
          </button>
          <button
            onClick={() => setMode("document")}
            className={`text-xs font-medium px-3 py-1.5 rounded-md transition-colors duration-200 ${
              mode === "document"
                ? "bg-card text-foreground shadow-sm"
                : "text-foreground/50 hover:text-foreground/80"
            }`}
          >
            PDF Document
          </button>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-foreground/70 hover:text-foreground/95
              bg-foreground/[0.04] hover:bg-foreground/[0.08] border border-border rounded-lg px-3 py-1.5
              transition-all duration-200"
          >
            <ExternalLink className="w-[12px] h-[12px]" />
            Open PDF
          </a>
          <a
            href={RESUME_PATH}
            download="Kaushalendra_Singh_Resume.pdf"
            className="flex items-center gap-1.5 text-xs font-medium text-primary-foreground
              bg-primary hover:opacity-90 rounded-lg px-3 py-1.5 transition-all duration-200"
          >
            <Download className="w-[12px] h-[12px]" />
            Download
          </a>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        <iframe
          key={mode}
          src={mode === "preview" ? `${RESUME_PATH}#toolbar=0&navpanes=0&scrollbar=0` : RESUME_PATH}
          title="Kaushalendra Singh — Resume"
          className="w-full h-[75vh] sm:h-[80vh] bg-white"
        />
      </div>
    </div>
  );
}
