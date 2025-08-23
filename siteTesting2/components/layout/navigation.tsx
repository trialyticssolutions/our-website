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
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-transparent'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-12 mt-6">
          {/* Pill-shaped Navigation Container */}
          <div className="bg-gradient-to-t from-[#3a3a3a] via-[#1a1a1a] to-[#3a3a3a] border border-[#444] rounded-[50px] px-8 py-2 flex items-center justify-between w-full">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              onClick={closeSheet}
            >
              <div className="flex items-center justify-center w-6 h-6 bg-white text-[#1a1a1a] rounded-md transition-all duration-300 group-hover:scale-105">
                <Sparkles className="h-3 w-3" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white font-inter">
                  DataFlow
                </span>
                <span className="text-[8px] text-white/70 uppercase tracking-wider font-inter">
                  Data Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = isActiveLink(item.href)
                console.log(`Navigation item: ${item.label}, href: ${item.href}, pathname: ${pathname}, isActive: ${isActive}`)
                
                if (isActive) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="nav-link-active text-[#8b5cf6] text-sm font-medium transition-all duration-200 relative font-inter px-4 py-2 rounded-[50px] hover:bg-[#2E2E2E]"
                      style={{ color: '#8b5cf6' }}
                    >
                      {item.label}
                    </Link>
                  )
                }
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium transition-all duration-200 relative font-inter px-4 py-2 rounded-[50px] hover:bg-[#2E2E2E] text-white/90 hover:text-white"
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            {/* CTA Button */}
            <Button className="bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] hover:from-[#7c3aed] hover:to-[#9333ea] text-white font-medium px-4 py-1 rounded-full transition-all duration-300 hover:scale-105 font-inter text-sm min-h-0 h-8">
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-white/10 text-white"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-3.5 w-3.5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#1a1a1a] border-l border-[#333]">
                <div className="flex flex-col space-y-8 mt-8">
                  {/* Mobile Logo */}
                  <Link
                    href="/"
                    className="flex items-center space-x-3"
                    onClick={closeSheet}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-white text-[#1a1a1a] rounded-2xl shadow-md">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-white font-inter">
                        DataFlow
                      </span>
                      <span className="text-sm text-white/70 uppercase tracking-wider font-inter">
                        Data Solutions
                      </span>
                    </div>
                  </Link>

                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-6">
                    {NAVIGATION_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          'text-lg font-medium transition-all duration-200 py-3 px-4 rounded-xl font-inter',
                          isActiveLink(item.href)
                            ? 'text-white bg-white/10 font-semibold'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                        )}
                        onClick={closeSheet}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Button className="bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] hover:from-[#7c3aed] hover:to-[#9333ea] text-white w-full mt-6 rounded-full font-inter" onClick={closeSheet}>
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
} 