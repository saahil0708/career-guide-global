'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { Wallet, CheckCircle2, Target, ChevronRight, Compass, Globe2, FileText, Plane, Brain, Search, PenTool, GraduationCap } from "lucide-react";
import Navbar from "@/components/navbar";
import { FluidArrowRight } from "@/components/fluid-arrow";
import MVPTestimonials from "@/components/mvpblocks/testimonials-marquee";
import HowItWorks from "@/components/how-it-works";

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
    <div className="min-h-screen bg-gray-200 text-neutral-900 relative overflow-hidden">
      
      {/* Dynamic Red Flashes / Light Beams from Multiple Angles */}
      {/* Top Left Flash */}
      <div className="absolute top-[-10%] left-[-20%] w-[150vw] h-[45vh] bg-gradient-to-br from-[#ca0019]/40 via-[#ca0019]/15 to-transparent -rotate-[20deg] blur-[100px] pointer-events-none z-0" />
      
      {/* Right Side Flash */}
      <div className="absolute top-[25%] right-[-30%] w-[140vw] h-[60vh] bg-gradient-to-bl from-[#ca0019]/35 via-[#ca0019]/10 to-transparent rotate-[15deg] blur-[120px] pointer-events-none z-0" />

      {/* Bottom Flash */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[120vw] h-[40vh] bg-gradient-to-t from-[#ca0019]/40 via-transparent to-transparent blur-[80px] pointer-events-none z-0" />

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

      {/* Hero Container */}
      <main className="max-w-[1340px] bg-none mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-10">

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
                className="w-full h-full object-cover scale-105 object-center"
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
            className="hidden lg:block absolute top-[83%] -translate-y-1/2 right-4 lg:-right-1 z-20 select-none pointer-events-auto"
          >
            <button className="group relative flex items-center h-12 w-[185px] cursor-pointer">
              {/* Expanding pill background — anchored left, grows rightward */}
              <span className="absolute left-0 top-0 h-12 w-12 group-hover:w-full bg-neutral-900 group-hover:bg-[#ca0019] rounded-full transition-all duration-350 ease-in-out shadow-lg" />

              {/* Arrow icon — always in the circle on the left */}
              <span className="relative z-10 w-12 h-12 flex items-center justify-center shrink-0">
                <ChevronRight size={22} className="text-white" />
              </span>

              {/* Know More text — always visible, colour flips to white as pill sweeps over it */}
              <span className="relative z-10 ml-3 group-hover:text-white text-black font-extrabold text-xs tracking-wider uppercase whitespace-nowrap transition-colors duration-150 delay-150">
                Know More
              </span>
            </button>
          </motion.div>

          {/* Widget 2: 1,000+ Students (Step 2 notch: y center ~93% of 620px → bottom-7) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={widgetVariants}
            className="hidden lg:flex absolute bottom-4.5 right-4 lg:-right-1 z-20 w-[240px] items-center gap-3.5 select-none pointer-events-auto"
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
              <span className="relative z-10 ml-5 text-white font-extrabold text-xs tracking-wider uppercase whitespace-nowrap transition-colors duration-150 delay-150">
                Know More
              </span>
            </button>
          </motion.div>

        </div>

      </main>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Our Expertise / What We Do Section (Bento Grid) */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-20">

        {/* Header with vertical bar and description */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-12 lg:mb-16 gap-6 lg:gap-12">
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="hidden md:block w-1.5 bg-[#ca0019] rounded-full origin-top"
            />
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-[#ca0019] font-bold tracking-widest uppercase text-sm mb-3"
              >
                Our Expertise
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight"
              >
                What We Do
              </motion.h2>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(220px,_auto)] lg:auto-rows-[220px]"
        >

          {/* Card 1: Wide (Career Counseling) */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
            className="lg:col-span-2 bg-gray-50 rounded-4xl p-6 lg:p-8 relative overflow-hidden group shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-500 flex flex-col md:flex-row gap-8 justify-between"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-gray-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

            <div className="relative z-10 flex-1 flex flex-col justify-between">
              <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:-translate-y-1 transition-transform duration-300 shrink-0 border border-neutral-700/50">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div className="mt-6">
                <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-2">Career Counseling & Mentorship</h3>
                <p className="text-sm lg:text-base text-neutral-500 font-medium leading-relaxed max-w-xl">Expert guidance to identify your unique strengths, align your passions, and map out the perfect academic and professional career path.</p>
              </div>
            </div>

            {/* Right Side 3D Illustration */}
            <div className="relative z-10 hidden md:flex w-56 shrink-0 items-center justify-end pointer-events-none select-none -mr-4 mb-6">
              <motion.div
                // animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/mentor.png"
                  alt="Career Counseling Illustration"
                  width={220}
                  height={220}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2: Square (University Shortlisting - Red Background) */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
            className="bg-[#ca0019] rounded-4xl p-6 lg:p-8 relative overflow-hidden group shadow-lg hover:shadow-2xl hover:shadow-[#ca0019]/40 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#ca0019] to-[#a8001a] pointer-events-none" />
            <div className="relative z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:-translate-y-1 transition-transform duration-300 shrink-0">
              <Globe2 className="w-5 h-5 text-white" />
            </div>
            <div className="relative z-10 mt-6">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">University Shortlisting</h3>
              <p className="text-sm lg:text-base text-white/80 font-medium leading-relaxed">Data-driven matchmaking for the world's top universities.</p>
            </div>
          </motion.div>

          {/* Card 3: Square (Application Support - Red Background) */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
            className="bg-[#ca0019] rounded-4xl p-6 lg:p-8 relative overflow-hidden group shadow-lg hover:shadow-2xl hover:shadow-[#ca0019]/40 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-[#ca0019] to-[#a8001a] pointer-events-none" />
            <div className="relative z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:-translate-y-1 transition-transform duration-300 shrink-0">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="relative z-10 mt-6">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Application Support</h3>
              <p className="text-sm lg:text-base text-white/80 font-medium leading-relaxed">Crafting compelling narratives to build winning applications.</p>
            </div>
          </motion.div>

          {/* Card 4: Wide (Psychometric Testing) */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
            className="lg:col-span-2 bg-gray-50 rounded-4xl p-6 lg:p-8 relative overflow-hidden group shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-500 flex flex-col md:flex-row gap-8 justify-between"
          >
            <div className="absolute right-0 bottom-0 w-48 h-48 bg-gray-50 rounded-tl-full opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none origin-bottom-right" />

            <div className="relative z-10 flex-1 flex flex-col justify-between">
              <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300 shrink-0 border border-neutral-700/50">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="mt-6">
                <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-2">Psychometric Testing & Analysis</h3>
                <p className="text-sm lg:text-base text-neutral-500 font-medium leading-relaxed max-w-xl">Assessments to uncover your innate talents, personality traits, and strengths, ensuring you pursue a career path that truly fits you.</p>
              </div>
            </div>

            {/* Right Side 3D Illustration */}
            <div className="relative z-10 hidden md:flex w-56 shrink-0 items-center justify-end pointer-events-none select-none -mr-4">
              <motion.div
                // animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Image
                  src="/psychometric_testing_red_black.png"
                  alt="Psychometric Testing Illustration"
                  width={220}
                  height={220}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* Our Network / Infinite Marquee Section */}
      <section className="w-full py-20 lg:py-24 relative overflow-hidden">
        {/* Sweeping Red Flash for Our Network */}
        <div className="absolute top-[30%] right-[-15%] w-[120vw] h-[50vh] bg-gradient-to-bl from-[#ca0019]/40 via-[#ca0019]/10 to-transparent rotate-[10deg] blur-[100px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col items-end text-right">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4 mb-3 justify-end w-full"
          >
            <span className="w-12 h-[2px] bg-[#ca0019]"></span>
            <p className="text-[#ca0019] font-bold tracking-widest uppercase text-sm">
              Our Network
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight max-w-xl"
          >
            Trusted by students at the world's leading institutions
          </motion.h2>
        </div>

        {/* Marquee Wrapper with edge fade masks */}
        <div
          className="relative w-full overflow-hidden flex py-10"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        >
          {/* We create two exact duplicate tracks running side by side and translate them by -100% */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="flex shrink-0 items-center justify-around min-w-full gap-16 lg:gap-24 px-8 lg:px-12"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            >
              {[
                { name: "HARVARD", style: "font-serif tracking-widest text-3xl lg:text-4xl" },
                { name: "OXFORD", style: "font-serif tracking-widest text-3xl lg:text-4xl" },
                { name: "STANFORD", style: "font-serif tracking-[0.2em] text-3xl lg:text-4xl" },
                { name: "CAMBRIDGE", style: "font-serif tracking-widest text-3xl lg:text-4xl" },
                { name: "M I T", style: "font-sans font-black tracking-[0.3em] text-3xl lg:text-4xl" },
                { name: "YALE", style: "font-serif tracking-[0.25em] text-3xl lg:text-4xl" },
                { name: "COLUMBIA", style: "font-serif tracking-widest text-3xl lg:text-4xl" }
              ].map((uni, idx) => (
                <div key={idx} className={`text-gray-500 font-bold ${uni.style} select-none pointer-events-none hover:text-[#ca0019]/60 transition-colors duration-500`}>
                  {uni.name}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* MVPBlocks Testimonials Component */}
      <MVPTestimonials />
    </div>
  );
}