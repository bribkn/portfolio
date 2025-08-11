import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/custom/theme-provider'
import SiteHeader from '@/components/custom/site-header'
import Background from '@/components/custom/background'
import ContactSidebar from '@/components/custom/contact-sidebar'
import { Quicksand } from 'next/font/google'

const roboto = Quicksand({ subsets: ['latin'], weight: ['400'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Brian Bastías - Portfolio',
  description: 'Full Stack Developer • Next.js • React • UI',
  metadataBase: new URL('https://brianbastias.cl'),
  openGraph: {
    title: 'Brian Bastías - Portfolio',
    description: 'Full Stack Developer • Next.js • React • UI',
    url: 'https://brianbastias.cl',
    siteName: 'Portfolio',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Brian Bastías - Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brian Bastías - Portfolio',
    description: 'Full Stack Developer • Next.js • React • UI',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Brian Bastías - Portfolio',
      },
    ],
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
          <Background />
          <ContactSidebar />
          <div className="relative z-10">
            <SiteHeader />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
