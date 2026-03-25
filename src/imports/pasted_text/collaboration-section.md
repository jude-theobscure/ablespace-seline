Replace the entire Secure Collaboration section.
NO headline, NO subtext, NO label pill, NO stats row.
The visual alone must communicate collaboration.

═══════════════════════════════════════════════
SECTION WRAPPER
═══════════════════════════════════════════════

Background: #F8F8F5
Padding: 80px
Position: relative
Overflow: hidden

═══════════════════════════════════════════════
ONE SINGLE WIDE CARD — FULL SECTION
═══════════════════════════════════════════════

Background: #FFFFFF
Border: 1px solid rgba(0,0,0,0.07)
Border-radius: 24px
Padding: 0
Overflow: hidden
Box-shadow: 0 4px 40px rgba(0,0,0,0.06)
Min-height: 520px
Position: relative

This card IS the section. Nothing outside it.

═══════════════════════════════════════════════
CARD TOP BAR (like a real app window)
═══════════════════════════════════════════════

Height: 48px
Background: #FAFAF8
Border-bottom: 1px solid rgba(0,0,0,0.06)
Padding: 0 20px
Display: flex
Align-items: center
Justify-content: space-between

LEFT side:
  3 traffic dots: #FF5F57 · #FEBC2E · #28C840
  Size: 11px each, gap: 6px

CENTER:
  "AbleSpace — Emma R. · IEP Session"
  Font: DM Sans 400 13px
  Color: #AEAEB2

RIGHT side — LIVE COLLABORATORS:
  4 avatar circles overlapping (like Figma/Notion):
  Each circle: 28px diameter, border: 2px solid white
  Overlap: margin-left -8px on each after first
  
  Avatar 1 — SK: background #E8F5E9, color #2A8A4A
  Avatar 2 — MJ: background #E3F2FD, color #1565C0
  Avatar 3 — RP: background #F3E5F5, color #7B1FA2
  Avatar 4 — AT: background #FCE4EC, color #C2185B
  Font: DM Sans 700 10px

  After avatars: green pulsing dot + "4 online" text
    Dot: 6px, background #22C55E
    Pulse animation: scale 1→1.5→1, opacity 1→0→1
    Duration: 2s infinite
    Text: DM Sans 500 12px #22C55E
    Gap: 6px

═══════════════════════════════════════════════
CARD BODY — 3 COLUMN LAYOUT
═══════════════════════════════════════════════

Display: grid
Grid-template-columns: 260px 1fr 280px
Height: calc(100% - 48px)
Min-height: 472px

──────────────────────────
COLUMN 1 — GOALS SIDEBAR
──────────────────────────

Background: #FAFAF8
Border-right: 1px solid rgba(0,0,0,0.06)
Padding: 20px 16px
Overflow: hidden

"GOALS & OBJECTIVES" 
  DM Sans 500 10px uppercase letter-spacing 1.5px
  Color: #AEAEB2, margin-bottom 14px

GOAL ITEM 1 — Active, being edited by SK:
  Background: rgba(83,174,243,0.08)
  Border: 1.5px solid rgba(83,174,243,0.25)
  Border-radius: 10px
  Padding: 12px
  Margin-bottom: 8px
  Position: relative

  "1. Communication" DM Sans 600 13px #1A1A1E
  "Student will use words to express needs."
  DM Sans 400 11px #6E6E73, margin-top 4px

  Tags: "Language" pink pill · "Expressive Skills" orange pill
  Font 10px, padding 2px 8px, border-radius 4px
  Margin-top: 8px

  SK cursor chip — bottom-right corner:
    Background: #2A8A4A
    Color: white, DM Sans 700 10px
    Padding: 2px 8px, border-radius 9999px
    Position: absolute, bottom -10px, right 12px
    Small ▲ pointer above, same green color

    Animation "float-sk":
      translateY(0)→translateY(-5px)→translateY(0)
      3s ease-in-out infinite

GOAL ITEM 2 — Active, being edited by MJ:
  Background: rgba(21,101,192,0.06)
  Border: 1.5px solid rgba(21,101,192,0.20)
  Border-radius: 10px
  Padding: 12px
  Margin-bottom: 8px
  Position: relative

  "1.1. Request" DM Sans 600 13px #1A1A1E
  "Student will say words to ask for items."
  DM Sans 400 11px #6E6E73, margin-top 4px

  MJ cursor chip:
    Background: #1565C0
    Same style as SK chip
    Bottom-right corner

    Animation "float-mj":
      translateY(0)→translateY(-5px)→translateY(0)
      2.5s ease-in-out infinite
      Delay: 0.8s

