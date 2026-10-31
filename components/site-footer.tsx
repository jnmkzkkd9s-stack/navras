import { Instagram } from '@/components/instagram-icon'
import { NavrasWordmark } from '@/components/navras-logo'
import { links, navItems, site } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-ink px-5 pt-16 pb-8 md:px-8">
      <p
        lang="hi"
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 font-deva text-[9rem] leading-none whitespace-nowrap text-crimson/10 md:text-[16rem]"
      >
        {site.nameHindi}
      </p>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-sm flex-col gap-4">
            <NavrasWordmark />
            <p className="font-serif text-xl italic text-foreground/85">{site.tagline}</p>
            <p className="text-sm text-muted-foreground">The Cultural Committee of {site.college}.</p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="flex min-h-11 items-center text-sm uppercase tracking-[0.2em] text-foreground/70 hover:text-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col-reverse items-start gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.college}
          </p>
          {links.instagramUrl ? (
            <a
              href={links.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-2 text-gold hover:text-gold-soft"
            >
              <Instagram className="size-4" aria-hidden="true" />
              {links.instagramHandle}
            </a>
          ) : (
            <span className="flex min-h-11 items-center gap-2">
              <Instagram className="size-4" aria-hidden="true" />
              {links.instagramHandle}
            </span>
          )}
        </div>
      </div>
    </footer>
  )
}
