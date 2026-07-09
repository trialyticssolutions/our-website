'use client'

import { useEffect, useState } from 'react'

/** Latches true the first time `active` is true — mount-once gate for
 *  heavy chunks (three.js) so they only load when their section
 *  approaches the viewport. */
export function useLatched(active: boolean): boolean {
  const [on, setOn] = useState(false)
  useEffect(() => {
    if (active && !on) setOn(true)
  }, [active, on])
  return on
}

/** True once the main thread goes idle (or after `timeout` ms) — defers
 *  above-the-fold canvas mounts off the LCP/TBT critical path. */
export function useIdle(timeout = 1500): boolean {
  const [idle, setIdle] = useState(false)
  useEffect(() => {
    const done = () => setIdle(true)
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(done, { timeout })
      return () => window.cancelIdleCallback(id)
    }
    const t = setTimeout(done, timeout)
    return () => clearTimeout(t)
  }, [timeout])
  return idle
}
