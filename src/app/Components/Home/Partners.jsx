"use client"
import { cn } from "@/lib/utils"

export const InfiniteMovingCards = ({
  items = [],
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"

  const animationDirection = direction === "left" ? "forwards" : "reverse"

  return (
    <div className={cn("relative z-20 max-w-full mx-auto", className)}>      

      {/* Infinite Moving Cards */}
      <div
        className="overflow-hidden"
        style={{
          "--animation-duration": duration,
          "--animation-direction": animationDirection,
        }}
      >
        <ul
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-5 animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]",
          )}
        >
          {[...items, ...items].map((item, idx) => (
            <li
              key={`${item.name}-${idx}`}
              className="relative w-[300px] max-w-full shrink-0 rounded-2xl border border-b-0 border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 px-8 py-28 md:w-[350px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] dark:border-slate-700 dark:from-slate-800 dark:to-slate-900"
            >
            </li>
          ))}
        </ul>
      </div>

      {/* CSS for scroll animation */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) linear infinite;
          animation-direction: var(--animation-direction, forwards);
        }
      `}</style>
    </div>
  )
}
