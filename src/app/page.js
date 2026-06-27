"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [key, setKey] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setKey(Date.now()); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <section key={key} className="min-h-screen flex items-center px-12 md:px-24 lg:px-40 relative">

        {/* Left — text */}
        <div className="flex-1 flex flex-col justify-center py-24">

          <div className="animate-line-1 mb-3">
            <p className="typewriter text-sm tracking-[0.4em] text-white/50 uppercase inline-block">
              ECE Student · Hardware Builder
            </p>
          </div>

          <p className="animate-line-2 text-2xl text-white/80 mb-2">Hi, I am</p>

          <h1 className="animate-line-3 text-7xl md:text-8xl font-bold tracking-tight leading-none mb-2">
            Arnab
          </h1>

          <h1 className="animate-line-4 text-7xl md:text-8xl font-bold tracking-tight leading-none text-white/25 mb-8">
            Hazra.
          </h1>

          <div className="draw-line mb-8" />

          <p className="animate-line-5 text-base text-white/60 leading-relaxed max-w-sm">
            Genuinely amazed by everything mankind builds —
            from a lighter to a PCB to the pixel on this screen.
          </p>

        </div>

        {/* Right — photo */}
        <div className="animate-line-7 hidden md:flex flex-shrink-0 items-center justify-center pl-16">
          <div className="relative w-72 h-96 md:w-80 md:h-[420px] float">
            <div
              className="absolute inset-0 rounded-2xl border border-white/10"
              style={{ boxShadow: "0 0 60px rgba(255,255,255,0.04), inset 0 0 40px rgba(255,255,255,0.02)" }}
            />
            <Image
              src="/images/arnab.jpg"
              alt="Arnab Hazra"
              fill
              className="object-cover object-top rounded-2xl opacity-90"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>
        </div>

        {/* Scroll indicator — fades out when scrolled */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700"
          style={{
            opacity: scrolled ? 0 : 1,
            transform: `translateX(-50%) translateY(${scrolled ? "10px" : "0px"})`
          }}
        >
          <p className="text-xs tracking-[0.3em] text-white/30 uppercase">Scroll</p>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
        </div>

      </section>

      {/* ── ABOUT TEASER SECTION ── */}
      <section className="min-h-[70vh] flex flex-col justify-center px-12 md:px-24 lg:px-40 border-t border-white/5 pb-32">

        <p className="reveal text-xs tracking-[0.4em] text-white/30 uppercase mb-6">
          A little more
        </p>

       <h2 className="reveal text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-2xl mb-8">
  I don't just <span className="text-white/25">build</span> things.<br />
  <span className="text-white/25">I</span> <span className="text-white">understand</span> <span className= "text-white/25">them.</span>
</h2>

        <p className="reveal text-lg text-white/50 leading-relaxed max-w-xl mb-6">
          A lighter. A PCB. A traffic light. Most people see the object —
          I see the engineering, the economics, the human effort behind it.
          That's not just curiosity. That's how I approach every problem I build for.
        </p>

        <p className="reveal text-lg text-white/50 leading-relaxed max-w-xl mb-16">
          I'm Arnab Hazra — an ECE student who is just getting started,
          and genuinely excited about everything ahead.
        </p>

        <Link
          href="/about"
          className="reveal inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-white/40
            hover:text-white transition-all duration-500 group w-fit"
        >
          <span>Read my full story</span>
          <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
        </Link>

      </section>

    </main>
  );
}