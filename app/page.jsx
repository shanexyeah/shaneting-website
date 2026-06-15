import Link from 'next/link';

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
      <div className="marquee-section">
        <p className="marquee-label">As seen at</p>
        <div className="marquee-track">
          <div className="marquee-inner" aria-hidden="true">
            {LOGOS.map((l, i) => <span key={i} className="marquee-item">{l}</span>)}
          </div>
          <div className="marquee-inner" aria-hidden="true">
            {LOGOS.map((l, i) => <span key={i} className="marquee-item">{l}</span>)}
          </div>
        </div>
      </div>

      {/* ===== VIDEO REEL ===== */}
      <section className="video-section" id="reel">
        <div className="container">
          <p className="eyebrow" style={{textAlign:'center'}}>Watch</p>
          <h2 className="section-title" style={{textAlign:'center', color:'#fff', marginBottom:'48px'}}>
            Shane in action
          </h2>
          <div className="video-wrap">
            {/*
              When your reel is ready, replace the placeholder below with:
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Shane Ting Speaker Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            */}
            <div className="video-placeholder">
              <div className="play-btn">▶</div>
              <p>Highlight reel coming soon</p>
            </div>
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
              src="https://www.youtube.com/embed/akQZ8cCFqV0"
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
      <section className="section section-light">
        <div className="container">
          <div className="about-grid">
            <div className="about-photo">
              <img src="/about.jpg" alt="Shane Ting speaking" />
            </div>
            <div className="about-text">
              <p className="eyebrow">Meet Shane</p>
              <h2>Hi, I'm Shane.</h2>
              <p>
                {/* Replace this with your real story */}
                I know what it feels like to hit rock bottom. After [your
                defining moment — job loss, failure, reinvention], I
                discovered that the most powerful thing I had wasn't a
                credential or a skill — it was my story.
              </p>
              <p>
                Today I share that story with audiences around the world,
                helping them see that their hardest chapters aren't the
                end — they're the beginning.
              </p>
              <br />
              <Link href="/about" className="btn btn-dark">Read My Story →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">What audiences say</p>
          <h2 className="section-title">Real reactions.</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p>
                &ldquo;His presentation was authentic, thoughtful, and thoroughly
                engaging. What resonated most strongly with our boys was his
                reflection on the value of courage &mdash; not simply as bravery in
                big moments, but as the daily choice to stand for what is right
                and to persevere through challenge. We look forward to welcoming
                Shane back to share his further insights in the coming years.&rdquo;
              </p>
              <div className="testimonial-name">Margie Raymond</div>
              <div className="testimonial-role">Head of Junior Academy, Knox Grammar School</div>
            </div>
            <div className="testimonial">
              <p>
                "I came for a keynote and left with a new perspective on
                everything. Shane's story stayed with me for weeks."
              </p>
              <div className="testimonial-name">[Name]</div>
              <div className="testimonial-role">[Title, Company]</div>
            </div>
            <div className="testimonial">
              <p>
                "If you get the chance to have Shane speak at your event,
                don't hesitate. Your audience will thank you."
              </p>
              <div className="testimonial-name">[Name]</div>
              <div className="testimonial-role">[Title, Event]</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EMAIL CAPTURE ===== */}
      <section className="capture">
        <div className="capture-inner">
          <p className="eyebrow">Free resource</p>
          <h2>The 3 Principles of Resilient Leadership</h2>
          <p>
            Delivered free to your inbox — practical frameworks I share on
            stages around the world.
          </p>
          <ul className="capture-checks">
            <li>Reframe failure as fuel</li>
            <li>Build presence under pressure</li>
            <li>Turn your story into your greatest asset</li>
          </ul>
          {/*
            For this to work, set up a free form at https://formspree.io
            and replace YOUR_FORM_ID below.
          */}
          <form
            className="capture-form"
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
          >
            <input type="email" name="email" placeholder="Your email address" required />
            <button type="submit">Get It Free →</button>
          </form>
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
