'use client'

import { CSSProperties, ReactNode, useRef } from 'react'
import dynamic from 'next/dynamic'
import { useInView } from 'motion/react'
import { StatCounter } from '@/components/ui/stat-counter'
import { useCan3D } from '@/components/three/use-can-3d'
import { useIdle } from '@/components/three/use-lazy-mount'
import type { LatticeVariant } from '@/components/three/data-lattice'

const LatticeCanvas = dynamic(() => import('@/components/three/data-lattice'), {
  ssr: false,
})

const delay = (ms: number) => ({ '--rise-delay': `${ms}ms` }) as CSSProperties

export interface HeroStat {
  value: string
  label: string
}

export function PageHero({
  eyebrow,
  title,
  sub,
  stats,
  scene,
}: {
  eyebrow: string
  title: ReactNode
  sub: string
  stats?: HeroStat[]
  scene?: LatticeVariant
}) {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { margin: '200px 0px' })
  const can3d = useCan3D()
  const idle = useIdle(3500)

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-char py-24 text-bone md:py-28"
    >
      {can3d && idle && scene && (
        <div
          className={
            scene === 'wave'
              ? 'pointer-events-none absolute inset-x-0 bottom-0 hidden h-[70%] opacity-35 md:block'
              : 'pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] opacity-70 md:block'
          }
          aria-hidden="true"
        >
          <LatticeCanvas
            variant={scene}
            active={inView}
            camera={
              scene === 'wave'
                ? { position: [0, 1.2, 8.8], fov: 40 }
                : { position: [0, 0, 8.4], fov: 38 }
            }
          />
        </div>
      )}

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* CSS-driven entrance: paints before hydration, LCP-safe */}
        <div className="max-w-3xl">
          <p className="anim-rise mono-label text-brass">{eyebrow}</p>
          <h1
            className="mt-6 font-display text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-[1.0] tracking-tight"
            style={delay(100)}
          >
            {title}
          </h1>
          <p className="anim-rise mt-6 max-w-xl text-lg leading-relaxed text-bone/75" style={delay(200)}>
            {sub}
          </p>
        </div>

        {stats && stats.length > 0 && (
          <dl
            className="anim-rise mt-16 grid grid-cols-2 gap-y-10 border-t border-line-dark pt-10 md:grid-cols-4"
            style={delay(300)}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="pr-6">
                <dd className="font-display text-4xl font-semibold tracking-tight text-brass md:text-5xl">
                  <StatCounter value={stat.value} />
                </dd>
                <dt className="mono-label mt-3 text-ash">{stat.label}</dt>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  )
}
