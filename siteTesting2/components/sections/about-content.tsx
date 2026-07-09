'use client'

import { CSSProperties, useRef } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion, useInView } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { StatCounter } from '@/components/ui/stat-counter'
import { useCan3D } from '@/components/three/use-can-3d'
import { useIdle } from '@/components/three/use-lazy-mount'

const AcubeCanvas = dynamic(() => import('@/components/three/acube'), {
  ssr: false,
})

import { MECH } from '@/lib/motion'

const delay = (ms: number) => ({ '--rise-delay': `${ms}ms` }) as CSSProperties

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: MECH },
  }),
}

const STORY_STATS = [
  { value: '2023', label: 'Founded', animate: false },
  { value: '50+', label: 'Clients Served', animate: true },
  { value: '50+', label: 'Projects Completed', animate: true },
  { value: '30%', label: 'Avg ROI Improvement', animate: true },
]

const PILLARS = [
  {
    label: 'Our Mission',
    body: 'Deliver reliable data foundations and pragmatic automation so teams can make confident, fast decisions that drive growth.',
  },
  {
    label: 'Our Vision',
    body: 'A world where every growing business trusts its numbers and can explain performance in minutes, not days.',
  },
  {
    label: 'Our Values',
    values: ['Client-Centricity', 'Innovation & Excellence', 'Transparency & Integrity'],
  },
]

const WHY_CHOOSE_US = [
  {
    title: 'Proven Expertise',
    description:
      'Our team brings hands-on experience building modern data stacks and analytics for fast-growing companies.',
  },
  {
    title: 'Client-Focused Approach',
    description:
      'We start from your goals and build only what moves the needle—measured and reviewed together.',
  },
  {
    title: 'End-to-End Solutions',
    description:
      'From tracking and warehousing to dashboards and automation, we cover the full data lifecycle.',
  },
  {
    title: 'Collaborative Partnership',
    description:
      'We work as an extension of your team, with clear documentation and enablement so you stay self-sufficient.',
  },
  {
    title: 'Cutting-Edge Technology',
    description:
      'We pick proven tools first, adding AI where it makes sense for reliability and speed.',
  },
  {
    title: 'Measurable Results',
    description:
      'We focus on tangible lifts—think 10–30% improvements in ROAS, conversion, or operational efficiency.',
  },
]

export function AboutContent() {
  const heroRef = useRef<HTMLElement>(null)
  const heroInView = useInView(heroRef, { margin: '200px 0px' })
  const can3d = useCan3D()
  const idle = useIdle(3500)

  return (
    <>
      {/* Hero — the brand object on the brand page */}
      <section ref={heroRef} className="relative overflow-hidden bg-char py-24 text-bone md:py-28">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-12">
            {/* CSS-driven entrance: paints before hydration, LCP-safe */}
            <div className="md:col-span-7">
              <h1 className="font-display text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-[1.0] tracking-tight">
                About Our <span className="text-brass">Agency</span>
              </h1>
              <p
                className="anim-rise mt-6 max-w-xl text-lg leading-relaxed text-bone/75"
                style={delay(120)}
              >
                We help startups and mid-size teams turn raw data into reliable,
                decision-ready insights—without heavy overhead.
              </p>
            </div>
            <div className="hidden h-[300px] md:col-span-5 md:block" aria-hidden="true">
              {can3d && idle && <AcubeCanvas active={heroInView} />}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story + stat ledger */}
      <section className="bg-bone py-24 text-char md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              variants={reveal}
              custom={0}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px 0px' }}
              className="lg:col-span-7"
            >
              <p className="mono-label text-brass-deep">Our Story</p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,3.8vw,2.8rem)] font-semibold leading-tight tracking-tight">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-ink-warm/80">
                <p>
                  Founded in 2023, we started with a simple observation: most businesses
                  were sitting on a goldmine of data but lacked the foundations and focus
                  to turn it into daily, measurable impact.
                </p>
                <p>
                  Coming from data engineering, analytics, and growth backgrounds, we
                  built a hands-on practice focused on strong data foundations, clear
                  tracking, and pragmatic automation—so teams can trust their numbers and
                  move faster.
                </p>
                <p className="border-l-2 border-brass pl-5 text-ink-warm">
                  Since then, we&apos;ve helped 50+ companies establish modern data
                  stacks, automate reporting, and ship analytics that actually get
                  used—driving an average 30% improvement in marketing ROI and efficiency
                  across teams.
                </p>
              </div>
              <Link href="/contact" className="btn-char-solid mt-8">
                <span className="btn-label">
                  Start Your Journey
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>

            <motion.dl
              variants={reveal}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px 0px' }}
              className="grid grid-cols-2 self-start border-l border-t border-line-light lg:col-span-5"
            >
              {STORY_STATS.map((stat) => (
                <div key={stat.label} className="border-b border-r border-line-light p-7 md:p-8">
                  <dd className="font-display text-3xl font-semibold tracking-tight text-brass-deep md:text-4xl">
                    {stat.animate ? <StatCounter value={stat.value} /> : stat.value}
                  </dd>
                  <dt className="mono-label mt-3 text-ash-deep">{stat.label}</dt>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values — three columns on char */}
      <section className="bg-char py-24 text-bone md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-tight">
              Our Mission, <span className="text-brass">Vision &amp; Values</span>
            </h2>
            <p className="mt-5 leading-relaxed text-bone/65">
              The principles that guide our work and define our commitment to our clients
            </p>
          </div>

          <div className="mt-14 grid gap-10 border-t border-line-dark pt-10 md:grid-cols-3 md:gap-8">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                variants={reveal}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px 0px' }}
              >
                <h3 className="mono-label text-brass">{pillar.label}</h3>
                {pillar.body && (
                  <p className="mt-4 leading-relaxed text-bone/80">{pillar.body}</p>
                )}
                {pillar.values && (
                  <ul className="mt-4 space-y-3">
                    {pillar.values.map((v) => (
                      <li key={v} className="flex items-baseline gap-3 text-bone/80">
                        <span className="h-1.5 w-1.5 shrink-0 bg-brass" aria-hidden="true" />
                        {v}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — hairline ledger cells */}
      <section className="bg-bone py-24 text-char md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-tight">
              Why <span className="text-brass-deep">Choose Us</span>
            </h2>
            <p className="mt-5 leading-relaxed text-ink-warm/70">
              What sets us apart in the data consulting landscape
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-line-light sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item, i) => (
              <motion.div
                key={item.title}
                variants={reveal}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px 0px' }}
                className="group border-b border-r border-line-light p-8 transition-colors duration-300 hover:bg-bone-2"
              >
                <span
                  className="block h-2 w-2 bg-brass transition-transform duration-300 ease-mech group-hover:rotate-45"
                  aria-hidden="true"
                />
                <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-warm/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
