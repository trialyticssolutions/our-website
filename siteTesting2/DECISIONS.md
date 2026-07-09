# DECISIONS.md — AcubeInsights Redesign

Running log of every approval/decision given by the client. Context for future sessions.

## 2026-07-07 — Phase 0 (Discovery & Audit) closed

Audit delivered (stack: Next.js 14 App Router, Tailwind 3, content centralized in `data/constants.ts`; no `public/` dir exists; three brand names in use; `nugget-*` and `bg-brand-purple` CSS classes used but undefined; contradictory project counts 50+/100+/500+/"hundreds").

Client rulings:

1. **Social links**: LinkedIn is real → `https://www.linkedin.com/company/acubeinsights-inc`. Twitter/Facebook/Instagram stay as placeholders for now (do not invent URLs).
2. **Project count**: **50+** is the true number. Unify everywhere — replaces "100+", "500+", "hundreds of businesses", and any derived stat that implies more.
3. **Brand**: Unify to **AcubeInsights** everywhere (SITE_CONFIG.name, page titles, privacy/terms "Data Flow" mentions, footer copyright). No existing logo asset — wordmark treatment is ours to design.
4. **Imagery**: No photos exist. Source real logos of actual client companies (testimonial companies) for trust/social-proof sections; otherwise design deliberately around the absence of photos — no fake stock imagery.
5. **Genuine-looking content**: Replace fake TRUST_INDICATORS (TechCorp etc.) with real client companies. Client acknowledges inflated claims (500+/100+) feel far-fetched — bring all claims down to honest 50+ scale. Fictional TEAM_MEMBERS: keep the team section hidden until real team info exists.
6. **Deployment**: Not a concern yet — finalize everything on localhost first.
7. **Browser/device floor**: No strict floor; standard modern-browser support is fine.

## 2026-07-07 — Phase 1, Round 1 rejected

