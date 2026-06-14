"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for buttery-smooth tracking
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    // Check for touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    // Hide native cursor for non-touch devices
    document.documentElement.classList.add('hide-native-cursor');

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if hovering over a clickable element
      if (
        target.tagName?.toLowerCase() === "a" ||
        target.tagName?.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.classList.remove('hide-native-cursor');
    };
  }, [cursorX, cursorY]);

  // Don't render on server, before mount, or on mobile
  if (!isMounted || isTouchDevice) return null;

  return (
    <>
      <style jsx global>{`
        .hide-native-cursor, .hide-native-cursor * {
          cursor: none !important;
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[100000] flex items-center justify-center transition-[width,height,background-color,mix-blend-mode] duration-300 ease-out transform-gpu"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 64 : 12,
          height: isHovering ? 64 : 12,
          // Use theme accent (#ccff00) by default, switch to white with difference blend on hover
          backgroundColor: isHovering ? "#ffffff" : "#ccff00",
          mixBlendMode: isHovering ? "difference" : "normal",
        }}
      />
    </>
  );
}
