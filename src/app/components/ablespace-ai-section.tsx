import { useEffect, useRef, useState } from "react";

const SANS   = "'DM Sans', system-ui, sans-serif";
const SERIF  = "'Instrument Serif', serif";
const PURPLE = "#6B5ECD";
const BLUE   = "#53AEF3";

/* ─── Card paths for SVG animateMotion ─────────────────────── */
// Orbit container: 900×560, center = (450, 280)
// Card 1 top:5% left:3% w:210  → center ~(132, 68)
// Card 2 top:5% right:3% w:210 → center ~(768, 68)
// Card 3 top:40% left:0% w:190 → center ~(95, 264)
// Card 4 top:40% right:0% w:210→ center ~(795, 264)
// Card 5 bottom:5% center w:260 → center ~(450, 492)

const LINE_PATHS = [
  "M 450 280 Q 250 160 132 68",   // → Card 1
  "M 450 280 Q 650 160 768 68",   // → Card 2
  "M 450 280 Q 200 280 95 264",   // → Card 3
  "M 450 280 Q 700 280 795 264",  // → Card 4
  "M 450 280 Q 450 400 450 492",  // → Card 5
];

/* ════════════════════════════════════════════════════════════ */
export function AbleSpaceAISection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const triggered     = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes icon-breathe {
          0%,100% { transform: scale(1);    box-shadow: 0 8px 32px rgba(107,94,205,0.35); }
          50%      { transform: scale(1.06); box-shadow: 0 12px 48px rgba(107,94,205,0.50); }
        }
        @keyframes orbit-rotate {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes orbit-spin {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes float-a {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
        @keyframes line-march {
          to { stroke-dashoffset: -18; }
        }
      `}</style>

      {/* ── Top fade ── */}
      <div style={{ height: 80, background: "linear-gradient(to bottom,#F8F8F5,#F3F1FF)", pointerEvents:"none" }} />

      {/* ── Section body ── */}
      <div
        ref={sectionRef}
        style={{
          background: "#F3F1FF",
          padding:    "80px 80px",
          position:   "relative",
          overflow:   "hidden",
          minHeight:  700,
          boxSizing:  "border-box",
        }}
      >
        {/* ─ Header ─ */}
        <div style={{
          textAlign: "center",
          marginBottom: 56,
          opacity:   vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 600ms ease, transform 600ms ease",
        }}>
          <div style={{
            display: "inline-block",
            fontFamily: SANS, fontWeight: 500, fontSize: 11,
            letterSpacing: 2, color: PURPLE,
            background: "rgba(107,94,205,0.10)",
            border: "1px solid rgba(107,94,205,0.15)",
            padding: "5px 14px", borderRadius: 9999,
            marginBottom: 20,
          }}>
            ✦&nbsp;&nbsp;ABLESPACE AI
          </div>

          <h2 style={{
            fontFamily: SERIF, fontWeight: 400, fontSize: 52,
            lineHeight: 1.08, color: "#1A1A1E",
            textAlign: "center", margin: 0,
          }}>
            Let AI handle the<br />
            <span style={{ fontStyle: "italic", color: PURPLE }}>heavy lifting.</span>
          </h2>
        </div>

        {/* ─ Orbit container ─ */}
        <div style={{
          position: "relative",
          width: "100%",
          height: 560,
          maxWidth: 900,
          margin: "0 auto",
        }}>

          {/* ── SVG connecting lines ── */}
          <svg
            style={{
              position: "absolute", top: 0, left: 0,
              width: "100%", height: "100%",
              pointerEvents: "none", zIndex: 1,
              overflow: "visible",
              opacity: vis ? 1 : 0,
              transition: "opacity 600ms ease 500ms",
            }}
            viewBox="0 0 900 560"
            preserveAspectRatio="xMidYMid meet"
          >
            {LINE_PATHS.map((d, i) => (
              <g key={i}>
                <path
                  d={d}
                  stroke="rgba(107,94,205,0.15)"
                  strokeWidth="1.5"
                  strokeDasharray="4 5"
                  fill="none"
                  style={{
                    animation: `line-march 2s linear ${i * 0.4}s infinite`,
                  }}
                />
                <circle r="3.5" fill={PURPLE} opacity="0.55">
                  <animateMotion
                    dur="2.5s"
                    repeatCount="indefinite"
                    begin={`${i * 0.5}s`}
                  >
                    <mpath href={`#line-${i}`} />
                  </animateMotion>
                </circle>
                {/* Hidden named path for mpath */}
                <path id={`line-${i}`} d={d} fill="none" />
              </g>
            ))}
          </svg>

          {/* ── Outer orbit ring (rotating) ── */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            width: 340, height: 340,
            transform: "translate(-50%,-50%)",
            animation: "orbit-spin 25s linear infinite",
            pointerEvents: "none",
            opacity:   vis ? 1 : 0,
            zIndex: 0,
          }}>
            <div style={{
              position: "absolute", inset: 0,
              borderRadius: "50%",
              border: "1.5px dashed rgba(107,94,205,0.18)",
            }} />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              const x   = 170 + 170 * Math.cos(rad) - 3;
              const y   = 170 + 170 * Math.sin(rad) - 3;
              return (
                <div key={i} style={{
                  position: "absolute",
                  left: x, top: y,
                  width: 6, height: 6,
                  borderRadius: "50%",
                  background: "rgba(107,94,205,0.30)",
                }} />
              );
            })}
          </div>

          {/* ── Inner orbit ring (static) ── */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            width: 200, height: 200,
            transform: "translate(-50%,-50%)",
            borderRadius: "50%",
            border: "1.5px dashed rgba(107,94,205,0.12)",
            pointerEvents: "none",
            opacity: vis ? 1 : 0,
            transition: "opacity 600ms ease 200ms",
            zIndex: 0,
          }} />

          {/* ── Center app icon ── */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 10,
          }}>
            {/* Outer glow */}
            <div style={{
              position: "absolute",
              top: -20, left: -20,
              width: 120, height: 120,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(107,94,205,0.20) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            {/* Icon box */}
            <div style={{
              width: 80, height: 80,
              background: "linear-gradient(135deg, #7B6FE0 0%, #5B4FBE 100%)",
              borderRadius: 20,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column",
              position: "relative",
              animation: "icon-breathe 3s ease-in-out infinite",
              opacity:   vis ? 1 : 0,
              transition: "opacity 500ms cubic-bezier(0.34,1.56,0.64,1)",
            }}>
              <span style={{
                fontFamily: SERIF, fontWeight: 400, fontSize: 28,
                color: "white", lineHeight: 1,
              }}>A</span>
              <span style={{
                fontFamily: SANS, fontWeight: 500, fontSize: 9,
                color: "rgba(255,255,255,0.60)",
                letterSpacing: 2,
                display: "block",
                textAlign: "center",
                marginTop: -4,
              }}>AI</span>
            </div>
          </div>

          {/* ── Floating cards ── */}

          {/* CARD 1 — Progress Notes */}
          <FloatCard
            style={{ top:"5%", left:"3%", width:210 }}
            floatDuration="3.5s"
            floatDelay="0s"
            vis={vis}
            visDelay={300}
          >
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
              <div style={{
                width:28, height:28, borderRadius:"50%",
                background: "#F3E5F5",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:13, flexShrink:0,
              }}>📝</div>
              <span style={{ fontFamily:SANS, fontWeight:700, fontSize:13, color:"#1A1A1E" }}>
                Progress Notes
              </span>
            </div>
            <p style={{
              fontFamily:SANS, fontWeight:400, fontSize:12,
              color:"#6E6E73", lineHeight:1.5, margin:"0 0 8px",
            }}>
              Liam attended a 30-min speech session targeting /s/ and /z/ sounds.
            </p>
            <div style={{ display:"flex", gap:5, flexWrap:"wrap", marginBottom:10 }}>
              <span style={{
                fontFamily:SANS, fontWeight:500, fontSize:10,
                background:"rgba(107,94,205,0.10)", color:PURPLE,
                padding:"2px 8px", borderRadius:9999,
              }}>7/10 trials</span>
              <span style={{
                fontFamily:SANS, fontWeight:500, fontSize:10,
                background:"rgba(34,197,94,0.10)", color:"#2A8A4A",
                padding:"2px 8px", borderRadius:9999,
              }}>minimal prompts</span>
            </div>
            <button style={{
              background: PURPLE, color:"white",
              fontFamily:SANS, fontWeight:600, fontSize:11,
              border:"none", borderRadius:6,
              padding:"5px 12px", cursor:"pointer",
              display:"block", width:"fit-content",
            }}>+ Add to Notes</button>
          </FloatCard>

          {/* CARD 2 — IEP Goal */}
          <FloatCard
            style={{ top:"5%", right:"3%", width:210 }}
            floatDuration="4s"
            floatDelay="0.5s"
            vis={vis}
            visDelay={400}
          >
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
              <div style={{
                width:28, height:28, borderRadius:"50%",
                background: "#E3F2FD",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:12, color:"#1565C0", fontWeight:700, flexShrink:0,
              }}>✦</div>
              <span style={{ fontFamily:SANS, fontWeight:700, fontSize:13, color:"#1A1A1E" }}>
                IEP Goal Generator
              </span>
            </div>
            <div style={{ display:"flex", gap:5, marginBottom:10, flexWrap:"wrap" }}>
              <span style={{
                fontFamily:SANS, fontWeight:500, fontSize:11,
                background:"rgba(83,174,243,0.10)", color:BLUE,
                padding:"2px 8px", borderRadius:9999,
              }}>4th Grade</span>
              <span style={{
                fontFamily:SANS, fontWeight:500, fontSize:11,
                background:"rgba(107,94,205,0.10)", color:PURPLE,
                padding:"2px 8px", borderRadius:9999,
              }}>Reading</span>
            </div>
            <div style={{
              fontFamily:SANS, fontWeight:500, fontSize:10,
              color:"#AEAEB2", textTransform:"uppercase" as const,
              letterSpacing:0.5, marginBottom:6,
            }}>Generated Goal</div>
            {["100%","72%"].map((w,i) => (
              <div key={i} style={{
                height:7, width:w, borderRadius:4, marginBottom:5,
                background:"linear-gradient(90deg,#E5E5E5 25%,#F0F0F0 50%,#E5E5E5 75%)",
                backgroundSize:"200% 100%",
                animation:"shimmer 1.8s infinite",
              }} />
            ))}
            <div style={{
              fontFamily:SANS, fontWeight:400, fontSize:10,
              color:"#AEAEB2", fontStyle:"italic", marginTop:4,
            }}>✦ AI generating...</div>
          </FloatCard>

          {/* CARD 3 — Total Students */}
          <FloatCard
            style={{ top:"40%", left:"0%", width:190 }}
            floatDuration="3.8s"
            floatDelay="1s"
            vis={vis}
            visDelay={500}
          >
            <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}>
              <div style={{
                width:28, height:28, borderRadius:"50%",
                background:"#E8F5E9",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:13, flexShrink:0,
              }}>👥</div>
              <span style={{ fontFamily:SANS, fontWeight:600, fontSize:11, color:"#6E6E73" }}>
                Active This Week
              </span>
            </div>
            <div style={{
              fontFamily:SERIF, fontWeight:400, fontSize:30,
              color:"#1A1A1E", lineHeight:1, marginBottom:2,
            }}>20,000+</div>
            <div style={{
              fontFamily:SANS, fontWeight:300, fontSize:11,
              color:"#AEAEB2", marginBottom:8,
            }}>Sped-Ed professionals</div>
            <div style={{ display:"flex", alignItems:"center" }}>
              {[
                { bg:"#6B5ECD" },
                { bg:"#53AEF3" },
                { bg:"#22C55E" },
              ].map(({ bg }, i) => (
                <div key={i} style={{
                  width:20, height:20, borderRadius:"50%",
                  background: bg,
                  border:"2px solid white",
                  marginLeft: i === 0 ? 0 : -6,
                  flexShrink: 0,
                }} />
              ))}
              <span style={{
                fontFamily:SANS, fontWeight:500, fontSize:11,
                color:"#6E6E73", marginLeft:6,
              }}>+500 schools</span>
            </div>
          </FloatCard>

          {/* CARD 4 — Goal Accuracy */}
          <FloatCard
            style={{ top:"40%", right:"0%", width:210 }}
            floatDuration="4.2s"
            floatDelay="1.5s"
            vis={vis}
            visDelay={600}
          >
            <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}>
              <div style={{
                width:28, height:28, borderRadius:"50%",
                background:"#FFF3E0",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:13, flexShrink:0,
              }}>🎯</div>
              <span style={{ fontFamily:SANS, fontWeight:700, fontSize:13, color:"#1A1A1E" }}>
                Goal Accuracy
              </span>
            </div>
            <div style={{
              fontFamily:SERIF, fontWeight:400, fontSize:36,
              color:"#1A1A1E", lineHeight:1, marginBottom:2,
            }}>87%</div>
            <div style={{
              fontFamily:SANS, fontWeight:300, fontSize:11,
              color:"#AEAEB2", marginBottom:10,
            }}>Goals on track this month</div>
            <div style={{ background:"#E5E5E5", borderRadius:9999, height:6, width:"100%", marginBottom:4 }}>
              <div style={{
                width:"87%", height:"100%", borderRadius:9999,
                background:`linear-gradient(to right, ${PURPLE}, ${BLUE})`,
              }} />
            </div>
            <div style={{ display:"flex", justifyContent:"space-between" }}>
              <span style={{ fontFamily:SANS, fontWeight:400, fontSize:10, color:"#AEAEB2" }}>0%</span>
              <span style={{ fontFamily:SANS, fontWeight:400, fontSize:10, color:"#AEAEB2" }}>100%</span>
            </div>
          </FloatCard>

          {/* CARD 5 — AI Activity */}
          <FloatCard
            style={{ bottom:"5%", left:"50%", transform:"translateX(-50%)", width:260 }}
            floatDuration="3.2s"
            floatDelay="2s"
            vis={vis}
            visDelay={700}
          >
            <div style={{ marginBottom:10 }}>
              <span style={{
                fontFamily:SANS, fontWeight:600, fontSize:11,
                color:PURPLE, background:"rgba(107,94,205,0.10)",
                border:"1px solid rgba(107,94,205,0.15)",
                padding:"3px 10px", borderRadius:9999,
                display:"inline-block",
              }}>✦ AbleSpace AI</span>
            </div>
            <div style={{
              background:"#F8F7FF",
              borderRadius:8,
              padding:"10px 12px",
            }}>
              <p style={{
                fontFamily:SANS, fontWeight:400, fontSize:12,
                color:"#3D3D3D", lineHeight:1.55, margin:"0 0 8px",
              }}>
                Emma produced /s/ in 7/10 trials with minimal prompting. Recommend increasing trial frequency next session.
              </p>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <span style={{ fontFamily:SANS, fontWeight:500, fontSize:11, color:"#22C55E" }}>
                  ✓ Ready to add
                </span>
                <span style={{ fontFamily:SANS, fontWeight:500, fontSize:11, color:PURPLE, cursor:"pointer" }}>
                  View full note →
                </span>
              </div>
            </div>
          </FloatCard>

        </div>{/* /orbit container */}
      </div>{/* /section body */}

      {/* ── Bottom fade ── */}
      <div style={{ height:80, background:"linear-gradient(to bottom,#F3F1FF,#F8F8F5)", pointerEvents:"none" }} />
    </>
  );
}

/* ─── Floating card wrapper ─────────────────────────────────── */
function FloatCard({
  children,
  style,
  floatDuration,
  floatDelay,
  vis,
  visDelay,
}: {
  children: React.ReactNode;
  style: React.CSSProperties;
  floatDuration: string;
  floatDelay: string;
  vis: boolean;
  visDelay: number;
}) {
  return (
    <div style={{
      position: "absolute",
      ...style,
      background:   "#FFFFFF",
      border:       "1px solid rgba(107,94,205,0.10)",
      borderRadius: 14,
      padding:      "14px 16px",
      zIndex:       5,
      opacity:      vis ? 1 : 0,
      transform:    vis
        ? (style.transform ?? "none")
        : `${style.transform ? style.transform + " " : ""}scale(0.85)`,
      transition:   `opacity 500ms cubic-bezier(0.34,1.56,0.64,1) ${visDelay}ms,
                     transform 500ms cubic-bezier(0.34,1.56,0.64,1) ${visDelay}ms`,
      animation:    vis ? `float-a ${floatDuration} ${floatDelay} ease-in-out infinite` : "none",
    }}>
      {children}
    </div>
  );
}