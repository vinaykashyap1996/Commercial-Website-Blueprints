# Prompt 06: Deployment

## Context

This prompt helps you prepare the project for production deployment. Since this is a static site (HTML + CSS + JS with no build step), deployment is straightforward.

## The Prompt

```
Help me deploy this static website (HTML, CSS, JS with image assets) to a hosting platform. The project has no build step — it's vanilla HTML/CSS/JS.

Project structure:
- index.html (entry point)
- style.css
- app.js
- frames/ (242 JPG images, ~15-20 MB total)
- assets/ (6 product images in AVIF format)

Requirements:
1. The site should load quickly despite having 242 frame images
2. Assets should be served via CDN
3. I want a custom domain option
4. HTTPS should be enabled by default

Please provide deployment instructions for:

**Option A: Vercel**
- Step-by-step using Vercel CLI
- Include vercel.json configuration for caching headers on the frames/ directory

**Option B: Netlify**
- Step-by-step using Netlify drop (drag and drop)
- Include _headers file for cache-control on static assets

**Option C: GitHub Pages**
- Step-by-step using GitHub repository settings
- Note any limitations (file size, bandwidth)

Also suggest:
- Image optimization tips (converting frames to WebP, compression)
- Performance considerations for the 242-frame preload
- How to add a custom domain on each platform
```

## Expected Output

Deployment instructions for 3 platforms, plus optimization tips.

## What to Check

- [ ] Site loads correctly on the deployed URL
- [ ] All 242 frames load and the scroll animation works
- [ ] Product images in the carousel display correctly
- [ ] Preloader shows and transitions smoothly
- [ ] HTTPS is active
- [ ] No mixed content warnings in the browser console
- [ ] Site works on mobile devices

## Common Issues

- **Large deploy size**: The 242 frames are ~15-20 MB. This is fine for Vercel and Netlify (both have generous limits). For GitHub Pages, ensure your repo is under the 1 GB recommended size.
- **Slow initial load**: The preloader handles this gracefully, but consider converting JPGs to WebP (30-40% smaller) for faster loads.
- **CORS errors**: If frames are served from a different domain, you may need CORS headers. This shouldn't be an issue when everything is in the same project folder.
- **Cache invalidation**: Set long cache headers on the frames/ directory since these files never change. Suggested: `Cache-Control: public, max-age=31536000, immutable`
