Add a features section below the hero. 
DO NOT use sticky scroll or Intersection Observer JS.

Use a TABBED layout — one large feature shown at a time,
user clicks tabs to switch. Clean, motion-friendly, 
visually impressive.

═══════════════════════════════════════════════
VISUAL LANGUAGE — MUST MATCH HERO
═══════════════════════════════════════════════

Background: #F8F8F5
Card background: #FFFFFF
Border: 1px solid rgba(0,0,0,0.08)
Border-radius cards: 16px
Border-radius buttons/pills: 8px
Accent: #53AEF3
Heading font: Instrument Serif 400
Body font: DM Sans 300
Text primary: #1A1A1E
Text muted: #6E6E73

═══════════════════════════════════════════════
SECTION HEADER (centered)
═══════════════════════════════════════════════

Eyebrow:
  Text: "EVERYTHING YOU NEED"
  Font: DM Sans 500 12px
  Letter-spacing: 2px
  Color: #53AEF3
  Margin-bottom: 14px

Headline:
  Text: "Powerful features built
  for real classrooms."
  Font: Instrument Serif 400 52px
  Color: #1A1A1E
  Line-height: 1.1
  Text-align: center

Subtext:
  Text: "From IEP tracking to billing — every tool
  your team needs, without the chaos."
  Font: DM Sans 300 18px
  Color: #6E6E73
  Text-align: center
  Max-width: 480px
  Margin: 16px auto 56px

═══════════════════════════════════════════════
TAB BAR
═══════════════════════════════════════════════

5 tabs in a horizontal pill container.
Container:
  Background: #EFEFED
  Border-radius: 10px
  Padding: 4px
  Display: inline-flex
  Margin: 0 auto 48px
  Gap: 2px

Each tab:
  Font: DM Sans 500 14px
  Padding: 9px 20px
  Border-radius: 8px
  Cursor: pointer
  Transition: all 200ms ease

Inactive tab:
  Background: transparent
  Color: #6E6E73

Active tab:
  Background: #FFFFFF
  Color: #1A1A1E
  Box-shadow: 0 1px 4px rgba(0,0,0,0.10)

Tab labels:
  1. Data Tracking
  2. Service Time
  3. Reports
  4. Accommodations
  5. Scheduling

TRANSITION when switching tabs:
  Outgoing panel: opacity 1→0, translateY 0→-12px
  Duration: 180ms ease-in
  Incoming panel: opacity 0→1, translateY 12px→0
  Duration: 280ms ease-out
  Delay: 160ms (after outgoing finishes)

═══════════════════════════════════════════════
FEATURE PANEL LAYOUT
═══════════════════════════════════════════════

Each panel: large single card
  Background: #FFFFFF
  Border: 1px solid rgba(0,0,0,0.08)
  Border-radius: 20px
  Padding: 0
  Overflow: hidden
  Min-height: 480px
  Display: grid
  Grid-template-columns: 1fr 1fr

LEFT HALF (text):
  Padding: 56px 48px
  Display: flex
  Flex-direction: column
  Justify-content: center
  Border-right: 1px solid rgba(0,0,0,0.06)

  Feature number pill:
    e.g. "01"
    Background: rgba(83,174,243,0.10)
    Color: #53AEF3
    Font: DM Sans 600 11px
    Padding: 3px 10px
    Border-radius: 9999px
    Margin-bottom: 20px
    Width: fit-content

  Headline:
    Font: Instrument Serif 400 36px
    Color: #1A1A1E
    Line-height: 1.15
    Margin-bottom: 14px

  Body:
    Font: DM Sans 300 16px
    Color: #6E6E73
    Line-height: 1.7
    Max-width: 340px
    Margin-bottom: 28px

  3 bullet points:
    Each: flex row, gap 10px
    Dot: 6px circle, background #53AEF3
    Text: DM Sans 400 14px, color #3D3D3D
    Row gap: 10px

RIGHT HALF (mockup):
  Background: #F8F8F5
  Display: flex
  Align-items: center
  Justify-content: center
  Padding: 32px
  Position: relative
  Overflow: hidden

  Inner mockup card:
    Background: #FFFFFF
    Border: 1px solid rgba(0,0,0,0.08)
    Border-radius: 12px
    Box-shadow: 0 4px 24px rgba(0,0,0,0.08)
    Width: 100%
    Overflow: hidden

═══════════════════════════════════════════════
TAB 1 — DATA TRACKING
═══════════════════════════════════════════════

Left:
  Number: "01"
  Headline: "Track every goal.
  With one tap."
  Body: "Collect data with a single click.
  AI organizes it automatically — nothing
  slips through the cracks."
  Bullets:
  • 9+ data collection types
  • Phases, Labels, Goal History
  • Real-time accuracy per student

