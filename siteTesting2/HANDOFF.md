# AcubeInsights — Project Handoff

> Context document for any AI model or developer continuing this project.
> Read this first, then `DECISIONS.md` (chronological log of every client decision).
> Written 2026-07-08 at the close of the full redesign engagement.

---

## 1. What this is

**acubeinsights.com** — marketing site for a data / AI-automation consulting agency
(Gurugram, India). The original AI-generated site was fully redesigned through a
phase-gated engagement (Phase 0 audit → Phase 1 design direction → Phase 2 homepage →
Phase 3 all inner pages), followed by an animation-system pass, a Lighthouse /
production-readiness pass, and a hover-polish pass. **All phases are complete and
client-approved.** The site runs on localhost only — deployment has intentionally not
been chosen yet.

The client (it@usaindiacfo.com) reviews at `localhost:3000`, gives rapid iterative
feedback, likes bold 3D/interactive elements but rejects anything that feels laggy,
decorative-without-purpose, or that breaks section compactness. When they say
"surprise me," they mean it — but expect to iterate on whatever you build.

## 2. Golden rules (do not violate)

1. **Content is frozen.** All copy — headlines, service names/descriptions,
   testimonials (names, companies, quotes), FAQs, legal text, contact details, trust
   badges — stays verbatim. Redesign presentation, never rewrite content. All content
   lives in `data/constants.ts` and inline in section components.
