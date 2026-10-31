import { Mail, MapPin, Phone } from 'lucide-react'
import { Instagram } from '@/components/instagram-icon'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { links } from '@/lib/site-config'

export function ContactSection() {
  const items = [
    {
      icon: Instagram,
      label: 'Instagram',
      value: links.instagramHandle,
      href: links.instagramUrl,
      external: true,
    },
    {
      icon: Mail,
      label: 'Email',
      value: links.email || 'Email to be added',
      href: links.email ? `mailto:${links.email}` : '',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: links.phone || 'Phone number to be added',
      href: links.phone ? `tel:${links.phone.replace(/\s/g, '')}` : '',
    },
    { icon: MapPin, label: 'Address', value: links.address, href: '' },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading id="contact-title" eyebrow="Say Namaste" title="Contact" hindi="संपर्क" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => {
            const content = (
              <>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-crimson-deep/60 text-gold">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{item.label}</span>
                  <span className="truncate text-base text-foreground">{item.value}</span>
                </span>
              </>
            )
            return (
              <Reveal as="li" key={item.label} delay={i * 80}>
                {item.href ? (
                  <a
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex min-h-20 items-center gap-4 rounded-xl border border-gold/20 p-4 lux-card"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex min-h-20 items-center gap-4 rounded-xl border border-border p-4">{content}</div>
                )}
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
