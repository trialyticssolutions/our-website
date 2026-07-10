/* ============================================================
   Motion system — single source of truth for durations, easings,
   and stagger increments. CSS twins live in styles/globals.css
   (:root custom properties). Keep both in sync.

   Tiers:
   - micro    (0.15s) — hover feedback: color flips, icon nudges
   - standard (0.3s)  — wipes, toggles, nav, in-place reveals
   - large    (0.6s)  — section entrances on scroll
   - epic     (0.9–1.2s) — reserved for at most ONE signature
     moment per page (hero type reveal, CTA band wipe)
   ============================================================ */

/** Brand curve — quick approach, mechanical settle. Entrances + standard. */
export const MECH = [0.22, 1, 0.36, 1] as const

/** Exits — accelerate out. */
export const EASE_EXIT = [0.4, 0, 1, 1] as const

/** State toggles (open/close both ways). */
export const EASE_INOUT = [0.4, 0, 0.2, 1] as const

export const DUR = {
  micro: 0.15,
  standard: 0.3,
  large: 0.6,
  epic: 0.9,
} as const

export const STAGGER = {
  /** Dense lists: index rows, table cells */
  dense: 0.04,
  /** Cards, columns, hero elements */
  block: 0.08,
} as const
