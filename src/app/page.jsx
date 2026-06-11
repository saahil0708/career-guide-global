'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FluidArrowRight } from '@/components/fluid-arrow';
import { ChevronRight, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full text-white flex flex-col justify-between gap-6 flex-1 lg:h-full min-h-0">

      {/* Headline & Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start text-left pt-1"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
          Find The <span className="text-[#ccff00]">Career</span> <br />
          Of Your Own <br />
          Choice
        </h1>
        <p className="text-xs md:text-sm text-neutral-400 max-w-lg leading-relaxed font-light mt-4">
          Discover high-impact global pathways with certified career counselor support. Match your ambitions with elite roles in technology, finance, and product management.
        </p>
      </motion.div>

      {/* Button Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex items-center gap-2.5"
      >
        <Link 
          href="/features" 
          className="bg-[#ccff00] text-black px-8 py-3 rounded-full font-extrabold text-sm hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer shadow-md shadow-[#ccff00]/10"
        >
          Explore Now
        </Link>
        <Link 
          href="/features" 
          className="w-11 h-11 rounded-full bg-[#ccff00] -rotate-[40deg] text-black flex items-center justify-center hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer shadow-md shadow-[#ccff00]/10"
          aria-label="Go to Features"
        >
          <ArrowRight className="w-6 h-6" />
        </Link>
      </motion.div>

      {/* Bottom Horizontal Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full rounded-[24px] overflow-hidden flex-1 min-h-[140px] relative bg-neutral-900 border border-neutral-800"
      >
        {/* Background image representing team collaboration */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85 transition-opacity hover:opacity-95 duration-500" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </motion.div>
    </div>
  );
}