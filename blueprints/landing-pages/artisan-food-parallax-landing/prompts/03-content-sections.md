# Prompt 03: Content Sections

## Context

This prompt builds the content sections below the hero — brand story, product showcase, process steps, testimonial, and newsletter CTA. It also adds the `ProductShowcase` class that dynamically renders product cards from a data array.

## The Prompt

```
Add a ProductShowcase class to app.js and the CSS for all content sections (story, products, process, testimonial, CTA).

**Class: ProductShowcase**

Constructor:
- Get DOM reference: products-grid element
- Define a products array with 6 items, each having:
  - name: product name (e.g., "Dark Origin 72%", "Salted Caramel", "Madagascar Single Origin", "Milk & Hazelnut", "Ecuador Reserve", "Espresso Noir")
  - description: short 1-line description
  - price: price string (e.g., "$14")
  - image: path to an image file (e.g., "assets/product-1.jpg")
- Call render()

render() method:
- Map over the products array and generate HTML for each card:
  - An <article> with class "product-card reveal"
  - Inside: a div.product-card__image containing:
    - An <img> with the product image, alt text = product name, loading="lazy"
    - A div.product-card__overlay with a span "View Details"
  - Below: a div.product-card__info with:
    - h3.product-card__name — the product name
    - p.product-card__desc — the description
    - p.product-card__price — the price
- Set grid innerHTML to the joined HTML

**Add to the DOMContentLoaded listener:**
After creating ParallaxHero, also create a new ProductShowcase instance.

**Add these CSS sections to style.css:**

SECTION SHARED STYLES:
- .section — padding 6rem 2rem, max-width 1200px, margin 0 auto
- .eyebrow — display inline-block, font-family var(--font-body), font-size 0.75rem, font-weight 700, text-transform uppercase, letter-spacing 3px, color var(--gold), margin-bottom 1rem
- .section__title — font-family var(--font-heading), clamp(2rem, 5vw, 3.5rem), font-weight 700, line-height 1.1, color var(--chocolate), margin-bottom 1.5rem
- .section__header — text-align center, margin-bottom 3rem

STORY SECTION:
- .section--story — padding-top 8rem, padding-bottom 8rem, background var(--cream) (full-width, so no max-width constraint)
- .story__grid — display grid, grid-template-columns 1fr 1fr, gap 4rem, max-width 1200px, margin 0 auto, padding 0 2rem, align-items center
- .story__image — overflow hidden, border-radius 4px
- .story__image img — width 100%, height 100%, object-fit cover, aspect-ratio 4/5
- .story__content — padding 2rem 0
- .story__content .eyebrow — as defined above
- .story__content h2 — font-family var(--font-heading), clamp(1.75rem, 4vw, 2.75rem), margin-bottom 1.5rem, color var(--chocolate)
- .story__content p — font-size 1.1rem, line-height 1.8, color var(--chocolate-light), margin-bottom 1.25rem

PRODUCT SHOWCASE:
- .section--products — padding-top 6rem, padding-bottom 6rem
- .products__grid — display grid, grid-template-columns repeat(3, 1fr), gap 2rem
- .product-card — cursor pointer, transition transform 0.3s ease
- .product-card:hover — transform translateY(-4px)
- .product-card__image — position relative, overflow hidden, border-radius 4px, aspect-ratio 3/4, background var(--cream-dark)
- .product-card__image img — width 100%, height 100%, object-fit cover, transition transform 0.6s var(--ease-out)
- .product-card:hover .product-card__image img — transform scale(1.08)
- .product-card__overlay — position absolute, inset 0, background rgba(44, 24, 16, 0.5), display flex, align-items center, justify-content center, opacity 0, transition opacity 0.4s ease
- .product-card:hover .product-card__overlay — opacity 1
- .product-card__overlay span — color var(--cream), font-family var(--font-body), font-weight 700, font-size 0.875rem, text-transform uppercase, letter-spacing 2px, border 1px solid var(--cream), padding 0.75rem 1.5rem
- .product-card__info — padding 1.25rem 0.25rem
- .product-card__name — font-family var(--font-heading), font-size 1.25rem, margin-bottom 0.25rem
- .product-card__desc — font-size 0.875rem, color var(--chocolate-light), margin-bottom 0.5rem
- .product-card__price — font-weight 700, font-size 1.1rem, color var(--chocolate)

PROCESS SECTION:
- .section--process — background var(--cream-dark) (full-width), padding 6rem 2rem
- .process__steps — display flex, gap 2rem, max-width 1200px, margin 0 auto
- .process__step — flex 1, text-align center, padding 2rem 1.5rem
- .process__number — font-family var(--font-heading), font-size clamp(3rem, 6vw, 4.5rem), color var(--gold), opacity 0.4, line-height 1, margin-bottom 1rem
- .process__step h3 — font-family var(--font-heading), font-size 1.5rem, margin-bottom 0.75rem, color var(--chocolate)
- .process__step p — font-size 0.95rem, line-height 1.6, color var(--chocolate-light)

TESTIMONIAL SECTION:
- .section--testimonial — text-align center, padding 8rem 2rem, background var(--cream)
- .testimonial__quote — font-family var(--font-heading), font-size clamp(1.5rem, 3.5vw, 2.5rem), font-style italic, line-height 1.4, color var(--chocolate), max-width 800px, margin 0 auto 2rem
- .testimonial__quote::before — content open-quote, display block, font-size 4rem, color var(--gold), line-height 1, margin-bottom 1rem
- .testimonial__author — font-family var(--font-body), font-weight 700, font-size 1rem, color var(--chocolate)
- .testimonial__title — font-size 0.875rem, color var(--chocolate-light), margin-top 0.25rem

CTA / NEWSLETTER SECTION:
- .section--cta — text-align center, padding 6rem 2rem, background var(--chocolate), color var(--cream)
- .section--cta h2 — font-family var(--font-heading), clamp(2rem, 4vw, 3rem), margin-bottom 1rem, color var(--cream)
- .section--cta p — max-width 500px, margin 0 auto 2rem, opacity 0.8, line-height 1.6
- .cta__form — display flex, gap 0, max-width 440px, margin 0 auto
- .cta__input — flex 1, padding 1rem 1.25rem, border none, font-family var(--font-body), font-size 1rem, background var(--white), color var(--chocolate)
- .cta__button — padding 1rem 2rem, background var(--gold), color var(--chocolate), font-family var(--font-body), font-weight 700, text-transform uppercase, letter-spacing 1px, font-size 0.875rem, border none, cursor pointer, transition background 0.3s ease
- .cta__button:hover — background var(--gold-light)
```

