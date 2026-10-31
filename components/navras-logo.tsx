import Image from 'next/image'
import { site } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function NavrasMark({ className }: { className?: string }) {
  if (site.logoImage) {
    return (
      <Image
        src={site.logoImage || '/placeholder.svg'}
        alt={`${site.name} logo`}
        width={40}
        height={40}
        className={cn('size-10 object-contain', className)}
      />
    )
  }
  return (
    <span
      aria-hidden="true"
      className={cn(
        'relative flex size-10 items-center justify-center rounded-full border border-gold/50 bg-crimson-deep/40',
        className,
      )}
    >
      <span className="absolute inset-1 rounded-full border border-gold/25" />
      <span lang="hi" className="font-deva text-lg leading-none text-gold">
        न
      </span>
    </span>
  )
}

export function NavrasWordmark({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <NavrasMark />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl font-semibold tracking-[0.25em] text-foreground">{site.name}</span>
        <span lang="hi" className="mt-1 font-deva text-xs text-gold">
          {site.nameHindi}
        </span>
      </span>
    </span>
  )
}
