'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ExpertiseSection() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="w-full relative py-12">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-[#ccff00]/[0.03] blur-[120px] rounded-full pointer-events-none" />
      
      {/* Header */}
      <div className="relative z-10 flex flex-col gap-3 mb-10 items-start text-left">
        <div className="flex items-center gap-4">
          <span className="w-8 md:w-22 h-0.25 bg-[#ccff00]" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Key Figures
          </h2>
        </div>
        <p className="text-neutral-400 text-sm md:text-base max-w-2xl font-light mt-2 leading-relaxed">
          Our global pathways are engineered for maximum impact. We combine specialized expertise to effectively manage your career trajectory and navigate complex admissions frameworks.
        </p>
      </div>

      {/* BENTO GRID */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-[160px] md:auto-rows-[180px]">
        
        {/* BLOCK 1: Global Admissions (Top Left) - PROFESSIONAL THEME */}
        <motion.div
          {...fadeUp}
          className="col-span-1 row-span-1 rounded-[24px] bg-[#111111] border border-white/5 p-6 md:p-8 relative overflow-hidden flex flex-col justify-center group hover:bg-[#151515] hover:border-[#ccff00]/20 transition-all duration-500"
        >
          {/* Faint Background Plus Grid */}
          <div className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" style={{ maskImage: 'radial-gradient(circle at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)' }}>
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                   <pattern id="pro-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 12 8 L 12 16 M 8 12 L 16 12" fill="none" stroke="white" strokeWidth="1" />
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#pro-grid)"></rect>
             </svg>
          </div>
          
          {/* Professional Wireframe Globe */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[280px] h-[280px] opacity-[0.15] pointer-events-none transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-[0.25]">
             <svg viewBox="0 0 100 100" className="w-full h-full text-[#ccff00] animate-[spin_60s_linear_infinite]">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <ellipse cx="50" cy="50" rx="15" ry="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <ellipse cx="50" cy="50" rx="30" ry="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <ellipse cx="50" cy="50" rx="48" ry="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <ellipse cx="50" cy="50" rx="48" ry="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <line x1="50" y1="2" x2="50" y2="98" stroke="currentColor" strokeWidth="0.5" />
                <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="0.5" />
             </svg>
          </div>
          
          <div className="relative z-10 flex flex-col items-start text-left">
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-1">100%</h3>
            <p className="text-sm font-bold text-neutral-300 uppercase tracking-wide mt-1">Global Admissions</p>
            <p className="text-[11px] text-neutral-500 mt-1.5 max-w-[180px] leading-relaxed font-medium">Ivy League & top-tier university application coverage.</p>
          </div>
        </motion.div>

        {/* BLOCK 2: Profile Building (Center Tall) - YELLOW THEME */}
        <motion.div
          {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-1 md:row-span-2 rounded-[24px] bg-[#ccff00] p-6 md:p-8 relative overflow-hidden flex flex-col justify-between shadow-lg shadow-[#ccff00]/5"
        >
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center mb-5">
              <span className="text-black text-xl font-bold">*</span>
            </div>
            <p className="text-[10px] font-bold text-black/70 uppercase tracking-widest mb-1.5">Profile Building</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-black leading-tight">Strategic<br/>Positioning</h3>
          </div>
          
          {/* Animated Bar Chart */}
          <div className="relative z-10 flex items-end gap-1.5 md:gap-2 h-32 md:h-40 mt-8 w-full justify-between">
            {[15, 25, 20, 40, 35, 60, 50, 85, 75, 100].map((height, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                transition={{ duration: 0.8, delay: 0.2 + (i * 0.08), ease: "easeOut" }}
                className="w-full bg-black/90 rounded-t-sm"
              />
            ))}
          </div>
        </motion.div>

        {/* BLOCK 3: Mentorship Stat (Top Right) - DARK THEME */}
        <motion.div
          {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-1 row-span-1 rounded-[24px] bg-[#111111] border border-white/5 p-6 md:p-8 flex flex-col justify-center relative overflow-hidden group hover:bg-[#151515] hover:border-[#ccff00]/20 transition-all duration-500"
        >
          <p className="text-[13px] font-medium text-neutral-400 mb-2">Network of over</p>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#ccff00] mb-2">120+ Mentors</h3>
          <p className="text-[11px] text-neutral-500 leading-relaxed max-w-[200px]">From Fortune 500 companies guiding your path.</p>
        </motion.div>

        {/* BLOCK 4: Career Discovery (Mid Left) - DARK THEME */}
        <motion.div
          {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-1 row-span-1 rounded-[24px] bg-[#111111] border border-white/5 p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden group hover:bg-[#151515] hover:border-[#ccff00]/20 transition-all duration-500 text-center"
        >
          {/* Speedometer graphic */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 200 100" className="w-[120%] h-[120%] transform translate-y-12">
              <path d="M 30 100 A 70 70 0 0 1 170 100" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 30 100 A 70 70 0 0 1 80 40" fill="none" stroke="#ccff00" strokeWidth="4" />
              <circle cx="100" cy="100" r="5" fill="white" />
              <line x1="100" y1="100" x2="75" y2="45" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          
          <div className="relative z-10 mt-6 md:mt-8">
            <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1">Career Discovery</p>
            <h3 className="text-3xl font-extrabold text-[#ccff00]">48 Hours</h3>
            <p className="text-[11px] text-white mt-1">Action plan delivery</p>
          </div>
        </motion.div>

        {/* BLOCK 5: Scholarship Stat (Mid Right) - DARK THEME */}
        <motion.div
          {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-1 row-span-1 rounded-[24px] bg-[#111111] border border-white/5 p-6 md:p-8 flex flex-col justify-center relative overflow-hidden group hover:bg-[#151515] hover:border-[#ccff00]/20 transition-all duration-500"
        >
          <p className="text-[13px] font-medium text-neutral-400 mb-2">Negotiated over</p>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#ccff00] mb-2">$42,000,000</h3>
          <p className="text-[11px] text-neutral-500 leading-relaxed max-w-[200px]">In scholarships and financial aid for our students.</p>
        </motion.div>

        {/* BLOCK 6: Test Prep Strategy (Bottom Left) - DARK THEME */}
        <motion.div
          {...fadeUp} transition={{ duration: 0.6, delay: 0.5 }}
          className="col-span-1 row-span-1 rounded-[24px] bg-[#111111] border border-white/5 p-6 md:p-8 flex flex-col justify-end relative overflow-hidden group hover:bg-[#151515] hover:border-[#ccff00]/20 transition-all duration-500"
        >
          {/* Smooth Line Chart Graphic */}
          <div className="absolute inset-0 bottom-0 pointer-events-none">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-[60%] absolute bottom-0 opacity-70">
              <path d="M 0 50 C 20 40, 40 45, 60 25 S 80 10, 100 5 L 100 50 Z" fill="url(#gradLine)" />
              <path d="M 0 50 C 20 40, 40 45, 60 25 S 80 10, 100 5" fill="none" stroke="#ccff00" strokeWidth="1.5" />
              <circle cx="100" cy="5" r="2" fill="#ccff00" />
              <circle cx="60" cy="25" r="1.5" fill="white" />
              <defs>
                <linearGradient id="gradLine" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ccff00" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ccff00" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="relative z-10 mb-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1">Test Prep Strategy</p>
            <h3 className="text-3xl font-extrabold text-white">Top 1%</h3>
            <p className="text-[11px] text-white mt-1">Targeted percentile scores</p>
          </div>
        </motion.div>

        {/* BLOCK 7: Zero Fees (Center Bottom) - DARK THEME */}
        <motion.div
          {...fadeUp} transition={{ duration: 0.6, delay: 0.6 }}
          className="col-span-1 row-span-1 rounded-[24px] bg-[#111111] border border-white/5 p-6 flex items-center justify-center relative overflow-hidden group hover:bg-[#151515] hover:border-[#ccff00]/20 transition-all duration-500"
        >
          <div className="flex items-center gap-4">
            <span className="text-6xl font-extrabold text-[#ccff00]">0</span>
            <span className="text-2xl font-bold text-white tracking-tight leading-none">Hidden<br/>fees</span>
          </div>
        </motion.div>

        {/* BLOCK 8: Visa Success (Bottom Right) - DARK THEME */}
        <motion.div
          {...fadeUp} transition={{ duration: 0.6, delay: 0.7 }}
          className="col-span-1 row-span-1 rounded-[24px] bg-[#111111] border border-white/5 p-6 md:p-8 flex flex-col justify-center relative overflow-hidden group hover:bg-[#151515] hover:border-[#ccff00]/20 transition-all duration-500"
        >
          {/* Background Custom Chevrons */}
          <div className="absolute right-0 top-0 w-2/3 h-full flex opacity-[0.03] pointer-events-none text-white">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              <path d="M 0 0 L 30 50 L 0 100 L 20 100 L 50 50 L 20 0 Z" fill="currentColor" />
              <path d="M 40 0 L 70 50 L 40 100 L 60 100 L 90 50 L 60 0 Z" fill="currentColor" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">100% Rate</h3>
            <p className="text-[13px] font-medium text-neutral-400">Visa Success</p>
            <p className="text-[11px] text-neutral-500 mt-1 max-w-[150px] leading-relaxed">Flawless track record for international student visas.</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
