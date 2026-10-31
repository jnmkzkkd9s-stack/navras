import Image from 'next/image'
import { CalendarDays, MapPin } from 'lucide-react'
import { FormLink } from '@/components/form-link'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { events } from '@/lib/site-config'

export function EventsSection() {
  return (
    <section id="events" aria-labelledby="events-title" className="relative bg-card/40 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="events-title"
          eyebrow="On Stage"
          title="Events"
          hindi="कार्यक्रम"
          description="Every art form, every emotion. Event details and dates will be announced soon — follow us on Instagram for updates."
        />

        <ul className="-mx-5 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-3">
          {events.map((event, i) => (
            <Reveal
              as="li"
              key={event.title}
              delay={i * 80}
              className={
                'w-[82vw] max-w-sm shrink-0 snap-center md:w-auto md:max-w-none' +
                (i === 0 ? ' lg:col-span-2 lg:row-span-1' : '')
              }
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gold/20 bg-ink lux-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={event.image || '/placeholder.svg'}
                    alt={`${event.title} event (placeholder image)`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 82vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full border border-gold/40 bg-ink/60 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold backdrop-blur">
                    {event.rasa}
                  </span>
                  <div className="absolute right-5 bottom-4 left-5">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/70">{event.category}</p>
                    <h3 className="font-serif text-3xl font-medium tracking-[0.01em] text-foreground md:text-4xl">{event.title}</h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">{event.description}</p>
                  <ul className="flex flex-col gap-2 text-sm text-foreground/80">
                    <li className="flex items-center gap-2">
                      <CalendarDays className="size-4 text-gold" aria-hidden="true" />
                      <span className="sr-only">Date:</span>
                      {event.date}
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="size-4 text-gold" aria-hidden="true" />
                      <span className="sr-only">Venue:</span>
                      {event.venue}
                    </li>
                  </ul>
                  <FormLink href={event.formUrl} label="Register" className="mt-auto w-full" />
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
        <p className="mt-2 text-center text-xs text-muted-foreground md:hidden">Swipe to see all events</p>
      </div>
    </section>
  )
}
