'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

const projects = [
    {
        id: "01",
        community: "THE UNIQUES COMMUNITY",
        title: "The Uniques",
        link: "#",
    },
    {
        id: "02",
        community: "GLOBAL TECH COMMUNITY",
        title: "Tech Horizon",
        link: "#",
    },
    {
        id: "03",
        community: "FINANCE LEADERS COMMUNITY",
        title: "Finance Pro",
        link: "#",
    },
    {
        id: "04",
        community: "CREATIVE ARTS COMMUNITY",
        title: "Design Sphere",
        link: "#",
    },
    {
        id: "05",
        community: "ENTREPRENEURSHIP COMMUNITY",
        title: "Startup Hub",
        link: "#",
    },
    {
        id: "06",
        community: "AI RESEARCH COMMUNITY",
        title: "Neural Net",
        link: "#",
    }
];

export default function StudentsCornerPage() {
    return (
        <div className="w-full min-h-screen text-white flex flex-col">
            <div className="px-4 sm:px-8 lg:px-12 flex-1 flex flex-col">
                <Navbar />

                <main className="w-full flex-1 mt-12 md:mt-24 max-w-[1600px] mx-auto pb-24 w-full">
                    {/* Shape */}
                    <div className="w-full flex justify-center mb-24 md:mb-32 mt-12">
                        <div className="w-full max-w-5xl h-[250px] md:h-[350px]">
                            <div
                                className="w-full h-full bg-[#ccff00]"
                                style={{ clipPath: 'polygon(0% 0%, 30% 0%, 35% 25%, 100% 25%, 100% 100%, 40% 100%, 35% 75%, 0% 75%)' }}
                            />
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: (idx % 3) * 0.15 }}
                                className="group relative w-full h-[420px] bg-[#181818] rounded-[32px] overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(204,255,0,0.1)] transition-all duration-500"
                            >
                                {/* Grain/Dot Pattern Overlay */}
                                <div
                                    className="absolute inset-0 opacity-[0.03] z-0 transition-opacity duration-500 group-hover:opacity-[0.06]"
                                    style={{ backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }}
                                />

                                {/* Subtle hover gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-0"></div>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(204,255,0,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

                                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                                    {/* Content area */}
                                    <div className="flex flex-col gap-2 relative w-[calc(100%-140px)] transition-transform duration-500 group-hover:translate-y-[-10px]">
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className="text-[#ccff00] font-mono text-lg tracking-widest">{project.id}</span>
                                            <div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                                {/* Minimalist Watermark logo */}
                                                <div className="flex items-center justify-center relative w-6 h-6">
                                                    <div className="absolute w-4 h-5 border-[1.5px] border-white/70 rounded-sm transition-colors duration-500 group-hover:border-white"></div>
                                                    <div className="w-1.5 h-1.5 bg-[#ccff00] rounded-full absolute -right-0 -top-0" />
                                                </div>
                                                <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">{project.community}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">{project.title}</h3>

                                        {/* Subtle gradient line in background of text */}
                                        <div className="absolute top-[40px] left-[70px] right-[-140px] h-[1px] bg-gradient-to-r from-[#ccff00]/40 to-transparent z-[-1] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>

                                {/* Inverted cut-out button area at bottom right */}
                                <div className="absolute bottom-0 right-0 z-20">
                                    {/* Outer container mimicking background to "cut out" the card */}
                                    <div className="relative bg-[#0a0a0a] pt-5 pl-5 rounded-tl-[32px]">
                                        {/* Top inverted curve */}
                                        <div className="absolute top-0 right-0 w-10 h-10 -mt-10 overflow-hidden pointer-events-none">
                                            <div className="w-full h-full bg-transparent rounded-br-[32px] shadow-[16px_16px_0_16px_#0a0a0a]"></div>
                                        </div>
                                        {/* Left inverted curve */}
                                        <div className="absolute bottom-0 left-0 w-10 h-10 -ml-10 overflow-hidden pointer-events-none">
                                            <div className="w-full h-full bg-transparent rounded-br-[32px] shadow-[16px_16px_0_16px_#0a0a0a]"></div>
                                        </div>

                                        {/* The actual button */}
                                        <Link href={project.link} className="flex items-center gap-3 bg-white hover:bg-[#ccff00] text-black px-7 py-3.5 rounded-full font-bold text-[13px] tracking-wide uppercase transition-all duration-500 group/btn">
                                            Explore
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}
