"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight, Star, Users, Award, TrendingUp, CheckCircle, Play, Sparkles } from "lucide-react"

export default function Page() {
  const stats = [
    { number: "2,500+", label: "Careers Launched", icon: <TrendingUp className="w-5 h-5" /> },
    { number: "95%", label: "Success Rate", icon: <Award className="w-5 h-5" /> },
    { number: "10+", label: "Years Experience", icon: <Star className="w-5 h-5" /> },
    { number: "500+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
  ]

  const features = [
    "Personalized career roadmaps",
    "Industry expert guidance",
    "Interview preparation",
    "Resume optimization",
  ]

  return (
    <div className="min-h-screen">
      {/* <CareerCounselingNavbar /> */}

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#4fbe99]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#3da582]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#4fbe99]/5 to-[#3da582]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="flex justify-center lg:justify-start">
                <Badge className="bg-gradient-to-r from-[#4fbe99]/10 to-[#3da582]/10 text-[#4fbe99] border-[#4fbe99]/20 rounded-full px-4 py-2 text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  #1 Career Counseling Platform
                </Badge>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    Transform Your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#4fbe99] via-[#3da582] to-[#2d8a6b] bg-clip-text text-transparent">
                    Career Journey
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    Today
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl">
                  Unlock your potential with personalized career guidance from industry experts.
                  <span className="text-[#4fbe99] font-medium"> Your dream career is just one session away.</span>
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#4fbe99] flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="rounded-2xl bg-gradient-to-r from-[#4fbe99] to-[#3da582] hover:from-[#3da582] hover:to-[#2d8a6b] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border-2 border-gray-300 hover:border-[#4fbe99] text-gray-700 hover:text-[#4fbe99] hover:bg-[#4fbe99]/5 transition-all duration-300 px-8 py-6 text-lg font-semibold bg-white/80 backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-3" />
                  Watch Success Stories
                </Button>
              </div>

              {/* Trust Indicators */}
                {/* <div className="pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-4 font-medium">Trusted by professionals from</p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-60">
                    <div className="text-2xl font-bold text-gray-400">Google</div>
                    <div className="text-2xl font-bold text-gray-400">Microsoft</div>
                    <div className="text-2xl font-bold text-gray-400">Amazon</div>
                    <div className="text-2xl font-bold text-gray-400">Apple</div>
                    </div>
                </div> */}
            </div>

            {/* Right Content - Stats Cards */}
            <div className="relative">
              {/* Main Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-3xl"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#4fbe99]/10 to-[#3da582]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="text-[#4fbe99]">{stat.icon}</div>
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#4fbe99] to-[#3da582] bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Floating Success Card */}
              <Card className="absolute -bottom-6 -left-6 w-64 bg-white/95 backdrop-blur-xl shadow-2xl border-0 rounded-3xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#4fbe99] to-[#3da582] flex items-center justify-center">
                      <Star className="w-5 h-5 text-white fill-current" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Sarah Johnson</div>
                      <div className="text-sm text-gray-500">Software Engineer</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "CareerGuide helped me land my dream job at Google. The guidance was invaluable!"
                  </p>
                  <div className="flex mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#4fbe99] to-[#3da582] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-r from-[#3da582] to-[#2d8a6b] rounded-full opacity-15 animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        {/* <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div> */}
      </section>
    </div>
  )
}
