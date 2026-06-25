'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const carouselImages = [
  {
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80',
    title: 'Global Tech Hubs',
    category: 'Innovation'
  },
  {
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80',
    title: 'Worldwide Placement',
    category: 'Network'
  },
  {
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80',
    title: 'Elite Universities',
    category: 'Education'
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80',
    title: 'Corporate Headquarters',
    category: 'Business'
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80',
    title: 'Collaborative Workspaces',
    category: 'Culture'
  },
  {
    url: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=2000&q=80',
    title: 'Executive Insights',
    category: 'Leadership'
  },
  {
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80',
    title: 'Creative Labs',
    category: 'Design'
  },
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2000&q=80',
    title: 'Modern Architecture',
    category: 'Campus'
  }
];

const gridImages = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80',
];

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 w-full pt-12 md:pt-20 pb-20 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24 mt-4 md:mt-8 px-4 md:px-0">
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <div className="flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="h-[2px] w-8 bg-[#ccff00] shadow-[0_0_10px_rgba(204,255,0,0.5)]"></div>
              <span className="text-[#ccff00] font-bold text-[10px] tracking-[0.3em] uppercase">Visual Archives</span>
              <div className="h-[2px] w-8 bg-[#ccff00] shadow-[0_0_10px_rgba(204,255,0,0.5)]"></div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
              The Global <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-white to-neutral-600">
                Perspective.
              </span>
            </h1>
            <p className="text-neutral-400 font-medium max-w-2xl text-sm md:text-base leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              A curated visual journey through our global network, elite university placements, and cutting-edge tech environments worldwide. Experience the impact of boundaryless ambition.
            </p>
          </div>
        </div>

        {/* Hero Carousel Section - True Sliding Layout with Staggered Heights & Same Base */}
        <div className="w-full h-[60vh] md:h-[70vh] mb-24 overflow-hidden relative">
          <div 
            className="flex items-end h-full w-max transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] [--inactive-w:40vw] [--gap:1rem] md:[--inactive-w:20vw] md:[--gap:1.5rem] gap-4 md:gap-6 pb-4"
            style={{
              transform: `translateX(calc(-1 * ${currentIndex} * (var(--inactive-w) + var(--gap))))`
            }}
          >
            {carouselImages.map((img, idx) => {
              const isActive = idx === currentIndex;

              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (!isActive) {
                       setCurrentIndex(idx);
                    }
                  }}
                  className={`relative rounded-2xl md:rounded-[32px] overflow-hidden cursor-pointer group flex-shrink-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] bg-[#111] border ${
                    isActive 
                      ? 'w-[85vw] md:w-[65vw] h-[55vh] md:h-[65vh] ]' 
                      : 'w-[var(--inactive-w)] h-[40vh] md:h-[45vh] border-white/5 opacity-80 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isActive ? 'grayscale-0 opacity-100' : 'filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100'}`} 
                    crossOrigin="anonymous" 
                  />

                  {/* Premium Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/60 to-transparent transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

                  {/* Text Overlay */}
                  <div className={`absolute bottom-0 left-0 w-full p-6 md:p-12 transition-all duration-1000 transform ${isActive ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-3 py-1 bg-[#ccff00]/10 border border-[#ccff00]/20 text-[#ccff00] text-[10px] font-mono tracking-widest uppercase rounded-full mb-4">
                      {img.category}
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                      {img.title}
                    </h2>
                  </div>

                  {/* Controls overlay for the active image */}
                  <div className={`absolute bottom-8 right-8 z-10 flex gap-4 transition-all duration-1000 ${isActive ? 'opacity-0 group-hover:opacity-100 translate-x-0 delay-300' : 'opacity-0 translate-x-8 pointer-events-none'}`}>
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all duration-300"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Minimal vertical label for narrow passive images */}
                  <div className={`absolute inset-0 flex items-end justify-center pb-6 transition-opacity duration-1000 bg-gradient-to-t from-black/80 to-transparent ${!isActive ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 pointer-events-none'}`}>
                     <span className="text-white text-[10px] font-bold uppercase tracking-widest transform -rotate-90 origin-bottom whitespace-nowrap mb-12 drop-shadow-md">
                       {img.category}
                     </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Infinite Marquee Section */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-10 px-4 md:px-0">
            <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">More Impressions</h3>
            <span className="text-neutral-500 font-mono text-xs uppercase tracking-widest">{gridImages.length} Shots</span>
          </div>

          <div className="relative w-full overflow-hidden py-4">
            {/* Gradient masks for fading edges */}
            <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#181818] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#181818] to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-max">
              {[1, 2].map((_, groupIdx) => (
                <motion.div 
                  key={groupIdx}
                  className="flex gap-4 md:gap-6 pr-4 md:pr-6 w-max"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                >
                  {gridImages.map((src, i) => (
                    <div 
                      key={i} 
                      className="relative group overflow-hidden rounded-xl md:rounded-2xl w-[260px] md:w-[400px] aspect-[4/3] flex-shrink-0 bg-[#111] border border-white/5 hover:border-[#ccff00]/30 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(204,255,0,0.1)]"
                    >
                      <img 
                        src={src} 
                        alt={`Gallery Image ${i + 1}`}
                        className="w-full h-full object-cover filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-105"
                        crossOrigin="anonymous"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-80 pointer-events-none"></div>
                      <div className="absolute inset-0 bg-[#ccff00] mix-blend-color opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
                      
                      <div className="absolute bottom-4 left-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        <span className="inline-block px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[9px] font-bold tracking-widest uppercase rounded-full">
                          View Detail
                        </span>
                      </div>

                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#ccff00]/10 backdrop-blur-md border border-[#ccff00]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-[0_0_15px_rgba(204,255,0,0.2)]">
                        <Maximize2 className="w-4 h-4 text-[#ccff00]" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </main>

      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-[#ccff00]/5 rounded-full blur-[150px] animate-in fade-in duration-1000"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#ccff00]/3 rounded-full blur-[120px] animate-in fade-in duration-1000 delay-500"></div>
      </div>
    </div>
  );
}
