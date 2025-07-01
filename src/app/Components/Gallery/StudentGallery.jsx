"use client";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Camera, Search, X, ChevronLeft, ChevronRight, Eye, Grid3X3, List, Play, Star, Heart, GraduationCap, Users, BookOpen, Award } from "lucide-react"

const studentGallery = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    title: "Science Fair Winners",
    description: "Our students showcasing innovative projects at the annual science fair",
    category: "achievements",
    date: "2024-03-15",
    tags: ["science", "innovation", "competition"],
    aspectRatio: "landscape",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=600&h=800&fit=crop",
    title: "Campus Life",
    description: "Students enjoying extracurricular activities on campus",
    category: "campus",
    date: "2024-03-10",
    tags: ["community", "activities", "friendship"],
    aspectRatio: "portrait",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=800&fit=crop",
    title: "Study Group",
    description: "Collaborative learning in our state-of-the-art library",
    category: "learning",
    date: "2024-03-08",
    tags: ["education", "teamwork", "research"],
    aspectRatio: "square",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop",
    title: "Project Presentation",
    description: "Students presenting their semester projects to faculty",
    category: "projects",
    date: "2024-03-05",
    tags: ["presentation", "technology", "demonstration"],
    aspectRatio: "portrait",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
    title: "Classroom Discussion",
    description: "Engaging classroom debate on contemporary issues",
    category: "learning",
    date: "2024-03-03",
    tags: ["discussion", "critical thinking", "engagement"],
    aspectRatio: "landscape",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=800&fit=crop",
    title: "Graduation Day",
    description: "Celebrating our graduating class of 2024",
    category: "achievements",
    date: "2024-02-28",
    tags: ["graduation", "celebration", "success"],
    aspectRatio: "square",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    title: "Robotics Club",
    description: "Students working on their robotics competition entry",
    category: "clubs",
    date: "2024-02-25",
    tags: ["robotics", "STEM", "engineering"],
    aspectRatio: "landscape",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=600&h=800&fit=crop",
    title: "Art Exhibition",
    description: "Showcasing student artwork in our annual exhibition",
    category: "arts",
    date: "2024-02-20",
    tags: ["creativity", "expression", "talent"],
    aspectRatio: "portrait",
  },
]

