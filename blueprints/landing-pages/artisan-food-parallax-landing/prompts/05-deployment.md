# Prompt 05: Deployment

## Context

This prompt helps you prepare the project for production deployment. Since this is a static site (HTML + CSS + JS with no build step), deployment is straightforward — even simpler than the Nike blueprint since there are no 242 frame images to deal with.

## The Prompt

```
Help me deploy this static website (HTML, CSS, JS with image assets) to a hosting platform. The project has no build step — it's vanilla HTML/CSS/JS.

Project structure:
- index.html (entry point)
- style.css
- app.js
- assets/ (product images and hero images, ~5-10 MB total)

Requirements:
1. The site should load quickly with optimized images
2. Assets should be served via CDN
3. I want a custom domain option
4. HTTPS should be enabled by default

Please provide deployment instructions for:

**Option A: Vercel**
- Step-by-step using Vercel CLI
- Include vercel.json configuration for caching headers on the assets/ directory

**Option B: Netlify**
- Step-by-step using Netlify drop (drag and drop)
- Include _headers file for cache-control on static assets

**Option C: GitHub Pages**
- Step-by-step using GitHub repository settings
- Note any limitations

Also suggest:
- Image optimization tips (converting to WebP, compression, responsive images)
- How to add lazy loading for below-the-fold images
- How to add Open Graph meta tags for social sharing (food brand preview image)
- How to add a custom domain on each platform
```

## Expected Output

Deployment instructions for 3 platforms, plus optimization and social sharing tips.

## What to Check

- [ ] Site loads correctly on the deployed URL
- [ ] All product images display correctly
- [ ] Parallax effect works on the live site
- [ ] Smooth scrolling works (Lenis)
- [ ] Reveal animations trigger on scroll
- [ ] HTTPS is active
- [ ] No mixed content warnings in the browser console
- [ ] Site looks correct on mobile devices
- [ ] Open Graph tags generate a proper preview when sharing the URL

## Common Issues

- **Images not loading on deploy**: Verify image paths are relative (e.g., `assets/product-1.jpg`, not `/Users/name/project/assets/product-1.jpg`)
- **Slow initial load**: Convert images to WebP and ensure `loading="lazy"` is on below-the-fold images
- **Parallax not working on mobile Safari**: GSAP ScrollTrigger works on mobile, but verify with real device testing. If issues arise, consider disabling parallax on mobile with a media query check in JS
- **Social preview not showing**: Open Graph meta tags need absolute URLs for images on the deployed domain
- **Font loading flash**: The `preconnect` hints in HTML help, but consider adding `font-display: swap` if you see a flash of unstyled text
