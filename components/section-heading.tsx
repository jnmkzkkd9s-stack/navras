import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

function Diamond() {
  return <span className="size-1.5 rotate-45 border border-gold/70" aria-hidden="true" />
}

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
  const centered = align === 'center'
  return (
    <Reveal
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        centered ? 'mx-auto items-center text-center' : 'items-start text-left',
      )}
    >
      <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/70" aria-hidden="true" />
        <Diamond />
        <span className="pl-[0.4em]">{eyebrow}</span>
        <Diamond />
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/70" aria-hidden="true" />
      </div>
      <h2
        id={id}
        className="font-serif text-4xl font-medium leading-[1.05] tracking-[0.01em] text-balance text-foreground md:text-6xl"
      >
        {title}
      </h2>
      {hindi && (
        <p lang="hi" className="font-deva text-xl tracking-wide text-crimson md:text-2xl">
          {hindi}
        </p>
      )}
      {description && (
        <p className="max-w-xl text-pretty font-serif text-lg italic leading-relaxed text-muted-foreground md:text-xl">
          {description}
        </p>
      )}
    </Reveal>
  )
}
