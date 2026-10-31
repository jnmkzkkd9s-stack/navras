/**
 * NAVRAS site content.
 * Edit this file to update text, links, and images across the whole site.
 * Images live in /public/images — replace a file with one of the same name,
 * or change the path here.
 * Leave a URL as an empty string ("") until the real link is available;
 * the site will show a "coming soon" state instead of a broken link.
 */

export const site = {
  name: 'NAVRAS',
  nameHindi: 'नवरस',
  tagline: '9 Emotions. 1 Stage. Infinite Stories.',
  college: 'MGM Medical College, Indore',
  description:
    'NAVRAS is the Cultural Committee of MGM Medical College, Indore — celebrating dance, music, theatre, fashion and the arts.',
  /** Optional logo image, e.g. '/images/navras-logo.png'. Leave empty to use the typographic mark. */
  logoImage: '',
}

export const links = {
  auditionForm: '',
  generalEventForm: '',
  instagramUrl: 'https://www.instagram.com/navras.2026/',
  instagramHandle: '@navras.2026',
  email: '',
  address: 'MGM Medical College, Indore, Madhya Pradesh, India',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=MGM+Medical+College+Indore+Madhya+Pradesh+India',
}

export const phoneContacts = [
  { name: 'Rohit Siloriya', phone: '+91 77738 63440' },
  { name: 'Aparna Shrivastava', phone: '+91 97529 82031' },
  { name: 'Shashwat Vijayvergia', phone: '+91 99507 27599' },
]

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Team', href: '#team' },
  { label: 'Register', href: '#register' },
  { label: 'Contact', href: '#contact' },
]

export const rasas = [
  { name: 'Shringara', hindi: 'शृंगार', meaning: 'Love' },
  { name: 'Hasya', hindi: 'हास्य', meaning: 'Laughter' },
  { name: 'Karuna', hindi: 'करुण', meaning: 'Compassion' },
  { name: 'Raudra', hindi: 'रौद्र', meaning: 'Fury' },
  { name: 'Veera', hindi: 'वीर', meaning: 'Courage' },
  { name: 'Bhayanaka', hindi: 'भयानक', meaning: 'Fear' },
  { name: 'Bibhatsa', hindi: 'बीभत्स', meaning: 'Disgust' },
  { name: 'Adbhuta', hindi: 'अद्भुत', meaning: 'Wonder' },
  { name: 'Shanta', hindi: 'शांत', meaning: 'Peace' },
]

export const about = {
  // Paragraphs are separated by a blank line (\n\n).
  // Split on '\n\n' in the component if you want separate <p> tags.
  story: `Navras is the pulsating heart of MGM Medical College’s festival, Nirvana 2026—a cultural committee bound together by pure passion, rhythm, and artistic fire.

At the helm stand three committee heads from the 2022 batch: Aparna Shrivastava, Rohit Siloriya, and Shashwat Vijayvergia. As the visionaries and anchors of NAVRAS, they steer the entire cultural enterprise with steady leadership, balancing the intense demands of medical school with the creative spark needed to build a grand stage. Together with the other members of the 2022 batch, they form the foundation of the NAVRAS leadership team.

Behind them stands a dynamic workforce spanning the 2023, 2024, and 2025 batches. Every committee member plays an indispensable role behind the scenes—managing complex schedules, refining technical details, coordinating rehearsals, and ensuring that every light, track, and cue lands flawlessly.`,
  mission: `Yet, the true magic of NAVRAS comes alive when the curtains rise. Every performer—from dancers and musicians to actors and hosts—takes the stage to channel raw emotion, bringing the nine essence-defining rasas to life.

Together, the leaders, the crew, and the performers become a unified force, transforming Nirvana 2026 from a college fest into an unforgettable legacy of art, passion, and togetherness.`,
  stats: [
    { value: '9', label: 'Rasas we celebrate' },
    { value: '10', label: 'Events' },
    { value: '40', label: 'Members' },
  ],
  photos: [
    { src: '/images/about-group.png', alt: 'NAVRAS committee group photograph (placeholder)' },
    { src: '/images/gallery-candid.png', alt: 'Committee members at a festival (placeholder)' },
  ],
}

