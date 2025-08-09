import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/custom/theme-provider'
import SiteHeader from '@/components/custom/site-header'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Brian Bastías - Portfolio',
  description: 'Full Stack Developer. Next.js • React • UI',
  metadataBase: new URL('https://brianbastias.cl'),
  openGraph: {
    title: 'Brian Bastías - Portfolio',
    description: 'Full Stack Developer. Next.js • React • UI',
    url: 'https://brianbastias.cl',
    siteName: 'Portfolio',
    images: [{ url: '/profile-brian.jpg', width: 630, height: 630 }],
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', rel: 'shortcut icon' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Brian DEV',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={roboto.className}>
      <body>
        <ThemeProvider>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
