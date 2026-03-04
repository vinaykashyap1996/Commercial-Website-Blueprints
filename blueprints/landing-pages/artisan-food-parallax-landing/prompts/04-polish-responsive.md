# Prompt 04: Design Polish & Responsive

## Context

This prompt adds the finishing touches — scroll reveal animations with staggered timing, hover effects, the complete footer, and responsive breakpoints for all screen sizes. After this step, the page should look production-ready on all devices.

## The Prompt

```
Add reveal animations, the footer, and responsive breakpoints to make the artisan food landing page production-ready on all devices.

**REVEAL ANIMATION CSS:**
- .reveal — opacity 0, transform translateY(30px), transition: opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out)
- .reveal.is-visible — opacity 1, transform translateY(0)
- Stagger delays for grid children:
  .reveal:nth-child(2) — transition-delay 0.1s
  .reveal:nth-child(3) — transition-delay 0.2s
  .reveal:nth-child(4) — transition-delay 0.3s
  .reveal:nth-child(5) — transition-delay 0.4s
  .reveal:nth-child(6) — transition-delay 0.5s

**Ensure these elements have the "reveal" class in the HTML** (add via JavaScript if needed):
- .section__header elements
- .story__grid (the whole grid)
- Each .product-card (already added via JS render)
- Each .process__step
- .testimonial__quote
- .section--cta content

**Add reveal class application to ParallaxHero.init():**
In setupRevealAnimations(), also add 'reveal' class to these elements programmatically:
- document.querySelectorAll('.story__grid, .section__header, .process__step, .testimonial__quote, .section--cta h2, .section--cta p, .cta__form')
This ensures all major content blocks animate in on scroll.

**STORY IMAGE PARALLAX:**
Add a subtle parallax effect to the story image in setupParallax():
- gsap.to('.story__image img', { y: -40, ease: 'none', scrollTrigger: { trigger: '.section--story', start: 'top bottom', end: 'bottom top', scrub: true } })
- This creates a gentle upward drift on the story image as you scroll past it

**FOOTER CSS:**
- .footer — background var(--charcoal), color var(--cream), padding 4rem 2rem 2rem
- .footer__grid — display grid, grid-template-columns repeat(3, 1fr), gap 2rem, max-width 1200px, margin 0 auto 3rem
- .footer__heading — font-family var(--font-heading), font-size 1.125rem, margin-bottom 1.25rem, color var(--cream)
- .footer__list li — margin-bottom 0.625rem
- .footer__list a — font-size 0.875rem, color rgba(250, 245, 239, 0.5), transition color 0.3s ease
- .footer__list a:hover — color var(--cream)
- .footer__bottom — border-top 1px solid rgba(250, 245, 239, 0.1), padding-top 1.5rem, text-align center, max-width 1200px, margin 0 auto
- .footer__bottom p — font-size 0.75rem, color rgba(250, 245, 239, 0.35)

**RESPONSIVE BREAKPOINTS:**

At max-width 1024px:
- .story__grid — grid-template-columns 1fr (single column, image stacks above text)
- .story__image img — aspect-ratio 16/9 (landscape when stacked)
- .products__grid — grid-template-columns repeat(2, 1fr)
- .footer__grid — grid-template-columns repeat(2, 1fr)

At max-width 768px:
- .section — padding 4rem 1.25rem
- .section--story — padding 5rem 1.25rem
- .section--process — padding 4rem 1.25rem
- .process__steps — flex-wrap wrap
- .process__step — flex: 0 0 calc(50% - 1rem) (2 columns)
- .hero__title — font-size clamp(2rem, 8vw, 3.5rem)
- .section--testimonial — padding 5rem 1.25rem
- .section--cta — padding 4rem 1.25rem
- .cta__form — flex-direction column, gap 0.75rem
- .cta__input — width 100%
- .cta__button — width 100%
- .footer — padding 3rem 1.25rem 1.5rem
- .footer__grid — gap 1.5rem

At max-width 480px:
- .products__grid — grid-template-columns 1fr
- .process__step — flex: 0 0 100% (single column)
- .nav__links — display none (hide desktop links on mobile)
- .hero__content — padding 1.5rem
- .story__content — padding 1rem 0
- .footer__grid — grid-template-columns 1fr
- .hero__cta — padding 0.875rem 2rem, font-size 0.8125rem

Also ensure no horizontal scrollbar at any breakpoint:
- body and html should have overflow-x: hidden
- .hero__parallax should have overflow: hidden
```

## Expected Output

Updated `style.css` with reveal animations, footer styles, and 3 responsive media query blocks.
Updated `app.js` with programmatic reveal class application and story image parallax.

## What to Check

- [ ] Content sections animate in as you scroll down (fade up from below)
- [ ] Product cards enter with staggered timing (each card appears slightly after the previous)
- [ ] Process steps also stagger in when scrolled into view
- [ ] Story image has a subtle upward drift parallax effect
- [ ] Footer renders with 3-column grid on desktop
- [ ] Footer collapses to 2 columns on tablet, 1 on mobile
- [ ] Product grid: 3 columns → 2 → 1 as screen shrinks
- [ ] Process steps: 4 across → 2x2 → stacked on mobile
- [ ] CTA form stacks vertically on mobile
- [ ] Nav links hide on mobile (480px)
- [ ] No horizontal scrollbar at any screen size
- [ ] All text remains readable at every breakpoint

## Common Issues

- **Reveal animations not triggering**: Check that `setupRevealAnimations()` is being called and that elements have the `.reveal` class either in HTML or added via JavaScript
- **Stagger not working on products**: The product cards get `.reveal` class from the `render()` method in `ProductShowcase` — ensure it's there
- **Horizontal overflow on mobile**: Check that `.hero__parallax` has `overflow: hidden` and no element has a fixed width wider than the viewport
- **Footer links too cramped**: Ensure the grid switches to 1 column at 480px
- **CTA input stretching**: At 768px, `.cta__form` should switch to `flex-direction: column` so input and button stack
