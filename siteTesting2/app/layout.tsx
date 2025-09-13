import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { SITE_CONFIG } from '@/data/constants'

const inter = Inter({ subsets: ['latin'] })

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
    images: [
      {
        url: `${SITE_CONFIG.url}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'ACube Insights - Data Consulting & Analytics',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} - Unlock Your Data's Full Potential`,
    description: SITE_CONFIG.description,
    creator: '@youragency',
    images: [`${SITE_CONFIG.url}/images/og-image.png`],
  },
  other: {
    'og:image': `${SITE_CONFIG.url}/images/og-image.png`,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/png',
    'og:site_name': SITE_CONFIG.name,
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
  verification: {
    google: 'your-google-verification-code',
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
        {/* Preload critical resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Additional meta tags for performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0ea5e9" />
        
        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: SITE_CONFIG.name,
              description: SITE_CONFIG.description,
              url: SITE_CONFIG.url,
              logo: `${SITE_CONFIG.url}/logo.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: SITE_CONFIG.phone,
                contactType: 'customer service',
                email: SITE_CONFIG.email,
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'City',
                addressRegion: 'State',
                postalCode: '12345',
                streetAddress: SITE_CONFIG.address,
              },
              sameAs: [
                SITE_CONFIG.social.linkedin,
                SITE_CONFIG.social.twitter,
                SITE_CONFIG.social.facebook,
              ].filter(Boolean),
            }),
          }}
        />
      </head>
      <body className={`${inter.className} dark`}>
        {children}
      </body>
    </html>
  )
}