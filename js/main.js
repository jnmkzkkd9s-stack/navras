// NAVRAS static site — small bits of interactivity (no frameworks).

(function () {
  'use strict'

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function setClasses(el, add, remove) {
    remove.forEach(function (c) { el.classList.remove(c) })
    add.forEach(function (c) { el.classList.add(c) })
  }

  /* ---------- Header: background on scroll + mobile menu ---------- */
  var header = document.getElementById('site-header')
  var menuBtn = document.getElementById('menu-toggle')
  var menu = document.getElementById('mobile-menu')
  var menuItems = menu.querySelectorAll('li')
  var scrolled = false
  var open = false

  var SOLID = ['border-b', 'border-border', 'bg-ink/85', 'backdrop-blur-md']
  var CLEAR = ['bg-transparent']

  function renderHeader() {
    if (scrolled || open) setClasses(header, SOLID, CLEAR)
    else setClasses(header, CLEAR, SOLID)
  }

  function setMenu(isOpen) {
    open = isOpen
    document.body.style.overflow = open ? 'hidden' : ''
    menuBtn.setAttribute('aria-expanded', String(open))
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
    menuBtn.querySelector('[data-icon-open]').hidden = open
    menuBtn.querySelector('[data-icon-close]').hidden = !open

    if (open) setClasses(menu, ['visible', 'opacity-100'], ['invisible', 'opacity-0'])
    else setClasses(menu, ['invisible', 'opacity-0'], ['visible', 'opacity-100'])

    menuItems.forEach(function (li, i) {
      if (open) setClasses(li, ['translate-x-0', 'opacity-100'], ['-translate-x-4', 'opacity-0'])
      else setClasses(li, ['-translate-x-4', 'opacity-0'], ['translate-x-0', 'opacity-100'])
      li.style.transitionDelay = open ? 80 + i * 50 + 'ms' : '0ms'
    })
    renderHeader()
  }

  function onScroll() {
    var next = window.scrollY > 24
    if (next !== scrolled) {
      scrolled = next
      renderHeader()
    }
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  menuBtn.addEventListener('click', function () { setMenu(!open) })
  document.querySelectorAll('[data-close-menu]').forEach(function (a) {
    a.addEventListener('click', function () { if (open) setMenu(false) })
  })
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && open) setMenu(false)
  })

  /* ---------- Hero: rotating rasa ---------- */
  var rasas = [
    ['शृंगार', 'Shringara', 'Love'],
    ['हास्य', 'Hasya', 'Laughter'],
    ['करुण', 'Karuna', 'Compassion'],
    ['रौद्र', 'Raudra', 'Fury'],
    ['वीर', 'Veera', 'Courage'],
    ['भयानक', 'Bhayanaka', 'Fear'],
    ['बीभत्स', 'Bibhatsa', 'Disgust'],
    ['अद्भुत', 'Adbhuta', 'Wonder'],
    ['शांत', 'Shanta', 'Peace'],
  ]
  var rasaText = document.getElementById('rasa-text')
  var rasaDots = document.getElementById('rasa-dots').children
  var rasaIndex = 0

  var DOT_ON = ['w-6', 'bg-gold', 'shadow-[0_0_10px_var(--gold)]']
  var DOT_OFF = ['w-1.5', 'bg-foreground/25']

  if (!reducedMotion) {
    setInterval(function () {
      rasaIndex = (rasaIndex + 1) % rasas.length
      var r = rasas[rasaIndex]
      rasaText.children[0].textContent = r[0]
      rasaText.children[1].textContent = r[1] + ' · ' + r[2]
      // restart the fade-in/out animation
      rasaText.classList.remove('animate-rasa')
      void rasaText.offsetWidth
      rasaText.classList.add('animate-rasa')
      for (var i = 0; i < rasaDots.length; i++) {
        if (i === rasaIndex) setClasses(rasaDots[i], DOT_ON, DOT_OFF)
        else setClasses(rasaDots[i], DOT_OFF, DOT_ON)
      }
    }, 2400)
  }

  /* ---------- Reveal on scroll ---------- */
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  )
  document.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el) })

  /* ---------- Gallery: lightbox ---------- */
  var galleryItems = Array.prototype.slice.call(document.querySelectorAll('#gallery-grid > li'))
  var dialog = document.getElementById('lightbox')
  var stage = dialog.querySelector('[data-lightbox-stage]')
  var lbImg = document.getElementById('lightbox-img')
  var lbCaption = document.getElementById('lightbox-caption')
  var lbCount = document.getElementById('lightbox-count')
  var active = 0

  function showImage(i) {
    active = (i + galleryItems.length) % galleryItems.length
    var img = galleryItems[active].querySelector('img')
    lbImg.src = img.getAttribute('src')
    lbImg.alt = img.alt
    lbCaption.textContent = img.alt
    lbCount.textContent = active + 1 + ' / ' + galleryItems.length
  }

  galleryItems.forEach(function (li) {
    li.querySelector('button').addEventListener('click', function () {
      showImage(galleryItems.indexOf(li))
      dialog.showModal()
    })
  })

  function close() { dialog.close() }
  document.getElementById('lightbox-prev').addEventListener('click', function () { showImage(active - 1) })
  document.getElementById('lightbox-next').addEventListener('click', function () { showImage(active + 1) })
  document.getElementById('lightbox-close').addEventListener('click', close)
  dialog.addEventListener('click', function (e) { if (e.target === dialog) close() })
  stage.addEventListener('click', function (e) { if (e.target === stage) close() })
  window.addEventListener('keydown', function (e) {
    if (!dialog.open) return
    if (e.key === 'ArrowRight') showImage(active + 1)
    if (e.key === 'ArrowLeft') showImage(active - 1)
  })

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear()
})()
