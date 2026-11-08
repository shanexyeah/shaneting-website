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

const STORY_PHOTOS = [
  { src: '/about-swim.jpg', alt: 'Shane swimming butterfly at a national meet' },
  { src: '/about-stage.jpg', alt: 'Shane speaking on the TEDx red circle' },
  { src: '/about2.jpg', alt: 'Portrait of Shane Ting' },
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
          <h2 className="display-2 center">How we work together</h2>
          <div className="offering-grid">
            {OFFERINGS.map((o, i) => (
              <div className="offering" key={o.title} data-reveal style={{ '--reveal-delay': `${i * 60}ms` }}>
                <span className="icon-chip">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{o.icon}</svg>
                </span>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TALKS ===== */}
      <section className="talks-strip">
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

      {/* ===== MEET SHANE ===== */}
      <section className="overview">
        <div className="container">
          <div className="overview-row">
            <div className="overview-text" data-reveal>
              <p className="eyebrow">Meet Shane</p>
              <h3 className="display-3">Hi, I&apos;m Shane</h3>
              <p>
                At fourteen I left home to chase my dreams of becoming an
                Olympic swimmer. At sixteen, I fractured my back, and lost
                the only identity I&apos;d ever had. I came home not knowing who I
                was or how to talk about it.
              </p>
            </div>
            <img className="overview-img" src="/about3.jpg" alt="Shane Ting with arms crossed" data-reveal />
          </div>
          <hr className="rule" />
          <div className="overview-row">
            <div className="overview-text" data-reveal>
              <h3 className="display-3">From a cheap keyboard to the TEDx stage</h3>
              <p>
                What pulled me through wasn&apos;t a plan. It was a cheap keyboard,
                a camera, and the courage to share something real. That grew
                into 180,000 followers, live performances, and eventually a
                TEDx stage.
              </p>
              <Link href="/about" className="text-link">Read my story</Link>
            </div>
            <img className="overview-img" src="/about-piano.jpg" alt="Shane at the piano" data-reveal />
          </div>
          <hr className="rule" />
        </div>
      </section>

      {/* ===== STORY PHOTO STRIP ===== */}
      <section className="story-strip">
        <div className="container split-head">
          <h2 className="display-2">The hardest chapter is<br />rarely the last one</h2>
          <p>
            Now I bring that story to students, teams, and leaders who are
            facing their own version of rock bottom.
          </p>
        </div>
        <div className="photo-track">
          {STORY_PHOTOS.map((p) => (
            <img key={p.src} src={p.src} alt={p.alt} loading="lazy" />
          ))}
        </div>
      </section>

      {/* ===== GREY CTA ===== */}
      <section className="cta-band">
        <h2 className="display-2">Bring Shane to your stage</h2>
        <p>Keynotes, workshops and coaching for schools, teams and leaders.</p>
        <Link href="/contact" className="btn btn-dark">Book Shane to Speak</Link>
      </section>

      {/* ===== QUOTE FEATURE ===== */}
      <section className="feature">
        <div className="container feature-grid">
          <div className="feature-card" aria-hidden="true">
            <span className="wordmark-top">Shane Ting</span>
            <span className="wordmark-main">Keynote</span>
            <span className="wordmark-bottom">Speaker</span>
          </div>
          <h2 className="display-2 feature-title">Courage is a muscle</h2>
          <p className="feature-text">
            &ldquo;Train it by doing small scary things on purpose, over and
            over, until your body learns that scary doesn&rsquo;t mean
            dangerous.&rdquo;
          </p>
          <img className="feature-img" src="/about.jpg" alt="Shane speaking on stage" />
        </div>
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
