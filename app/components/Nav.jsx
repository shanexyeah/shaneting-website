'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SocialLinks from './SocialLinks';

const LINKS = [
  { href: '/keynotes', label: 'Keynotes' },
  { href: '/talks', label: 'Talks' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => { if (e.key === 'Escape') closeMenu(); };
    // The menu doesn't exist on desktop, so widening the window must release the scroll lock
    const desktop = window.matchMedia('(min-width: 769px)');
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', closeMenu);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', closeMenu);
    };
  }, [menuOpen]);
  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <Link href="/" className="nav-logo" onClick={closeMenu}>Shane Ting</Link>
        <div className="nav-links">
          {LINKS.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        </div>
        <Link href="/contact" className="nav-cta">Check availability</Link>
        <button
          type="button"
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <div className="mobile-menu-links">
          {LINKS.map((l) => <Link key={l.href} href={l.href} onClick={closeMenu}>{l.label}</Link>)}
        </div>
        <div className="mobile-menu-socials">
          <SocialLinks />
        </div>
      </div>
    </>
  );
}
