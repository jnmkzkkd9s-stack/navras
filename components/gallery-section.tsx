'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { gallery, galleryCategories, type GalleryCategory } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function GallerySection() {
  const [filter, setFilter] = useState<GalleryCategory>('All')
  const [active, setActive] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const items = filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)

  const open = (i: number) => {
    setActive(i)
    dialogRef.current?.showModal()
  }
  const close = () => dialogRef.current?.close()
  const step = useCallback(
    (dir: number) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!dialogRef.current?.open) return
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [step])

  const current = active !== null ? items[active] : null

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="gallery-title"
          eyebrow="Memories"
          title="Gallery"
          hindi="स्मृतियाँ"
          description="Festivals, performances, candid moments and everything that happens behind the curtain."
        />

        <div
          role="tablist"
          aria-label="Filter gallery"
          className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:justify-center md:px-0"
        >
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'min-h-11 shrink-0 rounded-full border px-5 text-xs uppercase tracking-[0.2em] transition-colors',
                filter === cat
                  ? 'border-gold bg-gold text-ink'
                  : 'border-border text-foreground/75 hover:border-gold/60 hover:text-gold',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="mt-8 columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
          {items.map((item, i) => (
            <li key={`${item.src}-${i}`} className="mb-3 break-inside-avoid md:mb-4">
              <button
                type="button"
                onClick={() => open(i)}
                className="group relative block w-full overflow-hidden rounded-lg border border-border"
                aria-label={`Open image: ${item.alt}`}
              >
                <Image
                  src={item.src || '/placeholder.svg'}
                  alt={item.alt}
                  width={800}
                  height={i % 3 === 0 ? 1000 : 700}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className={cn(
                    'w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110',
                    i % 3 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]',
                  )}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-2 left-3 text-[10px] uppercase tracking-[0.25em] text-gold md:text-xs">
                  {item.category}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialogRef.current && close()}
        aria-label="Image viewer"
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-ink/95 backdrop:backdrop-blur-sm"
      >
        {current && (
          <div className="flex h-full flex-col items-center justify-center gap-4 p-4" onClick={(e) => e.target === e.currentTarget && close()}>
            <div className="relative h-[70dvh] w-full max-w-5xl">
              <Image src={current.src || '/placeholder.svg'} alt={current.alt} fill sizes="100vw" className="object-contain" />
            </div>
            <p className="text-center text-sm text-foreground/80">{current.alt}</p>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => step(-1)} aria-label="Previous image" className="flex size-12 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-ink">
                <ChevronLeft className="size-5" />
              </button>
              <span className="min-w-14 text-center text-xs tracking-[0.2em] text-muted-foreground">
                {(active ?? 0) + 1} / {items.length}
              </span>
              <button type="button" onClick={() => step(1)} aria-label="Next image" className="flex size-12 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-ink">
                <ChevronRight className="size-5" />
              </button>
            </div>
            <button type="button" onClick={close} aria-label="Close image viewer" className="absolute top-4 right-4 flex size-12 items-center justify-center rounded-full border border-foreground/20 bg-ink/70 text-foreground hover:text-gold">
              <X className="size-5" />
            </button>
          </div>
        )}
      </dialog>
    </section>
  )
}
