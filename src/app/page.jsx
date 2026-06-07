'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { Wallet, CheckCircle2, Target, ChevronRight } from "lucide-react";
import Navbar from "@/components/navbar";
import { FluidArrowRight } from "@/components/fluid-arrow";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.15, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const widgetVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-neutral-900 relative">
      {/* SVG Clip Path Definition (Aspect-ratio corrected coordinates for perfect circular curves) */}
      <svg className="w-0 h-0 absolute pointer-events-none">
        <defs>
          <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
            <path d="M 0, 0.065
                     C 0, 0.03, 0.015, 0, 0.03, 0
                     L 0.975, 0
                     C 0.99, 0, 1, 0.03, 1, 0.065
                     L 1, 0.72
                     C 1, 0.755, 0.99, 0.775, 0.975, 0.775
                     L 0.875, 0.775
                     C 0.86, 0.775, 0.85, 0.795, 0.85, 0.825
                     L 0.85, 0.845
                     C 0.85, 0.875, 0.84, 0.895, 0.83, 0.895
                     L 0.83, 0.895
                     C 0.817, 0.895, 0.805, 0.915, 0.805, 0.945
                     L 0.805, 0.96
                     C 0.805, 0.983, 0.795, 1.0, 0.78, 1.0
                     L 0.025, 1.0
                     C 0.01, 1.0, 0, 0.97, 0, 0.935
                     Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Floating Navbar */}
      <Navbar />

      {/* Hero Container - Premium max-w-[1440px] */}
      <main className="max-w-[1440px] bg-none mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28 pb-10">

        {/* Relative layout wrapper containing clipped div and negative-space widgets */}
        <div className="relative w-full h-auto lg:h-[620px] select-none flex flex-col lg:block">

          {/* 1. Main Clipped Hero Card */}
          <div className="w-full h-full min-h-[500px] lg:min-h-0 relative bg-white overflow-hidden flex flex-col justify-center lg:justify-start pt-12 sm:pt-20 px-6 sm:px-12 md:px-16 lg:px-20 pb-12 lg:pb-0 rounded-[2rem] lg:rounded-none lg:[clip-path:url(#heroClip)]">

            {/* Full-bleed Hero Background Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none rounded-[2rem] lg:rounded-none"
            >
              <img
                src="/imageDark.png"
                alt="Hero Background"
                className="w-full h-full object-cover object-center"
              />
              {/* Dark gradient overlay — ensures left text is always legible */}
              <div
                style={{
                  background: "linear-gradient(to right, rgba(10,5,5,0.72) 0%, rgba(10,5,5,0.50) 40%, rgba(10,5,5,0.10) 75%, rgba(0,0,0,0.0) 100%)"
                }}
                className="absolute inset-0 hidden sm:block"
              />
              <div className="absolute inset-0 bg-black/40 sm:hidden" />
            </motion.div>

            {/* Hero Text and Buttons (Left Column, z-10 for overlapping layer overlay) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-2xl relative z-10"
            >
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Shape Your
                <span className="text-[#ca0019]"> Career.</span> Start Here.
              </motion.h1>
              <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-white/70 mt-4 sm:mt-6 leading-relaxed font-medium max-w-md">
                Expert career guidance and mentorship to turn your academic knowledge into professional success.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-8 lg:mt-10 w-full sm:w-auto">
                {/* Primary CTA — crimson red */}
                <button className="w-full sm:w-auto justify-center bg-[#ca0019] text-white rounded-full font-extrabold px-7 py-4 text-sm tracking-tight flex items-center gap-3 hover:bg-[#a8001a] transition-colors shadow-xl shadow-[#ca0019]/30 group">
                  Find My College
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <FluidArrowRight size={12} className="text-white" />
                  </span>
                </button>

                {/* Ghost Outline Button */}
                <button className="w-full sm:w-auto justify-center border border-white/30 text-white rounded-full font-bold px-7 py-4 text-sm tracking-tight hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Explore Colleges
                </button>
              </motion.div>
            </motion.div>

            {/* 3-Column Features Row at the bottom-left */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="absolute bottom-20 left-8 sm:left-16 lg:left-20 right-[320px] hidden xl:flex items-center gap-12 z-10"
            >
              {/* Feature 1 */}
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 shadow-sm backdrop-blur-sm">
                  <Wallet className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-white tracking-wide uppercase">Fee Support</p>
                  <p className="text-[10px] text-white/55 font-semibold">Clear tuition &amp; scholarships</p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 shadow-sm backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-white tracking-wide uppercase">Verified Data</p>
                  <p className="text-[10px] text-white/55 font-semibold">Real info, no marketing spin</p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 shadow-sm backdrop-blur-sm">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-white tracking-wide uppercase">Placement Focus</p>
                  <p className="text-[10px] text-white/55 font-semibold">Strong career outcomes</p>
                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* 2. Negative Space Widgets (Floating directly on the page background in the wave cutouts - Desktop Only) */}

          {/* Widget 1: Know More — circle expands right into red pill on hover */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={widgetVariants}
            className="hidden lg:block absolute top-[83%] -translate-y-1/2 right-4 lg:right-1 z-20 select-none pointer-events-auto"
          >
            <button className="group relative flex items-center h-12 w-[185px] cursor-pointer">
              {/* Expanding pill background — anchored left, grows rightward */}
              <span className="absolute left-0 top-0 h-12 w-12 group-hover:w-full bg-neutral-900 group-hover:bg-[#ca0019] rounded-full transition-all duration-350 ease-in-out shadow-lg" />

              {/* Arrow icon — always in the circle on the left */}
              <span className="relative z-10 w-12 h-12 flex items-center justify-center shrink-0">
                <ChevronRight size={18} className="text-white" />
              </span>

              {/* Know More text — always visible, colour flips to white as pill sweeps over it */}
              <span className="relative z-10 ml-5 text-neutral-900 group-hover:text-white font-extrabold text-xs tracking-wider uppercase whitespace-nowrap transition-colors duration-150 delay-150">
                Know More
              </span>
            </button>
          </motion.div>

          {/* Widget 2: 1,000+ Students (Step 2 notch: y center ~93% of 620px → bottom-7) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={widgetVariants}
            className="hidden lg:flex absolute bottom-4.5 right-4 lg:right-4 z-20 w-[240px] items-center gap-3.5 select-none pointer-events-auto"
          >
            {/* Overlapping student portraits */}
            <div className="flex -space-x-3 shrink-0">
              <img
                className="w-8 h-8 rounded-full border-2 border-neutral-50 object-cover shadow-sm"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Student"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-neutral-50 object-cover shadow-sm"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Student"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-neutral-50 object-cover shadow-sm"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                alt="Student"
              />
            </div>
            <div className="leading-none">
              <p className="text-[13px] font-extrabold text-neutral-900">1,000+ Students</p>
              <p className="text-[10px] text-neutral-500 font-bold mt-0.5">Joined our community</p>
            </div>
          </motion.div>

          {/* Mobile/Tablet Widgets (Shown stacked below hero) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={widgetVariants}
            className="lg:hidden flex flex-col sm:flex-row items-center justify-between gap-6 mt-8 px-2 w-full"
          >
            {/* 1,000+ Students Mobile */}
            <div className="flex items-center gap-3.5 select-none pointer-events-auto">
              <div className="flex -space-x-3 shrink-0">
                <img className="w-8 h-8 rounded-full border-2 border-neutral-50 object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Student" />
                <img className="w-8 h-8 rounded-full border-2 border-neutral-50 object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Student" />
                <img className="w-8 h-8 rounded-full border-2 border-neutral-50 object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Student" />
              </div>
              <div className="leading-none text-left">
                <p className="text-[13px] font-extrabold text-neutral-900">1,000+ Students</p>
                <p className="text-[10px] text-neutral-500 font-bold mt-0.5">Joined our community</p>
              </div>
            </div>

            {/* Know More Mobile */}
            <button className="group relative flex items-center h-12 w-[185px] cursor-pointer">
              <span className="absolute left-0 top-0 h-12 w-12 group-hover:w-full bg-neutral-900 group-hover:bg-[#ca0019] rounded-full transition-all duration-350 ease-in-out shadow-lg" />
              <span className="relative z-10 w-12 h-12 flex items-center justify-center shrink-0">
                <ChevronRight size={18} className="text-white" />
              </span>
              <span className="relative z-10 ml-5 text-neutral-900 group-hover:text-white font-extrabold text-xs tracking-wider uppercase whitespace-nowrap transition-colors duration-150 delay-150">
                Know More
              </span>
            </button>
          </motion.div>

        </div>

      </main>
    </div>
  );
}