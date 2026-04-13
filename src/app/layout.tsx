// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollAnimator from "@/components/ScrollAnimator";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kaushalendra-portfolio.vercel.app"),

  title: {
    default:
      "Kaushalendra Singh – AI Backend Engineer | Agentic Systems | LLM Pipelines",
    template: "%s | Kaushalendra Singh",
  },

  description:
    "AI Backend Engineer specializing in Agentic AI, RAG pipelines, and scalable backend systems. Building intelligent systems using LangChain, LangGraph, and modern web technologies.",

  keywords: [
    "Kaushalendra Singh",
    "AI Backend Engineer",
    "Agentic AI",
    "LangChain",
    "LangGraph",
    "RAG",
    "LLM Systems",
    "Vector Database",
    "Pinecone",
    "FAISS",
    "Next.js Developer",
    "TypeScript",
    "Python",
    "FastAPI",
    "System Design",
    "Full Stack Developer",
  ],

  authors: [
    {
      name: "Kaushalendra Singh",
      url: "https://github.com/Kaushalendra-Marcus",
    },
  ],

  creator: "Kaushalendra Singh",
  publisher: "Kaushalendra Singh",

  openGraph: {
    title:
      "Kaushalendra Singh – AI Backend Engineer | Agentic Systems",
    description:
      "Building intelligent AI systems using RAG pipelines, LangGraph, and scalable backend architectures.",
    url: "https://kaushalendra-portfolio.vercel.app",
    siteName: "Kaushalendra Portfolio",
    images: [
      {
        url: "/kaushalendra-singh.png",
        width: 1200,
        height: 630,
        alt: "Kaushalendra Singh – AI Backend Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kaushalendra Singh – AI Backend Engineer",
    description:
      "Agentic AI, RAG pipelines, and scalable backend systems.",
    creator: "@Kaushal__marcus",
    images: ["/kaushalendra-singh.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
  },

  alternates: {
    canonical: "https://kaushalendra-portfolio.vercel.app",
  },
};

// 🔥 UPDATED JSON-LD (VERY IMPORTANT)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kaushalendra Singh",
  url: "https://kaushalendra-portfolio.vercel.app",
  image: "https://kaushalendra-portfolio.vercel.app/kaushalendra-singh.png",

  jobTitle: "AI Backend Engineer",

  sameAs: [
    "https://github.com/Kaushalendra-Marcus",
    "https://twitter.com/Kaushal__marcus",
    "https://linkedin.com/in/kaushalendra-singh-45b933272/",
  ],

  knowsAbout: [
    "Agentic AI",
    "LangChain",
    "LangGraph",
    "RAG Systems",
    "LLM Pipelines",
    "Backend Architecture",
    "FastAPI",
    "Node.js",
    "Vector Databases",
    "Embeddings",
    "System Design",
  ],

  worksFor: {
    "@type": "Organization",
    name: "Independent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        <ScrollAnimator />
        {children}
        <Analytics />
      </body>
    </html>
  );
}