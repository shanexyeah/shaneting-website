import Link from 'next/link';
import TestimonialsSection from './components/TestimonialsSection';

const LOGOS = [
  'TEDx', 'MDRT', 'ByOutliers', 'ICMI', 'JotForm', 'STAGE', '[Your Event]', 'TEDx', 'MDRT', 'ByOutliers', 'ICMI', 'JotForm', 'STAGE', '[Your Event]',
];

export default function Home() {
  return (
    <main>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg" />
        {/*
          Add your photo: place a file called hero.jpg in the /public folder of your project.
          It should be a high-res vertical or wide shot of you on stage.
        */}
        <div className="hero-content">
          <h1>Your story<br />is your <em>superpower.</em></h1>
          <p>
            Shane Ting is a keynote speaker who helps audiences turn their
            biggest setbacks into unstoppable momentum — through honest
            storytelling that moves rooms and changes minds.
          </p>
          <div className="hero-btns">
            <Link href="/contact" className="btn btn-primary">Book Shane to Speak</Link>
            <Link href="#reel" className="btn btn-outline">Watch Speaker Reel ↓</Link>
          </div>
        </div>
      </section>

      {/* ===== TRUSTED BY ===== */}
      {/* Marquee removed — add back once more events are confirmed */}

      {/* ===== TEDX TALK ===== */}
      <section className="video-section" id="reel">
        <div className="container">
          <p className="eyebrow" style={{textAlign:'center'}}>TEDx Talk</p>
          <h2 className="section-title" style={{textAlign:'center', color:'#fff', marginBottom:'12px'}}>
            Shane on the TED stage
          </h2>
          <p className="talk-meta">TEDx — full talk</p>
          <div className="video-wrap">
            <iframe
              src="https://www.youtube.com/embed/WhESr1RYXNw"
              title="Shane Ting — TEDx Talk"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ===== KNOX GRAMMAR FULL TALK ===== */}
      <section className="video-section talk-section" id="knox-talk">
        <div className="container">
          <p className="eyebrow" style={{textAlign:'center'}}>Live Talk</p>
          <h2 className="section-title" style={{textAlign:'center', color:'#fff', marginBottom:'12px'}}>
            Knox Grammar School
          </h2>
          <p className="talk-meta">360 Year 8 students &mdash; full keynote</p>
          <div className="video-wrap">
            <iframe
              src="https://www.youtube.com/embed/yuuRUg8szmM"
              title="Shane Ting — Knox Grammar School Keynote"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="talk-reaction">
            <p className="talk-reaction-quote">&ldquo;They were listening, they were paying attention &mdash; every one of your advice pieces, they worked.&rdquo;</p>
            <p className="talk-reaction-attr">Margie Raymond &mdash; Head of Junior Academy, Knox Grammar School</p>
          </div>
        </div>
      </section>

      {/* ===== QUOTE STRIP ===== */}
      <div className="quote-strip">
        <blockquote>
          &ldquo;Courage is a muscle. Train it by doing small scary things on
          purpose &mdash; over and over &mdash; until your body learns that
          scary doesn&rsquo;t mean dangerous.&rdquo;
        </blockquote>
        <cite>— Shane Ting</cite>
      </div>

      {/* ===== OFFERINGS ===== */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">How we work together</p>
          <h2 className="section-title">Unlock your potential.</h2>
          <div className="cards">
            <div className="card">
              <div className="card-num">01</div>
              <h3>Keynote Speaking</h3>
              <p>
                Signature talks for conferences, summits, and team events
                that leave your audience thinking differently about their
                challenges.
              </p>
              <Link href="/contact">Book Shane →</Link>
            </div>
            <div className="card">
              <div className="card-num">02</div>
              <h3>Corporate Workshops</h3>
              <p>
                Half-day and full-day workshops that go deep — giving teams
                the mindset and tools to communicate through adversity.
              </p>
              <Link href="/contact">Enquire →</Link>
            </div>
            <div className="card">
              <div className="card-num">03</div>
              <h3>1:1 Coaching</h3>
              <p>
                Private mentorship for founders, executives, and emerging
                leaders who want to find their story and own every room.
              </p>
              <Link href="/contact">Enquire →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT MINI ===== */}
      <section className="section section-dark">
        <div className="container">
          <div className="about-grid">
            <div className="about-photo">
              <img src="/about.jpg" alt="Shane Ting speaking" />
            </div>
            <div className="about-text">
              <p className="eyebrow">Meet Shane</p>
              <h2>Hi, I&apos;m Shane.</h2>
              <p>
                At fourteen I left home to chase my dreams of becoming an
                Olympic swimmer. At sixteen, I fractured my back &mdash; and lost
                the only identity I&apos;d ever had. I came home not knowing who I
                was or how to talk about it.
              </p>
              <p>
                What pulled me through wasn&apos;t a plan. It was a cheap keyboard,
                a camera, and the courage to share something real. That grew
                into 180,000 followers, live performances, and eventually a
                TEDx stage.
              </p>
              <p>
                Now I bring that story to students, teams, and leaders who are
                facing their own version of rock bottom &mdash; and show them that
                the hardest chapter is rarely the last one.
              </p>
              <br />
              <Link href="/about" className="btn btn-primary">Read My Story →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <TestimonialsSection />


      {/* ===== WORKSHOP TESTIMONIAL REEL ===== */}
      <section className="video-section talk-section" id="testimonials-reel">
        <div className="container">
          <p className="eyebrow" style={{textAlign:'center'}}>Participant Testimonials</p>
          <h2 className="section-title" style={{textAlign:'center', color:'#fff', marginBottom:'12px'}}>
            Straight from the room.
          </h2>
          <p className="talk-meta">Storytelling workshop &mdash; University society</p>
          <div className="video-wrap">
            <iframe
              src="https://www.youtube.com/embed/z2j07G0d57M"
              title="Shane Ting — Storytelling Workshop Testimonials"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to bring this to<br /><em>your stage?</em></h2>
          <Link href="/contact" className="btn btn-dark">Get in Touch →</Link>
        </div>
      </section>

    </main>
  );
}
