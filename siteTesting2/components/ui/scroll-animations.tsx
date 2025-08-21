'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'bounce-in' | 'slide-up'
  delay?: number
  threshold?: number
  triggerOnce?: boolean
}

export function ScrollAnimation({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasTriggered || !triggerOnce) {
            setTimeout(() => {
              setIsVisible(true)
              setHasTriggered(true)
            }, delay)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, threshold, triggerOnce, hasTriggered])

  const animationClasses = {
    'fade-in-up': 'animate-fade-in-up',
    'fade-in-down': 'animate-fade-in-down',
    'fade-in-left': 'animate-fade-in-left',
    'fade-in-right': 'animate-fade-in-right',
    'scale-in': 'animate-scale-in',
    'bounce-in': 'animate-bounce-in',
    'slide-up': 'animate-slide-up'
  }

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClasses[animation] : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

interface ParallaxProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function Parallax({
  children,
  className = '',
  speed = 0.5,
  direction = 'up'
}: ParallaxProps) {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const rate = scrolled * -speed

        let transform = ''
        switch (direction) {
          case 'up':
            transform = `translateY(${rate}px)`
            break
          case 'down':
            transform = `translateY(${-rate}px)`
            break
          case 'left':
            transform = `translateX(${rate}px)`
            break
          case 'right':
            transform = `translateX(${-rate}px)`
            break
        }

        setOffset(rate)
        ref.current.style.transform = transform
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, direction])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
}

export function FloatingElement({
  children,
  className = '',
  duration = 3,
  delay = 0
}: FloatingElementProps) {
  return (
    <div
      className={`animate-float ${className}`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  )
}

interface StaggeredAnimationProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in'
}

export function StaggeredAnimation({
  children,
  className = '',
  staggerDelay = 100,
  animation = 'fade-in-up'
}: StaggeredAnimationProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollAnimation
          key={index}
          animation={animation}
          delay={index * staggerDelay}
          className="inline-block"
        >
          {child}
        </ScrollAnimation>
      ))}
    </div>
  )
}

interface MouseParallaxProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function MouseParallax({
  children,
  className = '',
  speed = 0.1
}: MouseParallaxProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) * speed
        const y = (e.clientY - rect.top) * speed
        setMousePosition({ x, y })
      }
    }

    const element = ref.current
    if (element) {
      element.addEventListener('mousemove', handleMouseMove)
      return () => element.removeEventListener('mousemove', handleMouseMove)
    }
  }, [speed])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </div>
  )
}

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  gradient?: 'blue' | 'purple' | 'orange' | 'green' | 'pink'
}

export function GradientText({
  children,
  className = '',
  gradient = 'blue'
}: GradientTextProps) {
  const gradientClasses = {
    blue: 'text-gradient-blue',
    purple: 'text-gradient-purple',
    orange: 'text-gradient-orange',
    green: 'bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent',
    pink: 'bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent'
  }

  return (
    <span className={`${gradientClasses[gradient]} ${className}`}>
      {children}
    </span>
  )
}

interface AnimatedCounterProps {
  end: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export function AnimatedCounter({
  end,
  duration = 2000,
  className = '',
  prefix = '',
  suffix = ''
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          let startTime: number | null = null
          const startValue = 0

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart)
            
            setCount(currentCount)

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [end, duration, hasStarted])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
} 