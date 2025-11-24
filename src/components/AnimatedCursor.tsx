"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function SuperCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClick(true);
    const up = () => setClick(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    // Add hover + label detection
    const hoverables = document.querySelectorAll("[data-cursor-label]");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        setHover(true);
        setLabel(el.getAttribute("data-cursor-label") || "");
      });
      el.addEventListener("mouseleave", () => {
        setHover(false);
        setLabel("");
      });
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="cursor"
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: click ? 0.6 : hover ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
          mass: 0.5,
        }}
      >
        {/* Glow layer */}
        <motion.div
          className="absolute w-14 h-14 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,255,255,0.6), transparent 70%)",
          }}
          animate={{
            scale: hover ? 1.5 : 1,
            opacity: hover ? 0.6 : 0.4,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Cursor core */}
        <motion.div
          className="flex items-center justify-center w-10 h-10 rounded-full border mix-blend-difference"
          style={{
            borderColor: hover ? "#00ffff" : "#ffffff",
            background: click
              ? "rgba(255,255,255,0.3)"
              : hover
                ? "rgba(0,255,255,0.15)"
                : "transparent",
          }}
        >
          <span className="text-xs text-white font-light select-none">
            {label}
          </span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
