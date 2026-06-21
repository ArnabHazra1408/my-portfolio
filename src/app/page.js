"use client";
import { useEffect, useState } from "react";
export default function Home() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-4 overflow-hidden">
      
      {/* Glowing cursor */}
      <div style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }} />


      {/* Hero */}
      <h1 className="text-white text-7xl font-bold tracking-widest animate-fade-in">
        Atrick
      </h1>
      <h2 className="text-gray-400 text-xl tracking-[0.3em] animate-fade-in-delay">
        Developer. Creator. Visionary.
      </h2>
      <button className="mt-8 px-8 py-3 border border-white text-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-500">
        EXPLORE
      </button>

    </main>
  );
}