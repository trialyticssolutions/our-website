'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { MECH } from '@/lib/motion'
import { ArrowRight } from 'lucide-react'
import { SERVICES, SERVICE_CODES } from '@/data/constants'

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: MECH },
  },
}

export function ServicesDetail() {
  const [activeId, setActiveId] = useState<string | null>(null)

  // Scrollspy for the side rail
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px' }
    )
    SERVICES.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-bone py-24 text-char md:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mono-label text-brass-deep">Our Services — 08</p>
          <h2 className="mt-5 font-display text-[clamp(2.1rem,4.5vw,3.4rem)] font-semibold leading-[1.02] tracking-tight">
            Our Services
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-warm/70">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-10 grid gap-10 xl:grid-cols-[3.5rem_1fr]">
          {/* Rail: directory of the eight services, follows scroll position */}
          <nav
            className="sticky top-24 hidden self-start xl:flex xl:flex-col xl:gap-4"
            aria-label="Service index"
          >
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                data-active={activeId === s.id}
                className={
                  'filament mono-label inline-block w-fit transition-colors duration-200 ' +
                  (activeId === s.id ? 'text-brass-deep' : 'text-ash hover:text-char')
                }
              >
                {SERVICE_CODES[s.id] ?? '—'}
              </a>
            ))}
          </nav>

          <div>
            {SERVICES.map((service) => (
              <motion.article
                key={service.id}
                id={service.id}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px 0px' }}
                className="grid scroll-mt-28 gap-10 border-t border-line-light py-16 first:border-t-0 first:pt-6 lg:grid-cols-12 lg:gap-14"
              >
                {/* Left: identity — sticky while the detail scrolls */}
                <div className="lg:col-span-5">
                  <div className="lg:sticky lg:top-28">
                    <p className="mono-label text-brass-deep">
                      {SERVICE_CODES[service.id] ?? '—'}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-ink-warm/70">
                      {service.description}
                    </p>
                    {service.technologies && service.technologies.length > 0 && (
                      <p className="mono-label mt-6 leading-relaxed text-ash-deep">
                        {service.technologies.join(' / ')}
                      </p>
                    )}
                    <Link href="/contact" className="btn-char-solid mt-8 !px-6 !py-3 text-sm">
                      <span className="btn-label">
                        Get Started
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right: the full detail, laid out openly */}
                <div className="space-y-10 lg:col-span-7">
                  <div>
                    <h4 className="mono-label text-ash-deep">Overview</h4>
                    <p className="mt-3 leading-relaxed text-ink-warm/80">
                      {service.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="mono-label text-ash-deep">What&apos;s Included</h4>
                    <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-baseline gap-3 text-[15px] leading-snug text-ink-warm/80">
                          <span className="h-1.5 w-1.5 shrink-0 translate-y-[-1px] bg-brass" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mono-label text-ash-deep">Target Audience</h4>
                    <p className="mt-3 leading-relaxed text-ink-warm/80">
                      {service.targetAudience}
                    </p>
                  </div>

                  <div>
                    <h4 className="mono-label text-ash-deep">Key Benefits</h4>
                    <ul className="mt-4 flex flex-wrap gap-2.5">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="border border-line-light px-3.5 py-1.5 text-sm text-ink-warm/80"
                        >
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
