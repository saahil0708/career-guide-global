'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RightTallCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full h-full min-h-[580px] lg:min-h-full border-none rounded-[24px] overflow-hidden relative flex flex-col justify-between p-8 shadow-2xl bg-[#181818]"
    >
      {/* Background image representing a modern high-rise office (as a placeholder) */}
      <div
        className="absolute inset-0 bg-cover border-none bg-center opacity-85 transition-transform duration-700"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80')" }}
      />
      <div className="absolute inset-0 border-none bg-gradient-to-t from-black/90 via-black/30 to-transparent z-0" />

      {/* Top Section: Get Started Button in the extreme top right corner */}
      <Link
        href="#"
        onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('show-development-modal')); }}
        className="absolute -top-5 -right-4.5 z-10 px-6 py-2.5 border-20 border-[#181818] outline-none rounded-full font-extrabold text-sm transition-all duration-500 ease-out cursor-pointer shadow-lg shadow-black/25 text-black hover:text-[#ccff00] bg-[linear-gradient(to_right,black_50%,#ccff00_50%)] bg-[length:200%_100%] bg-right hover:bg-left"
      >
        Contact Us
      </Link>

      {/* Bottom Section: Text Overlay Details */}
      <div className="relative z-10 flex flex-col items-start mt-auto">
        <span className="inline-flex px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] font-bold tracking-widest text-white mb-4 uppercase">
          Career Guide
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 leading-tight max-w-sm">
          Accelerating <span className='text-[#ccff00]'>global</span> professional careers.
        </h2>
        <p className="text-[11px] text-neutral-300 leading-relaxed font-light max-w-xs">
          We connect elite tech and finance leaders to international opportunities.
        </p>
      </div>
    </motion.div>
  );
}
