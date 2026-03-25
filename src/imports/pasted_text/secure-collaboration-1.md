Redesign the "Secure Collaboration" section completely.
Keep same content, new approach.

═══════════════════════════════════════════════
SECTION WRAPPER
═══════════════════════════════════════════════

Background: #F0F7F0  ← soft green tint, light NOT dark
Border-radius: 24px
Margin: 0 80px 80px
Padding: 72px 80px
Overflow: hidden
Position: relative

Remove ALL dark styling from previous version.
This section must feel like it belongs 
between the features section and the rest of the page.

═══════════════════════════════════════════════
LAYOUT — TWO COLUMN
═══════════════════════════════════════════════

Grid: 1fr 1fr, gap 64px, align-items center

LEFT COLUMN — TEXT
══════════════════

Label pill:
  Text: "SECURE COLLABORATION"
  Font: DM Sans 500 11px, letter-spacing 2px
  Color: #2A8A4A
  Background: rgba(42,138,74,0.10)
  Padding: 4px 14px, border-radius 9999px
  Margin-bottom: 20px, width fit-content

Headline:
  Text: "Your whole team,\nworking as one."
  Font: Instrument Serif 400 44px
  Color: #1A1A1E
  Line-height: 1.1
  Margin-bottom: 16px

Body:
  Text: "Securely share student data and let
  paraprofessionals or assistants collect
  and update it for you — in real time."
  Font: DM Sans 300 17px
  Color: #6E6E73
  Line-height: 1.7
  Max-width: 360px
  Margin-bottom: 28px

3 bullets:
  • Role-based access control
  • Real-time collaborative data entry
  • Full audit log of all changes
  Dot: 6px, color #2A8A4A
  Font: DM Sans 400 14px, color #3D3D3D
  Gap: 10px

CTA link:
  "Learn about collaboration →"
  DM Sans 500 14px, color #2A8A4A

RIGHT COLUMN — COLLABORATION MOCKUP
═════════════════════════════════════

Show ONE wide card that makes collaboration 
immediately obvious — two people editing SAME 
goal simultaneously, each with their own cursor.

Card:
  Background: #FFFFFF
  Border: 1px solid rgba(0,0,0,0.08)
  Border-radius: 16px
  Box-shadow: 0 4px 24px rgba(0,0,0,0.06)
  Padding: 0
  Overflow: hidden

CARD HEADER:
  Background: #F8F8F5
  Border-bottom: 1px solid rgba(0,0,0,0.06)
  Padding: 12px 16px
  Display: flex, align-items center, gap 8px

  3 traffic dots: #FF5F57 · #FEBC2E · #28C840, 10px
  
  Right side: two avatar pills showing who is active:
    Pill 1: purple circle "O" + "Olivia" 
            Background: rgba(139,92,246,0.10)
            Color: #8B5CF6, font 12px DM Sans 500
            Padding: 3px 10px 3px 6px
            Border-radius: 9999px
            Border: 1px solid rgba(139,92,246,0.20)
    
    Pill 2: green circle "T" + "Tom"
            Background: rgba(34,197,94,0.10)
            Color: #22C55E, same style
    
    Small green dot before each name (6px, 
    indicating "online"):
      Olivia dot: #8B5CF6
      Tom dot: #22C55E
    
    Gap: 8px between pills
    Margin-left: auto

CARD BODY:
  Padding: 20px
  
  Section label:
    "Goals & Objectives"
    DM Sans 500 11px uppercase, letter-spacing 1px
    Color: #AEAEB2, margin-bottom 14px

  GOAL ROW 1 — Being edited by Olivia:
    Background: rgba(139,92,246,0.06)
    Border: 1.5px solid rgba(139,92,246,0.25)
    Border-radius: 10px
    Padding: 14px
    Margin-bottom: 10px
    Position: relative

    Top of card — thin purple bar:
      Height: 2px, background: #8B5CF6
      Border-radius: 2px, width 100%
      Position: absolute, top 0, left 0

    "1. Communication" DM Sans 600 13px #1A1A1E
    "Student will use words to express needs 
    and respond." DM Sans 400 12px #6E6E73
    Margin-bottom: 10px

    Tags row:
      "Language" — background #FCE4EC, 
                   color #C2185B, 11px pill
      "Expressive Skills" — background #FFF3E0,
                            color #E65100, 11px pill
      Gap: 6px

    "Olivia" cursor chip — bottom right of card:
      Background: #8B5CF6
      Color: white, DM Sans 600 10px
      Padding: 3px 10px, border-radius 9999px
      Small ▲ pointer above, same purple
      Position: absolute, bottom -10px, right 16px
      
      Animation "cursor-olivia":
        translateX(0px) → translateX(4px) → translateX(0px)
        Duration: 3s, ease-in-out, infinite

  GOAL ROW 2 — Being edited by Tom:
    Background: rgba(34,197,94,0.06)
    Border: 1.5px solid rgba(34,197,94,0.25)
    Border-radius: 10px
    Padding: 14px
    Margin-bottom: 10px
    Position: relative

    Top bar: height 2px, background #22C55E

    "1.1. Request" DM Sans 600 13px #1A1A1E
    "Student will say words/phrases to ask 
    for items." DM Sans 400 12px #6E6E73

    "Tom" cursor chip — bottom right:
      Background: #22C55E
      Color: white, same style as Olivia chip
      Small ▲ pointer above
      Position: absolute, bottom -10px, right 16px

      Animation "cursor-tom":
        translateX(0px) → translateX(-4px) → translateX(0px)
        Duration: 2.5s, ease-in-out, infinite
        Delay: 1s

  GOAL ROW 3 — Unselected, normal:
    Background: transparent
    Border: 1px solid rgba(0,0,0,0.06)
    Border-radius: 10px
    Padding: 14px
    Opacity: 0.6

    "1.2. Answer" DM Sans 500 13px #1A1A1E
    "Student will answer yes/no questions."
    DM Sans 400 12px #6E6E73

═══════════════════════════════════════════════
SCROLL REVEAL
═══════════════════════════════════════════════

Left text: opacity 0→1, translateY 20px→0
  Duration: 600ms ease

Card: opacity 0→1, translateY 32px→0, scale 0.98→1
  Duration: 700ms cubic-bezier(0.16,1,0.3,1)
  Delay: 150ms

Goal rows stagger in:
  Each row: opacity 0→1, translateX(-12px)→0
  Duration: 400ms ease
  Stagger: 100ms
  Delay starts: 400ms

DO NOT CHANGE ANYTHING ELSE.