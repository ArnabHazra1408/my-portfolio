"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/",         label: "Home" },
  { href: "/about",    label: "About" },
  { href: "/skills",   label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex justify-end items-center px-12 py-6">
        <ul className="flex gap-8 text-sm tracking-widest">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-all duration-300 uppercase ${
                  pathname === href
                    ? "text-white"
                    : "text-white/30 hover:text-white/70"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden flex justify-between items-center px-6 py-5">

        {/* Current page label */}
        <span className="text-xs tracking-[0.3em] text-white/30 uppercase">
          {navLinks.find((l) => l.href === pathname)?.label ?? "Menu"}
        </span>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-[5px] group"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-white/50 transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-6 h-px bg-white/50 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white/50 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* ── MOBILE DROPDOWN PANEL ── */}
      <div className={`md:hidden absolute top-14 right-6 transition-all duration-300 ${open ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"}`}>
        <div className="flex flex-col items-end gap-4 bg-black/90 border border-white/10 rounded-2xl px-6 py-5 backdrop-blur-md">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-sm tracking-[0.2em] uppercase transition-all duration-300 ${
                pathname === href
                  ? "text-white"
                  : "text-white/30 hover:text-white/70"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

    </nav>
  );
}