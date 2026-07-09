import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { SITE_CONFIG, NAVIGATION_ITEMS } from '@/data/constants'

const SERVICE_LINKS = [
  { label: 'Database Consultancy', href: '/services#database-consultancy' },
  { label: 'Data Insights', href: '/services#data-insights' },
  { label: 'AI Automation', href: '/services#ai-automation' },
  { label: 'Data Visualization', href: '/services#data-visualization' },
  { label: 'Marketing Optimization', href: '/services#marketing-optimization' },
]

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: SITE_CONFIG.social.linkedin, Icon: Linkedin },
  { label: 'Twitter', href: SITE_CONFIG.social.twitter, Icon: Twitter },
  { label: 'Facebook', href: SITE_CONFIG.social.facebook, Icon: Facebook },
  { label: 'Instagram', href: SITE_CONFIG.social.instagram, Icon: Instagram },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-line-dark bg-char text-bone">
      <div className="container mx-auto px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <span className="flex items-center gap-2.5">
              <span className="block h-3 w-3 bg-brass" aria-hidden="true" />
              <span className="font-display text-xl font-semibold tracking-tight">
                AcubeInsights
              </span>
            </span>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ash">
              {SITE_CONFIG.description}
            </p>
            <ul className="mt-8 flex gap-3">
              {SOCIAL_LINKS.filter((s) => s.href).map(({ label, href, Icon }) => (
                <li key={label}>
                  <Link
                    href={href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center border border-line-dark text-ash transition-colors duration-300 hover:border-brass hover:text-brass"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="mono-label text-brass">Navigation</h3>
            <ul className="mt-6 space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="filament inline-block text-[15px] text-ash transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="mono-label text-brass">Services</h3>
            <ul className="mt-6 space-y-3">
              {SERVICE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="filament inline-block text-[15px] text-ash transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="mono-label text-brass">Contact</h3>
            <ul className="mt-6 space-y-3 text-[15px] text-ash">
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="transition-colors hover:text-bone">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.phone}`} className="transition-colors hover:text-bone">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="leading-relaxed">{SITE_CONFIG.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line-dark pt-8 sm:flex-row sm:items-center">
          <p className="mono-label text-ash">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="mono-label text-ash transition-colors hover:text-bone">
              Privacy Policy
            </Link>
            <Link href="/terms" className="mono-label text-ash transition-colors hover:text-bone">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
