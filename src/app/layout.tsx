// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kaushalendra.me/"),

  title: {
    default:
      "Kaushalendra Singh - Full Stack Engineer | AI Backend | LLM & Agentic Systems",
    template: "%s | Kaushalendra Singh",
  },

  description:
    "AI Engineer specializing in Agentic AI, RAG pipelines, and scalable backend systems. Building intelligent systems using LangChain, LangGraph, and modern web technologies.",

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
      "Kaushalendra Singh - Full Stack Engineer | AI Backend | LLM & Agentic Systems",
    description:
      "Building intelligent AI systems using RAG pipelines, LangGraph, and scalable backend architectures.",
    url: "https://kaushalendra.me/",
    siteName: "Kaushalendra Portfolio",
    images: [
      {
        url: "/kaushalendra-singh.png",
        width: 1200,
        height: 630,
        alt: "Kaushalendra Singh – AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kaushalendra Singh - Full Stack Engineer | AI Backend | LLM & Agentic Systems",
    description:
      "Agentic AI, RAG pipelines, and scalable backend systems.",
    creator: "@kaushalxcode",
    images: ["/kaushalendra-singh.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
  },

  alternates: {
    canonical: "https://kaushalendra.me/",
  },
};

// UPDATED JSON-LD (VERY IMPORTANT)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kaushalendra Singh",
  url: "https://kaushalendra.me/",
  image: "https://kaushalendra.me//kaushalendra-singh.png",

  jobTitle: "AI Engineer",

  sameAs: [
    "https://github.com/Kaushalendra-Marcus",
    "https://x.com/kaushalxcode",
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
        {/* Blocking (not next/script) on purpose: must run before first
            paint so returning visitors who chose light mode never see a
            flash of dark, and vice versa. Defaults to dark when there's
            no stored preference yet, matching the site's original look. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'){document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}