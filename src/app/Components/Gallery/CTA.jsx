"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Smile, Calendar, ArrowRight } from "lucide-react"

export default function WellnessCTA() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#d62332]/10 via-white to-[#b51d2a]/10 rounded-3xl p-8 shadow-lg border border-[#d62332]/20">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d62332]/10 to-[#b51d2a]/10 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#b51d2a]/10 to-[#d62332]/10 rounded-full blur-xl" />

      <div className="relative space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <Badge className="bg-gradient-to-r from-[#d62332]/10 to-[#b51d2a]/10 text-[#d62332] border border-[#d62332]/30 rounded-full px-4 py-2 text-sm font-medium">
              <Smile className="w-4 h-4 mr-2" />
              Mental Wellness
            </Badge>

            <h3 className="text-2xl font-bold text-slate-900 leading-tight">
              Prioritize your
              <span className="block bg-gradient-to-r from-[#d62332] to-[#b51d2a] bg-clip-text text-transparent">
                mental health
              </span>
            </h3>
          </div>

          {/* Floating Icon */}
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-[#d62332] to-[#b51d2a] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-3">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed">
          Join our wellness programs, mindfulness sessions, and mental health workshops designed to support your overall
          well-being.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="bg-gradient-to-r from-[#d62332] to-[#b51d2a] text-white hover:shadow-lg hover:shadow-[#d62332]/25 hover:scale-105 transition-all duration-300 rounded-xl px-6 py-3 font-semibold border-0 flex-1 sm:flex-none">
            <Calendar className="w-4 h-4 mr-2" />
            Join Program
          </Button>

          <Button
            variant="outline"
            className="border-[#d62332]/30 text-[#d62332] hover:bg-[#d62332]/10 hover:border-[#d62332]/40 hover:scale-105 transition-all duration-300 rounded-xl px-6 py-3 font-medium flex-1 sm:flex-none bg-transparent"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-[#d62332]/20">
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#d62332] rounded-full animate-pulse" />
              <span>Weekly sessions</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#b51d2a] rounded-full animate-pulse delay-500" />
              <span>Group & individual</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}