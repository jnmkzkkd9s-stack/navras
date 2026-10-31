import { AboutSection } from '@/components/about-section' {/* ABOUT NAVRAS */}
<section id="about" className="bg-black px-6 py-20 text-white">
  <div className="mx-auto max-w-5xl">
    <p className="mb-3 text-sm uppercase tracking-[0.4em] text-amber-400">
      Discover Our Story
    </p>

    <h2 className="mb-6 text-4xl font-serif text-amber-300 md:text-6xl">
      About NAVRAS
    </h2>

    <p className="max-w-3xl text-lg leading-8 text-gray-300">
      {site.aboutUs}
    </p>
  </div>
</section>

{/* OUR MISSION */}
<section id="mission" className="bg-neutral-950 px-6 py-20 text-white">
  <div className="mx-auto max-w-5xl">
    <p className="mb-3 text-sm uppercase tracking-[0.4em] text-amber-400">
      Our Purpose
    </p>

    <h2 className="mb-6 text-4xl font-serif text-amber-300 md:text-6xl">
      Our Mission
    </h2>

    <p className="max-w-3xl text-lg leading-8 text-gray-300">
      {site.mission}
    </p>
  </div>
</section>
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
