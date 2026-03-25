The hero section structure is correct but needs these 
specific fixes to match seline.com's compact density:

═══════════════════════════════════════════════
FIX 1 — HEADLINE SIZE (most important)
═══════════════════════════════════════════════

Current: headline is ~72-80px, taking up half the viewport.

Change to:
  Font-size: 52px
  Line-height: 1.1
  Max-width: 560px
  Margin-bottom: 16px

The headline should fit in 2 lines maximum:
  Line 1: "AI-Powered IEP Tracking"
  Line 2: "for Sped-Ed Professionals"

The teal highlight block stays — only the size changes.

═══════════════════════════════════════════════
FIX 2 — SUBHEADLINE
═══════════════════════════════════════════════

  Font-size: 17px
  Max-width: 460px
  Margin-bottom: 24px
  Line-height: 1.5

Must fit in 1.5 lines, not 2+ lines.

═══════════════════════════════════════════════
FIX 3 — CTA BUTTONS
═══════════════════════════════════════════════

  Padding: 10px 22px  ← reduce from current
  Font-size: 14px
  Gap between buttons: 10px
  Margin-bottom: 28px

═══════════════════════════════════════════════
FIX 4 — SCHOOL LOGO PILLS
═══════════════════════════════════════════════

Current: pills are large, wrapping into 2 rows.

Change:
  All 6 pills must fit in ONE single row.
  Font-size: 12px
  Padding: 4px 12px
  Border-radius: 9999px
  Gap: 8px
  If they don't fit in one row, reduce font to 11px.

  Style: color #AEAEB2, border 1px solid rgba(0,0,0,0.10)
  NO filled background — transparent only.
  Margin-bottom: 16px

═══════════════════════════════════════════════
FIX 5 — STAR RATING ROW
═══════════════════════════════════════════════

  Keep exactly as is — just reduce margin-bottom to 40px

═══════════════════════════════════════════════
FIX 6 — DASHBOARD MOCKUP
═══════════════════════════════════════════════

Current: large empty white gap between quote row and dashboard.

Remove ALL margin/padding between the quote row and 
the dashboard browser frame.
Margin-top: 40px maximum — not more.

The dashboard should feel like it's part of the same 
hero composition, not a separate section below.

═══════════════════════════════════════════════
FIX 7 — HERO SECTION PADDING
═══════════════════════════════════════════════

  padding-top: 72px  ← reduce from current
  padding-bottom: 0

Everything should feel tight and intentional like seline — 
not airy and spacious. Less breathing room = more premium 
editorial feel for this style.

═══════════════════════════════════════════════
DO NOT CHANGE
═══════════════════════════════════════════════

✓ Left alignment
✓ Background color and curves
✓ Teal highlight behind headline text
✓ Dark CTA button color (#1A1A1E)
✓ Ghost secondary button
✓ G2 badge + stars + quote
✓ Dashboard browser chrome (traffic dots + URL bar)
✓ Bottom fade on dashboard
✓ Font families (DM Serif Display + DM Sans)
✓ Navbar