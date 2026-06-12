'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Wallet, Check, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full text-white flex flex-col justify-between gap-4 lg:gap-5 flex-1 lg:h-full min-h-0">

      {/* Headline & Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start text-left pt-5"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
          Find The <span className="text-[#ccff00]">Career</span> <br />
          Of Your Own <br />
          Choice
        </h1>
        <p className="text-xs md:text-sm text-neutral-400 max-w-lg leading-relaxed font-light mt-5">
          Discover high-impact global pathways with certified career counselor support. Match your ambitions with elite roles in technology, finance, and product management.
        </p>
      </motion.div>

      {/* Button Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex items-center gap-2.5 mt-2"
      >
        <Link 
          href="/features" 
          className="bg-[#ccff00] text-black px-8 py-3 rounded-full font-extrabold text-sm hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer shadow-md shadow-[#ccff00]/10"
        >
          Explore Now
        </Link>
        <Link 
          href="/features" 
          className="w-11 h-11 rounded-full bg-[#ccff00] -rotate-[40deg] text-black flex items-center justify-center hover:opacity-90 hover:rotate-0 active:scale-[0.98] transition-all cursor-pointer shadow-md shadow-[#ccff00]/10"
          aria-label="Go to Features"
        >
          <ArrowRight className="w-6 h-6" />
        </Link>
      </motion.div>

      {/* Trust & Counselor Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-5 mb-2"
      >
        {/* Avatar Stack */}
        <div className="flex -space-x-3">
          <img
            className="w-9 h-9 rounded-full border-2 border-[#181818] object-cover"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
            alt="Counselor female 1"
          />
          <img
            className="w-9 h-9 rounded-full border-2 border-[#181818] object-cover"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
            alt="Counselor male 1"
          />
          <img
            className="w-9 h-9 rounded-full border-2 border-[#181818] object-cover"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
            alt="Counselor female 2"
          />
          <div className="w-9 h-9 rounded-full border-2 border-[#181818] bg-neutral-800 flex items-center justify-center text-[10px] font-extrabold text-[#ccff00]">
            +50
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-white">50+ Certified Global Advisors</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
          </div>
          <span className="text-[11px] text-neutral-400 font-light mt-0.5">
            Ex-Goldman, Google, and McKinsey advisors ready to guide your journey.
          </span>
        </div>
      </motion.div>

      {/* Bottom Horizontal Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full flex-1 min-h-[80px] flex items-center py-2 md:py-3 relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 items-center w-full">
          {/* Stat 1 */}
          <div className="flex items-center gap-3 w-full md:pr-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-white group-hover:bg-[#ccff00] flex items-center justify-center shrink-0 shadow-lg shadow-black/25 transition-all duration-300">
              <Wallet className="w-4.5 h-4.5 text-neutral-950 transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-extrabold text-sm text-white tracking-tight leading-snug transition-colors duration-300 group-hover:text-[#ccff00]">Fee Support</h3>
              <p className="text-[11px] text-neutral-400 font-light mt-0.5 leading-normal">Clear tuition & scholarships</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3 w-full md:border-l border-neutral-800/80 md:pl-5 py-1 border-t md:border-t-0 pt-6 md:pt-1 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-white group-hover:bg-[#ccff00] flex items-center justify-center shrink-0 shadow-lg shadow-black/25 transition-all duration-300">
              <Check className="w-4.5 h-4.5 text-neutral-950 transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-extrabold text-sm text-white tracking-tight leading-snug transition-colors duration-300 group-hover:text-[#ccff00]">Verified Data</h3>
              <p className="text-[11px] text-neutral-400 font-light mt-0.5 leading-normal">Real info over marketing</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3 w-full md:border-l border-neutral-800/80 md:pl-5 py-1 border-t md:border-t-0 pt-6 md:pt-1 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-white group-hover:bg-[#ccff00] flex items-center justify-center shrink-0 shadow-lg shadow-black/25 transition-all duration-300">
              <Target className="w-4.5 h-4.5 text-neutral-950 transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-extrabold text-sm text-white tracking-tight leading-snug transition-colors duration-300 group-hover:text-[#ccff00]">Placement Focus</h3>
              <p className="text-[11px] text-neutral-400 font-light mt-0.5 leading-normal">Strong career outcomes</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}