'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="w-full text-white py-4 overflow-y-auto max-h-[calc(100vh-12rem)] pr-2 scrollbar-thin scrollbar-thumb-neutral-800">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Info side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-xs font-bold uppercase tracking-widest text-[#ccff00] mb-3">
              Let&apos;s Connect
            </h1>
            <p className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Start Your Acceleration Today
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light max-w-sm">
              Have specific queries regarding global work visas, compensation packages, or career alignment? Request a discovery call with our leads.
            </p>
            
            <div className="flex flex-col gap-4 text-xs text-neutral-300">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neutral-500" />
                <span>support@careerguideglobal.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neutral-500" />
                <span>+1 (800) 555-0199</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-neutral-500" />
                <span>San Francisco, California, US</span>
              </div>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-2xl border border-neutral-900 bg-neutral-950/40 hover:border-neutral-800 transition-colors"
          >
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-neutral-950 border border-neutral-850 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#ccff00] transition-all text-white placeholder-neutral-600" 
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-neutral-950 border border-neutral-850 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#ccff00] transition-all text-white placeholder-neutral-600" 
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label htmlFor="msg" className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">Message</label>
                <textarea 
                  id="msg"
                  rows="3"
                  className="w-full bg-neutral-950 border border-neutral-850 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#ccff00] transition-all text-white placeholder-neutral-600 resize-none" 
                  placeholder="Tell us about your objectives..."
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-[#ccff00] text-black font-extrabold text-xs rounded-xl shadow-md active:scale-[0.99] transition-all hover:opacity-90 cursor-pointer"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
