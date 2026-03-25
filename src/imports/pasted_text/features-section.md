Add a features section BELOW the hero section.
Match the hero's visual language exactly:
  Background: #F8F8F5
  Headings: Instrument Serif
  Body: DM Sans
  Accent color: #53AEF3
  Border-radius: 8px everywhere
  Border: 1px solid rgba(0,0,0,0.08)

═══════════════════════════════════════════════
SECTION HEADER
═══════════════════════════════════════════════

Centered, above the sticky section:

  Eyebrow label:
    Text: "Everything you need"
    Font: DM Sans 500 13px uppercase letter-spacing 1.5px
    Color: #53AEF3
    Margin-bottom: 12px

  Headline:
    Text: "Powerful features built\nfor real classrooms."
    Font: Instrument Serif 400 52px
    Color: #1A1A1E
    Line-height: 1.1
    Text-align: center

  Subtext:
    Text: "From IEP tracking to billing — every tool 
    your team needs, in one place."
    Font: DM Sans 300 18px
    Color: #6E6E73
    Text-align: center
    Max-width: 500px
    Margin: 0 auto 80px

═══════════════════════════════════════════════
LAYOUT — STICKY SCROLL FEATURE SHOWCASE
═══════════════════════════════════════════════

This is a scroll-driven two-column layout.
Total height: 500vh (5 features × 100vh each)

LEFT COLUMN (sticky):
  Width: 45%
  Position: sticky
  Top: 100px
  Height: fit-content

RIGHT COLUMN (scrolls normally):
  Width: 50%
  Contains 5 feature blocks stacked,
  each 100vh tall

As user scrolls through each right-side block,
the left side updates to show that feature's content.
Use Intersection Observer API to detect which 
feature block is in view.

═══════════════════════════════════════════════
LEFT SIDE — FEATURE CONTENT (changes on scroll)
═══════════════════════════════════════════════

Each feature has:

① Feature number + name pill
   e.g. "01  Data Tracking"
   Font: DM Sans 500 12px
   Color: #53AEF3
   Background: rgba(83,174,243,0.10)
   Padding: 4px 12px, border-radius: 9999px
   Margin-bottom: 20px

② Headline
   Font: Instrument Serif 400 40px
   Color: #1A1A1E
   Line-height: 1.15
   Margin-bottom: 16px

③ Body text
   Font: DM Sans 300 17px
   Color: #6E6E73
   Line-height: 1.7
   Max-width: 420px
   Margin-bottom: 28px

④ Feature bullet points (2-3 per feature)
   Each: small #53AEF3 dot + DM Sans 400 15px text
   Color: #3D3D3D
   Gap: 12px between bullets

⑤ CTA link (optional per feature)
   Text: "See how it works →"
   Font: DM Sans 500 14px
   Color: #53AEF3
   No background, no border

TRANSITION between features (left side):
  When feature changes:
  Old content: opacity 1→0, translateY 0→-20px
  Duration: 300ms ease-out
  New content: opacity 0→1, translateY 20px→0
  Duration: 400ms ease-out
  Delay: 150ms (after old content fades)

PROGRESS INDICATOR (left side, below content):
  5 horizontal dashes, gap 6px
  Active dash: width 32px, background #53AEF3, height 2px
  Inactive dash: width 16px, background rgba(0,0,0,0.12), height 2px
  Transition: width 300ms ease

═══════════════════════════════════════════════
RIGHT SIDE — UI MOCKUPS (5 feature blocks)
═══════════════════════════════════════════════

Each block: height 100vh, display flex, 
align-items center, justify-content center

Mockup card style:
  Background: #FFFFFF
  Border: 1px solid rgba(0,0,0,0.08)
  Border-radius: 16px
  Box-shadow: 0 8px 48px rgba(0,0,0,0.08)
  Width: 100%
  Padding: 24px
  
  Entry animation (when scrolled into view):
  opacity 0→1, translateY 40px→0, scale 0.97→1
  Duration: 600ms cubic-bezier(0.16, 1, 0.3, 1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FEATURE 1 — EFFORTLESS DATA TRACKING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Left content:
  Pill: "01  Data Tracking"
  Headline: "Track every goal.\nWith one tap."
  Body: "AbleSpace uses AI to streamline IEP goal 
  tracking — Collect Data with a single click, 
  Organize it automatically."
  Bullets:
  • 9+ data collection types supported
  • Phases, Labels, and Goal History built in
  • Real-time accuracy tracking per student

Right mockup — reproduce from the attached screenshot:
  Top bar: "Take Data" header + avatar
  Left panel: "Goals & Objectives" list
    - "1. Communication" card with tags 
      "Language" (pink) "Expressive Skills" (orange) "+4"
    - Student avatar chip "Tom" (green) "Olivia" (pink)
  Right panel: Accuracy "88%" large
    Below: Phases panel showing
    "On track" (green pill)
    "Behind" (orange pill)  
    "Mastered" (blue pill)
    "+ Create phases" button

  MICRO-ANIMATION inside this mockup:
  The accuracy number counts up: 0% → 88%
  Duration: 1.2s, easing: ease-out
  Triggers when this feature becomes active
  
  The "On track / Behind / Mastered" pills fade in 
  one by one with 100ms stagger delay.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FEATURE 2 — SERVICE TIME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Left content:
  Pill: "02  Service Time"
  Headline: "Auto-track sessions.\nZero extra work."
  Body: "Auto-track service time with smart adjustments 
  for attendance. Customize service types and get 
  instant reports — effortless accuracy."
  Bullets:
  • Smart attendance detection
  • Customizable service types
  • Instant billing-ready reports

Right mockup — reproduce from screenshot:
  Student row: photo avatar + name bar + "Present" 
               green dot badge
  Below: three rows:
    ⏱ Time (mins)      30 mins
    📅 Attendance       [blank]
    📋 Service type     [blank]
  Dropdown visible showing:
    "Consultation"
    "Home Therapy  ✓" (teal checkmark)
    "Drive Time"

  MICRO-ANIMATION:
  The dropdown slides down (height 0 → auto, 
  opacity 0 → 1) when feature becomes active
  Duration: 400ms ease
  "Home Therapy" checkmark draws in with a 
  stroke animation on the ✓ path

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FEATURE 3 — REPORTS AND GRAPHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Left content:
  Pill: "03  Reports"
  Headline: "20+ auto-generated\nreports. Always ready."
  Body: "Beautiful reports with filters and custom views, 
  ready for your next IEP meeting — no extra work."
  Bullets:
  • Auto-generated after every session
  • Custom filters and date ranges
  • Export ready for IEP meetings

Right mockup:
  A line chart showing upward trend
  X-axis: months (Sep, Oct, Nov, Dec)
  Y-axis: goal accuracy %
  Line color: #53AEF3, stroke-width 2.5
  Area fill: rgba(83,174,243,0.08)
  Data points: small white circles with #53AEF3 border
  
  Background: subtle bar chart in very light gray 
  behind the line chart (like the screenshot)

  MICRO-ANIMATION:
  Line chart draws from left to right
  stroke-dasharray + stroke-dashoffset animation
  Duration: 1.2s cubic-bezier(0.16, 1, 0.3, 1)
  Triggers when feature becomes active
  Data points pop in after line completes (scale 0→1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FEATURE 4 — ACCOMMODATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Left content:
  Pill: "04  Accommodations"
  Headline: "Every accommodation.\nTracked and given."
  Body: "Easily manage and track accommodations, 
  empowering you to create