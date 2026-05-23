'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'
import SlideCard from './SlideCard'

interface Slide {
  id: string
  title: string
  image: string
  href: string
}

const slides: Slide[] = [
  {
    id: 'evan',
    title: '光夜同人-Evan',
    image: '/images/evan.jpg',
    href: '/evan',
  },
  {
    id: 'sariel',
    title: '光夜同人-Sariel',
    image: '/images/sariel.jpg',
    href: '/sariel',
  },
  {
    id: 'slices',
    title: '光夜切片',
    image: '/images/slices.jpg',
    href: '/slices',
  },
  {
    id: 'original',
    title: '原创武侠言情',
    image: '/images/original.jpg',
    href: '/original',
  },
]

export default function HorizontalSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // 使用 useCallback 包装 goToSlide
  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentIndex) return
    
    setIsAnimating(true)
    setCurrentIndex(index)

    gsap.to(wrapperRef.current, {
      x: -index * window.innerWidth,
      duration: 1,
      ease: 'power3.inOut',
      onComplete: () => setIsAnimating(false),
    })

    const cards = document.querySelectorAll('.slide-card')
    cards.forEach((card, i) => {
      gsap.to(card, {
        scale: i === index ? 1 : 0.9,
        opacity: i === index ? 1 : 0.6,
        duration: 0.8,
        ease: 'power2.out',
      })
    })
  }, [isAnimating, currentIndex])

  // 初始化 Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  // 滚轮事件
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      if (isAnimating) return

      if (e.deltaY > 0 && currentIndex < slides.length - 1) {
        goToSlide(currentIndex + 1)
      } else if (e.deltaY < 0 && currentIndex > 0) {
        goToSlide(currentIndex - 1)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
      }
    }
  }, [currentIndex, isAnimating, goToSlide])

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentIndex < slides.length - 1) {
        goToSlide(currentIndex + 1)
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        goToSlide(currentIndex - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, goToSlide])

  return (
    <div 
      ref={containerRef}
      className="w-screen h-screen overflow-hidden bg-main-bg"
    >
      <div
        ref={wrapperRef}
        className="flex h-full transition-transform"
        style={{ width: `${slides.length * 100}vw` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="w-screen h-screen flex items-center justify-center px-8 md:px-20"
          >
            <SlideCard
              {...slide}
              isActive={index === currentIndex}
            />
          </div>
        ))}
      </div>

      {/* 导航点 */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            data-clickable
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-black scale-150'
                : 'bg-black/30 hover:bg-black/50'
            }`}
          />
        ))}
      </div>

      {/* 滚动提示 */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 rotate-90 text-sm tracking-widest opacity-50">
        SCROLL →
      </div>
    </div>
  )
}
