"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Camera, Search, X, ChevronLeft, ChevronRight, Eye, Grid3X3, List, Play, Star, Heart } from "lucide-react"

// Mock data for demo purposes
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    title: "Team Workshop",
    description: "Our team collaborating on innovative solutions",
    category: "team",
    date: "2024-01-15",
    location: "San Francisco",
    photographer: "John Doe",
    aspectRatio: "landscape",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=800&fit=crop",
    title: "Innovation Summit",
    description: "Annual innovation summit with industry leaders",
    category: "events",
    date: "2024-01-10",
    location: "New York",
    photographer: "Jane Smith",
    aspectRatio: "portrait",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=800&fit=crop",
    title: "Client Success Story",
    description: "Celebrating another successful career transformation",
    category: "success",
    date: "2024-01-08",
    location: "Chicago",
    photographer: "Mike Johnson",
    aspectRatio: "square",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop",
    title: "Leadership Training",
    description: "Developing the next generation of leaders",
    category: "training",
    date: "2024-01-05",
    location: "Boston",
    photographer: "Sarah Wilson",
    aspectRatio: "portrait",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    title: "Product Launch",
    description: "Launching our latest career development platform",
    category: "events",
    date: "2024-01-03",
    location: "Seattle",
    photographer: "David Brown",
    aspectRatio: "landscape",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop",
    title: "Team Building",
    description: "Building stronger connections within our team",
    category: "team",
    date: "2024-01-01",
    location: "Austin",
    photographer: "Lisa Davis",
    aspectRatio: "square",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    title: "Strategy Meeting",
    description: "Planning our roadmap for the next quarter",
    category: "team",
    date: "2023-12-28",
    location: "Denver",
    photographer: "Tom Anderson",
    aspectRatio: "landscape",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    title: "Mentorship Program",
    description: "Connecting experienced professionals with newcomers",
    category: "training",
    date: "2023-12-25",
    location: "Miami",
    photographer: "Emily White",
    aspectRatio: "portrait",
  },
]

