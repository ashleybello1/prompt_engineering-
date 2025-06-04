"use client"

import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    // Animation sequence
    const timer1 = setTimeout(() => setAnimationPhase(1), 500) // Start letter animation
    const timer2 = setTimeout(() => setAnimationPhase(2), 1500) // Show full letters
    const timer3 = setTimeout(() => setAnimationPhase(3), 2500) // Start fade out
    const timer4 = setTimeout(() => setIsVisible(false), 3000) // Hide loading screen

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        animationPhase === 3 ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(135deg, #FDF6F0 0%, #F8F0E8 50%, #FDF6F0 100%)",
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Background decorative circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-32 h-32 rounded-full border-2 border-[#E8B4B8]/30 transition-all duration-1000 ${
              animationPhase >= 1 ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          />
          <div
            className={`absolute w-48 h-48 rounded-full border border-[#D49EA2]/20 transition-all duration-1000 delay-300 ${
              animationPhase >= 1 ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          />
        </div>

        {/* Main letters container */}
        <div className="relative flex items-center space-x-4">
          {/* Letter E */}
          <div
            className={`font-script text-8xl md:text-9xl text-[#E8B4B8] transition-all duration-700 ${
              animationPhase >= 1
                ? "transform translate-y-0 opacity-100 scale-100"
                : "transform translate-y-8 opacity-0 scale-75"
            }`}
            style={{
              textShadow: "0 4px 8px rgba(232, 180, 184, 0.3)",
              animation: animationPhase >= 1 ? "letterBounce 0.8s ease-out" : "none",
            }}
          >
            E
          </div>

          {/* Decorative separator */}
          <div
            className={`w-2 h-2 rounded-full bg-[#D49EA2] transition-all duration-500 delay-500 ${
              animationPhase >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          />

          {/* Letter B */}
          <div
            className={`font-script text-8xl md:text-9xl text-[#D49EA2] transition-all duration-700 delay-200 ${
              animationPhase >= 1
                ? "transform translate-y-0 opacity-100 scale-100"
                : "transform translate-y-8 opacity-0 scale-75"
            }`}
            style={{
              textShadow: "0 4px 8px rgba(212, 158, 162, 0.3)",
              animation: animationPhase >= 1 ? "letterBounce 0.8s ease-out 0.2s" : "none",
            }}
          >
            B
          </div>
        </div>

        {/* Loading dots */}
        <div
          className={`absolute -bottom-16 flex space-x-2 transition-all duration-500 delay-700 ${
            animationPhase >= 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-[#E8B4B8]"
              style={{
                animation: animationPhase >= 1 ? `dotPulse 1.5s ease-in-out infinite ${i * 0.2}s` : "none",
              }}
            />
          ))}
        </div>

        {/* Subtitle text */}
        <div
          className={`absolute -bottom-8 text-center transition-all duration-500 delay-1000 ${
            animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-[#D49EA2] text-sm font-medium tracking-wider">ELFIE'S BAKERY</p>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes letterBounce {
          0% {
            transform: translateY(20px) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: translateY(-10px) scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes dotPulse {
          0%,
          80%,
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
