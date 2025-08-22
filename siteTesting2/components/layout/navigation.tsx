'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAVIGATION_ITEMS } from '@/data/constants'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeSheet = () => setIsOpen(false)

  const isActiveLink = (href: string) => {
    if (!pathname) return false
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-surfe-white shadow-lg border-b border-surfe-200'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            onClick={closeSheet}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-surfe-primary text-surfe-white rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <Sparkles className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-surfe-primary">
              DataFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-base font-medium transition-all duration-200 hover:text-surfe-primary relative',
                  isActiveLink(item.href)
                    ? 'text-surfe-primary font-semibold'
                    : 'text-surfe-text-secondary'
                )}
              >
                {item.label}
                {isActiveLink(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-surfe-primary rounded-full"></div>
                )}
              </Link>
            ))}
            <Button className="bg-surfe-primary hover:bg-surfe-700 text-surfe-white ml-6">
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-surfe-button-light"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6 text-surfe-text-secondary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-surfe-white border-l border-surfe-200">
              <div className="flex flex-col space-y-8 mt-8">
                {/* Mobile Logo */}
                <Link
                  href="/"
                  className="flex items-center space-x-3"
                  onClick={closeSheet}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-surfe-primary text-surfe-white rounded-2xl shadow-md">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-bold text-surfe-primary">
                    DataFlow
                  </span>
                </Link>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-6">
                  {NAVIGATION_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'text-lg font-medium transition-all duration-200 py-3 px-4 rounded-xl',
                        isActiveLink(item.href)
                          ? 'text-surfe-primary bg-surfe-button-light font-semibold'
                          : 'text-surfe-text-secondary hover:text-surfe-primary hover:bg-surfe-button-light'
                      )}
                      onClick={closeSheet}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button className="bg-surfe-primary hover:bg-surfe-700 text-surfe-white w-full mt-6" onClick={closeSheet}>
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
} 