/**
 * Shared layout constants for all inner pages.
 * Based on a 12-column grid at 1200px max content width.
 *
 * 12 columns × 80px = 960px content + 2 × 80px side padding = 1200px total viewport
 * Column unit = 80px  |  Gutter = 20px
 */

// ── Grid ─────────────────────────────────────────────────────────
export const MAX_W       = 1200;   // max content width (12 cols)
export const PAD_X       = 80;     // desktop horizontal padding
export const PAD_X_MOB  = 20;     // mobile horizontal padding

// ── Vertical rhythm ──────────────────────────────────────────────
export const SECT_PY       = 100;  // section vertical padding (desktop)
export const SECT_PY_MOB   = 60;   // section vertical padding (mobile)
export const HERO_PT        = 120; // hero top padding (desktop)
export const HERO_PT_MOB    = 80;  // hero top padding (mobile)
export const HERO_PB        = 80;  // hero bottom padding (desktop)
export const HERO_PB_MOB    = 60;  // hero bottom padding (mobile)

// ── Typography ───────────────────────────────────────────────────
export const H1_SIZE      = 62;    // hero h1 desktop
export const H1_SIZE_MOB  = 38;    // hero h1 mobile
export const H2_SIZE      = 52;    // section h2 desktop
export const H2_SIZE_MOB  = 34;    // section h2 mobile
export const BODY_SIZE    = 18;    // subtext / body desktop
export const BODY_SIZE_MOB = 17;   // subtext / body mobile
export const LABEL_SIZE   = 11;    // section label pill
export const LABEL_LS     = 2;     // label letter-spacing

// ── Statistics strip ─────────────────────────────────────────────
export const STAT_SIZE     = 44;   // stat number desktop (Instrument Serif)
export const STAT_SIZE_MOB = 36;   // stat number mobile

// ── Cards ────────────────────────────────────────────────────────
export const CARD_RADIUS  = 12;    // feature / content cards
export const CTA_RADIUS   = 16;    // CTA banner card
export const CARD_GAP     = 20;    // gap between cards in grid
export const CARD_PAD     = 28;    // internal card padding

// ── CTA banner ───────────────────────────────────────────────────
export const CTA_PAD_X       = 80; // CTA card horizontal padding (desktop)
export const CTA_PAD_Y       = 72; // CTA card vertical padding (desktop)
export const CTA_PAD_X_MOB   = 24; // CTA card horizontal padding (mobile)
export const CTA_PAD_Y_MOB   = 48; // CTA card vertical padding (mobile)

// ── Buttons ──────────────────────────────────────────────────────
export const BTN_RADIUS = 8;
export const BTN_PAD    = "12px 28px";
export const BTN_SIZE   = 15;

// ── Design tokens (re-exported for convenience) ──────────────────
export const SANS  = "'DM Sans', system-ui, sans-serif";
export const SERIF = "'Source Sans 3', sans-serif";
export const BLUE  = "#53AEF3";
export const DARK  = "#1A1A1E";
export const MUTED = "#6E6E73";
export const BG    = "#F8F8F5";

// ── Helpers ──────────────────────────────────────────────────────
/** Section padding string */
export const sectPad = (mob: boolean) =>
  mob ? `${SECT_PY_MOB}px ${PAD_X_MOB}px` : `${SECT_PY}px ${PAD_X}px`;

/** Hero padding string */
export const heroPad = (mob: boolean) =>
  mob
    ? `${HERO_PT_MOB}px ${PAD_X_MOB}px ${HERO_PB_MOB}px`
    : `${HERO_PT}px ${PAD_X}px ${HERO_PB}px`;

/** Centered content wrapper style */
export const innerWrap = {
  maxWidth: MAX_W,
  margin: "0 auto",
} as const;
