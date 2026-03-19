# Prompt 05: Polish, Responsive & Deployment

## Context

This prompt adds the final layer of polish: verifying responsive behavior across screen sizes, checking the mobile stacked layout, confirming the footer, and adding any missing micro-interactions.

## The Prompt

```
Review and complete the polish pass for my luxury architectural firm landing page.

The current state:
- index.html has: fixed top nav, fixed side-nav, split-screen main layout with sticky left visuals + scrollable right chapters, 6 content chapters, and a footer
- style.css has: body, .serif-display, visual stage classes, no-scrollbar
- app.js has: Intersection Observer visual swap logic

Make the following additions and fixes:

**1. RESPONSIVE AUDIT — verify these Tailwind patterns are correct:**

Top nav:
- Nav links are `hidden md:flex` (show on md+, hide on mobile)
- "Private Consultation" button remains visible at all sizes

Side nav:
- The <aside> uses `hidden lg:flex` — it only appears on large screens (1024px+)
- <main> uses `lg:pl-20` — offset only when side-nav is visible

Split-screen layout:
- <main> is `flex flex-col md:flex-row` — stacks on mobile, side-by-side on md+
- Left section: `h-[512px]` on mobile (fixed height), `md:h-[calc(100vh-6rem)]` on desktop
- Left section: NO sticky on mobile (`md:sticky md:top-24`)
- Right section: `px-8 md:px-16 lg:px-24` — comfortable reading padding

Chapter typography:
- H1 in chapter-hero: `text-5xl md:text-7xl lg:text-8xl` — scales with screen
- All other H2s: `text-4xl md:text-5xl`

If any of these are missing or wrong, fix them in the HTML.

**2. ADD selection highlight to <body>:**
In the <body> tag, add Tailwind classes: selection:bg-primary-container selection:text-on-primary-container
This gives the luxury gold highlight color when text is selected.

**3. ADD hover transition to nav links:**
Inactive nav links should have: `transition-colors` duration-200 on hover

**4. VERIFY the form accessibility:**
Each <input> and <textarea> must have a matching <label> with the for= attribute pointing to the input's id.
The floating labels in the consultation form use CSS-only animation via Tailwind peer utilities.
Ensure the submit button has type="submit".

**5. PERFORMANCE — add loading="lazy" to non-hero images:**
- visual-hero image: NO lazy loading (it's visible on load)
- visual-philosophy, visual-signature, visual-craft images: add loading="lazy"
- The commission showcase image inside chapter-signature: add loading="lazy"
- The craft image inside chapter-craft: add loading="lazy"

**6. ADD a subtle print style in style.css:**
@media print {
    aside, nav { display: none; }
    main { padding: 0; }
    .md\\:sticky { position: relative; }
}

After making all changes, provide the final complete versions of index.html, style.css, and app.js.
```

## Expected Output

Final polished versions of all three files ready for deployment.

## What to Check Before Deploying

**Desktop (1280px+):**
- [ ] Side nav visible on left
- [ ] Top nav frosted glass with all 3 links visible
- [ ] Split screen: visual stage fills left ~48%, chapters scroll right ~52%
- [ ] Scrolling through chapters triggers left image swaps
- [ ] Grayscale commission image turns to color on hover
- [ ] Location card top-line turns gold on hover
- [ ] Form inputs animate floating labels on focus

**Tablet (768px–1023px):**
- [ ] Side nav hidden (no layout offset)
- [ ] Top nav shows links but no side-nav offset
- [ ] Split screen still applies (md:flex-row)
- [ ] Paddings reduce appropriately

**Mobile (below 768px):**
- [ ] Top nav: brand name + CTA button only (links hidden)
- [ ] Layout stacks: visual stage on top (512px tall), chapters below
- [ ] Visual stage is NOT sticky (scrolls away)
- [ ] Chapter padding is comfortable (px-8)
- [ ] All text scales down gracefully

## Deployment Options

**Option A: Vercel (Recommended for speed)**
```bash
npm install -g vercel
cd your-project-folder
vercel
# Follow prompts — site live in ~60 seconds
```

**Option B: Netlify Drop (No CLI needed)**
1. Go to app.netlify.com/drop
2. Drag the entire project folder onto the page
3. Copy the generated URL — done

**Option C: GitHub Pages**
1. Create a new GitHub repository
2. Push your 3 files (index.html, style.css, app.js) and assets/ folder
3. Settings → Pages → Source: Deploy from main branch, root folder
4. Live at: https://yourusername.github.io/repo-name

## Image Optimization Checklist

Before deploying, optimize your images:
- Convert to `.webp` format (30–50% smaller than JPEG)
- Resize to max 1280px wide (the left panel never exceeds this)
- Target file size: under 200KB per image
- Tools: [Squoosh.app](https://squoosh.app) (free, browser-based) or ImageMagick CLI

```bash
# ImageMagick: convert all JPGs to WebP at 80% quality
for f in assets/*.jpg; do convert "$f" -quality 80 "${f%.jpg}.webp"; done
```

Then update src attributes in index.html to point to the .webp files.
