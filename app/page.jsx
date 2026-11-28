import Link from 'next/link';
import TestimonialsSection from './components/TestimonialsSection';
import ScrollReveal from './components/ScrollReveal';
import Carousel from './components/Carousel';
import VideoPoster from './components/VideoPoster';
import { TAGLINE } from './lib/seo';

// Home uses the site-wide default title, description and share tags from layout.jsx

const OFFERINGS = [
  {
    title: 'Keynote Speaking',
    body: 'Four keynotes on performing under pressure, for conferences, all-hands, sales teams and graduate programs.',
    link: { href: '/keynotes', label: 'See the keynotes' },
    icon: <><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3" /></>,
  },
  {
    title: 'Corporate Workshops',
    body: 'Half-day and full-day workshops where teams practise their own pressure moments: the pitch, the feedback conversation, speaking up in the meeting.',
    link: { href: '/contact', label: 'Enquire' },
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  },
  {
    title: '1:1 Coaching',
    body: 'Private coaching for founders, leaders and client-facing professionals who need to back themselves in the room that matters.',
    link: { href: '/contact', label: 'Enquire' },
    icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />,
  },
];

const TALKS = [
  { id: 'WhESr1RYXNw', caption: 'TEDx, full talk' },
  { id: 'yuuRUg8szmM', caption: 'Knox Grammar School, Year 8 keynote' },
  { id: 'NDJPY77ACyA', caption: 'TARA Anglican School, Year 9 keynote' },
  { id: 'z2j07G0d57M', caption: 'Storytelling workshop, participant reactions' },
];

export default function Home() {
  return (
    <main>
      <ScrollReveal />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-frame">
          <img className="hero-img" src="/hero.png" alt="Shane Ting standing alone on stage, facing an empty auditorium" />
          <div className="hero-content">
            <p className="eyebrow">{TAGLINE}</p>
            <h1>Perform under pressure. Before you feel ready.</h1>
            <p className="hero-sub">
              Keynotes for conferences, professional associations, companies,
              sales teams, leaders and graduate programs. Shane helps people
              back themselves when it counts: the pitch, the hard conversation,
              the moment you&apos;re not sure you&apos;re ready.
            </p>
            <div className="btn-row">
              <a href="#watch" className="btn btn-light">Watch Shane live</a>
              <Link href="/contact" className="btn btn-ghost-light">Check availability</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SIGNATURE MOMENT ===== */}
      {/* Swap the photo for the TEDxYarram piano requests video once it's on YouTube */}
      <section className="first-note">
        <div className="container first-note-grid">
          <figure className="first-note-media" data-reveal>
            <img src="/tedx-yarram-requests.jpg" alt="Shane Ting at the piano on the TEDxYarram stage, with audience members beside him" />
            <figcaption>TEDxYarram, October 2026</figcaption>
          </figure>
          <div className="first-note-copy" data-reveal style={{ '--reveal-delay': '80ms' }}>
            <p className="eyebrow">The First Note</p>
            <h2 className="display-2">Live song requests. Played by ear.</h2>
            <p>
              Shane sits at the piano and asks the room for requests. He&apos;s
              never sure he knows the song. There&apos;s a moment before the first
              note where anything could go wrong, and sometimes it does.
            </p>
            <p>
              He plays anyway, wrong notes and all. It&apos;s performing under
              pressure, live, in front of the whole room. And everyone remembers it.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TEDX TALK ===== */}
      <section className="intro" id="watch">
        <p className="eyebrow center">Watch Shane live</p>
        <h2 className="display-2 center">Start before you<br />feel ready</h2>
        <div className="intro-video" data-reveal>
          <VideoPoster id="WhESr1RYXNw" poster="/tedx-stage.jpg" title="Shane Ting | TEDx Talk" />
        </div>
      </section>

      {/* ===== WHY IT WORKS ===== */}
      <section className="why">
        <div className="container">
          <p className="eyebrow center">Why it works</p>
          <h2 className="display-2 center">The human part of the job</h2>
          <p className="why-lead">
            As AI takes on the routine work, what&apos;s left is the human part:
            making the call, pitching the idea, having the conversation. Nobody
            feels fully ready for those moments.
          </p>
          <div className="why-grid">
            <div className="why-card" data-reveal>
              <h3>The method: Fear + Action</h3>
              <p>You don&apos;t wait to feel ready. You act, and the confidence follows.</p>
            </div>
            <div className="why-card" data-reveal style={{ '--reveal-delay': '60ms' }}>
              <h3>Isn&apos;t this just motivation?</h3>
              <p>No. It&apos;s practical, not motivational. People leave with a way to act when they don&apos;t feel ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <TestimonialsSection
        heading={<>What organisers<br />and audiences say</>}
        names={['Prof Lee Baumgartner', 'Tommy', 'TARA Anglican School', 'Amelia', 'Amanda', 'Nick', 'Na’ama', 'Adam', 'Farris']}
      />

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
                <Link href={o.link.href} className="text-link">{o.link.label}</Link>
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
            Full talks from the TEDx stage, schools and workshops.{' '}
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

      {/* ===== CTA BAND ===== */}
      <section className="cta-band">
        <h2 className="display-2">Bring Shane to your stage</h2>
        <p>For conferences, associations, sales teams, leaders and graduate programs.</p>
        <Link href="/contact" className="btn btn-dark">Check availability</Link>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section className="closing">
        <img className="closing-img" src="/tedx-stage.jpg" alt="Shane Ting on the TEDx stage" />
        <div className="closing-content">
          <h2 className="display-2">Got an event<br />coming up?</h2>
          <Link href="/contact" className="btn btn-light">Check availability</Link>
        </div>
      </section>
    </main>
  );
}
