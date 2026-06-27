"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const technical = [
  { name: "Arduino & Hardware", level: "Built 3+ real projects" },
  { name: "VLSI & Verilog",     level: "Workshop level" },
  { name: "Python",             level: "Basic" },
  { name: "C",                  level: "Basic" },
  { name: "C++",                level: "Learning for ROS2" },
  { name: "React & Next.js",    level: "Learning by building" },
];

const human = [
  { name: "Curiosity",                   level: "Unreasonably high" },
  { name: "Optimism",                    level: "Default state" },
  { name: "Self Awareness",              level: "Brutally honest" },
  { name: "Appreciating the overlooked", level: "Rare skill" },
  { name: "Public Speaking",             level: "Growing" },
];

export default function Skills() {
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
      <section key={key} className="min-h-screen flex flex-col justify-center px-6 md:px-24 lg:px-40">

        <div className="animate-line-1 mb-3">
          <p className="text-xs tracking-[0.4em] text-white/30 uppercase">Skills</p>
        </div>

        <h1 className="animate-line-2 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-2">
          What I work
        </h1>
        <h1 className="animate-line-3 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-white/25 mb-8">
          with.
        </h1>

        <div className="draw-line mb-8" />

        <p className="animate-line-4 text-base md:text-lg text-white/50 leading-relaxed max-w-xl">
          A mix of technical tools I've picked up and human traits I've
          always had. Both matter equally.
        </p>

      </section>

      {/* ── SKILL LISTS ── */}
      <section className="px-6 md:px-24 lg:px-40 pb-24 md:pb-32 border-t border-white/5">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 pt-16 md:pt-20">

          {/* Technical */}
          <div>
            <p className="reveal text-xs tracking-[0.4em] text-white/30 uppercase mb-10 md:mb-12">
              Technical
            </p>
            <div className="flex flex-col">
              {technical.map(({ name, level }) => (
                <div
                  key={name}
                  className="reveal border-b border-white/5 py-4 md:py-5 flex justify-between items-center group gap-4"
                >
                  <span className="text-white/80 tracking-wide group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                    {name}
                  </span>
                  <span className="text-xs tracking-[0.15em] md:tracking-[0.2em] text-white/25 uppercase shrink-0">
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Human */}
          <div>
            <p className="reveal text-xs tracking-[0.4em] text-white/30 uppercase mb-10 md:mb-12">
              Human
            </p>
            <div className="flex flex-col">
              {human.map(({ name, level }) => (
                <div
                  key={name}
                  className="reveal border-b border-white/5 py-4 md:py-5 flex justify-between items-center group gap-4"
                >
                  <span className="text-white/80 tracking-wide group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                    {name}
                  </span>
                  <span className="text-xs tracking-[0.15em] md:tracking-[0.2em] text-white/25 uppercase shrink-0">
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Nav link */}
        <Link
          href="/projects"
          className="reveal inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-white/40
            hover:text-white transition-all duration-500 group w-fit mt-16 md:mt-20"
        >
          <span>See my projects</span>
          <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
        </Link>

      </section>

    </main>
  );
}