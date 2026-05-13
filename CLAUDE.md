# Suzanne Gay Music — Project Brief for Claude Code

> This file is the single source of truth for this project. Read it fully before touching any code.
> Developer: Owen Brown (OBDesign, obwebdesign.ca)
> Client: Suzanne Gay

---

## Project Overview

A full redesign of Suzanne Gay's music website. Suzanne is a jazz pianist, vocalist, and composer based on Salt Spring Island, BC. The site currently exists as a single-page HTML/CSS/JS app deployed on Vercel via GitHub. We are redesigning it into a premium, atmospheric two-page site.

**Live site:** https://suzanne-gay-music.vercel.app
**Tech stack:** Plain HTML, CSS, JavaScript. GSAP + ScrollTrigger (CDN). No build step. Deploys to Vercel from this GitHub repo.

---

## Design Direction — "Midnight on Salt Spring"

The intersection of Salt Spring Island's natural moodiness (coastal fog, dark forest, mossy cedar) and the intimacy of a jazz club (candlelight, velvet, low light). **Minimal but atmospheric.** Lots of negative space. Moments of richness.

### Palette

```
--color-bg-deep:     #141816   /* Charcoal forest black — main background */
--color-bg-mid:      #1c2420   /* Deep forest green-black — section contrast */
--color-bg-card:     #242b27   /* Dark olive-charcoal — cards/surfaces */
--color-gold:        #c9a84c   /* Antique gold — primary accent */
--color-sage:        #7a9e8a   /* Muted sage green — secondary accent */
--color-text:        #f0ede6   /* Warm off-white — primary text */
--color-text-muted:  #8e8a82   /* Warm gray — secondary/caption text */
--color-rule:        rgba(201, 168, 76, 0.25)  /* Gold divider lines */
```

### Typography

- **Headings:** Playfair Display (already loaded) — use large, italic, expressive. Hero h1 at `clamp(4rem, 10vw, 8rem)`.
- **Body:** Swap Inter → **DM Sans** (Google Fonts). Clean, contemporary, pairs beautifully with Playfair.
- **Labels/eyebrows:** DM Sans, uppercase, tight tracking (`0.18em`), gold or sage color.

Google Fonts import string (replace existing):
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />
```

### Layout Principles

- Full-bleed dark sections. No white background anywhere.
- Asymmetric grids where appropriate — avoid everything being centered.
- Abstract art photos used as full-bleed section backgrounds at ~10% opacity behind dark overlays (adds texture without competing with content).
- The grain texture (SVG feTurbulence) stays — extend it or keep it in the hero.
- Strong negative space. Don't fill every inch.
- Gold horizontal rules used intentionally as section dividers.
- Smooth GSAP scroll animations (already in animations.js — update/extend as needed).

---

## Site Structure

### Page 1: index.html (Home)

Sections in order:
1. **Nav** — minimal, transparent over hero, transitions to dark on scroll
2. **Hero** — full-screen, atmospheric photo, large italic name, email capture (waitlist) integrated directly below tagline
3. **About** — real bio (see Content below), her photo, genre tags
4. **Music** — custom audio player (2 songs) + 2 YouTube video embeds
5. **Upcoming Events** — "Check back soon" placeholder, styled with a calendar/date aesthetic
6. **Lessons** — writeup, rates card with real prices, testimonials placeholder
7. **Performances Teaser** — brief atmospheric section, single CTA button → performances.html
8. **Footer** — shared across both pages

### Page 2: performances.html (Performances & Booking)

Sections in order:
1. **Page Hero** — "Book Suzanne" heading, atmospheric photo background
2. **Format Cards** — all 5 formats (see Content below)
3. **Event Types** — Weddings, Funerals, Private Parties (each with writeup + icon)
4. **Booking Form** — Formspree (ID placeholder), event type selector
5. **Footer** — same as home

### Shared Files

- `styles.css` — all styles (shared between both pages via `<link>`)
- `animations.js` — all GSAP animations (shared)
- `favicon.svg` — existing, keep

---

## Content

### Bio (use this verbatim, 3rd person)

> Saltspring born vibrant jazz pianist and singer, Suzanne Gay, is known for her versatility of musical styles and sultry voice — creating an ambience of emotionally charged beauty and soul. She is a graduate of VIU's Bachelor of Jazz program, where she studied under world class musicians. She is currently teaching on the island and performs locally. She is about to film her first music video for her song, "The Last River." Her compositions are luminous, emotive, and effortlessly lyrical, merging classical stylings with improvisation.

### Lesson Rates

| Duration | Rate |
|---|---|
| 30 minutes | $35 |
| 45 minutes | $50 |
| 60 minutes | $60 |
| Private Piano or Voice (1 hr) | $150 |

Note: The $150/hr is a separate tier for dedicated solo piano lessons or voice lessons (private/intensive), distinct from the standard lesson tiers above.

### Performance Formats

| Format | Details |
|---|---|
| Solo | Piano & voice — intimate and versatile |
| Duo | Jim Shultz — Guitar + Suzanne Vocals |
| Duo | Grace McNab — Piano + Suzanne Vocals |
| Trio | **Sonic Cocktail** — Jim Shultz + Bruce Grey + Suzanne. A mix of jazz, soul, blues & pop |
| Full Band | Full band format — text content TBD |

### Event Types (Performances Page)

- **Weddings** — ceremony and/or reception music
- **Funerals / Memorial Services** — intimate, respectful, deeply musical
- **Private Parties** — cocktail hours, dinner parties, corporate events

### Music & Media

- **Song 1:** `assests/Song Files/Journey Piano.m4a`
- **Song 2:** `assests/Song Files/Why Don't You Do Right.mp3`
- **Video 1 (The Last River):** https://youtu.be/n7IscMb3X9A
- **Video 2:** https://youtu.be/_3nNeD6kusQ

