import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import { findTestimonial } from '../components/TestimonialsSection';
import { TAGLINE, pageMeta } from '../lib/seo';

export const metadata = pageMeta({
  title: `Keynotes | Shane Ting | ${TAGLINE}`,
  description: 'Four keynotes on performing under pressure, for conferences, sales and client-facing teams, leaders and graduate programs.',
  path: '/keynotes',
});

const KEYNOTES = [
  {
    title: 'Play the First Note',
    subtitle: 'Performing Under Pressure',
    audience: 'Conferences, professional associations, all-hands',
    problem: 'Big calls rarely come with perfect information. People stall, over-prepare or hand the moment to someone else.',
    moments: ['Making the call without all the data', 'Presenting to the board', 'Leading through change'],
    quote: 'Prof Lee Baumgartner',
    image: { src: '/keynote-first-note.jpg', alt: 'Shane Ting speaking on the TEDxYarram stage' },
  },
  {
    title: 'The Ask',
    subtitle: 'Backing Yourself in Front of Clients',
    audience: 'Sales, BD and client-facing teams, business networks, chambers of commerce',
    problem: 'Deals are lost in the moments people hesitate: the call not made, the discount offered before anyone asked, the room worked from the edges.',
    moments: ['The cold call', 'The price conversation', 'Walking up to a stranger at a networking event'],
    quote: 'Tommy',
    image: { src: '/keynote-the-ask.jpg', alt: 'Shane Ting speaking on stage' },
  },
  {
    title: 'Say It in the Room',
    audience: 'Leaders, HR and people & culture teams building a speak-up culture',
    problem: 'Most problems are known by someone in the room long before anyone raises them. Psychological safety is the policy. Saying it out loud is the behaviour.',
    moments: ['Raising a risk early', 'Challenging a senior colleague', 'Giving honest feedback'],
    image: { src: '/keynote-say-it.jpg', alt: 'Shane Ting speaking to a full room of workshop participants' },
  },
  {
    title: 'Your First Note',
    subtitle: 'Backing Yourself Early',
    audience: 'Graduate programs and early-career cohorts',
    problem: 'Graduates often go quiet in their first year, waiting until they feel qualified. That\'s when the habit sets.',
    moments: ['Asking the question everyone\'s thinking', 'Presenting to a partner or director', 'Owning a mistake early'],
    image: { src: '/keynote-your-first-note.jpg', alt: 'Shane Ting on the TEDxYarram stage in front of a slide reading FEAR' },
  },
];

export default function Keynotes() {
  return (
    <main>
      <ScrollReveal />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Keynotes</p>
          <h1>Four talks. One skill: <em>performing under pressure.</em></h1>
          <p className="page-hero-sub">
            Every keynote runs on the same method, Fear + Action: you don&apos;t
            wait to feel ready, you act and the confidence follows. Each one is
            built around the pressure moments your people actually face.
          </p>
          <p className="page-hero-meta">60-minute keynotes. Each is also available as a workshop.</p>
        </div>
      </section>

      <section className="section">
        <div className="container keynote-list">
          {KEYNOTES.map((k, i) => {
            const quote = k.quote && findTestimonial(k.quote);
            return (
              <article className="keynote" key={k.title} data-reveal>
                <div className="keynote-head">
                  <span className="keynote-num">0{i + 1}</span>
                  <h2>{k.title}</h2>
                  {k.subtitle && <p className="keynote-subtitle">{k.subtitle}</p>}
                  <p className="keynote-audience"><span>For</span>{k.audience}</p>
                  <img className="keynote-img" src={k.image.src} alt={k.image.alt} loading="lazy" />
                </div>
                <div className="keynote-body">
                  <h3>The problem</h3>
                  <p>{k.problem}</p>
                  <h3>The pressure moments</h3>
                  <ul className="keynote-moments">
                    {k.moments.map((m) => <li key={m}>{m}</li>)}
                  </ul>
                  {quote && (
                    <figure className="keynote-quote">
                      <blockquote>&ldquo;{quote.quote.split('\n\n')[0]}&rdquo;</blockquote>
                      <figcaption>{quote.name}, {quote.role}</figcaption>
                    </figure>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="aside-band">
        <div className="container">
          <p>
            Booking for a school, Rotary, Lions or community club?{' '}
            <Link href="/schools-community" className="text-link">See Schools &amp; Community →</Link>
          </p>
        </div>
      </section>

      <section className="cta-band">
        <h2 className="display-2">Not sure which fits?</h2>
        <p>Tell me about your audience and I&apos;ll tell you which one works.</p>
        <Link href="/contact" className="btn btn-dark">Check availability</Link>
      </section>
    </main>
  );
}
