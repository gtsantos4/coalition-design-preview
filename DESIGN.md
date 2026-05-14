---
name: Pathways to Family Success
description: A Charlottesville mutual-aid coalition of four community organizations — warm humanist editorial design system adapted from Lovable, with a persimmon accent and Newsreader serif headlines.
colors:
  primary: "#DC6B3F"
  primary-deep: "#B95527"
  surface: "#FAF1DF"
  ink: "#1F1B16"
  off-white: "#FCFBF8"
  muted: "#5F5F5D"
  hairline: "#ECE3CE"
typography:
  display: "Newsreader"
  body: "Plus Jakarta Sans"
  mono: "JetBrains Mono"
spacing:
  base: 8
  scale: "8/10/12/16/24/32/40/56/80/96/120/144/176/208"
radius:
  micro: 4
  standard: 6
  comfortable: 8
  card: 12
  container: 16
  pill: 9999
---

# Pathways to Family Success — Design System

A design system for a Charlottesville mutual-aid coalition of four community organizations (United Way of Greater Charlottesville, ReadyKids, Starr Hill Pathways, and City of Promise). The system adapts Lovable's warm humanist editorial framework with a persimmon accent color and Newsreader serif headlines.

## 1. Visual Theme & Atmosphere

The coalition's website and reports radiate warmth through restraint. The entire page sits on a warm cream-toned background (`#FAF1DF`) — perceptibly warmer than Lovable's parchment, with a more yellow undertone, but still in cream territory. This deliberate choice separates the coalition from cold-white nonprofit and tech aesthetics: the page feels approachable, almost analog, like a well-crafted community publication. Near-black ink (`#1F1B16`, a warm charcoal rather than cool) against this warm cream creates a contrast ratio that's easy on the eyes while maintaining sharp readability.

The Newsreader variable serif is the system's voice. Unlike geometric sans-serifs that signal "tech company" or condensed editorial serifs that signal "fashion magazine," Newsreader has a humanist warmth — generous proportions, optical sizing that gets more characterful at display sizes and cleaner at body sizes, a comfortable reading rhythm for longform content. At display sizes (52px–116px), weight 500 with tight letter-spacing (-1.0 to -2.0px) compresses headlines into confident, editorial statements. Plus Jakarta Sans handles all body, navigation, button, and UI text — a humanist sans that pairs naturally with Newsreader because both share humanist construction and generous proportions.

What makes the system distinctive is its **single-accent restraint**: a persimmon orange (`#DC6B3F`) appears only at moments of emphasis — italic phrases in headlines, the period in the wordmark, one punctuation stat, member-card section labels. The accent is never used for body text, button fills, or large surfaces. Like Airbnb's Rausch red, the rule is: most pages are warm-neutral with one or two persimmon moments per screen.

The system shares Lovable's **opacity-driven depth model**: rather than a traditional gray scale, the system modulates `#1F1B16` at varying opacities (0.04, 0.10, 0.48, 0.68, 0.92) to create a unified tonal range. Every gray on the page is technically the same warm hue — just more or less transparent. Border system follows: `1px solid #ECE3CE` for light divisions (the warm hairline) and `1px solid rgba(31, 27, 22, 0.4)` for stronger interactive boundaries.

**Key Characteristics:**
- Warm cream background (`#FAF1DF`) — deliberately warm-toned, never pure white
- Newsreader variable serif at display sizes with optical sizing (opsz 18–144) and tight letter-spacing
- Plus Jakarta Sans for body, UI, and navigation
- Persimmon (`#DC6B3F`) as the single accent, used only at moments of emphasis
- Opacity-driven color system: all warm grays derived from `#1F1B16` at varying transparency
- Inset shadow technique on dark buttons (same as Lovable): `rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset`
- Warm neutral border palette: `#ECE3CE` for subtle, `rgba(31,31,22,0.4)` for interactive
- Full-pill radius (`9999px`) for eyebrow tags and icon containers
- Documentary photojournalism, not editorial portraiture or stock

## 2. Color Palette & Roles

### Primary
- **Cream** (`#FAF1DF`): Page background, card surfaces, button surfaces. The foundation — warm, paper-like, human.
- **Ink (Warm Charcoal)** (`#1F1B16`): Primary text, headings, dark button backgrounds. Not pure black — organic warmth with a slight brown undertone.
- **Off-White** (`#FCFBF8`): Button text on dark backgrounds, subtle highlights.

