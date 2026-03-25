Redesign the AbleSpace hero section. Keep the LEFT SIDE CONTENT 
exactly as it is in the current output. Make the following changes:

═══════════════════════════════════════════════
CHANGE 1 — REMOVE RIGHT SIDE COMPLETELY
═══════════════════════════════════════════════

Remove ALL of these from the right side:
✗ The illustrated mascot/character
✗ The floating "IEP Goal Progress" card
✗ The floating "Active IEPs" card  
✗ The floating "Reviews Due" card
✗ The floating "Services" card

The right side should be EMPTY — no elements at all.
The hero is now a SINGLE COLUMN, left-aligned layout.
Content column width: 640px max. Right side: empty space.

═══════════════════════════════════════════════
CHANGE 2 — CTA BUTTON COLORS (match seline.com)
═══════════════════════════════════════════════

Look at seline.com's CTA buttons. Copy them exactly.

Button A — Primary:
  Background: #1A1A1E   ← dark near-black, NOT teal
  Text color: #FFFFFF
  Text: "Sign up for free  →"
  Font: DM Sans 500 15px
  Border-radius: 9999px
  Padding: 13px 28px
  Hover: background #2C2C30

Button B — Ghost/Secondary:
  Background: transparent
  Border: 1.5px solid rgba(0,0,0,0.18)
  Text color: #1A1A1E
  Text: "View live demo  ✦"
  Font: DM Sans 400 15px
  Border-radius: 9999px
  Padding: 13px 28px
  Hover: border-color #1A1A1E, background rgba(0,0,0,0.04)

REMOVE the teal "Add to AbleSpace A" button style entirely.
REMOVE all teal from CTA buttons.

═══════════════════════════════════════════════
CHANGE 3 — DASHBOARD SCREENSHOT BELOW CONTENT
═══════════════════════════════════════════════

After the star rating / G2 quote row, add a full-width 
dashboard mockup section. Margin-top: 56px.

The dashboard image will be provided as an attachment/asset.
Place it inside a browser window chrome frame:

Window frame:
  Width: 100% (max 1200px)
  Border-radius: 16px 16px 0 0
  Border: 1px solid rgba(0,0,0,0.08)
  Box-shadow: 0 -8px 48px rgba(0,0,0,0.08)
  Overflow: hidden

Top bar of window frame:
  Height: 42px
  Background: #F0F0EE
  Border-bottom: 1px solid rgba(0,0,0,0.06)
  Left: 3 traffic dots — #FF5F57 · #FEBC2E · #28C840
        Size 11px, gap 6px, margin-left 16px
  Center: URL pill "app.ablespace.io"
          Background: rgba(0,0,0,0.07)
          DM Sans 13px, color #6E6E73
          Padding: 4px 16px, border-radius 9999px, width 200px

Dashboard image:
  Place the attached screenshot directly below the top bar.
  Width: 100%
  No additional border-radius on the image itself.

Bottom fade on the entire mockup:
  Gradient overlay on top of image:
  linear-gradient(to bottom, transparent 55%, #F8F8F5 100%)
  This fades the screenshot into the page background.
  EXACTLY like seline.com — soft fade, not a hard cut.

═══════════════════════════════════════════════
KEEP EXACTLY AS IS
═══════════════════════════════════════════════

✓ Background color #F8F8F5
✓ Background decorative SVG curves (the faint lines)
✓ Headline: "AI-Powered IEP Tracking for Sped-Ed Professionals"
✓ Teal highlight block behind "AI-Powered IEP Tracking" text
✓ Subheadline text
✓ School name pills row (Austin ISD, Riverside USD, etc.)
✓ G2 stars + quote row
✓ Left-aligned layout
✓ DM Serif Display headline font
✓ DM Sans body font
✓ Navbar (unchanged)

═══════════════════════════════════════════════
FINAL LAYOUT ORDER (top to bottom)
═══════════════════════════════════════════════

1. Navbar
2. Hero content (left-aligned, single column):
     → Headline with teal highlight
     → Subheadline
     → Two CTA buttons (dark primary + ghost secondary)
     → School logo pills
     → G2 star rating + quote
3. Dashboard screenshot in browser frame (full width)
   with bottom fade into page background

═══════════════════════════════════════════════
FINAL CHECK
═══════════════════════════════════════════════

□ Right side completely empty — no cards, no illustration?
□ Primary CTA is dark (#1A1A1E), NOT teal?
□ Ghost CTA has dark border, NOT teal border?
□ Dashboard screenshot sits BELOW all hero content?
□ Dashboard has browser chrome (traffic dots + URL bar)?
□ Dashboard fades to background color at bottom?
□ Layout is still left-aligned, single column?