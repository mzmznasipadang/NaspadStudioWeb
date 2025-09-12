import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Naspad Studio - Coming Soon',
  description: 'We are currently building our dream! Stay tuned for amazing digital solutions.',
  keywords: ['coming soon', 'naspad studio', 'digital solutions', 'creative agency', 'web development', 'design studio'],
  authors: [{ name: 'Naspad Studio' }],
  
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: 'Naspad Studio - Coming Soon',
    description: 'We are currently building our dream! Stay tuned for amazing digital solutions.',
    url: 'https://naspadstudio.id',
    siteName: 'Naspad Studio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Naspad Studio - Coming Soon - Digital Solutions & Creative Agency',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Naspad Studio - Coming Soon',
    description: 'We are currently building our dream! Stay tuned for amazing digital solutions.',
    images: ['/og-image.png'],
    creator: '@naspadstudio', // Update with your actual Twitter handle
    site: '@naspadstudio', // Update with your actual Twitter handle
  },
  
  // Favicon and icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/android-chrome-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  
  // Additional meta tags
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
  
  // Viewport is handled by Next.js automatically, but you can customize if needed
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  
  // Additional SEO
  alternates: {
    canonical: 'https://naspadstudio.id',
  },
  
  // App-specific
  applicationName: 'Naspad Studio',
  category: 'business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Theme colors for different platforms */}
        <meta name="theme-color" content="#272660" />
        <meta name="msapplication-TileColor" content="#272660" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Additional PWA meta tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Naspad Studio" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}