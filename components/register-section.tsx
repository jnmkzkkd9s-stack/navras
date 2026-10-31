import { Mic2, Ticket } from 'lucide-react'
import { FormLink } from '@/components/form-link'
import { Reveal } from '@/components/reveal'
import { links } from '@/lib/site-config'

const cards = [
  {
    icon: Mic2,
    title: 'Auditions',
    hindi: 'ऑडिशन',
    text: 'Want to perform with NAVRAS? Dancers, singers, actors, models, artists and backstage crew — your stage is waiting.',
    href: links.auditionForm,
    label: 'Apply for Auditions',
  },
  {
    icon: Ticket,
    title: 'Event Registration',
    hindi: 'पंजीकरण',
    text: 'Register yourself or your team for upcoming NAVRAS events. Each event card above also has its own registration link.',
    href: links.generalEventForm,
    label: 'Register for Events',
  },
]

export function RegisterSection() {
  return (
    <section id="register" aria-labelledby="register-title" className="grain relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--crimson-deep),transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Take the Stage</p>
          <h2 id="register-title" className="font-serif text-4xl font-semibold text-balance md:text-6xl">
            Your story is the <span className="text-gold-gradient animate-shimmer inline-block pr-1 italic">tenth rasa</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <div className="flex h-full flex-col gap-5 rounded-xl border border-gold/25 bg-ink/70 p-6 backdrop-blur lux-card md:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <c.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span lang="hi" className="font-deva text-2xl text-crimson">
                    {c.hindi}
                  </span>
                </div>
                <h3 className="font-serif text-3xl">{c.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{c.text}</p>
                <FormLink href={c.href} label={c.label} className="mt-auto w-full sm:w-auto sm:self-start" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
