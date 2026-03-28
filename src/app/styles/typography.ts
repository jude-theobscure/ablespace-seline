/**
 * Typography Style Guide
 *
 * Two fonts:
 *   SERIF  → Source Sans 3  (headings, stats)   weight ≥ 600
 *   SANS   → DM Sans        (everything else)
 *
 * Usage:
 *   import { T } from "../styles/typography";
 *
 *   <h1 style={{ ...T.h1(isMobile), marginBottom: 16 }}>
 *   <p  style={{ ...T.body(), color: MUTED }}>
 */

import type { CSSProperties } from "react";

const SERIF = "'Source Sans 3', sans-serif";
const SANS  = "'DM Sans', system-ui, sans-serif";
const DARK  = "#1A1A1E";
const MUTED = "#6E6E73";
const BLUE  = "#53AEF3";

export const T = {

  // ── Headings (Source Sans 3) ───────────────────────────────────

  /** Hero H1 — 62px / 38px mob, weight 600, lh 1.08 */
  h1: (mob = false): CSSProperties => ({
    fontFamily: SERIF,
    fontWeight: 600,
    fontSize: mob ? 38 : 62,
    lineHeight: 1.08,
    letterSpacing: "-0.5px",
    color: DARK,
  }),

  /** Section H2 — 52px / 34px mob, weight 600, lh 1.1 */
  h2: (mob = false): CSSProperties => ({
    fontFamily: SERIF,
    fontWeight: 600,
    fontSize: mob ? 34 : 52,
    lineHeight: 1.1,
    color: DARK,
  }),

  /** Stat number — 44px / 36px mob, weight 600, lh 1 */
  stat: (mob = false): CSSProperties => ({
    fontFamily: SERIF,
    fontWeight: 600,
    fontSize: mob ? 36 : 44,
    lineHeight: 1,
    color: DARK,
  }),

  // ── Subheadings (DM Sans) ──────────────────────────────────────

  /** Feature / card H3 — 26px / 22px mob, weight 600, lh 1.2 */
  h3: (mob = false): CSSProperties => ({
    fontFamily: SERIF,
    fontWeight: 600,
    fontSize: mob ? 22 : 26,
    lineHeight: 1.2,
    color: DARK,
  }),

  /** Card H4 — 16px, weight 600, lh 1.3 */
  h4: (): CSSProperties => ({
    fontFamily: SERIF,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 1.3,
    color: DARK,
  }),

  // ── Body (DM Sans) ─────────────────────────────────────────────

  /** Hero / large subtext — 17px, weight 300, lh 1.5 */
  heroSub: (): CSSProperties => ({
    fontFamily: SANS,
    fontWeight: 300,
    fontSize: 17,
    lineHeight: 1.5,
    color: MUTED,
  }),

  /** Section subtext (CTA banners etc.) — 18px, weight 300, lh 1.5 */
  bodyLg: (): CSSProperties => ({
    fontFamily: SANS,
    fontWeight: 300,
    fontSize: 18,
    lineHeight: 1.5,
    color: MUTED,
  }),

  /** Standard body — 15px, weight 400, lh 1.6 */
  body: (): CSSProperties => ({
    fontFamily: SANS,
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 1.6,
    color: MUTED,
  }),

  /** Small body (cards, captions) — 13px, weight 400, lh 1.6 */
  bodySm: (): CSSProperties => ({
    fontFamily: SANS,
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 1.6,
    color: MUTED,
  }),

  /** Bullet list item — 14px, weight 400, lh 1.5 */
  bullet: (): CSSProperties => ({
    fontFamily: SANS,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1.5,
    color: DARK,
  }),

  // ── UI / Labels (DM Sans) ──────────────────────────────────────

  /** Section label / pill — 11px, weight 500, ls 2, BLUE */
  label: (): CSSProperties => ({
    fontFamily: SANS,
    fontWeight: 500,
    fontSize: 11,
    letterSpacing: 2,
    color: BLUE,
  }),

  /** Small caption / badge text — 12px, weight 400, lh 1.2 */
  caption: (): CSSProperties => ({
    fontFamily: SANS,
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 1.2,
    color: MUTED,
  }),

  /** Stat label below stat number — 13px, weight 300 */
  statLabel: (): CSSProperties => ({
    fontFamily: SANS,
    fontWeight: 300,
    fontSize: 13,
    color: MUTED,
  }),

};
