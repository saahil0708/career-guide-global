"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  BookOpen,
  Lightbulb,
  Target,
  Heart,
  Star,
  GraduationCap,
  Building,
  Sparkles,
  ArrowRight,
  Quote,
  CheckCircle,
  Zap,
  Globe,
  Award,
  TrendingUp,
  Briefcase,
  MapPin,
  Navigation,
} from "lucide-react"

export default function AboutUsPage() {
  const roadmapEvents = [
    {
      year: "2018",
      title: "The Vision Begins",
      description:
        "Dr. Sarah Mitchell identifies the gap in personalized career guidance and begins developing her methodology",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-[#d62332] to-[#b51d2a]",
    },
    {
      year: "2019",
      title: "Company Founded",
      description: "CareerGuide officially launches with a mission to transform careers through expert guidance",
      icon: <Building className="w-6 h-6" />,
      color: "from-[#b51d2a] to-[#a51a26]",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Pivoted to online counseling during pandemic, making career guidance accessible globally",
      icon: <Globe className="w-6 h-6" />,
      color: "from-[#a51a26] to-[#d62332]",
    },
    {
      year: "2021",
      title: "AI Integration",
      description: "Launched AI-powered career matching and personalized recommendation systems",
      icon: <Zap className="w-6 h-6" />,
      color: "from-[#d62332] to-[#b51d2a]",
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Awarded 'Best Career Counseling Platform' by Career Development Association",
      icon: <Award className="w-6 h-6" />,
      color: "from-[#b51d2a] to-[#a51a26]",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded services to 15 countries with localized career guidance programs",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-[#a51a26] to-[#d62332]",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Simple Background with Minimal Clipping */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#d62332] via-[#c51f2e] to-[#b51d2a]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
          }}
        ></div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center text-white space-y-8">
            <Badge className="bg-white/20 text-white border-white/30 rounded-full px-8 py-2 text-lg font-semibold backdrop-blur-sm">
              <Sparkles className="w-5 h-5 mr-3" />
              Our Story & Journey
              <Sparkles className="w-5 h-5 ml-3" />
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block">Transforming Careers</span>
              <span className="block text-white/90">Since 2019</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-4xl mx-auto">
              Born from a vision to democratize career guidance, we help professionals discover their true potential and
              achieve meaningful career transformations.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="bg-white text-[#d62332] hover:bg-gray-100 hover:scale-105 rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300 border-0"
              >
                <BookOpen className="w-5 h-5 mr-3" />
                Our Mission
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
              <Button
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#d62332] hover:scale-105 rounded-2xl px-8 py-6 text-lg font-semibold bg-transparent backdrop-blur-sm transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <Badge className="bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 text-[#d62332] border-[#d62332]/20 rounded-full px-6 py-2 text-base font-medium mb-6">
                  <Heart className="w-5 h-5 mr-2" />
                  Why We Started
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#d62332] via-[#c51f2e] to-[#b51d2a] bg-clip-text text-transparent">
                    A Personal Mission
                  </span>
                  <br />
                  <span className="text-gray-900">Became Global Impact</span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  It all started when our founder, Dr. Sarah Mitchell, witnessed countless talented individuals
                  struggling to find their career direction despite having exceptional skills and qualifications.
                </p>
                <p>
                  After years of working in corporate HR and seeing the disconnect between individual potential and
                  career satisfaction, she realized that personalized, expert guidance could bridge this gap.
                </p>
                <p>
                  What began as a small consulting practice has evolved into a comprehensive platform that combines
                  human expertise with cutting-edge technology to deliver meaningful career transformation results.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Target className="w-5 h-5 text-[#d62332] mr-2" />
                  Our Core Beliefs
                </h3>
                <div className="space-y-3">
                  {[
                    "Every person has unique talents waiting to be discovered",
                    "Career fulfillment is a fundamental right, not a privilege",
                    "Expert guidance can accelerate professional growth exponentially",
                    "Technology should enhance, not replace, human connection",
                  ].map((belief, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#d62332] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{belief}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Simple Visual */}
            <div className="relative">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-[#d62332]/5 to-[#b51d2a]/5 rounded-3xl overflow-hidden">
                <CardContent className="p-12">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#d62332] to-[#b51d2a] rounded-2xl flex items-center justify-center">
                      <Lightbulb className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">The Spark</h3>
                    <p className="text-gray-600 leading-relaxed">
                      "I realized that with the right guidance, anyone could transform their career trajectory and find
                      true professional fulfillment."
                    </p>
                    <div className="text-sm text-gray-500">- Dr. Sarah Mitchell, 2018</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile Section with Clipped Background */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Clipped Background Elements */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
          }}
        ></div>
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d62332]/8 via-[#b51d2a]/5 to-transparent"
          style={{
            clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 85%)",
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-r from-[#a51a26]/5 to-transparent"
          style={{
            clipPath: "polygon(0 30%, 100% 0%, 85% 100%, 0% 100%)",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 text-[#d62332] border-[#d62332]/20 rounded-full px-6 py-2 text-base font-medium mb-6">
              <GraduationCap className="w-5 h-5 mr-2" />
              Meet Our Founder
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">Visionary Leadership</span>
              <br />
              <span className="bg-gradient-to-r from-[#d62332] via-[#c51f2e] to-[#b51d2a] bg-clip-text text-transparent">
                Dr. Sarah Mitchell
              </span>
            </h2>
          </div>

          <Card className="max-w-5xl mx-auto border-0 shadow-2xl bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Left - Photo Section with Advanced Clipping */}
                <div className="relative p-8 lg:p-12 overflow-hidden">
                  {/* Main clipped background */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#d62332]/10 via-[#b51d2a]/15 to-[#a51a26]/10"
                    style={{
                      clipPath: "polygon(0 0, 85% 0, 100% 85%, 15% 100%)",
                    }}
                  ></div>

                  {/* Secondary clipped element */}
                  <div
                    className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-[#d62332]/20 to-[#b51d2a]/20"
                    style={{
                      clipPath: "circle(50% at 50% 50%)",
                    }}
                  ></div>

                  {/* Third clipped element */}
                  <div
                    className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-[#a51a26]/15 to-[#d62332]/15"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    }}
                  ></div>

                  <div className="relative text-center space-y-6 z-10">
                    <div className="relative inline-block">
                      <Avatar className="w-40 h-40 mx-auto border-4 border-white shadow-2xl">
                        <AvatarImage src="/placeholder.svg?height=160&width=160" />
                        <AvatarFallback className="text-3xl font-bold bg-gradient-to-r from-[#d62332] to-[#b51d2a] text-white">
                          SM
                        </AvatarFallback>
                      </Avatar>
                      {/* Decorative ring around avatar */}
                      <div
                        className="absolute -inset-2 bg-gradient-to-r from-[#d62332]/20 to-[#b51d2a]/20 rounded-full -z-10"
                        style={{
                          clipPath: "polygon(0% 20%, 20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%)",
                        }}
                      ></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Dr. Sarah Mitchell</h3>
                      <p className="text-lg text-[#d62332] font-semibold">Founder & CEO</p>
                      <p className="text-gray-600 mt-2">PhD in Psychology, Stanford University</p>
                    </div>
                  </div>
                </div>

                {/* Right - Content Section */}
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      With over 15 years of experience in organizational psychology and career development, Dr. Mitchell
                      has dedicated her career to understanding what drives professional fulfillment.
                    </p>
                    <p className="leading-relaxed">
                      She holds a PhD in Psychology from Stanford University and has worked with Fortune 500 companies
                      to develop innovative talent management strategies before founding CareerGuide.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Star className="w-5 h-5 text-[#d62332] mr-2" />
                      Professional Highlights
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Published 25+ research papers on career psychology",
                        "Keynote speaker at 50+ international conferences",
                        "Featured in Harvard Business Review and Forbes",
                        "Certified Master Career Counselor (CMCC)",
                        "Former VP of Talent Development at Tech Giants",
                      ].map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#d62332] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Card className="bg-gradient-to-r from-[#d62332]/5 to-[#b51d2a]/5 border-l-4 border-l-[#d62332] border-0">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Quote className="w-6 h-6 text-[#d62332] flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-700 italic leading-relaxed">
                            "Every person has unique talents waiting to be discovered. My mission is to help individuals
                            unlock their potential and find careers that truly fulfill them."
                          </p>
                          <p className="text-xs text-gray-500 mt-2">- Dr. Sarah Mitchell</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Roadmap Section */}
      {/* <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 text-[#d62332] border-[#d62332]/20 rounded-full px-6 py-3 text-base font-medium mb-6">
              <Navigation className="w-5 h-5 mr-2" />
              Our Roadmap
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#d62332] via-[#c51f2e] to-[#b51d2a] bg-clip-text text-transparent">
                Journey of Growth
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Follow the path of our evolution - from vision to global impact
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 800 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 100 Q200 50 300 100 T500 150 Q600 200 700 150"
                stroke="url(#roadGradient)"
                strokeWidth="8"
                fill="none"
                strokeDasharray="0"
                className="opacity-30"
              />
              <defs>
                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d62332" />
                  <stop offset="50%" stopColor="#c51f2e" />
                  <stop offset="100%" stopColor="#b51d2a" />
                </linearGradient>
              </defs>
            </svg>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roadmapEvents.map((event, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-8 h-8 bg-white border-4 border-[#d62332] rounded-full shadow-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[#d62332]" />
                    </div>
                  </div>

                  <Card className="border-0 shadow-xl bg-white rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 pt-8">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${event.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          {event.icon}
                        </div>

                        <div
                          className={`text-3xl font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}
                        >
                          {event.year}
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#d62332] transition-colors duration-300">
                          {event.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-sm">{event.description}</p>

                        <div className="flex justify-center pt-2">
                          <div className="w-12 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${event.color} rounded-full transition-all duration-1000 group-hover:w-full`}
                              style={{ width: `${((index + 1) / roadmapEvents.length) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {index < roadmapEvents.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#d62332] to-[#b51d2a] opacity-30 z-10"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-[#d62332] to-[#b51d2a] rounded-full flex items-center justify-center shadow-2xl">
                  <Star className="w-8 h-8 text-white fill-current" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                  <p className="text-sm font-semibold text-gray-600">Present Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-r from-[#d62332] to-[#b51d2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join the professionals who have transformed their careers with our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#d62332] hover:bg-gray-100 hover:scale-105 rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300 border-0"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#d62332] hover:scale-105 rounded-2xl px-8 py-6 text-lg font-semibold bg-transparent backdrop-blur-sm transition-all duration-300"
            >
              <Briefcase className="w-5 h-5 mr-3" />
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}