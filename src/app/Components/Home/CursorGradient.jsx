"use client"

import { useEffect, useState } from "react"

export default function CursorGradient() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    let timeoutId

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsMoving(true)

      // Clear existing timeout
      clearTimeout(timeoutId)

      // Set moving to false after movement stops
      timeoutId = setTimeout(() => {
        setIsMoving(false)
      }, 150)
    }

    window.addEventListener("mousemove", updatePosition)
    return () => {
      window.removeEventListener("mousemove", updatePosition)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      {/* Main cursor gradient - Deeper red colors */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-48 h-48 rounded-full 
                   bg-gradient-to-r from-[#d62332]/40 via-[#b51d2a]/50 to-[#a51a26]/40 
                   opacity-60 blur-3xl z-0 transition-all duration-700 ease-out"
        style={{
          transform: `translate(${position.x - 192}px, ${position.y - 192}px) scale(${isMoving ? 1.1 : 1})`,
        }}
      />

      {/* Secondary smaller gradient - More visible */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-32 h-32 rounded-full 
                   bg-gradient-to-r from-[#d62332]/35 via-[#b51d2a]/45 to-[#d62332]/35 
                   opacity-50 blur-2xl z-0 transition-all duration-500 ease-out"
        style={{
          transform: `translate(${position.x - 128}px, ${position.y - 128}px) scale(${isMoving ? 1.2 : 0.9})`,
        }}
      />

      {/* Subtle inner glow - Enhanced visibility */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-16 h-16 rounded-full 
                   bg-gradient-to-r from-[#d62332]/30 to-[#b51d2a]/30 
                   opacity-70 blur-xl z-0 transition-all duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 64}px, ${position.y - 64}px) scale(${isMoving ? 1.3 : 0.8})`,
        }}
      />
    </>
  )
}