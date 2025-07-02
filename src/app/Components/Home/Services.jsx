"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Calendar,
  BookOpen,
  Target,
  MessageCircle,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Clock,
  User,
  GraduationCap,
  Briefcase,
  Heart,
  MapPin,
} from "lucide-react"

const ServicesPreview = () => {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      id: 1,
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Individual Career Counseling",
      description:
        "One-on-one personalized sessions to explore your career path, identify strengths, and create actionable plans.",
      features: ["Personal Career Assessment", "Goal Setting & Planning", "Skills Gap Analysis", "Industry Insights"],
      sessions: "4-6 sessions",
      duration: "45 mins each",
      badge: "Most Popular",
      color: "from-[#d62332] to-[#b51d2a]",
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      title: "Group Career Workshops",
      description:
        "Interactive group sessions covering essential career development topics with peer learning opportunities.",
      features: [
        "Resume Writing Workshop",
        "Interview Skills Training",
        "Networking Strategies",
        "LinkedIn Optimization",
      ],
      sessions: "Weekly sessions",
      duration: "2 hours each",
      badge: "Interactive",
      color: "from-[#b51d2a] to-[#a51a26]",
    },
    {
      id: 3,
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Student Career Guidance",
      description:
        "Specialized counseling for students and recent graduates to navigate early career decisions and opportunities.",
      features: ["Major Selection Guidance", "Internship Planning", "Entry-level Job Search", "Career Exploration"],
      sessions: "3-4 sessions",
      duration: "60 mins each",
      badge: "For Students",
      color: "from-[#d62332] to-[#c51f2e]",
    },
    {
      id: 4,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Transition Support",
      description:
        "Comprehensive support for professionals looking to change careers, industries, or advance to leadership roles.",
      features: ["Transition Planning", "Skill Transferability", "Industry Research", "Leadership Development"],
      sessions: "6-8 sessions",
      duration: "60 mins each",
      badge: "Advanced",
      color: "from-[#a51a26] to-[#d62332]",
    },
  ]

  const counselingAreas = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Career Exploration",
      description: "Discover careers that align with your interests, values, and skills",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal Setting",
      description: "Create clear, achievable career goals with actionable timelines",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Skill Development",
      description: "Identify and develop skills needed for your target career path",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Find careers that support your personal values and lifestyle",
    },
  ]

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "1,200+", label: "Clients Counseled" },
    { icon: <Calendar className="w-6 h-6" />, number: "5,000+", label: "Sessions Conducted" },
    { icon: <TrendingUp className="w-6 h-6" />, number: "92%", label: "Career Satisfaction" },
    { icon: <MapPin className="w-6 h-6" />, number: "15+", label: "Years Experience" },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-80 h-80 bg-[#d62332]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-[#b51d2a]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Badge className="bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 text-[#d62332] border-[#d62332]/20 rounded-full px-6 py-3 text-sm font-medium">
              <Heart className="w-4 h-4 mr-2" />
              Career Counseling Services
            </Badge>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Professional Career
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#d62332] via-[#c51f2e] to-[#b51d2a] bg-clip-text text-transparent">
              Counseling Services
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced career counselors provide personalized guidance to help you discover your path, overcome
            challenges, and achieve your professional goals through proven counseling methodologies.
          </p>
        </div>

        {/* Counseling Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {counselingAreas.map((area, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-[#d62332]">{area.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/90 backdrop-blur-sm"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <CardContent className="p-8">
                {/* Service Badge */}
                <div className="flex items-center justify-between mb-6">
                  <Badge
                    className={`bg-gradient-to-r ${service.color} text-white border-0 rounded-full px-4 py-2 text-sm font-medium`}
                  >
                    {service.badge}
                  </Badge>
                  <div className="flex items-center space-x-4 text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{service.sessions}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{service.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Service Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">What We Cover</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-[#d62332] flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-gray-100">
                  <Button
                    className={`w-full rounded-2xl bg-gradient-to-r ${service.color} hover:shadow-xl transition-all duration-300 hover:scale-105 py-3 text-white font-semibold group`}
                  >
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Hover Effect Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                ></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#d62332] to-[#b51d2a] rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Counseling Impact</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Trusted by professionals, students, and career changers to navigate their professional journey with
              confidence.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to take the next step in your career journey?{" "}
            <span className="text-[#d62332] font-semibold">Let's explore your possibilities together.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-2xl bg-gradient-to-r from-[#d62332] to-[#b51d2a] hover:from-[#c51f2e] hover:to-[#a51a26] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-2xl border-2 border-[#d62332] text-[#d62332] hover:bg-[#d62332] hover:text-white transition-all duration-300 px-8 py-6 text-lg font-semibold"
            >
              <User className="w-5 h-5 mr-3" />
              Meet Our Counselors
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview