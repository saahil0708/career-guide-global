"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Phone, Calendar, ArrowRight, ShieldCheck, RefreshCw, Clock, ExternalLink } from 'lucide-react'
import Logo from '../../../Images/CCGLW.png'

export default function Maintenance() {
  const [dots, setDots] = useState('.')
  const [progress, setProgress] = useState(72)

  // Animated dots for "Upgrading..."
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '.' : prev + '.'))
    }, 800)
    return () => clearInterval(interval)
  }, [])

  // Slowly creep progress up to 94% over time to make it feel alive
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 94) {
          return prev + 1
        }
        return prev
      })
    }, 12000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen bg-slate-950 text-white flex flex-col justify-between items-center overflow-hidden px-4 py-8 select-none">
      
      {/* 1. Futuristic Glowing Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Neon Red/Orange blob top-left */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '8s' }} />
        {/* Indigo/Violet blob center-right */}
        <div className="absolute top-1/4 -right-40 w-[650px] h-[650px] bg-indigo-600/15 rounded-full blur-[160px] animate-pulse" style={{ animationDuration: '12s' }} />
        {/* Teal/Emerald blob bottom-left */}
        <div className="absolute -bottom-40 -left-20 w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px' 
          }} 
        />
      </div>

      {/* 2. Top Header - Brand Logo */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl flex justify-center items-center z-10"
      >
        <div className="relative w-44 h-24 md:w-52 md:h-28">
          <Image
            src={Logo}
            alt="Career Guide Global Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.header>

      {/* 3. Main Center Glassmorphic Card */}
      <main className="w-full max-w-2xl flex flex-col items-center justify-center z-10 my-auto text-center">
        
        {/* Live Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-inner"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d62332] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#d62332]"></span>
          </span>
          <span className="text-xs md:text-sm font-medium tracking-wider text-gray-300 uppercase">
            Scheduled Maintenance
          </span>
        </motion.div>

        {/* Dynamic Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Upgradation in Progress
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            We are polishing our services and upgrading our core systems to deliver a premium, faster, and more comprehensive career guidance experience. 
            Please check back soon.
          </p>
        </motion.div>

        {/* Premium Upgrade Progress Meter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full mt-10 p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <RefreshCw className="w-24 h-24 text-white animate-spin" style={{ animationDuration: '12s' }} />
          </div>

          <div className="flex justify-between items-center mb-3 text-sm">
            <span className="text-gray-400 font-medium flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#d62332]" /> Upgrade status: Optimizing database{dots}
            </span>
            <span className="font-semibold text-white bg-white/10 px-2 py-0.5 rounded-md">{progress}%</span>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/10">
            <motion.div 
              className="h-full rounded-full bg-gradient-to-r from-[#d62332] via-[#f43f5e] to-rose-400 shadow-[0_0_12px_#d62332]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>

          {/* Additional Info Cards inside progress block */}
          <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/5">
            <div className="text-left">
              <span className="text-xs text-gray-500 block uppercase tracking-wider font-semibold">Expected Online</span>
              <span className="text-sm md:text-base font-semibold text-gray-200 mt-1 block">Less than 1 hour</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-500 block uppercase tracking-wider font-semibold">Support Status</span>
              <span className="text-sm md:text-base font-semibold text-green-400 mt-1 block flex items-center justify-end gap-1">
                <ShieldCheck className="w-4 h-4" /> Active & Secure
              </span>
            </div>
          </div>
        </motion.div>

        {/* Contact/Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mt-10 w-full max-w-md"
        >
          <a
            href="mailto:info@careerguide.com"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#d62332] hover:bg-[#b51d2a] text-white font-semibold transition-all duration-300 shadow-[0_4px_20px_rgba(214,35,50,0.3)] hover:shadow-[0_4px_25px_rgba(214,35,50,0.5)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Mail className="w-5 h-5" />
            Contact Support
          </a>
          <a
            href="tel:+15551234567"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/25 font-semibold transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Phone className="w-5 h-5" />
            Call Helpdesk
          </a>
        </motion.div>
      </main>

      {/* 4. Footer Information & Socials */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-8 mt-12 z-10 text-xs md:text-sm text-gray-500"
      >
        <p>© 2026 Career Guide Global. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="mailto:info@careerguide.com" className="hover:text-white transition-colors flex items-center gap-1">
            Email Us <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span>•</span>
          <span className="text-[#d62332]/80 font-medium">Upgradation in progress — visit back later</span>
        </div>
      </motion.footer>

    </div>
  )
}
