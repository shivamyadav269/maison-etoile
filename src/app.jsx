import { useState, useEffect } from 'react'

import {
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  Menu,
  X,
  MapPin,
  Clock,
  Phone,
} from 'lucide-react'

const RESTAURANT = {
  name: 'Maison Étoile',
  whatsapp: '919999999999',
  address: 'Ahmedabad, Gujarat, India',
  instagram: 'https://instagram.com/',
}


const dishes = [
  {
    id: 1,
    name: 'Burrata & Heirloom',
    category: 'Starters',
    description: 'Creamy burrata, heirloom tomatoes, basil oil and toasted sourdough.',
    price: '₹495',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=900&q=85',
    isVeg: true,
    tag: 'CHEF’S PICK',
  },
  {
    id: 2,
    name: 'Wild Mushroom Risotto',
    category: 'Mains',
    description: 'Slow-cooked arborio rice, wild mushrooms and vegetarian parmesan.',
    price: '₹695',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=900&q=85',
    isVeg: true,
    tag: 'SIGNATURE',
  },
  {
    id: 3,
    name: 'The Signature Pasta',
    category: 'Mains',
    description: 'Handmade pasta, roasted cherry tomatoes and fresh herbs.',
    price: '₹625',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=85',
    isVeg: true,
    tag: 'POPULAR',
  },
  {
    id: 4,
    name: 'Golden Garden Salad',
    category: 'Starters',
    description: 'Seasonal greens, citrus dressing, toasted seeds and fresh herbs.',
    price: '₹395',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=85',
    isVeg: true,
    tag: 'FRESH',
  },
  {
    id: 5,
    name: 'Roasted Cauliflower',
    category: 'Mains',
    description: 'Charred cauliflower, aromatic spices and a creamy tahini sauce.',
    price: '₹545',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=85',
    isVeg: true,
    tag: 'HOUSE SPECIAL',
  },
  {
    id: 6,
    name: 'Midnight Chocolate',
    category: 'Desserts',
    description: 'Dark chocolate creation with a delicate seasonal fruit finish.',
    price: '₹425',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=85',
    isVeg: true,
    tag: 'DESSERT SPECIAL',
  },
]

const navigation = [
  ['Our Story', '#story'],
  ['The Menu', '#menu'],
  ['Our Space', '#space'],
  ['Reservations', '#reservation'],
]

