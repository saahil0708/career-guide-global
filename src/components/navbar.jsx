"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FluidArrowRight } from "@/components/fluid-arrow";

// Magnetic effect wrapper to attract elements to the mouse cursor
function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = (clientX - centerX) * strength;
    const y = (clientY - centerY) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.1 }}
      className="h-full flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
}

// Rolling text billboard hover effect
function RollingText({ text, isActive }) {
  return (
    <span className="relative block overflow-hidden py-1 px-1.5">
      <span 
        className={`block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full ${
          isActive ? "text-white" : "text-neutral-700 dark:text-neutral-200"
        }`}
      >
        {text}
      </span>
      <span 
        className={`absolute inset-x-1.5 inset-y-0 py-1 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 ${
          isActive ? "text-white" : "text-[#ca0019]"
        }`}
      >
        {text}
      </span>
    </span>
  );
}

// Fluid Arrow component matching the requested round-capped style in the image
function FluidArrow() {
  return (
    <svg 
      className="w-3.5 h-3.5 overflow-visible" 
      viewBox="0 0 16 16" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.8"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Arrow shaft that elongates on hover */}
      <motion.line 
        x1="1.5" 
        y1="8" 
        x2="11.5" 
        y2="8"
        variants={{
          initial: { x2: 11.5 },
          hover: { x2: 15 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {/* Arrow head that pushes forward on hover */}
      <motion.polyline 
        points="8 3.5 12.5 8 8 12.5" 
        variants={{
          initial: { x: 0 },
          hover: { x: 2.5 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Spotlight state for navigation container
  const navRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isNavHovered, setIsNavHovered] = useState(false);
  const searchInputRef = useRef(null);

  // Monitor scroll to morph navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Track mouse coordinates for dynamic spotlight
  const handleNavMouseMove = (e) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Student's Corner", href: "/students-corner" },
  ];

  return (
    <>
      {/* Outer wrapper */}
      <div className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 flex justify-center pointer-events-none">
        
        {/* Dynamic Container: Morphing background & sizing on scroll */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className={`
            w-full flex items-center transition-all duration-500 ease-out pointer-events-auto
            ${isScrolled 
              ? "max-w-4xl bg-white/95 dark:bg-neutral-900/95 border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xl rounded-full px-3 py-2 justify-between" 
              : "max-w-6xl justify-between px-0 bg-transparent border-transparent shadow-none"
            }
          `}
        >
          {/* ================= LEFT MODULE: LOGO ================= */}
          <motion.div 
            layout="position"
            className={`
              transition-all duration-500 flex items-center
              ${isScrolled 
                ? "bg-transparent border-transparent shadow-none px-1" 
                : "bg-white dark:bg-neutral-900/90 shadow-lg border border-neutral-200/50 dark:border-neutral-800/50 px-4 py-2.5 rounded-full"
              }
            `}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-full bg-[#ca0019] flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-[#ca0019]/20 group-hover:scale-105 transition-transform duration-300">
                CG
              </span>
              <AnimatePresence mode="popLayout">
                {!isScrolled && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-extrabold text-xs tracking-wider text-neutral-800 dark:text-white whitespace-nowrap uppercase overflow-hidden"
                  >
                    Career <span className="text-[#ca0019]">Guide</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </motion.div>

          {/* ================= CENTER MODULE: DESKTOP NAV ================= */}
          <motion.nav 
            layout="position"
            ref={navRef}
            onMouseMove={handleNavMouseMove}
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => {
              setIsNavHovered(false);
              setHoveredIndex(null);
            }}
            className={`
              hidden md:flex items-center transition-all duration-500 relative overflow-hidden select-none
              ${isScrolled 
                ? "bg-transparent border-transparent shadow-none px-0 py-0" 
                : "bg-white dark:bg-neutral-900/90 shadow-lg border border-neutral-200/50 dark:border-neutral-800/50 px-6 py-2.5 rounded-full"
              }
            `}
          >
            {/* Spotlight Glow Follower */}
            <AnimatePresence>
              {isNavHovered && (
                <motion.div
                  className="absolute pointer-events-none rounded-full w-28 h-28 bg-[#ca0019]/8 dark:bg-[#ca0019]/12 blur-2xl -translate-x-1/2 -translate-y-1/2 -z-10"
                  animate={{ x: mousePos.x, y: mousePos.y }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 220, damping: 25, mass: 0.1 }}
                />
              )}
            </AnimatePresence>

            <ul className="flex items-center gap-2.5 z-10">
              {navItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name} className="relative flex items-center justify-center">
                    <Magnetic strength={0.25}>
                      <Link
                        href={item.href}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        className={`
                          relative px-4.5 py-1 text-sm font-extrabold tracking-tight transition-all duration-300 block rounded-full group
                          ${isActive 
                            ? "text-white" 
                            : "text-neutral-700 hover:text-[#ca0019] dark:text-neutral-200 dark:hover:text-white"
                          }
                        `}
                      >
                        {/* Spring hover background effect (inactive links only) */}
                        {hoveredIndex === idx && !isActive && (
                          <motion.span
                            layoutId="navHoverBg"
                            className="absolute inset-0 bg-neutral-100/80 dark:bg-neutral-800/80 rounded-full -z-20"
                            transition={{ type: "spring", stiffness: 220, damping: 20, mass: 0.8 }}
                          />
                        )}
                        
                        {/* Active state indicator capsule (solid crimson for high contrast) */}
                        {isActive && (
                          <motion.span
                            layoutId="activeIndicator"
                            className="absolute inset-0 bg-[#ca0019] rounded-full -z-20 shadow-lg shadow-[#ca0019]/25 border border-[#ca0019]/10"
                            transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.8 }}
                          />
                        )}

                        {/* Premium rolling billboard text */}
                        <RollingText text={item.name} isActive={isActive} />
                      </Link>
                    </Magnetic>
                  </li>
                );
              })}
            </ul>
          </motion.nav>

          {/* ================= RIGHT MODULE: SEARCH & CTA ================= */}
          <motion.div 
            layout="position"
            className={`
              flex items-center gap-2 transition-all duration-500
              ${isScrolled 
                ? "bg-transparent border-transparent shadow-none px-1" 
                : "bg-white dark:bg-neutral-900/90 shadow-lg border border-neutral-200/50 dark:border-neutral-800/50 px-3 py-2 rounded-full"
              }
            `}
          >
            {/* Search Trigger */}
            <div className="relative flex items-center">
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: isScrolled ? 140 : 180, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute right-full mr-2 z-2000"
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search website..."
                      className="w-full text-xs px-3 py-1.5 bg-neutral-100 dark:bg-neutral-850 text-neutral-800 rounded-full border-none focus:outline-none focus:ring-1 focus:ring-[#ca0019] placeholder-neutral-400"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-850 hover:text-[#ca0019] transition-colors"
                aria-label="Search"
              >
                {searchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
              </button>
            </div>

            {/* Premium CTA Button with Solid Red Background, Hover White Slide, and Custom SVG Arrow */}
            <Link href="/apply" className="hidden sm:block">
              <motion.div
                whileHover="hover"
                initial="initial"
                animate="initial"
                className={`
                  relative flex items-center gap-2 rounded-full border border-[#ca0019] bg-[#ca0019] font-extrabold text-[12px] tracking-tight overflow-hidden transition-all duration-300 shadow-md shadow-[#ca0019]/15 hover:shadow-lg hover:shadow-[#ca0019]/25 cursor-pointer select-none
                  ${isScrolled ? "px-4.5 py-2" : "px-5.5 py-2.5"}
                `}
              >
                {/* Left-to-right filling background (White cover on hover) */}
                <motion.span
                  variants={{
                    initial: { x: "-100%" },
                    hover: { x: 0 }
                  }}
                  transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.45 }}
                  className="absolute inset-0 bg-white z-0"
                />

                {/* Text layer that transitions color (from white to crimson red) */}
                <motion.span
                  variants={{
                    initial: { color: "#ffffff" },
                    hover: { color: "#ca0019" }
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  Apply Now
                </motion.span>

                {/* Fluid Arrow matching the bold round-capped image styling */}
                <motion.span
                  variants={{
                    initial: { color: "#ffffff" },
                    hover: { color: "#ca0019" }
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10 flex items-center"
                >
                  <FluidArrowRight />
                </motion.span>
              </motion.div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-850"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </motion.div>
        </motion.header>
      </div>

      {/* ================= MOBILE NAV OVERLAY ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl md:hidden flex flex-col justify-between px-6 pt-28 pb-10"
          >
            <div className="flex flex-col gap-8">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#ca0019] border-b border-neutral-100 dark:border-neutral-800 pb-2">
                Navigation
              </span>
              
              <ul className="flex flex-col gap-6">
                {navItems.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.08 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`
                          text-2xl font-black transition-colors flex items-center justify-between
                          ${isActive 
                            ? "text-[#ca0019]" 
                            : "text-neutral-800 dark:text-white hover:text-[#ca0019]"
                          }
                        `}
                      >
                        {item.name}
                        {isActive && <span className="w-2.5 h-2.5 bg-[#ca0019] rounded-full" />}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* Mobile Footer Area */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <Link
                href="/apply"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 rounded-full bg-[#ca0019] hover:bg-[#b00015] text-white font-bold text-center shadow-lg shadow-[#ca0019]/20 transition-all flex items-center justify-center gap-2"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-[10px] text-neutral-500">
                © {new Date().getFullYear()} Career Guide Global. All rights reserved.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}