### Accent (Single-Use)
- **Persimmon** (`#DC6B3F`): The only saturated color in the system. Used **strategically and sparingly**:
  - Italic emphasis phrases in headlines (`h1 em`, `h2 em`)
  - The period in the wordmark lockup
  - One "punchline" stat number per stats group (italic, persimmon)
  - Member-card section labels ("Member · 01" etc., uppercase mono)
  - Eyebrow pill dots
  - Pull-quote opening quotation mark
- **Persimmon Deep** (`#B95527`): Hover/active state for any persimmon CTA or link. Rarely used since persimmon is rarely interactive.

### Neutral Scale (Opacity-Based)
All grays derive from `#1F1B16`:
- **Ink 100%** (`#1F1B16`): Primary text, headings, dark surfaces.
- **Ink 92%** (`rgba(31,27,22,0.92)`): Strong secondary text.
- **Ink 68%** (`rgba(31,27,22,0.68)`): Body copy secondary, navigation links default state.
- **Muted Gray** (`#5F5F5D`): Captions, footnotes, link colors in cool contexts.
- **Ink 48%** (`rgba(31,27,22,0.48)`): Tertiary text, meta information.
- **Ink 40%** (`rgba(31,27,22,0.4)`): Interactive borders, button outlines.
- **Ink 10%** (`rgba(31,27,22,0.10)`): Section dividers, card borders inside hairline contexts.
- **Ink 4%** (`rgba(31,27,22,0.04)`): Subtle hover backgrounds, micro-tints.

### Surface & Border
- **Hairline (Warm Divider)** (`#ECE3CE`): Card borders, dividers, image outlines. The warm divider line, tracks the cream temperature.
- **Cream Surface** (`#FAF1DF`): Card backgrounds — same as page background for seamless integration.

### Inset Shadows (Same as Lovable)
- **Button Inset** (`rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px`): Signature multi-layer inset on dark buttons.
- **Focus Shadow** (`rgba(0,0,0,0.1) 0px 4px 12px`): Soft, diffused, warm focus glow.

## 3. Typography Rules

### Font Families
- **Display**: `'Newsreader', Georgia, serif`
  - Variable font with optical sizing axis (`opsz` 6–72 small, 6–72 large)
  - Weights 400–700 (use 400, 500, 600)
  - Italic available across all weights
  - Feature: optical sizing makes display sizes richer/more characterful; body sizes stay clean
- **Body / UI**: `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`
  - Weights 400, 500, 600
  - Humanist sans with rounded terminals, pairs naturally with Newsreader
- **Mono / Labels**: `'JetBrains Mono', ui-monospace, monospace`
  - Used only for small caps labels, eyebrow text, code-like accents

### Hierarchy

| Role | Font | Size | Weight | opsz | Line Height | Letter Spacing | Style |
|------|------|------|--------|------|-------------|----------------|-------|
| Display Hero | Newsreader | 60–68px | 500 | 72 | 1.05–1.08 | -1.0 to -1.2px | Regular; italic on emphasis |
| Section Heading | Newsreader | 50–56px | 500 | 60–120 | 1.08–1.12 | -0.8 to -1.4px | Regular; italic on emphasis |
| Sub-heading | Newsreader | 36–44px | 500 | 60 | 1.15 | -0.5 to -0.9px | Regular |
| Card / Member Title | Newsreader | 24–26px | 500 | 24–36 | 1.22–1.25 | -0.3 to -0.5px | Regular |
| Wordmark Top | Newsreader | 24px | 500 | 24 | 1.0 | -0.1px | Regular |
| Lede | Plus Jakarta Sans | 18–21px | 400 | — | 1.50–1.55 | normal | Regular |
| Body | Plus Jakarta Sans | 16–17px | 400 | — | 1.55–1.72 | normal | Regular |
| Button | Plus Jakarta Sans | 14–15px | 400–600 | — | 1.50 | normal–-0.005em | Regular |
| Link | Plus Jakarta Sans | 14–16px | 400 | — | 1.50 | normal | Underlined on default state |
| Eyebrow Pill | Plus Jakarta Sans | 13px | 400 | — | 1.0 | normal | Regular |
| Label / Caps | JetBrains Mono | 11–13px | 500 | — | 1.0 | 0.16–0.20em | Uppercase |

