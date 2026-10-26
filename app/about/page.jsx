import Link from 'next/link';

export const metadata = {
  title: 'About Shane Ting | TEDx Speaker',
  description: 'Shane Ting wasn\'t always confident. From the piano to the TEDx stage, and learning to take action before feeling ready.',
};

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>I wasn&apos;t always <em>confident.</em></h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-prose">
            <p className="about-lead">
              In fact, for much of my life, I was the complete opposite.
            </p>
            <p>
              Growing up, I was shy, struggled to make friends, and constantly
              worried about what other people thought of me.
            </p>
            <p>
              I knew what it felt like to want to say something but stay silent.
              To want to put myself out there but hold back. To let the fear of
              being judged make decisions for me.
            </p>
            <p>
              And for a long time, I thought confidence was something other
              people were simply born with.
            </p>

            <h2>Everything changed when I started taking action.</h2>
            <p>Over time, I began to realise something.</p>
            <p>
              I didn&apos;t need to wait until I felt confident to do the things
              that scared me. I needed to do those things to build confidence.
            </p>
            <p>
              So I started putting myself in situations that made me
              uncomfortable. I practised talking to strangers, challenged myself
              socially, studied communication, and gradually began doing things
              I once thought were impossible.
            </p>
            <p>
              It wasn&apos;t an overnight transformation. And even today, I still
              experience fear.
            </p>
            <p>
              But I learnt that courage isn&apos;t about eliminating fear. It&apos;s
              about taking action despite it.
            </p>

            <h2>From the piano to the TEDx stage.</h2>
            <p>
              Music has been a huge part of my life. I&apos;ve played piano since
              childhood, and what started as a personal passion eventually became
              a way to connect with people around the world.
            </p>
            <p>
              Through creating content, performing, and speaking, I&apos;ve had
              countless opportunities to practise the very thing I once feared
              most: putting myself out there.
            </p>
            <p>
              Today, I&apos;ve delivered two TEDx talks, spoken to students and
              audiences across Australia, and built a social media community of
              over 200,000 followers.
            </p>
            <p>
              But what matters most to me isn&apos;t the stages I&apos;ve stood on.
            </p>
            <p>
              It&apos;s helping someone else find the courage to take their first
              step.
            </p>

            <h2>Why I speak.</h2>
            <p>
              I believe too many people live their lives holding back.
            </p>
            <p>
              Not because they lack talent, potential, or ambition, but because
              they&apos;re afraid of being judged, rejected, or getting something
              wrong.
            </p>
            <p>
              And I know what that feels like, because I&apos;ve been there.
            </p>
            <p>
              Through my talks and workshops, I help people build confidence,
              overcome their fear of judgment, and take courageous action in
              their everyday lives.
            </p>
            <p>
              Because courage doesn&apos;t come before you feel the fear.
            </p>
            <p className="about-close">It comes after you take the action.</p>
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
            <a href="https://www.linkedin.com/in/shane-ting-ab8b6a1b9/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
          </div>
        </div>
      </section>

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
