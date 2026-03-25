Fix the Secure Collaboration network graph section.
The current version is too small and lost on the page.

═══════════════════════════════════════════════
FIX 1 — SECTION SIZE
═══════════════════════════════════════════════

Section padding: 80px 80px
Orbit container: 
  Width: 100%
  Max-width: 860px
  Height: 500px
  Margin: 0 auto
  Position: relative

═══════════════════════════════════════════════
FIX 2 — NODE SIZES (make bigger)
═══════════════════════════════════════════════

Center node (Emma R.):
  Width: 72px, height: 72px
  Border-radius: 50%
  Background: #53AEF3
  Border: 3px solid white
  Box-shadow: 0 4px 20px rgba(83,174,243,0.40)
  Font: DM Sans 700 16px white
  Text: "ER"

Team nodes (all 5):
  Width: 56px, height: 56px
  Border-radius: 50%
  Border: 2.5px solid white
  Box-shadow: 0 4px 14px rgba(0,0,0,0.12)
  Font: DM Sans 700 13px
  
  Colors same as before:
  Teacher SK:   #C6E8CC, text #1A5C32
  Parapro MJ:   #BFDBFE, text #1E40AF
  Therapist RP: #DDD6FE, text #5B21B6
  Admin JL:     #FDE68A, text #92400E
  Parent AT:    #FBCFE8, text #9D174D

═══════════════════════════════════════════════
FIX 3 — NODE POSITIONS (spread further apart)
═══════════════════════════════════════════════

Center: left 50%, top 50%
Transform: translate(-50%, -50%)

Teacher:    left: 6%,  top: 68%
Parapro:    left: 20%, top: 18%
Therapist:  left: 50%, top: 8%
            transform: translateX(-50%)
Admin:      right: 20%, top: 18%
Parent:     right: 6%,  top: 68%

Role labels below each node:
  Background: white
  Border: 1px solid rgba(0,0,0,0.08)
  Border-radius: 9999px
  Padding: 3px 10px
  DM Sans 500 11px #1A1A1E
  Box-shadow: 0 1px 4px rgba(0,0,0,0.06)
  Position: absolute
  Top: 62px, left: 50%
  Transform: translateX(-50%)
  White-space: nowrap

Name label for Emma R.:
  "Emma R." DM Sans 600 13px #1A1A1E
  Below: "Student" DM Sans 400 11px #6E6E73
  Both centered below circle

═══════════════════════════════════════════════
FIX 4 — CONNECTING LINES (SVG)
═══════════════════════════════════════════════

SVG: position absolute, top 0, left 0
Width: 100%, height: 100%
Pointer-events: none, z-index: 1
Overflow: visible

Center point: (430, 250)

5 curved quadratic bezier paths:

To Teacher    (55, 340):   
  M430,250 Q200,350 55,340
To Parapro    (172, 90):   
  M430,250 Q260,120 172,90
To Therapist  (430, 40):   
  M430,250 Q430,120 430,40
To Admin      (688, 90):   
  M430,250 Q600,120 688,90
To Parent     (805, 340):  
  M430,250 Q660,350 805,340

Each path:
  stroke: rgba(0,0,0,0.10)
  stroke-width: 1.5
  stroke-dasharray: 5 5
  fill: none
  stroke-linecap: round

@keyframes march {
  to { stroke-dashoffset: -20; }
}
All paths: animation march 1.8s linear infinite
Delays: 0s, 0.36s, 0.72s, 1.08s, 1.44s

Traveling dot on each path:
  <circle r="4" fill="#53AEF3" opacity="0.6">
  <animateMotion dur="2.5s" repeatCount="indefinite"
  calcMode="spline" 
  keySplines="0.4 0 0.6 1">
  path: same as connecting line
  Begin: 0s, 0.5s, 1s, 1.5s, 2s

═══════════════════════════════════════════════
FIX 5 — ACTIVITY BUBBLES (bigger, more visible)
═══════════════════════════════════════════════

4 floating pill labels:
  Background: #FFFFFF
  Border: 1px solid rgba(0,0,0,0.08)
  Border-radius: 9999px
  Padding: 8px 16px
  Box-shadow: 0 3px 16px rgba(0,0,0,0.09)
  Font: DM Sans 500 12px #1A1A1E
  White-space: nowrap
  Position: absolute

Left dot: 8px circle

Label 1 "✓ Goal Updated":
  top: 58%, left: 0%
  Dot: #22C55E
  
  @keyframes bob1 {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-8px); }
  }
  animation: bob1 3.2s ease-in-out infinite

Label 2 "📝 Note Added":
  top: 14%, left: 16%
  Dot: #53AEF3
  animation: bob1 3.6s ease-in-out infinite
  delay: 0.6s

Label 3 "▶ Trial Recorded":
  top: 12%, right: 16%
  Dot: #8B5CF6
  animation: bob1 3s ease-in-out infinite
  delay: 1.2s

Label 4 "📊 Report Ready":
  top: 56%, right: 0%
  Dot: #F59E0B
  animation: bob1 3.8s ease-in-out infinite
  delay: 1.8s

═══════════════════════════════════════════════
FIX 6 — NODE FLOAT ANIMATIONS
═══════════════════════════════════════════════

@keyframes node-float {
  0%,100% { transform: translateY(0px); }
  50%      { transform: translateY(-8px); }
}

Each node wrapper:
  animation: node-float 3.5s ease-in-out infinite
  Delays: 0s, 0.5s, 1s, 1.5s, 2s

Center node:
  @keyframes center-breathe {
    0%,100% { transform: translate(-50%,-50%) scale(1); }
    50%      { transform: translate(-50%,-50%) scale(1.08); }
  }
  animation: center-breathe 3s ease-in-out infinite

═══════════════════════════════════════════════
FIX 7 — PULSE RINGS ON TEAM NODES
═══════════════════════════════════════════════

Behind each team node circle, add pulse ring:
  Same size as node: 56px
  Border-radius: 50%
  Position: absolute, top: -8px, left: -8px
  Width: 72px, height: 72px
  Same background color as node, opacity 0.3

  @keyframes pulse {
    0%   { transform: scale(1); opacity: 0.3; }
    100% { transform: scale(1.6); opacity: 0; }
  }
  Duration: 2.5s ease-out infinite
  Stagger delays: 0s, 0.5s, 1s, 1.5s, 2s

═══════════════════════════════════════════════
SCROLL REVEAL
═══════════════════════════════════════════════

Center node: scale 0→1, opacity 0→1
  500ms cubic-bezier(0.34,1.56,0.64,1)
  Delay: 0ms

Team nodes: scale 0→1, opacity 0→1
  400ms cubic-bezier(0.34,1.56,0.64,1)
  Stagger: 80ms, delay starts 200ms

SVG lines: opacity 0→1
  600ms ease, delay: 400ms

Activity bubbles: opacity 0→1, translateY 10px→0
  400ms ease, stagger 120ms, delay starts 600ms

Use IntersectionObserver threshold: 0.2

═══════════════════════════════════════════════
DO NOT CHANGE ANYTHING ELSE.
═══════════════════════════════════════════════