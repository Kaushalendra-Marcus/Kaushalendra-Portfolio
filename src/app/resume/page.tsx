import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import PageShell from "@/components/PageShell";
import ResumeViewer from "@/components/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Kaushalendra Singh, Full Stack AI Engineer — experience, projects, and skills in one document.",
  alternates: {
    canonical: "https://kaushalendra.me/resume",
  },
  openGraph: {
    title: "Resume | Kaushalendra Singh — Full Stack AI Engineer",
    description: "Resume of Kaushalendra Singh, Full Stack AI Engineer — experience, projects, and skills.",
    url: "https://kaushalendra.me/resume",
    siteName: "Kaushalendra Singh",
    images: [
      {
        url: "/kaushalendra-singh.png",
        width: 1730,
        height: 909,
        alt: "Kaushalendra Singh – Full Stack AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Kaushalendra Singh — Full Stack AI Engineer",
    description: "Resume of Kaushalendra Singh, Full Stack AI Engineer — experience, projects, and skills.",
    images: ["/kaushalendra-singh.png"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Kaushalendra Singh",
      item: "https://kaushalendra.me/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Resume",
      item: "https://kaushalendra.me/resume",
    },
  ],
};

export default function ResumePage() {
  return (
    <PageShell>
      <Script
        id="resume-breadcrumb-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
            Kaushalendra Singh · Full Stack AI Engineer
          </p>
        </div>
      </div>

      <ResumeViewer />
    </PageShell>
  );
}