## Expected Output

- `ProductShowcase` class added to `app.js` with `render()` method
- Complete CSS for all 5 content sections in `style.css`
- DOMContentLoaded updated to create both `ParallaxHero` and `ProductShowcase`

## What to Check

- [ ] Story section shows a two-column layout: image left, text right
- [ ] Product grid renders 6 cards with images, names, descriptions, and prices
- [ ] Hovering a product card zooms the image and shows a dark overlay with "View Details"
- [ ] Product cards have a subtle lift effect on hover (translateY -4px)
- [ ] Process section shows 4 steps in a horizontal row with large numbers
- [ ] Testimonial displays as a centered, italic quote with gold quotation mark
- [ ] CTA section has a dark chocolate background with email input and gold submit button
- [ ] All sections maintain the warm, earthy color palette

## Common Issues

- **Product images not loading**: Verify the image paths in the products array match actual files in your assets/ folder. For testing, use Unsplash placeholder URLs
- **Product grid not 3 columns**: Ensure `grid-template-columns: repeat(3, 1fr)` is set on `.products__grid`
- **Overlay not appearing on hover**: The parent `.product-card__image` must have `position: relative` and `overflow: hidden`
- **CTA input and button misaligned**: The `.cta__form` should use `display: flex` with `gap: 0` so input and button sit flush
- **Process steps wrapping**: At this stage they should be in a row; responsive stacking comes in the next step
