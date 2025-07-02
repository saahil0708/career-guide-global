"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  User,
  Building,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  AlertCircle,
  CheckCircle,
  Heart,
  Users,
  GraduationCap,
} from "lucide-react"
import dynamic from 'next/dynamic'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Dynamically import the Map component to avoid SSR issues
const MapWithNoSSR = dynamic(
  () => import('./MapComponent').then((mod) => mod.Map),
  { 
    ssr: false,
    loading: () => (
      <div className="h-[400px] bg-slate-100 rounded-3xl flex items-center justify-center">
        <p>Loading map...</p>
      </div>
    )
  }
)

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success")
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
      })

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 2000)
  }

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      primary: "+1 (555) 123-4567",
      secondary: "Mon-Fri, 9AM-6PM",
      description: "Call us for immediate assistance",
      color: "red",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      primary: "info@counselingcenter.edu",
      secondary: "Response within 24 hours",
      description: "Send us your questions anytime",
      color: "red",
    },
    {
      icon: <WhatsAppIcon className="w-6 h-6" />,
      title: "Live Chat",
      primary: "Available 24/7",
      secondary: "Instant support",
      description: "Chat with our support team",
      color: "red",
    },
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Holidays", hours: "Emergency only" },
  ]

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "counseling", label: "Counseling Services" },
    { value: "career", label: "Career Guidance" },
    { value: "academic", label: "Academic Support" },
    { value: "crisis", label: "Crisis Support" },
    { value: "appointment", label: "Schedule Appointment" },
  ]

  return (
    <div className="min-h-screen pt-10">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0" />
        <div className="absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 text-[#d62332] border border-[#d62332]/30 rounded-full px-6 py-2 text-base font-medium">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get In Touch
              </Badge>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-normal mt-3">
                <span className="block text-slate-900">Contact</span>
                <span className="block bg-gradient-to-r from-[#d62332] via-[#b51d2a] to-[#a51a26] bg-clip-text text-transparent">
                  Our Team
                </span>
              </h1>

              <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
                We're here to support you every step of the way. Reach out to our counseling team for guidance, support,
                or just to chat about your academic journey.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: <Users className="w-6 h-6" />, value: "24/7", label: "Support Available" },
                { icon: <GraduationCap className="w-6 h-6" />, value: "500+", label: "Students Helped" },
                { icon: <Heart className="w-6 h-6" />, value: "98%", label: "Satisfaction Rate" },
                { icon: <Clock className="w-6 h-6" />, value: "<24h", label: "Response Time" },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="text-[#d62332] mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-slate-600 font-medium text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How to Reach Us</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the method that works best for you. We're committed to responding quickly and providing the support
              you need.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d62332]/10 via-white to-[#b51d2a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  <div className="relative space-y-4">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-[#d62332] to-[#b51d2a] text-white`}
                    >
                      {method.icon}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#d62332] transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-slate-900 font-semibold">{method.primary}</p>
                      <p className="text-slate-600 text-sm">{method.secondary}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{method.description}</p>
                    </div>

                    <Button
                      className={`w-full transition-all duration-300 rounded-xl bg-gradient-to-r from-[#d62332] to-[#b51d2a] hover:shadow-lg hover:shadow-[#d62332]/25 text-white border-0 hover:scale-105`}
                    >
                      Contact Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-slate-50 to-[#d62332]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Send Us a Message</h2>
                <p className="text-xl text-slate-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Type of Inquiry</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d62332]/20 focus:border-[#d62332] transition-all duration-300"
                    required
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d62332]/20 focus:border-[#d62332] transition-all duration-300"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d62332]/20 focus:border-[#d62332] transition-all duration-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d62332]/20 focus:border-[#d62332] transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d62332]/20 focus:border-[#d62332] transition-all duration-300"
                      placeholder="Brief subject line"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d62332]/20 focus:border-[#d62332] transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#d62332] to-[#b51d2a] text-white hover:shadow-lg hover:shadow-[#d62332]/25 hover:scale-105 transition-all duration-300 rounded-xl py-4 text-lg font-semibold border-0"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </div>
                  )}
                </Button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="bg-[#d62332]/10 border border-[#d62332]/20 rounded-xl p-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#d62332]" />
                    <p className="text-[#d62332] font-medium">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Map and Location Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Visit Our Campus</h2>
                <p className="text-xl text-slate-600">
                  Find us on campus or schedule an in-person appointment at our counseling center.
                </p>
              </div>

              {/* Map Container */}
              <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden h-[400px]">
                <MapWithNoSSR 
                  center={[51.505, -0.09]} 
                  zoom={15} 
                  style={{ height: '100%', width: '100%' }}
                >
                  {({ TileLayer, Marker, Popup }) => (
                    <>
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      />
                      <Marker position={[51.505, -0.09]}>
                        <Popup>
                          <div className="space-y-2">
                            <h3 className="font-bold text-[#d62332]">Campus Counseling Center</h3>
                            <p className="text-sm">123 University Avenue</p>
                            <p className="text-sm">Building A, Room 201</p>
                            <Button 
                              size="sm" 
                              className="mt-2 bg-[#d62332] hover:bg-[#b51d2a] text-white"
                            >
                              Get Directions
                            </Button>
                          </div>
                        </Popup>
                      </Marker>
                    </>
                  )}
                </MapWithNoSSR>
              </div>

              {/* Location Details */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                    <Building className="w-6 h-6 text-[#d62332]" />
                    Location Details
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#d62332] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900">Campus Counseling Center</p>
                        <p className="text-slate-600">123 University Avenue</p>
                        <p className="text-slate-600">Campus Center Building, Room 201</p>
                        <p className="text-slate-600">University City, UC 12345</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#d62332] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900 mb-2">Office Hours</p>
                        <div className="space-y-1">
                          {officeHours.map((schedule, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span className="text-slate-600">{schedule.day}</span>
                              <span className="text-slate-900 font-medium">{schedule.hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-[#d62332] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900">Parking & Accessibility</p>
                        <p className="text-slate-600 text-sm">
                          Free parking available in Lot C. Building is fully accessible with elevator access to all
                          floors.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="pt-6 border-t border-slate-100">
                    <p className="font-semibold text-slate-900 mb-4">Follow Us</p>
                    <div className="flex gap-4">
                      {[
                        { icon: <Facebook className="w-5 h-5" />, name: "Facebook" },
                        { icon: <Twitter className="w-5 h-5" />, name: "Twitter" },
                        { icon: <Instagram className="w-5 h-5" />, name: "Instagram" },
                        { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn" },
                      ].map((social, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="w-12 h-12 rounded-full p-0 border-[#d62332]/20 text-[#d62332] hover:bg-[#d62332]/10 hover:border-[#d62332]/30 transition-all duration-300 bg-transparent"
                        >
                          {social.icon}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}