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
    default: "Kaushalendra Singh | Full Stack AI Engineer",
    template: "%s | Kaushalendra Singh",
  },

  description:
    "Full Stack AI Engineer building agentic AI systems, RAG pipelines, and LLM evals with LangChain, LangGraph, DeepEval, and MCP — plus the Next.js frontends on top.",

  keywords: [
    "Kaushalendra Singh",
    "Kaushalendra",
    "Kaushalendra Singh Portfolio",
    "Kaushalendra Portfolio",
    "Full Stack AI Engineer",
    "Forward Deployed Engineer",
    "Forward Deployed AI Engineer",
    "AI Engineer",
    "Agentic AI",
    "AI Agents",
    "LangChain",
    "LangGraph",
    "DeepEval",
    "LLM Evaluation",
    "RAG",
    "MCP",
    "Vector Database",
    "Pinecone",
    "Next.js Developer",
    "TypeScript",
    "Python",
    "FastAPI",
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
    title: "Kaushalendra Singh — Full Stack AI Engineer | Agentic AI & LLM Systems",
    description:
      "Full Stack AI Engineer building agentic AI systems, RAG pipelines, and LLM evals with LangChain, LangGraph, DeepEval, and MCP — plus the Next.js frontends on top.",
    url: "https://kaushalendra.me/",
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
    title: "Kaushalendra Singh — Full Stack AI Engineer | Agentic AI & LLM Systems",
    description:
      "Full Stack AI Engineer building agentic AI systems, RAG pipelines, and LLM evals. LangChain, LangGraph, DeepEval, MCP.",
    creator: "@kaushalxcode",
    images: ["/kaushalendra-singh.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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

// Entity graph: Person (who) + WebSite (what). The sameAs profile URLs
// plus rel="me" links on the page tell Google these profiles — GitHub,
// LinkedIn, X, Medium — are all the same person, so a "kaushalendra"
// search surfaces the portfolio first and the profiles alongside it.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://kaushalendra.me/#person",
      name: "Kaushalendra Singh",
      alternateName: ["Kaushalendra", "Kaushalendra Marcus"],
      url: "https://kaushalendra.me/",
      image: "https://kaushalendra.me/kaushalendra-singh.png",

      jobTitle: "Full Stack AI Engineer",

      description:
        "Full Stack AI Engineer (Forward Deployed) building agentic AI systems, RAG pipelines, and LLM evaluation infrastructure.",

      sameAs: [
        "https://github.com/Kaushalendra-Marcus",
        "https://www.linkedin.com/in/kaushalendra-singh-45b933272/",
        "https://x.com/kaushalxcode",
        "https://medium.com/@Kaushalendra-marcus",
      ],

      knowsAbout: [
        "Agentic AI",
        "AI Agents",
        "LangChain",
        "LangGraph",
        "DeepEval",
        "LLM Evaluation",
        "RAG Systems",
        "LLM Pipelines",
        "Model Context Protocol",
        "Backend Architecture",
        "FastAPI",
        "Node.js",
        "Next.js",
        "Vector Databases",
        "Embeddings",
        "System Design",
      ],

      worksFor: {
        "@type": "Organization",
        name: "Independent",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://kaushalendra.me/#website",
      url: "https://kaushalendra.me/",
      name: "Kaushalendra Singh",
      alternateName: [
        "Kaushalendra Singh Portfolio",
        "Kaushalendra Portfolio",
      ],
      inLanguage: "en-US",
      author: { "@id": "https://kaushalendra.me/#person" },
      publisher: { "@id": "https://kaushalendra.me/#person" },
    },
  ],
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