Client rejected all three round-1 palettes (A Graphite & Signal ink/citron, B Deep Sea Data petrol/copper, C Ledger off-white/cobalt) — asked for something newer/fresher to the eyes. Round 2 delivered in `phase1-design-directions.html`: **D Evergreen** (deep green #0E2E25 / cream #F1ECDF / muted brass #C2A264, Sentient display), **E Ultramarine** (flat #1B2FC4 color-blocks on chalk #F4F2EC / ink #101015, Cabinet Grotesk display, "inversion" signature), **F Tungsten** (warm char #161210 / bone #F3EEE6 / amber #D89E3A, Clash Display). Recommended E, with D as the calmer alternative. Awaiting pick.

## 2026-07-07 — Phase 1 CLOSED: direction locked ("Tungsten Ledger" remix)

Client delegated the final remix ("it on you, surprise me") after pointing at the two suggested combos (color-blocks + brass metrics; F's warmth + round-1 lattice 3D). Locked token system:

- **Grounds**: warm char `#161210` (dark sections) / umber surface `#221B16` / bone `#F3EEE6` (light sections) — hard color-block cuts between sections (E's conviction), no gradients anywhere.
- **Accent**: brass-amber `#D89E3A` — metrics, filament lines, primary buttons. Single accent.
- **Muted**: ash `#97918A` (dark-ground secondary text), warm lines `#2B241E` (dark) / `#DDD5C7` (light).
- **Type**: Clash Display 600 (display) / General Sans 400–600 (body) / JetBrains Mono (metrics, labels, indices).
- **Motion**: "Workshop" — 300–420ms mechanical settle, filament-line accents, staggered clip reveals.
- **3D**: round-1 **data lattice** — wireframe node graph in graphite + amber emissive nodes on char, assembling/rotating with scroll. Reduced-motion/low-power → static fallback.
- **Signature**: the amber inversion CTA band + the filament line.
- **Hero background**: client offered a photo background; decision — no stock photography (AI/template tell); the custom 3D lattice is the hero visual.

## 2026-07-07 — Phase 2 delivered: homepage rebuilt (awaiting approval)

Built on the locked "Tungsten Ledger" tokens:

- **Stack added**: three@0.170 + @react-three/fiber@8 + drei@9, lenis, Motion for React (`motion/react`) for all new animation. framer-motion@10 stays installed only because legacy inner pages/ui reference it — remove in Phase 3.
- **New/rewritten**: hero (asymmetric, staggered line reveal, R3F data-lattice with scroll-linked rotation + static SVG fallback for reduced-motion/low-power), services (8-row editorial index, directory codes DB/DI/AI/…, hover micro-motion), testimonials (editorial pull-quotes + animated stat callouts 9→4 / +32% / −55% extracted verbatim from quotes; real-client typographic strip), CTA (full-bleed brass inversion band, clip-path wipe, "hundreds"→"50+" per ruling), nav (solid char bar, filament active state), footer (quiet, unified brand).
- **Hygiene shipped with it**: brand unified to AcubeInsights (SITE_CONFIG), real LinkedIn URL, theme-color #161210, placeholder google-verification removed, schema.org address fixed to Gurugram, `app/icon.svg` favicon (isometric cube mark), `app/opengraph-image.tsx` (generated OG image, verified 200/png), fonts self-hosted (Clash Display + General Sans woff2, ~100KB total; JetBrains Mono via next/font), Lenis + MotionConfig honor prefers-reduced-motion, scrollbars no longer hidden.
- **Legacy shims**: old custom classes (btn-primary, card-surfe, section-spacing, surfe-* palette, orange-custom, bg-brand-purple, nugget-*) re-mapped to the new warm palette in globals.css/tailwind config so inner pages stay coherent until their Phase 3 rebuilds.
- Dev-server verification: desktop + 375px screenshots taken; ash contrast on light grounds fixed to AA (ash-deep #6B655D); lattice art-directed after first pass looked scattered.

## 2026-07-07 — Homepage iteration 2 (per client feedback on first delivery)

Client asked for: less hero top-gap, animated client carousel, 3D presence beyond the hero, nav scroll animation. Shipped:

1. Hero: `min-h-[calc(100vh-4rem)]` + reduced top padding.
2. Client strip → infinite typographic marquee (36s loop, per-name floating bob, hover-pauses, edge-masked). CSS-driven; dies under prefers-reduced-motion.
3. Lattice engine generalized to three variants (one shared module, one canvas each, frameloop paused off-screen): hero `cloud`, services `grid` (sticky right column, ordered structure = raw→structured metaphor; hovering a service row energizes a column of nodes via ref, no re-renders), testimonials `wave` (slow flowing stream at 40% opacity behind quotes). Light-ground palette variant for the bone section. All gated by shared useCan3D (reduced-motion/low-power).
4. Nav: hides on scroll-down past 160px, reveals on scroll-up, height 16→14 shrink, cube mark rotates 45° when scrolled, brass scroll-progress filament along the bottom hairline.

Verified: 61fps with all three canvases, no console errors, no horizontal overflow, hover interaction confirmed in browser. Note: dev HMR can crash-loop the shared three module — restart dev server after editing data-lattice.tsx.

## 2026-07-07 — Homepage iteration 3 (client feedback on services/marquee/hovers)

1. **Services redesigned fresh**: 3D grid scene REMOVED from homepage services (client: "not talking with the design"); intro paragraph moved under the heading as a lede; section is now a compact one-line-per-service directory (code | title | description | arrow) — height cut from 1822px to 1282px, heading + 5 rows visible in one 800px viewport. **Hover inverts the row to a full char band** (bone title, brass code, arrow rotates 45° to outbound) — echoes the CTA inversion, pure CSS. Tech tags dropped from the homepage overview (full detail on /services). The lattice `grid` variant stays in components/three/data-lattice.tsx — candidate for the Phase 3 services page.
2. **Marquee**: floating bob removed, names up from 11px to 15px mono, larger separators. Scroll + hover-pause kept.
3. **Buttons**: background-sweep hover system (::after wipe + label color flip + arrow slide, gated by :has(.btn-label) so unwrapped legacy buttons keep the simple hover). Footer links got filament underline hovers.

Verified in browser: section heights, inversion styling, marquee, no console errors, type-check clean.

## 2026-07-07 — Homepage iteration 4 (services hover lag + premium 3D)

1. **Hover fixed**: the row inversion is now a GPU-composited wipe — an absolutely-positioned char panel scaling up from the bottom edge (`scale-y-0 → 100`, transform-only, no full-row background repaint), with content color flips at 200ms. No lag.
2. **"The Acube"** (components/three/acube.tsx): the brand mark as 3D sculpture in the services header — 3×3×3 grid of rounded brushed-metal cells (drei RoundedBox, meshStandardMaterial metalness ~0.9) with three brass signal cells (two corners + core), lit by a procedural Lightformer environment (no network fetch). Behaviors: slow tumble + breathing gap, tilts toward cursor over the canvas, and **exhales apart (spread 1.32×, brass cells glow to 0.65 emissive) while any service row is hovered** — wired via the same per-frame ref as before, zero React re-renders. Static isometric SVG cube fallback for reduced-motion/low-power; hidden below md. Every section now carries 3D: hero cloud, services Acube, testimonials wave.

Verified: 61fps with all three canvases, exhale confirmed in browser, type-check clean.

## 2026-07-07 — Acube art direction pass (client: "looks awkward — color or spacing")

Diagnosis: glossy near-black cells (toy plastic, cold on warm bone), toy-block gaps, no negative space (occasionally cropped), floating with no grounding. Fixes in acube.tsx:

- Material → warm satin graphite `#383027` (metalness 0.55, roughness 0.48) — matches the site's char, no black gloss; warm-tinted key light, softer intensities.
- Gaps → tight precision seams (GAP 0.60 / CELL 0.55): reads as one machined object; exhale spread raised to 1.5× so the opening is dramatic.
- Accents → ONE visible brass corner + a hidden brass core revealed only when the cube exhales (was 2 corners + core).
- Camera pulled back ([3.7, 2.7, 4.1], fov 30) — negative space, no cropping; rotation slowed 0.26→0.16, breathing subtler.
- Added drei ContactShadows beneath — product-shot grounding.

Verified in browser: closed state reads as monolith with brass corner; hover exhale opens seams and reveals glowing core.

## 2026-07-07 — Acube: revert + transparency (client direction)

Client asked to revert the art-direction pass and make the cube transparent instead. acube.tsx restored to the prior build (GAP 0.64, three brass accents incl. core, camera [3.1, 2.3, 3.5] fov 34, faster tumble, no ContactShadows) with translucency added: dark cells opacity 0.6, brass cells 0.85 (both `transparent`). Client then asked for less opacity (dark 0.4 / brass 0.7), then to remove transparency entirely → **final: fully opaque solid cells** (transparent/opacity props removed), **plus the revolving ContactShadows brought back** (position y −1.45, opacity 0.3, blur 2.6, scale 5.5). Effect: smoky-glass cube — inner cells and the brass core show through at rest; exhale-on-row-hover behavior unchanged. Verified in browser, no console errors.

## 2026-07-07 — CTA section: interactive cube field (client-requested React Bits <Cubes/>)

Client asked to integrate React Bits' <Cubes/> (Can Tastemel-inspired) into the "Start Your Data Transformation Today" band. Integrated as `components/ui/cubes.tsx` (TS port; touch handlers dropped — desktop-only placement) with styles in globals.css under `.cubes-field` (app router forbids component-level plain CSS; class names are queried by the JS). **gsap added as a dependency** — used only by this component (Motion remains the site-wide animation lib; exception noted per the brief's "don't ship both for the same job" rule since this is a self-contained ported component).

Theming: engraved-relief look on the brass band — 9×9 grid, faces #D2952F (a step darker than the band's #D89E3A), borders char at 30%, ripple flashes char, idle auto-animation drifts a simulated cursor, real cursor tilts cubes (content wrapper is pointer-events-none except buttons so moves pass through), click ripples. Positioned as a 620px square bleeding off the right edge, hidden below lg, gated by useCan3D (reduced-motion/low-power → plain brass band).

Verified: 81 cubes render, idle tilt wave visible, no console errors, type-check clean.

**Revised same day per client direction** — the field must be INVISIBLE at rest and hover-only:
- Front faces `transparent`, no borders → at rest the band is clean flat brass, nothing visible.
- Added `sideColor` prop to the ported component (side faces get their own color): sides are char `#161210`, so tilting cubes make "the black come out" of the yellow.
- `autoAnimate={false}`, `rippleOnClick={false}` — animation happens ONLY under the cursor; pointerleave returns to flat.
- Tilt tuned for cleanliness after first pass looked blob-heavy: maxAngle 40→24, radius 3→2.5, durations 0.35/0.7.

Verified in browser: at-rest screenshot is pure brass; dispatched pointermove shows crisp black chamfers around cursor (applied angle ~19° at test point).

Second revision per client ("better animation, add delay; cover ≥40%"): tilt now ripples outward with distance-based delay (enter delay dist×0.05s, leave delay capped 0.15s, durations 0.4/0.9); field grown 620→860px square, gridSize 12 → **measured 63% band coverage** at 1280w. Density re-tuned after the finer grid clumped black at center: maxAngle 19°, cellGap 14 — held hover reads as separated black frames fading to hairlines at the ripple edge.

## 2026-07-07 — Phase 3.1 delivered: Services page (awaiting approval)

Rebuilt `/services` in the approved system (new components: services-hero, services-detail, process-section; page composes them + shared CtaSection):

- **Hero**: compact char band, "Transform Your Business Data" (brass), original subcopy, trust badges with the approved 500+→**50+** fix; the lattice **grid** variant (flagged earlier as this page's scene) assembles on the right — an existing scene reused, not a new one, per the brief's inner-page rule.
- **Service detail ledger**: the old "Learn More" dialogs are gone — all 8 services laid out openly with anchor ids intact (homepage rows still deep-link). Each block: sticky identity column (code / title / description / tech / Get Started) + open detail (Overview, What's Included as 2-col brass-square checklist, Target Audience, Key Benefits as sharp chips) — all copy verbatim from the old dialogs. Desktop gets a **sticky scrollspy rail** (DB…GA codes, IntersectionObserver, filament active state).
- **Process**: 01–04 kept (genuinely sequential = allowed by the brief); redesigned as a char band with a brass filament timeline that draws itself in; gradient icon boxes gone.
- Cleanup: deleted the never-rendered SERVICE_TIERS pricing array (dead code — was never on the site, so not frozen content) and the ~200-line unused icon import. SERVICE_CODES moved to data/constants.ts (shared with homepage). Metadata retitled to AcubeInsights + canonical /services.

Verified in browser: hero + lattice, scrollspy rail active-state, sticky column, process filament, mobile stacking, anchors, no console errors, type-check clean.

## 2026-07-08 — Phase 3.2 + 3.3 delivered: Portfolio + Testimonials (awaiting approval)

Client greenlit both at once and asked for creative layouts ("cards, grid or matrix or something new").

**Portfolio — "The Case Registry"** (page-hero + portfolio-registry components):
- Hero: char band, "Our Success Stories", cloud lattice, 4 count-up stats (100+→**50+** per ruling).
- Registry: mono **category filter tabs** (derived from case data) that FLIP-animate the grid re-layout (AnimatePresence popLayout; Dossier uses forwardRef for popLayout's ref); each case is a **char dossier card** — CASE/NN — CATEGORY mono header, title, client, description, and "Key Results:" with the first hard-number result extracted as a giant brass stat; clicking **folds the dossier open in place** (featured ones expand to span the full row) revealing Challenge / Solution / Results / Technologies Used — all previously dialog-trapped copy now inline, verbatim. Both original section headers kept (Featured Case Studies / All Projects). No fake project imagery — designed around its absence per Phase 0.

**Testimonials — "The Evidence Wall"** (page-hero + testimonials-wall):
- Hero: char band, "What Our Clients Say", wave lattice, count-up stats incl. animated 4.7/5.
- Featured 4 as large char slabs with **brass rating cells** (■■■■□ + numeric — replaces generic yellow stars); remaining 5 as a **masonry wall** (CSS columns) cycling three treatments (bone-2 bordered / char / brass-left-border) for mosaic rhythm; "Trusted Across Industries" as a hairline-cell **count-up ledger** (replacing gradient circles); summary block + both CTAs kept.

Shared additions: `components/ui/stat-counter.tsx` (animates "50+", "4.7/5", "95%"-style values), `components/sections/page-hero.tsx` (reusable inner-page hero with optional cloud/wave lattice — reused scenes, no new 3D). Both pages: metadata → AcubeInsights + canonicals.

Verified in browser: heroes, dossier expand/close, category filter (FLIP relayout, correct isolation), masonry wall treatments, industry count-ups, mobile stacking, type-check clean, no new console errors (fixed a popLayout forwardRef warning during review).

## 2026-07-08 — Phase 3 COMPLETE: About, Contact, Privacy, Terms + final cleanup

**About** (about-content component): hero with **the Acube** (brand object on the brand page); Our Story with brass-edged pull paragraph + 2×2 hairline stat ledger (100+→**50+** Projects Completed per ruling; count-ups); Mission/Vision/Values as three mono-labeled columns on char (gradient icon circles gone); Why Choose Us as a hover-tinted hairline-cell grid with rotating brass squares. Team section stays absent (fictional members, per Phase 0 ruling).

**Contact** (contact-content): compact char hero; form (7 cols) + contact ledger (5 cols — mono brass labels, filament links, mono business-hours table; the "⚡" emoji replaced with a brass square per the no-emoji rule); FAQ as 2-col hairline editorial grid. ContactForm internals rethemed (Select was hardcoded gray-900/purple → bone/brass; submit → brass).

**Privacy & Terms** (legal.tsx shell: LegalShell/LegalBlock/LegalBullet): quiet editorial layout — char header band, max-w-3xl article, mono brass section headings, brass-square bullets. **All "Data Flow" mentions replaced with AcubeInsights** (verified 0 remaining on both pages); pages now wrapped in MainLayout so they finally have navigation; canonicals added.

**Cleanup (all pages now rebuilt)**:
- Uninstalled framer-motion@10 and embla-carousel-react (no imports remained); deleted unused components/ui/scroll-animations.tsx and carousel.tsx.
- Removed all legacy CSS shims from globals.css (section-spacing, btn-primary/secondary/light, card-surfe, animate-fade-in-*, nugget-*) and legacy colors from tailwind.config (surfe palette, orange-custom, brand-purple).
- **Full production build passes** — all routes prerender; first-load JS ~178-221KB per page.

Verified in browser: about hero + Acube, story ledger, contact form/ledger/FAQ, privacy & terms rendering with zero Data Flow mentions, homepage healthy post-cleanup, no console errors.

## 2026-07-08 — Animation audit + production-grade motion pass (client-approved audit)

Audit found one High (shadcn Sheet/Dialog/Toast used `animate-in` classes from tailwindcss-animate, which was never installed → mobile menu/dialogs/toasts had NO animation), several Medium (no shared motion tokens, nav animating `height`, `transition-all` overuse), and Low items (marquee ticking off-screen, inconsistent staggers, 1.4s outlier).

Fixes shipped:
- **tailwindcss-animate installed** (dev dep the existing shadcn code was written against) — sheet verified animating: 300ms in on ease-mech / 200ms out on ease-exit. Bonus a11y fix surfaced during verification: mobile Sheet lacked an accessible title → added sr-only SheetTitle.
- **Motion system**: `lib/motion.ts` (MECH / EASE_EXIT / EASE_INOUT, DUR micro 150/standard 300/large 600/epic 900+, STAGGER dense 40ms/block 80ms) + CSS twins in :root + tailwind `duration-micro/standard/large` and `ease-exit` utilities. The brand bezier, previously hard-coded in **14 files**, now imports from one module.
- **Layout-property animations**: nav no longer animates height (constant h-16; cube-rotation + progress filament carry scrolled state). Dossier height-expand kept as the one documented exception (contained; siblings FLIP via transform).
- **transition-all eliminated**: btn-base now scopes transform (300 mech) separately from color/bg/shadow (**150ms micro — primary hover feedback now under 200ms**, sweep 350ms demoted to decorative); services arrow, toast (transform-only), WhatsApp button scoped. WhatsApp also lost its undefined class + JS-mouseover color swapping (now pure CSS hover).
- **Staggers normalized** to 40ms dense / 80ms block across heroes, process, wall, contact. Epic outlier trimmed (hero base filament 1.4s→1.0s).
- **Marquee**: will-change: transform + IntersectionObserver pause off-screen (verified data-paused toggling true→false).
- Dead accordion keyframes removed from tailwind config.

Verified: type-check clean, sheet animation live (0.3s enter, mech curve), nav 64px constant, marquee pause toggle, no new console errors.

## 2026-07-08 — Lighthouse audit + production-readiness pass

Baseline (homepage, mobile emulation): **Perf 57 / A11y 96 / BP 100 / SEO 100** — LCP 5.6s, TBT 960ms.
Final: **mobile Perf 69 / A11y 100 / BP 100 / SEO 100** (LCP element now the H1; residual 3.8s is font-swap accounting on simulated slow-4G — real text paints at 1.7s). **Desktop preset: 73 / 100 / 100 / 100 with LCP 0.7s and CLS 0.** Remaining cap is TBT from parsing the three.js chunk — the inherent price of the 3D showcase, now paid during idle time after content is visible.

Changes:
- **app/robots.ts + app/sitemap.ts** added (were missing entirely).
- **CSS-driven hero entrances** (`.anim-rise`, `--rise-delay` stagger in globals.css): hero eyebrow/subcopy/CTAs/badges animate via pure CSS that runs before hydration. **H1s are now static** — discovered that text first painted while clipped/opacity-0 is permanently excluded from LCP candidates (Lighthouse was tracking the nav wordmark); headlines must paint at first render. Design change: "headline instantly present, supporting cast assembles around it" replaces the hero line-mask reveal.
- **Lazy 3D mounting** (components/three/use-lazy-mount.ts): `useIdle(3500)` defers hero/page-hero/services-hero/about canvases off the LCP/TBT critical path; `useLatched(inView)` mounts Acube/wave/CTA-cubes chunks only when their sections approach the viewport (mobile homepage no longer downloads three for display:none canvases).
- **Contrast fix → A11y 100**: brass-deep #A3742A (3.57:1) → **#7E5A1D** (5.4:1 on bone, 4.85:1 on bone-2).
- **Hover-speed fix root-caused**: `duration-[450ms]` was silently dropped — arbitrary `duration-[...]` is AMBIGUOUS with tailwindcss-animate's animation-duration utility. Added named token `duration-450`; services-row wipe now verified at 450ms in built CSS. (Gotcha documented in tailwind.config.)
- Reduced-motion block now also zeroes animation-delay (fill-forwards elements no longer wait invisibly).
- browserslist DB updated.

Known accepted limitations: TBT ~700ms from three.js parse (during idle, post-content); mobile LCP metric inflated by brand-font swap on throttled networks (font-display: optional would fix the metric but hide Clash Display on first visits — declined).

## 2026-07-08 — Hover polish pass (scope: homepage CTA; fixes land in shared button system)

Audit findings on the CTA's hover surfaces (both buttons + cube field): lift transform at 300ms (above the 150–250ms band), no enter/exit asymmetry, box-shadow needlessly in the transition list, sweep at 350ms, and **no `@media (hover: hover)` guards** (tap-sticky hover on touch). Cube field (GSAP tilt) audited clean — transform-only, left as-is.

Fixes in globals.css:
- Hover tokens: `--hover-in: 200ms` / `--hover-out: 250ms` / `--hover-ease-in` (brand mech) / `--hover-ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94)`.
- Asymmetric transitions: exit timing lives on `.btn-base` (250ms gentle drift out), enter timing overrides inside `:hover` (200ms mech settle); sweep 250ms in / 300ms out; arrow nudge tokened; `:active` presses in 80ms.
- box-shadow removed from the transition list entirely — variant rings are now static (no shadow animation anywhere).
- ALL button `:hover` rules (lift, sweep, svg, four variants' color flips) wrapped in `@media (hover: hover)` — no sticky tap-hover on touch devices.
- prefers-reduced-motion already globally guarded (kill-switch), no change needed; no compositing hacks added (label never transforms — text stays crisp).

Verified in compiled production CSS: media guard, tokens, exit curve present; box-shadow absent from button transitions.

## 2026-07-08 — CTA cube field re-engineered (client: only ~40% coverage + laggy)

Root causes: (1) fixed 860px square → only ~45% of a ~1900px band; (2) lag from per-move churn — each pointermove looped 144 cubes spawning up to 144 individual GSAP tweens (with overwrite kills), atop 864 composited faces (6×144).

Rebuild (components/ui/cubes.tsx fully rewritten, GSAP dependency removed):
- **Single rAF damped-lerp loop** drives all cubes via direct `style.transform` writes — zero per-frame allocation, no tween objects. Loop self-stops when every cube has settled (idle cost = 0).
- **Ripple from physics, not delays**: farther cubes ease with more damping (k tapers 0.26→0.10 with distance), so the wave trails the cursor and settles like liquid.
- **Proportional sizing**: container is now `right 60% × full height` (verified 60% band coverage at 1900px); grid is 13 cols × 8 rows (104 cubes) tiling the rectangle instead of a square block.
- **Faces cut 6→3 per cube** (only front+bottom+left are visible at rotateX(-θ)/rotateY(+θ)): 864→312 face layers. `will-change: transform` on cubes; perspective tightened 99999999px→1200px.
- Props changed gridSize→cols/rows; removed dead autoAnimate/rippleOnClick/borderStyle/duration (idle auto-animate and click-ripple were already off). Touch/reduced-motion/lazy-mount guards unchanged.
- **GSAP uninstalled** (was only used here) — Motion is now the sole animation lib again; smaller bundle helps TBT.

Verified in browser: 60% coverage, 104 cubes/312 faces, **61fps under 2s of continuous simulated cursor movement** (was stuttering), resting cubes invisible (transparent front + no transform), ~30 tilt within cursor radius, no console errors, production build clean.

## 2026-07-08 — CTA cube field REMOVED (client decision)

Client asked to drop the cube field from the "Start Your Data Transformation Today" band — plain flat brass stays. cta-section.tsx simplified (no Cubes/useCan3D/useLatched/useInView; pointer-events passthrough classes removed; clip-path inversion reveal and both buttons unchanged). `.cubes-field` CSS removed from globals. **components/ui/cubes.tsx kept on disk** (unused, tree-shaken from the bundle) since the project has no git history — restore by re-importing it in cta-section if ever wanted. Verified on clean production build: no cubes markup in HTML, no cubes rules in CSS, band renders plain brass.

## Open items

- Real Twitter/FB/Instagram URLs (or decision to drop those icons permanently).
- Real team member info (section stays commented out until provided).
- Phase 1 direction pick — pending.
