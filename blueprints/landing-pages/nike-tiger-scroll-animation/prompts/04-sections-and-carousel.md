# Prompt 04: Sections & Product Carousel

## Context

This prompt builds the content sections below the hero and creates a JavaScript-powered product carousel with horizontal snap scrolling.

## The Prompt

```
Add a Carousel class to app.js and the CSS for all content sections (product intro, carousel, featured banner, essentials grid).

**Class: Carousel**

Constructor:
- Get DOM references: carousel-track, carousel-prev, carousel-next
- Set scrollStep to 320 (pixels to scroll per arrow click)
- Define a products array with 6 items, each having: title, category, price, and image (path to an image file in assets/ folder)
- Call render() and bindEvents()

render() method:
- Map over the products array and generate HTML for each card:
  - An <article> with class "carousel__card"
  - Inside: a div.carousel__card-image containing an <img> with the product image
  - Below: a div.carousel__card-info with h3 title, p category, p price
- Set track.innerHTML to the joined HTML

bindEvents() method:
- prev button: scrollBy left by -scrollStep with smooth behavior
- next button: scrollBy left by +scrollStep with smooth behavior

**Add to the DOMContentLoaded listener:**
After creating TigerExperience, also create a new Carousel instance.

**Add these CSS sections to style.css:**

SECTIONS SHARED:
- .section — white background, padding 6rem 2rem
- .eyebrow — inline-block, small bold uppercase text with letter-spacing
- .section__title — use var(--font-heading), clamp(3rem, 10vw, 5.5rem), uppercase, tight line-height 0.85
- .section__title--left — text-align left
- .section__body — font-size 1.2rem, max-width 600px, centered with auto margins, gray color

PRODUCT INTRO:
- .section--intro — centered text, extra top padding (8rem)

BUTTONS:
- .btn — inline-flex centered, pill-shaped (border-radius 30px), padding 0.875rem 2rem, bold
- .btn--dark — black background, white text, slight scale on hover
- .btn--outline — transparent background, gray border, border darkens on hover
- .btn--white — white background, positioned absolute (bottom-left of parent), for the essentials cards
- .btn-group — flexbox row with gap, centered, wrapping

CAROUSEL:
- .section--carousel — no side padding (0), overflow hidden
- .carousel__header — flexbox space-between, side padding 2rem
- .carousel__nav — flexbox row of circular arrow buttons (48px, gray background)
- .carousel__track — flexbox row with gap, side padding 2rem, overflow-x auto, scroll-snap-type x mandatory, hidden scrollbar
- .carousel__card — flex: 0 0 300px, scroll-snap-align start, cursor pointer, translateY(-6px) on hover
- .carousel__card-image — square (aspect-ratio 1), border-radius 8px, overflow hidden, #f5f5f5 background
- .carousel__card-image img — 100% width/height, object-fit cover
- .carousel__card-info — title (bold, 1rem), category (gray, 0.875rem), price (bold, 1rem)

FEATURED BANNER:
- .section--featured — centered text, padding 4rem 2rem
- .featured__image — 100% width, 85vh height, overflow hidden
- .featured__image img — cover fit

ESSENTIALS GRID:
- .section--essentials — padding 4rem 2rem 6rem
- .essentials__grid — CSS grid, 3 columns, 1rem gap
- .essentials__image — relative positioned, aspect-ratio 3/4, overflow hidden
- .essentials__image img — cover fit with scale(1.05) on card hover (0.7s transition)
```

## Expected Output

- `Carousel` class added to `app.js` with `render()` and `bindEvents()` methods
- Complete CSS for all content sections in `style.css`

## What to Check

- [ ] Product carousel renders 6 cards with images, titles, categories, and prices
- [ ] Arrow buttons scroll the carousel left and right smoothly
- [ ] Cards snap into position when scrolling manually
- [ ] Scrollbar is hidden on the carousel
- [ ] Cards hover-lift animation works (translateY -6px)
- [ ] Featured banner shows a full-width image
- [ ] Essentials grid shows 3 side-by-side cards with overlaid buttons
- [ ] Essentials images zoom slightly on hover

## Common Issues

- **Carousel cards too narrow/wide**: Adjust the `flex: 0 0 300px` value to match your design
- **Images not loading**: Verify the image paths in the products array match actual files in your assets/ folder
- **Scrollbar still visible**: You need both `scrollbar-width: none` AND the `::-webkit-scrollbar { display: none }` rule
- **Essentials button not positioned correctly**: The parent `.essentials__image` must have `position: relative`
