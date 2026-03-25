Add three new sections after the AbleSpace AI section.
In this exact order:
1. Testimonials
2. Final CTA Banner  
3. Footer

═══════════════════════════════════════════════
SECTION 1 — TESTIMONIALS
═══════════════════════════════════════════════

Background: #F8F8F5
Padding: 100px 80px

HEADER (centered):

Label pill:
  Text: "LOVED BY EDUCATORS"
  DM Sans 500 11px, letter-spacing 2px
  Color: #53AEF3
  Background: rgba(83,174,243,0.08)
  Border: 1px solid rgba(83,174,243,0.15)
  Padding: 5px 14px, border-radius 9999px
  Margin-bottom: 20px

Headline:
  Text: "Trusted by special ed teams
  across the country."
  Font: Instrument Serif 400 52px
  Color: #1A1A1E
  Line-height: 1.1
  Text-align: center
  Max-width: 600px
  Margin: 0 auto 56px

TESTIMONIALS GRID:
  Display: grid
  Grid-template-columns: repeat(3, 1fr)
  Gap: 20px
  Margin-bottom: 20px

Then ONE wide card below spanning full width.

─────────────────────────────────
TOP ROW — 3 CARDS
─────────────────────────────────

Card base style:
  Background: #FFFFFF
  Border: 1px solid rgba(0,0,0,0.07)
  Border-radius: 20px
  Padding: 28px
  Box-shadow: 0 2px 20px rgba(0,0,0,0.04)

CARD 1:
  Stars: ★★★★★ color #F59E0B, font-size 14px
  Margin-bottom: 16px

  Quote:
    "AbleSpace replaced 4 different tools.
    My team actually uses it every day —
    that alone is a miracle in special ed."
    Font: Instrument Serif 400 italic 17px
    Color: #1A1A1E, line-height 1.6
    Margin-bottom: 20px

  Author row:
    Avatar: 40px circle, background #EDE8F8
    Initials "SK" DM Sans 700 13px #6B5ECD
    Name: "Sarah K." DM Sans 600 14px #1A1A1E
    Role: "Special Ed Coordinator, Ohio"
          DM Sans 400 12px #6E6E73

CARD 2:
  Stars: ★★★★★
  
  Quote:
    "The AI progress notes save each
    therapist 45 minutes a day. That's
    real time back with our students."
    Same font style

  Author:
    Avatar: #E0F7F5, initials "MT" color #0DB8A0
    Name: "Marcus T."
    Role: "School Psychologist, Texas"

CARD 3:
  Stars: ★★★★★

  Quote:
    "We passed our state compliance audit
    without stress for the first time ever.
    Everything was ready to export."
    Same font style

  Author:
    Avatar: #FEF3C7, initials "RP" color #D97706
    Name: "Reena P."
    Role: "Director of Special Services, CA"

─────────────────────────────────
BOTTOM — ONE WIDE FEATURED CARD
─────────────────────────────────

Background: #1A1A1E
Border-radius: 20px
Padding: 40px 48px
Display: grid
Grid-template-columns: 1fr auto
Gap: 48px
Align-items: center

LEFT:
  Large quote mark:
    " character
    Font: Instrument Serif 400 80px
    Color: rgba(83,174,243,0.30)
    Line-height: 0.8
    Margin-bottom: 16px

  Quote:
    "AbleSpace has the perfect trifecta —
    beautiful design, IDEA compliance, and
    modern features like AI notes and goal
    tracking. I want all my schools on it."
    Font: Instrument Serif 400 italic 22px
    Color: #FFFFFF
    Line-height: 1.55
    Max-width: 600px

