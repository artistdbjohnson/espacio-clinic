# Source harvest — espacioclinic.co.uk (2026-10-06, ET)

Target: **Espacio Clinic — led by Dr Liliana**, 12a Castle Terrace, Edinburgh EH1 2DP. UK audit list `/workspace/factory-audit/2026-09-18-uk-local-sme-targets.md` item #4 (#1–#3 already shipped). Independent, single location, doctor-led. Not a chain.
Live check: `https://www.espacioclinic.co.uk/` → **HTTP 200** (937 KB, Wix Thunderbolt). Not in dglxss.com `lib/recent-cases.ts` (no `espacio` id; checked main 2026-10-06).
Stack smell: Wix (footer "Designed by Cleah Creative", © 2023), header search box, circle-crop team grid, wave dividers, product-store treatment grid with text baked into images.

## Meta
- Title: **Espacio Clinic Led by Dr Liliana | Medical Aesthetics Edinburgh**
- Pages harvested (all 200): `/`, `/about`, `/espacio-treatments`, `/services-2` (Testimonials), `/contact`, 25 × `/product-page/<slug>`
- Header nav (exact): Treatments · About · Testimonials · Contact · **BOOK NOW**
- Footer menu (exact): Home · About · Treatments · Duty of Candour · Complaints Procedure

## Links (keep live)
- BOOK NOW (header, home, about, treatments, contact): https://partner.pabau.com/online-bookings/espacioclinic  ← primary booking
- About-page team BOOK NOW: https://espacioclinic.eu.zenoti.com/webstoreNew/services (secondary; keep only on team section if used)
- Tel: **07782802002** → `tel:+447782802002`
- Email: **enquiries@espacioclinic.com** (note: .com, not .co.uk)
- Instagram https://www.instagram.com/espacioclinic/ · Facebook https://www.facebook.com/espacioclinic
- Duty of Candour (PDF): https://www.espacioclinic.co.uk/_files/ugd/56fc6b_737a88fcbcf944698bc251ce516d2db0.pdf
- Complaints Procedure (PDF): https://www.espacioclinic.co.uk/_files/ugd/56fc6b_3c555b335d7446e6acd3892d70341b3c.pdf
- Map: https://www.google.com/maps/search/?api=1&query=12a+Castle+Terrace+Edinburgh+EH1+2DP
- Each treatment's own page: https://www.espacioclinic.co.uk/product-page/<slug> (see treatments-copy.md)

## Address / hours (exact)
12a Castle Terrace, Edinburgh, EH1 2DP
Opening Hours: Mon 10 am – 6 pm · Tues 10 am – 8 pm · Wed Closed · Thurs 12 pm - 8 pm · Fri 10 am – 3 pm · Sat Closed · Sun Closed
Registered With: HIS (Health Improvement Scotland) · BCAM (British College of Aesthetic Med)

## Exact copy files (use verbatim for EN)
- `copy-home.txt` — WELCOME to your SPACE, The Espacio Difference, our TEAM (9 names + roles), Penny quote, Espacio [spanish] definition, footer
- `copy-about.txt` — WELCOME to ESPACIO, MEET our TEAM of medical EXPERTS, full bios (Dr Liliana GMC 3522437, Dr Becky Harley GMC 7264766, Dr Sonia Keane GMC 7406176, Dr Shantini Rice GMC 6073342, Dr Suzie Clements GMC 7020266, Erica Willis, Corinne Macdonald, Natalie Smith, Madeleine Thomas), our CORE / OUR DIFFERENCE / OUR WHY / OUR ETHOS
- `copy-treatments-index.txt` — Our Treatments intro, category filter list, 25 treatment names, OUR PROCESS (It always starts with a conversation / Prepare for it / Treat it)
- `treatments-copy.md` — per-treatment exact description, "Target Concerns", pricing lines, FAQ, listed price, live URL
- `copy-testimonials.txt` — heading on live site reads "What our paitents say..." (typo; our heading may read "What our patients say" — note it as a pitch point). 15 dated testimonials: keep every quote verbatim, typos included.
- `copy-contact.txt` — contact block + hours

Notes for the pitch: home lists **Antonia Graham, Aesthetic Nurse Prescriber** (no bio published); about lists **Dr Suzie Clements, Longevity & Aesthetic Doctor** (not on home). Show both — 10 people. Testimonials mention "Nurse Toni" and "Dr Kev" — keep quotes verbatim, do not invent profiles for them.
Do NOT use the before/after eye/neck composites (d0280745, a02a0fff, 7072f2f9, 3a2abacf) — no before/after claims (ASA/HIS safe).

## Brand
- Colours (live Wix theme + inline): olive **#6E7455** (primary fills, headings), peach **#F2AF95** (logo mark, display accents), blush **#F8D6C9**, clay **#B58370**, cocoa **#79574A**, deep brown **#3C2C25**, mist **#F0EFED**, white. Ink #0F0F0F for names.
- Fonts on source: **Playfair Display** (headings, with italic emphasis words: "WELCOME *to* your SPACE", "*our* TEAM"), **Didot italic** (team names), Raleway / Lato (body).
- Logo: peach "espacio" wordmark + dotted DNA/helix mark (`logo/espacio-logo-peach.png`, transparent), mark only (`logo/espacio-mark-peach.png`), roundel "MEDICAL AESTHETICS BY DR LILIANA" (`logo/espacio-roundel-dr-liliana.png`), olive brand card (`logo/espacio-card-olive.png`). Keep the client mark exactly; recolour only by CSS mask if needed for dark mode (same shape).
