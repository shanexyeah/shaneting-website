import Link from 'next/link';

export const metadata = {
  title: 'About Shane Ting | Keynote Speaker',
  description: 'The story behind Shane Ting: from rock bottom to center stage.',
};

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>From rock bottom<br />to <em>center stage.</em></h1>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* Row 1: text left, swim photo right */}
          <div className="story-row">
            <div className="story-text">
              <p className="eyebrow">My story</p>
              <h2>The dream.</h2>
              <p>
                At fourteen, I left home and moved interstate to boarding school
                to chase one goal: becoming an Olympic swimmer. At sixteen, I
                fractured my back. I was shattered, so I did the only
                thing I knew how to do. I pushed harder.
              </p>
              <p>
                It didn&apos;t work. I never got back to the level I&apos;d been at,
                and slowly the dream faded, and my sense of who I was went
                with it. I came home without an identity. I didn&apos;t know who I
                was without swimming, and I didn&apos;t know how to talk about it.
              </p>
            </div>
            <div className="story-photo">
              <img src="/about-swim.jpg" alt="Shane Ting swimming" />
            </div>
          </div>

          {/* Row 2: piano photo left, text right */}
          <div className="story-row">
            <div className="story-photo">
              <img src="/about-piano.jpg" alt="Shane Ting playing piano" />
            </div>
            <div className="story-text">
              <p className="eyebrow">The turning point</p>
              <h2>A cheap keyboard.</h2>
              <p>
                I&apos;d grown up playing piano too; I&apos;d even reached the
                highest level in Australia before burning out and swearing I&apos;d
                never touch one again. But at my lowest point, I bought a cheap
                keyboard and, for the first time in two years, played the music
                I actually wanted to play. I started posting it online. Music
                became the first time I expressed myself without needing to speak.
              </p>
              <p>
                That became a habit, then a craft. I arranged my own sheet music,
                built a following of over 180,000 people across social media, and
                started performing at weddings and live events, slowly learning
                to put myself out there, one stage at a time.
              </p>
            </div>
          </div>

          {/* Row 3: text left, stage photo right */}
          <div className="story-row">
            <div className="story-text">
              <p className="eyebrow">The payoff</p>
              <h2>The TED stage.</h2>
              <p>
                The breakthrough came when I gave my first TEDx talk, on starting
                before you feel ready. Standing on that stage, I was really
                speaking to one person: the shy kid who&apos;d spent years hiding
                behind swimming and piano.
              </p>
              <p>
                Today I share that story with students and audiences facing their
                own version of rock bottom, because the hardest chapter of my
                life taught me something I wish I&apos;d known sooner. Your story
                isn&apos;t something to hide. It&apos;s your superpower, and courage is
                just a muscle, trained one small scary thing at a time.
              </p>
            </div>
            <div className="story-photo">
              <img src="/about-stage.jpg" alt="Shane Ting speaking on stage" />
            </div>
          </div>

        </div>
      </section>

      <section className="socials-section">
        <div className="container">
          <p className="eyebrow" style={{textAlign:'center', color:'rgba(255,255,255,0.4)'}}>Follow along</p>
          <div className="socials-links">
            <a href="https://instagram.com/shanexyeah" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://tiktok.com/@shanexyeah" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
            </a>
            <a href="https://youtube.com/@ShaneTing24" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.2.7 11.3v2c0 2.1.3 4.3.3 4.3s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.5 21.8 12 21.8 12 21.8s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.3v-2C23.3 9.2 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/></svg>
            </a>
          </div>
        </div>
      </section>

      <div className="quote-strip">
        <blockquote>
          &ldquo;Your story isn&rsquo;t something to hide. It&rsquo;s your superpower.&rdquo;
        </blockquote>
        <cite>Shane Ting</cite>
      </div>

      <section className="section section-light">
        <div className="container" style={{textAlign:'center'}}>
          <p className="eyebrow">Work with Shane</p>
          <h2 className="section-title">Let&apos;s make your event unforgettable.</h2>
          <Link href="/contact" className="btn btn-dark">Get in Touch →</Link>
        </div>
      </section>
    </main>
  );
}
