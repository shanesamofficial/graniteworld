# Granite World Website

Modern marketing website for Granite World using React, TypeScript, Vite, and Tailwind CSS.

## Features
- Responsive hero, navigation, and mobile menu
- Animated sections (Framer Motion)
- Product categories, gallery grid, about page, and contact form
- Dark modern stone-inspired aesthetic
- TypeScript strict mode

## Getting Started

### Install Dependencies
```powershell
npm install
```

### Run Dev Server
```powershell
npm run dev
```

Then open the URL shown (default: http://localhost:5173).

### Build for Production
```powershell
npm run build
```

### Preview Production Build
```powershell
npm run preview
```

## Next Ideas
- Add CMS (Sanity/Contentful) for gallery & products
- Integrate real contact form backend (Formspree / serverless)
- Add SEO enhancements & social meta tags
- Add testimonial slider & FAQ
- Deploy to Netlify, Vercel, or Azure Static Web Apps

## Live Google Reviews (Implemented)
The `Reviews` component fetches data from a Netlify serverless function `netlify/functions/reviews.ts`.

Steps:
1. Copy `.env.example` to `.env` (optional for local env vars).
2. In Netlify project settings add environment variables:
	- `GOOGLE_PLACES_API_KEY` (Server key, restricted to Places Details API)
	- `GOOGLE_PLACE_ID` (Your business place ID)
3. Run locally with Netlify dev to proxy the function:
```powershell
npm install
npm run dev:full
```
4. Component will fallback to sample reviews if API fails.

Security: Never expose unrestricted API keys client-side. Keep them only in Netlify env vars.
