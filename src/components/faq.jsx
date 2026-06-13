"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is the typical success rate for your students?",
    answer: "Our students consistently achieve a 95% acceptance rate to top-tier universities globally. This is driven by our highly personalized, data-backed approach to profile building and application strategy.",
  },
  {
    question: "How does the 1-on-1 mentorship program work?",
    answer: "You are paired with a dedicated advisor who has personally successfully navigated the admissions process at elite institutions. You'll have regular video consultations, unlimited essay revisions, and direct access for strategic questions.",
  },
  {
    question: "Do you provide support for scholarships and financial aid?",
    answer: "Absolutely. We seamlessly integrate financial strategy into the application process. We help identify merit-based scholarships, guide you through financial aid forms, and optimize your narrative to maximize funding opportunities.",
  },
  {
    question: "When is the best time to start my application process?",
    answer: "While we can accommodate accelerated timelines, we highly recommend starting 12 to 18 months before your intended intake. This allows ample time for profile enhancement, standardized test prep, and crafting a flawless narrative.",
  },
  {
    question: "How is Career Guide Global different from other agencies?",
    answer: "We don't use cookie-cutter templates. We focus on uncovering your unique personal brand. Furthermore, our mentors are not just counselors; they are industry professionals and alumni from the very institutions you are targeting.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-10 mt-18">
      {/* Subtle Yellow/Lime Damp Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-[#ccff00]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="container relative z-10">
        {/* Top Heading */}
      <div className="flex flex-col items-end gap-4 mb-16 text-right w-full">
        <div className="flex items-center justify-end gap-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <span className="w-8 md:w-22 h-0.5 bg-[#ccff00]" />
        </div>
        <p className="text-neutral-400 text-sm md:text-base max-w-xl font-light leading-relaxed">
          Everything you need to know about how we help you secure your spot at the world's most prestigious institutions.
        </p>
      </div>

      <div className="w-full flex flex-col">
        <div className="w-full border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-6 md:py-8 group transition-colors duration-300 text-left"
                >
                  <span 
                    className={cn(
                      "text-base md:text-xl font-bold transition-colors duration-300 pr-6 leading-tight",
                      isOpen ? "text-[#ccff00]" : "text-white group-hover:text-neutral-300"
                    )}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                    className={cn(
                      "flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-colors duration-300",
                      isOpen 
                        ? "border-[#ccff00] text-[#ccff00]" 
                        : "border-white/20 text-neutral-400 group-hover:border-white/40 group-hover:text-white"
                    )}
                  >
                    <Plus className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <p className="pb-8 text-neutral-400 text-sm md:text-base font-light leading-relaxed pr-10">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
