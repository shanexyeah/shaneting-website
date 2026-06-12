# Shane Ting — Speaker Website

Next.js site with three pages: Home (hero + highlight reel + topics + testimonials), About, and Contact.

## 1. Preview locally (optional)

Requires Node.js 18+ (https://nodejs.org).

```bash
cd "Speaker Website"
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial speaker website"
```

Create an empty repo at https://github.com/new (e.g. `speaker-website`), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/speaker-website.git
git branch -M main
git push -u origin main
```

## 3. Deploy on Vercel

1. Go to https://vercel.com → sign up/in with GitHub.
2. **Add New → Project** → import `speaker-website`.
3. Vercel auto-detects Next.js — click **Deploy**. No settings needed.
4. You'll get a live preview URL like `speaker-website.vercel.app`.

Every future `git push` redeploys automatically.

## 4. Connect shaneting.com (Cloudflare)

1. In Vercel: **Project → Settings → Domains** → add `shaneting.com` and `www.shaneting.com`.
2. In Cloudflare: **shaneting.com → DNS → Records**, add:

   | Type  | Name | Content              | Proxy    |
   |-------|------|----------------------|----------|
   | A     | @    | 76.76.21.21          | DNS only |
   | CNAME | www  | cname.vercel-dns.com | DNS only |

   ⚠️ Set both to **DNS only** (grey cloud, not orange) so Vercel can issue its SSL certificate. If Vercel shows different values when you add the domain, use those instead.
3. Wait a few minutes — Vercel will show both domains as verified with HTTPS.

## 5. Customize content

- **Highlight reel**: in `app/page.jsx`, replace the placeholder in the `#reel` section with your YouTube/Vimeo iframe embed (instructions in the code comment).
- **About**: `app/about/page.jsx` — fill in the bracketed `[...]` placeholders with your real story, and swap the photo placeholder for an image (`/public/shane.jpg` → `<img src="/shane.jpg" />`).
- **Testimonials**: `app/page.jsx` — replace with real quotes.
- **Contact form**: `app/contact/page.jsx` — create a free form at https://formspree.io and replace `YOUR_FORM_ID`. Until then, the email link works.
- **Colors/fonts**: edit the variables at the top of `app/globals.css`.
