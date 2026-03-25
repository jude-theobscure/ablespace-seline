Add a "Secure Collaboration" section below the features 
tabbed section. Reproduce exactly from the attached 
screenshot but styled to match the existing page tokens.

═══════════════════════════════════════════════
VISUAL LANGUAGE — SAME AS REST OF PAGE
═══════════════════════════════════════════════

Page background: #F8F8F5
Section background: #EEF5EE  ← soft green tint, 
                               same as screenshot
Border-radius: 20px
Heading font: Instrument Serif 400
Body font: DM Sans 300
Text primary: #1A1A1E
Text muted: #6E6E73

═══════════════════════════════════════════════
SECTION LAYOUT
═══════════════════════════════════════════════

Full-width card:
  Background: #EEF5EE
  Border-radius: 20px
  Margin: 0 80px 80px
  Padding: 56px 64px
  Overflow: hidden
  Position: relative

Two column grid inside:
  Grid-template-columns: 1fr 1fr
  Gap: 48px
  Align-items: center

═══════════════════════════════════════════════
LEFT COLUMN — TEXT
═══════════════════════════════════════════════

Headline:
  Text: "Secure Collaboration"
  Font: Instrument Serif 400 44px
  Color: #1A1A1E
  Line-height: 1.1
  Margin-bottom: 16px

Body:
  Text: "Securely share student data and let 
  paraprofessionals or assistants collect and 
  update it for you."
  Font: DM Sans 300 18px
  Color: #6E6E73
  Line-height: 1.7
  Max-width: 380px
  Margin-bottom: 32px

3 bullet points:
  • Role-based access control
  • Real-time collaborative data entry
  • Full audit log of all changes
  Each: 6px green dot + DM Sans 400 15px #3D3D3D
  Gap: 12px

CTA link:
  Text: "Learn about collaboration →"
  Font: DM Sans 500 14px
  Color: #2A8A4A
  Margin-top: 24px

═══════════════════════════════════════════════
RIGHT COLUMN — MOCKUP (reproduce from screenshot)
═══════════════════════════════════════════════

Two overlapping cards, exactly like the screenshot:

BACK CARD (Goals list):
  Background: #FFFFFF
  Border: 1px solid rgba(0,0,0,0.08)
  Border-radius: 12px
  Width: 55%
  Position: relative
  Z-index: 1
  Padding: 16px

  "Goals & Objectives" 
    Font: DM Sans 600 12px, color: #6E6E73
    Margin-bottom: 12px

  Goal item card:
    Background: #F8F8F8
    Border-radius: 8px
    Padding: 12px
    "1. Ask for help in 4/5 trials."
    Font: DM Sans 500 13px, #1A1A1E

    "Olivia" cursor chip:
      Background: #8B5CF6 (purple)
      Color: white
      Font: DM Sans 600 11px
      Padding: 3px 10px
      Border-radius: 9999px
      Position: absolute, bottom of goal card
      With a small triangle pointer (▲) above the chip
      pointing upward, same purple color

  3 gray placeholder bars below goal card:
    Height: 8px, background: #E5E5E5
    Border-radius: 4px
    Widths: 100%, 80%, 60%
    Gap: 8px

FRONT CARD (On-Task Behavior):
  Background: #FFFFFF
  Border: 1px solid rgba(0,0,0,0.08)
  Border-radius: 12px
  Box-shadow: 0 8px 32px rgba(0,0,0,0.10)
  Width: 60%
  Position: absolute
  Right: 0
  Top: 50%
  Transform: translateY(-30%)
  Z-index: 2
  Padding: 20px

  "On-Task Behavior"
    Font: DM Sans 600 15px, #1A1A1E
    Margin-bottom: 12px

  2 gray placeholder bars:
    Height: 8px, background: #E5E5E5
    Border-radius: 4px
    Widths: 100%, 75%
    Gap: 8px, margin-bottom: 20px

  Two large action buttons side by side:
    Each button:
      Background: #C8E6C8  ← soft green, same as screenshot
      Border-radius: 10px
      Height: 72px
      Flex: 1
      Display: flex, align-items center, justify-content center
    
    Button 1: "+" sign, font-size 32px, color #1A1A1E, 
               font-weight 300
    Button 2: "−" sign, font-size 32px, color #1A1A1E, 
               font-weight 300

    "Tom" cursor chip on bottom-right of button 2:
      Background: #22C55E (green)
      Color: white
      Font: DM Sans 600 11px
      Padding: 3px 10px
      Border-radius: 9999px
      Position: absolute
      With triangle pointer above, same green

═══════════════════════════════════════════════
ANIMATION ON SCROLL INTO VIEW
═══════════════════════════════════════════════

Left text: fade up, opacity 0→1, translateY 24px→0
  Duration: 600ms ease, delay: 0ms

Back card: fade up + slight rotate
  opacity 0→1, translateY 32px→0, rotate(-2deg)→rotate(0deg)
  Duration: 600ms ease, delay: 150ms

Front card: fade up
  opacity 0→1, translateY 40px→0
  Duration: 600ms ease, delay: 280ms

"Olivia" chip: bounces in after cards
  scale 0→1, opacity 0→1
  Duration: 400ms cubic-bezier(0.34, 1.56, 0.64, 1)
  Delay: 600ms

"Tom" chip: same bounce
  Delay: 750ms

DO NOT CHANGE ANYTHING ELSE.