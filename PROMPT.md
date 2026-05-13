# Master Build Prompt — Suzanne Gay Music Redesign
# Paste the content below the line into Claude Code

---

Read CLAUDE.md fully before doing anything else. That file is your complete brief — client info, design direction, palette, typography, asset paths, content, and what's being fixed. Do not skip it.

We are doing a full redesign of this site. Work through the 10 steps below in order. After completing each step, STOP. Give me a brief summary of exactly what you changed, and wait for me to say "continue" (or give you feedback) before moving to the next step.

---

## Step 1 — Design Tokens + Base CSS

Rewrite `styles.css` from scratch with the new design system:

- Replace ALL color values with CSS custom properties from the new palette in CLAUDE.md (--color-bg-deep, --color-bg-mid, --color-bg-card, --color-gold, --color-sage, --color-text, --color-text-muted, --color-rule)
- Update the Google Fonts import to load DM Sans instead of Inter (keep Playfair Display)
- Update the font-family declarations site-wide: headings stay Playfair Display, body/UI switches to DM Sans
- Set `body { background-color: var(--color-bg-deep); color: var(--color-text); }`
- Update all hardcoded hex values to use the new CSS variables
- Keep all existing class names and selectors — only change the values, not the structure
- The gold rule, button styles, nav, and all component styles should remain structurally intact — just re-skinned to the new dark palette
- Do NOT touch index.html or animations.js in this step

When done: list every CSS variable added, confirm the font change, and confirm no index.html edits were made.

---

## Step 2 — Navigation

Update the nav in `index.html`:

- Nav links should be: About · Music · Lessons · Performances · Contact
- "Performances" should link to `performances.html` (a full page link, not an anchor)
- All other links remain anchor links: `#about`, `#music`, `#lessons`, `#contact`
- Keep the mobile hamburger menu exactly as-is (it works well)
- Remove the "Waitlist" nav link — we're integrating that into the hero instead
- The logo "Suzanne Gay Music" stays, with "Music" in gold

When done: show me the updated nav HTML and confirm mobile menu is untouched.

---

## Step 3 — Hero Section

Replace the current hero section in `index.html`:

- Keep full-screen layout, keep the hero-bg / hero-overlay / hero-grain structure
- Background image stays as `assests/Abstract Art Photos/piano.png`
- Update the overlay to be darker: `linear-gradient(to bottom, rgba(10,14,12,0.75) 0%, rgba(10,14,12,0.5) 40%, rgba(10,14,12,0.80) 100%)`
- Hero h1: "Suzanne Gay" — large, italic Playfair Display
- Subheading: "Pianist · Vocalist · Composer · Salt Spring Island" — in DM Sans, muted, italic
- Below the subheading: a minimal inline email capture form (not a section, just 2 elements inline):
  - A single email input with placeholder "your@email.com"
  - A submit button with text "Stay in Touch →"
  - Form action: `https://formspree.io/f/REPLACE_WITH_FORM_ID` method POST
  - Honeypot field: `<input type="text" name="_gotcha" style="display:none" tabindex="-1">`
  - On success: hide the form, show a small inline message: "You're on the list — talk soon. — Suzanne"
- Remove the "Book a Performance" CTA button from the hero (it moves to the performances teaser section)
- Remove the hero-eyebrow "Salt Spring Island, BC" text (this is now in the subtitle)
- Keep GSAP animation targets (.hero-eyebrow class can be repurposed for the subtitle)

In `styles.css`, add styles for:
- `.hero-email-form` — flex row, gap, on mobile stacks to column
- `.hero-email-input` — dark transparent input, gold border on focus, warm text
- `.hero-email-btn` — gold background, navy text, small, uppercase DM Sans
- `.hero-email-thanks` — hidden by default, small italic text in sage green

When done: show me the updated hero HTML and the new CSS classes.

---

## Step 4 — About Section

Update the about section in `index.html`:

- Replace the current placeholder bio with the real bio from CLAUDE.md (verbatim, 3rd person)
- Update the headshot image path to: `assests/Photos of Suzanne/Headshot.JPG`
- Update alt text to: "Suzanne Gay — Salt Spring Island musician"
- Update the h2 to: "About Suzanne"
- Update genre tags to: Jazz · Soul · Blues · Classical (remove "Folk")
- Remove the Bandcamp button — social links live in the footer
- The pull-quote should be: "Her compositions are luminous, emotive, and effortlessly lyrical."
- Keep the gold rule and section-label ("About")
- Background of this section: use `--color-bg-mid` for contrast against the hero
- Optional: use `assests/Abstract Art Photos/Oceaney.jpeg` as a subtle low-opacity background texture on this section (background-image at ~8% opacity behind the dark bg color)

