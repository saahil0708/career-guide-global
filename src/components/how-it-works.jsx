"use client";

import { motion } from "framer-motion";
import { ClipboardList, Target, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Discover & Assess",
      description: "We analyze your profile, interests, and academic background to find your true potential.",
      icon: <ClipboardList className="w-6 h-6 text-[#ca0019]" />,
      tiltClass: "-rotate-[6deg] -translate-y-2 hover:rotate-0 hover:translate-y-0",
      isHighlighted: false,
    },
    {
      id: "02",
      title: "Strategize & Plan",
      description: "We build a personalized roadmap, shortlisting the best universities and career paths for you.",
      icon: <Target className="w-6 h-6 text-white" />,
      tiltClass: "rotate-0 scale-105 z-10 shadow-2xl hover:scale-110",
      isHighlighted: true,
    },
    {
      id: "03",
      title: "Execute & Succeed",
      description: "From application essays to interview prep, we guide you all the way to your acceptance letter.",
      icon: <Rocket className="w-6 h-6 text-[#ca0019]" />,
      tiltClass: "rotate-[6deg] -translate-y-2 hover:rotate-0 hover:translate-y-0",
      isHighlighted: false,
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 relative z-10">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-3"
          >
            <span className="w-8 h-[2px] bg-[#ca0019]"></span>
            <span className="text-[#ca0019] font-bold tracking-widest uppercase text-sm">How It Works</span>
            <span className="w-8 h-[2px] bg-[#ca0019]"></span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900"
          >
            Your Journey To Success
          </motion.h2>
        </div>

        {/* 3D Cards Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-6 lg:gap-10 pt-16 relative">
          
          {/* Decorative Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-1/2 z-0" />

          {steps.map((step, idx) => (
            <div key={step.id} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className={`relative flex-shrink-0 w-[320px] h-[420px] rounded-[32px] p-8 transition-all duration-700 cursor-default group overflow-hidden ${step.tiltClass} z-10 ${
                  step.isHighlighted 
                    ? "bg-gradient-to-br from-[#ca0019] via-[#b30016] to-[#8a0011] text-white shadow-[0_30px_60px_-15px_rgba(202,0,25,0.4)] border border-white/10" 
                    : "bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] text-neutral-900 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]"
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Ultra-refined background number */}
                <div 
                  className="absolute -bottom-8 -right-6 text-[160px] font-black opacity-30 select-none z-0 transition-transform group-hover:scale-105 group-hover:-translate-y-2 duration-700 ease-out"
                  style={{ WebkitTextStroke: step.isHighlighted ? "1px rgba(255,255,255,0.2)" : "1px rgba(0,0,0,0.05)", color: "transparent" }}
                >
                  {step.id}
                </div>

                <div className="relative z-10 flex flex-col h-full items-start text-left mt-2">
                  {/* Premium internal pill */}
                  <div className={`mb-8 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase ${
                    step.isHighlighted ? "bg-white/10 text-white border border-white/20" : "bg-gray-100 text-[#ca0019]"
                  }`}>
                    Step {step.id}
                  </div>

                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shrink-0 transition-all duration-500 shadow-sm ${
                    step.isHighlighted ? "bg-white/10 border border-white/20 shadow-black/10 group-hover:scale-110" : "bg-white border border-gray-100 shadow-gray-200/50 group-hover:scale-110"
                  }`}>
                    {step.icon}
                  </div>
                  
                  <h3 className={`text-2xl font-bold tracking-tight mb-4 ${step.isHighlighted ? "text-white" : "text-neutral-900"}`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-[15px] font-medium leading-relaxed flex-grow ${step.isHighlighted ? "text-white/80" : "text-neutral-500"}`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {/* Minimalist Connecting Indicator */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-8 lg:w-16 z-0 opacity-40">
                  <div className="w-full border-t-[2px] border-dashed border-gray-400"></div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
