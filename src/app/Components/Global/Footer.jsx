"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Star,
  Users,
  Award,
  Heart,
  Shield,
  CheckCircle,
  MessageCircle,
  BookOpen,
  Target,
  TrendingUp,
  Send,
} from "lucide-react"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const footerSections = [
    {
      title: "Our Services",
      links: [
        { name: "Individual Career Counseling", href: "/services/individual", icon: <Users className="w-4 h-4" /> },
        { name: "Group Career Workshops", href: "/services/group", icon: <MessageCircle className="w-4 h-4" /> },
        { name: "Student Career Guidance", href: "/services/student", icon: <BookOpen className="w-4 h-4" /> },
        { name: "Career Transition Support", href: "/services/transition", icon: <Target className="w-4 h-4" /> },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Career Assessment Tools", href: "/resources/assessment", icon: <Award className="w-4 h-4" /> },
        { name: "Resume Templates", href: "/resources/resume", icon: <BookOpen className="w-4 h-4" /> },
        { name: "Interview Guides", href: "/resources/interview", icon: <Users className="w-4 h-4" /> },
        { name: "Career Blog", href: "/blog", icon: <TrendingUp className="w-4 h-4" /> },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about", icon: <Heart className="w-4 h-4" /> },
        { name: "Our Counselors", href: "/team", icon: <Users className="w-4 h-4" /> },
        { name: "Success Stories", href: "/testimonials", icon: <Star className="w-4 h-4" /> },
        { name: "Contact Us", href: "/contact", icon: <Mail className="w-4 h-4" /> },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "/faq", icon: <MessageCircle className="w-4 h-4" /> },
        { name: "Privacy Policy", href: "/privacy", icon: <Shield className="w-4 h-4" /> },
        { name: "Terms of Service", href: "/terms", icon: <CheckCircle className="w-4 h-4" /> },
        { name: "Cancellation Policy", href: "/cancellation", icon: <Calendar className="w-4 h-4" /> },
      ],
    },
  ]

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#", color: "hover:text-blue-700" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#", color: "hover:text-pink-600" },
    { name: "YouTube", icon: <Youtube className="w-5 h-5" />, href: "#", color: "hover:text-red-600" },
  ]

  const quickStats = [
    { number: "1,200+", label: "Clients Counseled", icon: <Users className="w-4 h-4" /> },
    { number: "92%", label: "Success Rate", icon: <TrendingUp className="w-4 h-4" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="w-4 h-4" /> },
    { number: "4.9/5", label: "Client Rating", icon: <Star className="w-4 h-4" /> },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4fbe99]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#3da582]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#4fbe99] to-[#3da582] bg-clip-text text-transparent">
                    Stay Updated
                  </span>{" "}
                  on Career Insights
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Get weekly career tips, industry insights, and exclusive resources delivered to your inbox. Join our
                  community of career-focused professionals.
                </p>
              </div>

              <div className="lg:text-right">
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md lg:ml-auto">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4fbe99] focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="rounded-2xl bg-gradient-to-r from-[#4fbe99] to-[#3da582] hover:from-[#3da582] hover:to-[#2d8a6b] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-6 py-3 font-semibold"
                  >
                    {isSubscribed ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </form>
                <p className="text-sm text-gray-400 mt-3">
                  <Shield className="w-4 h-4 inline mr-1" />
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4fbe99] to-[#3da582] flex items-center justify-center shadow-xl">
                    <div className="w-7 h-7 rounded-xl bg-white/90 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-lg bg-gradient-to-br from-[#4fbe99] to-[#3da582]"></div>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-[#4fbe99] to-[#3da582] rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">CareerGuide</h2>
                  <p className="text-sm text-gray-400">Professional Counseling</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Empowering professionals to discover their true potential and achieve career success through
                personalized counseling and expert guidance. Your journey to career fulfillment starts here.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {quickStats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-white/5 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <div className="text-[#4fbe99]">{stat.icon}</div>
                      <span className="text-lg font-bold text-white">{stat.number}</span>
                    </div>
                    <span className="text-xs text-gray-400">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:bg-white/20 transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-white mb-6 relative">
                  {section.title}
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#4fbe99] to-[#3da582] rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group flex items-center space-x-3 text-gray-400 hover:text-[#4fbe99] transition-colors duration-300"
                      >
                        <div className="text-gray-500 group-hover:text-[#4fbe99] transition-colors duration-300">
                          {link.icon}
                        </div>
                        <span className="text-sm">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#4fbe99]/20 to-[#3da582]/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#4fbe99]" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Visit Us</h4>
                  <p className="text-sm text-gray-400">
                    123 Career Street
                    <br />
                    Success City, SC 12345
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#4fbe99]/20 to-[#3da582]/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#4fbe99]" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Call Us</h4>
                  <p className="text-sm text-gray-400">
                    (555) 123-4567
                    <br />
                    Mon-Fri 9AM-6PM
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#4fbe99]/20 to-[#3da582]/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#4fbe99]" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Email Us</h4>
                  <p className="text-sm text-gray-400">
                    info@careerguide.com
                    <br />
                    support@careerguide.com
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#4fbe99]/20 to-[#3da582]/20 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#4fbe99]" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Book Session</h4>
                  <Button
                    size="sm"
                    className="rounded-xl bg-gradient-to-r from-[#4fbe99] to-[#3da582] hover:from-[#3da582] hover:to-[#2d8a6b] text-white text-xs px-4 py-2"
                  >
                    Schedule Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-sm text-gray-400">© 2024 CareerGuide. All rights reserved.</p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <a href="/privacy" className="hover:text-[#4fbe99] transition-colors duration-300">
                    Privacy Policy
                  </a>
                  <span>•</span>
                  <a href="/terms" className="hover:text-[#4fbe99] transition-colors duration-300">
                    Terms of Service
                  </a>
                  <span>•</span>
                  <a href="/cookies" className="hover:text-[#4fbe99] transition-colors duration-300">
                    Cookie Policy
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Badge className="bg-gradient-to-r from-[#4fbe99]/20 to-[#3da582]/20 text-[#4fbe99] border-[#4fbe99]/30 text-xs">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure & Confidential
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-400/30 text-xs">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Licensed Counselors
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
