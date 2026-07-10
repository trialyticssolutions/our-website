'use client'

import { CSSProperties } from 'react'
import { motion } from 'motion/react'
import { ContactForm } from '@/components/forms/contact-form'
import { SITE_CONFIG } from '@/data/constants'

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

const FAQS = [
  {
    q: 'How long does a typical project take?',
    a: "Project timelines vary based on scope and complexity. Most projects range from 2-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes! We provide various support packages including maintenance, monitoring, and optimization services to ensure your solutions continue to deliver value.',
  },
  {
    q: "What's included in a free consultation?",
    a: "We'll assess your current data infrastructure, understand your goals, and provide recommendations. No obligations - just valuable insights for your business.",
  },
  {
    q: 'Do you work with small businesses?',
    a: 'Absolutely! We work with businesses of all sizes, from startups to enterprises. Our solutions are scalable and tailored to your specific needs and budget.',
  },
]

export function ContactContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-char py-20 text-bone md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          {/* CSS-driven entrance: paints before hydration, LCP-safe */}
          <div className="max-w-3xl">
            <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-semibold leading-[1.0] tracking-tight">
              Let&apos;s Transform Your <span className="text-brass">Data Together</span>
            </h1>
            <p
              className="anim-rise mt-6 max-w-xl text-lg leading-relaxed text-bone/75"
              style={delay(120)}
            >
              Ready to unlock your data&apos;s potential? We&apos;d love to hear about
              your project and discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Form + contact ledger */}
      <section className="bg-bone py-20 text-char md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              variants={reveal}
              custom={0}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px 0px' }}
              className="lg:col-span-7"
            >
              <ContactForm />
            </motion.div>

            <motion.div
              variants={reveal}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px 0px' }}
              className="lg:col-span-5"
            >
              <dl className="divide-y divide-line-light border-y border-line-light">
                <div className="py-7">
                  <dt className="mono-label text-brass-deep">Email Us</dt>
                  <dd className="mt-3">
                    <p className="text-sm text-ink-warm/65">Get in touch via email</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="filament mt-1.5 inline-block font-medium text-char"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </dd>
                </div>
                <div className="py-7">
                  <dt className="mono-label text-brass-deep">Call Us</dt>
                  <dd className="mt-3">
                    <p className="text-sm text-ink-warm/65">Speak directly with our team</p>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="filament mt-1.5 inline-block font-medium text-char"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </dd>
                </div>
                <div className="py-7">
                  <dt className="mono-label text-brass-deep">Visit Us</dt>
                  <dd className="mt-3">
                    <p className="text-sm text-ink-warm/65">Our office location</p>
                    <address className="mt-1.5 not-italic leading-relaxed text-char">
                      {SITE_CONFIG.address}
                    </address>
                  </dd>
                </div>
                <div className="py-7">
                  <dt className="mono-label text-brass-deep">Business Hours</dt>
                  <dd className="mt-3 space-y-2 text-[15px]">
                    <div className="flex justify-between gap-6">
                      <span className="text-ink-warm/65">Monday - Friday</span>
                      <span className="font-mono text-sm text-char">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span className="text-ink-warm/65">Saturday</span>
                      <span className="font-mono text-sm text-char">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span className="text-ink-warm/65">Sunday</span>
                      <span className="font-mono text-sm text-char">Closed</span>
                    </div>
                  </dd>
                </div>
                <div className="py-7">
                  <dt className="mono-label text-brass-deep">Need Immediate Help?</dt>
                  <dd className="mt-3">
                    <p className="text-sm leading-relaxed text-ink-warm/65">
                      For urgent inquiries, use our floating chat widget or schedule a
                      call directly.
                    </p>
                    <p className="mt-3 flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-char">
                      <span className="h-1.5 w-1.5 bg-brass" aria-hidden="true" />
                      Average response time: 2 hours
                    </p>
                  </dd>
                </div>
              </dl>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line-light bg-bone pb-24 pt-20 text-char md:pb-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-tight">
              Frequently Asked <span className="text-brass-deep">Questions</span>
            </h2>
            <p className="mt-5 leading-relaxed text-ink-warm/70">
              Have questions? Here are some common inquiries we receive.
            </p>
          </div>

          <div className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-2">
            {FAQS.map((faq, i) => (
              <motion.div
                key={faq.q}
                variants={reveal}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px 0px' }}
                className="border-t border-line-light pt-6"
              >
                <h3 className="font-display text-lg font-semibold">{faq.q}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-warm/70">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