### Pull Quote
- Newsreader, italic, weight 400, 40px, line-height 1.28, letter-spacing -0.5px
- opsz 60
- Persimmon opening quotation mark (sized 1.3em, color `#DC6B3F`)

### Principles
- **Two voices, clear roles**: Newsreader (display, considered, warm, character-driven) and Plus Jakarta Sans (body, clean, readable, humanist). The serif/sans pairing is intentional editorial.
- **Optical sizing as design tool**: Newsreader's variable opsz axis lets display sizes feel richer at large scale and stay readable at small. Always set `font-variation-settings: 'opsz' [appropriate value]` on Newsreader elements.
- **Compression at scale**: Headlines use negative letter-spacing (-0.5 to -1.4px) for editorial impact. Body text stays at normal tracking for comfortable reading.
- **Italic for emphasis, persimmon for emphasis-of-emphasis**: Italic phrases in headlines mark conceptual emphasis. Persimmon-colored italic is reserved for the single most important phrase per headline.
- **No bold body**: Body weight is 400. Hierarchy comes from family change, size, and italic — not weight bumps.

## 4. Logo Lockup

The wordmark "Pathways to Family Success." is rendered as a **two-line stacked SVG lockup** with matched widths via `textLength` and `lengthAdjust="spacing"`.

### Construction
- **Top line**: "Pathways to" — Newsreader 500, smaller font size, stretched via `textLength` to identical width as bottom line. Inter-letter spacing reads as airy/wide-tracked, intentional masthead styling.
- **Bottom line**: "Family Success." — Newsreader 500, larger font size, stretched via `textLength` to identical width as top line (minimal stretching since natural width is close to target).
- **Terminal period**: `#DC6B3F` (persimmon). The only color moment in the lockup.
- **Flourish**: A thin 1px non-scaling-stroke horizontal hairline above the lockup, full width. Adds editorial gravitas, like a publication masthead.
- **No italic, no decorative elements, no icon, no surrounding border.**

### Sizes
- **Primary display**: SVG width 600px, top font 52px, bottom font 116px
- **Compact (nav/footer)**: SVG width 220–240px (same viewBox 700×280)
- **Favicon**: Single italic "F." in Newsreader on cream, persimmon period

### Color Rules
- Lockup ink: `#1F1B16` on `#FAF1DF` (cream surface)
- Period: `#DC6B3F`
- Rule: `#1F1B16` at 100% opacity, 1px non-scaling stroke

## 5. Component Stylings

### Buttons (Same as Lovable, swap fill color when applicable)