export type EventItem = {
  title: string
  category: string
  rasa: string
  description: string
  date: string
  venue: string
  image: string
  formUrl: string
}

export const events: EventItem[] = [
  {
    title: 'Dance',
    category: 'Solo & Duet',
    rasa: 'Shringara',
    description:
      'Placeholder — classical, folk, Bollywood and contemporary dance. ',
    date: '23/11',
    venue: 'MGM Auditorium',
    image: '/images/event-dance.png',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc-jRF8sBsCLKOwvWMehc1KjnnRpgz8ovfuZkxnfs1fy1_R0Q/viewform?usp=dialog',
  },
  {
    title: 'Music',
    category: 'Vocal & Instrumental',
    rasa: 'Shanta',
    description:
      'Placeholder — solo singing, bands, and instrumental performances. ',
    date: '22/11',
    venue: 'MGM Auditorium',
    image: '/images/event-music.png',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdA5NMOGNd_LJxDLaqDudT3AT6qQ-bzBsI_2QfN7FZ4d_LumA/viewform?usp=dialog',
  },
  {
    title: 'Mukhote',
    category: 'Stage & Street',
    rasa: 'Raudra',
    description:
      'Placeholder — stage plays, nukkad natak and skits. ',
    date: '22/10-23/10',
    venue: 'Auditorium',
    image: '/images/event-theatre.png',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfFQ0BoP13UajHYsN507HFjOYuzBq-BG6tioxkMONP-7qWLyg/viewform?usp=dialog',
  },
  {
    title: 'Fashion Walk',
    category: 'Ramp & Styling',
    rasa: 'Adbhuta',
    description:
      'Placeholder — themed fashion show and styling showcase. ',
    date: '24/11',
    venue: 'Venue to be announced',
    image: '/images/event-fashion.png',
    formUrl: '',
  },
  {
    title: 'Mgm Got Talent',
    category: 'individual/group',
    rasa: 'Hasya',
    description:
      'Placeholder — painting, poetry, stand-up, open mic and other cultural events.',
    date: '24/11',
    image: '/images/gallery-festival.png',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScU0vYB0_EGE-5UZY_cXICciftku2QuVM9vOiyU-C9X9cmJIA/viewform?usp=dialog',
  },
]

export const galleryCategories = ['All', 'Festivals', 'Performances', 'Candids', 'Behind the Scenes'] as const
export type GalleryCategory = (typeof galleryCategories)[number]

export const gallery: { src: string; alt: string; category: Exclude<GalleryCategory, 'All'> }[] = [
  { src: '/images/gallery-festival.png', alt: 'Festival night crowd (placeholder)', category: 'Festivals' },
  { src: '/images/event-dance.png', alt: 'Group dance performance (placeholder)', category: 'Performances' },
  { src: '/images/gallery-backstage.png', alt: 'Getting ready backstage (placeholder)', category: 'Behind the Scenes' },
  { src: '/images/gallery-candid.png', alt: 'Friends at the festival (placeholder)', category: 'Candids' },
  { src: '/images/event-theatre.png', alt: 'Theatre performance (placeholder)', category: 'Performances' },
  { src: '/images/event-fashion.png', alt: 'Fashion show walk (placeholder)', category: 'Festivals' },
  { src: '/images/event-music.png', alt: 'Live music on stage (placeholder)', category: 'Performances' },
  { src: '/images/about-group.png', alt: 'Team after the show (placeholder)', category: 'Candids' },
]

export type TeamMember = { name: string; role: string; photo: string }

/**
 * Replace with real names, designations and photos.
 * Put photos in /public/images/team/ and set photo: '/images/team/name.jpg'.
 * Portrait (4:5) photos look best. Leave photo empty to show the placeholder silhouette.
 */
export const heads: TeamMember[] = [
  { name: 'Rohit Siloriya', role: 'HEAD', photo: '' },
  { name: 'Shashwat Vijayvergia', role: 'HEAD', photo: '' },
  { name: 'Aparna Shrivastava', role: 'HEAD', photo: '' },
]

export const members: TeamMember[] = []