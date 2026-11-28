export const TAGLINE = 'TEDx Speaker | Performance Under Pressure';

// Builds a page's title, meta description and social share tags from one title and description.
// Next.js replaces openGraph/twitter wholesale per page, so every page needs the full set.
export function pageMeta({ title, description, path = '/' }) {
  const images = [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Shane Ting playing piano on the TEDxYarram stage' }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: 'Shane Ting', locale: 'en_AU', type: 'website', images },
    twitter: { card: 'summary_large_image', title, description, images: images.map((i) => i.url) },
  };
}
