# Espacio Clinic — motion meeting
Date: 2026-10-06 · Motion pass on the shipped Path A pitch (branch `worktree/grok-motion-espacio`).
Seats: Vale (timing) · Reed (taste) · Glyph (the mark and the pause) · Ash (score / cheap-fail) · Axiom (optional, one proposal).
Looked at: https://www.prompt-motion.com/ — attitude and timing only. No videos rehosted. No prompt packs copied. Chassis remains Motionsites `aethera-hero` plus the locked lexicon open (`docs/design-meeting.md`).

## What already moves
The lexicon open is the only intro: dictionary entry, tracking ease 0 → 0.5em over 1.1s (`cubic-bezier(0.22, 1, 0.36, 1)`, no bounce), definition fades, the word hands itself to the nav, hero fade-rises (20px, 0.8s ease-out, delays 0 / 0.2 / 0.4 / 0.55s). Once per session (`sessionStorage`). Skipped on hash, on `prefers-reduced-motion`, and on tap / click / Esc. Total ≤ 2.4s.
Under that: plates settle 1.04 → 1 over 1.4s on enter; clinic / treatment / arrival films keep the aethera 0.5s fade loop; the olive pill scales 1.03 on hover. Nothing else on the chapters moves. The open is left as shipped — no second intro, no stacked splash, no retiming of the handoff.

## Prompt Motion — what the table took
The gallery’s own chrome (not the films) is the useful clock: posters resolve in 500ms ease-out and drop the transition under `motion-reduce`; preview video fades in over 300ms ease-out; the hover ring is 200ms; a pause control exists because the previews loop. The films themselves are mostly showreels and launch pieces — kinetic type, shape morphs, logo films. That density is the wrong register for a doctor-led clinic on Castle Terrace.
Taken: ease-out, one gesture then a hold, reduced motion removes the transition, nothing new loops. Left: “go all out” reels, morphing UI, a second open, anything that keeps moving after it has arrived.

## Candidates

| Option | Vote | Why |
| --- | --- | --- |
| Second intro, splash, or a kinetic-type reel over the hero | Reject | The lexicon open already spends the entrance. Prompt Motion’s showreels are the attitude we are not buying. |
| Tracking reprise on `#espacio` (the word opens again) | Reject | Same gesture twice. Reed: the open already made the space. |
| Scroll-scrubbed tracking on the hero (Axiom) | Reject | Competes with the open and never holds. |
| Stagger every treatment card, portrait, and quote | Reject | Ash: a cascade across 25 cards is a template. Plates already settle. |
| Cursor-follow, parallax tilt, before/after | Reject | Already refused in the design meeting. |
| New looping ornament, grain, or ken burns beyond the plate settle | Reject | The films already loop. A second loop reads as chrome. |
| **Chapter settle** | **WIN** | Each chapter kicker, then its display heading, fade-rises once on enter. Same 20px / 0.8s family as the hero, curve `cubic-bezier(0.22, 1, 0.36, 1)`. Kicker leads; the title follows at +160ms (between the gallery’s 150ms icon and 200ms ring, slowed one notch for linen). Then it holds. Resting type, colour, and measure are unchanged. |
| **Difference ledger** | **WIN** | The six published lines set themselves once, as one list: 14px, 0.7s, same curve, 90ms stagger. The sequence is about 1.15s and then still. Quieter than the headings because it is a list, not a title. Hairlines travel with their lines, so no empty rules sit in the gap. |

Reed pass. Ash 9 — would fail a third move, a loop, or motion on the treatment index. Glyph: the 90ms gaps are the space between the lines; do not animate the numerals apart from the sentence. Vale: no overshoot (the curve ends at 1, not past it), no bounce, disconnect the observer so a scroll back does not replay.

## Locked timing
1. **Chapter settle** — `.chapter-head` on the kicker + `h2` of `#difference`, `#treatments`, `#process`, `#team`, `#core`, `#testimonials`, `#espacio`, `#visit` only. Not body copy, not `01` / `02` kickers, not the hero (the hero still belongs to the open). Once, when the head crosses 32px into the viewport. `prefers-reduced-motion`: no hide, no animation.
2. **Difference ledger** — the six lines in `#difference` only. Once, when the list is a little in view (`threshold` 0.12). Same reduced-motion rule.
3. These are not an intro, so they are not gated on `sessionStorage`. They play once per page view. The lexicon open remains the only once-per-session intro.
4. `html.motion` is set in the existing boot script only when reduced motion is off, so the hide happens before paint and a no-JS or reduce visit never blanks the headings.

## Not in this pass
Fonts, typefaces, brand colours, nav, frost, pills, logo, copy, and the lexicon open are untouched. No new dependency.
