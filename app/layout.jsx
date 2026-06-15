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
        <Link href="/#reel" className="nav-hide">Highlight Reel</Link>
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
              <Link href="/#reel">Highlight Reel</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
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
