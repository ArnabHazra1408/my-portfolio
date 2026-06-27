"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
  const [key, setKey] = useState(0);

  useEffect(() => { setKey(Date.now()); }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const reveals = document.querySelectorAll(".reveal");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
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
      <section key={key} className="min-h-screen flex flex-col justify-center px-6 md:px-24 lg:px-40 relative">

        <div className="animate-line-1 mb-3">
          <p className="text-xs tracking-[0.4em] text-white/30 uppercase">About</p>
        </div>

        <h1 className="animate-line-2 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-2">
          Who I am.
        </h1>

        <div className="draw-line my-6 md:my-8" />

        <p className="animate-line-3 text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-5">
          I'm <span className="text-white font-semibold">Arnab Hazra</span> — an ECE student
          genuinely amazed by everything mankind has ever built.
        </p>

        <p className="animate-line-4 text-base md:text-lg text-white/50 leading-relaxed max-w-2xl mb-5">
          A lighter. A PCB. A pixel lighting up on a screen. I don't just see
          objects — I see the engineering, the economics, the human effort behind
          every single thing around me.
        </p>

        <p className="animate-line-5 text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
          My biggest skill isn't technical. It's appreciating things that are
          overlooked — the engineering behind a lighter, the economics behind
          packaged food, the electrons behind every pixel on this screen.
        </p>

      </section>

      {/* ── STATS SECTION ── */}
      <section className="px-6 md:px-24 lg:px-40 py-16 md:py-20 border-t border-white/5">

        <p className="reveal text-xs tracking-[0.4em] text-white/30 uppercase mb-10 md:mb-12">
          By the numbers
        </p>

        <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-2xl">
          {[
            { value: "3+", label: "Arduino Projects" },
            { value: "∞",  label: "Curiosity" },
            { value: "1",  label: "Website Built" },
          ].map(({ value, label }) => (
            <div key={label} className="reveal">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">{value}</p>
              <p className="text-xs tracking-widest text-white/30 uppercase">{label}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ── CURRENTLY AMAZED BY ── */}
      <section className="px-6 md:px-24 lg:px-40 pb-24 md:pb-32 border-t border-white/5">

        <p className="reveal text-xs tracking-[0.4em] text-white/30 uppercase mb-10 md:mb-12 pt-16 md:pt-20">
          Currently amazed by
        </p>

        <div className="reveal border border-white/10 rounded-2xl p-6 md:p-10 bg-white/[0.02] max-w-2xl mb-12 md:mb-16">
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            How a lighter — something volatile and dangerous — is made safe,
            cheap, and available everywhere. The engineering. The economics. The
            fact that it exists at all.
          </p>
        </div>

        <Link
          href="/skills"
          className="reveal inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-white/40
            hover:text-white transition-all duration-500 group w-fit"
        >
          <span>See what I work with</span>
          <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
        </Link>

      </section>

    </main>
  );
}