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
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md border border-gray-700 rounded-[50px] px-8 py-2 flex items-center justify-between w-full shadow-lg">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              onClick={closeSheet}
            >
              <div className="flex items-center justify-center w-6 h-6 bg-white text-gray-900 rounded-md transition-all duration-300 group-hover:scale-105">
                <Sparkles className="h-3 w-3" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white font-inter">
                  AcubeInsights
                </span>
                <span className="text-[8px] text-gray-300 uppercase tracking-wider font-inter">
                  Data Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = isActiveLink(item.href)
                console.log(`Navigation item: ${item.label}, href: ${item.href}, pathname: ${pathname}, isActive: ${isActive}`)
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-all duration-200 relative font-inter px-4 py-2 rounded-[50px]",
                      isActive
                        ? "text-white bg-purple-600 font-semibold shadow-md"
                        : "text-gray-300 hover:text-white hover:bg-purple-600/50"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            {/* CTA Button */}
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium px-4 py-1 rounded-full transition-all duration-300 hover:scale-105 font-inter text-sm min-h-0 h-8 shadow-md hover:shadow-lg">
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-purple-600/20 text-gray-300"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-3.5 w-3.5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-b from-gray-900 to-gray-800 border-l border-gray-700">
                <div className="flex flex-col space-y-8 mt-8">
                  {/* Mobile Logo */}
                  <Link
                    href="/"
                    className="flex items-center space-x-3"
                    onClick={closeSheet}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-white text-gray-900 rounded-2xl shadow-md">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-white font-inter">
                        AcubeInsights
                      </span>
                      <span className="text-sm text-gray-300 uppercase tracking-wider font-inter">
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
                            ? 'text-white bg-purple-600 font-semibold shadow-md'
                            : 'text-gray-300 hover:text-white hover:bg-purple-600/50'
                        )}
                        onClick={closeSheet}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white w-full mt-6 rounded-full font-inter shadow-md hover:shadow-lg" onClick={closeSheet}>
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