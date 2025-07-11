"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useRef, useState } from "react"
import {
  Calendar,
  BookOpen,
  Users,
  TrendingUp,
  Globe,
  Award,
  Star,
  Heart,
  Target,
  Zap,
  Building,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Quote,
  BarChart3,
  PieChart,
  MapPin,
  Sparkles,
  Trophy,
  Rocket,
  DollarSign,
  ThumbsUp,
} from "lucide-react"

export default function ImpactPage() {
  const [visibleStats, setVisibleStats] = useState([])
  const [animatedNumbers, setAnimatedNumbers] = useState({})
  const statsRef = useRef(null)

  const impactStats = [
    {
      number: 50000,
      suffix: "+",
      label: "Careers Transformed",
      description: "Professionals who found their dream careers",
      icon: <Users className="w-8 h-8" />,
      color: "from-[#d62332] to-[#b51d2a]",
    },
    {
      number: 95,
      suffix: "%",
      label: "Success Rate",
      description: "Clients who achieved their career goals",
      icon: <Target className="w-8 h-8" />,
      color: "from-[#b51d2a] to-[#a51a26]",
    },
    {
      number: 15,
      suffix: "",
      label: "Countries Served",
      description: "Global reach across continents",
      icon: <Globe className="w-8 h-8" />,
      color: "from-[#a51a26] to-[#d62332]",
    },
    {
      number: 150,
      suffix: "%",
      label: "Average Salary Increase",
      description: "Career advancement results",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-[#d62332] to-[#b51d2a]",
    },
    {
      number: 25,
      suffix: "",
      label: "Industry Awards",
      description: "Recognition for excellence",
      icon: <Award className="w-8 h-8" />,
      color: "from-[#b51d2a] to-[#a51a26]",
    },
    {
      number: 4.9,
      suffix: "/5",
      label: "Client Satisfaction",
      description: "Average rating from reviews",
      icon: <Star className="w-8 h-8" />,
      color: "from-[#a51a26] to-[#d62332]",
    },
  ]

  const successStories = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      previousRole: "Marketing Coordinator",
      image: "/placeholder.svg?height=80&width=80",
      story: "Transitioned from marketing to tech with a 180% salary increase",
      timeframe: "6 months",
      salaryIncrease: "180%",
      quote: "CareerGuide didn't just help me change careers - they helped me discover my true potential.",
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager at Microsoft",
      previousRole: "Sales Representative",
      image: "/placeholder.svg?height=80&width=80",
      story: "Leveraged transferable skills to break into product management",
      timeframe: "4 months",
      salaryIncrease: "220%",
      quote: "The personalized guidance made all the difference in my career transformation.",
    },
    {
      name: "Emily Johnson",
      role: "Data Scientist at Amazon",
      previousRole: "Financial Analyst",
      image: "/placeholder.svg?height=80&width=80",
      story: "Successfully pivoted to data science with comprehensive skill development",
      timeframe: "8 months",
      salaryIncrease: "165%",
      quote: "I never thought I could make such a dramatic career change. CareerGuide made it possible.",
    },
  ]

  const industryImpact = [
    {
      title: "Technology Sector",
      percentage: 35,
      placements: "17,500+",
      icon: <Zap className="w-6 h-6" />,
      color: "from-[#d62332] to-[#b51d2a]",
    },
    {
      title: "Healthcare",
      percentage: 20,
      placements: "10,000+",
      icon: <Heart className="w-6 h-6" />,
      color: "from-[#b51d2a] to-[#a51a26]",
    },
    {
      title: "Finance",
      percentage: 18,
      placements: "9,000+",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-[#a51a26] to-[#d62332]",
    },
    {
      title: "Education",
      percentage: 15,
      placements: "7,500+",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-[#d62332] to-[#b51d2a]",
    },
    {
      title: "Consulting",
      percentage: 12,
      placements: "6,000+",
      icon: <Building className="w-6 h-6" />,
      color: "from-[#b51d2a] to-[#a51a26]",
    },
  ]

  const globalReach = [
    { country: "United States", clients: "25,000+", growth: "+45%" },
    { country: "United Kingdom", clients: "8,500+", growth: "+38%" },
    { country: "Canada", clients: "6,200+", growth: "+52%" },
    { country: "Australia", clients: "4,800+", growth: "+41%" },
    { country: "Germany", clients: "3,100+", growth: "+67%" },
    { country: "Singapore", clients: "2,400+", growth: "+73%" },
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-50px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          setVisibleStats((prev) => [...new Set([...prev, index])])

          // Animate numbers
          const targetNumber = impactStats[index]?.number || 0
          let current = 0
          const increment = targetNumber / 50
          const timer = setInterval(() => {
            current += increment
            if (current >= targetNumber) {
              current = targetNumber
              clearInterval(timer)
            }
            setAnimatedNumbers((prev) => ({ ...prev, [index]: Math.floor(current) }))
          }, 30)
        }
      })
    }, observerOptions)

    // Observe stat cards
    const statCards = document.querySelectorAll("[data-stat]")
    statCards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background with Clipping */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
          }}
        ></div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center text-white space-y-8">
            <Badge className="bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 text-[#d62332] border-[#d62332]/20 rounded-full px-8 py-2 text-lg font-semibold backdrop-blur-sm">
              <Trophy className="w-5 h-5 mr-3" />
              Our Impact & Results
              <Sparkles className="w-5 h-5 ml-3" />
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-black">Transforming Lives</span>
              <span className="block bg-gradient-to-r from-[#d62332] via-[#c51f2e] to-[#b51d2a] bg-clip-text text-transparent">Across the Globe</span>
            </h1>

            <p className="text-xl lg:text-2xl text-black/90 font-light leading-relaxed max-w-4xl mx-auto">
              Discover the measurable impact we've made in transforming careers, empowering professionals, and shaping
              the future of work across industries and continents.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#d62332] via-[#c51f2e] to-[#b51d2a] text-white hover:bg-gray-100 hover:scale-105 rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300 border-0"
              >
                <BarChart3 className="w-5 h-5 mr-3" />
                View Success Stories
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
              <Button
                size="lg"
                className="border-2 border-[#d62332] text-[#d62332] hover:text-[#d62332] hover:bg-white hover:scale-105 rounded-2xl px-8 py-6 text-lg font-semibold bg-transparent backdrop-blur-sm transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Join Our Impact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section ref={statsRef} className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 text-[#d62332] border-[#d62332]/20 rounded-full px-6 py-3 text-base font-medium mb-6">
              <BarChart3 className="w-5 h-5 mr-2" />
              Impact by Numbers
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#d62332] via-[#c51f2e] to-[#b51d2a] bg-clip-text text-transparent">
                Measurable Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence is reflected in the tangible outcomes we deliver for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <Card
                key={index}
                data-stat
                data-index={index}
                className={`group border-0 shadow-xl bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  visibleStats.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <CardContent className="p-8 text-center relative">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  <div className="relative space-y-6">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className={`text-[#d62332]`}>{stat.icon}</div>
                    </div>

                    {/* Number */}
                    <div className="space-y-2">
                      <div
                        className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      >
                        {animatedNumbers[index] || 0}
                        {stat.suffix}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#d62332] transition-colors duration-300">
                        {stat.label}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">{stat.description}</p>

                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ${
                          visibleStats.includes(index) ? "w-full" : "w-0"
                        }`}
                        style={{
                          transitionDelay: `${index * 150 + 500}ms`,
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div
                    className={`absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 text-[#d62332] border-[#d62332]/20 rounded-full px-6 py-3 text-base font-medium mb-6">
              <ThumbsUp className="w-5 h-5 mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">Real People,</span>
              <br />
              <span className="bg-gradient-to-r from-[#d62332] via-[#c51f2e] to-[#b51d2a] bg-clip-text text-transparent">
                Real Transformations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the professionals who transformed their careers and achieved their dreams with our guidance
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Profile */}
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-16 h-16 ring-4 ring-[#d62332]/20">
                        <AvatarImage src={story.image || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-r from-[#d62332] to-[#b51d2a] text-white font-bold">
                          {story.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{story.name}</h3>
                        <p className="text-[#d62332] font-semibold">{story.role}</p>
                        <p className="text-sm text-gray-500">Previously: {story.previousRole}</p>
                      </div>
                    </div>

                    {/* Transformation Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gradient-to-r from-[#d62332]/5 to-[#b51d2a]/5 rounded-2xl">
                        <div className="text-2xl font-bold text-[#d62332]">{story.timeframe}</div>
                        <div className="text-sm text-gray-600">Transition Time</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-r from-[#b51d2a]/5 to-[#a51a26]/5 rounded-2xl">
                        <div className="text-2xl font-bold text-[#b51d2a]">{story.salaryIncrease}</div>
                        <div className="text-sm text-gray-600">Salary Increase</div>
                      </div>
                    </div>

                    {/* Story */}
                    <p className="text-gray-600 leading-relaxed">{story.story}</p>

                    {/* Quote */}
                    <Card className="bg-gradient-to-r from-[#d62332]/5 to-[#b51d2a]/5 border-l-4 border-l-[#d62332] border-0">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <Quote className="w-5 h-5 text-[#d62332] flex-shrink-0 mt-1" />
                          <p className="text-gray-700 italic text-sm leading-relaxed">{story.quote}</p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Success Indicator */}
                    <div className="flex items-center justify-center space-x-2 text-[#d62332]">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Career Transformation Complete</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <Badge className="bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 text-[#d62332] border-[#d62332]/20 rounded-full px-6 py-2 text-base font-medium mb-6">
                  <PieChart className="w-5 h-5 mr-2" />
                  Industry Distribution
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#d62332] via-[#c51f2e] to-[#b51d2a] bg-clip-text text-transparent">
                    Sector Impact
                  </span>
                  <br />
                  <span className="text-gray-900">Across Industries</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our expertise spans multiple industries, helping professionals transition and advance in diverse
                  sectors
                </p>
              </div>

              <div className="space-y-6">
                {industryImpact.map((industry, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-r ${industry.color} bg-opacity-10 flex items-center justify-center`}
                        >
                          <div className="text-[#d62332]">{industry.icon}</div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{industry.title}</h3>
                          <p className="text-sm text-gray-600">{industry.placements} placements</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#d62332]">{industry.percentage}%</div>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${industry.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${industry.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-[#d62332]/5 to-[#b51d2a]/5 rounded-3xl overflow-hidden">
                <CardContent className="p-12">
                  <div className="text-center space-y-8">
                    <div className="relative w-64 h-64 mx-auto">
                      {/* Pie Chart Visualization */}
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                          className="opacity-20"
                        />
                        {industryImpact.map((industry, index) => {
                          const offset = industryImpact.slice(0, index).reduce((sum, item) => sum + item.percentage, 0)
                          const circumference = 2 * Math.PI * 40
                          const strokeDasharray = `${(industry.percentage / 100) * circumference} ${circumference}`
                          const strokeDashoffset = -((offset / 100) * circumference)

                          return (
                            <circle
                              key={index}
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke={`url(#gradient-${index})`}
                              strokeWidth="8"
                              strokeDasharray={strokeDasharray}
                              strokeDashoffset={strokeDashoffset}
                              className="transition-all duration-1000"
                            />
                          )
                        })}
                        <defs>
                          {industryImpact.map((industry, index) => (
                            <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#d62332" />
                              <stop offset="100%" stopColor="#b51d2a" />
                            </linearGradient>
                          ))}
                        </defs>
                      </svg>

                      {/* Center Content */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#d62332]">50K+</div>
                          <div className="text-sm text-gray-600">Total Placements</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900">Industry Leadership</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Leading career transformations across technology, healthcare, finance, and emerging industries
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      {/* <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 text-[#d62332] border-[#d62332]/20 rounded-full px-6 py-2 text-base font-medium mb-6">
              <Globe className="w-5 h-5 mr-2" />
              Global Presence
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">Worldwide</span>
              <br />
              <span className="bg-gradient-to-r from-[#d62332] via-[#c51f2e] to-[#b51d2a] bg-clip-text text-transparent">
                Career Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our influence extends across continents, helping professionals achieve career success globally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalReach.map((location, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-6 h-6 text-[#d62332]" />
                        <h3 className="font-semibold text-gray-900">{location.country}</h3>
                      </div>
                      <Badge className="bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 text-[#d62332] border-[#d62332]/20">
                        {location.growth}
                      </Badge>
                    </div>

                    <div className="text-center py-4">
                      <div className="text-3xl font-bold text-[#d62332] mb-1">{location.clients}</div>
                      <div className="text-sm text-gray-600">Clients Served</div>
                    </div>

                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#d62332] to-[#b51d2a] rounded-full w-full transition-all duration-1000"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-r from-[#d62332] to-[#b51d2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-8">
            <div className="flex justify-center">
              <Rocket className="w-16 h-16 animate-bounce" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">Ready to Be Our Next Success Story?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              Join thousands of professionals who have transformed their careers and achieved their dreams with our
              expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-[#d62332] hover:bg-gray-100 hover:scale-105 rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300 border-0"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Start Your Transformation
              </Button>
              <Button
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#d62332] hover:scale-105 rounded-2xl px-8 py-6 text-lg font-semibold bg-transparent backdrop-blur-sm transition-all duration-300"
              >
                <BookOpen className="w-5 h-5 mr-3" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      <br /><br />
    </div>
  )
}