const categories = [
  { id: "all", label: "All Photos", count: galleryImages.length },
  { id: "team", label: "Team", count: 3 },
  { id: "events", label: "Events", count: 2 },
  { id: "success", label: "Success Stories", count: 1 },
  { id: "training", label: "Training", count: 2 },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState("masonry")
  const [selectedImage, setSelectedImage] = useState(null)
  const [visibleImages, setVisibleImages] = useState([])
  const [likedImages, setLikedImages] = useState(new Set())

  const filteredImages = galleryImages.filter((image) => {
    const matchesCategory = selectedCategory === "all" || image.category === selectedCategory
    const matchesSearch =
      searchTerm === "" ||
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase())
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

  const selectedImageData = selectedImage ? galleryImages.find((img) => img.id === selectedImage) : null

  const getGridClasses = (index, aspectRatio) => {
    const patterns = [
      { landscape: "col-span-2 row-span-2", portrait: "col-span-1 row-span-2", square: "col-span-1 row-span-1" },
      { portrait: "col-span-1 row-span-2", square: "col-span-1 row-span-1", landscape: "col-span-2 row-span-1" },
      { square: "col-span-2 row-span-2", landscape: "col-span-2 row-span-1", portrait: "col-span-1 row-span-2" },
    ]

    const patternIndex = Math.floor(index / 4) % patterns.length
    return patterns[patternIndex][aspectRatio] || "col-span-1 row-span-1"
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#d62332]/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#b51d2a]/8 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#d62332]/3 via-transparent to-[#b51d2a]/3 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-10 text-center lg:text-left order-1">
              <div className="space-y-6 lg:space-y-8">
                <div className="inline-flex items-center">
                  <Badge className="bg-gradient-to-r from-[#d62332]/15 to-[#b51d2a]/15 text-[#d62332] border border-[#d62332]/30 rounded-full px-4 sm:px-6 lg:px-8 py-2 text-sm sm:text-base lg:text-lg font-semibold backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Camera className="w-4 h-4 sm:w-5 h-5 lg:w-6 h-6 mr-2 lg:mr-3" />
                    Visual Storytelling
                    <Star className="w-4 h-4 sm:w-5 h-5 ml-2 lg:ml-3 text-yellow-500 fill-current" />
                  </Badge>
                </div>

                <div className="space-y-3 lg:space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                    <span className="text-gray-900 block animate-fade-in-up">Capturing</span>
                    <span className="bg-gradient-to-r from-[#d62332] via-[#b51d2a] to-[#a51a26] bg-clip-text text-transparent block animate-fade-in-up animation-delay-200">
                      Success
                    </span>
                    <span className="text-gray-900 block animate-fade-in-up animation-delay-400">Stories</span>
                  </h1>

                  <div className="flex items-center justify-center lg:justify-start space-x-2 lg:space-x-3 animate-fade-in-up animation-delay-600">
                    <div className="w-8 lg:w-12 h-px bg-gradient-to-r from-[#d62332] to-[#b51d2a]"></div>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-medium">
                      Where Moments Become Milestones
                    </p>
                    <div className="w-8 lg:w-12 h-px bg-gradient-to-r from-[#b51d2a] to-[#d62332]"></div>
                  </div>
                </div>

                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-xl lg:max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-800">
                  Journey through our visual chronicle of transformation, innovation, and triumph. Every image tells a
                  story of career evolution and human potential realized.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 animate-fade-in-up animation-delay-1200 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-[#d62332] to-[#b51d2a] text-white hover:shadow-2xl hover:shadow-[#d62332]/25 hover:scale-105 rounded-2xl px-6 sm:px-8 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-bold transition-all duration-500 border-0 relative overflow-hidden"
                  onClick={() => document.getElementById("gallery-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <Eye className="w-5 h-5 lg:w-6 h-6 mr-2 lg:mr-3" />
                  Explore Gallery
                  <ChevronRight className="w-4 h-4 lg:w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="group border-2 border-gray-200 text-gray-700 hover:border-[#d62332] hover:text-[#d62332] hover:bg-[#d62332]/5 hover:scale-105 rounded-2xl px-6 sm:px-8 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-bold transition-all duration-500 bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl"
                >
                  <Play className="w-5 h-5 lg:w-6 h-6 mr-2 lg:mr-3" />
                  Watch Story
                  <div className="w-2 h-2 bg-[#d62332] rounded-full ml-2 lg:ml-3 animate-pulse" />
                </Button>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative flex justify-center order-2 lg:order-2 animate-fade-in-up animation-delay-600">
              <div className="relative">
                <div className="grid grid-cols-6 grid-rows-6 sm:grid-rows-8 gap-2 sm:gap-3 w-[320px] h-[400px] sm:w-[400px] sm:h-[500px] lg:w-[480px] lg:h-[600px]">
                  <div
                    className="col-span-4 row-span-3 sm:row-span-4 relative group cursor-pointer transform hover:scale-105 transition-all duration-700 hover:z-10"
                    onClick={() => openLightbox(galleryImages[0].id)}
                  >
                    <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl h-full w-full">
                      <img
                        src={galleryImages[0]?.src || "/placeholder.svg"}
                        alt={galleryImages[0]?.title || "Featured"}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-2 lg:bottom-4 left-2 lg:left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <h3 className="font-bold text-sm lg:text-lg drop-shadow-lg">{galleryImages[0]?.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-span-2 row-span-3 sm:row-span-4 relative group cursor-pointer transform hover:scale-105 transition-all duration-700"
                    onClick={() => openLightbox(galleryImages[1]?.id)}
                  >
                    <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl h-full w-full">
                      <img
                        src={galleryImages[1]?.src || "/placeholder.svg"}
                        alt={galleryImages[1]?.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
                    </div>
                  </div>

                  <div
                    className="col-span-2 row-span-2 relative group cursor-pointer transform hover:scale-105 transition-all duration-700"
                    onClick={() => openLightbox(galleryImages[2]?.id)}
                  >
                    <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-md lg:shadow-lg h-full w-full">
                      <img
                        src={galleryImages[2]?.src || "/placeholder.svg"}
                        alt={galleryImages[2]?.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
                    </div>
                  </div>

                  <div
                    className="col-span-2 row-span-2 relative group cursor-pointer transform hover:scale-105 transition-all duration-700"
                    onClick={() => openLightbox(galleryImages[3]?.id)}
                  >
                    <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-md lg:shadow-lg h-full w-full">
                      <img
                        src={galleryImages[3]?.src || "/placeholder.svg"}
                        alt={galleryImages[3]?.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />
                    </div>
                  </div>

                  <div
                    className="col-span-2 row-span-2 relative group cursor-pointer transform hover:scale-105 transition-all duration-700"
                    onClick={() => openLightbox(galleryImages[4]?.id)}
                  >
                    <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-md lg:shadow-lg h-full w-full">
                      <img
                        src={galleryImages[4]?.src || "/placeholder.svg"}
                        alt={galleryImages[4]?.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-lg sm:text-xl lg:text-2xl font-black drop-shadow-lg">
                            +{galleryImages.length - 5}
                          </div>
                          <div className="text-xs sm:text-sm font-medium opacity-90">More Photos</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 lg:-top-8 -right-4 lg:-right-8 w-16 h-16 lg:w-32 lg:h-32 bg-gradient-to-br from-[#d62332]/20 to-[#b51d2a]/20 rounded-full blur-xl lg:blur-2xl animate-pulse" />
                <div className="absolute -bottom-6 lg:-bottom-12 -left-6 lg:-left-12 w-20 h-20 lg:w-40 lg:h-40 bg-gradient-to-tr from-[#a51a26]/15 to-[#d62332]/15 rounded-full blur-2xl lg:blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 -left-3 lg:-left-6 w-2 h-2 lg:w-3 lg:h-3 bg-[#d62332] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="relative py-8 lg:py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 lg:pl-12 pr-3 lg:pr-4 py-3 lg:py-4 border border-gray-200 rounded-xl lg:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d62332] focus:border-transparent bg-gray-50 shadow-sm transition-all duration-300 hover:bg-white text-sm lg:text-base"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center justify-between">
              <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-hide">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className={`rounded-full px-3 sm:px-4 lg:px-6 py-2 lg:py-3 transition-all duration-300 whitespace-nowrap text-xs sm:text-sm lg:text-base ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-[#d62332] to-[#b51d2a] text-white shadow-lg border-0"
                        : "border-gray-200 text-gray-600 hover:border-[#d62332] hover:text-[#d62332] hover:scale-105 hover:shadow-md"
                    }`}
                  >
                    {category.label}
                    <Badge className="ml-1 lg:ml-2 bg-white/20 text-current border-0 text-xs">{category.count}</Badge>
                  </Button>
                ))}
              </div>

              <div className="flex items-center space-x-1 lg:space-x-2 bg-gray-50 rounded-xl lg:rounded-2xl p-1 lg:p-1.5 shadow-sm border border-gray-100">
                <Button
                  onClick={() => setViewMode("masonry")}
                  variant={viewMode === "masonry" ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-lg lg:rounded-xl transition-all duration-300 p-2 lg:p-2.5 ${
                    viewMode === "masonry"
                      ? "bg-gradient-to-r from-[#d62332] to-[#b51d2a] text-white shadow-md"
                      : "text-gray-600 hover:text-[#d62332] hover:bg-white"
                  }`}
                >
                  <Grid3X3 className="w-3 h-3 lg:w-4 lg:h-4" />
                </Button>
                <Button
                  onClick={() => setViewMode("grid")}
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-lg lg:rounded-xl transition-all duration-300 p-2 lg:p-2.5 ${
                    viewMode === "grid"
                      ? "bg-gradient-to-r from-[#d62332] to-[#b51d2a] text-white shadow-md"
                      : "text-gray-600 hover:text-[#d62332] hover:bg-white"
                  }`}
                >
                  <List className="w-3 h-3 lg:w-4 lg:h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery-section" className="relative py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          {filteredImages.length === 0 ? (
            <div className="text-center py-12 lg:py-20">
              <div className="w-16 h-16 lg:w-24 lg:h-24 mx-auto mb-4 lg:mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Camera className="w-8 h-8 lg:w-12 lg:h-12 text-gray-400" />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-600 mb-2 lg:mb-3">No photos found</h3>
              <p className="text-gray-500 text-base lg:text-lg">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div
              className={
                viewMode === "masonry"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 auto-rows-max"
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
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
                    className={`group relative overflow-hidden rounded-xl lg:rounded-2xl shadow-md lg:shadow-lg hover:shadow-xl lg:hover:shadow-2xl transition-all duration-500 cursor-pointer ${gridClasses} ${
                      visibleImages.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    } hover:scale-105 hover:-translate-y-1 lg:hover:-translate-y-2`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                    onClick={() => openLightbox(image.id)}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${heightClass}`}
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

                    <div className="absolute top-2 lg:top-4 right-2 lg:right-4 flex space-x-1 lg:space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleLike(image.id)
                        }}
                        className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full p-0 transition-all duration-300 backdrop-blur-sm ${
                          likedImages.has(image.id)
                            ? "bg-red-500 text-white hover:bg-red-600 scale-110"
                            : "bg-white/20 text-white hover:bg-white/30 hover:scale-110"
                        }`}
                      >
                        <Heart className={`w-3 h-3 lg:w-4 lg:h-4 ${likedImages.has(image.id) ? "fill-current" : ""}`} />
                      </Button>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          openLightbox(image.id)
                        }}
                        className="w-8 h-8 lg:w-10 lg:h-10 rounded-full p-0 bg-white/20 text-white hover:bg-white/30 transition-all duration-300 backdrop-blur-sm hover:scale-110"
                      >
                        <Eye className="w-3 h-3 lg:w-4 lg:h-4" />
                      </Button>
                    </div>

                    <Badge className="absolute top-2 lg:top-4 left-2 lg:left-4 bg-gradient-to-r from-[#d62332]/90 to-[#b51d2a]/90 text-white border-0 backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs lg:text-sm">
                      {categories.find((cat) => cat.id === image.category)?.label}
                    </Badge>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            <Button
              onClick={closeLightbox}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full p-0 bg-white/10 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>

            <Button
              onClick={() => navigateLightbox("prev")}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0 bg-white/10 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </Button>
            <Button
              onClick={() => navigateLightbox("next")}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0 bg-white/10 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </Button>

            <div className="flex items-center justify-center h-full">
              <img
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.title}
                className="max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white p-4 sm:p-6 lg:p-8 rounded-b-xl sm:rounded-b-2xl backdrop-blur-sm">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 drop-shadow-lg">
                      {selectedImageData.title}
                    </h2>
                    <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed drop-shadow-md">
                      {selectedImageData.description}
                    </p>
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