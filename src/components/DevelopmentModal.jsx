'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hammer } from 'lucide-react';

export default function DevelopmentModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timeout;
    const handleShow = () => {
      setIsOpen(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    };
    
    window.addEventListener('show-development-modal', handleShow);
    return () => {
      window.removeEventListener('show-development-modal', handleShow);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="dev-toast"
          initial={{ opacity: 0, x: 50, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed top-6 right-6 z-[99999] pointer-events-none"
        >
          <div className="bg-[#0a0a0a] border border-[#ccff00]/30 rounded-xl p-4 shadow-[0_10px_40px_rgba(204,255,0,0.1)] flex items-center gap-4 overflow-hidden relative min-w-[240px]">
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ccff00]/10 to-transparent pointer-events-none" />
            
            <div className="w-10 h-10 rounded-full bg-[#ccff00]/20 flex items-center justify-center text-[#ccff00] shrink-0 border border-[#ccff00]/30">
              <Hammer className="w-4 h-4" />
            </div>
            
            <div className="flex flex-col pr-4">
              <span className="text-[13px] font-bold text-white tracking-wide">In Development</span>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest mt-0.5">Coming Soon</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
