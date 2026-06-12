import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Shane Ting | Keynote Speaker',
  description:
    'Shane Ting is a motivational keynote speaker helping audiences turn setbacks into momentum. Book Shane for your next conference, summit, or team event.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="nav-logo">
              Shane Ting
            </Link>
            <div className="nav-links">
              <Link href="/#reel">Highlight Reel</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="container">
            <div className="nav-links">
              <Link href="/#reel">Highlight Reel</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <p>
              © {new Date().getFullYear()} Shane Ting ·{' '}
              <a href="mailto:shaneting02@gmail.com">shaneting02@gmail.com</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
