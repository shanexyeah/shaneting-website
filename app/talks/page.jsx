import Link from 'next/link';
import { TAGLINE, pageMeta } from '../lib/seo';

export const metadata = pageMeta({
  title: `Talks | Shane Ting | ${TAGLINE}`,
  description: 'Watch Shane Ting live: full talks from the TEDx stage, schools and workshops.',
  path: '/talks',
});

// Add the TEDxYarram talk (with the live piano requests) here once it's on YouTube
const TALKS = [
  {
    id: 'WhESr1RYXNw',
    eyebrow: 'TEDx Talk',
    title: 'Shane on the TED stage',
    meta: 'TEDx: full talk',
  },
  {
    id: 'yuuRUg8szmM',
    eyebrow: 'Live Talk',
    title: 'Knox Grammar School',
    meta: '360 Year 8 students: full keynote',
  },
  {
    id: 'NDJPY77ACyA',
    eyebrow: 'Live Talk',
    title: 'TARA Anglican School for Girls',
    meta: '120 Year 9 students: full keynote',
  },
  {
    id: '-yhiVtXc1xE',
    eyebrow: 'Live Talk',
    title: 'Notion Market Sydney',
    meta: 'How to Be Courageous: full talk',
  },
];

export default function Talks() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Talks</p>
          <h1>Watch Shane<br /><em>on stage.</em></h1>
        </div>
      </section>

      {TALKS.map((talk, i) => (
        <section
          key={talk.id}
          className={`video-section${i > 0 ? ' talk-section' : ''}`}
          id={talk.id}
        >
          <div className="container">
            <p className="eyebrow" style={{textAlign:'center'}}>{talk.eyebrow}</p>
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

      <section className="section section-light">
        <div className="container" style={{textAlign:'center'}}>
          <p className="eyebrow">Work with Shane</p>
          <h2 className="section-title">Seen enough?</h2>
          <Link href="/contact" className="btn btn-dark">Check availability</Link>
        </div>
      </section>
    </main>
  );
}
