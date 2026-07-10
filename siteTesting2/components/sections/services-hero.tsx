'use client'

import { CSSProperties, useRef } from 'react'
import dynamic from 'next/dynamic'
import { useInView } from 'motion/react'
import { useCan3D } from '@/components/three/use-can-3d'
import { useIdle } from '@/components/three/use-lazy-mount'

const LatticeCanvas = dynamic(() => import('@/components/three/data-lattice'), {
  ssr: false,
})

const TRUST_BADGES = ['ISO 27001 Certified', 'GDPR Compliant', '50+ Projects Delivered']

const delay = (ms: number) => ({ '--rise-delay': `${ms}ms` }) as CSSProperties

export function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { margin: '200px 0px' })
  const can3d = useCan3D()
  const idle = useIdle(3500)

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-char py-24 text-bone md:py-32"
    >
      {/* The structured lattice — the hero cloud's data, in order */}
      {can3d && idle && (
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] opacity-80 md:block"
          aria-hidden="true"
        >
          <LatticeCanvas variant="grid" active={inView} camera={{ position: [0, 0, 8], fov: 38 }} />
        </div>
      )}

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* CSS-driven entrance: paints before hydration, LCP-safe */}
        <div className="max-w-3xl">
          <p className="anim-rise mono-label text-brass">Choose Your Data Solution</p>

          <h1
            className="mt-6 font-display text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-[1.0] tracking-tight"
            style={delay(100)}
          >
            Transform Your <span className="text-brass">Business Data</span>
          </h1>

          <p className="anim-rise mt-6 max-w-xl text-lg leading-relaxed text-bone/75" style={delay(200)}>
            From foundational database setup to advanced AI automation, we provide
            comprehensive data solutions that drive growth and efficiency for businesses
            of all sizes.
          </p>

          <ul
            className="anim-rise mono-label mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-ash"
            style={delay(300)}
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
    </section>
  )
}
