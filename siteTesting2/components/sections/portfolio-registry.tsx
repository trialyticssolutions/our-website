'use client'

import { forwardRef, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { PORTFOLIO_CASES } from '@/data/constants'
import type { ProjectCase } from '@/types'

import { MECH } from '@/lib/motion'

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(date)

/* Pull the first result that leads with a hard number — the dossier's headline metric */
function leadStat(results: string[]) {
  for (const r of results) {
    const m = r.match(/^([+-]?\d+(?:\.\d+)?[%x]?)\s+(.+)$/)
    if (m) return { value: m[1], label: m[2] }
  }
  return null
}

function CaseDetail({ project }: { project: ProjectCase }) {
  return (
    <div className="grid gap-8 pt-8 md:grid-cols-2">
      <div>
        <h4 className="mono-label text-ash">Challenge</h4>
        <p className="mt-3 text-[15px] leading-relaxed text-bone/75">{project.challenge}</p>
      </div>
      <div>
        <h4 className="mono-label text-ash">Solution</h4>
        <p className="mt-3 text-[15px] leading-relaxed text-bone/75">{project.solution}</p>
      </div>
      <div>
        <h4 className="mono-label text-ash">Results</h4>
        <ul className="mt-3 space-y-2.5">
          {project.results.map((result) => (
            <li key={result} className="flex items-baseline gap-3 text-[15px] leading-snug text-bone/80">
              <span className="h-1.5 w-1.5 shrink-0 bg-brass" aria-hidden="true" />
              {result}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="mono-label text-ash">Technologies Used</h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="border border-line-dark px-3 py-1 font-mono text-xs uppercase tracking-wider text-bone/70"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

interface DossierProps {
  project: ProjectCase
  index: number
  open: boolean
  onToggle: () => void
  ctaLabel: string
}

/* forwardRef: AnimatePresence popLayout attaches a ref to its direct children */
const Dossier = forwardRef<HTMLElement, DossierProps>(function Dossier(
  { project, index, open, onToggle, ctaLabel },
  ref
) {
  const stat = leadStat(project.results)

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, ease: MECH }}
      className={
        'bg-char p-7 text-bone md:p-9 ' + (open ? 'lg:col-span-2' : '')
      }
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="group block w-full text-left"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <p className="mono-label text-brass">
            CASE/{String(index + 1).padStart(2, '0')}
            <span className="text-ash"> — {project.category}</span>
          </p>
          <p className="mono-label text-ash">{formatDate(project.completionDate)}</p>
        </div>

        <h3 className="mt-5 font-display text-xl font-semibold leading-tight tracking-tight transition-colors duration-200 group-hover:text-brass md:text-2xl">
          {project.title}
        </h3>
        <p className="mono-label mt-3 text-ash">{project.client}</p>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-bone/70">
          {project.description}
        </p>

        {stat && (
          <div className="mt-7">
            <p className="mono-label text-ash">Key Results:</p>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-display text-4xl font-semibold tracking-tight text-brass md:text-5xl">
                {stat.value}
              </span>
              <span className="max-w-xs text-sm leading-snug text-bone/70">{stat.label}</span>
            </div>
          </div>
        )}

        <span className="filament mono-label mt-8 inline-flex items-center gap-2 text-bone transition-colors duration-200 group-hover:text-brass">
          {open ? 'Close' : ctaLabel}
          <ArrowUpRight
            className={
              'h-4 w-4 transition-transform duration-300 ease-mech ' +
              (open ? 'rotate-[135deg]' : 'group-hover:-translate-y-0.5 group-hover:translate-x-0.5')
            }
            aria-hidden="true"
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: MECH }}
            className="overflow-hidden"
          >
            <div className="mt-8 border-t border-line-dark">
              <CaseDetail project={project} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
})

export function PortfolioRegistry() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(PORTFOLIO_CASES.map((c) => c.category)))],
    []
  )
  const [filter, setFilter] = useState('All')
  const [openId, setOpenId] = useState<string | null>(null)

  const visible = useMemo(
    () => (filter === 'All' ? PORTFOLIO_CASES : PORTFOLIO_CASES.filter((c) => c.category === filter)),
    [filter]
  )
  const featured = visible.filter((c) => c.featured)
  const others = visible.filter((c) => !c.featured)

  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id))

  return (
    <section className="bg-bone py-24 text-char md:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Registry filter */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter case studies by category">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat)
                setOpenId(null)
              }}
              aria-pressed={filter === cat}
              className={
                'mono-label border px-3.5 py-2 transition-colors duration-200 ' +
                (filter === cat
                  ? 'border-char bg-char text-bone'
                  : 'border-line-light text-ash-deep hover:border-char hover:text-char')
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {featured.length > 0 && (
          <>
            <h2 className="mt-16 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-tight tracking-tight">
              Featured <span className="text-brass-deep">Case Studies</span>
            </h2>
            <motion.div layout className="mt-8 grid gap-5 lg:grid-cols-2">
              <AnimatePresence mode="popLayout" initial={false}>
                {featured.map((project) => (
                  <Dossier
                    key={project.id}
                    project={project}
                    index={PORTFOLIO_CASES.indexOf(project)}
                    open={openId === project.id}
                    onToggle={() => toggle(project.id)}
                    ctaLabel="View Case Study"
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}

        {others.length > 0 && (
          <>
            <h2 className="mt-20 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-tight tracking-tight">
              All <span className="text-brass-deep">Projects</span>
            </h2>
            <motion.div layout className="mt-8 grid gap-5">
              <AnimatePresence mode="popLayout" initial={false}>
                {others.map((project) => (
                  <Dossier
                    key={project.id}
                    project={project}
                    index={PORTFOLIO_CASES.indexOf(project)}
                    open={openId === project.id}
                    onToggle={() => toggle(project.id)}
                    ctaLabel="View Details"
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}
