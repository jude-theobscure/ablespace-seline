Fix the AbleSpace AI section completely.
Dark background hatao. Layout fix karo.

═══════════════════════════════════════════════
CRITICAL FIX 1 — BACKGROUND
═══════════════════════════════════════════════

Section background: #F3F1FF
NOT dark, NOT black, NOT #1A1A1E.
All cards: background #FFFFFF.

═══════════════════════════════════════════════
CRITICAL FIX 2 — ORBIT LAYOUT
═══════════════════════════════════════════════

Center icon position:
  Horizontal: exact center of section (50%)
  Vertical: exact center of orbit area (50%)
  NOT bottom-heavy, NOT offset.

Center icon size: 80px × 80px
Border-radius: 20px
Background: linear-gradient(135deg, #7B6FE0, #5B4FBE)
Box-shadow: 0 8px 32px rgba(107,94,205,0.35)

5 cards positioned in a STAR pattern 
around center. Exact positions:

Card 1 — Progress Notes:
  top: 5%, left: 3%
  Width: 210px

Card 2 — IEP Goal Generator:
  top: 5%, right: 3%
  Width: 210px

Card 3 — Active This Week:
  top: 40%, left: 0%
  Width: 190px

Card 4 — Goal Accuracy:
  top: 40%, right: 0%
  Width: 210px

Card 5 — AbleSpace AI:
  bottom: 5%
  left: 50%, transform: translateX(-50%)
  Width: 260px

ALL 5 cards: position absolute

═══════════════════════════════════════════════
CRITICAL FIX 3 — ORBIT RINGS
═══════════════════════════════════════════════

Two concentric dashed circles centered 
exactly on the center icon:

Ring 1:
  Width: 340px, height: 340px
  Border: 1.5px dashed rgba(107,94,205,0.18)
  Border-radius: 50%
  Position: absolute
  Top: 50%, left: 50%
  Transform: translate(-50%, -50%)

Ring 2:
  Width: 200px, height: 200px
  Border: 1.5px dashed rgba(107,94,205,0.12)
  Border-radius: 50%
  Same centering as ring 1

Both rings must be VISIBLE — not hidden 
behind cards or background.

8 small dots on Ring 1:
  Each: 6px circle
  Background: rgba(107,94,205,0.30)
  Positioned evenly around ring
  
  @keyframes orbit-spin {
    from { transform: translate(-50%,-50%) rotate(0deg); }
    to   { transform: translate(-50%,-50%) rotate(360deg); }
  }
  Ring 1 wrapper: animation orbit-spin 25s linear infinite

═══════════════════════════════════════════════
CRITICAL FIX 4 — CONNECTING LINES
═══════════════════════════════════════════════

SVG layer: position absolute, 
top 0, left 0, width 100%, height 100%
z-index: 1, pointer-events: none

5 curved lines from center to each card.
Center point: (container_width/2, container_height/2)

stroke: rgba(107,94,205,0.15)
stroke-width: 1.5
stroke-dasharray: 4 5
fill: none

@keyframes march {
  to { stroke-dashoffset: -18; }
}
All lines: animation march 2s linear infinite

Traveling dot on each line:
  circle r=3.5, fill #6B5ECD, opacity 0.5
  animateMotion dur=2.5s repeatCount=indefinite

═══════════════════════════════════════════════
CRITICAL FIX 5 — CARD SIZING
═══════════════════════════════════════════════

All cards must be COMPACT — not oversized.
Max content inside: icon + title + 2-3 lines max.
No card should be taller than 160px.

Card padding: 14px 16px
Border-radius: 14px
Box-shadow: 0 4px 20px rgba(107,94,205,0.10)
Border: 1px solid rgba(107,94,205,0.10)

═══════════════════════════════════════════════
CRITICAL FIX 6 — SECTION HEIGHT
═══════════════════════════════════════════════

Orbit container height: 560px
Section total padding: 80px top, 80px bottom
This gives enough room for all 5 cards 
to sit properly without overlapping.

═══════════════════════════════════════════════
KEEP EXACTLY AS IS
═══════════════════════════════════════════════

✓ All card content (text, tags, buttons)
✓ Float animations on each card
✓ Headline "Let AI handle the heavy lifting."
✓ Section label pill
✓ Top and bottom subtle fade
✓ Scroll reveal animations

DO NOT CHANGE ANYTHING ELSE.