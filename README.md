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

1. Push this repository to GitHub (already connected if you are reading this there).
2. In Vercel, choose **Add New → Project**, import `lordzorwa/Christ-Emancipation-Assembly`, and authorize GitHub if prompted.
3. Keep the detected Vite settings: build command `npm run build`, output directory `dist`, install command `npm install`.
4. Select **Deploy**. Future pushes to `main` deploy automatically.

The included `vercel.json` sends app routes to the Vite SPA so links such as `/bible-reader` work on direct visits and refreshes.

## Deploy to Netlify

1. In Netlify, choose **Add new site → Import an existing project** and select this GitHub repository.
2. Set build command to `npm run build` and publish directory to `dist` (also defined in `netlify.toml`).
3. Select **Deploy site**. Netlify will rebuild after each push.

The included `netlify.toml` provides the SPA fallback for client-side routes.

## Cinematic hero video

No original or licensed church footage was included with the supplied assets, so the hero currently uses a lightweight animated gradient, light, and particle treatment rather than embedding an unlicensed stock video. To add video later, see [`public/media/README.md`](public/media/README.md). Keep a compressed, muted, loopable MP4/WebM short (ideally 5–12 MB or less) and a poster image so mobile visitors can use the fallback without downloading the video.

## Church content to confirm before launch

- Replace the sample Gwarinpa address and map query with the church's verified address.
- Update weekly service times in `src/App.jsx` (`weeklyActivities` and `sermonSchedule`).
- Set the actual YouTube Live embed/channel URL and live status; the current stream URL is a placeholder.
- The Bible API currently provides reliable KJV/WEB coverage. Other translation options may require an API key/license and may not be available at the public endpoint.
- The contact form is a front-end demonstration. Connect a form service (for example Netlify Forms, Formspree, or a church-owned backend) before relying on it to receive messages.
- The supplied logo image was not present as a repository file; `public/logo.svg` is an illustrative vector placeholder. Replace it with the original high-resolution logo before publishing if available.
