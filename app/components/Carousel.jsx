'use client';
import { useRef } from 'react';

function Chevron({ dir }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === 'prev' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
    </svg>
  );
}

// Arrow buttons that page a horizontal scroll track. Pass the arrows' placement via `arrowsClass`.
export default function Carousel({ children, trackClass = '', arrowsClass = '', label }) {
  const track = useRef(null);
  const page = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 12 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };
  return (
    <>
      <div className={`carousel-arrows ${arrowsClass}`}>
        <button type="button" className="chevron-btn" aria-label={`Previous ${label}`} onClick={() => page(-1)}><Chevron dir="prev" /></button>
        <button type="button" className="chevron-btn" aria-label={`Next ${label}`} onClick={() => page(1)}><Chevron dir="next" /></button>
      </div>
      <div ref={track} className={`carousel-track ${trackClass}`}>
        {children}
      </div>
    </>
  );
}
