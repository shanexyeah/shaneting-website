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
          <div className="about-grid">
            <div className="about-photo">
              {/*
                Add your photo: place about.jpg in /public and swap this for:
                <img src="/about.jpg" alt="Shane Ting on stage" />
              */}
              <div className="about-photo-placeholder">Your photo here</div>
            </div>
            <div className="about-text">
              <p className="eyebrow">My story</p>
              <h2>Hi, I'm Shane.</h2>
              <p>
                {/* Replace everything below with your real story */}
                I know what it means to start over. After [your defining
                setback], I discovered that the most powerful thing I had
                wasn't a credential — it was my story.
              </p>
              <p>
                I spent [time period] [what you did — rebuilding, reflecting,
                learning], and along the way I realised that the same
                principles that got me through the hardest chapter of my life
                were the ones that audiences most needed to hear.
              </p>
              <p>
                Today I share those lessons on stages around the world —
                helping leaders, teams, and individuals see that setbacks
                aren't the end of the story. They're the plot twist that makes
                it worth telling.
              </p>
              <p>
                When I'm not on stage, you'll find me [your hobbies].
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="quote-strip">
        <blockquote>
          "Your story isn't something to hide — it's the thing that makes
          you impossible to forget."
        </blockquote>
        <cite>— Shane Ting</cite>
      </div>

      <section className="section section-light">
        <div className="container" style={{textAlign:'center'}}>
          <p className="eyebrow">Work with Shane</p>
          <h2 className="section-title">Let's make your event unforgettable.</h2>
          <Link href="/contact" className="btn btn-dark">Get in Touch →</Link>
        </div>
      </section>
    </main>
  );
}
