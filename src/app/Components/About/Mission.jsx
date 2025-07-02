"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Target,
  Eye,
  Heart,
  Users,
  Lightbulb,
  Shield,
  Compass,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Quote,
  Zap,
  Globe,
  Award,
  TrendingUp,
  BookOpen,
  Briefcase,
} from "lucide-react"

export default function EnhancedMissionVisionValues() {
  const mainSections = [
    {
      id: "mission",
      title: "Our Mission",
      icon: <Target className="w-6 h-6" />,
      subtitle: "Empowering Career Transformation",
      description:
        "To empower individuals with personalized career guidance and expert insights, helping them navigate their professional journey with confidence and achieve their dream careers.",
      keyPoints: [
        "Personalized career roadmaps tailored to individual strengths",
        "Expert guidance from industry professionals",
        "Comprehensive skill development programs",
        "Continuous support throughout career transitions",
      ],
      gradient: "from-[#d62332] to-[#b51d2a]",
      testimonial: {
        name: "Sarah Chen",
        role: "Software Engineer at Google",
        avatar: "/placeholder.svg?height=40&width=40",
        quote: "The personalized guidance helped me transition from marketing to tech. Best career decision ever!",
      },
    },
    {
      id: "vision",
      title: "Our Vision",
      icon: <Eye className="w-6 h-6" />,
      subtitle: "Shaping the Future of Work",
      description:
        "To become the world's leading career counseling platform, where every professional finds their perfect career path and organizations discover exceptional talent.",
      keyPoints: [
        "Global network of career opportunities",
        "AI-powered matching algorithms",
        "Industry-leading placement rates",
        "Sustainable career growth strategies",
      ],
      gradient: "from-[#b51d2a] to-[#a51a26]",
      testimonial: {
        name: "Michael Rodriguez",
        role: "Product Manager at Microsoft",
        avatar: "/placeholder.svg?height=40&width=40",
        quote: "Their vision for career development is unmatched. I achieved my goals faster than expected.",
      },
    },
    {
      id: "values",
      title: "Our Values",
      icon: <Heart className="w-6 h-6" />,
      subtitle: "Built on Trust & Excellence",
      description:
        "We believe in integrity, excellence, and genuine care for each individual's unique journey. Every interaction is built on trust, respect, and commitment to your success.",
      keyPoints: [
        "Unwavering commitment to ethical practices",
        "Excellence in every client interaction",
        "Respect for individual career aspirations",
        "Transparent and honest communication",
      ],
      gradient: "from-[#a51a26] to-[#d62332]",
      testimonial: {
        name: "Emily Johnson",
        role: "Data Scientist at Amazon",
        avatar: "/placeholder.svg?height=40&width=40",
        quote: "The values-driven approach made all the difference. I felt supported throughout my journey.",
      },
    },
  ]

  const coreValues = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "People-Centric Approach",
      description: "Every decision we make puts our clients' success and well-being at the forefront",
      features: ["Individual attention", "Customized solutions", "24/7 support"],
      color: "from-[#d62332]/20 to-[#b51d2a]/20",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Continuous Innovation",
      description: "Constantly evolving our methods and technologies to serve you better",
      features: ["Latest industry trends", "AI-powered insights", "Modern techniques"],
      color: "from-[#b51d2a]/20 to-[#a51a26]/20",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Confidentiality",
      description: "Your career journey and personal information are completely secure with us",
      features: ["Data protection", "Privacy first", "Secure platform"],
      color: "from-[#a51a26]/20 to-[#d62332]/20",
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Strategic Guidance",
      description: "Providing clear, actionable direction for your professional development",
      features: ["Clear roadmaps", "Milestone tracking", "Goal achievement"],
      color: "from-[#d62332]/20 to-[#b51d2a]/20",
    },
  ]

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#d62332]/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#b51d2a]/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-to-r from-[#d62332]/4 to-[#b51d2a]/4 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex justify-center mb-8">
            <Badge className="bg-gradient-to-r from-[#d62332]/15 to-[#b51d2a]/15 text-[#d62332] border-[#d62332]/30 rounded-full px-8 py-2 text-lg font-semibold shadow-lg">
              <Sparkles className="w-5 h-5 mr-3" />
              Our Foundation & Philosophy
              <Sparkles className="w-5 h-5 ml-3" />
            </Badge>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Driven by
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#d62332] via-[#b51d2a] to-[#a51a26] bg-clip-text text-transparent">
              Purpose & Excellence
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Discover the core principles and unwavering commitment that drive our mission to transform careers and
            empower professionals worldwide
          </p>

          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-[#d62332]" />
              <span>Global Impact</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-[#d62332]" />
              <span>Award Winning</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-[#d62332]" />
              <span>Proven Results</span>
            </div>
          </div>
        </div>

        {/* Enhanced Tabs Section */}
        <div className="mb-20">
          <Tabs defaultValue="mission" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-3 bg-white/90 backdrop-blur-sm rounded-2xl p-1.5 shadow-xl border border-gray-100/50 w-full max-w-3xl h-16">
                {mainSections.map((section) => (
                  <TabsTrigger
                    key={section.id}
                    value={section.id}
                    className="relative rounded-xl h-12 px-4 text-sm sm:text-base font-semibold text-gray-600 hover:text-gray-900 data-[state=active]:text-white transition-all duration-500 ease-in-out data-[state=active]:shadow-lg overflow-hidden group"
                  >
                    {/* Active background with smooth animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#d62332] to-[#b51d2a] opacity-0 data-[state=active]:opacity-100 transition-all duration-500 ease-in-out rounded-xl group-data-[state=active]:opacity-100"></div>

                    {/* Hover background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-xl"></div>

                    {/* Content */}
                    <div className="relative flex items-center justify-center space-x-2 h-full">
                      <div className="flex-shrink-0 transition-transform duration-300 group-data-[state=active]:scale-110">
                        {section.icon}
                      </div>
                      <span className="hidden sm:inline font-medium transition-all duration-300">{section.title}</span>
                      <span className="sm:hidden font-medium transition-all duration-300">
                        {section.title.split(" ")[1] || section.title}
                      </span>
                    </div>

                    {/* Active indicator */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-500 ease-in-out group-data-[state=active]:w-8"></div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {mainSections.map((section) => (
              <TabsContent
                key={section.id}
                value={section.id}
                className="mt-0 animate-in fade-in-50 slide-in-from-bottom-4 duration-700"
              >
                <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden mx-auto max-w-6xl">
                  <CardHeader className={`bg-gradient-to-r ${section.gradient} text-white p-8 lg:p-12`}>
                    <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
                      <div className="flex-1">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-2">{section.title}</h3>
                        <p className="text-xl opacity-90">{section.subtitle}</p>
                      </div>
                      <div className="mt-6 lg:mt-0 lg:ml-8">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                          <div className="w-12 h-12 text-white flex items-center justify-center">{section.icon}</div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                      {/* Left Content */}
                      <div className="space-y-8">
                        <p className="text-lg text-gray-700 leading-relaxed text-center lg:text-left">
                          {section.description}
                        </p>

                        <div className="space-y-6">
                          <h4 className="text-xl font-semibold text-gray-900 flex items-center justify-center lg:justify-start">
                            <CheckCircle className="w-5 h-5 text-[#d62332] mr-2" />
                            Key Focus Areas
                          </h4>
                          <div className="space-y-4">
                            {section.keyPoints.map((point, idx) => (
                              <div key={idx} className="flex items-start space-x-3 group">
                                <div className="w-2 h-2 bg-[#d62332] rounded-full mt-2 group-hover:scale-150 transition-transform duration-200 flex-shrink-0"></div>
                                <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200 text-left">
                                  {point}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-center lg:justify-start">
                          <Button
                            className={`bg-gradient-to-r ${section.gradient} hover:shadow-xl transition-all duration-300 rounded-xl px-8 py-3`}
                          >
                            Learn More About {section.title}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>

                      {/* Right Content - Testimonial */}
                      <div className="flex justify-center lg:justify-start">
                        <Card className="bg-gradient-to-br from-gray-50 to-white border-l-4 border-l-[#d62332] shadow-lg w-full max-w-md">
                          <CardContent className="p-6">
                            <div className="space-y-4">
                              <div className="flex justify-center lg:justify-start">
                                <Quote className="w-8 h-8 text-[#d62332]" />
                              </div>
                              <p className="text-gray-700 italic text-center lg:text-left">
                                "{section.testimonial.quote}"
                              </p>
                              <div className="flex items-center justify-center lg:justify-start space-x-3 pt-4 border-t border-gray-100">
                                <Avatar className="w-10 h-10">
                                  <AvatarImage src={section.testimonial.avatar || "/placeholder.svg"} />
                                  <AvatarFallback>
                                    {section.testimonial.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="text-center lg:text-left">
                                  <p className="text-sm font-semibold text-gray-900">{section.testimonial.name}</p>
                                  <p className="text-xs text-gray-500">{section.testimonial.role}</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="flex justify-center mb-16">
          <Separator className="w-32 bg-gradient-to-r from-transparent via-[#d62332]/30 to-transparent" />
        </div>

        {/* Enhanced Core Values */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 text-[#d62332] border-[#d62332]/20 rounded-full px-6 py-2 text-base font-medium">
                <Zap className="w-5 h-5 mr-2" />
                Core Values
              </Badge>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#d62332] via-[#b51d2a] to-[#a51a26] bg-clip-text text-transparent">
                What Drives Us Forward
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The fundamental principles that shape our culture, guide our decisions, and define our commitment to
              excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden relative h-full"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <CardContent className="relative p-8 h-full flex flex-col">
                  <div className="flex flex-col items-center text-center space-y-6 flex-1">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-[#d62332]">{value.icon}</div>
                    </div>

                    <div className="space-y-4 flex-1">
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#d62332] transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>

                    <div className="space-y-3 w-full">
                      {value.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#d62332] flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-[#d62332] to-[#b51d2a] border-0 shadow-2xl rounded-3xl overflow-hidden max-w-4xl mx-auto">
            <CardContent className="p-12 text-white text-center">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Career?</h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have achieved their career goals with our guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#d62332] hover:bg-gray-100 rounded-xl px-8 py-4 text-lg font-semibold"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Start Your Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-xl px-8 py-4 text-lg font-semibold bg-transparent"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  Explore Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}