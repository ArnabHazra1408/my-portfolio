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

      {/* ── MOBILE MENU OVERLAY ── */}
      <div className={`md:hidden fixed inset-0 bg-black transition-all duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col justify-center items-start h-full px-6 gap-8">

          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-6 flex flex-col gap-[5px]"
            aria-label="Close menu"
          >
            <span className="block w-6 h-px bg-white/50 rotate-45 translate-y-[3px]" />
            <span className="block w-6 h-px bg-white/50 -rotate-45 -translate-y-[3px]" />
          </button>

          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-4xl font-bold tracking-tight transition-all duration-300 ${
                pathname === href
                  ? "text-white"
                  : "text-white/20 hover:text-white/60"
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