import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Users, Briefcase, TrendingUp, Globe } from 'lucide-react';

const Counter = ({ value, label }) => {
    const numMatch = value.match(/(\d+)/);
    const num = numMatch ? parseInt(numMatch[1], 10) : 0;
    const suffix = value.replace(/\d+/g, '');

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView) {
            const controls = animate(count, num, { duration: 2, ease: "easeOut" });
            return controls.stop;
        }
    }, [inView, count, num]);

    return (
        <div ref={ref} className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 mt-6">
            <h3 className="text-[44px] md:text-[56px] font-black text-white tracking-tighter mb-1 leading-none drop-shadow-md">
                <motion.span>{rounded}</motion.span>{suffix}
            </h3>
            <p className="text-xs md:text-sm text-neutral-400 font-medium tracking-wide">{label}</p>
        </div>
    );
};

export default function StatsSection() {
    const stats = [
        { value: "20+", label: "Certified Advisors", icon: Users },
        { value: "1k+", label: "Successful Careers", icon: Briefcase },
        { value: "95%", label: "Success Rate", icon: TrendingUp },
        { value: "40+", label: "Partner Universities", icon: Globe }
    ];

    return (
        <div className="w-full flex flex-col gap-8 my-8 mb-16 pt-16 relative">
            {/* Background Watermark */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden flex justify-center pointer-events-none select-none z-0">
                <span className="text-[120px] md:text-[180px] lg:text-[240px] font-black uppercase tracking-wide text-white/[0.02] whitespace-nowrap">
                    IMPACT
                </span>
            </div>

            {/* Central Yellow/Lime Orb */}
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#ccff00] rounded-full blur-[120px] md:blur-[200px] opacity-[0.07] pointer-events-none z-0"></div>

            {/* Heading & Subheading */}
            <div className="flex flex-col items-center text-center gap-3 relative z-10">
                <div className="flex items-center justify-center gap-4">
                    <div className="hidden sm:block w-8 md:w-20 h-[2px] bg-gradient-to-l from-[#ccff00]/80 to-transparent rounded-full" />
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight uppercase">
                        Global Impact
                    </h2>
                    <div className="hidden sm:block w-8 md:w-20 h-[2px] bg-gradient-to-r from-[#ccff00]/80 to-transparent rounded-full" />
                </div>
                <p className="text-neutral-400 text-sm md:text-base max-w-3xl mx-auto mb-10 font-light leading-relaxed">
                    Delivering measurable success and accelerating career growth for ambitious individuals worldwide.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
                {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            key={idx} 
                            className="relative w-full aspect-square sm:aspect-auto sm:h-[300px]"
                        >
                            {/* The Top Left Icon Space */}
                            <div className="absolute -top-5 -left-1 w-[72px] h-[72px] flex items-center justify-center z-20">
                                <Icon className="w-6 h-6 text-[#ccff00]" strokeWidth={1.5} />
                            </div>

                            {/* The Card */}
                            <div 
                                className="w-full h-full bg-[#222222] hover:bg-[#282828] transition-colors duration-500 rounded-[32px] relative overflow-hidden group shadow-xl"
                                style={{
                                    WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100,0 L100,100 L0,100 L0,60 A 20 20 0 0 1 20 40 L 32,40 A 24 24 0 0 0 56 16 A 16 16 0 0 1 72 0 Z' fill='black'/%3E%3C/svg%3E"), linear-gradient(black, black), linear-gradient(black, black)`,
                                    WebkitMaskPosition: "top left, top right, bottom left",
                                    WebkitMaskSize: "100px 100px, calc(100% - 99px) 100px, 100% calc(100% - 99px)",
                                    WebkitMaskRepeat: "no-repeat, no-repeat, no-repeat",
                                    maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100,0 L100,100 L0,100 L0,60 A 20 20 0 0 1 20 40 L 32,40 A 24 24 0 0 0 56 16 A 16 16 0 0 1 72 0 Z' fill='black'/%3E%3C/svg%3E"), linear-gradient(black, black), linear-gradient(black, black)`,
                                    maskPosition: "top left, top right, bottom left",
                                    maskSize: "100px 100px, calc(100% - 99px) 100px, 100% calc(100% - 99px)",
                                    maskRepeat: "no-repeat, no-repeat, no-repeat"
                                }}
                            >
                                {/* Inner subtle border effect */}
                                <div className="absolute inset-0 rounded-[32px] border border-white/[0.04] pointer-events-none transition-colors duration-500 group-hover:border-white/[0.08]" />

                                {/* Special background effects for cards 2 and 3 (idx 1 and 2) */}
                                {(idx === 1 || idx === 2) && (
                                    <>
                                        {/* Yellowish ambient glow */}
                                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-400 rounded-full blur-[120px] opacity-[0.06] pointer-events-none group-hover:opacity-[0.12] transition-opacity duration-700"></div>
                                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/[0.03] to-transparent pointer-events-none group-hover:from-yellow-500/[0.06] transition-colors duration-500"></div>
                                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>
                                    </>
                                )}

                                {/* Wavy Ribbon Decorative Background with SVG Text */}
                                <div className="absolute inset-0 opacity-40 pointer-events-none transition-all duration-700 group-hover:scale-105 group-hover:opacity-60">
                                    <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 400">
                                        <defs>
                                            <path id={`text-path-1-${idx}`} d="M-50,250 C50,300 100,100 200,150 C300,200 400,50 500,100" />
                                            <path id={`text-path-2-${idx}`} d="M50,350 C150,400 200,200 300,250 C400,300 500,150 600,200" />
                                        </defs>
                                        
                                        {/* Ribbon paths */}
                                        <path d="M-100,300 C0,350 150,150 250,200 C350,250 450,100 550,150 L550,450 L-100,450 Z" fill="#ffffff" opacity="0.015" />
                                        <path d="M-50,250 C50,300 100,100 200,150 C300,200 400,50 500,100" stroke="#ffffff" strokeWidth="32" fill="none" opacity="0.02" />
                                        <path d="M50,350 C150,400 200,200 300,250 C400,300 500,150 600,200" stroke="#ccff00" strokeWidth="48" fill="none" opacity="0.015" className="transition-opacity duration-500 group-hover:opacity-[0.03]" />
                                        
                                        {/* Text along path */}
                                        <text fill="#ffffff" opacity="0.06" fontSize="26" fontWeight="900" letterSpacing="4">
                                            <textPath href={`#text-path-1-${idx}`} startOffset="5%">
                                                CAREER GUIDE GLOBAL
                                            </textPath>
                                        </text>
                                        <text fill="#ffffff" opacity="0.04" fontSize="26" fontWeight="900" letterSpacing="4">
                                            <textPath href={`#text-path-2-${idx}`} startOffset="15%">
                                                CAREER GUIDE GLOBAL
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>

                                <Counter value={stat.value} label={stat.label} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
