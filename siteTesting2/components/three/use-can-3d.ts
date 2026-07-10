'use client'

import { useEffect, useState } from 'react'

/** Gate for the 3D scenes: null while unknown (SSR), then boolean. */
export function useCan3D(): boolean | null {
  const [ok, setOk] = useState<boolean | null>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lowPower = (navigator.hardwareConcurrency ?? 8) <= 4
    setOk(!reduced && !lowPower)
  }, [])

  return ok
}
