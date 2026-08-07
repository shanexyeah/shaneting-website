'use client';
import './globals.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <Link href="/" className="nav-logo">Shane Ting</Link>
      <div className="nav-links">
        <Link href="/talks" className="nav-hide">Talks</Link>
        <Link href="/about" className="nav-hide">About</Link>
        <Link href="/contact" className="nav-cta">Book Shane</Link>
      </div>
    </nav>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Shane Ting | Keynote Speaker</title>
        <meta name="description" content="Shane Ting is a motivational keynote speaker helping audiences turn setbacks into momentum. Book Shane for your next conference or event." />
      </head>
      <body>
        <Nav />
        {children}
        <footer className="footer">
          <div className="footer-inner">
            <Link href="/" className="footer-logo">Shane Ting</Link>
            <div className="footer-links">
              <Link href="/talks">Talks</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="footer-socials">
              <a href="https://instagram.com/shanexyeah" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://tiktok.com/@shanexyeah" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
              </a>
              <a href="https://youtube.com/@ShaneTing24" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.2.7 11.3v2c0 2.1.3 4.3.3 4.3s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.5 21.8 12 21.8 12 21.8s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.3v-2C23.3 9.2 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Shane Ting</p>
            <p><a href="mailto:shanexyeah@gmail.com" style={{color:'rgba(255,255,255,0.4)'}}>shanexyeah@gmail.com</a></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
