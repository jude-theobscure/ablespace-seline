import { useEffect, useRef, useState } from "react";

const SANS = "'DM Sans', system-ui, sans-serif";

/* ─── SVG line paths (viewBox 860×500, center = 430,250) ────── */
const LINE_PATHS = [
  { d: "M430,250 Q200,350 55,340",  lineDelay: "0s",    dotBegin: "0s"   }, // Teacher
  { d: "M430,250 Q260,120 172,90",  lineDelay: "0.36s", dotBegin: "0.5s" }, // Parapro
  { d: "M430,250 Q430,120 430,40",  lineDelay: "0.72s", dotBegin: "1s"   }, // Therapist
  { d: "M430,250 Q600,120 688,90",  lineDelay: "1.08s", dotBegin: "1.5s" }, // Admin
  { d: "M430,250 Q660,350 805,340", lineDelay: "1.44s", dotBegin: "2s"   }, // Parent
];

/* ─── Team node data ─────────────────────────────────────────── */
const TEAM = [
  {
    id: "Teacher",
    initials: "SK", role: "Teacher",
    posStyle: { left: "6%",  top: "68%" } as React.CSSProperties,
    bg: "#C6E8CC", dark: "#1A5C32",
    floatDelay: "0s",   pulseDelay: "0s",
  },
  {
    id: "Parapro",
    initials: "MJ", role: "Parapro",
    posStyle: { left: "20%", top: "18%" } as React.CSSProperties,
    bg: "#BFDBFE", dark: "#1E40AF",
    floatDelay: "0.5s", pulseDelay: "0.5s",
  },
  {
    id: "Therapist",
    initials: "RP", role: "Therapist",
    posStyle: { left: "50%", top: "8%", marginLeft: 0 } as React.CSSProperties,
    bg: "#DDD6FE", dark: "#5B21B6",
    floatDelay: "1s",   pulseDelay: "1s",
  },
  {
    id: "Admin",
    initials: "JL", role: "Admin",
    posStyle: { right: "20%", top: "18%" } as React.CSSProperties,
    bg: "#FDE68A", dark: "#92400E",
    floatDelay: "1.5s", pulseDelay: "1.5s",
  },
  {
    id: "Parent",
    initials: "AT", role: "Parent",
    posStyle: { right: "6%",  top: "68%" } as React.CSSProperties,
    bg: "#FBCFE8", dark: "#9D174D",
    floatDelay: "2s",   pulseDelay: "2s",
  },
] as const;

/* ─── Activity bubbles ───────────────────────────────────────── */
const BUBBLES = [
  {
    text: "✓ Goal Updated",
    dot: "#22C55E",
    style: { top: "58%", left: "0%" } as React.CSSProperties,
    anim: "bob1 3.2s ease-in-out 0s infinite",
  },
  {
    text: "📝 Note Added",
    dot: "#53AEF3",
    style: { top: "14%", left: "16%" } as React.CSSProperties,
    anim: "bob1 3.6s ease-in-out 0.6s infinite",
  },
  {
    text: "▶ Trial Recorded",
    dot: "#8B5CF6",
    style: { top: "12%", right: "16%" } as React.CSSProperties,
    anim: "bob1 3s ease-in-out 1.2s infinite",
  },
  {
    text: "📊 Report Ready",
    dot: "#F59E0B",
    style: { top: "56%", right: "0%" } as React.CSSProperties,
    anim: "bob1 3.8s ease-in-out 1.8s infinite",
  },
];