GOAL ITEM 3 — Normal unselected:
  Border: 1px solid rgba(0,0,0,0.06)
  Border-radius: 10px
  Padding: 12px
  Margin-bottom: 8px
  Opacity: 0.5

  "1.2. Answer" DM Sans 500 13px #1A1A1E
  "Student will answer yes/no questions."
  DM Sans 400 11px #6E6E73, margin-top 4px

GOAL ITEM 4 — Normal:
  Same style as item 3, opacity 0.35
  "2. Social Skills"
  "Student will interact with peers."

──────────────────────────
COLUMN 2 — MAIN DATA AREA
──────────────────────────

Background: #FFFFFF
Padding: 24px 28px

TOP ROW — flex space-between:
  Left: 
    "Communication" DM Sans 600 15px #1A1A1E
    "Goal 1 of 4" DM Sans 400 12px #AEAEB2
  Right: 
    "Trial 3 of 5" pill
    Background: #F5F5F5
    DM Sans 500 12px #6E6E73
    Padding: 4px 12px, border-radius 6px

TABS ROW (margin-top 16px):
  3 tabs: "Capture Data" · "Track Services" · "Accommodations"
  Active "Capture Data":
    Border-bottom: 2px solid #53AEF3
    DM Sans 600 13px #53AEF3
  Inactive: DM Sans 400 13px #AEAEB2
  Gap: 24px, padding-bottom: 12px
  Border-bottom of row: 1px solid rgba(0,0,0,0.06)

STATS CARDS (margin-top 20px):
  2 cards side by side, gap 12px:
  
  Card style:
    Background: #F8F8F5
    Border: 1px solid rgba(0,0,0,0.06)
    Border-radius: 10px
    Padding: 16px 20px

  Card 1:
    "PROMPTED" DM Sans 500 10px uppercase #AEAEB2
    "99%" Instrument Serif 400 36px #1A1A1E
    
  Card 2:
    "ACCURACY" DM Sans 500 10px uppercase #AEAEB2
    "99%" Instrument Serif 400 36px #1A1A1E
    Small "+6%" badge top-right:
      Background: #E8F5E9, color: #2A8A4A
      Font: DM Sans 600 10px, padding 2px 6px
      Border-radius: 4px

ATTEMPT TRACKER (margin-top 20px):
  Label: "ATTEMPTS" DM Sans 500 10px uppercase #AEAEB2
  Margin-bottom: 10px
  
  8 attempt pills in a row, gap 6px:
    Pill 1: "+" background rgba(83,174,243,0.15) 
            color #53AEF3
    Pill 2: "+" same
    Pill 3: "−" background rgba(232,98,74,0.15) 
            color #E8624A
    Pill 4: "C" background rgba(0,0,0,0.06) 
            color #6E6E73
    Pill 5: "+" same as 1
    Pill 6: "C" same as 4
    Pill 7: "−" same as 3
    Pill 8: "C" same as 4
    Each pill: DM Sans 700 12px, padding 4px 10px
    Border-radius: 6px, min-width 32px, text-align center

  RP cursor chip floating near pill row:
    Background: #7B1FA2
    Color: white, DM Sans 700 10px
    Padding: 2px 8px, border-radius 9999px
    Position: absolute, above pill row right side
    Small ▼ pointer below

    Animation "float-rp":
      translateX(0)→translateX(4px)→translateX(0)
      2.8s ease-in-out infinite
      Delay: 1.5s

ACTION BUTTONS (margin-top 24px):
  3 buttons side by side, gap 10px:

  "+" button:
    Background: rgba(83,174,243,0.12)
    Border: 1.5px solid rgba(83,174,243,0.30)
    Border-radius: 10px, height 64px, flex 1
    Font-size: 28px, color: #53AEF3
    Font-weight: 300
    Hover: background rgba(83,174,243,0.20)
    Transition: all 200ms ease

  "−" button:
    Background: rgba(232,98,74,0.10)
    Border: 1.5px solid rgba(232,98,74,0.25)
    Border-radius: 10px, height 64px, flex 1
    Font-size: 28px, color: #E8624A
    Hover: background rgba(232,98,74,0.18)

  "P" button:
    Background: #F8F8F5
    Border: 1px solid rgba(0,0,0,0.10)
    Border-radius: 10px, height 64px, flex 1
    DM Sans 700 16px, color: #6E6E73
    Hover: background #F0F0EE

