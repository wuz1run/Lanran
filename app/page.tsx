"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function DigitalHeritagePlatform() {
  const particlesRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Simple CSS-based particle animation
    const particles = particlesRef.current
    if (!particles) return

    // Create floating particle elements
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div")
      particle.className = "absolute w-1 h-1 bg-amber-400 rounded-full opacity-60"
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDelay = `${Math.random() * 5}s`
      particle.style.animationDuration = `${3 + Math.random() * 4}s`
      particle.style.animation = "float 7s infinite ease-in-out"
      particles.appendChild(particle)
    }

    return () => {
      if (particles) {
        particles.innerHTML = ""
      }
    }
  }, [])

  const handleLotusClick = () => {
    // 跳转到介绍页面
    router.push("/introduction")
  }

  const handleNavClick = (path: string) => {
     router.push(path)
  }

  return (
      <div className="relative h-screen overflow-hidden bg-[#0a1a3d]">
        {/* CSS keyframes for particle animation */}
        <style jsx>{`
          @font-face {
            font-family: 'HFSuave-B';
            src: url('/fonts/HFSuave-B-2.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
            25% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
            50% { transform: translateY(-10px) translateX(-5px); opacity: 0.6; }
            75% { transform: translateY(-30px) translateX(15px); opacity: 0.9; }
          }
        `}</style>

        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">侗</span>
                </div>
                <div className="text-white">
                  <div className="text-lg font-semibold">侗韵蓝染</div>
                  <div className="text-xs text-blue-200">数字化非遗平台</div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <button
                      onClick={() => handleNavClick("/introduction")}
                      className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10 rounded-md"
                  >
                    关于蓝染
                  </button>
                  <button
                      onClick={() => handleNavClick("/brand-story")}
                      className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10 rounded-md"
                  >
                    品牌初心
                  </button>
                  <button
                      onClick={() => handleNavClick("/procedure")}
                      className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10 rounded-md"
                  >
                    工艺流程
                  </button>
                  <button
                      onClick={() => handleNavClick("/weaving")}
                      className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10 rounded-md"
                  >
                    纹样集锦
                  </button>
                  <button
                      onClick={() => handleNavClick("/creatures")}
                      className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10 rounded-md"
                  >
                    品牌共创
                  </button>

                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white hover:text-blue-200 inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
                >
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
              <div className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/10">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <button
                      onClick={() => {
                        handleNavClick("/introduction")
                        setIsMenuOpen(false)
                      }}
                      className="text-white hover:text-blue-200 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 hover:bg-white/10 rounded-md"
                  >
                    关于蓝染
                  </button>
                  <button
                      onClick={() => {
                        handleNavClick("/brand-story")
                        setIsMenuOpen(false)
                      }}
                      className="text-white hover:text-blue-200 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 hover:bg-white/10 rounded-md"
                  >
                    品牌初心
                  </button>
                  <button
                      onClick={() => {
                        handleNavClick("/procedure")
                        setIsMenuOpen(false)
                      }}
                      className="text-white hover:text-blue-200 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 hover:bg-white/10 rounded-md"
                  >
                    工艺流程
                  </button>
                  <button
                      onClick={() => {
                        handleNavClick("/weaving")
                        setIsMenuOpen(false)
                      }}
                      className="text-white hover:text-blue-200 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 hover:bg-white/10 rounded-md"
                  >
                    纹样集锦
                  </button>
                  <button
                      onClick={() => {
                        handleNavClick("/creatures")
                        setIsMenuOpen(false)
                      }}
                      className="text-white hover:text-blue-200 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 hover:bg-white/10 rounded-md"
                  >
                    品牌共创
                  </button>
                </div>
              </div>
          )}
        </nav>

        {/* Animated particles container */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-5"></div>

        <div className="absolute inset-0">
          <Image
              src="/images/hands.jpeg"
              alt="Traditional blue dyeing craftsmanship"
              fill
              className="object-cover contrast-125 brightness-110"
              priority
          />
        </div>

        {/* Gold particles background overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image
              src="/images/gold-particles.jpeg"
              alt="Gold particles background"
              fill
              className="object-cover animate-pulse"
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-8 pt-24">
          {/* Left LAN text */}
          <div
              className="absolute top-24 left-8 text-white text-6xl font-light tracking-widest opacity-50"
              style={{ fontFamily: "HFSuave-B", fontSize: "13rem" }}
          >
            LAN
          </div>

          {/* Right RAN text */}
          <div
              className="absolute bottom-8 right-8 text-white text-6xl md:text-9xl font-light tracking-widest opacity-50"
              style={{ fontFamily: "HFSuave-B", fontSize: "13rem" }}
          >
            RAN
          </div>

          {/* Central panel - 可点击的荷花 */}
          <button
              onClick={handleLotusClick}
              className="relative w-80 md:w-96 h-[500px] md:h-[600px] bg-gradient-to-b from-blue-900/80 via-indigo-900/80 to-purple-900/80 backdrop-blur-sm border border-white/20 rounded-lg shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-3xl group"
          >
            {/* Lotus flower image */}
            <div className="absolute inset-0">
              <Image
                  src="/images/lotus.jpeg"
                  alt="Elegant lotus flower illustration"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  priority
              />
            </div>

            {/* Chinese characters overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 md:space-y-8">
              <div
                  className="text-white text-6xl md:text-8xl font-light tracking-wider drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "LISS" }}
              >
                蓝
              </div>
              <div
                  className="text-white text-6xl md:text-8xl font-light tracking-wider drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "LISS" }}
              >
                染
              </div>
            </div>

            {/* Bottom text */}
            <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-white text-xl md:text-lg tracking-widest opacity-100 drop-shadow-md">
              数字化非遗平台
            </div>

            {/* Gold particle decorative overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-25">
              <Image
                  src="/images/gold-particles.jpeg"
                  alt="Gold particles"
                  fill
                  className="object-cover mix-blend-screen"
              />
            </div>

            {/* 点击提示 */}
            <div className="absolute top-4 right-4 text-white text-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 px-3 py-1 rounded-full">
              点击进入
            </div>

            {/* 悬停时的边框光效 */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-lg transition-all duration-300"></div>
          </button>
        </div>

        {/* Additional floating gold particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
              <div
                  key={i}
                  className="absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse opacity-60"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
              />
          ))}
        </div>
      </div>
  )
}