// NAVBAR

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#ded6ca] bg-[#f5f0e8]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 md:px-12">

        <a href="#" className="leading-none">
          <span className="editorial text-2xl font-semibold">
            Maison<span className="text-[#632d35]">.</span>
          </span>
          <span className="mt-1 block text-[8px] tracking-[0.35em] text-[#81796e]">
            ÉTOILE
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {navigation.map(([label, link]) => (
            <a key={label} href={link} className="menu-link text-[10px] font-semibold uppercase tracking-[0.16em]">
              {label}
            </a>
          ))}
        </nav>

        <a href="#reservation" className="hidden border border-[#632d35] px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-[#632d35] hover:bg-[#632d35] hover:text-white md:flex">
          Book a table <ArrowUpRight size={14} />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="p-2 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#ded6ca] bg-[#f5f0e8] px-6 py-5 md:hidden">
          {navigation.map(([label, link]) => (
            <a
              key={label}
              href={link}
              onClick={() => setOpen(false)}
              className="block border-b border-[#ded6ca] py-4 text-xs uppercase tracking-widest"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

// HERO

function Hero() {
  return (
    <section className="hero-image relative flex min-h-[680px] items-center md:min-h-[780px]">
      <div className="mx-auto w-full max-w-[1440px] px-7 py-24 md:px-20">
        <div className="max-w-[760px] text-white">

          <div className="mb-9 flex items-center gap-3">
            <span className="h-px w-10 bg-[#d8b88b]" />
            <p className="section-label text-[#e4c9a7]">
              A contemporary dining experience
            </p>
          </div>

          <h1 className="editorial text-6xl leading-[1.05] md:text-8xl lg:text-[108px]">
            A taste of
            <br />
            <span className="italic text-[#e4c9a7]">something</span>
            <br />
            extraordinary.
          </h1>

          <p className="mt-9 max-w-[410px] text-sm leading-7 text-white/75">
            Where culinary artistry meets timeless elegance.
            Discover a dining experience designed to be remembered.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#menu" className="flex items-center gap-4 bg-[#f5f0e8] px-7 py-4 text-[10px] font-bold uppercase tracking-widest text-[#24231f] hover:bg-[#e4c9a7]">
              Explore our menu <ArrowUpRight size={15} />
            </a>

            <a href="#story" className="flex items-center gap-3 px-4 py-4 text-[10px] font-semibold uppercase tracking-widest">
              Discover our story <ArrowDown size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// STORY

function Story() {
  return (
    <section id="story" className="scroll-mt-24 px-6 py-24 md:px-16 md:py-36">
      <div className="mx-auto grid max-w-[1250px] items-center gap-16 md:grid-cols-2 md:gap-24">

        <div>
          <p className="section-label mb-8 text-[#632d35]">
            The philosophy
          </p>

          <h2 className="editorial text-5xl leading-tight md:text-7xl">
            Food is an art.
            <br />
            <span className="italic text-[#632d35]">
              Dining is a feeling.
            </span>
          </h2>

          <p className="mt-8 max-w-[480px] text-sm leading-8 text-[#81796e]">
            At Maison Étoile, we believe the finest experiences
            are created through thoughtful details. From carefully
            sourced ingredients to the last detail on your plate,
            every element tells a story.
          </p>

          <a href="#space" className="mt-9 inline-flex items-center gap-4 border-b border-[#632d35] pb-3 text-[10px] font-bold uppercase tracking-widest text-[#632d35]">
            Discover our world <ArrowRight size={15} />
          </a>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1100&q=85"
            alt="Elegant fine dining table"
            className="h-[480px] w-full object-cover md:h-[620px]"
          />

          <div className="absolute -bottom-9 -left-6 bg-[#632d35] px-8 py-7 text-white md:-left-12">
            <p className="editorial text-4xl italic">Est. 2026</p>
            <p className="section-label mt-3 text-white/65">
              Crafted with passion
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

// MENU


function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Starters', 'Mains', 'Desserts']

  const filteredDishes =
    activeCategory === 'All'
      ? dishes
      : dishes.filter(
          (dish) => dish.category === activeCategory
        )

  return (
    <section
      id="menu"
      className="scroll-mt-24 bg-[#eee7dc] px-6 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-[1250px]">

        {/* SECTION HEADER */}

        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="section-label mb-6 text-[#632d35]">
              A selection of our finest
            </p>

            <h2 className="editorial text-5xl md:text-7xl">
              The signature <span className="italic">menu.</span>
            </h2>
          </div>

          <p className="max-w-[340px] text-sm leading-7 text-[#81796e]">
            Thoughtfully curated flavours, seasonal ingredients
            and dishes made with intention.
          </p>

        </div>

        {/* CATEGORY FILTERS */}

        <div className="mb-12 flex flex-wrap gap-3 border-b border-[#d6ccbf] pb-7">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#632d35] text-white'
                  : 'border border-[#d6ccbf] text-[#81796e] hover:border-[#632d35] hover:text-[#632d35]'
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* MENU GRID */}

        <div
          className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >

          {filteredDishes.map((dish) => (

            <article
              key={dish.id}
              className="group"
            >

              {/* FOOD IMAGE */}

              <div className="image-zoom relative">

                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 bg-[#f5f0e8] px-4 py-2">
                  <span className="text-[9px] font-bold tracking-[0.15em] text-[#632d35]">
                    {dish.tag}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-[#f5f0e8] px-3 py-2">

                  <span className="h-2 w-2 rounded-full border border-green-700 bg-green-600" />

                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#24231f]">
                    Veg
                  </span>

                </div>

              </div>

              {/* DISH DETAILS */}

              <div className="border-b border-[#d6ccbf] py-6">

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="section-label mb-3 text-[#9a8875]">
                      {dish.category}
                    </p>

                    <h3 className="editorial text-2xl transition-colors group-hover:text-[#632d35]">
                      {dish.name}
                    </h3>
                  </div>

                  <p className="pt-1 text-sm font-semibold text-[#632d35]">
                    {dish.price}
                  </p>

                </div>

                <p className="mt-4 max-w-[300px] text-xs leading-7 text-[#81796e]">
                  {dish.description}
                </p>

              </div>

            </article>

          ))}

        </div>

        {/* FOOTER CTA */}

        <div className="mt-16 flex flex-col items-center text-center">

          <p className="editorial text-2xl italic text-[#632d35]">
            Good food. Beautiful moments.
          </p>

          <a
            href="#reservation"
            className="mt-7 inline-flex items-center gap-4 bg-[#632d35] px-8 py-5 text-[10px] font-bold uppercase tracking-[0.17em] text-white transition hover:bg-[#442128]"
          >
            Reserve your experience
            <ArrowUpRight size={15} />
          </a>

        </div>

      </div>
    </section>
  )
}

// AMBIENCE

function Ambience() {
  return (
    <section id="space" className="scroll-mt-24 px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-[1250px]">

        <div className="mb-12 text-center">
          <p className="section-label mb-6 text-[#632d35]">
            The atmosphere
          </p>
          <h2 className="editorial text-5xl md:text-7xl">
            A space to <span className="italic">savour.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1100&q=85"
            alt="Restaurant interior"
            loading="lazy"
            className="h-[400px] w-full object-cover md:h-[550px]"
          />

          <div className="grid gap-5">
            <img
              src="https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?w=900&q=85"
              alt="Fine dining food"
              loading="lazy"
              className="h-[190px] w-full object-cover md:h-[265px]"
            />

            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900&q=85"
              alt="Restaurant dining atmosphere"
              loading="lazy"
              className="h-[190px] w-full object-cover md:h-[265px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

// RESERVATION

function Reservation() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  })

  function handleChange(e) {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const message = `
Hello ${RESTAURANT.name}!

I would like to request a table reservation.

Name: ${form.name}
Phone: ${form.phone}
Date: ${form.date}
Time: ${form.time}
Guests: ${form.guests}
Additional details: ${form.message || 'None'}

Please confirm availability. Thank you!
    `

    const url = `https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent(message)}`

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="reservation" className="scroll-mt-24 bg-[#632d35] px-6 py-24 text-white md:px-16 md:py-32">
      <div className="mx-auto grid max-w-[1250px] gap-16 md:grid-cols-2 md:gap-24">

        <div>
          <p className="section-label mb-8 text-[#e4c9a7]">
            Your table awaits
          </p>

          <h2 className="editorial text-5xl leading-tight md:text-7xl">
            Make a
            <br />
            reservation<span className="italic text-[#e4c9a7]">.</span>
          </h2>

          <p className="mt-8 max-w-[400px] text-sm leading-8 text-white/65">
            Some moments deserve a beautiful setting.
            Reserve your table and let us take care of the rest.
          </p>

          <div className="mt-12 space-y-7">

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-[#e4c9a7]" size={18} />
              <div>
                <p className="section-label">Find us</p>
                <p className="mt-2 text-sm text-white/70">
                  {RESTAURANT.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 text-[#e4c9a7]" size={18} />
              <div>
                <p className="section-label">Opening hours</p>
                <p className="mt-2 text-sm text-white/70">
                  Tuesday – Sunday · 12 PM – 11 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-[#e4c9a7]" size={18} />
              <div>
                <p className="section-label">Reservations</p>
                <p className="mt-2 text-sm text-white/70">
                  Via WhatsApp
                </p>
              </div>
            </div>

          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 border border-white/20 bg-white/[0.04] p-6 md:p-10">

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="section-label">Your name</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
                className="mt-3 w-full border-b border-white/30 bg-transparent py-3 text-sm text-white placeholder:text-white/40"
              />
            </div>

            <div>
              <label className="section-label">Phone number</label>
              <input
                required
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 00000 00000"
                className="mt-3 w-full border-b border-white/30 bg-transparent py-3 text-sm text-white placeholder:text-white/40"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="section-label">Date</label>
              <input
                required
                type="date"
                name="date"
                min={new Date().toLocaleDateString('en-CA')}
                value={form.date}
                onChange={handleChange}
                className="mt-3 w-full border-b border-white/30 bg-transparent py-3 text-sm text-white"
              />
            </div>

            <div>
              <label className="section-label">Preferred time</label>
              <select
                required
                name="time"
                value={form.time}
                onChange={handleChange}
                className="mt-3 w-full border-b border-white/30 bg-[#632d35] py-3 text-sm text-white"
              >
                <option value="">Select time</option>
                {['12:00 PM', '1:00 PM', '2:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'].map((time) => (
                  <option key={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="section-label">Number of guests</label>
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className="mt-3 w-full border-b border-white/30 bg-[#632d35] py-3 text-sm text-white"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="section-label">Special requests</label>
            <textarea
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              placeholder="Any special requests?"
              className="mt-3 w-full resize-none border-b border-white/30 bg-transparent py-3 text-sm text-white placeholder:text-white/40"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-4 bg-[#f5f0e8] px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-[#632d35] hover:bg-[#e4c9a7]"
          >
            Request reservation <ArrowUpRight size={15} />
          </button>

          <p className="text-center text-[10px] text-white/45">
            Reservations are subject to restaurant confirmation.
          </p>

        </form>
      </div>
    </section>
  )
}

// FOOTER

function Footer() {
  return (
    <footer className="bg-[#211e1b] px-6 py-16 text-[#f5f0e8] md:px-16">
      <div className="mx-auto max-w-[1250px]">

        <div className="flex flex-col justify-between gap-12 md:flex-row">

          <div>
            <h2 className="editorial text-5xl">
              Maison<span className="text-[#d5aa7b]">.</span>
            </h2>

            <p className="section-label mt-3 text-white/40">
              ÉTOILE · A TASTE OF ART
            </p>

            <p className="mt-6 max-w-[300px] text-xs leading-7 text-white/50">
              An intimate dining experience inspired by art,
              culture and the beauty of exceptional food.
            </p>
          </div>

          <div>
            <p className="section-label mb-6 text-[#d5aa7b]">Explore</p>

            {navigation.map(([label, link]) => (
              <a key={label} href={link} className="mb-4 block text-sm text-white/60 hover:text-white">
                {label}
              </a>
            ))}
          </div>

          <div>
            <p className="section-label mb-6 text-[#d5aa7b]">Connect</p>

            <a
              href={RESTAURANT.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-white/60 hover:text-white"
            >
              <ArrowUpRight size={17} /> Instagram
            </a>

            <p className="mt-5 text-sm text-white/60">
              {RESTAURANT.address}
            </p>
          </div>

        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/15 pt-8 text-[10px] uppercase tracking-widest text-white/35 md:flex-row">
          <p>© 2026 Maison Étoile. All rights reserved.</p>
          <p>Designed with intention. Crafted with passion.</p>
        </div>

      </div>
    </footer>
  )
}

// MAIN APPLICATION


function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Hello Maison Étoile! I'd like to know more about your dining experience."
  )

  return (
    <a
      href={`https://wa.me/${RESTAURANT.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Maison Étoile on WhatsApp"
      className="whatsapp-float group"
    >
      <span className="whatsapp-icon">WA</span>
      <span className="whatsapp-label">Chat with us</span>
    </a>
  )
}

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('main > section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    sections.forEach((section) => {
      section.classList.add('reveal')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <Navbar />
      <Hero />
      <Story />
      <MenuSection />
      <Ambience />
      <Reservation />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
