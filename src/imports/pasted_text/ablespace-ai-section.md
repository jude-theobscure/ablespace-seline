Add the AbleSpace AI section below the 
Secure Collaboration section.

This section has a DRAMATIC scroll-driven 
color transition — the page background smoothly 
shifts from #F8F8F5 (light) to #6B5ECD (purple) 
as the section enters the viewport, then fades 
back to #F8F8F5 as it exits.

═══════════════════════════════════════════════
TRANSITION WRAPPER
═══════════════════════════════════════════════

A full-width div that handles the color shift:
  Position: relative
  
  TOP FADE IN (light → purple):
    Before the section content, add a div:
    Height: 120px
    Background: linear-gradient(
      to bottom,
      #F8F8F5 0%,
      #6B5ECD 100%
    )
    Width: 100%

  MAIN SECTION BODY:
    Background: #6B5ECD
    Width: 100%
    Padding: 80px 80px

  BOTTOM FADE OUT (purple → light):
    After the section content, add a div:
    Height: 120px
    Background: linear-gradient(
      to bottom,
      #6B5ECD 0%,
      #F8F8F5 100%
    )
    Width: 100%

═══════════════════════════════════════════════
SECTION HEADER (centered)
═══════════════════════════════════════════════

Label pill:
  Text: "ABLESPACE AI"
  Font: DM Sans 500 11px, letter-spacing 2px
  Color: rgba(255,255,255,0.60)
  Background: rgba(255,255,255,0.10)
  Border: 1px solid rgba(255,255,255,0.15)
  Padding: 4px 14px, border-radius 9999px
  Margin-bottom: 20px
  Width: fit-content, margin-left: auto, margin-right: auto

Headline:
  Text: "AbleSpace AI."
  Line 2: "Built for Special Education."
  Font: Instrument Serif 400 56px
  Color: #FFFFFF
  Line-height: 1.08
  Text-align: center
  Margin-bottom: 16px

Subtext:
  Text: "Let AI handle the heavy lifting — so planning,
  documenting, and tracking IEP goals becomes faster,
  smarter, and stress-free."
  Font: DM Sans 300 18px
  Color: rgba(255,255,255,0.65)
  Text-align: center
  Max-width: 500px
  Margin: 0 auto 48px

CTA Buttons (centered, same style as hero):
  Button A: "Sign Up for Free →"
    Background: #FFFFFF
    Color: #6B5ECD
    Border-radius: 8px
    Font: DM Sans 500 14px
    Padding: 11px 22px
    Below: "For educators & providers"
           DM Sans 400 11px rgba(255,255,255,0.50)

  Button B: "Learn More →"
    Background: transparent
    Border: 1.5px solid rgba(255,255,255,0.30)
    Color: #FFFFFF
    Border-radius: 8px
    Font: DM Sans 400 14px
    Padding: 11px 22px
    Below: "For school administrators"
           DM Sans 400 11px rgba(255,255,255,0.50)

  Gap between buttons: 12px
  Both buttons + their labels: flex row, 
  align-items flex-start, justify-content center

═══════════════════════════════════════════════
HERO MOCKUP (large centered card)
═══════════════════════════════════════════════

One large card below the CTAs:
  Margin-top: 56px
  Background: rgba(255,255,255,0.95)
  Border: 1px solid rgba(255,255,255,0.20)
  Border-radius: 20px
  Box-shadow: 0 32px 80px rgba(0,0,0,0.25)
  Overflow: hidden
  Max-width: 820px
  Margin-left: auto, margin-right: auto

CARD TOP BAR:
  Height: 40px
  Background: #F5F3FF
  Border-bottom: 1px solid rgba(0,0,0,0.06)
  Display flex, align-items center, padding 0 16px, gap 8px
  3 traffic dots: #FF5F57 · #FEBC2E · #28C840, 10px

CARD BODY — two column:
  Grid: 200px 1fr

  LEFT SIDEBAR:
    Background: #FAFAF8
    Border-right: 1px solid rgba(0,0,0,0.06)
    Padding: 16px

    "AbleSpace AI" — DM Sans 600 13px #1A1A1E
    Margin-bottom: 16px

    Two nav items:
      "📄 Worksheet" — active
        Background: rgba(107,94,205,0.10)
        Color: #6B5ECD
        Border-radius: 6px
        Padding: 7px 10px
        DM Sans 500 13px
      
      "📝 Progress Notes"
        Color: #6E6E73
        Padding: 7px 10px
        DM Sans 400 13px

    Below nav: 4 small gray skeleton rows
      Height: 8px, background #E5E5E5
      Border-radius: 4px
      Widths: 90%, 75%, 85%, 60%
      Gap: 8px, margin-top: 20px

  RIGHT MAIN AREA:
    Padding: 20px 24px
    Background: white

    Title: "Medical /r/ Picture Practice"
    DM Sans 600 15px #1A1A1E, margin-bottom 16px

    Image grid (2 columns, gap 12px):
      4 image placeholder cards:
        Background: #F8F8F5
        Border: 1px solid rgba(0,0,0,0.06)
        Border-radius: 10px
        Height: 100px
        Display flex, align-items center
        Justify-content center

        Card 1: 🥕 emoji, font-size 36px
        Card 2: 🦜 emoji, font-size 36px
        Card 3: 🌽 emoji, font-size 36px
        Card 4: 🦅 emoji, font-size 36px

        Below each emoji:
          "Q:" DM Sans 500 11px #AEAEB2
          Gray skeleton line below

    FLOATING PROGRESS NOTE CARD:
      Position: absolute
      Bottom: -20px, right: -10px
      Background: white
      Border: 1px solid rgba(0,0,0,0.08)
      Border-radius: 12px
      Box-shadow: 0 8px 32px rgba(0,0,0,0.12)
      Padding: 14px 16px
      Width: 260px
      Z-index: 10

      "⭐ Progress Note" — DM Sans 600 12px #1A1A1E
      Margin-bottom 8px

      "Liam attended a 30-minute speech session
      targeting /s/ and /z/ sounds."
      DM Sans 400 12px #6E6E73
      Line-height 1.5
      Margin-bottom 10px

      3 skeleton lines:
        Height 6px, background #E5E5E5
        Border-radius 3px, widths 100%, 80%, 60%
        Gap 5px

      Bottom row:
        Left: 🔗 icon + ⏰ icon — 14px, color #AEAEB2
        Right: "+ Add" pill
          Background: #6B5ECD, color white
          DM Sans 500 11px, padding 4px 10px
          Border-radius 6px

      ANIMATION on floating card:
        translateY(0px) → translateY(-8px) → translateY(0px)
        4s ease-in-out infinite

