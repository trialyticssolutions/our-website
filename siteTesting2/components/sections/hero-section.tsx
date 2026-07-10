'use client'

import { CSSProperties, useRef } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { MECH } from '@/lib/motion'
import { ArrowRight } from 'lucide-react'
import { useCan3D } from '@/components/three/use-can-3d'
import { useIdle } from '@/components/three/use-lazy-mount'

const DataLattice = dynamic(() => import('@/components/three/data-lattice'), {
  ssr: false,
})

const TRUST_BADGES = ['ISO 27001 Certified', 'GDPR Compliant', '50+ Projects Delivered']

const delay = (ms: number) => ({ '--rise-delay': `${ms}ms` }) as CSSProperties

/* Static lattice for reduced-motion / low-power devices */
function StaticLattice() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full opacity-60" aria-hidden="true">
      <g stroke="#3a322a" strokeWidth="1" fill="none">
        <path d="M80 220 L160 120 L260 160 L330 90 M160 120 L210 250 L260 160 M210 250 L110 300 L80 220 M260 160 L320 260 L210 250 M320 260 L110 300" />
      </g>
      <g fill="#6b6259">
        <circle cx="80" cy="220" r="3" /><circle cx="260" cy="160" r="3" />
        <circle cx="210" cy="250" r="3" /><circle cx="110" cy="300" r="3" />
        <circle cx="330" cy="90" r="3" />
      </g>
      <g fill="#D89E3A">
        <circle cx="160" cy="120" r="5" /><circle cx="320" cy="260" r="5" />
      </g>
    </svg>
  )
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { margin: '200px 0px' })
  const use3d = useCan3D()
  // Defer the three.js chunk until the main thread is idle — keeps the
  // hero text's LCP and TBT off the canvas's critical path
  const idle = useIdle(3500)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.5, 0])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-char text-bone"
    >
      {/* 3D data lattice — assembles on load, rotates with scroll */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-30 md:w-[62%] md:opacity-100"
        style={{ opacity: canvasOpacity }}
        aria-hidden="true"
      >
        {use3d === true && idle && <DataLattice progress={scrollYProgress} active={inView} />}
        {use3d === false && <StaticLattice />}
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 pb-20 pt-10 md:pt-12 lg:px-8">
        {/* CSS-driven entrance: paints before hydration, LCP-safe */}
        <div className="max-w-3xl">
          <p className="anim-rise mono-label text-brass">
            AcubeInsights — Data Solutions
          </p>

          {/* H1 stays static: text animated from clip/opacity-0 is excluded
              from LCP candidates — the headline must paint at first render */}
          <h1 className="mt-7 font-display text-[clamp(2.9rem,7.5vw,5.6rem)] font-semibold leading-[0.98] tracking-tight">
            <span className="block">Unlock Your Data&apos;s</span>
            <span className="block text-brass">Full Potential</span>
          </h1>

          <p className="anim-rise mt-7 max-w-xl text-lg leading-relaxed text-bone/75" style={delay(320)}>
            Transforming raw data into actionable insights and automated solutions for
            scalable growth. From database setup to AI automation, we&apos;ve got you covered.
          </p>

          <div className="anim-rise mt-10 flex flex-col gap-4 sm:flex-row" style={delay(420)}>
            <Link href="/services" className="btn-brass">
              <span className="btn-label">
                Explore Services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
            <Link href="/contact" className="btn-outline-bone">
              <span className="btn-label">Get Free Consultation</span>
            </Link>
          </div>

          <ul
            className="anim-rise mono-label mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 text-ash"
            style={delay(520)}
          >
            {TRUST_BADGES.map((badge, i) => (
              <li key={badge} className="flex items-center gap-6">
                {i > 0 && <span className="h-1 w-1 bg-brass" aria-hidden="true" />}
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Filament base line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-line-dark"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.0, delay: 0.6, ease: MECH }}
        aria-hidden="true"
      />
    </section>
  )
}