### Contact

- **Email:** suzmuzik@gmail.com
- **Phone:** 250-221-7464
- **Facebook:** https://www.facebook.com/suzmuzik/
- **Bandcamp:** https://suzannegay.bandcamp.com

---

## Asset Inventory

All assets are in the `assests/` folder (note: intentional typo in folder name — do NOT rename it or Vercel paths will break).

### Photos of Suzanne (use for main content areas)
- `assests/Photos of Suzanne/Headshot.JPG` ← best for about section
- `assests/Photos of Suzanne/Suzanne-Performing.JPG` ← best for performances page hero
- `assests/Photos of Suzanne/Suzanne-Photo.JPG`
- `assests/Photos of Suzanne/Suzanne_Childhood-Photo.JPG`
- `assests/Photos of Suzanne/2021.09.10.Suzanne Gay-1.jpeg`
- `assests/Photos of Suzanne/2021.09.10.Suzanne Gay-2.jpeg`
- `assests/Photos of Suzanne/suz (2 of 1).jpeg`
- `assests/Photos of Suzanne/Suzzane-Selfie.jpeg`

### Hero / Background Photos
- `assests/Abstract Art Photos/piano.png` ← current hero bg, IS Suzanne's photo

### Abstract Art / Texture Photos (use as low-opacity section backgrounds)
- `assests/Abstract Art Photos/THELASTRIVER.jpeg`
- `assests/Abstract Art Photos/Oceaney.jpeg`
- `assests/Abstract Art Photos/4 panels (3).jpeg`
- `assests/Abstract Art Photos/Heart.JPG`
- `assests/Abstract Art Photos/IMG_7328.JPG`
- `assests/Abstract Art Photos/DOC050.jpeg`
- `assests/Abstract Art Photos/Suzzane-Misc.jpg`
- `assests/Abstract Art Photos/Suzzane-Misc2.jpg`

### Group / Live Performance Photos
- `assests/Group Photos/Group-Photo.JPG`
- `assests/Group Photos/Suzanne-Performing-2.JPG`
- `assests/Group Photos/IMG_0702.jpeg`

---

## Key Existing Code to Know

- `index.html` — current single-page site, all sections in one file
- `styles.css` — palette was Navy #1a2744 / Gold #c9a84c / Cream #faf8f3. Being replaced with new dark palette above.
- `animations.js` — GSAP 3.12 + ScrollTrigger. Hero entrance, scroll reveals, gold rule draw, parallax, SVG stroke-draw. Keep and extend.
- GSAP + ScrollTrigger loaded via CDN in index.html — keep this approach.
- Formspree form action: `https://formspree.io/f/REPLACE_WITH_FORM_ID` — leave this placeholder as-is.

---

## Things to Preserve / Not Break

- All existing `assests/` paths must remain valid
- Vercel deploy config (no build step needed — static files deploy automatically)
- `favicon.svg` stays
- Mobile responsiveness — breakpoints at 768px and 480px
- Accessibility basics: `aria-label`, `role`, `alt` text on all images
- The `.nav-toggle` hamburger menu for mobile

---

## Things Being Fixed in This Redesign

- Lesson rates (were "TBD") → now have real values
- YouTube video in performing section → use BOTH videos (n7IscMb3X9A and _3nNeD6kusQ)
- Trio label (was "Honey — acappella harmony group") → now "Sonic Cocktail"
- Full band label (was "The Sunny Siders") → update to "Full Band" for now
- Bio text (was placeholder first-person) → use real 3rd-person bio above
- Image paths were wrong in about section → correct all paths
- Formspree ID still placeholder → leave as-is, client will provide

---

## Build Phases (for reference)

The rebuild is structured in 10 steps. After each step, STOP and summarize what was changed before proceeding to the next. Do not proceed without confirmation.

1. Design tokens + base CSS (new palette, typography, CSS custom properties)
2. Nav (minimal, transparent, shared markup)
3. Hero (full-screen, email capture integrated)
4. About section
5. Music section (audio player + YouTube embeds)
6. Upcoming Events section (placeholder)
7. Lessons section (real rates + testimonials scaffold)
8. Performances Teaser section (home page bridge)
9. Footer (shared)
10. performances.html (full new page)
