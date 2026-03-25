Completely replace the AbleSpace AI section.
Start fresh. Light theme. Premium AI feel.
Distinct from rest of page but NOT jarring.

═══════════════════════════════════════════════
SECTION WRAPPER
═══════════════════════════════════════════════

Background: #F3F1FF  ← very subtle lavender tint
                       barely different from #F8F8F5
                       but signals "something different"
Padding: 100px 80px
Position: relative
Overflow: hidden

SUBTLE TOP FADE IN:
  Before section content:
  Height: 60px
  Background: linear-gradient(
    to bottom, #F8F8F5, #F3F1FF
  )

SUBTLE BOTTOM FADE OUT:
  After section content:
  Height: 60px
  Background: linear-gradient(
    to bottom, #F3F1FF, #F8F8F5
  )

BACKGROUND DECORATION (very subtle):
  One large blurred circle, position absolute:
  Width: 600px, height: 600px
  Background: radial-gradient(circle,
    rgba(107,94,205,0.07) 0%,
    transparent 70%
  )
  Top: -100px, right: -100px
  Pointer-events: none, z-index: 0

  Second smaller circle:
  Width: 300px, height: 300px
  Background: radial-gradient(circle,
    rgba(83,174,243,0.06) 0%,
    transparent 70%
  )
  Bottom: 0, left: 10%
  Pointer-events: none, z-index: 0

All content: position relative, z-index: 1

═══════════════════════════════════════════════
SECTION HEADER — LEFT ALIGNED
═══════════════════════════════════════════════

Max-width: 600px
Margin-bottom: 56px

Label pill:
  Text: "✦  ABLESPACE AI"
  Font: DM Sans 500 11px, letter-spacing 2px
  Color: #6B5ECD
  Background: rgba(107,94,205,0.08)
  Border: 1px solid rgba(107,94,205,0.15)
  Padding: 5px 14px
  Border-radius: 9999px
  Width: fit-content
  Margin-bottom: 20px

Headline:
  Text: "Let AI do the heavy lifting."
  Font: Instrument Serif 400 58px
  Color: #1A1A1E
  Line-height: 1.06
  Letter-spacing: -0.5px
  Margin-bottom: 16px

  "heavy lifting." — these two words:
  Font-style: italic
  Color: #6B5ECD

Subtext:
  Text: "Planning, documenting, tracking — 
  AbleSpace AI handles the paperwork 
  so you can focus on your students."
  Font: DM Sans 300 18px
  Color: #6E6E73
  Line-height: 1.65
  Max-width: 480px

═══════════════════════════════════════════════
BENTO GRID LAYOUT
═══════════════════════════════════════════════

CSS Grid:
  Grid-template-columns: 1.2fr 0.8fr 1fr
  Grid-template-rows: auto auto
  Gap: 16px

Card base style:
  Background: #FFFFFF
  Border: 1px solid rgba(107,94,205,0.10)
  Border-radius: 20px
  Overflow: hidden
  Box-shadow: 0 2px 20px rgba(107,94,205,0.06)
  
  Hover:
    Transform: translateY(-4px)
    Box-shadow: 0 12px 40px rgba(107,94,205,0.12)
    Transition: all 300ms ease

═══════════════════════════════════════════════
CARD 1 — AI Progress Notes (large, spans 2 rows)
═══════════════════════════════════════════════

Grid-column: 1
Grid-row: 1 / 3
Min-height: 500px
Padding: 32px

TOP TEXT:
  Label pill: "Progress Notes"
    Background: rgba(107,94,205,0.08)
    Color: #6B5ECD, DM Sans 600 11px
    Padding: 3px 10px, border-radius 9999px
    Width fit-content, margin-bottom 14px

  Headline: "Generate notes\nin seconds."
    Instrument Serif 400 28px #1A1A1E
    Line-height 1.15, margin-bottom 8px

  Body: "AI writes detailed progress notes 
  from session data."
    DM Sans 300 14px #6E6