import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { about, site } from '@/lib/site-config'

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading
            id="about-title"
            align="left"
            eyebrow="About Us"
            title="Where healers become performers"
            hindi="हमारी कहानी"
          />
          <Reveal className="flex flex-col gap-6" delay={100}>
            <p className="text-lg leading-relaxed text-foreground/90">
              <span className="font-serif text-2xl text-gold">{site.name}</span> is the official Cultural Committee of{' '}
              {site.college}.
            </p>
            <div className="flex flex-col gap-2 border-l-2 border-crimson pl-5">
              <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Our Story</h3>
              <p className="leading-relaxed text-muted-foreground">{about.story}</p>
            </div>
            <div className="flex flex-col gap-2 border-l-2 border-gold/60 pl-5">
              <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Our Mission</h3>
              <p className="leading-relaxed text-muted-foreground">{about.mission}</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <dl className="grid grid-cols-3 gap-4 border-t border-border pt-6">
              {about.stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <dt className="order-2 text-[11px] uppercase leading-snug tracking-[0.2em] text-muted-foreground">{s.label}</dt>
                  <dd className="order-1 font-serif text-4xl text-gold md:text-5xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-gold/20">
            <Image
              src={about.photos[0].src || '/placeholder.svg'}
              alt={about.photos[0].alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.3em] text-foreground/70">
              Group photograph
            </p>
          </div>
          <div className="absolute -bottom-8 -left-3 hidden aspect-square w-40 overflow-hidden rounded-lg border-4 border-ink shadow-2xl sm:block md:w-52">
            <Image src={about.photos[1].src || '/placeholder.svg'} alt={about.photos[1].alt} fill sizes="208px" className="object-cover" />
          </div>
          <div aria-hidden="true" className="absolute -top-4 -right-4 -z-10 size-full rounded-xl border border-crimson/50" />
        </Reveal>
      </div>
    </section>
  )
}
