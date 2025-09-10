import { ReactNode } from 'react'
import { Navigation } from './navigation'
import { Footer } from './footer'
import { FloatingWidgets } from './floating-widgets'
import { Toaster } from '@/components/ui/toaster'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <FloatingWidgets />
      <Toaster />
    </div>
  )
}