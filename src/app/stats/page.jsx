'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Zap } from 'lucide-react';

export default function StatsPage() {
  // Animation presets
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true, margin: '-100px' }
  };

  return (
    <div className="w-full text-white py-4 overflow-y-auto max-h-[calc(100vh-12rem)] pr-2 scrollbar-thin scrollbar-thumb-neutral-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-8">
          {/* Text side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h1 className="text-xs font-bold uppercase tracking-widest text-[#ccff00] mb-3">
              Proven Track Record
            </h1>
            <p className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Our network spans across the globe.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
              We empower engineers, directors, and executives to unlock their highest market potential with verifiable success across tech, finance, and product fields.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/20 flex items-center justify-center text-[#ccff00] shrink-0">
                  <Sparkles className="w-3 h-3" />
                </div>
                <span className="text-xs font-medium text-neutral-300">98% Placement Rate</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Shield className="w-3 h-3" />
                </div>
                <span className="text-xs font-medium text-neutral-300">Confidential Matches</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Zap className="w-3 h-3" />
                </div>
                <span className="text-xs font-medium text-neutral-300">Average +38% Salary</span>
              </div>
            </div>
          </motion.div>

          {/* Counters side */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div 
              variants={fadeIn}
              className="p-5 rounded-2xl bg-neutral-950/40 border border-neutral-900 text-center hover:border-neutral-800 transition-colors"
            >
              <div className="text-3xl font-extrabold text-white mb-1">15k+</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-400">Placed Candidates</div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="p-5 rounded-2xl bg-neutral-950/40 border border-neutral-900 text-center hover:border-neutral-800 transition-colors"
            >
              <div className="text-3xl font-extrabold text-white mb-1">120+</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-400">Expert Mentors</div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="p-5 rounded-2xl bg-neutral-950/40 border border-neutral-900 text-center hover:border-neutral-800 transition-colors"
            >
              <div className="text-3xl font-extrabold text-white mb-1">30+</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-400">Countries Guided</div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="p-5 rounded-2xl bg-neutral-950/40 border border-neutral-900 text-center hover:border-neutral-800 transition-colors"
            >
              <div className="text-3xl font-extrabold text-white mb-1">$42M+</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-400">Negotiated Comp</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
