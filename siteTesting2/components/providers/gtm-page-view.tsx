'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function GTMPageView() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: pathname,
      })
    }
  }, [pathname])

  return null
}
