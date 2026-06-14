import React from 'react';
import Navbar from '@/components/navbar';
import OurStory from '@/components/OurStory';

export default function About() {
    return (
        <div className="w-full min-h-screen text-white bg-[#181818] flex flex-col">
            <div className="px-4 sm:px-8 lg:px-12">
                <Navbar />

                <main className="w-full flex-1 mt-12 md:mt-20 max-w-[1600px] mx-auto pb-20">

                    {/* TOP ROW: ABOUT */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">
                        <div className="lg:col-span-9 flex items-end">
                            <h1 className="text-[18vw] lg:text-[130px] xl:text-[160px] leading-[0.8] font-black tracking-wide uppercase text-white m-0 p-0">
                                ABOUT
                            </h1>
                        </div>
                        <div className="hidden lg:block lg:col-span-3"></div>
                    </div>

                    {/* BOTTOM ROW: US, Middle Image, Right Col */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full mt-4 lg:mt-6 items-stretch">

                        {/* Left Column (US + texts) */}
                        <div className="lg:col-span-3 flex flex-col justify-between lg:h-[300px] xl:h-[350px]">
                            <h1 className="text-[18vw] lg:text-[130px] xl:text-[160px] leading-[0.8] font-black tracking-normal uppercase text-white m-0 p-0">
                                US
                            </h1>
                            <div className="flex flex-col gap-6 w-full pr-2 mt-12 lg:mt-auto pb-2">
                                <p className="text-sm md:text-base font-bold tracking-wide text-white">
                                    Empowering <span className='text-[#ccff00]'>Global</span> Careers & Education
                                </p>
                                <p className="text-[13px] md:text-sm text-neutral-400 leading-relaxed font-light">
                                    Strategic Guidance: Expert consulting featuring personalized roadmaps, global university networks, and high-impact career planning.
                                </p>
                            </div>
                        </div>

                        {/* Middle Column (6/12) */}
                        <div className="lg:col-span-6 h-[300px] sm:h-[400px] lg:h-[300px] xl:h-[350px]">
                            <div className="w-full h-full rounded-[48px] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                                    alt="Students working collaboratively"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Column (3/12) */}
                        <div className="lg:col-span-3 flex flex-col justify-between lg:h-[300px] xl:h-[350px]">
                            <div className="w-full aspect-[2/1] rounded-[24px] overflow-hidden mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
                                    alt="Modern professional workspace"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center bg-[#ccff00] text-[#181818] p-6 rounded-[24px] flex-1">
                                <h2 className="text-2xl font-bold tracking-tight mb-3">Our Approach</h2>
                                <p className="text-[13px] xl:text-sm leading-relaxed font-medium">
                                    We provide personalized learning paths and expert guidance tailored to every student's goals.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* MISSION & VISION SECTION */}
                    <div className="mt-20 lg:mt-40 w-full grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8 items-stretch">

                        {/* Mission Card */}
                        <div className="lg:col-span-4 relative group h-full">
                            <div
                                className="w-full h-full bg-[#222222] p-8 lg:p-10 flex flex-col justify-center transition-all duration-300 group-hover:bg-[#282828] rounded-[20px] relative"
                                style={{
                                    WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L20,0 Q40,0 40,20 L40,40 Q40,60 60,60 L80,60 Q100,60 100,80 L100,100 L0,100 Z' fill='black'/%3E%3C/svg%3E\"), linear-gradient(black, black), linear-gradient(black, black)",
                                    WebkitMaskPosition: "top right, top left, bottom left",
                                    WebkitMaskSize: "100px 100px, calc(100% - 99px) 100%, 100% calc(100% - 99px)",
                                    WebkitMaskRepeat: "no-repeat, no-repeat, no-repeat",
                                    maskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L20,0 Q40,0 40,20 L40,40 Q40,60 60,60 L80,60 Q100,60 100,80 L100,100 L0,100 Z' fill='black'/%3E%3C/svg%3E\"), linear-gradient(black, black), linear-gradient(black, black)",
                                    maskPosition: "top right, top left, bottom left",
                                    maskSize: "100px 100px, calc(100% - 99px) 100%, 100% calc(100% - 99px)",
                                    maskRepeat: "no-repeat, no-repeat, no-repeat"
                                }}
                            >
                                {/* Premium Tech Background Elements */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,255,0,0.15),transparent_60%)] opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                                <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl lg:text-4xl font-black mb-4 uppercase tracking-wide">Mission</h2>
                                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                                        To democratize access to global education and career opportunities by providing innovative, personalized, and strategic guidance to every aspiring professional.
                                    </p>
                                </div>
                            </div>
                            {/* Decorative Star */}
                            <svg viewBox="0 0 24 24" className="absolute top-4 right-4 w-7 h-7 text-[#ccff00] drop-shadow-[0_0_15px_rgba(204,255,0,0.4)] transition-transform duration-700 group-hover:rotate-90 group-hover:scale-110">
                                <circle cx="12" cy="12" r="6.5" fill="currentColor" />
                                <rect x="10.5" y="1" width="3" height="22" rx="1" fill="currentColor" />
                                <rect x="10.5" y="1" width="3" height="22" rx="1" fill="currentColor" transform="rotate(30 12 12)" />
                                <rect x="10.5" y="1" width="3" height="22" rx="1" fill="currentColor" transform="rotate(60 12 12)" />
                                <rect x="10.5" y="1" width="3" height="22" rx="1" fill="currentColor" transform="rotate(90 12 12)" />
                                <rect x="10.5" y="1" width="3" height="22" rx="1" fill="currentColor" transform="rotate(120 12 12)" />
                                <rect x="10.5" y="1" width="3" height="22" rx="1" fill="currentColor" transform="rotate(150 12 12)" />
                            </svg>
                        </div>

                        {/* Vision Card */}
                        <div className="lg:col-span-4 relative group h-full">
                            <div
                                className="w-full h-full bg-[#ccff00] text-[#181818] p-8 lg:p-10 flex flex-col justify-center transition-all duration-300 group-hover:bg-[#d4ff33] group-hover:drop-shadow-[0_0_30px_rgba(204,255,0,0.3)] rounded-[20px] relative"
                                style={{
                                    WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L20,0 Q40,0 40,20 L40,40 Q40,60 60,60 L80,60 Q100,60 100,80 L100,100 L0,100 Z' fill='black'/%3E%3C/svg%3E\"), linear-gradient(black, black), linear-gradient(black, black)",
                                    WebkitMaskPosition: "top right, top left, bottom left",
                                    WebkitMaskSize: "100px 100px, calc(100% - 99px) 100%, 100% calc(100% - 99px)",
                                    WebkitMaskRepeat: "no-repeat, no-repeat, no-repeat",
                                    maskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L20,0 Q40,0 40,20 L40,40 Q40,60 60,60 L80,60 Q100,60 100,80 L100,100 L0,100 Z' fill='black'/%3E%3C/svg%3E\"), linear-gradient(black, black), linear-gradient(black, black)",
                                    maskPosition: "top right, top left, bottom left",
                                    maskSize: "100px 100px, calc(100% - 99px) 100%, 100% calc(100% - 99px)",
                                    maskRepeat: "no-repeat, no-repeat, no-repeat"
                                }}
                            >
                                {/* Premium Tech Background Elements */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(24,24,24,0.15),transparent_60%)] opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                                <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: "radial-gradient(#181818 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl lg:text-4xl font-black mb-4 uppercase tracking-wide">Vision</h2>
                                    <p className="text-[#181818]/80 text-sm md:text-base leading-relaxed font-medium">
                                        To be the world's leading catalyst for borderless careers, creating a future where talent seamlessly connects with global opportunities, unbounded by geography.
                                    </p>
                                </div>
                            </div>
                            {/* Decorative Star */}
                            <svg viewBox="0 0 24 24" className="absolute top-4 right-4 w-7 h-7 text-[#ccff00] drop-shadow-[0_0_15px_rgba(204,255,0,0.4)] transition-transform duration-700 group-hover:rotate-90 group-hover:scale-110">
                                <circle cx="12" cy="12" r="6.5" fill="currentColor" />
                                <rect x="10.5" y="1" width="3" height="22" rx="1" fill="currentColor" />
                                <rect x="10.5" y="1" width="3" height="22" rx="1" fill="currentColor" transform="rotate(30 12 12)" />
                                <rect x="10.5" y="1" width="3" height="22" rx="1" fill="currentColor" transform="rotate(60 12 12)" />
                                <rect x="10.5" y="1" width="3" height="22" rx="1" fill="currentColor" transform="rotate(90 12 12)" />
                                <rect x="10.5" y="1" width="3" height="22" rx="1" fill="currentColor" transform="rotate(120 12 12)" />
                                <rect x="10.5" y="1" width="3" height="22" rx="1" fill="currentColor" transform="rotate(150 12 12)" />
                            </svg>
                        </div>

                        {/* Image */}
                        <div className="lg:col-span-2 w-full h-full rounded-[20px] overflow-hidden relative group">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                                alt="Mission and Vision Teamwork"
                                className="w-full h-full object-cover transition-transform duration-700"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#181818]/80 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                    {/* CORE VALUES SECTION */}
                    <div className="mt-32 lg:mt-48 w-full max-w-[1100px] mx-auto px-6">
                        <div className="relative text-center mb-24 lg:mb-32 flex flex-col items-center justify-center pt-10">
                            {/* Background Text Watermark */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden flex justify-center pointer-events-none select-none z-0">
                                <span className="text-[100px] md:text-[160px] lg:text-[200px] font-black uppercase tracking-tighter text-white/[0.03] whitespace-nowrap">
                                    PRINCIPLES
                                </span>
                            </div>

                            <div className="relative z-10 flex flex-col items-center">
                                {/* Dashed overline */}
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="w-16 border-b border-dashed border-[#ccff00]/60"></div>
                                    <span className="text-[#ccff00] font-mono text-xs md:text-sm tracking-[0.3em] uppercase">Our Foundation</span>
                                    <div className="w-16 border-b border-dashed border-[#ccff00]/60"></div>
                                </div>

                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mb-6">Core Values</h2>

                                <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                                    The fundamental principles that drive our mission, shape our culture, and ensure your absolute success on the global stage.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col border-t border-white/10 mt-16">

                            {/* ROW 1: Text Left, Number Right (Innovation) */}
                            <div className="relative grid grid-cols-1 md:grid-cols-12 items-center py-5 gap-8 md:gap-16 group border-b border-white/10">
                                {/* Decorative Orb */}
                                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-[#ccff00] rounded-full blur-[150px] opacity-0 group-hover:opacity-15 transition-opacity duration-1000 pointer-events-none"></div>

                                {/* Text Block */}
                                <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 relative z-10">
                                    <div className="flex items-center gap-4 mb-6 md:mb-8">
                                        <span className="text-[#ccff00] font-mono text-sm tracking-widest">01</span>
                                        <div className="w-12 h-[1px] bg-[#ccff00]/50"></div>
                                        <span className="text-white/40 font-mono text-[10px] tracking-[0.2em] uppercase">Core Principle</span>
                                    </div>
                                    <h3 className="text-5xl lg:text-7xl font-black uppercase tracking-tight text-white mb-6 group-hover:text-[#ccff00] transition-colors duration-700">Innovation</h3>
                                    <p className="text-neutral-400 text-lg lg:text-xl leading-relaxed max-w-md font-light group-hover:text-white/80 transition-colors duration-700">
                                        We constantly evolve our strategies and technology to stay ahead of the curve in a rapidly changing educational landscape.
                                    </p>
                                </div>
                                {/* Number Block */}
                                <div className="md:col-span-7 flex justify-center md:justify-end order-1 md:order-2 relative z-10">
                                    <span
                                        className="text-[200px] md:text-[260px] lg:text-[340px] leading-none pb-8 pt-4 font-black tracking-tighter bg-clip-text text-transparent bg-cover bg-center select-none transition-all duration-1000"
                                        style={{
                                            backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80')",
                                            WebkitTextStroke: "1px rgba(255,255,255,0.15)"
                                        }}
                                    >
                                        01
                                    </span>
                                </div>
                            </div>

                            {/* ROW 2: Number Left, Text Right (Empowerment) */}
                            <div className="relative grid grid-cols-1 md:grid-cols-12 items-center py-5 gap-8 md:gap-16 group border-b border-white/10 border-b-transparent">
                                {/* Decorative Orb */}
                                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-[#ccff00] rounded-full blur-[150px] opacity-0 group-hover:opacity-15 transition-opacity duration-1000 pointer-events-none"></div>

                                {/* Number Block */}
                                <div className="md:col-span-7 flex justify-center md:justify-start order-1 md:order-1 relative z-10">
                                    <span
                                        className="text-[200px] md:text-[260px] lg:text-[340px] leading-none pb-8 pt-4 font-black tracking-tighter bg-clip-text text-transparent bg-cover bg-center select-none transition-all duration-1000"
                                        style={{
                                            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80')",
                                            WebkitTextStroke: "1px rgba(255,255,255,0.15)"
                                        }}
                                    >
                                        02
                                    </span>
                                </div>
                                {/* Text Block */}
                                <div className="md:col-span-5 flex flex-col items-center md:items-end text-center md:text-right order-2 md:order-2 relative z-10">
                                    <div className="flex items-center gap-4 mb-6 md:mb-8 justify-end">
                                        <span className="text-white/40 font-mono text-[10px] tracking-[0.2em] uppercase">Core Principle</span>
                                        <div className="w-12 h-[1px] bg-[#ccff00]/50"></div>
                                        <span className="text-[#ccff00] font-mono text-sm tracking-widest">02</span>
                                    </div>
                                    <h3 className="text-5xl lg:text-7xl font-black uppercase tracking-tight text-white mb-6 group-hover:text-[#ccff00] transition-colors duration-700">Empowerment</h3>
                                    <p className="text-neutral-400 text-lg lg:text-xl leading-relaxed max-w-md font-light group-hover:text-white/80 transition-colors duration-700">
                                        We equip every individual with the knowledge, tools, and confidence to make strategic decisions that define their future.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <OurStory />
                    
                </main>
            </div>
        </div>
    );
}