'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const storyData = [
  {
    year: '2005',
    title: 'The Genesis of a Vision',
    desc: 'Global Success Consult was founded in a small office with a monumental vision: to democratize world-class education for every ambitious student, regardless of their background.',
    targetRotation: -70,
  },
  {
    year: '2010',
    title: 'Expanding Global Horizons',
    desc: 'We successfully established strategic partnerships with over 50 top-tier universities across Western Europe, creating exclusive pathways for our candidates to access international education.',
    targetRotation: -35,
  },
  {
    year: '2015',
    title: 'Digital Pioneering Phase',
    desc: 'Recognizing the shift in global communication, we launched an advanced virtual counseling platform and digitized our admission tracking system, setting a new industry standard for transparency.',
    targetRotation: 0,
  },
  {
    year: '2020',
    title: 'A Decade of Excellence',
    desc: 'Despite global challenges, we celebrated a milestone of 10,000 successful placements in Ivy League and Russell Group institutions, solidifying our position as a leader in global education.',
    targetRotation: 35,
  },
  {
    year: '2025',
    title: 'Shaping Future Leaders',
    desc: 'Today, we stand as a global authority in strategic academic guidance. Our focus has evolved beyond admissions to holistic mentorship, shaping the next generation of world-class citizens and leaders.',
    targetRotation: 70,
  }
];