═══════════════════════════════════════════════
AI FEATURE CARDS (5 cards below mockup)
═══════════════════════════════════════════════

Margin-top: 48px
Layout: CSS grid
  Row 1: 3 cards (equal width)
  Row 2: 2 cards (equal width, centered)
Gap: 16px

Each card:
  Background: rgba(255,255,255,0.10)
  Border: 1px solid rgba(255,255,255,0.15)
  Border-radius: 16px
  Padding: 20px
  Backdrop-filter: blur(10px)
  Overflow: hidden
  
  Hover:
    Background: rgba(255,255,255,0.16)
    Transform: translateY(-4px)
    Transition: all 250ms ease

CARD HEADER (mini mockup area):
  Background: rgba(255,255,255,0.08)
  Border-radius: 10px
  Height: 80px
  Margin-bottom: 16px
  Padding: 12px
  Display flex, align-items center

CARD FOOTER:
  Feature icon pill + title + description

──────────────────────────
CARD 1 — Align to Standard
──────────────────────────

Mini mockup:
  "📖 Reading" label DM Sans 600 11px white
  "4 Results Found!" small green pill
  3 skeleton rows below

Footer:
  Icon: 📖 in rgba(255,255,255,0.15) circle 28px
  Title: "Align to Standard"
  DM Sans 600 13px white, margin-bottom 6px
  Body: "Easily align goals with state or district 
  standards for compliance."
  DM Sans 300 12px rgba(255,255,255,0.60)

──────────────────────────
CARD 2 — Suggest Data Tracking
──────────────────────────

Mini mockup:
  Two stat boxes side by side:
    "∿ Accuracy" + "⏱ Duration"
    Background rgba(255,255,255,0.10)
    Border-radius 6px, padding 8px
    DM Sans 500 11px white
  Skeleton bars below

Footer:
  Icon: ∿ 
  Title: "Suggest Data Tracking"
  Body: "Get AI recommendations on the best 
  data tracking methods."

──────────────────────────
CARD 3 — Generate IEP Goal
──────────────────────────

Mini mockup:
  "AI Goal Generation" label
  Input showing "4th Grade" pill tag
  "Generated Goal" label right
  Skeleton output below

Footer:
  Icon: ✦
  Title: "Generate IEP Goal"
  Body: "Create personalized, ready-to-use 
  IEP goals tailored to each student."

──────────────────────────
CARD 4 — Worksheet
──────────────────────────

Mini mockup:
  "IEP Worksheet" label
  Small illustration: 3 tiny document icons
  with pastel colors

Footer:
  Icon: 📄
  Title: "Worksheet"
  Body: "Generate customized worksheets 
  aligned to standards in seconds."

──────────────────────────
CARD 5 — Generate Progress Notes
──────────────────────────

Mini mockup:
  "Progress Notes" label
  Small note preview: 
    "Progress Note" bold
    "Emma produced the /s/ sound correctly 
    in 7 out of 10 trials..."
    DM Sans 400 10px rgba(255,255,255,0.70)
  Avatar chip "Noah M." — green pill right side

Footer:
  Icon: 📝
  Title: "Generate Progress Notes"
  Body: "Save time with AI-generated progress 
  notes, customizable for each student's goals."

═══════════════════════════════════════════════
SCROLL REVEAL ANIMATIONS
═══════════════════════════════════════════════

Headline: opacity 0→1, translateY 24px→0
  Duration: 600ms ease, delay 0ms

Hero mockup card: opacity 0→1, translateY 40px→0,
  scale 0.97→1
  Duration: 700ms cubic-bezier(0.16,1,0.3,1)
  Delay: 200ms

Feature cards: opacity 0→1, translateY 32px→0
  Stagger: 80ms each
  Duration: 500ms ease
  Delay starts: 400ms

═══════════════════════════════════════════════
DO NOT CHANGE ANYTHING ELSE.
═══════════════════════════════════════════════