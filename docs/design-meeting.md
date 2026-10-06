# Espacio Clinic (led by Dr Liliana) — design meeting (chassis freeze)
Date: 2026-10-06 · Studio lead freeze (Doug standing order: autocomplete, no mid-gate waits)
Path A pitch · **UK geo day** (rotation: City Skin UK 10-01 → Axis USA 10-02 → Lane PT 10-05 → today UK) · source https://www.espacioclinic.co.uk/
UK audit list #4 (Batley #1, Adamthwaite #2, City Skin #3 shipped). Live 200 on 2026-10-06; not in the dglxss.com portfolio. Independent, single-site, doctor-led (HIS registered, BCAM). Not a chain.
Seats at the table: Reed (taste) · Axiom (innovation) · Ash (score / cheap-fail) · Nia · Lux · Prism · Mira · Kit · Wren · Glyph · Tasker · Vale · Jules.

## Domain line
```
Domain: UI/UX — factory transplant (pitch).
Craft shelf: Motionsites seed: aethera-hero remapped to doctor-led healthy-ageing clinic (+ Axiom twist: lexicon open — "espacio · noun · space (distance between things)" tracks apart and hands the word to the nav).
Resource search: shadcn/ui Accordion + Tabs (Radix, MIT) — USE for the concern index filter and the nested treatment/biography collapsibles, restyled in-house, notice kept in THIRD_PARTY.md. Looked at magicui free (Blur Fade — too effecty), easyui, great-ui, paceui (free core MIT; nothing beat shadcn for this register; Pro stays out). vantaui reference only (shipping needs paid plan). designbookmark / cuedesign reference only. dev.cards rejected (Commons Clause). aceternity rejected (license not established).
Color search: colorable.jxnblk.com contrast pass on Espacio's own palette (WCAG ratios): olive #6E7455 on mist #F0EFED = 4.26 (fails AA small text) → small text uses olive-deep #555A41 (6.5 on linen #F7F3EE); deep brown #3C2C25 ink on linen = 12.0; peach #F2AF95 on white = 1.85 → peach is never text on light, only the mark, hairlines and display on the dark field (8.79 on #1F2119). ramps.studio looked at for an olive ramp → CSS written ourselves from #6E7455. No exported gradients shipped.
Tool pass: Motionsites aethera-hero (free seed) = chassis; footer.design looked at for a colophon footer with a registration line (HIS · BCAM · GMC numbers) — rebuilt, not copied; Mobbin treatment → booking flow looked at, look only, nothing shipped; AI Studio not used; Rize not part of the build.
Inspiration vote: brandguidelines.net (seats Wren/Glyph/Tasker) — the Herman Miller guideline (Design by Order) listed there; taken: clear-space / exclusion-zone discipline around a mark and one-idea-per-spread pacing with numbered sections. Look only; nothing copied.
Expensive: material = linen paper + olive velvet (the clinic's own green chairs) on a Castle Terrace sandstone undertone. Cost carried by Playfair Display at very large sizes with the brand's italic emphasis words, wide tracked small caps, long vertical rests (≥ 160px desktop between chapters), and the client's own commissioned shoot at full bleed in real window light. One accent (peach, from the mark). No glass card grids, no icons, no gradients.
Locks: EN default + PT twin · dark|light (persisted).
Stack: React + Tailwind + Next.js (patched 15.5.x ≥ 15.5.27) + GitHub + Vercel.
```

