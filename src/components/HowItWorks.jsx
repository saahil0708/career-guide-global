'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Edit3, Award } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Discover & Align',
    desc: 'Deep profiling to uncover your true potential and aspirations.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Strategize',
    desc: 'Craft a personalized roadmap targeting elite roles globally.',
    icon: Compass,
  },
  {
    num: '03',
    title: 'Execute & Apply',
    desc: 'Rigorous preparation and compelling application crafting.',
    icon: Edit3,
  },
  {
    num: '04',
    title: 'Achieve & Thrive',
    desc: 'Secure placement and negotiate terms with advisory support.',
    icon: Award,
  },
];

export default function HowItWorks() {
  return (
    <div className="w-full flex flex-col gap-8 lg:gap-12 mt-8 mb-6">
      {/* Header */}
      <div className="w-full flex flex-col items-center text-center gap-5 max-w-3xl mx-auto mb-10 lg:mb-16 relative pt-4 md:pt-8">
        {/* Massive Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] text-[70px] md:text-[120px] lg:text-[160px] font-black text-white/[0.02] uppercase tracking-widest pointer-events-none select-none whitespace-nowrap z-0">
          Process
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 relative z-10"
        >
          <span className="w-12 md:w-24 h-px bg-gradient-to-r from-transparent to-[#ccff00]" />
          <span className="text-xs font-bold text-[#ccff00] uppercase tracking-[0.3em]">Our Methodology</span>
          <span className="w-12 md:w-24 h-px bg-gradient-to-l from-transparent to-[#ccff00]" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-4 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            How It Works
          </h2>
          <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
            A proven, four-step framework designed to uncover your potential and place you in the world's most elite organizations.
          </p>
        </motion.div>
      </div>

      {/* Steps Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full flex-1 flex items-center relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-start w-full">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isAlternate = idx % 2 !== 0; // true for box 2 and 4

            return (
              <div 
                key={idx} 
                className={`flex flex-col gap-5 w-full group relative transition-all duration-500
                  ${idx !== 0 ? 'lg:border-l border-neutral-800/80 lg:pl-8 xl:pl-10 lg:border-t-0 border-t pt-8 lg:pt-4' : 'lg:pr-8 xl:pr-10 py-4 pt-4 lg:pt-4'}
                  ${idx !== steps.length - 1 && idx !== 0 ? 'lg:pr-8 xl:pr-10' : ''}
                `}
              >
                {/* Background Hover Enhancement */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ccff00]/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 rounded-2xl scale-95 group-hover:scale-100" />

                {/* Top Section: Icon & Step Number */}
                <div className="flex items-center justify-between w-full">
                  <div className="relative">
                    {/* Subtle resting aura for alternate boxes */}
                    {isAlternate && (
                      <div className="absolute inset-0 bg-[#ccff00] opacity-[0.04] blur-xl rounded-full" />
                    )}
                    <div className="absolute inset-0 bg-[#ccff00] opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500 rounded-full" />
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-black/25 transition-all duration-500 relative z-10 group-hover:scale-110 group-hover:bg-[#ccff00] group-hover:border-transparent
                      ${isAlternate ? 'bg-[#1a1a1a] border border-neutral-700/80' : 'bg-white border border-transparent'}
                    `}>
                      <Icon className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-500 group-hover:text-neutral-950 ${isAlternate ? 'text-white' : 'text-neutral-950'}`} />
                    </div>
                  </div>
                  <span className={`text-4xl md:text-5xl lg:text-6xl font-extrabold group-hover:text-[#ccff00]/40 transition-colors duration-500 select-none
                    ${isAlternate ? 'text-neutral-700/80' : 'text-neutral-800/60'}
                  `}>
                    {step.num}
                  </span>
                </div>

                {/* Content Section */}
                <div className="flex flex-col transform transition-transform duration-500 group-hover:translate-x-1 mt-1">
                  <h3 className="font-extrabold text-base md:text-lg lg:text-xl text-white tracking-tight leading-snug transition-colors duration-500 group-hover:text-[#ccff00]">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-400 font-light mt-2 leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
