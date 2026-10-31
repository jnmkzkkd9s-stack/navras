import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { rasas } from '@/lib/site-config'

export function RasasSection() {
  return (
    <section id="rasas" aria-labelledby="rasas-title" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-crimson/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          id="rasas-title"
          eyebrow="Natyashastra"
          title="The Nine Emotions"
          hindi="नव रस"
          description="Bharata's Natyashastra names nine rasas — the emotional essences every performance seeks to awaken. They are the soul of our name and of every stage we build."
        />

        <ol className="mt-14 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border md:mt-20">
          {rasas.map((rasa, i) => (
            <Reveal
              as="li"
              key={rasa.name}
              delay={i * 70}
              className="group relative flex aspect-square flex-col items-center justify-center gap-2 bg-ink p-2 text-center transition-colors duration-500 hover:bg-crimson-deep/50 md:aspect-[4/3]"
            >
              <span className="absolute top-2 left-2.5 text-[10px] tracking-widest text-gold/50 md:top-4 md:left-4 md:text-xs">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                lang="hi"
                className="font-deva text-2xl text-gold transition-all duration-500 group-hover:glow-gold sm:text-3xl md:text-5xl"
              >
                {rasa.hindi}
              </span>
              <span className="font-serif text-sm text-foreground sm:text-base md:text-xl">{rasa.name}</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:text-xs">
                {rasa.meaning}
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
