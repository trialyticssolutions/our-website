'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { animate, motion, useInView } from 'motion/react'
import { MECH } from '@/lib/motion'
import { ArrowUpRight } from 'lucide-react'
import { TESTIMONIALS, TRUST_INDICATORS } from '@/data/constants'
import { useCan3D } from '@/components/three/use-can-3d'
import { useLatched } from '@/components/three/use-lazy-mount'

const LatticeCanvas = dynamic(() => import('@/components/three/data-lattice'), {
  ssr: false,
})

/* Hard numbers pulled verbatim from the existing quotes — not new copy */
const STAT_CALLOUTS: Record<
  string,
  { from: number; to: number; format: (v: number) => string; label: string }
> = {
  'testimonial-1': {
    from: 9,
    to: 4,
    format: (v) => `9 → ${Math.round(v)}`,
    label: 'Days to month-end close',
  },
  'testimonial-2': {
    from: 0,
    to: 32,
    format: (v) => `+${Math.round(v)}%`,
    label: 'Blended ROAS improvement',
  },
  'testimonial-3': {
    from: 0,
    to: 55,
    format: (v) => `−${Math.round(v)}%`,
    label: 'Ticket resolution time',
  },
}

function StatValue({ from, to, format }: { from: number; to: number; format: (v: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  useEffect(() => {
    if (!inView || !ref.current) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      ref.current.textContent = format(to)
      return
    }
    const controls = animate(from, to, {
      duration: 1.6,
      ease: MECH,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = format(v)
      },
    })
    return () => controls.stop()
  }, [inView, from, to, format])

  return <span ref={ref}>{format(from)}</span>
}

const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: MECH },
  },
}

/* Infinite marquee of real client companies, typographic wordmarks.
   Pauses via IntersectionObserver while off-screen — no idle compositor work. */
function ClientMarquee() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const marqueeInView = useInView(wrapRef)
  const items = [...TRUST_INDICATORS, ...TRUST_INDICATORS]
  return (
    <div
      ref={wrapRef}
      className="marquee mt-14 overflow-hidden border-y border-line-dark py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-label="Companies we have worked with"
    >
      <ul className="marquee-track" data-paused={!marqueeInView}>
        {items.map((client, i) => (
          <li
            key={`${client.name}-${i}`}
            aria-hidden={i >= TRUST_INDICATORS.length}
            className="flex shrink-0 items-center gap-12 pr-12 font-mono text-[15px] uppercase tracking-[0.2em] text-ash"
          >
            <span>{client.name}</span>
            <span className="h-1.5 w-1.5 shrink-0 bg-brass" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { margin: '200px 0px' })
  const can3d = useCan3D()
  // Mount the three.js chunk only once the section nears the viewport
  const mountWave = useLatched(inView)
  const featured = TESTIMONIALS.filter((t) => t.featured).slice(0, 3)

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-char py-24 text-bone md:py-32">
      {/* A slow data stream flowing behind the quotes */}
      {can3d && mountWave && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[75%] opacity-40" aria-hidden="true">
          <LatticeCanvas
            variant="wave"
            active={inView}
            camera={{ position: [0, 1.2, 8.8], fov: 40 }}
          />
        </div>
      )}

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mono-label text-brass">Client Success Stories</p>
          <h2 className="mt-5 font-display text-[clamp(2.1rem,4.5vw,3.6rem)] font-semibold leading-[1.02] tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-5 text-base leading-relaxed text-bone/65">
            Don&apos;t just take our word for it - hear from the businesses we&apos;ve
            helped transform
          </p>
        </div>

        <ClientMarquee />

        <div className="mt-4">
          {featured.map((t) => {
            const stat = STAT_CALLOUTS[t.id]
            return (
              <motion.figure
                key={t.id}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px 0px' }}
                className="grid gap-8 border-b border-line-dark py-14 md:grid-cols-12 md:gap-12"
              >
                {stat && (
                  <div className="md:col-span-4">
                    <div className="font-display text-[clamp(3rem,6vw,4.8rem)] font-semibold leading-none tracking-tight text-brass">
                      <StatValue from={stat.from} to={stat.to} format={stat.format} />
                    </div>
                    <div className="mono-label mt-4 text-ash">{stat.label}</div>
                  </div>
                )}
                <div className={stat ? 'md:col-span-8' : 'md:col-span-12'}>
                  <blockquote className="text-xl leading-relaxed text-bone/90 md:text-2xl md:leading-relaxed">
                    &ldquo;{t.content}&rdquo;
                  </blockquote>
                  <figcaption className="mono-label mt-7 text-ash">
                    <span className="text-bone">{t.name}</span>
                    <span aria-hidden="true"> — </span>
                    {t.position}, {t.company}
                  </figcaption>
                </div>
              </motion.figure>
            )
          })}
        </div>

        <div className="mt-14">
          <Link href="/testimonials" className="btn-outline-bone">
            <span className="btn-label">
              View All Testimonials
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
