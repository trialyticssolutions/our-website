import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Sparkles, Mail, Phone, MapPin } from 'lucide-react'
import { SITE_CONFIG, NAVIGATION_ITEMS } from '@/data/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surfe-primary text-surfe-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-surfe-white text-surfe-primary rounded-2xl shadow-md">
                <Sparkles className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-surfe-white">DataFlow</span>
            </div>
            <p className="text-surfe-white/80 text-base leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex space-x-4">
              {SITE_CONFIG.social.linkedin && (
                <Link
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-surfe-white/10 hover:bg-surfe-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              )}
              {SITE_CONFIG.social.twitter && (
                <Link
                  href={SITE_CONFIG.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-surfe-white/10 hover:bg-surfe-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              )}
              {SITE_CONFIG.social.facebook && (
                <Link
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-surfe-white/10 hover:bg-surfe-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              )}
              {SITE_CONFIG.social.instagram && (
                <Link
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-surfe-white/10 hover:bg-surfe-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-orange-custom">Navigation</h3>
            <ul className="space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-surfe-white/80 hover:text-surfe-white transition-colors text-base font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-orange-custom">Services</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link
                  href="/services#database-consultancy"
                  className="text-surfe-white/80 hover:text-surfe-white transition-colors font-medium"
                >
                  Database Consultancy
                </Link>
              </li>
              <li>
                <Link
                  href="/services#data-insights"
                  className="text-surfe-white/80 hover:text-surfe-white transition-colors font-medium"
                >
                  Data Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ai-automation"
                  className="text-surfe-white/80 hover:text-surfe-white transition-colors font-medium"
                >
                  AI Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#data-visualization"
                  className="text-surfe-white/80 hover:text-surfe-white transition-colors font-medium"
                >
                  Data Visualization
                </Link>
              </li>
              <li>
                <Link
                  href="/services#marketing-optimization"
                  className="text-surfe-white/80 hover:text-surfe-white transition-colors font-medium"
                >
                  Marketing Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-orange-custom">Contact</h3>
            <div className="space-y-4 text-base">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-surfe-white/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-surfe-white" />
                </div>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-surfe-white/80 hover:text-surfe-white transition-colors font-medium"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-surfe-white/20 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-surfe-white" />
                </div>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-surfe-white/80 hover:text-surfe-white transition-colors font-medium"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-surfe-white/20 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-surfe-white" />
                </div>
                <span className="text-surfe-white/80 font-medium">{SITE_CONFIG.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-surfe-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-surfe-white/60 text-sm">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="text-surfe-white/60 hover:text-surfe-white transition-colors text-sm font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-surfe-white/60 hover:text-surfe-white transition-colors text-sm font-medium"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 