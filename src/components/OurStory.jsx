"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function OurStory() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // The horizontal translation calculation
    // Increased height to 600vh to accommodate 5 phases + intro
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

    return (
        <div className="w-full relative z-10 border-t border-white/5">
            {/* PART 1: MASSIVE CINEMATIC TEXT */}
            <div className="w-full max-w-[1400px] mx-auto px-6 pt-12 lg:pt-20 pb-0 flex items-center justify-center">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-[1px] bg-[#ccff00]"></div>
                        <span className="text-[#ccff00] font-mono text-sm tracking-[0.3em] uppercase">Genesis</span>
                        <div className="w-12 h-[1px] bg-[#ccff00]"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white/20 leading-[1.1] max-w-[1000px] mx-auto">
                        <span className="text-white">We started</span> with a simple question: <br/>
                        <span className="text-white hover:text-[#ccff00] transition-colors duration-1000 mt-4 block">How do we unlock the world's potential?</span>
                    </h2>
                </div>
            </div>

            {/* PART 2: HORIZONTAL SCROLL TIMELINE */}
            <section ref={targetRef} className="relative h-[600vh]">
                {/* Sticky Container with Fade Edges */}
                <div 
                    className="sticky top-0 flex h-screen items-center overflow-hidden"
                    style={{ 
                        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", 
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" 
                    }}
                >
                    
                    {/* The moving track */}
                    <motion.div style={{ x }} className="flex gap-16 lg:gap-32 px-[10vw] lg:px-[15vw]">
                        
                        {/* Section Header inside the scroll */}
                        <div className="w-[80vw] lg:w-[400px] flex-shrink-0 flex flex-col justify-center">
                            <h3 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6">
                                The <br/><span className="text-[#ccff00]">Journey</span>
                            </h3>
                            <p className="text-neutral-400 text-xl font-light">
                                Scroll to explore our timeline and the evolution of our global impact.
                            </p>
                        </div>

                        {/* Timeline Item 1 */}
                        <div className="w-[80vw] lg:w-[600px] h-[500px] flex-shrink-0 flex flex-col justify-center relative group">
                            {/* Horizontal Line Separator */}
                            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/10 group-hover:bg-[#ccff00]/50 transition-colors duration-700 z-20"></div>
                            {/* Glowing Node */}
                            <div className="absolute top-1/4 left-0 -translate-y-1/2 w-4 h-4 rounded-full bg-[#ccff00] shadow-[0_0_20px_#ccff00] z-20"></div>
                            
                            {/* Background Massive Number */}
                            <div className="absolute top-1/4 right-0 -translate-y-12 text-[200px] lg:text-[280px] font-black text-transparent select-none pointer-events-none group-hover:scale-105 group-hover:-translate-y-16 transition-transform duration-1000 z-0" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}>
                                01
                            </div>

                            <div className="mt-32 relative z-10 pr-8">
                                <span className="text-[#ccff00] font-mono text-lg tracking-widest mb-4 block">Phase 01</span>
                                <h4 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-tight">The Spark</h4>
                                <p className="text-neutral-400 text-xl font-light leading-relaxed group-hover:text-white/80 transition-colors duration-700">
                                    We recognized that brilliant minds were often limited by geographic boundaries and complex institutional red tape. The vision was born.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item 2 */}
                        <div className="w-[80vw] lg:w-[600px] h-[500px] flex-shrink-0 flex flex-col justify-center relative group">
                            {/* Horizontal Line Separator */}
                            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/10 group-hover:bg-[#ccff00]/50 transition-colors duration-700 z-20"></div>
                            {/* Glowing Node */}
                            <div className="absolute top-1/4 left-0 -translate-y-1/2 w-4 h-4 rounded-full bg-white/20 group-hover:bg-[#ccff00] transition-colors duration-700 group-hover:shadow-[0_0_20px_#ccff00] z-20"></div>
                            
                            {/* Background Massive Number */}
                            <div className="absolute top-1/4 right-0 -translate-y-12 text-[200px] lg:text-[280px] font-black text-transparent select-none pointer-events-none group-hover:scale-105 group-hover:-translate-y-16 transition-transform duration-1000 z-0" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}>
                                02
                            </div>

                            <div className="mt-32 relative z-10 pr-8">
                                <span className="text-white/40 group-hover:text-[#ccff00] transition-colors duration-700 font-mono text-lg tracking-widest mb-4 block">Phase 02</span>
                                <h4 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Mapping the Code</h4>
                                <p className="text-neutral-400 text-xl font-light leading-relaxed group-hover:text-white/80 transition-colors duration-700">
                                    We began meticulously mapping the pathways to the world's most elite institutions and corporations, reverse-engineering the blueprint for success.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item 3 */}
                        <div className="w-[80vw] lg:w-[600px] h-[500px] flex-shrink-0 flex flex-col justify-center relative group">
                            {/* Horizontal Line Separator */}
                            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/10 group-hover:bg-[#ccff00]/50 transition-colors duration-700 z-20"></div>
                            {/* Glowing Node */}
                            <div className="absolute top-1/4 left-0 -translate-y-1/2 w-4 h-4 rounded-full bg-white/20 group-hover:bg-[#ccff00] transition-colors duration-700 group-hover:shadow-[0_0_20px_#ccff00] z-20"></div>
                            
                            {/* Background Massive Number */}
                            <div className="absolute top-1/4 right-0 -translate-y-12 text-[200px] lg:text-[280px] font-black text-transparent select-none pointer-events-none group-hover:scale-105 group-hover:-translate-y-16 transition-transform duration-1000 z-0" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}>
                                03
                            </div>

                            <div className="mt-32 relative z-10 pr-8">
                                <span className="text-white/40 group-hover:text-[#ccff00] transition-colors duration-700 font-mono text-lg tracking-widest mb-4 block">Phase 03</span>
                                <h4 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-tight">The Ecosystem</h4>
                                <p className="text-neutral-400 text-xl font-light leading-relaxed group-hover:text-white/80 transition-colors duration-700">
                                    We established a borderless ecosystem, connecting our ambitious candidates with leading mentors, recruiters, and decision-makers worldwide.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item 4 */}
                        <div className="w-[80vw] lg:w-[600px] h-[500px] flex-shrink-0 flex flex-col justify-center relative group">
                            {/* Horizontal Line Separator */}
                            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/10 group-hover:bg-[#ccff00]/50 transition-colors duration-700 z-20"></div>
                            {/* Glowing Node */}
                            <div className="absolute top-1/4 left-0 -translate-y-1/2 w-4 h-4 rounded-full bg-white/20 group-hover:bg-[#ccff00] transition-colors duration-700 group-hover:shadow-[0_0_20px_#ccff00] z-20"></div>
                            
                            {/* Background Massive Number */}
                            <div className="absolute top-1/4 right-0 -translate-y-12 text-[200px] lg:text-[280px] font-black text-transparent select-none pointer-events-none group-hover:scale-105 group-hover:-translate-y-16 transition-transform duration-1000 z-0" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}>
                                04
                            </div>

                            <div className="mt-32 relative z-10 pr-8">
                                <span className="text-white/40 group-hover:text-[#ccff00] transition-colors duration-700 font-mono text-lg tracking-widest mb-4 block">Phase 04</span>
                                <h4 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Scale & Impact</h4>
                                <p className="text-neutral-400 text-xl font-light leading-relaxed group-hover:text-white/80 transition-colors duration-700">
                                    Our strategies scaled globally. We began redefining the admissions and placement standards at top-tier organizations across the globe.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item 5 */}
                        <div className="w-[80vw] lg:w-[600px] h-[500px] flex-shrink-0 flex flex-col justify-center relative group">
                            {/* Horizontal Line Separator */}
                            <div className="absolute top-1/4 left-0 w-[50%] h-[1px] bg-gradient-to-r from-white/10 to-transparent group-hover:from-[#ccff00]/50 transition-colors duration-700 z-20"></div>
                            {/* Glowing Node */}
                            <div className="absolute top-1/4 left-0 -translate-y-1/2 w-4 h-4 rounded-full bg-white/20 group-hover:bg-[#ccff00] transition-colors duration-700 group-hover:shadow-[0_0_20px_#ccff00] z-20"></div>
                            
                            {/* Background Massive Number */}
                            <div className="absolute top-1/4 right-0 -translate-y-12 text-[200px] lg:text-[280px] font-black text-transparent select-none pointer-events-none group-hover:scale-105 group-hover:-translate-y-16 transition-transform duration-1000 z-0" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}>
                                05
                            </div>

                            <div className="mt-32 relative z-10 pr-8">
                                <span className="text-white/40 group-hover:text-[#ccff00] transition-colors duration-700 font-mono text-lg tracking-widest mb-4 block">Phase 05</span>
                                <h4 className="text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-tight">The Standard</h4>
                                <p className="text-neutral-400 text-xl font-light leading-relaxed group-hover:text-white/80 transition-colors duration-700">
                                    Today, we are the standard-bearers for thousands of successful global careers. The foundation is set, and the journey has just begun.
                                </p>
                            </div>
                        </div>

                        {/* End padding block to ensure scroll completion looks good */}
                        <div className="w-[10vw] flex-shrink-0"></div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
