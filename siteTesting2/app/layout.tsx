import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { SITE_CONFIG } from '@/data/constants'

const displayFont = localFont({
  src: [
    { path: '../public/fonts/ClashDisplay-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/ClashDisplay-Semibold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
})

const sansFont = localFont({
  src: [
    { path: '../public/fonts/GeneralSans-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/GeneralSans-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/GeneralSans-Semibold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-sans',
  display: 'swap',
})

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#161210',
}

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} - Unlock Your Data's Full Potential`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'data consulting',
    'business intelligence',
    'data analytics',
    'AI automation',
    'database consulting',
    'data visualization',
    'machine learning',
    'data science',
    'business optimization',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} - Unlock Your Data's Full Potential`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} - Unlock Your Data's Full Potential`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: SITE_CONFIG.name,
              description: SITE_CONFIG.description,
              url: SITE_CONFIG.url,
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: SITE_CONFIG.phone,
                contactType: 'customer service',
                email: SITE_CONFIG.email,
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Gurugram',
                addressRegion: 'Haryana',
                postalCode: '122003',
                addressCountry: 'IN',
                streetAddress: '363 Sector 57',
              },
              sameAs: [SITE_CONFIG.social.linkedin].filter(Boolean),
            }),
          }}
        />
      </head>
      <body className={`${sansFont.variable} ${displayFont.variable} ${monoFont.variable}`}>
        {children}
      </body>
    </html>
  )
}
