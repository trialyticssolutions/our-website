'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { MECH } from '@/lib/motion'
import { ArrowRight } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: MECH },
  },
}

export function CtaSection() {
  return (
    <section className="overflow-hidden bg-char">
      {/* The inversion: full-bleed brass band wipes up out of the char page */}
      <motion.div
        initial={{ clipPath: 'inset(100% 0 0 0)' }}
        whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
        viewport={{ once: true, margin: '-120px 0px' }}
        transition={{ duration: 0.9, ease: MECH }}
        className="bg-brass text-char"
      >
        <div className="container mx-auto px-6 py-24 md:py-32 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-120px 0px' }}
            className="max-w-3xl"
          >
            <motion.p variants={item} className="mono-label text-char/70">
              Ready to Transform Your Data?
            </motion.p>

            <motion.h2
              variants={item}
              className="mt-6 font-display text-[clamp(2.3rem,5.5vw,4.2rem)] font-semibold leading-[1.0] tracking-tight"
            >
              Start Your Data Transformation Today
            </motion.h2>

            <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-relaxed text-char/80">
              Join 50+ businesses that have already unlocked the full potential of their
              data. Get started with a free consultation and see the difference we can
              make.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-char-solid">
                <span className="btn-label">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
              <Link href="/services" className="btn-outline-char">
                <span className="btn-label">View Services</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
