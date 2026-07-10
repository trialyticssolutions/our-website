'use client'

import { motion } from 'motion/react'
import { MECH } from '@/lib/motion'

/* Genuinely sequential content — numbered steps are earned here */
const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We assess your current setup and understand your goals',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We create a tailored plan and roadmap for your project',
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'We execute the solution with regular updates and feedback',
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'We monitor, refine, and provide ongoing support',
  },
]

const stepReveal = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.15 + i * 0.08, ease: MECH },
  }),
}

export function ProcessSection() {
  return (
    <section className="bg-char py-24 text-bone md:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mono-label text-brass">Our Process</p>
          <h2 className="mt-5 font-display text-[clamp(2.1rem,4.5vw,3.4rem)] font-semibold leading-[1.02] tracking-tight">
            How We <span className="text-brass">Deliver Results</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-bone/65">
            We follow a proven, structured approach to ensure your project&apos;s success
          </p>
        </div>

        <div className="relative mt-16">
          {/* The filament: one line drawn through all four steps */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px 0px' }}
            transition={{ duration: 1.2, ease: MECH }}
            className="absolute left-0 top-[5px] hidden h-px w-full origin-left bg-brass/40 md:block"
            aria-hidden="true"
          />
          <div className="grid gap-10 md:grid-cols-4 md:gap-8">
            {PROCESS_STEPS.map((phase, i) => (
              <motion.div
                key={phase.step}
                custom={i}
                variants={stepReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px 0px' }}
                className="relative"
              >
                <span
                  className="absolute left-0 top-0 hidden h-[11px] w-[11px] bg-brass md:block"
                  aria-hidden="true"
                />
                <p className="mono-label text-brass md:pt-8">{phase.step}</p>
                <h3 className="mt-3 font-display text-xl font-semibold">{phase.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ash">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
