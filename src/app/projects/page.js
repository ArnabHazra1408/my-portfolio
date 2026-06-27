"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const projects = [
  {
    index: "01",
    name: "Mist Umbrella",
    description: "Description coming soon.",
    tags: ["Arduino", "Hardware"],
  },
  {
    index: "02",
    name: "Automatic Hand Sanitizer",
    description: "Description coming soon.",
    tags: ["Arduino", "Hardware"],
  },
  {
    index: "03",
    name: "Traffic Light Sensor",
    description: "Description coming soon.",
    tags: ["Arduino", "Hardware"],
  },
];

export default function Projects() {
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
          <p className="text-xs tracking-[0.4em] text-white/30 uppercase">Projects</p>
        </div>

        <h1 className="animate-line-2 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-2">
          Things I've
        </h1>
        <h1 className="animate-line-3 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-white/25 mb-8">
          built.
        </h1>

        <div className="draw-line mb-8" />

        <p className="animate-line-4 text-base md:text-lg text-white/50 leading-relaxed max-w-xl">
          Early projects. Real hardware. Each one taught me something
          I couldn't have learned any other way.
        </p>

      </section>

      {/* ── PROJECT LIST ── */}
      <section className="px-6 md:px-24 lg:px-40 pb-24 md:pb-32 border-t border-white/5">

        <div className="flex flex-col pt-16 md:pt-20">
          {projects.map(({ index, name, description, tags }) => (
            <div
              key={index}
              className="reveal border-b border-white/5 py-8 md:py-10 flex flex-col md:flex-row md:items-start gap-4 md:gap-6 group
                hover:bg-white/[0.02] transition-colors duration-500 -mx-6 md:-mx-24 lg:-mx-40 px-6 md:px-24 lg:px-40"
            >
              {/* Index */}
              <span className="text-xs tracking-[0.3em] text-white/20 md:mt-1 w-8 shrink-0">
                {index}
              </span>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white/80 group-hover:text-white transition-colors duration-300 mb-3">
                  {name}
                </h2>
                <p className="text-sm md:text-base text-white/40 leading-relaxed max-w-xl mb-5 md:mb-6">
                  {description}
                </p>
                <div className="flex gap-2 md:gap-3 flex-wrap">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs tracking-[0.2em] text-white/25 uppercase border border-white/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nav link */}
        <Link
          href="/contact"
          className="reveal inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-white/40
            hover:text-white transition-all duration-500 group w-fit mt-16 md:mt-20"
        >
          <span>Get in touch</span>
          <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
        </Link>

      </section>

    </main>
  );
}