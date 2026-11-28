import './globals.css';
import Link from 'next/link';
import Nav from './components/Nav';
import SocialLinks from './components/SocialLinks';
import { TAGLINE, pageMeta } from './lib/seo';

export const metadata = {
  metadataBase: new URL('https://shaneting.com'),
  ...pageMeta({
    title: `Shane Ting | ${TAGLINE}`,
    description: 'Australian TEDx speaker Shane Ting helps people perform under pressure: the pitch, the hard conversation, the moment you\'re not sure you\'re ready.',
  }),
};

export const viewport = { themeColor: '#000000' };

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body>
        <Nav />
        {children}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/keynotes">Keynotes</Link>
              <Link href="/talks">Talks</Link>
              <Link href="/about">About</Link>
              <Link href="/schools-community">Schools &amp; Community</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="footer-cards">
              <Link href="/contact" className="footer-card">
                <span className="footer-card-title">Book Shane <Chevron /></span>
                <span>Keynotes and workshops on performing under pressure, for conferences, companies, leaders and graduate programs.</span>
              </Link>
              <a href="mailto:shane@shaneting.com" className="footer-card">
                <span className="footer-card-title">Email <Chevron /></span>
                <span>shane@shaneting.com</span>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-brand">
              <Link href="/" className="footer-logo">Shane Ting</Link>
              <p className="footer-tagline">{TAGLINE}</p>
            </div>
            <p>© {new Date().getFullYear()} Shane Ting. All rights reserved.</p>
            <div className="footer-socials">
              <SocialLinks />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
