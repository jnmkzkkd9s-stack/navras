import Image from 'next/image'
import { UserRound } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { heads, members, type TeamMember } from '@/lib/site-config'
import { cn } from '@/lib/utils'

function Portrait({ member, large }: { member: TeamMember; large?: boolean }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden border border-gold/25 bg-gradient-to-b from-crimson-deep/60 to-ink',
        large ? 'aspect-[3/4] rounded-xl' : 'aspect-square rounded-full',
      )}
    >
      {member.photo ? (
        <Image
          src={member.photo || '/placeholder.svg'}
          alt={`Portrait of ${member.name}`}
          fill
          sizes={large ? '(min-width: 1024px) 25vw, 50vw' : '160px'}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full items-center justify-center" aria-hidden="true">
          <UserRound className={cn('text-gold/40', large ? 'size-16' : 'size-10')} strokeWidth={1} />
        </div>
      )}
      {large && <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />}
    </div>
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

        <h3 className="mt-14 text-center text-xs uppercase tracking-[0.35em] text-gold">Committee Heads</h3>
        <ul className="mt-6 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {heads.map((m, i) => (
            <Reveal as="li" key={`${m.role}-${i}`} delay={i * 80} className="group relative">
              <Portrait member={m} large />
              <div className="absolute right-3 bottom-3 left-3">
                <p className="font-serif text-lg leading-tight text-foreground md:text-xl">{m.name}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gold md:text-xs">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <h3 className="mt-16 text-center text-xs uppercase tracking-[0.35em] text-gold">Core Members</h3>
        <ul className="mt-8 grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
          {members.map((m, i) => (
            <Reveal as="li" key={`${m.role}-${i}`} delay={i * 40} className="group flex flex-col items-center gap-3 text-center">
              <div className="w-full max-w-24">
                <Portrait member={m} />
              </div>
              <div>
                <p className="text-sm text-foreground">{m.name}</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
