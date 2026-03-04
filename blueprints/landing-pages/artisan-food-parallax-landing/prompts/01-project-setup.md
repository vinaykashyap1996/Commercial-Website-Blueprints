# Prompt 01: Project Setup

## Context

This prompt sets up the complete HTML structure and CSS foundation for a premium artisan food brand landing page with parallax scrolling. It creates the page skeleton with all semantic sections and a CSS design system with warm, earthy custom properties.

## The Prompt

```
Build the foundation for a premium artisan chocolate brand landing page with parallax scroll effects.

Create two files: index.html and style.css

**index.html requirements:**
- Use semantic HTML5
- Include Google Fonts: Playfair Display (weights 400, 700) for headings and DM Sans (weights 400, 500, 700) for body text
- Link style.css

Create these sections in order:

1. PRELOADER — a full-screen overlay (id="preloader") containing:
   - A centered brand name text "Cacao & Co." with class "preloader__logo"
   - Simple fade-in animation (the logo should softly appear)

2. NAVIGATION (id="nav") — fixed top nav with:
   - Brand name link on the left (class "nav__logo") — text "Cacao & Co." using the heading font
   - A list of 4 links centered: "Our Story", "Products", "Process", "Contact"
   - A "Shop Now" button link on the right (class "nav__cta")
   - The nav starts transparent and becomes solid (cream background with shadow) on scroll

3. HERO SECTION (id="hero") — this will contain the parallax scene:
   - A container div with class "hero__parallax" — full viewport height, position relative, overflow hidden
   - Inside, 4 layer divs each with class "hero__layer" and a modifier:
     a) hero__layer--bg (data-speed="0.2") — will hold a background texture image
     b) hero__layer--ingredients (data-speed="0.5") — will hold floating ingredient images (cocoa beans, leaves)
     c) hero__layer--product (data-speed="0.8") — will hold the main product image
     d) hero__layer--content (data-speed="1.0") — contains:
        - A large headline: "Crafted from the World's Finest Cocoa"
        - A subheading: "Small-batch artisan chocolate, made with intention"
        - A CTA button: "Explore Our Collection"

4. STORY SECTION (id="story") — brand origin story:
   - A two-column grid (class "story__grid")
   - Left: a large image container (class "story__image") with an img tag (use placeholder path "assets/story.jpg")
   - Right: a content container (class "story__content") with:
     - Eyebrow text: "Our Story"
     - Title: "From Bean to Bliss, Since 2018"
     - Two paragraphs about the brand's artisan chocolate-making journey (write compelling copy about sourcing single-origin beans, small-batch production, and passion for craft)

5. PRODUCT SHOWCASE (id="products"):
   - A section header with eyebrow "The Collection" and title "Our Signature Bars"
   - A grid container (id="products-grid") where product cards will be injected by JavaScript
   - Add class "reveal" to the section header for scroll animation

6. PROCESS SECTION (id="process"):
   - A section header with eyebrow "The Craft" and title "From Bean to Bar"
   - A container (class "process__steps") with 4 step cards, each containing:
     - A large step number (01, 02, 03, 04)
     - A title (Source, Roast, Craft, Taste)
     - A short description (1-2 sentences about each step)
   - Add class "reveal" to each step card

7. TESTIMONIAL SECTION (id="testimonial"):
   - A large blockquote with class "testimonial__quote"
   - Quote text: "Every bite tells a story of craftsmanship and passion. This isn't just chocolate — it's an experience."
   - Attribution: a name "— Sarah Chen" and title "Food & Wine Magazine"
   - Add class "reveal" to the blockquote

8. CTA / NEWSLETTER SECTION (id="cta"):
   - A warm-toned background section
   - Headline: "Join the Inner Circle"
   - Description: "Be the first to taste new collections, receive exclusive recipes, and get 15% off your first order."
   - An email input with placeholder "Enter your email" and a submit button "Subscribe"

9. FOOTER — dark chocolate background with:
   - 3-column link grid:
     - Shop: Dark Origin, Milk & Caramel, Gift Sets, Subscriptions
     - Company: Our Story, Process, Sustainability, Careers
     - Connect: Instagram, Contact Us, Press, Wholesale
   - Copyright bar: "© 2024 Cacao & Co. All rights reserved."

Add CDN scripts before closing </body> tag:
- Lenis (smooth scroll): https://cdn.jsdelivr.net/npm/lenis@1.1.18/dist/lenis.min.js
- GSAP: https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js
- ScrollTrigger: https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js
- app.js (local script)

**style.css requirements:**
- Full CSS reset (margin, padding, box-sizing on all elements)
- CSS custom properties on :root:
  --chocolate: #2c1810
  --chocolate-light: #4a2c20
  --cream: #faf5ef
  --cream-dark: #f0e6d8
  --gold: #c8a45e
  --gold-light: #d4b87a
  --sage: #6b7c5e
  --charcoal: #1a1a1a
  --white: #ffffff
  --font-heading: 'Playfair Display', Georgia, serif
  --font-body: 'DM Sans', -apple-system, sans-serif
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1)
  --ease-smooth: cubic-bezier(0.45, 0, 0.55, 1)
- Base styles: html (font-size 16px, font smoothing), body (font-family, cream background, overflow-x hidden), a, ul, img
- Lenis overrides: html.lenis and html.lenis body should have height: auto
- Preloader styles: fixed full-screen cream overlay, centered brand logo in heading font, fade-in animation
- Navigation styles: fixed top, transparent background, flexbox with space-between, transitions for background and box-shadow
- Nav .is-scrolled state: cream background, subtle box-shadow, chocolate-colored text
- Use BEM naming convention throughout

Do NOT write any JavaScript yet — just the HTML structure and CSS foundation.
```

## Expected Output

Two files:
- `index.html` — Complete semantic HTML with all 9 sections, Google Fonts, and CDN scripts
- `style.css` — CSS reset, custom properties, and styles for preloader and navigation

## What to Check

- [ ] All 9 sections are present in the HTML with correct IDs
- [ ] Google Fonts are loaded with correct weights (Playfair Display 400,700 + DM Sans 400,500,700)
- [ ] CDN scripts are in the correct order (Lenis → GSAP → ScrollTrigger → app.js)
- [ ] CSS custom properties are defined on `:root` with the warm color palette
- [ ] Preloader is visible with the brand name centered
- [ ] Nav is fixed to the top and transparent by default
- [ ] BEM naming convention is used consistently
- [ ] Hero has 4 layer divs with correct data-speed attributes
- [ ] All `.reveal` classes are on the correct elements
- [ ] Body background is cream (not white)

## Common Issues

- **Fonts not loading**: Make sure both `preconnect` links are present before the font stylesheet link
- **Nav not transparent**: Check that the nav has `background: transparent` by default and only gets the cream background when `.is-scrolled` is added by JavaScript
- **Wrong color palette**: Double-check you're using the warm chocolate/cream/gold palette, not the Nike dark palette
- **Missing Lenis overrides**: Without `html.lenis { height: auto }`, smooth scroll won't work correctly