export default function OurStoryFan() {
  const [hoveredYear, setHoveredYear] = useState(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full min-h-[80vh] md:min-h-screen bg-transparent rounded-t-[40px] mt-24 md:mt-40 flex flex-col items-center justify-between overflow-x-hidden pt-8 pb-20 md:pb-32">

        {/* Heading Section */}
        <div className="relative w-full flex flex-col items-center z-30 pointer-events-none px-4 flex-shrink-0">
          {/* Watermark behind heading */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden flex justify-center pointer-events-none select-none z-0">
              <span className="text-[100px] md:text-[140px] lg:text-[180px] font-black uppercase tracking-tighter text-white/[0.03] whitespace-nowrap">
                  THE JOURNEY
              </span>
          </div>
          
          <div className="relative z-10 flex flex-col items-center mt-4 md:mt-8">
              <div className="flex items-center gap-6 mb-2 md:mb-4">
                  <div className="w-10 md:w-16 border-b border-dashed border-[#ccff00]/60"></div>
                  <span className="text-[#ccff00] font-mono text-[9px] md:text-xs tracking-[0.3em] uppercase">Our Legacy</span>
                  <div className="w-10 md:w-16 border-b border-dashed border-[#ccff00]/60"></div>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-[90px] font-black uppercase tracking-tight text-white mb-2 md:mb-4 text-center">Our Story</h2>
              <p className="text-neutral-400 text-xs md:text-base max-w-xl mx-auto font-light leading-relaxed text-center">
                  From a singular vision to a global reality. Unfold our timeline to see the milestones that defined our journey.
              </p>
          </div>
        </div>

        {/* Fan Container */}
        <div className="relative w-full max-w-[800px] h-[380px] md:h-[500px] my-auto flex flex-col items-center justify-end z-10 perspective-[1000px] mt-12 md:mt-20">
          {storyData.map((item, index) => {
            const finalRotation = isMobile ? item.targetRotation * 0.45 : item.targetRotation;
            return (
              <Card
                key={index}
                data={item}
                rotation={finalRotation}
                index={index}
                setHoveredYear={setHoveredYear}
              />
            )
          })}

          {/* Pivot dot */}
          <div className="absolute bottom-[-16px] md:bottom-[-20px] w-8 h-8 md:w-10 md:h-10 bg-[#222222] shadow-xl shadow-[#ccff00]/10 border border-white/10 rounded-full flex items-center justify-center z-50">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#ccff00] rounded-full" />
          </div>
        </div>

        {/* Left Decorative Side */}
        <div className="absolute -left-10 top-[65%] -translate-y-1/2 hidden md:flex flex-col items-center gap-4 z-0">
          <div className="w-[1px] h-24 lg:h-40 bg-gradient-to-b from-transparent via-[#ccff00]/40 to-transparent"></div>
          <span className="text-white/30 font-mono text-xs lg:text-sm tracking-[0.5em] -rotate-90 whitespace-nowrap my-16">EST. 2005</span>
          <div className="w-[1px] h-24 lg:h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Right Decorative Side */}
        <div className="absolute -right-10 top-[65%] -translate-y-1/2 hidden md:flex flex-col items-center gap-4 z-0">
          <div className="w-[1px] h-24 lg:h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <span className="text-white/30 font-mono text-xs lg:text-sm tracking-[0.5em] rotate-90 whitespace-nowrap my-16">EVOLUTION</span>
          <div className="w-[1px] h-24 lg:h-40 bg-gradient-to-b from-transparent via-[#ccff00]/40 to-transparent"></div>
        </div>

        {/* Floating Abstract Elements */}
        <div className="absolute top-1/4 left-[15%] w-2 h-2 rounded-full bg-[#ccff00] opacity-40 shadow-[0_0_15px_#ccff00]"></div>
        <div className="absolute bottom-1/3 right-[15%] w-3 h-3 rounded-full bg-white opacity-20 shadow-[0_0_20px_white]"></div>
        <div className="absolute top-1/3 right-[20%] w-6 h-6 rounded-full border border-[#ccff00]/30 opacity-50"></div>
        <div className="absolute bottom-1/4 left-[20%] w-8 h-8 rounded-full border border-white/10 opacity-30"></div>
    </div>
  )
}

function Card({ data, rotation, index, setHoveredYear }) {
  const [isHovered, setIsHovered] = useState(false);

  const isYellow = index % 2 !== 0;
  const bgClass = isYellow ? 'bg-[#ccff00]' : 'bg-[#222222]';
  const yearClass = isYellow ? 'text-black/5 group-hover:text-black/15' : 'text-white/5 group-hover:text-[#ccff00]/10';
  const titleClass = isYellow ? 'text-[#181818]' : 'text-white';
  const descClass = isYellow ? 'text-[#181818]/70' : 'text-neutral-400';
  const borderClass = isYellow ? 'border-transparent' : 'border-white/5';

  return (
    <motion.div
      initial={{ rotate: 0, opacity: 0, y: 50 }}
      whileInView={{ rotate: rotation, opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        transformOrigin: 'bottom center',
        zIndex: isHovered ? 50 : index,
      }}
      animate={{
        boxShadow: isHovered 
          ? (isYellow ? "0 0 80px rgba(204,255,0,0.4)" : "0 0 60px rgba(255,255,255,0.12)")
          : "0 0 40px rgba(0,0,0,0.4)",
      }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      onMouseEnter={() => { setIsHovered(true); setHoveredYear(data.year); }}
      onMouseLeave={() => { setIsHovered(false); setHoveredYear(null); }}
      className={`group absolute bottom-4 md:bottom-10 w-[220px] sm:w-[280px] lg:w-[300px] h-[320px] sm:h-[380px] lg:h-[400px] ${bgClass} rounded-[24px] lg:rounded-[32px] p-5 sm:p-6 lg:p-8 flex flex-col cursor-pointer border ${borderClass} overflow-hidden`}
    >
      {/* Premium Hover Inner Glow */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: isHovered ? 1 : 0 }}
         transition={{ duration: 0.4, ease: "easeOut" }}
         className={`absolute inset-0 pointer-events-none z-0 ${isYellow ? 'bg-gradient-to-br from-white/40 via-transparent to-transparent' : 'bg-gradient-to-br from-[#ccff00]/15 via-transparent to-transparent'}`}
      />

      <div className="relative z-10 w-full h-full flex flex-col">
        <h2 className={`text-4xl lg:text-5xl font-black mb-4 lg:mb-6 tracking-tighter transition-colors duration-500 ${yearClass}`}>{data.year}</h2>
        <h3 className={`text-xl lg:text-2xl font-bold leading-tight mb-2 lg:mb-4 tracking-tight ${titleClass}`}>{data.title}</h3>
        <p className={`text-sm lg:text-base leading-relaxed font-light ${descClass}`}>{data.desc}</p>
      </div>
    </motion.div>
  )
}
