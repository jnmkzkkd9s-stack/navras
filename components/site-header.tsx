'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavrasWordmark } from '@/components/navras-logo'
import { navItems, site } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || open ? 'border-b border-border bg-ink/85 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-18 md:px-8">
        <a href="#top" aria-label={`${site.name} home`} className="flex min-h-11 items-center" onClick={() => setOpen(false)}>
          <NavrasWordmark />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm uppercase tracking-[0.2em] text-foreground/75 transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#register"
          className="hidden rounded-full border border-gold/60 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.25em] text-gold lux-btn hover:bg-gold hover:text-ink lg:inline-flex"
        >
          Auditions
        </a>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-full border border-gold/40 text-gold lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-x-0 top-16 bottom-0 bg-ink/98 backdrop-blur-lg transition-all duration-500 lg:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col justify-between px-6 pt-8 pb-10">
          <ul className="flex flex-col">
            {navItems.map((item, i) => (
              <li
                key={item.href}
                className={cn('border-b border-border transition-all duration-500', open ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0')}
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-16 items-center justify-between font-serif text-3xl text-foreground"
                >
                  {item.label}
                  <span className="font-sans text-xs tracking-[0.3em] text-gold">{String(i + 1).padStart(2, '0')}</span>
                </a>
              </li>
            ))}
          </ul>
          <p lang="hi" className="text-center font-deva text-4xl text-gold/30">
            {site.nameHindi}
          </p>
        </nav>
      </div>
    </header>
  )
}
