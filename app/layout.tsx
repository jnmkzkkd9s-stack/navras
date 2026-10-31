import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost, Tiro_Devanagari_Hindi } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})
const jost = Jost({ subsets: ['latin'], variable: '--font-jost', display: 'swap' })
const devanagari = Tiro_Devanagari_Hindi({
  subsets: ['devanagari'],
  weight: '400',
  variable: '--font-devanagari',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NAVRAS | नवरस — Cultural Committee, MGM Medical College,Indore',
  description:
    '9 Emotions. 1 Stage. Infinite Stories. NAVRAS is the Cultural Committee of MGM Medical College, Indore — dance, music, theatre, fashion and more.',
  generator: 'v0.app',
  manifest: '/manifest.json',
  openGraph: {
    title: 'NAVRAS | नवरस',
    description: '9 Emotions. 1 Stage. Infinite Stories.',
    images: ['/images/hero.png'],
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'dark',
  themeColor: '#120c0b',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} ${devanagari.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
