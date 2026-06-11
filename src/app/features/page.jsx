'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Briefcase, TrendingUp } from 'lucide-react';

export default function FeaturesPage() {
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8 pt-2"
        >
          <h1 className="text-xs font-bold uppercase tracking-widest text-[#ccff00] mb-3">
            Core Capabilities
          </h1>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Engineered for Career Growth
          </p>
          <p className="text-neutral-400 max-w-xl mt-3 text-sm font-light leading-relaxed">
            Explore the professional toolkits built to unlock premium global placements and maximum compensation values.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4"
        >
          {/* Feature 1 */}
          <motion.div 
            variants={fadeIn}
            className="group p-5 rounded-2xl border border-neutral-900 bg-neutral-950/40 hover:border-neutral-800 hover:bg-neutral-950/80 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/20 flex items-center justify-center text-[#ccff00] mb-4 group-hover:scale-105 transition-transform duration-300">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold mb-2 text-white">Dynamic Roadmaps</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Step-by-step guidance computed using real-time job market requirements, tracking technologies and credentials needed.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            variants={fadeIn}
            className="group p-5 rounded-2xl border border-neutral-900 bg-neutral-950/40 hover:border-neutral-800 hover:bg-neutral-950/80 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-105 transition-transform duration-300">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold mb-2 text-white">Global Placement</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Direct referrals and application channels to partner organizations across North America, Europe, and Asia.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            variants={fadeIn}
            className="group p-5 rounded-2xl border border-neutral-900 bg-neutral-950/40 hover:border-neutral-800 hover:bg-neutral-950/80 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-105 transition-transform duration-300">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold mb-2 text-white">Salary Optimization</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Advanced AI insights to help you value your skills and negotiate superior packages based on localized metrics.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
