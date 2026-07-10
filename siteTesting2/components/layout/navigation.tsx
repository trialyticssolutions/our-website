'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { MECH } from '@/lib/motion'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAVIGATION_ITEMS } from '@/data/constants'

function Wordmark({ large = false, spin = false }: { large?: boolean; spin?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      {/* The cube — rotates 45° once the page is in motion */}
      <span
        className={cn(
          'block bg-brass transition-transform duration-500 ease-mech',
          large ? 'h-3.5 w-3.5' : 'h-2.5 w-2.5',
          spin && 'rotate-45'
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          'font-display font-semibold tracking-tight text-bone',
          large ? 'text-2xl' : 'text-lg'
        )}
      >
        AcubeInsights
      </span>
    </span>
  )
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { scrollY, scrollYProgress } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(v > 16)
    if (isOpen) {
      setHidden(false)
      return
    }
    if (v > prev && v > 160) setHidden(true)
    else if (v < prev - 2) setHidden(false)
  })

  const isActiveLink = (href: string) => {
    if (!pathname) return false
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 bg-char"
      animate={hidden ? 'hidden' : 'visible'}
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      transition={{ duration: 0.38, ease: MECH }}
    >
      <nav className="container mx-auto px-6 lg:px-8" aria-label="Main navigation">
        {/* Constant height — animating height causes layout reflow; the cube
            rotation + progress filament carry the "scrolled" state instead */}
        <div className="flex h-16 items-center justify-between">
          <Link href="/" onClick={() => setIsOpen(false)} aria-label="AcubeInsights — home">
            <Wordmark spin={scrolled} />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAVIGATION_ITEMS.map((item) => {
              const active = isActiveLink(item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-active={active}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'filament text-sm font-medium transition-colors duration-200',
                      active ? 'text-bone' : 'text-ash hover:text-bone'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn-brass hidden !px-5 !py-2.5 text-sm lg:inline-flex">
              <span className="btn-label">Get Started</span>
            </Link>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="flex h-10 w-10 items-center justify-center text-bone lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] border-l border-line-dark bg-char text-bone sm:w-[380px]"
              >
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <div className="mt-4 flex flex-col gap-10">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Wordmark large />
                  </Link>
                  <ul className="flex flex-col gap-1">
                    {NAVIGATION_ITEMS.map((item) => {
                      const active = isActiveLink(item.href)
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            aria-current={active ? 'page' : undefined}
                            className={cn(
                              'block border-b border-line-dark py-4 font-display text-xl font-medium transition-colors',
                              active ? 'text-brass' : 'text-bone hover:text-brass'
                            )}
                          >
                            {item.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-brass w-full"
                  >
                    <span className="btn-label">Get Started</span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Reading filament: scroll progress in brass, hairline track beneath */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-line-dark" aria-hidden="true" />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-brass"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
    </motion.header>
  )
}