Right mockup:
  Mockup header bar:
    Background: #F5F5F5
    Height: 40px
    Left: "← Take Data" in DM Sans 500 13px
    Right: avatar circle (teal, initials)
    Border-bottom: 1px solid rgba(0,0,0,0.06)

  Two columns inside mockup:
  
  LEFT column (Goals list):
    Padding: 14px
    "Goals & Objectives" label DM Sans 600 12px
    Card below:
      "1. Communication" bold 13px
      "Student will use words..." gray 12px
      Two tags: "Language" (pink bg) "Expressive Skills" (orange bg)
                Font 11px, padding 2px 8px, border-radius 4px
      Two avatar chips bottom: "Tom" (green) "Olivia" (pink)
                               Font 11px pill shape

  RIGHT column (Accuracy):
    Padding: 14px
    "ACCURACY" label 10px uppercase gray
    Large number: "88%" — Instrument Serif 400 40px #1A1A1E
    
    Three status pills stacked below:
      "On track"  — background #E6F7EE, color #1A7A1A
      "Behind"    — background #FFF3E0, color #B85C00  
      "Mastered"  — background #EDE8F8, color #5A3F9A
      Each: DM Sans 500 12px, padding 4px 12px, 
            border-radius 6px, width fit-content
    
    "+ Create phases" text button below in #53AEF3 13px

  ANIMATION when tab 1 activates:
    "88%" counts up from 0 to 88
    Duration: 1000ms ease-out
    Status pills fade+slide in with 100ms stagger

═══════════════════════════════════════════════
TAB 2 — SERVICE TIME
═══════════════════════════════════════════════

Left:
  Number: "02"
  Headline: "Auto-track sessions.
  Zero extra work."
  Body: "Smart adjustments for attendance.
  Customize service types and get
  instant billing-ready reports."
  Bullets:
  • Smart attendance detection
  • Customizable service types
  • Instant billing-ready reports

Right mockup:
  Mockup header: "Service Time" DM Sans 600 14px, padding 16px

  Student row:
    Avatar circle (photo placeholder, teal bg, initials "MJ")
    Name bar (gray rounded rect placeholder)
    "● Present" green dot + DM Sans 500 12px green text
    All in flex row, padding 12px 16px
    Border-bottom: 1px solid rgba(0,0,0,0.06)

  Three info rows (each flex row, padding 10px 16px, 
  border-bottom 1px solid rgba(0,0,0,0.04)):
    ⏱ "Time (mins)"     right: "30 mins" DM Sans 500
    📅 "Attendance"      right: empty
    📋 "Service type"    right: empty

  Dropdown below service type row:
    Background white, border 1px solid rgba(0,0,0,0.10)
    Border-radius 8px, padding 4px, margin 0 16px 16px
    Three items:
      "Consultation" — DM Sans 400 13px #6E6E73
      "Home Therapy  ✓" — DM Sans 500 13px #0DB8A0 (teal)
      "Drive Time" — DM Sans 400 13px #6E6E73
    Each item padding: 8px 12px

  ANIMATION when tab 2 activates:
    Dropdown slides down: max-height 0→120px, opacity 0→1
    Duration: 400ms cubic-bezier(0.16, 1, 0.3, 1)
    "Home Therapy ✓" checkmark: stroke-dashoffset animation
    Duration: 300ms ease, delay: 400ms

═══════════════════════════════════════════════
TAB 3 — REPORTS
═══════════════════════════════════════════════

Left:
  Number: "03"
  Headline: "20+ reports.
  Always ready."
  Body: "Beautiful auto-generated graphs with
  filters and custom views — ready for your
  next IEP meeting, no extra work."
  Bullets:
  • Auto-generated after every session
  • Custom filters and date ranges
  • Export-ready for IEP meetings

Right mockup:
  Mockup header:
    "Goal Accuracy Over Time" DM Sans 600 13px
    "Communication goal history" DM Sans 300 12px gray
    Top-right: "+6%" badge — background #E6F7EE, 
               color #1A7A1A, font 11px, border-radius 4px

  SVG Line chart inside mockup:
    Width: 100%, Height: 160px
    Background: white
    Padding: 16px

    Y-axis labels (left): 60%, 80%, 100% — 10px gray
    X-axis labels (bottom): Sep, Oct, Nov, Dec, May — 10px gray

    Horizontal grid lines: 1px dashed rgba(0,0,0,0.06)

    Area fill under line: 
      Fill: rgba(83,174,243,0.08)
      
    Line:
      Stroke: #53AEF3
      Stroke-width: 2.5
      Fill: none
      Stroke-linecap: round
      Stroke-linejoin: round
      Data points (approximate upward trend):
        Sep: 65%, Oct: 72%, Nov: 78%, Dec: 85%, May: 91%

    Data point circles:
      R: 4px
      Fill: white
      Stroke: #53AEF3
      Stroke-width: 2

  ANIMATION when tab 3 activates:
    Line draws left to right using stroke-dasharray/dashoffset
    Total path length: calculate and set as dasharray
    Animate dashoffset from full-length to 0
    Duration: 1200ms cubic-bezier(0.16, 1, 0.3, 1)
    Data point circles scale 0→1 after line completes
    Stagger: 80ms between each point

