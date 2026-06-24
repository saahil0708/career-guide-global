'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side: Copyright */}
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
          <p className="text-[11px] text-neutral-500 font-medium uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Career Guide Global.
          </p>
        </div>
        
        {/* Right Side: Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/about" className="text-[10px] text-neutral-500 hover:text-white uppercase tracking-widest font-bold transition-colors">About</Link>
          <Link href="/contact" className="text-[10px] text-neutral-500 hover:text-white uppercase tracking-widest font-bold transition-colors">Contact</Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[10px] text-neutral-500 hover:text-[#ccff00] uppercase tracking-widest font-bold transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
