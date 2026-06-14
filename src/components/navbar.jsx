'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: "Students' Corner", href: '/students' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Sync theme with document class list
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="w-full flex items-center justify-between py-6 px-0 relative z-30 select-none border-b border-gray-100/40">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2.5 group">
        <svg className="w-8 h-8 text-[#ccff00]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Green swoosh roof */}
          <path d="M4 22L16 6L28 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 22L16 12L24 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
          {/* Windows / Columns */}
          <rect x="10" y="22" width="3" height="6" rx="0.5" fill="currentColor" />
          <rect x="15" y="20" width="3" height="8" rx="0.5" fill="currentColor" />
          <rect x="20" y="22" width="3" height="6" rx="0.5" fill="currentColor" />
        </svg>
        <span className="text-lg font-bold tracking-tight text-white flex items-center">
          CAREER
          <span className="text-[#ccff00] font-extrabold ml-0.5 group-hover:translate-x-0.5 transition-transform duration-300">.</span>
          <span className="text-neutral-400 font-medium text-xs ml-1.5 opacity-80 uppercase">GUIDE</span>
        </span>
      </Link>

      {/* Desktop Nav Links */}
      <nav className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const isBuilt = ['/', '/features', '/stats'].includes(item.href);
          
          return (
            <Link
              key={item.href}
              href={isBuilt ? item.href : '#'}
              onClick={(e) => {
                if (!isBuilt) {
                  e.preventDefault();
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('show-development-modal'));
                  }
                }
              }}
              className={`text-sm font-semibold tracking-wide transition-colors duration-250 ${
                isActive 
                  ? 'text-[#ccff00]' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Action Area & Theme Toggle */}
      <div className="flex items-center gap-3">
        {mounted && (
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full cursor-pointer border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        )}
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.dispatchEvent(new CustomEvent('show-development-modal'));
            }
          }}
          aria-label="Open mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </header>
  );
}

