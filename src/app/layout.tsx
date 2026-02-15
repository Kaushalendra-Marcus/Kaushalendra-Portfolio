import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollAnimator from "@/components/ScrollAnimator";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaushalendra-portfolio.vercel.app"),
  title: {
    default: "Kaushalendra Singh - Full Stack Engineer & AI/ML Developer",
    template: "%s | Kaushalendra Singh"
  },
  description: "Full Stack Developer specializing in AI/ML, Web3, and modern web technologies. Building production systems that solve real problems with Next.js, TypeScript, and Python.",
  keywords: [
    "Kaushalendra Singh",
    "Full Stack Developer",
    "AI/ML Engineer",
    "Web3 Developer",
    "Next.js Developer",
    "TypeScript",
    "React",
    "Python",
    "Portfolio",
    "Computer Vision",
    "YOLO",
    "FastAPI"
  ],
  authors: [{ name: "Kaushalendra Singh", url: "https://github.com/Kaushalendra-Marcus" }],
  creator: "Kaushalendra Singh",
  publisher: "Kaushalendra Singh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Kaushalendra Singh - Full Stack Engineer",
    description: "Building production systems with AI/ML, Web3, and modern web technologies.",
    url: "https://kaushalendra-portfolio.vercel.app",
    siteName: "Kaushalendra Singh Portfolio",
    images: [
      {
        url: "/coder.png",
        width: 1200,
        height: 630,
        alt: "Kaushalendra Singh - Full Stack Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaushalendra Singh - Full Stack Engineer",
    description: "Building production systems with AI/ML, Web3, and modern web technologies.",
    creator: "@Kaushal__marcus",
    images: ["/coder.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-site-verification-code", // Add if you have one
  },
  alternates: {
    canonical: "https://kaushalendra-portfolio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollAnimator />
        {children}
        <Analytics />
      </body>
    </html>
  );
}