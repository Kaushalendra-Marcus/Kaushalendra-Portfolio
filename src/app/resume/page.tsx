import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import PageShell from "@/components/PageShell";
import ResumeViewer from "@/components/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume",
  description: "Kaushalendra Singh's resume — experience, projects, and skills in one document.",
};

export default function ResumePage() {
  return (
    <PageShell>
      <Link
        href="/"
        aria-label="Back to home"
        className="inline-flex items-center justify-center w-8 h-8 rounded-lg
          bg-foreground/[0.05] hover:bg-foreground/[0.09] border border-border
          text-foreground/55 hover:text-foreground/90 transition-colors duration-200 mb-6"
      >
        <ArrowLeft className="w-[15px] h-[15px]" />
      </Link>

      <div className="flex items-start gap-3 mb-8">
        <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-foreground/[0.06] border border-border
          flex items-center justify-center text-foreground/70 mt-0.5">
          <FileText className="w-[16px] h-[16px]" />
        </span>
        <div>
          <h1 className="text-xl font-bold text-foreground leading-tight">Resume</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Kaushalendra Singh · Full Stack Engineer &amp; AI/ML
          </p>
        </div>
      </div>

      <ResumeViewer />
    </PageShell>
  );
}