RIGHT:
  Avatar: 56px circle
    Background: linear-gradient(135deg, #53AEF3, #6B5ECD)
    Initials "JL" DM Sans 700 18px white

  Name: "Janet L." DM Sans 600 15px white
  Role: "Special Ed Program Lead, FL"
        DM Sans 400 13px rgba(255,255,255,0.55)
  
  Stars: ★★★★★ color #F59E0B, margin-top 8px

SCROLL REVEAL on testimonials:
  Header: opacity 0→1, translateY 24px→0, 600ms
  Cards stagger: opacity 0→1, translateY 32px→0
  Each: 500ms cubic-bezier(0.16,1,0.3,1)
  Stagger: 80ms, delay starts 200ms

═══════════════════════════════════════════════
SECTION 2 — FINAL CTA BANNER
═══════════════════════════════════════════════

Background: #F8F8F5
Padding: 0 80px 100px

ONE large card:
  Background: #FFFFFF
  Border: 1px solid rgba(0,0,0,0.07)
  Border-radius: 24px
  Padding: 72px 80px
  Box-shadow: 0 4px 40px rgba(0,0,0,0.06)
  Position: relative
  Overflow: hidden
  Text-align: center

DECORATIVE ELEMENTS (behind content):
  Circle 1: position absolute
    Width: 300px, height: 300px
    Background: radial-gradient(circle,
      rgba(83,174,243,0.08) 0%, transparent 70%)
    Top: -80px, left: -80px
    Pointer-events: none

  Circle 2:
    Width: 200px, height: 200px
    Background: radial-gradient(circle,
      rgba(107,94,205,0.08) 0%, transparent 70%)
    Bottom: -40px, right: 10%
    Pointer-events: none

CONTENT:

Label pill:
  Text: "GET STARTED TODAY"
  DM Sans 500 11px, letter-spacing 2px
  Color: #53AEF3
  Background: rgba(83,174,243,0.08)
  Pill style, centered, margin-bottom 20px

Headline:
  Text: "Give your special ed team
  the tool they deserve."
  Font: Instrument Serif 400 52px
  Color: #1A1A1E
  Line-height: 1.1
  Margin-bottom: 16px

Subtext:
  Text: "Free to start. No credit card.
  Set up in under an hour."
  DM Sans 300 18px #6E6E73
  Margin-bottom: 36px

CTA BUTTONS (centered, same as hero):
  Button A: "Sign Up for Free →"
    Background: #53AEF3
    Color: white
    Border-radius: 8px
    DM Sans 500 15px
    Padding: 12px 28px

  Button B: "Learn More →"
    Background: transparent
    Border: 1.5px solid rgba(0,0,0,0.15)
    Color: #1A1A1E
    Border-radius: 8px
    DM Sans 400 15px
    Padding: 12px 28px

  Gap: 12px, display flex, justify-content center
  
  Below buttons:
    "For educators & providers" under Button A
    "For school administrators" under Button B
    DM Sans 400 11px #AEAEB2, margin-top 6px

TRUST ROW below buttons (margin-top 32px):
  Flex row, centered, gap 24px
  
  3 items same as hero compliance row:
  🛡 HIPAA Compliant
  📋 ISO 27001 Certified
  🔐 FERPA Compliant
  
  Each: icon + text
  DM Sans 400 12px #AEAEB2
  Thin dividers between: 1px solid rgba(0,0,0,0.08)
  Height: 14px

SCROLL REVEAL:
  Card: opacity 0→1, translateY 32px→0, scale 0.98→1
  Duration: 700ms cubic-bezier(0.16,1,0.3,1)

═══════════════════════════════════════════════
SECTION 3 — FOOTER
═══════════════════════════════════════════════

Background: #1A1A1E
Padding: 64px 80px 32px

TOP ROW:
  Display: grid
  Grid-template-columns: 2fr 1fr 1fr 1fr 1fr
  Gap: 48px
  Padding-bottom: 48px
  Border-bottom: 1px solid rgba(255,255,255,0.08)

COLUMN 1 — Brand:
  Logo row:
    AbleSpace "A" square icon (teal, 32px, 8px radius)
    + "AbleSpace" DM Sans 600 16px white
    Gap: 10px, margin-bottom 14px

  Tagline:
    "Where Every IEP Gets the
    Attention It Deserves."
    DM Sans 300 14px rgba(255,255,255,0.50)
    Max-width: 220px, line-height 1.6
    Margin-bottom: 20px

  Social icons row (3 icons):
    Twitter/X, LinkedIn, Instagram
    Each: 32px circle
    Background: rgba(255,255,255,0.08)
    Border-radius: 50%
    Display: flex, align-items center
    Justify-content: center
    Color: rgba(255,255,255,0.50)
    Font-size: 14px
    Gap: 8px
    Hover: background rgba(255,255,255,0.15)

COLUMN 2 — Product:
  Heading: "Product"
    DM Sans 600 12px uppercase
    Letter-spacing: 1.5px
    Color: rgba(255,255,255,0.30)
    Margin-bottom: 16px

  Links (each DM Sans 400 14px, 
  color rgba(255,255,255,0.55),
  padding 4px 0, hover color white):
    Features
    AbleSpace AI
    Pricing
    Changelog
    Roadmap

COLUMN 3 — For Schools:
  Heading: "For Schools"
  Links:
    Schools & Districts
    Special Ed Teams
    Therapists & Providers
    Administrators
    Case Studies

COLUMN 4 — Resources:
  Heading: "Resources"
  Links:
    Documentation
    Tutorials
    Blog
    IDEA Compliance Guide
    Contact Support

COLUMN 5 — Legal:
  Heading: "Legal"
  Links:
    Privacy Policy
    Terms of Service
    FERPA Compliance
    HIPAA Compliance
    Security

BOTTOM BAR:
  Padding-top: 24px
  Display: flex
  Justify-content: space-between
  Align-items: center
  Flex-wrap: wrap
  Gap: 12px

  Left:
    "© 2026 AbleSpace Inc. All rights reserved."
    DM Sans 400 13px rgba(255,255,255,0.35)

  Center:
    🇺🇸 "Data hosted securely in the United States"
    DM Sans 400 12px rgba(255,255,255,0.25)

  Right:
    "HIPAA · FERPA · ISO 27001"
    DM Sans 500 12px rgba(255,255,255,0.25)
    Letter-spacing: 0.5px

═══════════════════════════════════════════════
DO NOT CHANGE ANYTHING ELSE.
═══════════════════════════════════════════════