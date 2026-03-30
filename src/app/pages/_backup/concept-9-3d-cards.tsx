import React, { useState, useEffect, useRef } from "react";

const SANS  = "'DM Sans', system-ui, sans-serif";
const SERIF = "'Instrument Serif', serif";
const BG    = "#EEF2FF";
const INDIGO = "#4F46E5";
const VIOLET = "#7C3AED";
const DARK  = "#1E1B4B";
const MUTED = "#6B7280";

interface TiltCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

function TiltCard({ children, style = {} }: TiltCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rotateY = ((e.clientX - cx) / (rect.width / 2)) * 10;
    const rotateX = -((e.clientY - cy) / (rect.height / 2)) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
      onMouseMove={handleMouseMove}
      style={{
        background: "#fff",
        borderRadius: 20,
        border: "1px solid rgba(79,70,229,0.12)",
        borderTop: "3px solid " + INDIGO,
        padding: "32px 28px",
        cursor: "default",
        willChange: "transform",
        transform: "perspective(900px) rotateX(" + tilt.x + "deg) rotateY(" + tilt.y + "deg) " + (hovered ? "translateY(-6px)" : "translateY(0)"),
        boxShadow: hovered
          ? "0 2px 4px rgba(0,0,0,0.04), 0 12px 40px rgba(79,70,229,0.18), 0 40px 80px rgba(79,70,229,0.1)"
          : "0 2px 8px rgba(79,70,229,0.06), 0 4px 24px rgba(79,70,229,0.08)",
        transition: hovered ? "box-shadow 0.2s ease" : "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.5s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const FEATURES = [
  { icon: "📊", title: "9+ Data Types", desc: "Frequency, duration, interval, task analysis — every IEP data type built in.", stat: "9+" },
  { icon: "✨", title: "AI Progress Notes", desc: "Generate SOAP-format progress notes from session data in seconds.", stat: "10s" },
  { icon: "🔒", title: "HIPAA Compliant", desc: "End-to-end encryption, FERPA compliance, and role-based access.", stat: "100%" },
];

export function Concept9ThreeDCards() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 80); return () => clearTimeout(t); }, []);

  const fade = (delay = 0): React.CSSProperties => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(32px)",
    transition: "opacity 0.65s ease " + delay + "ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) " + delay + "ms",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", overflowX: "hidden" }}>
      {/* Blobs */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -200, right: -200, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -100, left: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 70%)" }} />
      </div>

      {/* Hero */}
      <section style={{ position: "relative", zIndex: 1, padding: "140px 80px 100px", maxWidth: 1200, margin: "0 auto", boxSizing: "border-box" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 80 }}>
          <div style={{ flex: "0 0 500px", ...fade(0) }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(79,70,229,0.08)", border: "1px solid rgba(79,70,229,0.2)", borderRadius: 100, padding: "5px 16px", marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: INDIGO }} />
              <span style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, color: INDIGO, letterSpacing: "0.06em" }}>SPECIAL EDUCATION · REIMAGINED</span>
            </div>
            <h1 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 58, lineHeight: 1.08, color: DARK, margin: "0 0 24px", letterSpacing: "-0.5px" }}>
              IEP tracking that<br /><span style={{ color: INDIGO }}>feels effortless.</span>
            </h1>
            <p style={{ fontFamily: SANS, fontWeight: 300, fontSize: 18, color: MUTED, lineHeight: 1.7, margin: "0 0 40px", maxWidth: 420 }}>
              AbleSpace gives special ed teams the tools to collect data, write AI-powered notes, and stay compliant.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", height: 50, padding: "0 28px", borderRadius: 12, fontFamily: SANS, fontWeight: 600, fontSize: 15, background: "linear-gradient(135deg, " + INDIGO + ", " + VIOLET + ")", color: "#fff", textDecoration: "none", boxShadow: "0 8px 24px rgba(79,70,229,0.35)" }}>Start for free →</a>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", height: 50, padding: "0 24px", borderRadius: 12, fontFamily: SANS, fontWeight: 500, fontSize: 15, background: "transparent", color: DARK, textDecoration: "none", border: "1.5px solid rgba(79,70,229,0.2)" }}>See a demo</a>
            </div>
            <div style={{ display: "flex", gap: 40, marginTop: 48, paddingTop: 40, borderTop: "1px solid rgba(79,70,229,0.1)" }}>
              {[["500+", "Schools"], ["3 hrs", "Saved daily"], ["100%", "Compliant"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 28, color: INDIGO }}>{val}</div>
                  <div style={{ fontFamily: SANS, fontSize: 12, color: MUTED, marginTop: 2 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, ...fade(150) }}>
            <TiltCard style={{ padding: "40px 36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, paddingBottom: 20, borderBottom: "1px solid rgba(79,70,229,0.08)" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg, " + INDIGO + ", " + VIOLET + ")", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 18 }}>📋</span>
                </div>
                <div>
                  <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 15, color: DARK }}>Marcus T. — IEP Goals</div>
                  <div style={{ fontFamily: SANS, fontSize: 12, color: MUTED }}>Updated 2 minutes ago</div>
                </div>
                <div style={{ marginLeft: "auto", background: "#DCFCE7", color: "#16A34A", fontFamily: SANS, fontSize: 11, fontWeight: 600, borderRadius: 20, padding: "3px 10px" }}>On Track</div>
              </div>
              {[{ goal: "Reading fluency", progress: 78, color: INDIGO }, { goal: "Math computation", progress: 62, color: VIOLET }, { goal: "Written expression", progress: 45, color: "#06B6D4" }].map((g) => (
                <div key={g.goal} style={{ marginBottom: 18 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, color: DARK }}>{g.goal}</span>
                    <span style={{ fontFamily: SANS, fontSize: 13, fontWeight: 600, color: g.color }}>{g.progress}%</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: "rgba(79,70,229,0.08)" }}>
                    <div style={{ height: "100%", borderRadius: 3, background: g.color, width: g.progress + "%" }} />
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 24, padding: "14px 16px", background: "rgba(79,70,229,0.04)", borderRadius: 10, border: "1px solid rgba(79,70,229,0.08)" }}>
                <div style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, color: INDIGO, marginBottom: 4 }}>✨ AI Suggestion</div>
                <div style={{ fontFamily: SANS, fontSize: 12, color: MUTED }}>Marcus is progressing faster on reading. Consider adjusting target from 80 to 85 WPM.</div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "0 80px 100px", maxWidth: 1200, margin: "0 auto", boxSizing: "border-box", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ fontFamily: SANS, fontWeight: 600, fontSize: 12, color: INDIGO, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 16px" }}>What you get</p>
          <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 48, color: DARK, margin: 0, lineHeight: 1.1 }}>Everything your team needs.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {FEATURES.map((f) => (
            <TiltCard key={f.title}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
              <div style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 40, color: INDIGO, marginBottom: 8 }}>{f.stat}</div>
              <h3 style={{ fontFamily: SANS, fontWeight: 700, fontSize: 18, color: DARK, margin: "0 0 10px" }}>{f.title}</h3>
              <p style={{ fontFamily: SANS, fontSize: 14, color: MUTED, lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 80px 120px", maxWidth: 1200, margin: "0 auto", boxSizing: "border-box", position: "relative", zIndex: 1 }}>
        <TiltCard style={{ textAlign: "center", padding: "80px 60px", background: "linear-gradient(135deg, " + INDIGO + " 0%, " + VIOLET + " 100%)", borderTop: "none" }}>
          <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 48, color: "#fff", margin: "0 0 16px", lineHeight: 1.1 }}>Ready to get started?</h2>
          <p style={{ fontFamily: SANS, fontSize: 17, color: "rgba(255,255,255,0.7)", margin: "0 0 36px" }}>Join 500+ schools already using AbleSpace.</p>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", height: 52, padding: "0 36px", borderRadius: 12, fontFamily: SANS, fontWeight: 600, fontSize: 16, background: "#fff", color: INDIGO, textDecoration: "none", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
            Sign up for free →
          </a>
        </TiltCard>
      </section>
    </div>
  );
}
