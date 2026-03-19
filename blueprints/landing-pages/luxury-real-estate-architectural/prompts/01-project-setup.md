# Prompt 01: Project Setup

## Context

This prompt creates the HTML skeleton, Tailwind configuration, custom CSS, and empty JS file for a luxury real estate / architectural firm landing page. The design uses a warm gold-and-stone color system with editorial serif typography.

## The Prompt

```
Build the foundation for a luxury architectural firm landing page.

Create three files: index.html, style.css, and app.js

**index.html requirements:**
- Use semantic HTML5 with lang="en" and scroll-smooth on <html>
- Load Tailwind CSS via CDN: https://cdn.tailwindcss.com?plugins=forms,container-queries
- Load Google Fonts:
  - Noto Serif (italic, weights 300, 400, 700) — for all display headings
  - Manrope (weights 200, 300, 400, 600) — for all body and UI text
- Load Material Symbols Outlined icon font from Google
- Add a <script id="tailwind-config"> block with this exact Tailwind config:

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary-container": "#c5a059",
                "surface-dim": "#dcd9d9",
                "surface-container-highest": "#e5e2e1",
                "on-surface-variant": "#4e4639",
                "primary-fixed": "#ffdea5",
                "surface": "#fcf9f8",
                "secondary": "#5f5e5e",
                "background": "#fcf9f8",
                "on-secondary": "#ffffff",
                "surface-variant": "#e5e2e1",
                "surface-container-lowest": "#ffffff",
                "outline": "#7f7667",
                "surface-container-high": "#eae7e7",
                "inverse-surface": "#313030",
                "secondary-container": "#e4e2e1",
                "on-tertiary-container": "#393b3b",
                "primary-fixed-dim": "#e9c176",
                "on-background": "#1c1b1b",
                "surface-container-low": "#f6f3f2",
                "surface-container": "#f0eded",
                "on-primary-container": "#4e3700",
                "inverse-primary": "#e9c176",
                "on-primary": "#ffffff",
                "outline-variant": "#d1c5b4",
                "inverse-on-surface": "#f3f0ef",
                "on-surface": "#1c1b1b",
                "surface-tint": "#775a19",
                "tertiary-container": "#a4a5a5",
                "primary": "#775a19"
            },
            fontFamily: {
                "headline": ["Noto Serif"],
                "body": ["Manrope"],
                "label": ["Manrope"]
            },
            borderRadius: {
                "DEFAULT": "0px",
                "lg": "0px",
                "xl": "0px",
                "full": "9999px"
            },
        },
    },
}

- Add a <link rel="stylesheet" href="style.css"> after the Tailwind config script
- Add <script src="app.js" defer></script> just before </body>
- Leave the <body> empty for now — just add a comment: <!-- Content will be added in the next step -->

**style.css requirements:**
Write these custom styles that Tailwind cannot express:

body {
    font-family: 'Manrope', sans-serif;
    background-color: #fcf9f8;
    color: #1c1b1b;
}

.serif-display {
    font-family: 'Noto Serif', serif;
}

/* Visual stage crossfade states */
.visual-stage-active {
    opacity: 1;
    transform: scale(1);
}
.visual-stage-inactive {
    opacity: 0;
    transform: scale(1.05);
}

/* Hide scrollbar for the side-nav overflow areas */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

**app.js requirements:**
Create an empty file with just this comment:
// Chapter scroll logic will be added in step 4

Do NOT add any page content yet. Just the foundation files.
```

## Expected Output

Three files:
- `index.html` — HTML shell with Tailwind CDN, Google Fonts, Material Symbols, Tailwind config, and linked style.css / app.js
- `style.css` — 4 custom rule sets: body base, .serif-display, visual stage states, no-scrollbar
- `app.js` — Placeholder comment only

## What to Check

- [ ] Tailwind CDN URL includes `?plugins=forms,container-queries`
- [ ] Both font families loaded: Noto Serif (ital,wght@0,300;0,400;0,700;1,300) and Manrope (wght@200;300;400;600)
- [ ] Material Symbols Outlined font loaded
- [ ] Tailwind config script has `id="tailwind-config"`
- [ ] `primary` color is `#775a19` (warm gold)
- [ ] `surface` color is `#fcf9f8` (warm off-white)
- [ ] `borderRadius` overrides DEFAULT and lg/xl to `"0px"` (sharp corners throughout)
- [ ] `fontFamily` defines headline, body, and label families
- [ ] `body { selection:bg-primary-container selection:text-on-primary-container }` — add this to the body tag in HTML as Tailwind classes
- [ ] app.js is loaded with `defer` attribute

## Common Issues

- **Fonts not appearing**: Make sure the `@import` or `<link>` for Google Fonts comes BEFORE the Tailwind CDN script
- **Colors not working**: The Tailwind config script must have `id="tailwind-config"` — Tailwind CDN reads this specific ID
- **Rounded corners appearing**: The borderRadius override must set `"DEFAULT": "0px"` to eliminate Tailwind's default rounding
- **Icons not showing**: Material Symbols requires BOTH the stylesheet link AND using the correct class `material-symbols-outlined` on a `<span>` element