**Primary Dark (Inset Shadow)** — the signature CTA
- Background: `#1F1B16` (the warm charcoal, not Lovable's `#1c1c1c`)
- Text: `#FCFBF8`
- Padding: 12px 20px (slightly more generous than Lovable's 8px 16px for nonprofit warmth)
- Radius: 6px
- Shadow: `inset 0 -2px 0 rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.18), 0 1px 2px rgba(31,27,22,0.08)`
- Active: opacity 0.85
- Focus: `rgba(0,0,0,0.1) 0px 4px 12px` shadow
- Use: Primary CTAs ("Read the 2025 report")

**Ghost / Outline**
- Background: transparent
- Text: `#1F1B16`
- Padding: 12px 20px
- Radius: 6px
- Border: `1px solid rgba(31,27,22,0.4)`
- Hover: background `rgba(31,27,22,0.04)` (the Ink 4% tint)
- Use: Secondary actions ("Meet the coalition")

**Eyebrow Pill**
- Background: `#FAF1DF` (cream)
- Border: `1px solid #ECE3CE` (warm hairline)
- Padding: 6px 14px
- Radius: 9999px (full pill)
- Text: `#1F1B16`, 13px Plus Jakarta Sans
- Dot accent: 6px circle, `#DC6B3F` (persimmon), with 8px gap
- Use: Hero eyebrow ("Charlottesville · Est. 2026"), section context labels

### Cards & Containers

**Member / Content Card**
- Background: `#FAF1DF` (matches page)
- Border: `1px solid #ECE3CE`
- Radius: 12px
- No box-shadow by default
- Hover: border darkens to `rgba(31,27,22,0.4)`, lifts `transform: translateY(-2px)` over 150ms

**Image Card (within member card)**
- Aspect ratio: 16/9 landscape (member cards) or 4/5 portrait (hero)
- Border-bottom: `1px solid #ECE3CE` (separates image from text below)
- Radius: inherits container's 12px (top corners only when image is at top of card)
- Image: `object-fit: cover, object-position: center`

### Stats

- Layout: 4-column horizontal grid between two hairline rules (`1px solid #ECE3CE`)
- 64px vertical padding per stat
- Stat number: Newsreader 56px weight 500 opsz 72, letter-spacing -1.0px
- One "punctuation stat" per group uses italic + persimmon (`.stat.pop .num`)
- Stat label: Plus Jakarta Sans 14px `#5F5F5D` muted gray

### Pull Quote
- Centered, padded 128px vertical
- Bracketed by top and bottom hairline rules
- Quote: Newsreader 40px italic, opsz 60, letter-spacing -0.5px
- Opening quote mark colored persimmon at 1.3em
- Citation: Plus Jakarta Sans 14px muted

### Eyebrow / Section Label (Inline)
- Plus Jakarta Sans, 14px, muted gray (`#5F5F5D`)
- Preceded by a 16px wide × 1px tall horizontal rule in muted gray
- Followed by 24px margin before the heading

### Navigation
- Padding: 24px 40px
- Wordmark left-aligned (SVG lockup at 220px width)
- Links: Plus Jakarta Sans 15px weight 400, `#1F1B16` text on hover, underline decoration
- CTA: dark button with inset shadow, 6px radius
- Border-bottom: `1px solid #ECE3CE`

### Footer
- Background: `#FAF1DF` (continues page surface)
- Top border: `1px solid #ECE3CE`
- 64px top padding, 48px bottom
- Multi-column link layout (4 columns at desktop)
- Decorative warm gradient bloom at bottom edge (peach + cream radials at low opacity)

### Image Treatment
- All photographic images: `1px solid #ECE3CE` border, 12px border radius
- No drop shadow; the warm border is the containment mechanism
- Hero hero gradient wash: soft radial gradients in peach, cream, persimmon tints at low opacity (0.25–0.45) creating atmospheric warmth without competing with the photograph

## 6. Layout Principles

### Spacing System (Inherited from Lovable)
- Base unit: 8px
- Scale: 8, 10, 12, 16, 24, 32, 40, 56, 80, 96, 120, 128, 144, 176, 192, 208
- The scale expands generously at the top end — section vertical spacing uses 80–208px for editorial breathing room

### Section Rhythm
- **Hero**: 96–144px top padding, 120–144px bottom
- **Major sections**: 120–160px vertical separation between content blocks
- **Within sections**: 24–56px between heading and body
- **Card internals**: 24–32px padding
- **Two-column grids**: 64–80px gap between columns

### Grid & Container
- Max content width: 1180–1200px (centered)
- Container padding: 40px horizontal
- Hero: 2-column grid (0.9fr / 1.1fr) — image left, text right; collapses to single column at <900px
- Section content: single column or 2-column (1fr/1fr) with 64px gap

### Whitespace Philosophy (Same as Lovable)
- **Editorial generosity**: Lavish at section boundaries (120–160px). The warm cream makes these expanses feel cozy, not empty.
- **Content-driven rhythm**: Tight internal spacing within cards (12–24px) contrasts with wide section gaps, creating a reading rhythm that alternates between focused content and visual rest.
- **Section separation**: Hairline rules between major content blocks (`1px solid #ECE3CE`) when grouping is helpful; otherwise spacing alone defines hierarchy.

### Border Radius Scale (Same as Lovable)
- Micro (4px): Small interactive elements
- Standard (6px): Buttons, inputs, nav menu
- Comfortable (8px): Compact cards, divs
- Card (12px): Standard cards, image containers, member cards
- Container (16px): Large containers
- Full Pill (9999px): Eyebrow pills, action pills, icon buttons

## 7. Depth & Elevation (Same Philosophy as Lovable)

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, cream background | Page surface, most content |
| Bordered (Level 1) | `1px solid #ECE3CE` | Cards, images, dividers |
| Inset (Level 2) | Multi-layer inset shadow | Dark buttons, primary actions |
| Focus (Level 3) | `rgba(0,0,0,0.1) 0px 4px 12px` | Active/focus states |
| Ring (Accessibility) | `rgba(220,107,63,0.5)` 2px ring | Keyboard focus on inputs |

**Shadow Philosophy**: Depth is intentionally shallow. Instead of floating cards with drop-shadows, the system relies on warm borders (`#ECE3CE`) against the cream surface to create gentle containment. The only notable shadow is the multi-layer inset on dark CTAs — a white highlight line at the top edge with a dark ring and soft drop, creating a tactile, pressed-into-surface feeling.

### Decorative Depth
- Hero: soft, warm multi-color gradient wash (peach `rgba(255,198,174,0.35)`, lavender `rgba(232,196,218,0.30)`, persimmon `rgba(220,107,63,0.30)`) — atmospheric, barely visible
- Footer: gradient bloom at bottom edge with warm peach/cream
- No harsh section dividers — spacing and background warmth handle transitions

## 8. Photography

The system uses **documentary photojournalism**, not editorial portraiture or stock imagery. This is the single most important guideline for the coalition's visual identity.

### Approach
- **Candid, not posed**: Subjects engaged in real activities, not glancing at the camera
- **Real environments**: Apartment kitchens, church fellowship halls, neighborhood streets, public libraries — not stylized maker spaces or aspirational interiors
- **Real lighting**: Mixed daylight + interior bulbs, overcast afternoons. **No golden-hour fantasy, no magic-hour filtering, no shallow-DoF romanticization**
- **Real subjects**: The coalition serves low-income Charlottesville families, predominantly Black families and families of color. Subjects must reflect this. Never default to white middle-class stand-ins.

### Style References
The following photographers establish the visual register:
- **Mary Ellen Mark** — working-class American family life with intimate documentary respect
- **LaToya Ruby Frazier** — Black families, working-class communities, generational portraits
- **Dawoud Bey** — Black American communities and youth portraiture with dignity
- **Eli Reed** — civic life, community organizing, Black American documentary
- **Carrie Mae Weems** — historically Black neighborhoods, community as ongoing daily life

### Treatment in Layout
- All photographs framed with `1px solid #ECE3CE` warm hairline border
- `border-radius: 12px`
- `object-fit: cover` with `object-position: center` (or center-weighted toward subject if known)
- Hero image: 4/5 portrait aspect ratio
- Member card images: 16/9 landscape
- No drop shadows
- No color filtering applied — warmth must come from the actual scene's lighting, not post-processing

### Avoid
- Stock-photo bright smiles
- Editorial portrait poses
- Shallow depth-of-field that romanticizes
- Magic-hour or golden-hour fantasy lighting
- Picturesque-poverty clichés
- Aspirational lifestyle look
- Branded clothing or commercial product placement
- Drone shots
- Sweeping establishing shots of neighborhoods
- Corporate boardroom aesthetics
- Posed group smiles toward camera

## 9. Do's and Don'ts

### Do
- Use the warm cream background (`#FAF1DF`) as the page foundation — it's the brand's signature warmth
- Use Newsreader at display sizes with optical sizing variation (`font-variation-settings: 'opsz' [value]`) and negative letter-spacing (-0.5 to -1.4px)
- Derive all grays from `#1F1B16` at varying opacity levels for tonal unity
- Reserve persimmon (`#DC6B3F`) for **emphasis moments only**: italic emphasis phrases, the wordmark period, one punchline stat, member labels, eyebrow dots
- Use the multi-layer inset shadow technique on dark buttons for tactile depth
- Use `#ECE3CE` warm hairline borders instead of shadows for card containment
- Pair Newsreader (display) with Plus Jakarta Sans (body) — never use one for the other's role
- Use full-pill radius (9999px) only for eyebrow pills and icon buttons
- Apply opacity 0.85 on active button states for responsive tactile feedback
- Use the matched-width SVG `textLength` technique for the wordmark to keep top and bottom lines exactly the same width

### Don't
- Don't use pure white (`#FFFFFF`) as a page background — the cream is intentional
- Don't use Lovable's exact `#f7f4ed` cream — ours is `#FAF1DF` (warmer, more yellow undertone)
- Don't use heavy box-shadows for cards — warm borders are the containment mechanism
- Don't use persimmon for body text, button fills, or large surfaces — it loses meaning if overused
- Don't use weight 700 (bold) at body sizes — 600 is the maximum, and only on display
- Don't apply 9999px radius on rectangular content buttons — pills are for eyebrows and icon toggles
- Don't use sharp focus outlines — the system uses soft shadow-based focus indicators
- Don't increase letter-spacing on headings — Newsreader is designed to run tight at scale
- Don't add italic on bottom line of wordmark — the lockup is regular weight throughout, persimmon period is the only flourish
- Don't use stock photography, posed group shots, or smiling-at-camera images for any member-card or hero use
- Don't apply color filters or warm-tone post-processing to photographs — environmental warmth only

## 10. Responsive Behavior

### Breakpoints (Same Philosophy as Lovable)
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | <600px | Tight single column, reduced padding (24px container) |
| Mobile | 600–768px | Single column, hero image stacks above text |
| Tablet | 768–1024px | 2-column grids begin (member cards), hero stays single |
| Desktop | 1024–1280px | Hero splits 2-col (image left / text right), full feature layout |
| Large Desktop | 1280–1536px | Maximum content width, generous margins |

### Collapsing Strategy
- **Hero**: 2-col → 1-col at <900px (image moves above text, aspect shifts from 4:5 portrait to 16:10 landscape)
- **Headline scaling**: 60–68px desktop → 48px tablet → 36px mobile
- **Section spacing**: 120–160px → 80px → 56px on mobile
- **Member card grid**: 2-col → 1-col at <768px
- **Stats**: 4-col → 2-col at <768px → 1-col at <480px
- **Footer**: 4-col → 2-col → stacked single column

## 11. Agent Prompt Guide

### Quick Color Reference
- Page background: Cream (`#FAF1DF`)
- Primary text: Warm Ink (`#1F1B16`)
- Secondary text: `rgba(31,27,22,0.68)` or Muted Gray (`#5F5F5D`)
- Accent (use sparingly): Persimmon (`#DC6B3F`)
- Border: `#ECE3CE` (passive), `rgba(31,27,22,0.4)` (interactive)
- Primary CTA: Charcoal (`#1F1B16`) with inset shadow
- Focus: `rgba(0,0,0,0.1) 0px 4px 12px`

### Example Component Prompts
- "Create a hero section on cream (`#FAF1DF`). Image (4:5 portrait) on the left in 0.9fr column with `1px solid #ECE3CE` border and 12px radius. Text on the right in 1.1fr column: eyebrow pill (cream bg, hairline border, 9999px radius, persimmon dot), then headline at 64px Newsreader weight 500 opsz 72, letter-spacing -1.2px, with one italicized phrase in persimmon (`#DC6B3F`). Lede below at 18px Plus Jakarta Sans, color `rgba(31,27,22,0.68)`. Dark CTA button with inset shadow + ghost button."
- "Design a member card on cream (`#FAF1DF`). Border: 1px solid `#ECE3CE`. Radius 12px. Image at top, 16/9 landscape with `1px solid #ECE3CE` bottom border. Inside the card body: small caps label in JetBrains Mono 12px persimmon ('Member · 01'), then title at 24px Newsreader weight 500 opsz 24, letter-spacing -0.3px. Description in Plus Jakarta Sans 15px, color `rgba(31,27,22,0.68)`."
- "Build the wordmark: two-line SVG stacked lockup with matched widths via textLength. Top line 'Pathways to' at 52px Newsreader weight 500, stretched. Bottom line 'Family Success.' at 116px Newsreader weight 500, stretched, with the terminal period in persimmon (`#DC6B3F`). Thin 1px hairline rule above using non-scaling-stroke. Both lines exactly 600px wide."
- "Create a pull quote: centered between top and bottom hairline rules (`1px solid #ECE3CE`), 128px vertical padding. Quote in Newsreader italic 40px weight 400 opsz 60, letter-spacing -0.5px. Opening quote mark colored persimmon at 1.3em. Citation below in Plus Jakarta Sans 14px Muted Gray (`#5F5F5D`)."

### Iteration Guide
1. Always use cream (`#FAF1DF`) as the base — never pure white
2. Derive grays from `#1F1B16` at opacity levels rather than using distinct hex values
3. Use `#ECE3CE` warm hairline borders for containment, not shadows
4. Letter-spacing on Newsreader scales with size: -1.2px at 64px, -0.9px at 50px, -0.5px at 40px, -0.3px at 24px, normal at body sizes
5. Persimmon (`#DC6B3F`) is reserved — italic emphasis, period in wordmark, one punctuation stat per group, member labels, eyebrow dots. Nothing else.
6. The inset shadow on dark buttons is the signature tactile detail — don't skip it
7. Photography is documentary, real, photojournalistic — see Section 8
8. Both wordmark lines must be exactly the same width (use SVG `textLength`)