/* ════════════════════════════════════════════════════════════ */
export function SecureCollaborationSection() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes march {
          to { stroke-dashoffset: -20; }
        }
        @keyframes center-breathe {
          0%,100% { transform: translate(-50%,-50%) scale(1); }
          50%      { transform: translate(-50%,-50%) scale(1.08); }
        }
        @keyframes node-float {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%   { transform: scale(1);   opacity: 0.3; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes bob1 {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
      `}</style>

      <section
        ref={ref}
        style={{
          background: "#F8F8F5",
          padding: "80px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ── Main network container ── */}
        <div style={{
          position: "relative",
          width: "100%",
          height: 500,
          maxWidth: 860,
          margin: "0 auto",
        }}>

          {/* ── SVG: curved lines + traveling dots ── */}
          <svg
            viewBox="0 0 860 500"
            preserveAspectRatio="xMidYMid meet"
            style={{
              position: "absolute",
              top: 0, left: 0,
              width: "100%", height: "100%",
              pointerEvents: "none",
              overflow: "visible",
              zIndex: 1,
              opacity: vis ? 1 : 0,
              transition: "opacity 600ms ease 400ms",
            }}
          >
            <defs>
              {LINE_PATHS.map((lp, i) => (
                <path key={`def-${i}`} id={`lp-${i}`} d={lp.d} />
              ))}
            </defs>

            {/* Dashed curved lines */}
            {LINE_PATHS.map((lp, i) => (
              <use
                key={`line-${i}`}
                href={`#lp-${i}`}
                stroke="rgba(0,0,0,0.10)"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                strokeLinecap="round"
                fill="none"
                style={{
                  animation: vis
                    ? `march 1.8s linear ${lp.lineDelay} infinite`
                    : "none",
                }}
              />
            ))}

            {/* Traveling dots */}
            {vis && LINE_PATHS.map((lp, i) => (
              <circle key={`dot-${i}`} r="4" fill="#53AEF3" opacity="0.6">
                <animateMotion
                  dur="2.5s"
                  repeatCount="indefinite"
                  begin={lp.dotBegin}
                  calcMode="spline"
                  keyTimes="0;1"
                  keySplines="0.4 0 0.6 1"
                >
                  <mpath href={`#lp-${i}`} />
                </animateMotion>
              </circle>
            ))}
          </svg>

          {/* ── Team member nodes ── */}
          {TEAM.map((node, i) => (
            <div
              key={node.id}
              style={{
                position: "absolute",
                ...node.posStyle,
                transform: "translate(-50%, -50%)",
                opacity: vis ? 1 : 0,
                transition: `opacity 400ms cubic-bezier(0.34,1.56,0.64,1) ${200 + i * 80}ms`,
                zIndex: 5,
              }}
            >
              {/* Float wrapper */}
              <div style={{
                animation: vis
                  ? `node-float 3.5s ease-in-out ${node.floatDelay} infinite`
                  : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
              }}>
                {/* Pulse ring */}
                <div style={{
                  position: "absolute",
                  width: 72, height: 72,
                  borderRadius: "50%",
                  background: node.bg,
                  opacity: 0.3,
                  top: -8, left: "50%",
                  marginLeft: -36,
                  animation: vis
                    ? `pulse 2.5s ease-out ${node.pulseDelay} infinite`
                    : "none",
                  pointerEvents: "none",
                }} />

                {/* Avatar circle */}
                <div style={{
                  width: 56, height: 56,
                  borderRadius: "50%",
                  background: node.bg,
                  border: "2.5px solid white",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 2,
                }}>
                  <span style={{
                    fontFamily: SANS,
                    fontWeight: 700,
                    fontSize: 13,
                    color: node.dark,
                    userSelect: "none",
                  }}>{node.initials}</span>
                </div>

                {/* Role label */}
                <div style={{
                  position: "absolute",
                  top: 62,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 9999,
                  padding: "3px 10px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  fontFamily: SANS,
                  fontWeight: 500,
                  fontSize: 11,
                  color: "#1A1A1E",
                  whiteSpace: "nowrap",
                  zIndex: 3,
                }}>
                  {node.role}
                </div>
              </div>
            </div>
          ))}

          {/* ── Center student node (Emma R.) ── */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              opacity: vis ? 1 : 0,
              transition: "opacity 500ms cubic-bezier(0.34,1.56,0.64,1) 0ms",
              animation: vis ? "center-breathe 3s ease-in-out infinite" : "none",
              zIndex: 10,
            }}
          >
            {/* Glow ring */}
            <div style={{
              position: "absolute",
              width: 100, height: 100,
              borderRadius: "50%",
              background: "rgba(83,174,243,0.15)",
              top: -50 - 14, left: -50 - 14,
              pointerEvents: "none",
            }} />

            {/* Avatar */}
            <div style={{
              width: 72, height: 72,
              borderRadius: "50%",
              background: "#53AEF3",
              border: "3px solid white",
              boxShadow: "0 4px 20px rgba(83,174,243,0.40)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              marginLeft: -36,
              marginTop: -36,
            }}>
              <span style={{
                fontFamily: SANS,
                fontWeight: 700,
                fontSize: 16,
                color: "#FFFFFF",
                userSelect: "none",
              }}>ER</span>
            </div>

            {/* Name + role label */}
            <div style={{
              position: "absolute",
              top: 46,
              left: "50%",
              transform: "translateX(-50%) translateX(-36px)",
              textAlign: "center",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}>
              <div style={{
                fontFamily: SANS, fontWeight: 600, fontSize: 13, color: "#1A1A1E",
              }}>Emma R.</div>
              <div style={{
                fontFamily: SANS, fontWeight: 400, fontSize: 11, color: "#6E6E73",
              }}>Student</div>
            </div>
          </div>

          {/* ── Floating activity bubbles ── */}
          {BUBBLES.map((bubble, i) => (
            <div
              key={bubble.text}
              style={{
                position: "absolute",
                ...bubble.style,
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(10px)",
                transition: `opacity 400ms ease ${600 + i * 120}ms, transform 400ms ease ${600 + i * 120}ms`,
                animation: vis ? bubble.anim : "none",
                pointerEvents: "none",
                zIndex: 20,
              }}
            >
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: 9999,
                padding: "8px 16px",
                boxShadow: "0 3px 16px rgba(0,0,0,0.09)",
                whiteSpace: "nowrap",
                fontFamily: SANS,
                fontWeight: 500,
                fontSize: 12,
                color: "#1A1A1E",
              }}>
                <div style={{
                  width: 8, height: 8,
                  borderRadius: "50%",
                  background: bubble.dot,
                  flexShrink: 0,
                }} />
                {bubble.text}
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}
