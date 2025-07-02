"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import {
  Camera,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Calendar,
  Tag,
  ArrowRight,
  Play,
  Pause,
} from "lucide-react"

const studentGallery = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    title: "Science Fair Winners",
    description:
      "Our students showcasing innovative projects at the annual science fair, demonstrating creativity and scientific excellence that defines our academic community.",
    category: "achievements",
    date: "2024-03-15",
    tags: ["science", "innovation", "competition"],
    featured: true,
    story:
      "The annual science fair brought together brilliant minds from across our campus, showcasing groundbreaking research and innovative solutions to real-world problems.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=600&h=800&fit=crop",
    title: "Campus Life",
    description: "Students enjoying extracurricular activities on campus",
    category: "campus",
    date: "2024-03-10",
    tags: ["community", "activities", "friendship"],
    featured: false,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=800&fit=crop",
    title: "Study Group",
    description: "Collaborative learning in our state-of-the-art library",
    category: "learning",
    date: "2024-03-08",
    tags: ["education", "teamwork", "research"],
    featured: true,
    story:
      "Late-night study sessions in our modern library spaces foster collaboration and deep learning among students pursuing academic excellence.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop",
    title: "Project Presentation",
    description: "Students presenting their semester projects to faculty",
    category: "projects",
    date: "2024-03-05",
    tags: ["presentation", "technology", "demonstration"],
    featured: false,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
    title: "Classroom Discussion",
    description: "Engaging classroom debate on contemporary issues",
    category: "learning",
    date: "2024-03-03",
    tags: ["discussion", "critical thinking", "engagement"],
    featured: false,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=800&fit=crop",
    title: "Graduation Day",
    description: "Celebrating our graduating class of 2024",
    category: "achievements",
    date: "2024-02-28",
    tags: ["graduation", "celebration", "success"],
    featured: true,
    story:
      "A momentous day celebrating the achievements of our graduating class, marking the culmination of years of dedication and hard work.",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    title: "Robotics Club",
    description: "Students working on their robotics competition entry",
    category: "clubs",
    date: "2024-02-25",
    tags: ["robotics", "STEM", "engineering"],
    featured: false,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=600&h=800&fit=crop",
    title: "Art Exhibition",
    description: "Showcasing student artwork in our annual exhibition",
    category: "arts",
    date: "2024-02-20",
    tags: ["creativity", "expression", "talent"],
    featured: false,
  },
]

const categories = [
  { id: "all", label: "All Stories", count: studentGallery.length, icon: <Camera className="w-4 h-4" /> },
  { id: "achievements", label: "Achievements", count: 2, icon: <Award className="w-4 h-4" /> },
  { id: "learning", label: "Learning", count: 2, icon: <BookOpen className="w-4 h-4" /> },
  { id: "campus", label: "Campus Life", count: 1, icon: <Users className="w-4 h-4" /> },
  { id: "projects", label: "Projects", count: 1, icon: <GraduationCap className="w-4 h-4" /> },
  { id: "clubs", label: "Clubs", count: 1, icon: <Users className="w-4 h-4" /> },
  { id: "arts", label: "Arts", count: 1, icon: <Star className="w-4 h-4" /> },
]