When done: show me the updated about HTML.

---

## Step 5 — Music Section

Add a new section `id="music"` to `index.html` (insert after the about section, before upcoming events):

**Audio Player:**
- Two song cards side by side (stack on mobile)
- Song 1: "Journey Piano" — file: `assests/Song Files/Journey Piano.m4a`
- Song 2: "Why Don't You Do Right" — file: `assests/Song Files/Why Don't You Do Right.mp3`
- Each card has: song title, a custom play/pause button (styled, not default browser controls), and a minimal progress bar
- Use the HTML5 `<audio>` element but hide the default controls (`controls` attribute removed, controlled via JS)
- The play button should be a gold circle with a ▶ / ❚❚ icon that toggles
- Progress bar: a thin gold line that fills as the song plays, clickable to seek

**YouTube Embeds:**
- Two embeds below the audio cards, side by side (stack on mobile)
- Video 1 title: "The Last River" — `https://www.youtube.com/embed/n7IscMb3X9A`
- Video 2 title: "Live Performance" — `https://www.youtube.com/embed/_3nNeD6kusQ`
- Each embed in a responsive 16:9 wrapper with a label above it
- Use `loading="lazy"` on iframes

**Section styling:**
- Background: `--color-bg-deep`
- Section label: "Listen" in gold uppercase
- h2: "Music"
- Add all new CSS to `styles.css`

**JS for audio player (add to end of animations.js or inline in index.html):**
- Play/pause toggle per card
- Progress bar update via `timeupdate` event
- Seekable via click on progress bar
- Pause the other track if you start playing one (only one plays at a time)

When done: show me the new section HTML, CSS classes added, and the audio player JS.

---

## Step 6 — Upcoming Events Section

Add a new section `id="upcoming-events"` to `index.html` (insert after music section):

- Section label: "Live" in gold uppercase
- h2: "Upcoming Shows"
- Body: A simple placeholder state — centered, with a calendar icon (SVG or Unicode), and the text: "No upcoming shows scheduled. Check back soon — or follow on Facebook for the latest."
- The Facebook link in that text should link to `https://www.facebook.com/suzmuzik/`
- Style this as a minimal "empty state" — not sad, just clean and intentional
- Background: `--color-bg-mid`
- The section should be easy to update later: the placeholder is wrapped in a `<div class="events-placeholder">` and the real events would go in a `<div class="events-list">` (empty for now, hidden)
- Add CSS for `.events-placeholder`, `.events-icon`, `.events-list` to styles.css

When done: show me the section HTML and CSS.

---

## Step 7 — Lessons Section

Replace the current teaching/lessons section in `index.html` with an updated version:

**Content changes:**
- Section label: "Private Instruction" (keep)
- h2: "Lessons" (keep)
- Update the descriptive paragraph to: "Piano lessons and vocal coaching for all ages and experience levels. Suzanne's approach is integrative — technique, theory, ear training, and repertoire you actually love. Whether you're a complete beginner or a working musician, lessons are tailored to where you are and where you want to go."
- Remove the "Currently at reduced capacity" notice box entirely
- Replace it with a simple: "Currently booking new students for September 2026." line in muted text
- Update the rates table with the real rates from CLAUDE.md (30 min/$35, 45 min/$50, 60 min/$60, Private Piano or Voice 1hr/$150)
- Remove the "Sliding scale available" rates note
- Remove the "Join the Waitlist" button inside lessons (email capture is in the hero now)

**Add a Testimonials subsection below the rates card:**
- h3: "What Students Say"
- Three placeholder testimonial cards, each with:
  - A quote: use tasteful placeholder text that sounds real (e.g. "Suzanne has a rare gift for meeting you exactly where you are as a musician...")
  - Attribution: "— Student, Salt Spring Island" (generic until real quotes arrive)
- Cards arranged in a 3-column grid (stack to 1 column on mobile)
- Styled dark card with a left gold border and italic Playfair quote text

**Background:** `--color-bg-mid`

When done: show me the updated lessons HTML.

---

## Step 8 — Performances Teaser Section

Add a new section `id="performances"` to `index.html` (insert after lessons, before footer):

- This is a brief, atmospheric bridge section — not a full performances listing
- Background: a full-bleed photo — use `assests/Photos of Suzanne/Suzanne-Performing.JPG` with a dark overlay
- Section label: "Live Performance" in gold
- h2: "Available to Book" in large italic Playfair Display, white
- Subtext (one line): "Solo · Duo · Trio · Full Band · Weddings · Funerals · Private Events"
- Single CTA button: "See Booking Options →" — links to `performances.html`
- Button style: gold background, navy text (btn-primary)
- This section should feel like a concert poster — full bleed, dark, dramatic, minimal text

