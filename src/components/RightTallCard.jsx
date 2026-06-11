'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FluidArrowRight } from './fluid-arrow';

export default function RightTallCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full h-full min-h-[580px] lg:min-h-full rounded-[24px] overflow-hidden relative flex flex-col justify-between p-8 shadow-2xl bg-neutral-950"
    >
      {/* Background image representing a modern high-rise office (as a placeholder) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-85 transition-transform hover:scale-[1.02] duration-700" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-0" />

      {/* Top Section: Get Started Button in the extreme top right corner */}
      <Link 
        href="/contact" 
        className="absolute -top-5 -right-4.5 z-10 bg-[#ccff00] text-black px-6 py-2.5 border-20 border-black rounded-full font-extrabold text-sm hover:opacity-90 active:scale-[0.97] transition-all cursor-pointer shadow-lg shadow-black/25"
      >
        Get Started
      </Link>

      {/* Bottom Section: Text Overlay Details */}
      <div className="relative z-10 flex flex-col items-start mt-auto">
        <span className="inline-flex px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] font-bold tracking-widest text-white mb-4 uppercase">
          Career Guide
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 leading-tight max-w-sm">
          Accelerating global professional careers.
        </h2>
        <p className="text-[11px] text-neutral-300 leading-relaxed font-light max-w-xs">
          We connect elite tech and finance leaders to international opportunities.
        </p>
      </div>
    </motion.div>
  );
}