## Brand lock (from live espacioclinic.co.uk — exact)
- Name: **Espacio Clinic** · "Led by Dr Liliana" · title "Espacio Clinic Led by Dr Liliana | Medical Aesthetics Edinburgh" · legal on Duty of Candour: Espacio Medical Aesthetics.
- Hero (exact): **WELCOME *to* your SPACE** · "At Espacio Clinic our primary focus is healthy ageing. Our team of medical experts will empower you and support you in your personal journey." · "Whether you're looking to address a specific concern or the proactive steps towards better health, we provide a friendly, science-led approach to help you thrive." · CTA BOOK NOW / READ MORE
- Address: 12a Castle Terrace, Edinburgh, EH1 2DP · Tel 07782802002 · enquiries@espacioclinic.com
- Hours: Mon 10 am – 6 pm · Tues 10 am – 8 pm · Wed Closed · Thurs 12 pm - 8 pm · Fri 10 am – 3 pm · Sat Closed · Sun Closed
- Registered With: HIS (Health Improvement Scotland) · BCAM (British College of Aesthetic Med)
- Booking: https://partner.pabau.com/online-bookings/espacioclinic (primary)
- Social: https://www.instagram.com/espacioclinic/ · https://www.facebook.com/espacioclinic
- Footer legal: Duty of Candour PDF · Complaints Procedure PDF (client-hosted links in source-harvest.md)
- Colours: olive `#6E7455` (primary), peach `#F2AF95` (mark/accent), blush `#F8D6C9`, clay `#B58370`, cocoa `#79574A`, deep brown `#3C2C25`, mist `#F0EFED`. Path A adds linen `#F7F3EE` (paper) and olive-deep `#555A41` (small text). Dark theme: olive-black field `#1F2119`, mist type `#F0EFED`, sage `#A9AE8E` secondary, peach accent.
- Fonts on source: Playfair Display + Didot italic + Raleway/Lato → Path A: **Playfair Display** (display, keeps the brand's italic emphasis) + **Inter** (seed body/UI). Team names in Playfair Display italic (Didot lineage). One serif, one sans.
- Logo: client peach wordmark + dotted helix mark, and the "Medical Aesthetics by Dr Liliana" roundel — keep exactly.
- Attribution: built by dglxss (localized). Not affiliated · design study.

## Craft shelf VOTE — LOCKED
**Winner: Motionsites `aethera-hero`** (light cinematic hero: large serif headline with italic grey emphasis words, calm grey description, black pill CTA, looping film set *below* the headline with a custom rAF fade-in / fade-out loop and gradient-to-background overlays, fade-rise entrance 0 / 0.2 / 0.4s).
- Steal: the italic-emphasis serif headline (Espacio already writes this way: "WELCOME *to* your SPACE", "*our* TEAM"); the film living under the type with gradient fades into paper instead of a full-bleed video wall; fade-rise cadence; one pill CTA.
- Remap: Aethera studio → Edinburgh doctor-led healthy-ageing clinic; seed video → Espacio's own clinic film (Edinburgh aerial → Castle Terrace → consult → treatment); black CTA → olive pill "BOOK NOW"; grey #6F6F6F emphasis → olive.
- Glass discipline: soft frost on the sticky nav only. Matte linen everywhere else.
- Reject (recent/used): skyelite-hero (Lane) · vortex-studio-hero (Axis) · neo-museum (City Skin) · surgical-prestige (Oralvide/Franklin) · prosthetics-hero (Adamthwaite) · mythic-naturecore (Forsyth) · trust-editorial / clinical-editorial (Batley) · wanderful-hero (Quinta) · equilibrium (Farmington/Boho glass lineage) · creative-studio (Prime Six) · securify-hero (X for Boys).
- Reject (fit): bloom-ai-hero / visual-hero / luminex-hero (liquid-glass heavy) · celestia-hero (dark cinematic, wrong for healthy ageing) · Framer medspa templates (read as template).

## Opening VOTE — LOCKED
Must differ from: Farmington still-poster · Boho Ken Burns · BRA splash video · LP crest micro-loader · Batley quiet open · Franklin letterhead stamp · Quinta cinematic poster · Adamthwaite scroll-reveal · Forsyth verandah curtain · Oralvide smile stamp · City Skin HIW|CQC twin-badge · Axis Growth Practice stamp · Lane key-aperture · (CIO clinic atlas).

| Option | Vote | Why |
| --- | --- | --- |
| Splash video (client film) | Reject | BRA owns splash; the film is better as the aethera band under the headline. |
| Still poster fade | Reject | Farmington / Quinta. |
| Quiet type + mark open | Reject | Batley owns static quiet type. |
| Scroll-revealed hero | Reject | Adamthwaite. |
| Crest / roundel micro-loader | Reject | LP crest family (the roundel would read as a loader). |
| Mask / aperture reveal | Reject | Lane key-aperture. |
| Stamp / badge opens | Reject | Franklin / Oralvide / City Skin / Axis. |
| **Axiom lexicon open** | **WIN** (Reed pass, Ash 10) | The page opens as Espacio's own dictionary entry, set on linen: **espacio** (Playfair, peach-on-dark / olive-on-light), then in small caps "Espacio [spanish] · Space [english]", then "Noun. … space (distance between things)". Then the word *makes space*: letter-spacing of "espacio" eases from 0 to ~0.5em over ~1.1s (cubic-bezier .22,1,.36,1, no bounce) while the definition lines fade, and the word lifts and shrinks into the nav wordmark slot (shared-element / FLIP), handing over to the hero ("WELCOME *to* your SPACE") which fade-rises per aethera with the clinic film rising beneath. Total ≤ 2.4s. Session once (sessionStorage). Skipped on hash deep-link and `prefers-reduced-motion` (static hero, definition shown later in its own section). Tap/click/Esc skips. No video splash. |

## Axiom twists — LOCKED (Reed taste-gate passed)
1. **PRIMARY — lexicon open** (above). The brand's own definition is the motion.
2. **Concern index** — Espacio's exact category system (Skin Concern: Eyes & Eyelids, Skin Laxity & Sagging, Lines & Wrinkles, Lips & Mouth, Texture, Pigmentation, Hair Thinning, Jawline & Chin, Redness, Menopausal Skin, Face Slimming, Excessive Sweating, Exfoliation, Neck & Decollete, Frown & Forehead, Dull Skin, Skin Aging, Collagen Banking, Acne & Blemishes · Women's Health: Menopause Support, Pelvic Floor & Intimate Health · Lifestyle Medicine: Blood Testing · Lifestyle & Weight: Lifestyle Medicine, Medical Weight Management, Blood Testing) as a quiet tab + chip filter over all 25 treatments. Each treatment row/card: real photograph, exact name, "from £" listed price, its exact Target Concerns, and a nested collapsible (Doug's loved pattern) holding the exact pricing lines and FAQ, plus "Book" (Pabau) and "Read on espacioclinic.co.uk" (its live product page). No fake prices, no invented claims.
3. **Castle Terrace ledger** — the team-at-Edinburgh-Castle plate and the arrival film anchor a Visit chapter: address, map, phone, email, and the exact hours set as a ledger with *today* highlighted live in Europe/London time ("Open today 10 am – 8 pm" / "Closed today"). Registration colophon (HIS · BCAM · GMC numbers as published) sits beneath.
Rejected by Reed: before/after slider (ASA/HIS risk, and the brand promise is "not to transform you"); cursor-follow blobs; parallax portrait tilt.

## Identity / photography lock
- Real people only, from the live site, mapped by headless render of /about: Dr Liliana, Dr Becky Harley, Dr Sonia Keane, Dr Shantini Rice, Dr Suzie Clements, Antonia Graham, Madeleine Thomas, Erica Willis, Natalie Smith, Corinne MacDonald (see media-pack/MANIFEST.md). Gentle grade only; no face edits; no generated people.
- Every major section has the client's own commercial shoot photography or film: hero (clinic film), Difference (Dr Liliana + colleague), Treatments (per-category treatment plates), Process (consult plate + treatment film), Team (10 portraits + castle group), Core (botanical interior), Testimonials (velvet chair detail), Definition (consult room), Visit (arrival film + castle). No icon-only grids.
- No generated plates were needed (client shoot covers every section). Before/after composites and text-baked product squares are excluded.

## IA (Path A, one long page + anchors)
Lexicon open → Hero (WELCOME *to* your SPACE + clinic film) · #difference The Espacio Difference · #treatments Our Treatments (concern index) · #process Our Process · #team our TEAM (10 people, bios in collapsibles, GMC numbers) · #core our CORE (Our Difference / Our Why / Our Ethos) · #testimonials What our patients say · #espacio Espacio [spanish] · #visit Contact / Castle Terrace ledger · footer (menu, Duty of Candour, Complaints Procedure, socials, Registered With, © ESPACIO CLINIC, built by dglxss, not affiliated · design study).
Nav (exact labels): Treatments · About (→ #team) · Testimonials · Contact + Tel 07782802002 + EN|PT + theme + **BOOK NOW**.

## Hard locks before merge
1. Opening vote recorded (this file) — lexicon open. 2. Nav spacing triple-check desktop 1440 + phone 390 (logo · nav · tel · EN|PT · theme · BOOK NOW never overlap). 3. Every hash lands heading + first card under the sticky nav (scroll-margin-top = nav height + safe-area). 4. Real photography every major section. 5. Craft ≥ BRA floor (https://txdiepflap.vercel.app/); opening distinct. 6. EN default + PT twin, dark|light, persisted. 7. vercel.json exactly `{ "cleanUrls": true, "trailingSlash": false }`. 8. Git author via env only: Douglxss Johnson <artistdbjohnson@gmail.com>. 9. Studio lead alone merges main. 10. Exact published copy (EN), PT is a faithful translation; not affiliated footer. 11. Expensive gate (Ash fails cheap). 12. Patched Next (≥ 15.5.27).
