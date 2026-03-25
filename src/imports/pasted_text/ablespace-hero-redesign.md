Redesign the hero section of AbleSpace (ablespace.io) to match the 
EXACT layout structure of seline.com's hero — not just the feel, 
but the actual composition, alignment, and element ordering.

I am attaching both screenshots. Match seline.com's hero layout 
pixel-for-pixel in structure. Only swap the content for AbleSpace.

═══════════════════════════════════════════════
LAYOUT RULE — MOST IMPORTANT
═══════════════════════════════════════════════

Everything in the hero is LEFT-ALIGNED.
NOT centered. NOT centered with max-width. LEFT.

Text starts from the left. Buttons align left. 
Logos align left. Exactly like seline.com.

Canvas: 1440px. Left content column: 640px wide.
Right side (400px+): reserved for the floating illustration.

═══════════════════════════════════════════════
TOKENS
═══════════════════════════════════════════════

Background:      #F8F8F5   ← same warm off-white as seline
Primary teal:    #0DB8A0
Teal highlight:  rgba(13,184,160,0.15)  ← for text background pill
Dark text:       #1A1A1E
Muted text:      #6E6E73
Border:          rgba(0,0,0,0.08)

Heading font:    "DM Serif Display" — Google Fonts
                 import: @import url('https://fonts.googleapis.com/
                 css2?family=DM+Serif+Display:ital@0;1&family=
                 DM+Sans:wght@300;400;500&display=swap')
Body font:       "DM Sans"

═══════════════════════════════════════════════
NAVBAR
═══════════════════════════════════════════════

Exact same as current AbleSpace navbar.
Only change: background rgba(248,248,245,0.92) + blur(12px)
No bottom border until scroll.

═══════════════════════════════════════════════
BACKGROUND LAYER
═══════════════════════════════════════════════

Base: #F8F8F5

TWO decorative organic SVG curves — copy seline.com exactly:

Left curve: thin line starting from left edge ~300px down,
curving gently upward toward top-center.
stroke: rgba(0,0,0,0.08), stroke-width: 1, fill: none

Right curve: mirror of left curve on right side.
stroke: rgba(0,0,0,0.08), stroke-width: 1, fill: none

Both: position absolute, pointer-events none.
These are the EXACT same style as seline.com — barely visible,
organic, NOT geometric/grid lines.

═══════════════════════════════════════════════
HERO CONTENT — LEFT COLUMN (top to bottom)
═══════════════════════════════════════════════

padding-top: 100px
All items: text-align left, align-items flex-start

① HEADLINE
   Font: DM Serif Display, regular (not bold)
   Size: 58px  |  line-height: 1.12  |  letter-spacing: -0.5px
   Color: #1A1A1E
   Max-width: 600px
   Margin-bottom: 20px

   Text — 2 lines:
   Line 1: "AI-Powered IEP Tracking"
   Line 2: "for Sped-Ed Professionals"

   HIGHLIGHT TREATMENT (copy seline exactly):
   The words "AI-Powered IEP Tracking" on line 1 should have a 
   soft background highlight block behind them — like a 
   highlighter pen mark.
   
   Implementation:
   Wrap "AI-Powered IEP Tracking" in a <mark> or <span> with:
     background: rgba(13,184,160,0.18)
     border-radius: 6px
     padding: 2px 6px
     color: inherit (stays #1A1A1E, NOT teal colored text)
   
   This is NOT a color change on the text.
   This is a background highlight BEHIND the text.
   Exactly like seline's blue highlight on "simple & actionable".

② SUBHEADLINE
   Font: DM Sans 300  |  Size: 18px  |  line-height: 1.65
   Color: #6E6E73
   Max-width: 480px
   Margin-bottom: 32px

   Text: "Track IEP goals, services, and accommodations in one 
   place — with AI-powered speed and accuracy."

③ CTA BUTTONS (flex row, left-aligned, gap 12px)
   
   Button A — Primary:
     Text: "Add to AbleSpace  A"
     (The "A" at the end is a keyboard shortcut hint — small, 
     inside a tiny rounded square — copy seline's "A" shortcut 
     badge exactly)
     Background: #0DB8A0
     Text: white, DM Sans 500 15px
     Border-radius: 9999px
     Padding: 12px 24px
     The "A" badge: background rgba(255,255,255,0.25), 
                    border-radius 4px, padding 1px 5px, 
                    font-size 12px, margin-left 8px

   Button B — Ghost:
     Text: "View live demo  ✦"
     Background: transparent
     Border: 1.5px solid rgba(0,0,0,0.15)
     Text: #1A1A1E, DM Sans 400 15px
     Border-radius: 9999px
     Padding: 12px 24px
     The "✦" is a small sparkle icon at the end

④ CLIENT LOGOS ROW (below CTAs, margin-top 40px)
   
   Layout: flex row, left-aligned, gap 28px, align-items center
   
   Show 6 school/district logo pills — grayscale, low opacity (0.5):
   Each as a simple text pill with border:
     "Austin ISD" · "Riverside USD" · "Bright Futures" · 
     "Pathway Schools" · "Horizon Academy" · "Sunrise Learning"
   
   Style: DM Sans 500 13px, color #AEAEB2, 
          border 1px solid rgba(0,0,0,0.1),
          padding 5px 14px, border-radius 9999px
   
   EXACTLY like seline's grayscale logo row below their CTAs.

⑤ STAR RATING + QUOTE (below logos, margin-top 20px)

   Layout: flex row, left-aligned, align-items center, gap 10px
   
   Left: G2 badge small icon (or just "G2" in a small rounded box,
         background #FF492C, color white, 11px DM Sans 700,
         padding 2px 5px, border-radius 3px)
   
   Then: "★★★★★" in #F5A623, font-size 13px
   
   Then: thin divider "—"
   
   Then: italic quote text in DM Sans 300 13px color #6E6E73:
         "It's refreshing to use a tool built for real educators."

═══════════════════════════════════════════════
HERO RIGHT SIDE — ILLUSTRATION
═══════════════════════════════════════════════

Position: absolute right side of hero, vertically centered
          to the CTA area. About 380px wide.

Draw a simple illustrated character — copy seli