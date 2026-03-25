Redesign ONLY the hero section of AbleSpace (ablespace.io) — a Special 
Education IEP dashboard SaaS. Keep the product, features, and dashboard 
mockup the same. Only the visual design changes.

Reference site for design direction: seline.com
Current site to improve upon: ablespace.io

═══════════════════════════════════════════════
DESIGN PHILOSOPHY
═══════════════════════════════════════════════

Seline.com's hero works because of three things:
1. Editorial serif + clean sans contrast in typography
2. Decorative SVG curves that add depth without noise
3. Centered, calm, confident layout — not left-heavy and aggressive

Apply all three to AbleSpace's hero. The result should feel like a 
premium SaaS tool used by professionals — not a startup trying too hard.

═══════════════════════════════════════════════
EXACT TOKENS TO USE
═══════════════════════════════════════════════

Background:        #FAFAF8   ← warm off-white, NOT the current beige
Card/surface:      #FFFFFF
Primary teal:      #0DB8A0   ← keep AbleSpace's teal brand color
Teal tint:         #E0F7F4
Dark text:         #1A1A1E
Muted text:        #6E6E73
Border color:      rgba(0,0,0,0.08)

Heading font:  "Instrument Serif" or "Lora" — import from Google Fonts
Body font:     "DM Sans" — import from Google Fonts
NEVER use: Inter, system-ui, or any sans-serif for the main headline

═══════════════════════════════════════════════
NAVBAR (keep structure, upgrade visuals only)
═══════════════════════════════════════════════

Keep existing links: Product · Schools/Districts · AbleSpace AI · 
Tutorials · Resources · Pricing · Get a Quote · Login · Sign up for free

Changes:
- Background: rgba(250,250,248,0.92) + backdrop-filter: blur(12px)
- Bottom border: 1px solid rgba(0,0,0,0.06) — visible only on scroll
- "Sign up for free" button: keep teal, make border-radius 9999px (pill)
- "Get a Quote" button: ghost pill, border 1.5px solid rgba(0,0,0,0.15)
- Logo: keep the teal "A" square icon, upgrade to 10px border-radius
- All nav links: DM Sans 400 14px, color #6E6E73
- Nav height: 64px

═══════════════════════════════════════════════
HERO SECTION — FULL SPECIFICATION
═══════════════════════════════════════════════

Canvas: 1440px wide, centered content max-width 900px

──────────────────────────
LAYER 1 — BACKGROUND
──────────────────────────

Base fill: #FAFAF8

Add TWO decorative SVG curved lines (like seline.com):

Line A — top-left corner flowing toward center-right:
  stroke: #0DB8A0  |  opacity: 0.15  |  stroke-width: 1.5
  path: starts at (0, 300), curves through (200, 100), ends at (500, 0)
  No fill. Purely decorative.

Line B — directly below Line A, slightly offset:
  stroke: #0DB8A0  |  opacity: 0.08  |  stroke-width: 1.0
  path: starts at (0, 380), curves through (220, 160), ends at (520, 40)

Mirror both lines on the top-right corner (scale X by -1).
All 4 lines: position absolute, pointer-events none, z-index 0.

──────────────────────────
LAYER 2 — CONTENT STACK
──────────────────────────

Everything is centered horizontally. Stack top to bottom:

① BADGE PILL
   Layout: inline-flex, centered on page
   Background: #E0F7F4
   Text color: #0A8F7A
   Font: DM Sans 500 13px
   Border-radius: 9999px
   Padding: 5px 14px
   Gap: 8px between dot and text
   Left dot: 7px circle, fill #0DB8A0
   Text: "Trusted by 200+ special ed teams across the US"
   Margin-bottom: 28px

② HEADLINE
   Font: Instrument Serif (or Lora), weight 600
   Size: 72px  |  line-height: 1.08  |  letter-spacing: -1.5px
   Color: #1A1A1E
   Text-align: center
   Max-width: 860px
   Margin: 0 auto 22px

   Text content — 3 lines:
   Line 1: "AI-Powered IEP Tracking"     ← normal, color #1A1A1E
   Line 2: "Built for the People"         ← normal, color #1A1A1E
   Line 3: "Who Actually Use It."         ← italic, color #0DB8A0

   CRITICAL: Line 3 must be font-style: italic AND color #0DB8A0
   This is the single most important visual detail of the entire hero.

③ SUBHEADLINE
   Font: DM Sans 300  |  Size: 18px  |  line-height: 1.65
   Color: #6E6E73
   Text-align: center
   Max-width: 520px
   Margin: 0 auto 40px

   Text: "Track IEP goals, services, and accommodations in one 
   place — with AI-powered speed, built for real classrooms."

