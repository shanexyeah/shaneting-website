import Link from 'next/link';
import TestimonialsSection from './components/TestimonialsSection';
import ScrollReveal from './components/ScrollReveal';
import Carousel from './components/Carousel';
import VideoPoster from './components/VideoPoster';

const OFFERINGS = [
  {
    title: 'Keynote Speaking',
    body: 'Signature talks for conferences, summits, and team events that leave your audience thinking differently about their challenges.',
    icon: <><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3" /></>,
  },
  {
    title: 'Corporate Workshops',
    body: 'Half-day and full-day workshops that go deep, giving teams the mindset and tools to communicate through adversity.',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
  {
    title: '1:1 Coaching',
    body: 'Private mentorship for founders, executives, and emerging leaders who want to find their story and own every room.',
    icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />,
  },
];

const TALKS = [
  { id: 'WhESr1RYXNw', caption: 'TEDx, full talk' },
  { id: 'yuuRUg8szmM', caption: 'Knox Grammar School, Year 8 keynote' },
  { id: 'NDJPY77ACyA', caption: 'TARA Anglican School, Year 9 keynote' },
  { id: '-yhiVtXc1xE', caption: 'Notion Market Sydney, How to Be Courageous' },
  { id: 'z2j07G0d57M', caption: 'Storytelling workshop, participant reactions' },
];

export default function Home() {
  return (
    <main>
      <ScrollReveal />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-frame">
          <img className="hero-img" src="/hero.png" alt="" />
          <div className="hero-content">
            <p className="eyebrow">Keynote Speaker</p>
            <h1>Your story is your superpower</h1>
            <p className="hero-sub">
              Shane Ting is a TEDx speaker who helps people overcome their fear
              of judgment, build confidence, and find the courage to take
              action before they feel ready.
            </p>
            <Link href="/contact" className="btn btn-light">Book Shane to Speak</Link>
          </div>
        </div>
      </section>

      {/* ===== TEDX TALK ===== */}
      <section className="intro" id="reel">
        <p className="eyebrow center">TEDx Talk</p>
        <h2 className="display-2 center">Start before you<br />feel ready</h2>
        <div className="intro-video" data-reveal>
          <VideoPoster id="WhESr1RYXNw" poster="/tedx-stage.jpg" title="Shane Ting | TEDx Talk" />
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <TestimonialsSection />

      {/* ===== OFFERINGS ===== */}
      <section className="offerings">
        <div className="container">
          <p className="eyebrow center">Services</p>
          <h2 className="display-2 center">How we work together</h2>
          <div className="offering-grid">
            {OFFERINGS.map((o, i) => (
              <div className="offering" key={o.title} data-reveal style={{ '--reveal-delay': `${i * 60}ms` }}>
                <span className="icon-chip">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{o.icon}</svg>
                </span>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
                <Link href="/contact" className="text-link">Enquire</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TALKS ===== */}
      <section className="talks-strip dark">
        <div className="container split-head">
          <h2 className="display-2">Watch Shane<br />live on stage</h2>
          <p>
            Full keynotes from schools, conferences and workshops.{' '}
            <Link href="/talks" className="text-link">See all talks</Link>
          </p>
        </div>
        <Carousel label="talk" arrowsClass="container end" trackClass="talk-track">
          {TALKS.map((t) => (
            <a
              key={t.id}
              className="talk-card"
              href={`https://www.youtube.com/watch?v=${t.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`https://img.youtube.com/vi/${t.id}/maxresdefault.jpg`} alt="" loading="lazy" />
              <span>{t.caption}</span>
            </a>
          ))}
        </Carousel>
      </section>

      {/* ===== GREY CTA ===== */}
      <section className="cta-band">
        <h2 className="display-2">Bring Shane to your stage</h2>
        <p>Keynotes, workshops and coaching for schools, teams and leaders.</p>
        <Link href="/contact" className="btn btn-dark">Book Shane to Speak</Link>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section className="closing">
        <img className="closing-img" src="/tedx-stage.jpg" alt="" />
        <div className="closing-content">
          <h2 className="display-2">Ready to bring this<br />to your stage?</h2>
          <Link href="/contact" className="btn btn-light">Get in Touch</Link>
        </div>
      </section>
    </main>
  );
}
