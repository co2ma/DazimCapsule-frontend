"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function DreamPage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/evening-scene.jpg')",
        }}
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Floating particles/stars effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Center Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div
          className="w-full max-w-md p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl transition-all duration-500"
          style={{
            transform: isHovered ? "translateY(-4px)" : "translateY(0)",
            boxShadow: isHovered
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 255, 255, 0.1)"
              : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Content */}
          <div className="text-center space-y-6">
            <h1 className="text-2xl md:text-3xl font-light text-white tracking-wide">
              별빛 아래, 꿈을 그리다
            </h1>

            <p className="text-white/80 text-sm md:text-base leading-relaxed font-light">
              어둠 속에서도 빛나는 별처럼,
              <br />
              당신의 이야기가 시작되는 곳.
              <br />
              <span className="text-white/60 text-xs mt-2 block">
                그네에 앉아 바람을 느끼며,
                <br />
                잠시 쉬어가도 괜찮아요.
              </span>
            </p>

            <div className="pt-4">
              <Button
                className="w-full py-6 text-base font-light tracking-wider bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                variant="ghost"
              >
                여정을 시작하기
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-1 -left-1 w-8 h-8 border-t border-l border-white/30 rounded-tl-2xl" />
          <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b border-r border-white/30 rounded-br-2xl" />
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </div>
  )
}
