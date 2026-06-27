"use client";
import { useEffect, useRef } from "react";

export default function GlowCursor() {
  const glowRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = e.clientX + "px";
      glowRef.current.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        left: "-999px",
        top: "-999px",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}