export default function StudentGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)
  const [likedImages, setLikedImages] = useState(new Set())
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const timelineRef = useRef(null)

  const filteredImages = studentGallery.filter((image) => {
    const matchesCategory = selectedCategory === "all" || image.category === selectedCategory
    const matchesSearch =
      searchTerm === "" ||
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredImages = filteredImages.filter((img) => img.featured)
  const regularImages = filteredImages.filter((img) => !img.featured)

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || featuredImages.length === 0) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, featuredImages.length])

  const handleLike = (imageId) => {
    setLikedImages((prev) => {
      const newLiked = new Set(prev)
      if (newLiked.has(imageId)) {
        newLiked.delete(imageId)
      } else {
        newLiked.add(imageId)
      }
      return newLiked
    })
  }

  const openLightbox = (imageId) => {
    setSelectedImage(imageId)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  const selectedImageData = selectedImage ? studentGallery.find((img) => img.id === selectedImage) : null

  const scrollTimeline = (direction) => {
    if (timelineRef.current) {
      const scrollAmount = 300
      timelineRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#d62332]/10">
      {/* Hero Section with Floating Elements */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#d62332]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b51d2a]/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#d62332]/5 to-[#b51d2a]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 text-[#d62332] border border-[#d62332]/50 rounded-full px-6 py-2 text-base font-medium">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Students' Moments
                </Badge>

                <h1 className="text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="block text-slate-900">Every</span>
                  <span className="block bg-gradient-to-r from-[#d62332] via-[#b51d2a] to-[#a51a26] bg-clip-text text-transparent">
                    Moment
                  </span>
                  <span className="block text-slate-900">Matters</span>
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  Experience the journey of academic excellence, creative expression, and unforgettable moments that
                  define our vibrant student community.
                </p>
              </div>

              {/* Interactive Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: `${studentGallery.length}+`, label: "Stories Captured", color: "[#d62332]" },
                  { value: `${categories.length - 1}`, label: "Categories", color: "[#b51d2a]" },
                ].map((stat, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div
                      className={`bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:bg-[#d62332]/5`}
                    >
                      <div
                        className={`text-4xl font-bold text-[#d62332] mb-2 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-slate-600 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Featured Carousel */}
            <div className="relative">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                {featuredImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <Badge className="bg-gradient-to-r from-[#d62332]/20 to-[#b51d2a]/20 text-[#ff9ea6] border border-[#d62332]/30 mb-4">
                        Featured Story
                      </Badge>
                      <h3 className="text-3xl font-bold mb-3">{image.title}</h3>
                      <p className="text-white/90 text-lg leading-relaxed mb-4">{image.story || image.description}</p>
                      <Button
                        onClick={() => openLightbox(image.id)}
                        className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                      >
                        View Story
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Carousel Controls */}
                <div className="absolute top-6 right-6 flex gap-2">
                  <Button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="w-10 h-10 rounded-full p-0 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30"
                  >
                    {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {featuredImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine-Style Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
                <Camera className="w-16 h-16 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-700 mb-4">No stories found</h3>
              <p className="text-slate-500 text-lg">Try adjusting your search or explore different categories</p>
            </div>
          ) : (
            <div className="space-y-32">
              {/* Featured Stories Section */}
              {featuredImages.length > 0 && (
                <div className="space-y-16">
                  <div className="text-center space-y-4">
                    <h2 className="text-6xl font-bold text-slate-900">
                      Featured <span className="bg-gradient-to-r from-[#d62332] via-[#b51d2a] to-[#a51a26] bg-clip-text text-transparent">Stories</span>
                    </h2>
                    <p className="text-xl text-slate-600">Highlighting the special moments of our Students</p>
                  </div>

                  {featuredImages.map((image, index) => (
                    <div
                      key={image.id}
                      className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
                    >
                      {/* Image Side */}
                      <div className="flex-1 relative group cursor-pointer" onClick={() => openLightbox(image.id)}>
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
                          <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.title}
                            className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          {/* Floating Like Button */}
                          <Button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleLike(image.id)
                            }}
                            className={`absolute top-6 right-6 w-12 h-12 rounded-full p-0 transition-all duration-500 backdrop-blur-sm ${
                              likedImages.has(image.id)
                                ? "bg-red-500 text-white hover:bg-red-600 scale-110 shadow-lg"
                                : "bg-white/20 text-white hover:bg-white/30 opacity-0 group-hover:opacity-100"
                            }`}
                          >
                            <Heart className={`w-5 h-5 ${likedImages.has(image.id) ? "fill-current" : ""}`} />
                          </Button>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="flex-1 space-y-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Badge className="bg-gradient-to-r from-[#d62332] to-[#b51d2a] text-white border-0">
                              <Star className="w-3 h-3 mr-1 fill-current" />
                              Featured
                            </Badge>
                            <Badge className="bg-[#d62332]/10 text-[#d62332] border border-[#d62332]/20">
                              {categories.find((cat) => cat.id === image.category)?.label}
                            </Badge>
                          </div>

                          <h3 className="text-4xl font-bold text-slate-900 leading-tight">{image.title}</h3>

                          <p className="text-xl text-slate-600 leading-relaxed">{image.story || image.description}</p>

                          <div className="flex items-center gap-4 text-slate-500">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {new Date(image.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {image.tags.map((tag) => (
                              <Badge key={tag} className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-0">
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button
                          onClick={() => openLightbox(image.id)}
                          className="bg-gradient-to-r from-[#d62332] to-[#b51d2a] text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                          View Full Story
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Timeline Section for Regular Images */}
              {regularImages.length > 0 && (
                <div className="space-y-12">
                  <div className="text-center space-y-4">
                    <h2 className="text-6xl font-bold text-slate-900">
                      Campus <span className="bg-gradient-to-r from-[#d62332] via-[#b51d2a] to-[#a51a26] bg-clip-text text-transparent">Timeline</span>
                    </h2>
                    <p className="text-xl text-slate-600">Moments that shape our community</p>
                  </div>

                  {/* Timeline Navigation */}
                  <div className="flex justify-center gap-4 mb-8">
                    <Button
                      onClick={() => scrollTimeline("left")}
                      variant="outline"
                      className="rounded-full w-12 h-12 p-0 border-slate-200 hover:border-[#d62332] hover:text-[#d62332]"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      onClick={() => scrollTimeline("right")}
                      variant="outline"
                      className="rounded-full w-12 h-12 p-0 border-slate-200 hover:border-[#d62332] hover:text-[#d62332]"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Horizontal Scrolling Timeline */}
                  <div
                    ref={timelineRef}
                    className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {regularImages.map((image, index) => (
                      <div
                        key={image.id}
                        className="flex-shrink-0 w-80 group cursor-pointer"
                        onClick={() => openLightbox(image.id)}
                      >
                        <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white">
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={image.src || "/placeholder.svg"}
                              alt={image.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Category Badge */}
                            <Badge className="absolute top-4 left-4 bg-white/90 text-slate-700 border-0 backdrop-blur-sm">
                              {categories.find((cat) => cat.id === image.category)?.label}
                            </Badge>

                            {/* Like Button */}
                            <Button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleLike(image.id)
                              }}
                              className={`absolute top-4 right-4 w-8 h-8 rounded-full p-0 transition-all duration-500 ${
                                likedImages.has(image.id)
                                  ? "bg-red-500 text-white hover:bg-red-600 scale-110"
                                  : "bg-white/20 text-white hover:bg-white/30 opacity-0 group-hover:opacity-100"
                              }`}
                            >
                              <Heart className={`w-3 h-3 ${likedImages.has(image.id) ? "fill-current" : ""}`} />
                            </Button>
                          </div>

                          <div className="p-6 space-y-3">
                            <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#d62332] transition-colors duration-300">
                              {image.title}
                            </h4>
                            <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">{image.description}</p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <Calendar className="w-3 h-3" />
                                {new Date(image.date).toLocaleDateString()}
                              </div>

                              <div className="flex gap-1">
                                {image.tags.slice(0, 2).map((tag) => (
                                  <Badge key={tag} className="bg-slate-100 text-slate-600 border-0 text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full">
            <Button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full p-0 bg-white/10 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              <X className="w-6 h-6" />
            </Button>

            <div className="flex items-center justify-center h-full">
              <img
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.title}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent text-white p-8 rounded-b-2xl backdrop-blur-sm">
              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center gap-3">
                      {selectedImageData.featured && (
                        <Badge className="bg-gradient-to-r from-[#d62332] to-[#b51d2a] text-white border-0">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          Featured
                        </Badge>
                      )}
                      <Badge className="bg-[#d62332]/20 text-[#ff9ea6] border border-[#d62332]/30">
                        {categories.find((cat) => cat.id === selectedImageData.category)?.label}
                      </Badge>
                    </div>

                    <h2 className="text-3xl font-bold leading-tight">{selectedImageData.title}</h2>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {selectedImageData.story || selectedImageData.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {selectedImageData.tags.map((tag) => (
                        <Badge key={tag} className="bg-white/10 text-white hover:bg-white/20 border-0">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                      <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        Date Captured
                      </div>
                      <div className="text-white font-medium">
                        {new Date(selectedImageData.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>

                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleLike(selectedImageData.id)
                      }}
                      className={`w-full transition-all duration-300 ${
                        likedImages.has(selectedImageData.id)
                          ? "bg-red-500 hover:bg-red-600 text-white"
                          : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 mr-2 ${likedImages.has(selectedImageData.id) ? "fill-current" : ""}`}
                      />
                      {likedImages.has(selectedImageData.id) ? "Liked" : "Like"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}