# Optional church background footage

There was no video file among the supplied repository assets, and we have not downloaded third-party footage. The homepage therefore keeps a low-data animated gradient fallback instead of claiming to use a real video.

When the church has footage it owns or is licensed to use:

1. Export a brief, silent loop (roughly 8–15 seconds) in MP4/H.264 and/or WebM. Compress it for mobile data; avoid a large 4K file.
2. Add the video as `public/media/hero.mp4` (and optionally `hero.webm`) and a small poster image as `public/media/hero-poster.jpg`.
3. In `src/App.jsx`, place this as the first child inside the hero `<section>` (the section in `HomePage`) and give it `aria-hidden="true"`:

```jsx
<video className="hero-video" autoPlay muted loop playsInline poster="/media/hero-poster.jpg" preload="none" aria-hidden="true">
  <source src="/media/hero.webm" type="video/webm" />
  <source src="/media/hero.mp4" type="video/mp4" />
</video>
```

4. Add this to `src/index.css` so the footage sits behind the hero copy. The existing cinematic color overlays remain on top and continue to improve text contrast:

```css
.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: .58;
}
```

For visitors who prefer reduced motion, consider conditionally disabling autoplay; the poster and current animated-gradient treatment provide a fallback. Only publish footage the church owns or has permission to use.