const categories = [
  { id: "all", label: "All Photos", count: studentGallery.length, icon: <Camera className="w-4 h-4" /> },
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
  const [viewMode, setViewMode] = useState("masonry")
  const [selectedImage, setSelectedImage] = useState(null)
  const [visibleImages, setVisibleImages] = useState([])
  const [likedImages, setLikedImages] = useState(new Set())

  const filteredImages = studentGallery.filter((image) => {
    const matchesCategory = selectedCategory === "all" || image.category === selectedCategory
    const matchesSearch =
      searchTerm === "" ||
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "50px 0px 50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          setVisibleImages((prev) => [...new Set([...prev, index])])
        }
      })
    }, observerOptions)

    const imageElements = document.querySelectorAll("[data-gallery-image]")
    imageElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [filteredImages])

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

  const navigateLightbox = (direction) => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  const selectedImageData = selectedImage ? studentGallery.find((img) => img.id === selectedImage) : null

  // Grid layout patterns for dynamic sizing
  const getGridClasses = (index, aspectRatio) => {
    const patterns = [
      // Pattern 1: Large landscape + 2 portraits
      { landscape: "col-span-2 row-span-2", portrait: "col-span-1 row-span-2", square: "col-span-1 row-span-1" },
      // Pattern 2: Portrait + 2 squares + landscape
      { portrait: "col-span-1 row-span-2", square: "col-span-1 row-span-1", landscape: "col-span-2 row-span-1" },
      // Pattern 3: Large square + mixed
      { square: "col-span-2 row-span-2", landscape: "col-span-2 row-span-1", portrait: "col-span-1 row-span-2" },
    ]

    const patternIndex = Math.floor(index / 4) % patterns.length
    return patterns[patternIndex][aspectRatio] || "col-span-1 row-span-1"
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#4fbe99]/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Capsule Badge */}
            <div className="inline-flex items-center mb-6">
              <Badge className="bg-gradient-to-r from-[#4fbe99]/15 to-[#3da582]/15 text-[#4fbe99] border border-[#4fbe99]/30 rounded-full px-6 py-2 text-lg font-semibold backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <GraduationCap className="w-5 h-5 mr-2" />
                Student's Gallery
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Celebrating Student</span>
              <span className="bg-gradient-to-r from-[#4fbe99] via-[#3da582] to-[#2d8a6b] bg-clip-text text-transparent">
                Achievements
              </span>
            </h1>

            {/* Description */}
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8">
                A visual journey through our students' academic excellence, creative expressions, and campus life 
                experiences that define our vibrant learning community.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-[#4fbe99] mb-2">{studentGallery.length}+</div>
                  <div className="text-gray-600">Moments Captured</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-[#4fbe99] mb-2">{categories.length - 1}</div>
                  <div className="text-gray-600">Categories</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-[#4fbe99] mb-2">2024</div>
                  <div className="text-gray-600">Current Year</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-[#4fbe99] mb-2">100%</div>
                  <div className="text-gray-600">Student Pride</div>
                </div>
              </div>
            </div>

            {/* Featured Image Grid */}
            <div className="grid grid-cols-3 gap-2 max-w-4xl mx-auto mb-12">
              {studentGallery.slice(0, 6).map((image, index) => (
                <div 
                  key={image.id} 
                  className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:scale-95 hover:shadow-lg ${index === 0 ? "col-span-2 row-span-2 h-64" : "h-32"}`}
                  onClick={() => openLightbox(image.id)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="relative py-8 lg:py-12 bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:gap-6">
            {/* Search */}
            <div className="relative w-full lg:max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search student photos, tags, or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4fbe99] focus:border-transparent bg-gray-50 shadow-sm transition-all duration-300 hover:bg-white text-base"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center justify-between">
              {/* Category Filters */}
              <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-hide">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className={`rounded-full px-4 lg:px-6 py-2 transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-[#4fbe99] to-[#3da582] text-white shadow-lg border-0"
                        : "border-gray-200 text-gray-600 hover:border-[#4fbe99] hover:text-[#4fbe99] hover:scale-105 hover:shadow-md"
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.label}
                    <Badge className="ml-2 bg-white/20 text-current border-0 text-xs">{category.count}</Badge>
                  </Button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-gray-50 rounded-xl p-1 shadow-sm border border-gray-100">
                <Button
                  onClick={() => setViewMode("masonry")}
                  variant={viewMode === "masonry" ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-lg transition-all duration-300 p-2 ${
                    viewMode === "masonry"
                      ? "bg-gradient-to-r from-[#4fbe99] to-[#3da582] text-white shadow-md"
                      : "text-gray-600 hover:text-[#4fbe99] hover:bg-white"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => setViewMode("grid")}
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-lg transition-all duration-300 p-2 ${
                    viewMode === "grid"
                      ? "bg-gradient-to-r from-[#4fbe99] to-[#3da582] text-white shadow-md"
                      : "text-gray-600 hover:text-[#4fbe99] hover:bg-white"
                  }`}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Gallery Grid */}
      <section className="relative py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length === 0 ? (
            <div className="text-center py-12 lg:py-20 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Camera className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-3">No student photos found</h3>
              <p className="text-gray-500 text-lg">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div
              className={
                viewMode === "masonry"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-max"
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              }
            >
              {filteredImages.map((image, index) => {
                const gridClasses = viewMode === "masonry" ? getGridClasses(index, image.aspectRatio) : ""
                const heightClass =
                  viewMode === "masonry"
                    ? image.aspectRatio === "portrait"
                      ? "h-64 sm:h-72 lg:h-80"
                      : image.aspectRatio === "landscape"
                        ? "h-40 sm:h-44 lg:h-48"
                        : "h-48 sm:h-56 lg:h-64"
                    : "h-48 sm:h-56 lg:h-64"

                return (
                  <div
                    key={image.id}
                    data-gallery-image
                    data-index={index}
                    className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer ${gridClasses} ${
                      visibleImages.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    } hover:scale-[1.02] hover:-translate-y-1 bg-white`}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                    onClick={() => openLightbox(image.id)}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${heightClass}`}
                      loading="lazy"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

                    {/* Image info (shown on hover) */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                      <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-white/90 text-sm line-clamp-2">{image.description}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {image.tags.map(tag => (
                          <span key={tag} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Like button */}
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleLike(image.id)
                      }}
                      className={`absolute top-4 right-4 w-10 h-10 rounded-full p-0 transition-all duration-300 backdrop-blur-sm ${
                        likedImages.has(image.id)
                          ? "bg-red-500 text-white hover:bg-red-600 scale-110"
                          : "bg-white/20 text-white hover:bg-white/30 opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedImages.has(image.id) ? "fill-current" : ""}`} />
                    </Button>

                    {/* Category badge */}
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#4fbe99]/90 to-[#3da582]/90 text-white border-0 backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                      {categories.find((cat) => cat.id === image.category)?.label}
                    </Badge>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <Button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full p-0 bg-white/10 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              onClick={() => navigateLightbox("prev")}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 rounded-full p-0 bg-white/10 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-7 h-7" />
            </Button>
            <Button
              onClick={() => navigateLightbox("next")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 rounded-full p-0 bg-white/10 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-7 h-7" />
            </Button>

            {/* Image */}
            <div className="flex items-center justify-center h-full">
              <img
                src={selectedImageData.src}
                alt={selectedImageData.title}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white p-6 lg:p-8 rounded-b-xl backdrop-blur-sm">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-end">
                  <div className="flex-1">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2 drop-shadow-lg">{selectedImageData.title}</h2>
                    <p className="text-white/90 text-lg leading-relaxed drop-shadow-md mb-3">
                      {selectedImageData.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedImageData.tags.map(tag => (
                        <Badge key={tag} className="bg-white/10 text-white hover:bg-white/20 border-0">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/80 text-sm">Date: {selectedImageData.date}</div>
                    <div className="text-white/80 text-sm">Category: {categories.find(cat => cat.id === selectedImageData.category)?.label}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#4fbe99]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Want to showcase your student work?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Submit your photos to be featured in our student gallery and inspire your peers!
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#4fbe99] to-[#3da582] text-white hover:shadow-2xl hover:shadow-[#4fbe99]/25 hover:scale-105 rounded-xl px-8 py-6 text-lg font-bold transition-all duration-500"
          >
            <Camera className="w-5 h-5 mr-2" />
            Submit Your Photos
          </Button>
        </div>
      </section>
    </div>
  )
}