import { ArrowUpRight, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FormLink({
  href,
  label,
  variant = 'solid',
  className,
}: {
  href: string
  label: string
  variant?: 'solid' | 'outline'
  className?: string
}) {
  const base =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-xs font-semibold uppercase tracking-[0.25em] transition-all'

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={cn(base, 'cursor-not-allowed border border-dashed border-foreground/25 text-foreground/55', className)}
      >
        <Clock className="size-4" aria-hidden="true" />
        Opening soon
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        base,
        variant === 'solid'
          ? 'bg-gold text-ink hover:shadow-[0_0_30px_-6px_var(--gold)]'
          : 'border border-gold/60 text-gold hover:bg-gold hover:text-ink',
        className,
      )}
    >
      {label}
      <ArrowUpRight className="size-4" aria-hidden="true" />
      <span className="sr-only">(opens Google Form in a new tab)</span>
    </a>
  )
}
