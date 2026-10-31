'use client'

import { useEffect, useState } from 'react'
import { rasas } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function RasaCycle() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % rasas.length), 2400)
    return () => window.clearInterval(id)
  }, [])

  const rasa = rasas[index]

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex h-14 items-center justify-center" aria-live="off">
        <p key={rasa.name} className="animate-rasa flex items-baseline gap-3">
          <span lang="hi" className="font-deva text-2xl text-gold">
            {rasa.hindi}
          </span>
          <span className="text-xs uppercase tracking-[0.35em] text-foreground/70">
            {rasa.name} · {rasa.meaning}
          </span>
        </p>
      </div>
      <div className="flex items-center gap-2" aria-hidden="true">
        {rasas.map((r, i) => (
          <span
            key={r.name}
            className={cn(
              'h-1 rounded-full transition-all duration-700',
              i === index ? 'w-6 bg-gold shadow-[0_0_10px_var(--gold)]' : 'w-1.5 bg-foreground/25',
            )}
          />
        ))}
      </div>
    </div>
  )
}
