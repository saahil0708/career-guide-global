"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight, Play, Users, TrendingUp, Heart, CheckCircle } from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Google",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The career counseling sessions completely transformed my approach to job searching. My counselor helped me identify my core strengths and guided me through a strategic career transition. Within 3 months, I landed my dream role at Google with a 40% salary increase!",
      outcome: "40% salary increase",
      sessions: "6 sessions",
      category: "Career Transition",
      videoThumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Marketing Director",
      company: "Meta",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "As a recent graduate, I felt completely lost about my career direction. The student career guidance program helped me explore different paths, understand my values, and create a clear roadmap. The group workshops were incredibly valuable for networking and learning from peers.",
      outcome: "Dream job in 2 months",
      sessions: "4 sessions + workshops",
      category: "Student Guidance",
      videoThumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Netflix",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "After 10 years in finance, I wanted to transition to tech but didn't know where to start. The career transition support was phenomenal. My counselor helped me identify transferable skills, plan my learning path, and navigate the industry change successfully.",
      outcome: "Successful career pivot",
      sessions: "8 sessions",
      category: "Career Transition",
      videoThumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Product Manager",
      company: "Amazon",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The individual counseling sessions gave me clarity on my career goals and helped me develop a strategic plan. My counselor's insights into the tech industry were invaluable. The personalized approach made all the difference in achieving my career objectives.",
      outcome: "Promoted to Senior PM",
      sessions: "5 sessions",
      category: "Individual Counseling",
      videoThumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "UX Designer",
      company: "Adobe",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The group workshops were amazing! Learning alongside other professionals facing similar challenges was so encouraging. The resume workshop and interview coaching gave me the confidence I needed. I received three job offers within a month!",
      outcome: "3 job offers",
      sessions: "Group workshops",
      category: "Group Workshops",
      videoThumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Engineering Manager",
      company: "Microsoft",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Moving from individual contributor to management required a complete mindset shift. The career counseling helped me understand leadership dynamics, develop my management style, and navigate the transition smoothly. Best investment in my career!",
      outcome: "Leadership transition",
      sessions: "7 sessions",
      category: "Career Transition",
      videoThumbnail: "/placeholder.svg?height=200&width=300",
    },
  ]

  const stats = [
    { number: "98%", label: "Client Satisfaction", icon: <Heart className="w-5 h-5" /> },
    { number: "85%", label: "Career Goal Achievement", icon: <TrendingUp className="w-5 h-5" /> },
    { number: "1,200+", label: "Success Stories", icon: <Users className="w-5 h-5" /> },
    { number: "4.9/5", label: "Average Rating", icon: <Star className="w-5 h-5" /> },
  ]

  const categories = ["All", "Individual Counseling", "Group Workshops", "Student Guidance", "Career Transition"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredTestimonials = testimonials.filter(
    (testimonial) => selectedCategory === "All" || testimonial.category === selectedCategory
  )

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, filteredTestimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
    setIsAutoPlaying(false)
  }

  const currentData = filteredTestimonials[currentTestimonial] || testimonials[0]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-[#d62332]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#b51d2a]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Badge className="bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 text-[#d62332] border-[#d62332]/20 rounded-full px-6 py-3 text-sm font-medium">
              <Quote className="w-4 h-4 mr-2" />
              Client Success Stories
            </Badge>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {`Real Stories `}
            </span>
            <span className="bg-gradient-to-r from-[#d62332] via-[#c51f2e] to-[#b51d2a] bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our career counseling has helped professionals like you achieve their career goals and find
            fulfillment in their professional journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentTestimonial(0)
              }}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#d62332] to-[#b51d2a] text-white shadow-lg"
                  : "border-[#d62332]/30 text-[#d62332] hover:bg-[#d62332]/5"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="mb-16">
          <Card className="relative overflow-hidden border-0 shadow-2xl rounded-3xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Video/Image */}
                <div className="relative bg-gradient-to-br from-[#d62332]/10 to-[#b51d2a]/10 p-8 lg:p-12 flex items-center justify-center">
                  <div className="relative">
                    <img
                      src={currentData.videoThumbnail || "/placeholder.svg"}
                      alt="Video testimonial"
                      className="w-full max-w-sm rounded-2xl shadow-xl"
                    />
                    <Button
                      size="lg"
                      className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 hover:bg-white text-[#d62332] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(currentData.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-gray-500 font-medium">
                      {currentData.rating}.0 out of 5 stars
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-8">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#d62332]/20" />
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed italic pl-6">
                      "{currentData.text}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={currentData.image || "/placeholder.svg"}
                      alt={currentData.name}
                      className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{currentData.name}</h4>
                      <p className="text-[#d62332] font-semibold">
                        {currentData.role} at {currentData.company}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#d62332]/5 rounded-2xl p-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <CheckCircle className="w-4 h-4 text-[#d62332]" />
                        <span className="text-sm font-semibold text-gray-900">Outcome</span>
                      </div>
                      <p className="text-sm text-gray-700">{currentData.outcome}</p>
                    </div>
                    <div className="bg-[#b51d2a]/5 rounded-2xl p-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <Users className="w-4 h-4 text-[#b51d2a]" />
                        <span className="text-sm font-semibold text-gray-900">Sessions</span>
                      </div>
                      <p className="text-sm text-gray-700">{currentData.sessions}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-[#d62332]/30 text-[#d62332] hover:bg-[#d62332] hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-[#d62332] w-8" : "bg-gray-300 hover:bg-[#d62332]/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-[#d62332]/30 text-[#d62332] hover:bg-[#d62332] hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Testimonial Grid Preview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">More Success Stories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <Card
                key={testimonial.id}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white/80 backdrop-blur-sm cursor-pointer"
                onClick={() => {
                  setCurrentTestimonial(testimonials.indexOf(testimonial))
                  setSelectedCategory("All")
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-[#d62332]">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-3">{testimonial.text}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Badge className="bg-[#d62332]/10 text-[#d62332] text-xs">{testimonial.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials