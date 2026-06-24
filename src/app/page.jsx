'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Wallet, Check, Target } from 'lucide-react';
import ExpertiseSection from '../components/ExpertiseSection';
import Navbar from '../components/navbar';
import RightTallCard from '../components/RightTallCard';
import { Marquee } from "@/components/ui/marquee";
import Testimonials from '@/components/mvpblocks/testimonials-marquee';
import FAQ from '@/components/faq';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import StatsSection from '../components/StatsSection';

export default function Home() {
  return (
    <div className="w-full text-white flex flex-col gap-12 lg:gap-16 pb-12">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          <Navbar />
          <div className="flex flex-col justify-between gap-8 lg:gap-5 w-full lg:min-h-[calc(100vh-150px)]">
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
              className="flex items-center mt-4"
            >
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-4 rounded-full p-1 pr-8 cursor-pointer transition-transform"
              >
                {/* Expanding background */}
                <div className="absolute left-1 top-1 bottom-1 w-12 rounded-full bg-white group-hover:bg-[#ccff00] transition-all duration-500 ease-out group-hover:w-[calc(100%-8px)] z-0 shadow-md shadow-white/10 group-hover:shadow-[#ccff00]/20" />
                
                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <ChevronRight className="w-7 h-7 text-black" strokeWidth={2} />
                </div>
                
                {/* Text */}
                <span className="relative z-10 font-extrabold text-[15px] text-white transition-colors duration-500 group-hover:text-black">
                  Know More
                </span>
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
                <Image
                  className="w-9 h-9 rounded-full border-2 border-[#181818] object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Counselor female 1"
                  width={36}
                  height={36}
                />
                <Image
                  className="w-9 h-9 rounded-full border-2 border-[#181818] object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Counselor male 1"
                  width={36}
                  height={36}
                />
                <Image
                  className="w-9 h-9 rounded-full border-2 border-[#181818] object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Counselor female 2"
                  width={36}
                  height={36}
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
                <div className="flex items-center gap-3 w-full md:pr-2 group">
                  <div className="w-10 h-10 rounded-full bg-white group-hover:bg-[#ccff00] flex items-center justify-center shrink-0 shadow-lg shadow-black/25 transition-all duration-300">
                    <Wallet className="w-4.5 h-4.5 text-neutral-950 transition-colors duration-300" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-extrabold text-sm text-white tracking-tight leading-snug transition-colors duration-300 group-hover:text-[#ccff00]">Fee Support</h3>
                    <p className="text-[11px] text-neutral-400 font-light mt-0.5 leading-normal">Clear tuition & scholarships</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-3 w-full md:border-l border-neutral-800/80 md:pl-5 py-1 border-t md:border-t-0 pt-6 md:pt-1 group">
                  <div className="w-10 h-10 rounded-full bg-white group-hover:bg-[#ccff00] flex items-center justify-center shrink-0 shadow-lg shadow-black/25 transition-all duration-300">
                    <Check className="w-4.5 h-4.5 text-neutral-950 transition-colors duration-300" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-extrabold text-sm text-white tracking-tight leading-snug transition-colors duration-300 group-hover:text-[#ccff00]">Verified Data</h3>
                    <p className="text-[11px] text-neutral-400 font-light mt-0.5 leading-normal">Real info over marketing</p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-3 w-full md:border-l border-neutral-800/80 md:pl-5 py-1 border-t md:border-t-0 pt-6 md:pt-1 group">
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
        </div>
        {/* Right Column */}
        <div className="lg:col-span-5 w-full mt-6 lg:mt-0">
          <RightTallCard />
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Expertise Section */}
      <ExpertiseSection />

      {/* Network Section */}
      <div className="w-full flex flex-col gap-8 mt-7 mb-7">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <span className="w-8 md:w-22 h-0.5 bg-[#ccff00]" />
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Our Network
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base max-w-2xl font-light leading-relaxed">
            Join a thriving community of ambitious individuals placed at the world's most prestigious institutions and organizations.
          </p>
        </div>

        {/* University Ticker */}
        <div
          className="w-full overflow-hidden relative select-none py-8"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
        >
          <Marquee pauseOnHover repeat={6} className="w-full flex items-center">
            {["HARVARD", "STANFORD", "MIT", "OXFORD", "CAMBRIDGE", "YALE", "PRINCETON", "COLUMBIA"].map((uni, idx) => (
              <span key={idx} className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-widest px-6 md:px-10 hover:text-[#ccff00] transition-colors duration-300">
                {uni}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
      <Testimonials />
      <FAQ />
      {/* <Footer /> */}
    </div>
  );
}