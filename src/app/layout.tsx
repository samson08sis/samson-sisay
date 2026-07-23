import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/next";
import ThemeProvider from "@/components/ThemeProvider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://samsonsisay.vercel.app"),
  title: {
    default: "Samson Sisay | Full-Stack Developer",
    template: "%s | Samson Sisay",
  },
  description:
    "Portfolio of Samson Sisay, Full-Stack Developer specializing in modern web applications, Next.js, React, and Node.js.",
  keywords: [
    "Samson Sisay",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Samson Sisay" }],
  creator: "Samson Sisay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samsonsisay.vercel.app",
    title: "Samson Sisay | Full-Stack Software Engineer",
    description:
      "Explore software engineering projects, technical skills, and experience by Samson Sisay.",
    siteName: "Samson Sisay Portfolio",
    images: [
      {
        url: "/images/profile/web-app-manifest-192x192.png",
        width: 1200,
        height: 630,
        alt: "Samson Sisay Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samson Sisay | Full-Stack Developer",
    description:
      "Explore software engineering projects, technical skills, and experience by Samson Sisay.",
    images: ["/images/profile/web-app-manifest-192x192.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-app text-main transition-colors duration-200`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
