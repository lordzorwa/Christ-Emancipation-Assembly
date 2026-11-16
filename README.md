# Christ Emancipation Assembly

Cinematic, mobile-first church website built with React, Vite, Tailwind CSS, and Framer Motion.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Create a production build with `npm run build`; Vite writes it to `dist/`.

## Deploy to Vercel

Import `lordzorwa/Christ-Emancipation-Assembly` in Vercel. Use build command `npm run build` and output directory `dist`. The included `vercel.json` sends app routes to the Vite SPA so direct visits and refreshes work. Future pushes to `main` deploy automatically after project setup.

## Deploy to Netlify

Import this GitHub repository in Netlify. Use build command `npm run build` and publish directory `dist` (also defined in `netlify.toml`). The included redirect config supports client-side routes.

## Church logo asset

Upload the exact original artwork, unchanged, to `public/cea-logo.png`. The navbar, hero, footer, favicon, and social preview reference this image. See [`public/LOGO-ASSET.md`](public/LOGO-ASSET.md). Chat image attachments do not automatically become repository files, so confirm the file exists in `public/` before deployment.

## Mobile layout

The site includes a compact sticky header and menu, stacked logo-first hero, responsive cards and forms, touch-sized controls, and safe small-screen layouts. Preview at a mobile viewport such as 390 × 844 in browser developer tools.

## Before launch

- Verify the church address and map location: 27B Uyo Street, Rumuomasi, Port Harcourt, Rivers State, Nigeria.
- Confirm weekly service times in `src/App.jsx` (`weeklyActivities` and `sermonSchedule`).
- Set the actual YouTube Live embed/channel URL and live status; the current stream URL is a placeholder.
- The Bible API may not serve all listed translations; some require separate API credentials and licensing.
- Connect the contact form to a service or backend so messages are actually delivered.
- Add church-owned/licensed video footage only; see `public/media/README.md`. The animated gradient fallback remains lightweight for mobile data.
