'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import dynamic from 'next/dynamic';
import { FluidArrowRight } from '@/components/fluid-arrow';
import Image from 'next/image';

const MapBackground = dynamic(() => import('@/components/ui/map-background'), {
  ssr: false,
});

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
      toast.success('Message sent successfully!', {
        description: 'Our team will review your message and contact you shortly.',
      });
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen text-white bg-[#181818] flex flex-col overflow-x-hidden relative">
      <div className="px-4 sm:px-8 lg:px-12 z-10 relative">
        <Navbar />

        <main className="w-full flex-1 mt-12 md:mt-20 max-w-[1400px] mx-auto pb-20 md:pb-32">

          {/* Header Section */}
          <div className="relative w-full flex flex-col items-center z-30 mb-16 md:mb-24 px-4">
            {/* Watermark behind heading */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden flex justify-center pointer-events-none select-none z-0">
              <span className="text-[100px] md:text-[140px] lg:text-[200px] font-black uppercase tracking-tighter text-white/[0.02] whitespace-nowrap">
                CONNECT
              </span>
            </div>

            <div className="relative z-10 flex flex-col items-center mt-4 md:mt-8">
              <div className="flex items-center gap-6 mb-2 md:mb-4">
                <div className="w-10 md:w-16 border-b border-dashed border-[#ccff00]/60"></div>
                <span className="text-[#ccff00] font-mono text-[9px] md:text-xs tracking-[0.3em] uppercase">Reach Out</span>
                <div className="w-10 md:w-16 border-b border-dashed border-[#ccff00]/60"></div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mb-4 lg:mb-6 text-center">
                Get in Touch
              </h1>
              <p className="text-neutral-400 text-sm md:text-base max-w-xl font-light leading-relaxed text-center">
                Have a question about our programs or want to start your global education journey? We're here to help you navigate your future.
              </p>
            </div>
          </div>

          {/* Main Content Split */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 xl:gap-24 relative z-20">

            {/* Left Column: UI Card */}
            <div className="w-full lg:w-5/12 xl:w-5/12 relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#222222] to-[#111111] border border-white/5 p-8 sm:p-10 lg:p-12 min-h-[500px] flex flex-col justify-between shadow-[0_0_40px_rgba(204,255,0,0.03)]">

              <div className="relative z-10 flex flex-col gap-8 mt-2">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-[2px] bg-[#ccff00]"></div>
                    <span className="text-[10px] font-bold text-[#ccff00] tracking-widest uppercase">Global Support</span>
                  </div>
                  <h3 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.1]">
                    Build Your<br />
                    <span className="text-[#ccff00]">Future.</span>
                  </h3>
                </div>

                <div className="flex flex-col gap-6 mt-4 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/20 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#ccff00]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mb-1">Email Us</span>
                      <a href="mailto:admissions@career.guide" className="text-sm font-medium text-white hover:text-[#ccff00] transition-colors">admissions@career.guide</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/20 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#ccff00]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mb-1">Call Us</span>
                      <a href="tel:+18005550199" className="text-sm font-medium text-white hover:text-[#ccff00] transition-colors">+1 (800) 555-0199</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#ccff00]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mb-1">Visit Us</span>
                      <span className="text-sm font-medium text-white">123 Innovation Drive,<br />Tech District, NY 10001</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Radial glow for globe integration */}
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#ccff00]/15 to-transparent rounded-full blur-[60px] pointer-events-none z-0"></div>

              {/* Premium Web 3D Illustration */}
              <div 
                className="absolute right-[-10%] bottom-[-10%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] pointer-events-none z-0 opacity-70 mix-blend-screen"
                style={{ 
                  maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)', 
                  WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)' 
                }}
              >
                <div className="w-full h-full relative">
                  <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" 
                    alt="Premium 3D abstract illustration" 
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                  {/* Tint overlay to perfectly match brand neon yellow */}
                  <div className="absolute inset-0 bg-[#ccff00] mix-blend-color"></div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="w-full lg:w-6/12 xl:w-6/12">
              <div className="w-full bg-transparent p-0 relative">

                <h3 className="text-2xl lg:text-3xl font-black tracking-tight text-white mb-2 uppercase">Send a Message</h3>
                <p className="text-neutral-400 text-sm font-light mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10 animate-in fade-in duration-500">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider ml-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-[#222222]/50 border border-white/5 rounded-xl px-5 py-4 text-white font-medium text-sm placeholder:text-white/20 focus:outline-none focus:border-[#ccff00]/50 focus:bg-[#222222] transition-all duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider ml-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-[#222222]/50 border border-white/5 rounded-xl px-5 py-4 text-white font-medium text-sm placeholder:text-white/20 focus:outline-none focus:border-[#ccff00]/50 focus:bg-[#222222] transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider ml-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full bg-[#222222]/50 border border-white/5 rounded-xl px-5 py-4 text-white font-medium text-sm placeholder:text-white/20 focus:outline-none focus:border-[#ccff00]/50 focus:bg-[#222222] transition-all duration-300"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider ml-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your academic goals..."
                      className="w-full bg-[#222222]/50 border border-white/5 rounded-xl px-5 py-4 text-white font-medium text-sm placeholder:text-white/20 focus:outline-none focus:border-[#ccff00]/50 focus:bg-[#222222] transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <div className="mt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative overflow-hidden inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 rounded-full font-extrabold text-xs uppercase tracking-widest bg-[#ccff00] text-[#181818] disabled:opacity-70 transition-colors hover:bg-white duration-500"
                    >
                      <div className="relative h-[16px] overflow-hidden">
                        <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:-translate-y-[32px]">
                          <span className="flex items-center gap-2 h-[16px] mb-[16px]">
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            {!isSubmitting && <FluidArrowRight className="w-4 h-4 text-[#181818]" />}
                          </span>
                          <span className="flex items-center gap-2 h-[16px]">
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            {!isSubmitting && <FluidArrowRight className="w-4 h-4 text-[#181818]" />}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>

          {/* Map Section */}
          <div className="w-full mt-16 md:mt-24 relative z-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#ccff00]"></div>
                <span className="text-[10px] font-bold text-[#ccff00] tracking-widest uppercase">Our Headquarters</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                Find Us <span className="text-neutral-500">Here.</span>
              </h2>
            </div>
            
            <MapBackground center={[40.7128, -74.006]} zoom={13} />
          </div>

        </main>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#ccff00]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-[#ccff00]/3 rounded-full blur-[150px]"></div>
      </div>
    </div>
  );
}
