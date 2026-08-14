import Link from 'next/link';

export const metadata = {
  title: 'Talks | Shane Ting',
  description: 'Watch Shane Ting\'s keynote talks, from his TEDx stage to school and corporate audiences.',
};

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
    logo: '/knox-logo.jpg',
  },
  {
    id: 'NDJPY77ACyA',
    eyebrow: 'Live Talk',
    title: 'TARA Anglican School for Girls',
    meta: '120 Year 9 students: full keynote',
    logo: '/tara-logo.png',
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
            {talk.logo && (
              <div className="talk-logo">
                <img src={talk.logo} alt={`${talk.title} logo`} />
              </div>
            )}
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
          <h2 className="section-title">Let&apos;s make your event unforgettable.</h2>
          <Link href="/contact" className="btn btn-dark">Get in Touch →</Link>
        </div>
      </section>
    </main>
  );
}
