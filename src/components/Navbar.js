"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-12 py-6 z-50">
      <Link href="/" className="text-white text-lg font-bold tracking-widest">
        ARNAB
      </Link>
      <ul className="flex gap-8 text-gray-400 text-sm tracking-widest">
        <li><Link href="/" className="hover:text-white transition-all duration-300">HOME</Link></li>
        <li><Link href="/about" className="hover:text-white transition-all duration-300">ABOUT</Link></li>
        <li><Link href="/projects" className="hover:text-white transition-all duration-300">PROJECTS</Link></li>
        <li><Link href="/skills" className="hover:text-white transition-all duration-300">SKILLS</Link></li>
        <li><Link href="/contact" className="hover:text-white transition-all duration-300">CONTACT</Link></li>
      </ul>
    </nav>
  );
}