④ CTA BUTTONS (side by side, centered)
   Gap between buttons: 12px
   No "EDUCATORS" / "ADMINS" labels above buttons — remove those entirely

   Button A — Primary:
     Text: "Sign up for free →"
     Background: #0DB8A0
     Text color: #FFFFFF
     Font: DM Sans 500 15px
     Border-radius: 9999px
     Padding: 14px 32px
     Border: none
     Hover: background #0A9E89, translateY(-2px), 
            box-shadow 0 8px 24px rgba(13,184,160,0.30)

   Button B — Secondary:
     Text: "▷  Watch a 2-min demo"
     Background: transparent
     Text color: #1A1A1E
     Font: DM Sans 400 15px
     Border-radius: 9999px
     Padding: 14px 32px
     Border: 1.5px solid rgba(0,0,0,0.12)
     Hover: border-color #0DB8A0, color #0DB8A0

⑤ COMPLIANCE TRUST BAR
   Margin-top: 40px
   Layout: horizontal flex, centered, gap 24px
   
   Label text: "SAFE AND SECURE" — DM Sans 500 11px uppercase 
               letter-spacing 1.5px, color #AEAEB2
   
   After the label, 3 items separated by thin dividers (1px, #E5E5E5):
   
   Each item: small icon (14px) + text
   · 🔒 HIPAA Compliant
   · ✦  ISO 27001 Certified  
   · 🔐 FERPA Compliant
   
   Icon + text color: #6E6E73, DM Sans 400 13px

⑤ DASHBOARD MOCKUP
   Margin-top: 64px
   Width: 100% of content area (max 1100px)
   Border-radius: 20px
   Border: 1px solid rgba(0,0,0,0.08)
   Box-shadow: 0 24px 80px rgba(13,184,160,0.08), 
               0 4px 24px rgba(0,0,0,0.06)
   Overflow: hidden
   Background: #FFFFFF

   TOP BAR of mockup window:
     Height: 44px
     Background: #F5FFFE  ← very light teal tint
     Border-bottom: 1px solid rgba(0,0,0,0.06)
     Left: 3 traffic-light dots — #FF5F57, #FEBC2E, #28C840 — 11px each, gap 6px, margin-left 16px
     Center: URL bar pill showing "app.ablespace.io" — 
             background rgba(0,0,0,0.05), DM Sans 13px, color #6E6E73,
             padding 4px 16px, border-radius 9999px, width 200px

   DASHBOARD CONTENT:
     Reproduce the EXACT layout from the current site screenshot:
     - Left sidebar: AbleSpace logo + "Riverside USD" dropdown + 
       nav items (Dashboard active in teal, Students, IEP Goals, Services)
     - Main area: "Dashboard" heading + "Riverside Unified School District" 
       subtitle + Filter button + date range pill "Sep 2 – Dec 20, 2024"
     - 5 stat cards: Total Students 248 (+12%) · Active IEPs 186 (+8%) · 
       Goals on Track 74% (+6%) · Upcoming Reviews 23 (+5%) · 
       Services Logged 1,432 (+18%)
     - Below: Goal Progress 138/186 (+6%) · Services This Month 312 (+18%)
     
     The mockup fades to white at the bottom edge using a gradient overlay:
     linear-gradient(to bottom, transparent 60%, #FAFAF8 100%)
     This makes it look intentionally designed, not cut off.

═══════════════════════════════════════════════
SPACING RHYTHM
═══════════════════════════════════════════════

Hero section padding-top:    96px
Hero section padding-bottom:  0px (mockup bleeds into next section)
Badge → Headline gap:        28px
Headline → Subheadline gap:  22px
Subheadline → Buttons gap:   40px
Buttons → Trust bar gap:     40px
Trust bar → Mockup gap:      64px

═══════════════════════════════════════════════
WHAT TO KEEP FROM CURRENT SITE
═══════════════════════════════════════════════

✓ The teal brand color (#0DB8A0) — just use it more intentionally
✓ The actual dashboard data (248 students, 186 IEPs, etc.)
✓ The compliance badges (HIPAA, ISO, FERPA) — just restyled
✓ The two-audience CTA concept (Educators / Admins) — 
  but remove the labels, let button text do the work
✓ The browser mockup concept — just make it feel designed

═══════════════════════════════════════════════
WHAT TO REMOVE FROM CURRENT SITE
═══════════════════════════════════════════════

✗ The flat beige background — replace with #FAFAF8
✗ The heavy black sans-serif headline — replace with Instrument Serif
✗ The teal highlight on "AI-Powered" — let the italic line 3 do this job
✗ The "EDUCATORS / ADMINS" labels above CTAs — clutters the hero
✗ The raw screenshot feel of the mockup — add shadow + fade treatment
✗ Left-aligned hero layout — center everything

═══════════════════════════════════════════════
FINAL QUALITY CHECK
═══════════════════════════════════════════════

Before finishing, verify:
□ Is the headline in a serif font? If not, fix it.
□ Is line 3 of headline italic AND teal colored?
□ Are the decorative SVG curves visible in all 4 corners?
□ Do both CTA buttons have pill shape (border-radius: 9999px)?
□ Does the mockup have the teal-tinted top bar + 3 traffic light dots?
□ Does the mockup fade to white at the bottom?
□ Is the background #FAFAF8 and NOT the old beige?
□ Is there NO lorem ipsum anywhere?