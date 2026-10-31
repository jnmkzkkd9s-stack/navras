import Image from 'next/image'
import { UserRound } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { heads, members, type TeamMember } from '@/lib/site-config'
import { cn } from '@/lib/utils'

function CornerOrnaments() {
  const base = 'pointer-events-none absolute size-3 border-gold/70 transition-all duration-500 group-hover:size-4'
  return (
    <>
      <span aria-hidden="true" className={cn(base, 'top-1.5 left-1.5 border-t border-l')} />
      <span aria-hidden="true" className={cn(base, 'top-1.5 right-1.5 border-t border-r')} />
      <span aria-hidden="true" className={cn(base, 'bottom-1.5 left-1.5 border-b border-l')} />
   
    </>
  )
}

function MemberCard({ member, compact }: { member: TeamMember; compact?: boolean }) {
  return (
    <article className="lux-card group flex h-full flex-col rounded-lg border border-gold/25 bg-ink p-2">
      <div
        className={cn(
          'relative overflow-hidden rounded-md bg-gradient-to-b from-crimson-deep/50 via-ink to-ink',
          compact ? 'aspect-square' : 'aspect-[4/5]',
        )}
      >
        {member.photo ? (
          <Image
            src={member.photo || '/placeholder.svg'}
            alt={`Portrait of ${member.name}, ${member.role}`}
            fill
            sizes={compact ? '(min-width: 1024px) 220px, 45vw' : '(min-width: 1024px) 240px, 45vw'}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center" aria-hidden="true">
            <span className="flex size-16 items-center justify-center rounded-full border border-gold/25 md:size-20">
              <UserRound className="size-8 text-gold/40 md:size-10" strokeWidth={1} />
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-gold/15" />
        <CornerOrnaments />
      </div>

      <div className="flex flex-1 flex-col items-center px-1 pt-4 pb-3 text-center">
        <h4
          className={cn(
            'font-serif font-medium leading-tight text-balance text-foreground',
            compact ? 'text-lg' : 'text-xl md:text-2xl',
          )}
        >
          {member.name}
        </h4>
        <span className="my-2 h-px w-8 bg-gold/50 transition-all duration-500 group-hover:w-14" aria-hidden="true" />
        <p
          className={cn(
            'font-medium uppercase text-gold',
            compact ? 'text-[10px] tracking-[0.22em]' : 'text-[11px] tracking-[0.28em]',
          )}
        >
          {member.role}
        </p>
      </div>
    </article>
  )
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="flex items-center justify-center gap-4 text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
      <span className="h-px w-10 bg-gold/40" aria-hidden="true" />
      <span className="pl-[0.4em]">{children}</span>
      <span className="h-px w-10 bg-gold/40" aria-hidden="true" />
    </h3>
  )
}

export function TeamSection() {
  return (
    <section id="team" aria-labelledby="team-title" className="relative bg-card/40 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="team-title"
          eyebrow="The Ensemble"
          title="Our Team"
          hindi="हमारी टीम"
          description="The people who turn ideas into nights to remember."
        />

        <div className="mt-16">
          <GroupLabel>Committee Heads</GroupLabel>
          <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {heads.map((m, i) => (
              <Reveal as="li" key={`${m.role}-${i}`} delay={i * 80}>
                <MemberCard member={m} />
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <GroupLabel>Core Members</GroupLabel>
          <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
            {members.map((m, i) => (
              <Reveal as="li" key={`${m.role}-${i}`} delay={(i % 4) * 70}>
                <MemberCard member={m} compact />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
