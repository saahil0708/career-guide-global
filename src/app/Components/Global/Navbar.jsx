"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, Phone, Mail, MapPin, Calendar, ArrowRight, Star, Users, Award, BookOpen } from 'lucide-react';

const CareerCounselingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Career Assessment', href: '/services/assessment', icon: <Award className="w-4 h-4" /> },
        { name: 'Resume Building', href: '/services/resume', icon: <BookOpen className="w-4 h-4" /> },
        { name: 'Interview Coaching', href: '/services/interview', icon: <Users className="w-4 h-4" /> },
        { name: 'Career Planning', href: '/services/planning', icon: <Star className="w-4 h-4" /> }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-[#4fbe99] to-[#3da582] flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-white flex items-center justify-center">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#4fbe99]"></div>
                </div>
              </div>
              {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#4fbe99] rounded-full animate-pulse"></div> */}
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">CareerGuide</h1>
              <p className="text-xs text-gray-500 -mt-1">Professional Counseling</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#4fbe99] transition-colors duration-200 font-medium py-2"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => !item.dropdown && setActiveDropdown(null)}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                </a>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-[#4fbe99]/10 hover:text-[#4fbe99] transition-colors duration-200"
                      >
                        <div className="text-[#4fbe99]">{dropdownItem.icon}</div>
                        <span className="font-medium">{dropdownItem.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 text-[#4fbe99] border border-[#4fbe99] rounded-lg hover:bg-[#4fbe99]/10 transition-colors duration-200 font-medium">
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-2 bg-[#4fbe99] text-white rounded-lg hover:bg-[#3da582] transition-colors duration-200 font-medium shadow-lg hover:shadow-xl">
              <Calendar className="w-4 h-4" />
              <span>Book Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ${
        isOpen 
          ? 'max-h-screen opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
      }`}>
        <div className="bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center justify-between py-3 text-gray-700 hover:text-[#4fbe99] transition-colors duration-200 font-medium"
                  onClick={() => item.dropdown && setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </a>
                
                {/* Mobile Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="pl-4 space-y-2 mt-2">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="flex items-center space-x-3 py-2 text-gray-600 hover:text-[#4fbe99] transition-colors duration-200"
                      >
                        <div className="text-[#4fbe99]">{dropdownItem.icon}</div>
                        <span>{dropdownItem.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3 border-t border-gray-100">
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-[#4fbe99] border border-[#4fbe99] rounded-lg hover:bg-[#4fbe99]/10 transition-colors duration-200 font-medium">
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-[#4fbe99] text-white rounded-lg hover:bg-[#3da582] transition-colors duration-200 font-medium shadow-lg">
                <Calendar className="w-4 h-4" />
                <span>Book Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-[#4fbe99]" />
                <span>info@careerguide.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-[#4fbe99]" />
                <span>123 Career Street, Success City</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CareerCounselingNavbar;