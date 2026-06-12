import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>
            Every setback carries the seed of your <em>next breakthrough</em>
          </h1>
          <p>
            Shane Ting is a keynote speaker who helps audiences turn obstacles
            into momentum — through stories that stay with them long after the
            applause ends.
          </p>
          <Link href="/contact" className="btn">
            Book Shane to Speak
          </Link>
        </div>
      </section>

      {/* Highlight reel */}
      <section className="section-dark" id="reel">
        <div className="container">
          <p className="eyebrow center">Watch</p>
          <h2 className="section-title center">Highlight Reel</h2>
          <div className="reel-frame">
            {/*
              When your reel is ready, replace this placeholder with an embed:
              <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Shane Ting highlight reel" allowFullScreen />
            */}
            <div className="play-circle">▶</div>
            <p className="reel-placeholder">Highlight reel coming soon</p>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section>
        <div className="container center">
          <p className="statement">
            “Resilience isn’t something you’re born with — it’s something you
            build, one honest story at a time.”
          </p>
        </div>
      </section>

      {/* Speaking topics */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow center">Keynotes</p>
          <h2 className="section-title center">Speaking Topics</h2>
          <div className="topics">
            <div className="topic-card">
              <h3>Turning Setbacks Into Momentum</h3>
              <p>
                A signature keynote on reframing failure — how the moments that
                break us are often the ones that build us.
              </p>
            </div>
            <div className="topic-card">
              <h3>The Courage to Begin Again</h3>
              <p>
                For audiences navigating change: practical tools for starting
                over with clarity and confidence.
              </p>
            </div>
            <div className="topic-card">
              <h3>Owning Your Story</h3>
              <p>
                Why the stories we tell ourselves shape everything — and how to
                rewrite the ones holding you back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-dark">
        <div className="container">
          <p className="eyebrow center">What Audiences Say</p>
          <h2 className="section-title center">Real Reactions</h2>
          <div className="quotes">
            <div className="quote">
              “Shane had the entire room leaning in. Weeks later, our team is
              still quoting his talk.”
              <p className="quote-attr">— Event Organizer, [Conference Name]</p>
            </div>
            <div className="quote">
              “One of the most authentic speakers we have ever hosted. Honest,
              funny, and deeply moving.”
              <p className="quote-attr">— Attendee, [Event Name]</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container center">
          <h2 className="section-title">
            Ready to bring this energy to <em>your stage?</em>
          </h2>
          <Link href="/contact" className="btn">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
