"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransitionLoader({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page starts at top
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); 

    return () => clearTimeout(timer);
  }, [pathname]);

  // Entrance Morph Paths (Screen fills up from the top, gooey bottom edge)
  const enterStart = "M 0 0 L 0 0 L 1000 0 L 1000 0 Q 500 0 0 0 Z";
  const enterMiddle = "M 0 600 L 0 0 L 1000 0 L 1000 600 Q 500 0 0 600 Z";
  const enterEnd = "M 0 1000 L 0 0 L 1000 0 L 1000 1000 Q 500 1000 0 1000 Z";

  // Exit Morph Paths (Screen empties to the top, gooey bottom edge trailing behind)
  const exitStart = "M 0 1000 L 0 0 L 1000 0 L 1000 1000 Q 500 1000 0 1000 Z";
  const exitMiddle = "M 0 400 L 0 0 L 1000 0 L 1000 400 Q 500 1100 0 400 Z"; 
  const exitEnd = "M 0 0 L 0 0 L 1000 0 L 1000 0 Q 500 0 0 0 Z";

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader-overlay"
            className="fixed inset-0 z-[9999] pointer-events-none"
          >
            {/* The SVG sweeping background */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 1000 1000" 
              preserveAspectRatio="none"
            >
              <motion.path 
                fill="#09090b"
                initial={{ d: enterStart }}
                animate={{ 
                  d: [enterStart, enterMiddle, enterEnd],
                  transition: { 
                    duration: 0.8, 
                    ease: [0.76, 0, 0.24, 1] 
                  }
                }}
                exit={{ 
                  d: [exitStart, exitMiddle, exitEnd],
                  transition: { 
                    duration: 0.8, 
                    ease: [0.76, 0, 0.24, 1] 
                  } 
                }}
              />
            </svg>

            {/* Loader Text */}
            <motion.div 
              className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] } }}
              exit={{ opacity: 0, y: -80, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
            >
              <div className="flex overflow-hidden">
                {"LOADING".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="text-zinc-300 tracking-[0.8em] text-lg md:text-xl font-light ml-[0.2em]"
                    animate={{ 
                      opacity: [0.2, 1, 0.2],
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "easeInOut", 
                      delay: i * 0.1 
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Page Content Reveal */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: isLoading ? 0.7 : 0, ease: [0.76, 0, 0.24, 1] }}
        className="flex-1 flex flex-col w-full"
      >
        {children}
      </motion.div>
    </>
  );
}
