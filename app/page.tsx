import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { EventsSection } from '@/components/events-section'
import { GallerySection } from '@/components/gallery-section'
import { Hero } from '@/components/hero'
import { RasasSection } from '@/components/rasas-section'
import { RegisterSection } from '@/components/register-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TeamSection } from '@/components/team-section'

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <RasasSection />
        <AboutSection />
        <EventsSection />
        <GallerySection />
        <TeamSection />
        <RegisterSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
