Replace the entire "Secure Collaboration" section 
with a completely new design. Same content, new layout.

═══════════════════════════════════════════════
SECTION WRAPPER
═══════════════════════════════════════════════

Background: #1A1A1E  ← dark, not green
Border-radius: 24px
Margin: 0 80px 80px
Padding: 72px 80px
Position: relative
Overflow: hidden

Decorative background element:
  A large blurred circle, position absolute:
  Width: 500px, height: 500px
  Background: radial-gradient(circle, 
    rgba(83,174,243,0.12) 0%, transparent 70%)
  Top: -100px, right: -100px
  Pointer-events: none

═══════════════════════════════════════════════
TOP — SECTION LABEL + HEADLINE
═══════════════════════════════════════════════

Centered at top of section:

Label pill:
  Text: "SECURE COLLABORATION"
  Font: DM Sans 500 11px, letter-spacing 2px
  Color: #53AEF3
  Background: rgba(83,174,243,0.10)
  Padding: 4px 14px, border-radius 9999px
  Margin-bottom: 20px

Headline:
  Text: "Your whole team,\nworking as one."
  Font: Instrument Serif 400 52px
  Color: #FFFFFF
  Line-height: 1.1
  Text-align: center
  Margin-bottom: 14px

Subtext:
  Text: "Securely share student data and let 
  paraprofessionals or assistants collect 
  and update it for you — in real time."
  Font: DM Sans 300 17px
  Color: rgba(255,255,255,0.55)
  Text-align: center
  Max-width: 460px
  Margin: 0 auto 56px

═══════════════════════════════════════════════
CENTER — LIVE COLLABORATION MOCKUP
═══════════════════════════════════════════════

One large card, centered:
  Background: #242428
  Border: 1px solid rgba(255,255,255,0.08)
  Border-radius: 16px
  Width: 100%
  Max-width: 780px
  Margin: 0 auto
  Padding: 0
  Overflow: hidden
  Box-shadow: 0 24px 64px rgba(0,0,0,0.40)

MOCKUP TOP BAR:
  Height: 40px
  Background: #2C2C30
  Border-bottom: 1px solid rgba(255,255,255,0.06)
  Display: flex, align-items: center, padding: 0 16px, gap: 8px
  
  3 traffic dots: #FF5F57 · #FEBC2E · #28C840, size 10px
  
  Center text: "AbleSpace — Take Data"
    Font: DM Sans 400 12px, color: rgba(255,255,255,0.40)

MOCKUP CONTENT AREA:
  Display: grid
  Grid-template-columns: 280px 1fr
  Min-height: 320px

  LEFT PANEL (goals list):
    Background: #242428
    Border-right: 1px solid rgba(255,255,255,0.06)
    Padding: 20px 16px

    "Goals & Objectives" label:
      Font: DM Sans 500 11px uppercase
      Letter-spacing: 1px
      Color: rgba(255,255,255,0.30)
      Margin-bottom: 12px

    Goal card 1 (active/highlighted):
      Background: rgba(83,174,243,0.10)
      Border: 1px solid rgba(83,174,243,0.20)
      Border-radius: 8px
      Padding: 12px
      Margin-bottom: 8px

      "1. Communication" 
        DM Sans 600 13px white
      "Student will use words to express needs."
        DM Sans 300 12px rgba(255,255,255,0.45)

      "Olivia" cursor chip ON this card:
        Background: #8B5CF6
        Color: white
        Font: DM Sans 600 10px
        Padding: 2px 8px
        Border-radius: 9999px
        Position: relative, margin-top: 8px
        Small ▲ pointer above in same purple
        
        CSS animation "float-olivia":
          translateY(0px) → translateY(-4px) → translateY(0px)
          Duration: 2.5s, ease-in-out, infinite

    Goal card 2 (normal):
      Background: rgba(255,255,255,0.04)
      Border-radius: 8px, padding: 12px, margin-bottom: 8px
      "1.1. Request" DM Sans 500 12px rgba(255,255,255,0.60)
      "Student will say words to ask for items."
        DM Sans 300 11px rgba(255,255,255,0.30)

    Goal card 3 (normal, same style):
      "1.2. Answer"
      "Student will answer yes/no questions."

  RIGHT PANEL (data collection):
    Background: #1E1E22
    Padding: 20px 24px

    Top row: flex space-between
      Left: "On-Task Behavior"
        DM Sans 600 14px white
      Right: "Trial 2 ›" 
        DM Sans 400 12px rgba(255,255,255,0.35)

    Stats row (margin-top 16px):
      Two stat boxes side by side, gap 12px:
      Each:
        Background: rgba(255,255,255,0.04)
        Border-radius: 8px, padding: 12px 16px
        Label: "Prompted" / "Accuracy"
          DM Sans 400 11px rgba(255,255,255,0.35)
        Value: "99%" large
          Instrument Serif 400 32px white

    Data counter row (margin-top 20px):
      Shows attempt tracking dots:
      8 small pills in a row, gap 4px:
        Alternating: 
        "+" pill: background rgba(83,174,243,0.20), 
                  color #53AEF3, font 11px, padding 2px 8px
        "C" pill: background rgba(255,255,255,0.08),
                  color rgba(255,255,255,0.40), same size
        "−" pill: background rgba(232,98,74,0.20),
                  color #E8624A, same size

    "Tom" cursor chip floating near the + button:
      Background: #22C55E
      Color: white  
      Font: DM Sans 600 10px
      Padding: 2px 8px, border-radius 9999px
      Position: absolute
      Small ▲ pointer in same green
      
      CSS animation "float-tom":
        translateY(0px) → translateY(-5px) → translateY(0px)
        Duration: 3s, ease-in-out, infinite
        Delay: 0.8s  ← offset from Olivia

    Three large action buttons (margin-top 20px):
      Grid: 3 equal columns, gap 8px
      Each: height 64px, border-radius 10px
      
      "+" button: 
        Background: rgba(83,174,243,0.15)
        Border: 1px solid rgba(83,174,243,0.25)
        Color: #53AEF3, font-size 28px
        
      "−" button:
        Background: rgba(232,98,74,0.15)
        Border: 1px solid rgba(232,98,74,0.25)
        Color: #E8624A, font-size 28px

      "P" button:
        Background: rgba(255,255,255,0.06)
        Border: 1px solid rgba(255,255,255,0.10)
        Color: rgba(255,255,255,0.