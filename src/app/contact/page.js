"use client";
import { useEffect, useState } from "react";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/ArnabHazra1408",
    hint: "github.com/ArnabHazra1408",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/arnabhazra1408",
    hint: "linkedin.com/in/arnabhazra1408",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:arnabhazra2005@gmail.com", // ← replace with your real email
    hint: "arnabhazra2005@gmail.com",          // ← replace with your real email
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [key, setKey] = useState(0);

  useEffect(() => { setKey(Date.now()); }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const reveals = document.querySelectorAll(".reveal");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
          });
        },
        { threshold: 0.15 }
      );
      reveals.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, [key]);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ── HERO SECTION ── */}
      <section key={key} className="min-h-screen flex flex-col justify-center px-6 md:px-24 lg:px-40 pt-32">

        <div className="animate-line-1 mb-3">
          <p className="text-xs tracking-[0.4em] text-white/30 uppercase">Contact</p>
        </div>

        <h1 className="animate-line-2 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-2">
          Let's talk.
        </h1>

        <div className="draw-line mb-8" />

        <p className="animate-line-3 text-base md:text-lg text-white/50 leading-relaxed max-w-xl mb-16 md:mb-20">
          I'm always up for a conversation — about tech, engineering, games,
          or anything that amazes you.
        </p>

        {/* ── CONTACT LINKS ── */}
        <div className="animate-line-4 flex gap-8 md:gap-10 items-start flex-wrap">
          {links.map(({ label, href, hint, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              {/* Icon circle */}
              <div className="
                w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 bg-white/[0.02]
                flex items-center justify-center text-white/30
                transition-all duration-500 ease-out
                group-hover:text-white group-hover:border-white/40
                group-hover:bg-white/[0.06] group-hover:scale-110
                group-hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
              ">
                {icon}
              </div>

              {/* Label */}
              <span className="text-xs tracking-[0.25em] text-white/30 uppercase group-hover:text-white/70 transition-colors duration-300">
                {label}
              </span>

              {/* Hint — slides up on hover */}
              <span className="
                text-xs text-white/20 max-w-[100px] md:max-w-[120px] text-center leading-tight
                opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-300
              ">
                {hint}
              </span>
            </a>
          ))}
        </div>

        {/* ── FOOTER ── */}
        <div className="reveal mt-16 border-t border-white/5 pt-8">
          <p className="text-xs tracking-widest text-white/15 uppercase">
            Arnab Hazra · ECE · 2027
          </p>
        </div>

      </section>

    </main>
  );
}