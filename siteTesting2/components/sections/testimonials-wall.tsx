'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { TESTIMONIALS } from '@/data/constants'
import { StatCounter } from '@/components/ui/stat-counter'
import type { Testimonial } from '@/types'

import { MECH } from '@/lib/motion'

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(date)

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: MECH },
  }),
}

/* Brass rating cells — our cube cells instead of generic stars */
function RatingCells({ rating, onDark = true }: { rating: number; onDark?: boolean }) {
  const filled = Math.floor(rating)
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex items-center gap-1" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={
              'h-2 w-2 ' +
              (i < filled
                ? 'bg-brass'
                : onDark
                  ? 'border border-line-dark'
                  : 'border border-line-light')
            }
          />
        ))}
      </span>
      <span className={'font-mono text-xs ' + (onDark ? 'text-ash' : 'text-ash-deep')}>
        {rating}
      </span>
      <span className="sr-only">{rating} out of 5</span>
    </span>
  )
}

function FeaturedSlab({ t, i }: { t: Testimonial; i: number }) {
  return (
    <motion.figure
      custom={i}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px 0px' }}
      className="flex flex-col bg-char p-8 text-bone md:p-10"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="mono-label text-brass">Featured</p>
        <RatingCells rating={t.rating} />
      </div>
      <blockquote className="mt-7 flex-1 text-lg leading-relaxed text-bone/90 md:text-xl md:leading-relaxed">
        &ldquo;{t.content}&rdquo;
      </blockquote>
      <figcaption className="mt-8 border-t border-line-dark pt-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <span className="font-medium text-bone">{t.name}</span>
            <span className="mono-label mt-1.5 block text-ash">
              {t.position}, {t.company}
            </span>
          </div>
          <span className="mono-label text-ash">{formatDate(t.date)}</span>
        </div>
      </figcaption>
    </motion.figure>
  )
}

/* Three rotating treatments keep the wall from feeling stamped out */
const WALL_TREATMENTS = [
  'border border-line-light bg-bone-2 text-char',
  'bg-char text-bone',
  'border-l-2 border-brass bg-bone text-char shadow-[inset_1px_0_0_0_transparent]',
]

function WallCard({ t, i }: { t: Testimonial; i: number }) {
  const treatment = WALL_TREATMENTS[i % WALL_TREATMENTS.length]
  const dark = treatment.includes('bg-char')
  return (
    <motion.figure
      custom={i}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px 0px' }}
      className={'mb-5 break-inside-avoid p-7 ' + treatment}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <RatingCells rating={t.rating} onDark={dark} />
        <span className={'mono-label ' + (dark ? 'text-ash' : 'text-ash-deep')}>
          {formatDate(t.date)}
        </span>
      </div>
      <blockquote
        className={
          'mt-5 text-[15px] leading-relaxed ' + (dark ? 'text-bone/85' : 'text-ink-warm/80')
        }
      >
        &ldquo;{t.content}&rdquo;
      </blockquote>
      <figcaption className={'mt-6 border-t pt-5 ' + (dark ? 'border-line-dark' : 'border-line-light')}>
        <span className={'text-sm font-medium ' + (dark ? 'text-bone' : 'text-char')}>
          {t.name}
        </span>
        <span className={'mono-label mt-1.5 block ' + (dark ? 'text-ash' : 'text-ash-deep')}>
          {t.position}, {t.company}
        </span>
      </figcaption>
    </motion.figure>
  )
}

const INDUSTRIES = [
  { industry: 'E-commerce', count: '15+' },
  { industry: 'Healthcare', count: '8+' },
  { industry: 'Finance', count: '12+' },
  { industry: 'Manufacturing', count: '10+' },
  { industry: 'Technology', count: '20+' },
  { industry: 'Retail', count: '7+' },
  { industry: 'Education', count: '5+' },
  { industry: 'Other', count: '8+' },
]

export function TestimonialsWall() {
  const featured = TESTIMONIALS.filter((t) => t.featured)
  const others = TESTIMONIALS.filter((t) => !t.featured)

  return (
    <>
      {/* Featured slabs */}
      <section className="bg-bone py-24 text-char md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-tight tracking-tight">
            Featured <span className="text-brass-deep">Success Stories</span>
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {featured.map((t, i) => (
              <FeaturedSlab key={t.id} t={t} i={i} />
            ))}
          </div>

          {/* The evidence wall */}
          <h2 className="mt-24 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-tight tracking-tight">
            All Client <span className="text-brass-deep">Reviews</span>
          </h2>
          <div className="mt-8 sm:columns-2 lg:columns-3 [column-gap:1.25rem]">
            {others.map((t, i) => (
              <WallCard key={t.id} t={t} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Industry ledger */}
      <section className="bg-char py-24 text-bone md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-tight tracking-tight">
            Trusted Across <span className="text-brass">Industries</span>
          </h2>
          <dl className="mt-10 grid grid-cols-2 border-l border-t border-line-dark md:grid-cols-4">
            {INDUSTRIES.map((item) => (
              <div key={item.industry} className="border-b border-r border-line-dark p-7 md:p-8">
                <dd className="font-display text-3xl font-semibold tracking-tight text-brass md:text-4xl">
                  <StatCounter value={item.count} />
                </dd>
                <dt className="mono-label mt-3 text-ash">{item.industry}</dt>
              </div>
            ))}
          </dl>

          {/* Summary */}
          <div className="mt-20 max-w-3xl">
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              Ready to Join Our Success Stories?
            </h3>
            <p className="mt-4 leading-relaxed text-bone/70">
              Our clients consistently report significant improvements in efficiency, ROI,
              and decision-making capabilities. Let us help you achieve similar results.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-brass">
                <span className="btn-label">
                  Get Your Free Consultation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
              <Link href="/portfolio" className="btn-outline-bone">
                <span className="btn-label">
                  View Case Studies
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
