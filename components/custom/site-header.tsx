'use client'

import ThemeToggle from './theme-toggle'
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '@/components/ui/sheet'
import { motion } from 'framer-motion'

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const SiteHeader = () => {
  const sections = [
    { id: 'about-me', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a
          href="#top"
          className="font-bold text-lg sm:text-2xl tracking-tight"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('top')
          }}
        >
          Brian Bastías Vilches
        </a>
        <nav className="hidden sm:flex items-center gap-6">
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-base font-medium px-2 relative transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
                after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300
                hover:after:w-full hover:text-primary`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="sm:hidden flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Open menu"
            >
              <svg
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 flex flex-col">
            <SheetTitle className="sr-only">Menú principal</SheetTitle>
            <nav className="flex flex-col gap-4 mt-12 px-6">
              {sections.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-2xl font-semibold"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08, duration: 0.4, type: 'spring' }}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault()
                    ;(
                      document.querySelector('[data-slot="sheet-close"]') as HTMLElement | null
                    )?.click()
                    setTimeout(() => scrollToSection(item.id), 200)
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto flex justify-center pt-8 pb-6">
              <ThemeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default SiteHeader
