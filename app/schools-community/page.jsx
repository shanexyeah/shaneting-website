import Link from 'next/link';
import TestimonialsSection from '../components/TestimonialsSection';
import { TAGLINE, pageMeta } from '../lib/seo';

// Keeps the original courage message for schools and community clubs, off the main corporate pitch.
export const metadata = pageMeta({
  title: `Schools & Community | Shane Ting | ${TAGLINE}`,
  description: 'Talks for schools, Rotary, Lions and community clubs. Shane Ting on taking action before you feel ready.',
  path: '/schools-community',
});

const TALKS = [
  { id: 'yuuRUg8szmM', title: 'Knox Grammar School', meta: '360 Year 8 students: full keynote' },
  { id: 'NDJPY77ACyA', title: 'TARA Anglican School for Girls', meta: '120 Year 9 students: full keynote' },
  { id: '-yhiVtXc1xE', title: 'Notion Market Sydney', meta: 'How to Be Courageous: full talk' },
];

export default function SchoolsCommunity() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Schools &amp; Community</p>
          <h1>Don&apos;t wait for <em>courage.</em></h1>
          <p className="page-hero-sub">
            Talks for schools and year-group programs, and for Rotary, Lions and
            community clubs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-prose">
            <p className="about-lead">
              Too many people hold back. Not because they lack talent, potential
              or ambition, but because they&apos;re afraid of being judged,
              rejected or getting something wrong.
            </p>
            <p>
              I know what that feels like. Growing up, I was shy, struggled to
              make friends, and constantly worried about what other people
              thought of me.
            </p>
            <p>
              What changed everything was learning that courage isn&apos;t about
              eliminating fear. It&apos;s about taking action despite it.
            </p>
            <h2>Fear + Action = Courage</h2>
            <p>
              You don&apos;t need to wait until you feel confident to do the
              things that scare you. You do those things to build confidence.
            </p>
            <p>Because courage doesn&apos;t come before you feel the fear.</p>
            <p className="about-close">It comes after you take the action.</p>
          </div>
        </div>
      </section>

      {TALKS.map((talk, i) => (
        <section key={talk.id} className={`video-section${i > 0 ? ' talk-section' : ''}`}>
          <div className="container">
            <p className="eyebrow" style={{textAlign:'center'}}>Live Talk</p>
            <h2 className="section-title" style={{textAlign:'center', color:'#fff', marginBottom:'12px'}}>
              {talk.title}
            </h2>
            <p className="talk-meta">{talk.meta}</p>
            <div className="video-wrap">
              <iframe
                src={`https://www.youtube.com/embed/${talk.id}`}
                title={`Shane Ting | ${talk.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      ))}

      <TestimonialsSection
        heading={<>What schools<br />are saying</>}
        names={['Margie Raymond', 'TARA Anglican School']}
      />

      <section className="cta-band">
        <h2 className="display-2">Book Shane for your school or club</h2>
        <p>Talks and workshops for students and community groups.</p>
        <Link href="/contact" className="btn btn-dark">Check availability</Link>
      </section>
    </main>
  );
}
