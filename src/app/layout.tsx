import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollAnimator from "@/components/ScrollAnimator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaushalendra Singh - Full Stack Engineer",
  description: "Full Stack Developer crafting cutting-edge applications and production systems. Specialized in Web3, AI/ML, and modern web technologies.",
  keywords: ["Full Stack", "AI/ML", "Next.js", "React", "Web3", "TypeScript"],
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
      </body>
    </html>
  );
}