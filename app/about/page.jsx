import Link from 'next/link';

export const metadata = {
  title: 'About | Shane Ting',
  description: 'Learn about Shane Ting — motivational keynote speaker.',
};

export default function About() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="two-col">
            <div className="photo-placeholder">Your photo here</div>
            <div>
              <p className="eyebrow">Meet Shane</p>
              <h2 className="section-title">
                From rock bottom to <em>center stage</em>
              </h2>
              <p style={{ marginBottom: 18 }}>
                {/* Replace with your real story */}
                Shane Ting knows what it means to start over. After [your
                defining setback — job loss, failure, illness, reinvention],
                Shane discovered that the hardest chapters of our lives often
                hold our most powerful lessons.
              </p>
              <p style={{ marginBottom: 18 }}>
                Today, Shane shares those lessons with audiences at
                conferences, companies, and schools — blending personal
                storytelling with practical takeaways people can use the moment
                they leave the room.
              </p>
              <p style={{ marginBottom: 32 }}>
                When he&apos;s not on stage, you&apos;ll find Shane [your
                hobbies — hiking, cooking, mentoring, etc.].
              </p>
              <Link href="/contact" className="btn-outline btn">
                Work With Shane
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container center">
          <p className="eyebrow">The Mission</p>
          <p className="statement">
            To help every audience member walk out believing their story
            isn&apos;t over — it&apos;s just getting started.
          </p>
        </div>
      </section>
    </main>
  );
}