CSS notes:
- `.perf-teaser` — position relative, min-height 60vh, display flex, align-items center
- `.perf-teaser-bg` — absolute, inset 0, background-image, background-size cover, background-position center top
- `.perf-teaser-overlay` — absolute, inset 0, dark gradient overlay
- `.perf-teaser-content` — relative z-index 2, text centered or left-aligned

When done: show me the section HTML and CSS.

---

## Step 9 — Footer

Update the footer in `index.html`:

- Keep the 3-column layout (brand · contact · social)
- Update social links: keep Facebook, keep Bandcamp, keep Email
- Add: "Performances" link pointing to `performances.html` in a new "Pages" column (4th column or merge into brand column)
- Background: keep `#0f1929` or update to near-black using `--color-bg-deep`
- Remove the old `.credibility-strip` and `.stats-strip` — these are being cut from the redesign (they feel too corporate for the new direction)
- Remove the standalone `#waitlist` section entirely — email capture is in the hero now
- Footer tagline: "Pianist · Vocalist · Composer · Salt Spring Island, BC"
- Copyright: "© [year] Suzanne Gay. Site by OBDesign."
- The `id="contact"` anchor should be added to the footer (nav links to #contact)

When done: show me the updated footer HTML and confirm the old waitlist section + strips have been removed.

---

## Step 10 — performances.html (New Page)

Create a new file `performances.html` with:

**Head:**
- Same meta tags as index.html (update title to "Book Suzanne Gay | Performances & Events")
- Same Google Fonts, favicon, styles.css, and animations.js links
- Same GSAP CDN scripts

**Nav:** Identical to index.html nav (copy it exactly)

**Page Hero:**
- Full-screen section with `assests/Photos of Suzanne/Suzanne-Performing.JPG` as background
- Same grain + overlay structure as main hero
- h1: "Book Suzanne Gay"
- Subtitle: "Live music for weddings, funerals, and private events on Salt Spring Island and beyond."
- No email capture here — just atmosphere

**Performance Formats section:**
- Section label: "The Music" in gold
- h2: "Performance Formats"
- 5 cards in a responsive grid:
  1. **Solo** — Piano & Voice. Intimate, versatile, perfect for smaller events.
  2. **Duo** — Guitar & Vocals. Suzanne Gay + Jim Shultz (guitar). Warm and acoustic.
  3. **Duo** — Piano & Vocals. Suzanne Gay + Grace McNab (piano). Rich and sophisticated.
  4. **Trio** — Sonic Cocktail. Suzanne Gay + Jim Shultz + Bruce Grey. Jazz, soul, blues & pop.
  5. **Full Band** — The full band experience for larger events and festivals.
- Cards: dark background (`--color-bg-card`), gold top border, format name as h3, description as small text
- Keep the SVG icon from the existing format cards if possible, or use simple Unicode music symbols

**Event Types section:**
- Section label: "Occasions" in gold
- h2: "What Suzanne Performs For"
- Three large sections, one per event type, each with:
  - Icon (SVG or Unicode): rings for weddings, candle for funerals, clinking glasses for parties
  - Event type name as h3
  - 2–3 sentence description (write tasteful copy for each)
- Laid out in a 3-column grid (stack on mobile)
- Background: `--color-bg-mid`

**Booking Form section:**
- h2: "Get in Touch to Book"
- Introductory line: "Fill in the form below and Suzanne will get back to you within 2 business days."
- Form fields:
  - Name (text, required)
  - Email (email, required)
  - Phone (tel, optional)
  - Event type (select: Wedding · Funeral/Memorial · Private Party · Other)
  - Event date (date, optional)
  - Message / additional details (textarea)
  - Honeypot field (hidden)
- Action: `https://formspree.io/f/REPLACE_WITH_FORM_ID` method POST
- Submit button: "Send Inquiry →" in gold
- Thank-you state: same pattern as hero email form (hide form, show message)
- Background: `--color-bg-deep`

**Footer:** Copy footer exactly from index.html.

When done: confirm the file exists, list all sections created, and tell me if any styles needed to be added to styles.css.

---

## Final Check

After all 10 steps are confirmed:

1. Open both pages in a browser and do a visual scan — report anything that looks broken
2. Check that all image paths resolve correctly (no 404s) — list any that are suspect
3. Check that both audio files are referenced correctly
4. Confirm the nav "Performances" link correctly points to performances.html
5. Confirm the mobile hamburger menu works on both pages
6. Confirm animations.js loads without console errors on both pages
