'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function ScrollTracker() {
  const { scrollYProgress } = useScroll();
  const [percent, setPercent] = useState(0);

  // Smooth out the scroll progress for visual fluidity
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.001
  });

  // Map progress to pixel percentage for the thumb positioning
  const topPosition = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Track exact percentage
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <div className="hidden md:flex fixed right-4 md:right-8 top-1/2 -translate-y-1/2 h-[35vh] md:h-[40vh] w-12 z-50 flex-col items-center pointer-events-none mix-blend-difference">
      
      {/* Top Label */}
      <span className="text-[9px] font-extrabold text-neutral-400 tracking-[0.2em] uppercase [writing-mode:vertical-lr] rotate-180 mb-4 opacity-50">
        Explore
      </span>

      {/* Track Container */}
      <div className="relative w-[1px] h-full bg-white/10 rounded-full my-2">
        
        {/* Fill Line */}
        <motion.div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-white/20 to-white/60 origin-top rounded-full"
          style={{ scaleY: smoothProgress }}
        />

        {/* HUD Thumb / Slider */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full"
          style={{ top: topPosition }}
        >
          {/* Tech Brackets */}
          <div className="flex items-center justify-between w-6 h-6">
            {/* Left Bracket */}
            <svg width="4" height="12" viewBox="0 0 4 12" fill="none" className="text-[#ccff00]">
              <path d="M4 0H1C0.447715 0 0 0.447715 0 1V11C0 11.5523 0.447715 12 1 12H4" stroke="currentColor" strokeWidth="1"/>
            </svg>
            
            {/* Center Node */}
            <div className="w-1 h-1 bg-[#ccff00] shadow-[0_0_8px_#ccff00] rotate-45" />

            {/* Right Bracket */}
            <svg width="4" height="12" viewBox="0 0 4 12" fill="none" className="text-[#ccff00]">
              <path d="M0 0H3C3.55228 0 4 0.447715 4 1V11C4 11.5523 3.55228 12 3 12H0" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>

          {/* Percentage Float */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-[9px] font-mono font-bold text-white/70">
            {percent.toString().padStart(2, '0')}
          </div>
        </motion.div>
      </div>

      {/* Bottom Label */}
      <span className="text-[9px] font-extrabold text-neutral-400 tracking-[0.2em] uppercase [writing-mode:vertical-lr] rotate-180 mt-4 opacity-50">
        Scroll
      </span>

    </div>
  );
}
