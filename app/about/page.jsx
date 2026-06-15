import Link from 'next/link';

export const metadata = {
  title: 'About Shane Ting | Keynote Speaker',
  description: 'The story behind Shane Ting — from rock bottom to center stage.',
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
                fractured my back. I was shattered &mdash; so I did the only
                thing I knew how to do. I pushed harder.
              </p>
              <p>
                It didn&apos;t work. I never got back to the level I&apos;d been at,
                and slowly the dream faded &mdash; and my sense of who I was went
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
                I&apos;d grown up playing piano too &mdash; I&apos;d even reached the
                highest level in Australia before burning out and swearing I&apos;d
                never touch one again. But at my lowest point, I bought a cheap
                keyboard and, for the first time in two years, played the music
                I actually wanted to play. I started posting it online. Music
                became the first time I expressed myself without needing to speak.
              </p>
              <p>
                That became a habit, then a craft. I arranged my own sheet music,
                performed live, and slowly learned to put myself out there.
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
                own version of rock bottom &mdash; because the hardest chapter of my
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

      <div className="quote-strip">
        <blockquote>
          &ldquo;Your story isn&rsquo;t something to hide. It&rsquo;s your superpower.&rdquo;
        </blockquote>
        <cite>— Shane Ting</cite>
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
