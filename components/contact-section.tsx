import type { ComponentType, ReactNode } from 'react'
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { Instagram } from '@/components/instagram-icon'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { links, phoneContacts } from '@/lib/site-config'

type IconType = ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>

const cardBase = 'flex h-full items-start gap-4 rounded-xl border p-5'

function CardIcon({ icon: Icon }: { icon: IconType }) {
  return (
    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-crimson-deep/60 text-gold">
      <Icon className="size-5" aria-hidden="true" />
    </span>
  )
}

function CardLabel({ children }: { children: ReactNode }) {
  return <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{children}</span>
}

function ExternalCard({
  href,
  icon,
  label,
  value,
  srHint,
}: {
  href: string
  icon: IconType
  label: string
  value: string
  srHint: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${cardBase} border-gold/20 lux-card`}
    >
      <CardIcon icon={icon} />
      <span className="flex min-w-0 flex-1 flex-col gap-1 pt-0.5">
        <CardLabel>{label}</CardLabel>
        <span className="break-words text-base leading-relaxed text-foreground transition-colors group-hover:text-gold">
          {value}
        </span>
        <span className="sr-only">{srHint}</span>
      </span>
      <ExternalLink
        className="mt-1 size-4 shrink-0 text-gold/50 transition-colors group-hover:text-gold"
        aria-hidden="true"
      />
    </a>
  )
}

function PhoneCard() {
  return (
    <div className={`${cardBase} border-gold/20 lux-card`}>
      <CardIcon icon={Phone} />
      <div className="flex min-w-0 flex-1 flex-col gap-1 pt-0.5">
        <CardLabel>Phone &middot; Committee Heads</CardLabel>
        <ul className="mt-1 flex flex-col divide-y divide-gold/10">
          {phoneContacts.map((contact) => (
            <li key={contact.phone}>
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="group flex min-h-11 flex-col justify-center py-2.5"
                aria-label={`Call ${contact.name} at ${contact.phone}`}
              >
                <span className="font-serif text-sm uppercase tracking-[0.18em] text-gold/90">{contact.name}</span>
                <span className="whitespace-nowrap text-base tabular-nums text-foreground transition-colors group-hover:text-gold">
                  {contact.phone}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function EmailCard() {
  return (
    <div className={`${cardBase} border-border`}>
      <CardIcon icon={Mail} />
      <div className="flex min-w-0 flex-1 flex-col gap-1 pt-0.5">
        <CardLabel>Email</CardLabel>
        {links.email ? (
          <a href={`mailto:${links.email}`} className="break-all text-base text-foreground hover:text-gold">
            {links.email}
          </a>
        ) : (
          <span className="text-base italic leading-relaxed text-muted-foreground">
            Official email address to be added.
          </span>
        )}
      </div>
    </div>
  )
}

export function ContactSection() {
  const cards = [
    {
      key: 'instagram',
      node: (
        <ExternalCard
          href={links.instagramUrl}
          icon={Instagram}
          label="Instagram"
          value={links.instagramHandle}
          srHint="(opens Instagram in a new tab)"
        />
      ),
    },
    { key: 'email', node: <EmailCard /> },
    { key: 'phone', node: <PhoneCard /> },
    {
      key: 'address',
      node: (
        <ExternalCard
          href={links.mapsUrl}
          icon={MapPin}
          label="Address"
          value={links.address}
          srHint="(opens Google Maps in a new tab)"
        />
      ),
    },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading id="contact-title" eyebrow="Say Namaste" title="Contact" hindi="संपर्क" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal as="li" key={card.key} delay={i * 80}>
              {card.node}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