──────────────────────────
COLUMN 3 — ACTIVITY FEED
──────────────────────────

Background: #FAFAF8
Border-left: 1px solid rgba(0,0,0,0.06)
Padding: 20px 16px
Overflow: hidden

"LIVE ACTIVITY" label row:
  Display flex, align-items center, gap 8px
  "LIVE ACTIVITY" DM Sans 500 10px uppercase 
  letter-spacing 1.5px, color #AEAEB2
  
  Live indicator:
    6px circle, background #22C55E
    Animation "live-pulse":
      box-shadow: 0 0 0 0 rgba(34,197,94,0.4)→
                  0 0 0 6px rgba(34,197,94,0)
      Duration: 1.5s ease infinite

  Margin-bottom: 16px

4 ACTIVITY ITEMS stacked, gap 0:
  Each item: padding 12px 0, 
  border-bottom 1px solid rgba(0,0,0,0.04)

  Item layout: flex row, gap 10px
    Left: avatar circle 28px (same colors as top bar)
    Right: flex column
      Top: "Name · action" DM Sans 500 12px #1A1A1E
      Bottom: timestamp DM Sans 400 11px #AEAEB2

  Item 1 (most recent, highlighted):
    Background: rgba(83,174,243,0.05)
    Border-radius: 8px
    Padding: 10px 8px
    Avatar: SK green
    "SK added a note" DM Sans 500 12px #1A1A1E
    "just now" #22C55E (green, not gray)
    
    Note preview below:
      Background: white
      Border: 1px solid rgba(0,0,0,0.06)
      Border-radius: 6px
      Padding: 8px 10px
      "Student asked for toy using 1 prompt..."
      DM Sans 400 11px #6E6E73
      Margin-top: 6px

  Item 2:
    Avatar: MJ blue
    "MJ updated trial data" DM Sans 500 12px #1A1A1E
    "2 min ago" #AEAEB2

  Item 3:
    Avatar: RP purple
    "RP marked goal on track" DM Sans 500 12px
    "5 min ago" #AEAEB2

  Item 4:
    Avatar: AT pink
    "AT viewed progress report" DM Sans 500 12px
    "12 min ago" #AEAEB2

  NEW ITEM ANIMATION:
    Every 4 seconds, a new fake activity item
    slides in from top, pushes others down.
    
    @keyframes slide-in-activity {
      from { opacity: 0; transform: translateY(-20px); 
             max-height: 0; }
      to   { opacity: 1; transform: translateY(0); 
             max-height: 80px; }
    }
    
    New item appears with this animation:
      Duration: 400ms ease-out
    
    Items rotate through these messages:
      "AT viewed a report · just now"
      "SK logged a trial · just now"
      "MJ updated accommodation · just now"
      "RP added a goal note · just now"

═══════════════════════════════════════════════
ALL CURSOR CHIP ANIMATIONS
═══════════════════════════════════════════════

Wrap in:
@media (prefers-reduced-motion: no-preference) {
  all animation keyframes here
}

SK chip: float up-down, 3s, delay 0s
MJ chip: float up-down, 2.5s, delay 0.8s
RP chip: float left-right, 2.8s, delay 1.5s

═══════════════════════════════════════════════
SCROLL REVEAL — ENTIRE CARD
═══════════════════════════════════════════════

Card enters viewport:
  opacity: 0 → 1
  transform: translateY(40px) → translateY(0)
  scale: 0.98 → 1
  Duration: 700ms cubic-bezier(0.16, 1, 0.3, 1)

Column 1 items stagger in after card:
  Each goal item: opacity 0→1, translateX(-12px)→0
  Stagger: 80ms, delay starts 300ms

Activity feed items stagger in:
  Each: opacity 0→1, translateX(12px)→0
  Stagger: 80ms, delay starts 400ms

DO NOT CHANGE ANYTHING ELSE.