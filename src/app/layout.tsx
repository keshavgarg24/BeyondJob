import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import HeroSection from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "beyondJob",
    template: "%s | Flow Jobs",
  },
  description: "Find your dream developer job.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-w-[350px] bg-background text-foreground`}>
        <Navbar />
        <HeroSection />
        {children}
        <Footer />
      </body>
    </html>
  );
}
