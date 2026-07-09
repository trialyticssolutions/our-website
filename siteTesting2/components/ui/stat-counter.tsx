'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView } from 'motion/react'
import { MECH } from '@/lib/motion'

/**
 * Animates a stat string like "50+", "4.7/5", "95%" from zero when scrolled
 * into view. Falls back to static text when the value has no leading number
 * or the user prefers reduced motion.
 */
export function StatCounter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  useEffect(() => {
    if (!inView || !ref.current) return
    const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/)
    if (!match) return
    const target = parseFloat(match[1])
    const suffix = match[2]
    const decimals = match[1].includes('.') ? 1 : 0
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const controls = animate(0, target, {
      duration: 1.5,
      ease: MECH,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${v.toFixed(decimals)}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}
