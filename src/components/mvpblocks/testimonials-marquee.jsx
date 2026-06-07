"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Highlight({ children, className }) {
  return (
    <span
      className={cn(
        "bg-[#ca0019]/10 p-1 py-0.5 font-bold text-[#ca0019]",
        className
      )}
    >
      {children}
    </span>
  );
}

export function TestimonialCard({
  quote,
  name,
  uni,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-2xl p-5",
        "bg-[#171717] border border-neutral-800",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(202,0,25,0.1)] hover:border-[#ca0019]/50 overflow-hidden relative group",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ca0019]/0 via-transparent to-[#ca0019]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="text-neutral-300 text-sm font-normal leading-relaxed w-full relative z-10 select-none">
        {quote}
        <div className="flex flex-row pt-3 gap-1">
          <Star className="size-4 fill-[#ca0019] text-[#ca0019]" />
          <Star className="size-4 fill-[#ca0019] text-[#ca0019]" />
          <Star className="size-4 fill-[#ca0019] text-[#ca0019]" />
          <Star className="size-4 fill-[#ca0019] text-[#ca0019]" />
          <Star className="size-4 fill-[#ca0019] text-[#ca0019]" />
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-3 mt-2 relative z-10 select-none">
        <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 ring-1 ring-[#ca0019]/20 ring-offset-2 ring-offset-[#171717]">
          <span className="text-white text-sm font-bold">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="text-white text-sm font-medium">{name}</p>
          <p className="text-neutral-400 text-xs font-normal">{uni}</p>
        </div>
      </div>
    </div>
  );
}

const testimonialsData = {
  col1: [
    { 
      name: "Sarah Chen", 
      uni: "Stanford", 
      quote: <>The strategic roadmap completely changed my approach. <Highlight>They didn't just help with essays;</Highlight> they helped me build a profile that couldn't be ignored.</>
    },
    { 
      name: "James Wilson", 
      uni: "Harvard", 
      quote: <>They found the unique thread in my extracurriculars and <Highlight>helped me weave a narrative</Highlight> that was authentic and compelling.</>
    },
  ],
  col2: [
    { 
      name: "Rohan Patel", 
      uni: "MIT", 
      quote: <>I was overwhelmed by the application process. <Highlight>The psychometric analysis pinpointed exactly</Highlight> what engineering program fit my strengths.</>
    },
    { 
      name: "Aisha Khan", 
      uni: "Columbia", 
      quote: <>The personalized attention is what sets them apart. <Highlight>My counselor was available 24/7.</Highlight></>
    },
  ],
  col3: [
    { 
      name: "Elena Rodriguez", 
      uni: "Oxford", 
      quote: <>Their guidance on the Oxford personal statement and admissions test was unparalleled. <Highlight>I felt perfectly prepared.</Highlight></>
    },
    { 
      name: "David Kim", 
      uni: "Yale", 
      quote: <>I thought my dream was out of reach, but their strategic shortlisting and application building <Highlight>made it a reality.</Highlight></>
    },
  ],
  col4: [
    { 
      name: "Michael Chang", 
      uni: "Princeton", 
      quote: <>The mock interviews were intense, but they prepared me for the exact questions the panel asked. <Highlight>Incredible support system.</Highlight></>
    },
    { 
      name: "Sophia Martinez", 
      uni: "Cambridge", 
      quote: <>From profile evaluation to final submit, they architected a masterplan that <Highlight>brought out my best qualities.</Highlight></>
    },
  ]
};

export default function Testimonials() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 lg:py-32 relative overflow-hidden">
      {/* Red Flash extending from the left */}
      <div className="absolute top-[20%] left-[-15%] w-[80vw] h-[60vh] bg-gradient-to-r from-[#ca0019]/40 via-[#ca0019]/10 to-transparent blur-[140px] pointer-events-none z-0 mix-blend-screen" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="w-12 h-[2px] bg-[#ca0019]"></span>
              <p className="text-[#ca0019] font-bold tracking-widest uppercase text-sm">
                Success Stories
              </p>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]"
            >
              Don't just take our word for it.
            </motion.h2>
          </div>
        </div>

        {/* Infinite Vertical Marquee Testimonials */}
        <div 
          className="relative w-full h-[600px] lg:h-[700px] overflow-hidden mt-12"
          style={{ maskImage: "linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 h-full">
            
            {/* Column 1 (Scrolls UP) */}
            <motion.div 
              className="flex flex-col gap-4 lg:gap-6 min-h-max"
              animate={{ y: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
            >
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col gap-4 lg:gap-6">
                  {testimonialsData.col1.map((testimonial, idx) => (
                    <TestimonialCard key={idx} {...testimonial} />
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Column 2 (Scrolls DOWN) */}
            <motion.div 
              className="hidden sm:flex flex-col gap-4 lg:gap-6 min-h-max"
              animate={{ y: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
            >
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col gap-4 lg:gap-6">
                  {testimonialsData.col2.map((testimonial, idx) => (
                    <TestimonialCard key={idx} {...testimonial} />
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Column 3 (Scrolls UP at different speed) */}
            <motion.div 
              className="hidden md:flex flex-col gap-4 lg:gap-6 min-h-max"
              animate={{ y: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            >
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col gap-4 lg:gap-6">
                  {testimonialsData.col3.map((testimonial, idx) => (
                    <TestimonialCard key={idx} {...testimonial} />
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Column 4 (Scrolls DOWN at different speed) */}
            <motion.div 
              className="hidden lg:flex flex-col gap-4 lg:gap-6 min-h-max"
              animate={{ y: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 70 }}
            >
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col gap-4 lg:gap-6">
                  {testimonialsData.col4.map((testimonial, idx) => (
                    <TestimonialCard key={idx} {...testimonial} />
                  ))}
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
