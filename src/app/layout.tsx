import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster as RadixToaster } from "@/components/ui/toaster";
import SplashCursor from "@/components/blocks/Animations/SplashCursor/SplashCursor";

const inter = Inter({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  title: "Arun K | UI UX Designer Portfolio",
  description: "A personal portfolio to showcase my skills and projects",
  openGraph: {
    title: "Arun K | UI UX Designer Portfolio",
    description: "A personal portfolio to showcase my skills and projects",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={ `${inter.className} antialiased flex flex-col min-h-screen` }
      >
        <SplashCursor />
        <Navbar />
        <main className="flex-grow">
          { children }
        </main>
        <Footer />
        <RadixToaster />
      </body>
    </html>
  );
}

