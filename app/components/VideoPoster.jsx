'use client';
import { useState } from 'react';

// Shows a still with a "Watch Video" pill; swaps in the YouTube player on click.
export default function VideoPoster({ id, title, poster }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="video-poster">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className="video-poster-btn" onClick={() => setPlaying(true)} aria-label={`Play ${title}`}>
          <img src={poster || `https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="" />
          <span className="watch-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4l14 8-14 8z" /></svg>
            Watch Video
          </span>
        </button>
      )}
    </div>
  );
}
