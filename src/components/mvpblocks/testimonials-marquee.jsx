"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/test-marquee";
export function Highlight({ children, className }) {
  return (
    <span
      className={cn(
        "bg-[#ccff00]/10 p-1 py-0.5 font-bold text-[#ccff00]",
        className,
      )}>
      {children}
    </span>
  );
}
export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-6",
        // theme styles
        "border border-white/5 bg-[#1e1e1e] shadow-lg",
        // hover effect
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#ccff00]/20",
        className,
      )}
      {...props}>
      <div className="text-neutral-400 text-sm font-normal select-none leading-relaxed">
        {description}
        <div className="flex flex-row py-2 mt-2">
          <Star className="size-4 fill-[#ccff00] text-[#ccff00]" />
          <Star className="size-4 fill-[#ccff00] text-[#ccff00]" />
          <Star className="size-4 fill-[#ccff00] text-[#ccff00]" />
          <Star className="size-4 fill-[#ccff00] text-[#ccff00]" />
          <Star className="size-4 fill-[#ccff00] text-[#ccff00]" />
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-4 select-none mt-2">
        <img
          width={40}
          height={40}
          src={img || ""}
          alt={name}
          className="size-10 rounded-full ring-2 ring-white/10"
        />

        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-neutral-500 text-xs font-medium mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
}
const testimonials = [
  {
    name: "Jordan Hayes",
    role: "International Student",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    description: (
      <p>
        Career Guide Global has completely transformed my admission journey.
        <Highlight>
          The personalized roadmap saved me months of confusion.
        </Highlight>{" "}
        I can now focus on my studies instead of worrying about the process.
      </p>
    ),
  },
  {
    name: "Maya Rodriguez",
    role: "Admitted to Stanford",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    description: (
      <p>
        I was skeptical at first, but Career Guide Global proved me wrong.
        <Highlight>
          The expert mentors and resources are top-notch.
        </Highlight>{" "}
        It&apos;s rare to find a platform that genuinely cares about your success.
      </p>
    ),
  },
  {
    name: "Ethan Park",
    role: "Engineering Major",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    description: (
      <p>
        As an international applicant, Career Guide Global has been a game-changer.
        <Highlight>I secured my admission three months ahead of schedule.</Highlight> The
        support system allowed me to iterate quickly on my essays.
      </p>
    ),
  },
  {
    name: "Zoe Bennett",
    role: "Admitted to MIT",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    description: (
      <p>
        Career Guide Global&apos;s attention to detail is impressive.
        <Highlight>
          The mock interviews and profile building sessions were crucial.
        </Highlight>{" "}
        It&apos;s become the go-to solution for anyone with ambitious goals.
      </p>
    ),
  },
  {
    name: "Victor Nguyen",
    role: "Graduate Student",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
    description: (
      <p>
        My university applications needed a complete overhaul, and Career Guide Global
        delivered.
        <Highlight>
          The scholarship guidance is both practical and effective.
        </Highlight>{" "}
        My confidence has increased significantly since joining.
      </p>
    ),
  },
  {
    name: "Amara Johnson",
    role: "Admitted to Oxford",
    img: "https://randomuser.me/api/portraits/women/67.jpg",
    description: (
      <p>
        The support network at Career Guide Global is exceptional.
        <Highlight>
          I was able to navigate complex visa processes effortlessly.
        </Highlight>{" "}
        The community of fellow students is also a major motivational booster.
      </p>
    ),
  },
  {
    name: "Leo Tanaka",
    role: "Research Fellow",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
    description: (
      <p>
        Career Guide Global has the perfect balance of guidance and independence.
        <Highlight>
          You get tailored advice while still maintaining your unique voice.
        </Highlight>{" "}
        The mentors are consistently impressive with their insights.
      </p>
    ),
  },
  {
    name: "Sophia Martinez",
    role: "Medical Student",
    img: "https://randomuser.me/api/portraits/women/89.jpg",
    description: (
      <p>
        My acceptance rate skyrocketed after consulting with Career Guide Global.
        <Highlight>
          The strategic planning sessions are optimized for highly competitive programs.
        </Highlight>{" "}
        The constant encouragement was also a huge help during stressful times.
      </p>
    ),
  },
  {
    name: "Aiden Wilson",
    role: "Admitted to Yale",
    img: "https://randomuser.me/api/portraits/men/92.jpg",
    description: (
      <p>
        Career Guide Global&apos;s essay reviews were crucial for my ivy league
        applications.
        <Highlight>
          We crafted compelling narratives with minimal stress.
        </Highlight>{" "}
        The resources are especially well-designed for ambitious students.
      </p>
    ),
  },
  {
    name: "Olivia Chen",
    role: "Admitted to Cambridge",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
    description: (
      <p>
        The journey to a top university requires perfect strategy and execution.
        <Highlight>
          Career Guide Global&apos;s comprehensive approach made this possible without
          compromise.
        </Highlight>{" "}
        The 1-on-1 sessions have significantly improved my profile.
      </p>
    ),
  },
];
export default function Testimonials() {
  return (
    <section className="relative container py-10">
      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 z-10 h-64 w-64 rounded-full bg-[#ccff00]/5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 z-10 h-64 w-64 rounded-full bg-[#ccff00]/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-end text-right"
      >
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            What Our Students Say
          </h2>
          <span className="w-8 md:w-22 h-0.5 bg-[#ccff00]" />
        </div>
        
        <p className="text-neutral-400 max-w-2xl text-base md:text-lg font-light leading-relaxed mb-16">
          Don&apos;t just take our word for it. Here&apos;s what{" "}
          <span className="text-[#ccff00] font-medium">real students</span>{" "}
          are saying about their journey with{" "}
          <span className="text-white font-medium">Career Guide Global</span>.
        </p>
      </motion.div>

      <div className="relative mt-12 max-h-screen overflow-hidden">
        <div className="gap-6 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:12s]": i === 0,
                  "[--duration:16s]": i === 1,
                  "[--duration:14s]": i === 2,
                  "[--duration:18s]": i === 3,
                })}>
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}>
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-[#181818] to-transparent"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-[#181818] to-transparent"></div>
      </div>
    </section>
  );
}