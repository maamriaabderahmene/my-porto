import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abderahmene Maamria - Full-Stack Developer & Robotics Enthusiast",
  description:
    "Portfolio of Abderahmene Maamria, Full-Stack Developer specializing in React, Next.js, Flutter, robotics, and embedded systems. President of GDSC ENSTA.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Flutter",
    "Robotics",
    "Arduino",
    "Raspberry Pi",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Abderahmene Maamria" }],
  creator: "Abderahmene Maamria",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abderahmene-maamria.vercel.app",
    title: "Abderahmene Maamria - Full-Stack Developer",
    description: "Portfolio showcasing projects, competitions, and achievements",
    siteName: "Abderahmene Maamria Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abderahmene Maamria - Full-Stack Developer",
    description: "Portfolio showcasing projects, competitions, and achievements",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <Navigation />
          <PageTransition>
            <main className="pt-16 min-h-screen">{children}</main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