2. **Brand is "AcubeInsights"** everywhere (fixed from a 3-way mess of "Data
   Consulting Agency" / "Data Flow" / AcubeInsights).
3. **The true project count is "50+".** Never reintroduce 100+/500+/"hundreds" —
   the client explicitly called inflated numbers far-fetched.
4. **Banned (AI-tell) patterns:** gradients anywhere (buttons, text, backgrounds),
   purple→blue families, raw Tailwind palette colors, Inter/Poppins as display face,
   emoji as icons, icon-in-rounded-square 3-col card grids, glassmorphism navbars,
   "01/02/03" markers unless genuinely sequential (the /services process section is
   the allowed exception), centered template heroes, stock photography.
5. **Work in phases with explicit approval gates.** Present, stop, wait. Log every
   client decision in `DECISIONS.md` (this is a hard habit of the engagement — keep
   it alive).
6. **No git repo.** There is no version history. Never delete rebuildable-only-with-
   effort code; park it unused instead (see `components/ui/cubes.tsx`).

## 3. Stack & commands

- Next.js 14 (App Router) · TypeScript · Tailwind 3.4 · shadcn/radix UI primitives
- **Motion for React** (`motion/react`) — the ONLY animation library (framer-motion
  and GSAP were both removed; don't add animation libs)
- React Three Fiber 8 + drei 9 + **three pinned to 0.170** (matches @types/three;
  newer three spams deprecation warnings under R3F 8)
- Lenis smooth scrolling · tailwindcss-animate (required by shadcn sheet/dialog/toast)
- Contact form: EmailJS client-side (`components/forms/contact-form.tsx`), env vars in
  `env.example`; `pages/api/contact.ts` exists but is unused by the form

```
npm run dev          # dev server :3000
npm run build        # production build (NEVER while dev server is running — see §9)
npx next start -p 3000
npm run type-check
```

Fonts are self-hosted in `public/fonts` (downloaded from Fontshare):
**Clash Display** 500/600 (display), **General Sans** 400/500/600 (body),
JetBrains Mono via next/font/google (utility). Loaded in `app/layout.tsx` as CSS
variables `--font-display / --font-sans / --font-mono`.

## 4. Design system — "Tungsten Ledger"

Hard color-block sections (no gradients, sharp 2px radius), warm dark + bone light,
single brass accent. Tokens live in `tailwind.config.js` + `:root` in
`styles/globals.css`.

| Token | Hex | Use |
|---|---|---|
| `char` | #161210 | warm near-black ground (dark sections, nav, footer) |
| `umber` | #221B16 | dark surface |
| `bone` / `bone-2` | #F3EEE6 / #EAE2D4 | light ground / light surface |
| `brass` | #D89E3A | THE accent — metrics, filaments, primary buttons (dark grounds) |
| `brass-deep` | #7E5A1D | brass for text on light grounds (AA: 5.4:1 on bone) |
| `ash` / `ash-deep` | #97918A / #6B655D | muted text on dark / on light (AA) |
| `line-dark` / `line-light` | #2B241E / #DDD5C7 | hairlines |

**Type:** Clash Display 600 for display/headings · General Sans for body ·
JetBrains Mono for `.mono-label` (11px uppercase tracked labels — eyebrows, indices,
metric captions; used everywhere).

**Signatures:** the brass *filament* line (`.filament` hover underline, nav scroll-
progress bar, process timeline); the *inversion* (full-bleed brass CTA band, services
rows flipping to char on hover); the *Acube* (3×3×3 metal cube = brand mark, favicon
`app/icon.svg`, nav cube that rotates 45° on scroll).

**Motion system** (`lib/motion.ts` + CSS twins in `:root` — keep in sync):
- Easings: `MECH [0.22,1,0.36,1]` (brand, entrances/standard), `EASE_EXIT`,
  `EASE_INOUT`; hover pair `--hover-ease-in` (mech) / `--hover-ease-out
  cubic-bezier(0.25,0.46,0.45,0.94)`.
- Durations: micro 150 / standard 300 / large 600 / "epic" 900–1200ms (max one epic
  moment per page: hero entrance, CTA band wipe).
- Staggers: 40ms dense lists / 80ms blocks.
- Hovers: 200ms in / 250ms out, wrapped in `@media (hover: hover)`; buttons use a
  `::after` background-sweep gated by `:has(.btn-label)` — button content must be
  wrapped in `<span className="btn-label">`.
- `prefers-reduced-motion` is fully honored: global CSS kill-switch,
  `MotionConfig reducedMotion="user"` (in `SiteProviders`), Lenis skipped, all 3D
  gated by `useCan3D()` (also gates low-power devices, `hardwareConcurrency <= 4`).

## 5. Architecture map

```
app/                    pages (server components; metadata + composition only)
  layout.tsx            fonts, metadata, schema.org, theme-color #161210
  icon.svg              favicon (isometric brass cube)
  opengraph-image.tsx   generated OG image (edge, uses app/ClashDisplay-Semibold.woff)
  robots.ts, sitemap.ts
components/
  layout/               navigation (hide-on-scroll, progress filament, sheet menu),
                        footer, main-layout (wraps SiteProviders), floating-widgets (WhatsApp)
  sections/             one file per page section (all 'use client' where animated)
  three/                data-lattice.tsx (cloud/grid/wave variants, one engine),
                        acube.tsx (3×3×3 sculpture), use-can-3d.ts,
                        use-lazy-mount.ts (useIdle / useLatched)
  ui/                   shadcn primitives + stat-counter.tsx (count-up) +
                        cubes.tsx (UNUSED — removed CTA cube field, kept for restore)
  providers/            site-providers.tsx (Lenis + MotionConfig)
data/constants.ts       ALL content: SITE_CONFIG, SERVICES(8), TESTIMONIALS(9),
                        PORTFOLIO_CASES(7), SERVICE_CODES, TRUST_INDICATORS (real
                        client names, rendered typographically — no logo assets yet)
lib/motion.ts           motion tokens (TS side)
styles/globals.css      tokens, base, buttons, filament, mono-label, hero entrances
```

## 6. Pages (all rebuilt, all approved)

- **/** — hero (char, CSS-entrance text + scroll-linked 3D lattice *cloud*),
  services index (bone; 8 one-line rows, hover = char panel wipes up at
  `duration-450`; the *Acube* sculpture beside the header exhales apart on row hover
  via a shared per-frame ref), testimonials (char; client-name marquee that pauses
  off-screen, 3 featured pull-quotes with animated stat callouts 9→4 / +32% / −55%,
  faint 3D *wave* behind), CTA (plain brass inversion band — cube field was removed
  by client decision), footer.
- **/services** — hero with lattice *grid* variant; scrollspy rail (DB/DI/AI/DV/WS/
  MO/ZO/GA); all 8 services as open ledger blocks (sticky identity column + Overview /
  What's Included / Target Audience / Key Benefits) with anchor ids the homepage
  deep-links to; 01–04 process filament timeline; shared CTA.
- **/portfolio** — "Case Registry": PageHero (cloud) with count-up stats; category
  filter tabs with FLIP relayout (AnimatePresence popLayout — Dossier is forwardRef);
  char dossier cards with extracted brass headline stats; click folds open in place
  (featured expand to full row) revealing Challenge/Solution/Results/Technologies.
- **/testimonials** — "Evidence Wall": PageHero (wave); 4 featured char slabs with
  brass rating cells (■■■■□ 4.5 — not stars); masonry wall cycling 3 card treatments;
  industry count-up ledger; summary + CTA.
- **/about** — hero with the Acube; Our Story + 2×2 stat ledger; Mission/Vision/Values
  columns on char; Why Choose Us hairline-cell grid. Team section intentionally absent
  (original data was fictional people).
- **/contact** — hero; EmailJS form (rethemed) + contact ledger + FAQ grid.
- **/privacy, /terms** — LegalShell/LegalBlock editorial layout, inside MainLayout.

## 7. Performance state (Lighthouse, production build, homepage)

Mobile: **69 / 100 / 100 / 100** · Desktop: **73 / 100 / 100 / 100** (LCP 0.7s, CLS 0).
Remaining caps are accepted & documented: ~700ms TBT from parsing the three.js chunk
(deferred to idle, after content paints) and mobile LCP inflated by brand-font swap on
simulated slow-4G (real text paints at 1.7s; `font-display: optional` was declined to
protect the brand font on first visits).

Techniques in place — preserve them when editing:
- Hero text entrances are **pure CSS** (`.anim-rise`, `--rise-delay` staggers) so text
  paints before hydration. **H1s are fully static** (see gotcha #4).
- All four 3D canvases lazy-mount: `useIdle(3500)` for above-fold heroes,
  `useLatched(inView)` for below-fold scenes; frameloop pauses off-screen.
- Canvas DPR capped [1, 1.75]; deterministic seeded geometry (no Math.random at render).

## 8. Open items (need the client)

- Real social URLs beyond LinkedIn (`linkedin.com/company/acubeinsights-inc` is real;
  twitter/facebook/instagram in SITE_CONFIG are placeholders kept by request).
- Real client logo assets (TRUST_INDICATORS render as typographic wordmarks of real
  client companies until then).
- Real team info if the About team section is ever wanted back.
- Deployment target (then: re-run Lighthouse against the real host, add analytics,
  set NEXT_PUBLIC_SITE_URL, EmailJS env vars).

## 9. Hard-won gotchas — read before touching anything

1. **Never run `npm run build` while `next dev` is running.** Both write `.next`;
   the site serves unstyled HTML afterward. Fix: kill server, `rm -rf .next`, rebuild.
2. **Editing `components/three/*` under dev HMR crash-loops all canvases**
   (R3F error-boundary recreate loop). Restart the dev server after editing three
   files; it's HMR-only, production is unaffected.
3. **Arbitrary `duration-[450ms]` classes silently generate NOTHING** — ambiguous
   with tailwindcss-animate's animation-duration utility. Use named tokens
   (`duration-450` exists in the config for the services-row wipe).
4. **Text animated from `opacity: 0` or clipped at first paint is permanently
   excluded from LCP candidates.** That's why every H1 is static. Don't re-animate
   hero headlines.
5. `AnimatePresence mode="popLayout"` children must accept refs (forwardRef) — see
   `Dossier` in portfolio-registry.
6. The shared button sweep requires the `.btn-label` wrapper span; unwrapped buttons
   (e.g., shadcn `Button` used bare) fall back to a simple hover by design.
7. Lenis fights programmatic `window.scrollTo` in some flows; it's disabled under
   reduced motion. For test automation, scroll then wait ~500ms.
8. shadcn Sheet needs an sr-only `SheetTitle` (Radix a11y) — already in navigation.

## 10. Full history

`DECISIONS.md` in this directory is the complete chronological record: every client
ruling (Phase 0 answers, palette rejections, the "Tungsten Ledger" remix), every
delivered phase, every iteration (services section redesigned twice, cube field
added → re-engineered → removed), and every audit with before/after numbers. When the
client says "we decided X before" — the answer is in there.
