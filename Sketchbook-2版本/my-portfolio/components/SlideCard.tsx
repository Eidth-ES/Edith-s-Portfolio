'use client'

import { useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import gsap from 'gsap'

interface SlideCardProps {
  id: string
  title: string
  image: string
  href: string
  isActive: boolean
}

export default function SlideCard({ id, title, image, href, isActive }: SlideCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (!cardRef.current) return

    gsap.to(cardRef.current, {
      scale: isActive ? 1 : 0.9,
      opacity: isActive ? 1 : 0.6,
      duration: 0.6,
      ease: 'power2.out',
    })
  }, [isActive])

  const handleClick = () => {
    gsap.to(cardRef.current, {
      scale: 1.05,
      duration: 0.2,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to(cardRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.in',
          onComplete: () => {
            router.push(href)
          },
        })
      },
    })
  }

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      data-clickable
      className="slide-card relative w-full max-w-4xl aspect-[4/3] cursor-pointer group"
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden sketch-border sketch-texture shadow-card transition-shadow duration-500 group-hover:shadow-card-hover">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 rounded-2xl border-4 border-white/20 pointer-events-none" />
        <div 
          className="absolute -inset-1 rounded-2xl opacity-30 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
          }}
        />
      </div>

      <h2 className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-2xl md:text-4xl font-bold text-center whitespace-nowrap tracking-wide">
        {title}
      </h2>
    </div>
  )
}
