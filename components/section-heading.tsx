import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  hindi,
  title,
  description,
  align = 'center',
  id,
}: {
  eyebrow: string
  hindi?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  id?: string
}) {
  return (
    <Reveal
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
      )}
    >
      <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
        <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
        {eyebrow}
        <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
      </div>
      <h2 id={id} className="font-serif text-4xl font-semibold leading-tight text-balance text-foreground md:text-6xl">
        {title}
      </h2>
      {hindi && (
        <p lang="hi" className="font-deva text-lg text-crimson">
          {hindi}
        </p>
      )}
      {description && <p className="text-pretty leading-relaxed text-muted-foreground">{description}</p>}
    </Reveal>
  )
}
