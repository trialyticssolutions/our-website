'use client'

import { useRef } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion, useInView } from 'motion/react'
import { MECH } from '@/lib/motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SERVICES, SERVICE_CODES } from '@/data/constants'
import { useCan3D } from '@/components/three/use-can-3d'
import { useLatched } from '@/components/three/use-lazy-mount'

const AcubeCanvas = dynamic(() => import('@/components/three/acube'), {
  ssr: false,
})

const rowReveal = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.04, ease: MECH },
  }),
}

/* Static isometric cube for reduced-motion / low-power devices */
function StaticAcube() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full opacity-80" aria-hidden="true">
      <polygon points="100,38 156,69 100,100 44,69" fill="#D89E3A" />
      <polygon points="44,69 100,100 100,162 44,131" fill="#A3742A" />
      <polygon points="156,69 100,100 100,162 156,131" fill="#E2B45E" />
    </svg>
  )
}

export function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { margin: '200px 0px' })
  const can3d = useCan3D()
  // Mount the three.js chunk only once the section nears the viewport
  const mountCube = useLatched(inView)
  // Ref (not state): the cube reads it per-frame, hover never re-renders React
  const hoveredRef = useRef<number | null>(null)

  return (
    <section ref={sectionRef} className="bg-bone py-24 text-char md:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="mono-label text-brass-deep">Our Services — 08</p>
            <h2 className="mt-5 font-display text-[clamp(2.1rem,4.5vw,3.4rem)] font-semibold leading-[1.02] tracking-tight">
              Comprehensive Data Solutions
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-warm/70">
              From database architecture to AI automation, we provide end-to-end data
              solutions that drive measurable business growth.
            </p>
          </div>

          {/* The Acube — brand mark as sculpture; reacts to row hover below */}
          <div className="hidden h-[320px] md:col-span-5 md:block" aria-hidden="true">
            {can3d === true && mountCube && <AcubeCanvas active={inView} hoveredRef={hoveredRef} />}
            {can3d === false && <StaticAcube />}
          </div>
        </div>

        {/* The index: one line per service; hover wipes a char panel up through the row */}
        <div className="mt-12 border-t border-line-light">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={rowReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px 0px' }}
            >
              <Link
                href={`/services#${service.id}`}
                onMouseEnter={() => { hoveredRef.current = i }}
                onMouseLeave={() => { hoveredRef.current = null }}
                onFocus={() => { hoveredRef.current = i }}
                onBlur={() => { hoveredRef.current = null }}
                className="group relative grid grid-cols-[2.75rem_1fr_2.25rem] items-center gap-4 border-b border-line-light px-2 py-5 md:grid-cols-[3.5rem_1fr_minmax(0,38%)_3rem] md:gap-8 md:px-4"
              >
                {/* GPU wipe: char panel scales up from the bottom edge */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-bottom scale-y-0 bg-char transition-transform duration-450 ease-mech group-hover:scale-y-100"
                />
                <span className="mono-label relative text-ash-deep transition-colors duration-300 group-hover:text-brass">
                  {SERVICE_CODES[service.id] ?? '—'}
                </span>
                <span className="relative">
                  <span className="block font-display text-lg font-semibold leading-snug transition-colors duration-300 group-hover:text-bone md:text-[1.4rem]">
                    {service.title}
                  </span>
                  <span className="mt-1.5 block text-sm leading-snug text-ink-warm/65 transition-colors duration-300 group-hover:text-bone/70 md:hidden">
                    {service.description}
                  </span>
                </span>
                <span className="relative hidden text-sm leading-snug text-ink-warm/65 transition-colors duration-300 group-hover:text-bone/75 md:block">
                  {service.description}
                </span>
                <span className="relative justify-self-end">
                  <ArrowRight
                    className="h-5 w-5 text-ash-deep transition-[transform,color] duration-450 ease-mech group-hover:-rotate-45 group-hover:text-brass"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/services" className="btn-outline-char">
            <span className="btn-label">
              View All Services
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
