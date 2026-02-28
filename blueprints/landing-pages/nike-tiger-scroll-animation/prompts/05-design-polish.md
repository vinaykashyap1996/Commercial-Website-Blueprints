# Prompt 05: Design Polish & Responsive

## Context

This prompt adds the finishing touches — footer, responsive breakpoints, and any remaining hover/transition effects. After this step, the page should look production-ready on all screen sizes.

## The Prompt

```
Add the footer styles and responsive breakpoints to style.css to make the Nike landing page production-ready on all devices.

**FOOTER CSS:**
- .footer — dark background (var(--carbon)), white text, padding 4rem 2rem 2rem
- .footer__grid — CSS grid, 4 columns, 2rem gap, max-width 1200px, centered
- .footer__heading — heading font, 1rem, bold uppercase, letter-spacing 1px, margin-bottom 1.25rem
- .footer__list li — margin-bottom 0.625rem
- .footer__list a — 0.8125rem, 50% white opacity, transition to full white on hover
- .footer__bottom — top border (10% white opacity), padding-top 1.5rem, centered, max-width 1200px
- .footer__bottom p — 0.75rem, 35% white opacity

**RESPONSIVE BREAKPOINTS:**

At max-width 1024px:
- Essentials grid: 3 → 2 columns
- Footer grid: 4 → 2 columns

At max-width 768px:
- .section padding: reduce to 4rem 1.25rem
- .section--intro padding: 6rem 1.25rem
- .hero__title letter-spacing: -2px
- Carousel header/track padding: 1.25rem
- Carousel track gap: 0.75rem
- Carousel card width: 260px
- Essentials grid: 1 column, 1.5rem gap
- Essentials image aspect-ratio: 4/5 (slightly less tall)
- Featured image height: 65vh
- Section-featured padding: 3rem 1.25rem
- Section-essentials padding: 3rem 1.25rem 5rem
- Footer padding: 3rem 1.25rem 1.5rem
- Footer grid: 2 columns, 1.5rem gap

At max-width 480px:
- Section title letter-spacing: -1px
- Carousel card width: 220px
- Button padding: 0.75rem 1.5rem, font-size 0.9375rem
- White button: smaller padding, font-size 0.8125rem, repositioned (bottom 1rem, left 1rem)
- Featured image height: 50vh
- Footer grid: 1 column

Make sure the reveal animations (.reveal and .reveal.is-visible) are properly styled if not already.
```

## Expected Output

Updated `style.css` with footer styles and 3 responsive media query blocks.

## What to Check

- [ ] Footer renders correctly with 4-column grid on desktop
- [ ] Footer collapses to 2 columns on tablet, 1 column on mobile
- [ ] Carousel cards resize on smaller screens
- [ ] Featured image height adjusts per breakpoint
- [ ] Essentials grid stacks properly on mobile
- [ ] All text remains readable at every breakpoint
- [ ] No horizontal scrollbar appears on any screen size
- [ ] Hover effects are visible on desktop but don't interfere on touch devices

## Common Issues

- **Horizontal overflow on mobile**: Check that `.hero__sticky` has `overflow: hidden` and `body` has `overflow-x: hidden`
- **Footer links too cramped on mobile**: Ensure the grid switches to 1 column at 480px
- **Images stretching**: Verify all images use `object-fit: cover` with explicit width/height or aspect-ratio
