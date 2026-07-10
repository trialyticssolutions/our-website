import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/data/constants'

const ROUTES = ['', '/services', '/portfolio', '/testimonials', '/about', '/contact', '/privacy', '/terms']

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
