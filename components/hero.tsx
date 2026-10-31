import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { RasaCycle } from '@/components/rasa-cycle'
import { site } from '@/lib/site-config'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="grain relative flex min-h-svh flex-col overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover object-[70%_center] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--ink)_85%)]" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 size-[130vw] max-h-[900px] max-w-[900px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-gold/10"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="absolute top-1/2 left-1/2 -mt-[3px] -ml-[3px] size-1.5 rounded-full bg-gold/60 shadow-[0_0_12px_var(--gold)]"
            style={{ transform: `rotate(${i * 40}deg) translateY(calc(min(65vw, 450px) * -1))` }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-5 pt-24 pb-16 text-center">
        <p
          className="animate-rise text-[11px] font-medium uppercase tracking-[0.4em] text-gold/90 md:text-xs"
          style={{ animationDelay: '0.2s' }}
        >
          The Cultural Committee · {site.college}
        </p>

        <h1 id="hero-title" className="mt-6 flex flex-col items-center">
          <span
            className="animate-rise block drop-shadow-[0_0_28px_oklch(0.79_0.115_80/0.35)]"
            style={{ animationDelay: '0.45s' }}
          >
            <span className="text-gold-gradient animate-shimmer block pl-[0.12em] font-serif text-7xl font-semibold leading-none tracking-[0.12em] sm:text-8xl md:text-[10rem]">
              {site.name}
            </span>
          </span>
          <span
            lang="hi"
            className="animate-rise mt-3 font-deva text-4xl text-crimson drop-shadow-[0_0_24px_var(--crimson)] md:text-6xl"
            style={{ animationDelay: '0.8s' }}
          >
            {site.nameHindi}
          </span>
        </h1>

        <p
          className="animate-rise mt-8 max-w-md font-serif text-2xl italic leading-snug text-balance text-foreground/90 md:text-3xl"
          style={{ animationDelay: '1.1s' }}
        >
          {site.tagline}
        </p>

        <div className="animate-rise mt-8" style={{ animationDelay: '1.4s' }}>
          <RasaCycle />
        </div>

        <div className="animate-rise mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row" style={{ animationDelay: '1.7s' }}>
          <a
            href="#about"
            className="group relative inline-flex min-h-13 items-center justify-center overflow-hidden rounded-full bg-gold px-9 text-sm font-semibold uppercase tracking-[0.3em] text-ink shadow-[0_0_40px_-8px_var(--gold)] transition-transform hover:scale-[1.03]"
          >
            <span className="relative z-10">Explore NAVRAS</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#events"
            className="inline-flex min-h-13 items-center justify-center rounded-full border border-foreground/25 px-9 text-sm uppercase tracking-[0.3em] text-foreground/90 transition-colors hover:border-gold hover:text-gold"
          >
            View Events
          </a>
        </div>
      </div>

      <a
        href="#rasas"
        aria-label="Scroll to the nine rasas"
        className="relative z-10 mx-auto mb-6 flex size-11 items-center justify-center text-gold/70 transition-colors hover:text-gold"
      >
        <ChevronDown className="size-6 animate-bounce" />
      </a>
    </section>
  )
}
