# Granite World Website

Modern marketing site for Granite World built with React + TypeScript + Vite + Tailwind CSS.

## Features
- Responsive layout & mobile slide-in navigation
- Hero with granite countertop background
- Services, Products, Gallery, About, Contact (WhatsApp form)
- Live Google Reviews via Cloudflare Pages Function (fallback sample)
- Floating WhatsApp quick-contact button
- SEO LocalBusiness JSON-LD

## Scripts
```powershell
npm install      # install deps
npm run dev      # start dev server (Vite)
npm run build    # production build (dist/)
npm run preview  # preview dist locally
npm run pages:preview # build then preview with Cloudflare Pages (requires Wrangler)
```

## Contact Form -> WhatsApp
Submitting the form opens WhatsApp with structured message:
```
Granite World Inquiry
--------------------------
Name: <name>
Mobile: <number>
Project Type: <type>
Material: <material>
Details: <details>
--------------------------
Please respond with next steps.
```

## Google Reviews Function
File: `api/reviews.js` (Vercel Serverless Functions)

Environment Variables (Vercel Project Settings -> Environment Variables):
- `GOOGLE_PLACES_API_KEY` (restrict to Places Details API)
- `GOOGLE_PLACE_ID`

Client fetches `/reviews` (rewrites to `/api/reviews`) and falls back to static sample if unavailable.

Local test:
```powershell
npm run dev
# Visit http://localhost:5173/reviews to test API
```

## Deploy to Vercel
1. Push repo to Git (GitHub).
2. Vercel Dashboard -> New Project -> Import from repo.
3. Framework: Other, Build command: `npm run build`, Output: `dist`
4. Add environment variables in Project Settings.
5. Deploy & verify `/reviews` and site pages.
6. Add custom domain (optional).

## Customization Ideas
- Add multiple gallery categories
- Store form submissions in a KV / D1 or external CRM
- Add language switch (English / Malayalam)
- Image optimization (Cloudflare Images / <img loading strategies>)
- Basic analytics (Cloudflare Web Analytics)

## License
Proprietary – internal business site for Granite World.

