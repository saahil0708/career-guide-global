'use client';

import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!containerRef.current) return;
    
    const updateSize = () => {
      setSize({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    };
    
    const observer = new ResizeObserver(() => updateSize());
    observer.observe(containerRef.current);
    updateSize();

    return () => observer.disconnect();
  }, []);

  const { width, height } = size;
  const isMobile = mounted && width > 0 && width < 768;

  // Concentric curve math
  const btn_w = isMobile ? 180 : 220;
  const btn_h = isMobile ? 56 : 64;
  const r_btn = isMobile ? 28 : 32;
  const G = isMobile ? 16 : 20; // Uniform gap

  const R_gap = G; 
  const B_gap = G; 

  const R = isMobile ? 24 : 32; // Main container corners
  const r_inner = r_btn + G; // Concentric inner curve
  const r_outer = isMobile ? 24 : 32; // Outer fillet curves

  const cw = R_gap + btn_w - r_btn + r_inner; 
  const ch = B_gap + btn_h - r_btn + r_inner;

  // Generate path
  const path = width > 0 ? `M ${R},0 L ${width - R},0 A ${R},${R} 0 0,1 ${width},${R} L ${width},${height - ch - r_outer} A ${r_outer},${r_outer} 0 0,1 ${width - r_outer},${height - ch} L ${width - cw + r_inner},${height - ch} A ${r_inner},${r_inner} 0 0,0 ${width - cw},${height - ch + r_inner} L ${width - cw},${height - r_outer} A ${r_outer},${r_outer} 0 0,1 ${width - cw - r_outer},${height} L ${R},${height} A ${R},${R} 0 0,1 0,${height - R} L 0,${R} A ${R},${R} 0 0,1 ${R},0 Z` : '';

  return (
    <div className="w-full relative mt-24 mb-24 flex justify-center px-4 md:px-8">
      <div className="relative w-full max-w-6xl">
        
        <div 
          ref={containerRef}
          className="relative w-full bg-[#111111] text-white p-8 md:p-12 lg:p-16 flex flex-col justify-start"
          style={{ 
            clipPath: width > 0 ? `path('${path}')` : 'none',
            borderRadius: width === 0 ? '32px' : '0',
            paddingBottom: mounted ? (isMobile ? '160px' : '180px') : '180px' 
          }}
        >
          <div className="absolute top-4 left-4 bg-black/80 text-lime-400 p-2 text-xs font-mono z-50 rounded">
            DEBUG: {width}x{height} | Mounted: {mounted ? 'Y' : 'N'}
          </div>
          
          <div className="max-w-xl lg:max-w-2xl relative z-10 flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Ready to <span className="text-[#ccff00]">Accelerate</span> <br className="hidden md:block"/> Your Career?
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-lg font-light leading-relaxed">
              Join thousands of ambitious individuals securing their future with our certified global advisors.
            </p>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6 mt-12 relative z-20">
            <div className="flex -space-x-3 shrink-0">
              <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#111] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80" alt="Avatar 1" />
              <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#111] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" alt="Avatar 2" />
              <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#111] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" alt="Avatar 3" />
            </div>
            <span className="text-neutral-300 font-medium text-sm md:text-base">Join 10k+ students globally</span>
          </div>

          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ccff00]/10 to-transparent pointer-events-none opacity-50 z-0" />
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#ccff00]/20 blur-[120px] rounded-full pointer-events-none z-0" />
        </div>

        {mounted && width > 0 && (
          <div 
            className="absolute pointer-events-none z-30"
            style={{ 
              bottom: B_gap, 
              right: R_gap, 
              width: btn_w, 
              height: btn_h 
            }}
          >
            <Link href="/contact" className="pointer-events-auto w-full h-full bg-white rounded-full flex items-center justify-center gap-2 hover:bg-[#ccff00] transition-colors duration-300 group shadow-xl">
              <span className="text-black font-extrabold text-sm md:text-base whitespace-nowrap">Contact Now</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-black group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
