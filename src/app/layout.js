import { Geist, Geist_Mono } from "next/font/google";
import GlowCursor from "@/components/GlowCursor";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arnab Hazra",
  description: "ECE Student | Hardware Enthusiast | Curious about everything",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <GlowCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}