═══════════════════════════════════════════════
TAB 4 — ACCOMMODATIONS
═══════════════════════════════════════════════

Left:
  Number: "04"
  Headline: "Every accommodation.
  Tracked and given."
  Body: "One-tap tracking for given or refused
  accommodations — linked directly to each
  student's IEP with full history."
  Bullets:
  • One-tap given/refused tracking
  • Linked to student IEP automatically
  • Full accommodation history log

Right mockup:
  Mockup header:
    "Accommodations" DM Sans 600 13px
    "4 of 4 today" badge — #53AEF3 bg tint, 
    #53AEF3 text, 11px, border-radius 4px

  4 accommodation rows (each flex row, padding 12px 16px,
  border-bottom 1px solid rgba(0,0,0,0.04)):

    Row 1: 🕐 icon (blue bg 28px circle)
           "Extra time for tasks" DM Sans 400 13px
           RIGHT: "✓ Given" pill
                  Background #E6F7EE, color #1A7A1A
                  DM Sans 500 12px, padding 4px 10px
                  Border-radius 6px

    Row 2: 📖 icon (purple bg 28px circle)
           "Tests read aloud" DM Sans 400 13px
           RIGHT: "Given" pill (same green style)

    Row 3: ✏️ icon (orange bg 28px circle)
           "Preferential seating" DM Sans 400 13px
           RIGHT: "Given" pill

    Row 4: 📝 icon (pink bg 28px circle)
           "Reduced assignment length" DM Sans 400 13px
           RIGHT: "Refused" pill
                  Background #FFEAEA, color #CC2200
                  DM Sans 500 12px

  ANIMATION when tab 4 activates:
    Each row slides in from right: translateX(20px)→0, 
    opacity 0→1
    Stagger: 80ms between rows
    Duration per row: 350ms ease-out
    Status pills pop in: scale 0.7→1, opacity 0→1
    Delay: after row animation completes

═══════════════════════════════════════════════
TAB 5 — SCHEDULING & BILLING
═══════════════════════════════════════════════

Left:
  Number: "05"
  Headline: "Plan sessions.
  Bill in seconds."
  Body: "Auto-generate Medicaid billing notes
  after every session. Calendar sync for all
  session types — saves 3+ hours weekly."
  Bullets:
  • Auto-generated Medicaid billing notes
  • Calendar sync for all session types
  • Saves 3+ hours per week per provider

Right mockup:
  Two overlapping cards:

  BACK card (calendar, slightly behind):
    Background: white
    Border: 1px solid rgba(0,0,0,0.08)
    Border-radius: 10px
    Width: 80%
    Position: relative, z-index 1

    Mini calendar grid:
      Header row: Mon, Tue — DM Sans 500 11px gray
      Session block: 
        Background: rgba(83,174,243,0.12)
        Border-left: 3px solid #53AEF3
        Text: "Primary" DM Sans 600 12px #53AEF3
        Subtext: "A,B,C,D,E" DM Sans 400 11px gray
        Date: "5 Apr, 2024" 10px gray
      Row below: "30" row number

  FRONT card (billing info, overlapping bottom-right):
    Background: white
    Border: 1px solid rgba(0,0,0,0.08)
    Border-radius: 10px
    Box-shadow: 0 8px 24px rgba(0,0,0,0.10)
    Position: absolute
    Bottom: 20px, Right: 0
    Width: 65%
    Z-index: 2
    Padding: 16px

    "Billing Info." DM Sans 600 13px, margin-bottom 12px
    
    4 info rows:
      "Service Time"   "Occupational" — 12px
      "Session Date"   "July 12, 2025" — 12px
      "Time Spent"     "45 mins" — 12px
      "CDT"            "97530" — 12px
    Each row: flex space-between, padding 6px 0,
    border-bottom 1px solid rgba(0,0,0,0.04)
    Label: DM Sans 400 12px #AEAEB2
    Value: DM Sans 500 12px #1A1A1E

  ANIMATION when tab 5 activates:
    Billing card slides up: translateY(24px)→0, opacity 0→1
    Duration: 500ms cubic-bezier(0.16, 1, 0.3, 1)
    Info rows fill in one by one with 60ms stagger

═══════════════════════════════════════════════
SCROLL REVEAL (entire section)
═══════════════════════════════════════════════

When features section scrolls into view:
  Section header fades up: opacity 0→1, translateY 24px→0
  Duration: 600ms ease
  
  Tab bar fades up after header:
  Delay: 200ms, same animation

  Feature panel fades up after tab bar:
  Delay: 350ms, same animation

Use CSS class .reveal with:
  opacity: 0
  transform: translateY(24px)
  transition: opacity 600ms ease, transform 600ms ease

Add class .visible via JS when element enters viewport.

═══════════════════════════════════════════════
DO NOT CHANGE
═══════════════════════════════════════════════

✓ Everything above this section (hero + navbar)
✓ All existing tokens and visual language
✓ Page background #F8F8F5