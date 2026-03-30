import React, { useState, useEffect } from "react";

const SANS = "'DM Sans', system-ui, sans-serif";
const DARK  = "#0D0221";
const MUTED = "#A78BFA";
const MAGENTA = "#FF00FF";
const CYAN    = "#00FFFF";
const YELLOW  = "#FFD700";
const WHITE   = "#F0E6FF";

export function Concept10Retro() {
  const [vis, setVis] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => { const t = setTimeout(() => setVis(true), 80); return () => clearTimeout(t); }, []);
  useEffect(() => { const i = setInterval(() => setTick(n => n + 1), 100); return () => clearInterval(i); }, []);

  const glitch = tick % 30 === 0;

  const fade = (delay = 0): React.CSSProperties => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(24px)",
    transition: "opacity 0.7s ease " + delay + "ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) " + delay + "ms",
  });

  const FEATURES = [
    { icon: "▶", label: "IEP TRACKING", desc: "Track every goal with precision across all 9+ data collection types.", color: MAGENTA },
    { icon: "◈", label: "AI NOTES", desc: "Generate compliant progress notes in seconds using advanced AI.", color: CYAN },
    { icon: "◉", label: "COMPLIANCE", desc: "HIPAA, FERPA, and IDEA compliant — enterprise security built in.", color: YELLOW },
    { icon: "⬡", label: "ANALYTICS", desc: "20+ auto-generated graphs ready for every IEP meeting.", color: MAGENTA },
  ];

  // Grid lines SVG for retro floor
  const gridLines: React.ReactNode[] = [];
  for (let i = 0; i <= 12; i++) {
    const x = (i / 12) * 100;
    gridLines.push(
      <line key={"v" + i} x1={x + "%"} y1="0%" x2="50%" y2="100%" stroke={MAGENTA} strokeOpacity="0.25" strokeWidth="0.5" />
    );
  }
  for (let i = 0; i <= 8; i++) {
    const y = (i / 8) * 100;
    const spread = y / 100;
    gridLines.push(
      <line key={"h" + i} x1={(spread * 50) + "%"} y1={y + "%"} x2={(100 - spread * 50) + "%"} y2={y + "%"} stroke={MAGENTA} strokeOpacity="0.25" strokeWidth="0.5" />
    );
  }

  return (
    <div style={{ background: DARK, minHeight: "100vh", overflowX: "hidden", fontFamily: SANS }}>

      {/* Scanlines overlay */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)", pointerEvents: "none", zIndex: 10 }} />

      {/* Hero */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "140px 80px 0", overflow: "hidden" }}>

        {/* Retro grid floor */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "45%", overflow: "hidden" }}>
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            {gridLines}
          </svg>
          {/* Retro sun */}
          <div style={{ position: "absolute", bottom: "55%", left: "50%", transform: "translateX(-50%)", width: 220, height: 110, borderRadius: "110px 110px 0 0", background: "linear-gradient(180deg, " + YELLOW + " 0%, " + MAGENTA + " 60%, " + DARK + " 100%)", overflow: "hidden" }}>
            {[20, 35, 50, 65, 80].map((top) => (
              <div key={top} style={{ position: "absolute", top: top + "%", left: 0, right: 0, height: 6, background: DARK }} />
            ))}
          </div>
          {/* Horizon glow */}
          <div style={{ position: "absolute", bottom: "55%", left: 0, right: 0, height: 2, background: MAGENTA, boxShadow: "0 0 20px 4px " + MAGENTA + ", 0 0 60px 10px " + MAGENTA + "44" }} />
        </div>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", ...fade(0) }}>
          <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 11, letterSpacing: "6px", color: CYAN, textTransform: "uppercase", marginBottom: 24, textShadow: "0 0 10px " + CYAN }}>
            ◈ SPECIAL EDUCATION TECHNOLOGY ◈
          </div>

          <h1 style={{
            fontFamily: SANS, fontWeight: 900, fontSize: 80, lineHeight: 1,
            color: WHITE, margin: "0 0 8px",
            textShadow: glitch
              ? "4px 0 " + MAGENTA + ", -4px 0 " + CYAN
              : "2px 2px 0 " + MAGENTA + ", 4px 4px 0 rgba(255,0,255,0.4), 0 0 30px rgba(0,255,255,0.3)",
            letterSpacing: "-2px",
            transition: "text-shadow 0.05s",
          }}>
            ABLE<span style={{ color: CYAN, textShadow: "0 0 20px " + CYAN + ", 0 0 40px " + CYAN + "88" }}>SPACE</span>
          </h1>

          <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 22, color: YELLOW, letterSpacing: "8px", textTransform: "uppercase", marginBottom: 32, textShadow: "0 0 12px " + YELLOW }}>
            IEP TRACKING · EVOLVED
          </div>

          <p style={{ fontFamily: SANS, fontSize: 17, color: "rgba(240,230,255,0.65)", maxWidth: 520, margin: "0 auto 48px", lineHeight: 1.65 }}>
            The future of special education is here. AI-powered IEP tracking, progress notes, and compliance tools for the modern era.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", height: 52, padding: "0 32px", fontFamily: SANS, fontWeight: 700, fontSize: 14, letterSpacing: "2px", textTransform: "uppercase", background: "linear-gradient(135deg, " + MAGENTA + ", #AA00FF)", color: "#fff", border: "none", borderRadius: 4, textDecoration: "none", boxShadow: "0 0 20px " + MAGENTA + "88, inset 0 1px 0 rgba(255,255,255,0.2)" }}>
              ◈ ENTER NOW
            </a>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", height: 52, padding: "0 32px", fontFamily: SANS, fontWeight: 700, fontSize: 14, letterSpacing: "2px", textTransform: "uppercase", background: "transparent", color: CYAN, border: "1px solid " + CYAN, borderRadius: 4, textDecoration: "none", boxShadow: "0 0 12px " + CYAN + "44" }}>
              VIEW DEMO
            </a>
          </div>
        </div>

        <div style={{ height: "45%" }} />
      </section>

      {/* Marquee */}
      <div style={{ background: MAGENTA, padding: "12px 0", overflow: "hidden", position: "relative" }}>
        <div style={{ display: "flex", gap: 48, whiteSpace: "nowrap", animation: "marquee 18s linear infinite" }}>
          {Array(6).fill("★ IEP TRACKING ★ DATA COLLECTION ★ AI NOTES ★ COMPLIANCE ★ ABLESPACE ★").map((t, i) => (
            <span key={i} style={{ fontFamily: SANS, fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: DARK, flexShrink: 0 }}>{t}</span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </div>

      {/* Features */}
      <section style={{ padding: "100px 80px", maxWidth: 1200, margin: "0 auto", boxSizing: "border-box", ...fade(200) }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 11, letterSpacing: "4px", color: CYAN, textTransform: "uppercase", marginBottom: 16, textShadow: "0 0 8px " + CYAN }}>SYSTEM FEATURES</div>
          <h2 style={{ fontFamily: SANS, fontWeight: 900, fontSize: 48, color: WHITE, margin: 0, letterSpacing: "-1px", textShadow: "2px 2px 0 " + MAGENTA }}>
            BUILT FOR<br /><span style={{ color: CYAN }}>THE FUTURE</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.label} feature={f} delay={i * 80} vis={vis} />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "0 80px 100px", maxWidth: 1200, margin: "0 auto", boxSizing: "border-box" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid " + MAGENTA + "44", boxShadow: "0 0 24px " + MAGENTA + "22" }}>
          {[["500+", "Schools", MAGENTA], ["120K+", "Students", CYAN], ["3 HRS", "Saved Daily", YELLOW]].map(([val, lbl, col], i) => (
            <div key={lbl} style={{ padding: "48px 32px", textAlign: "center", borderRight: i < 2 ? "1px solid " + MAGENTA + "44" : "none" }}>
              <div style={{ fontFamily: SANS, fontWeight: 900, fontSize: 52, color: col as string, letterSpacing: "-2px", textShadow: "0 0 20px " + col }}>{val}</div>
              <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 12, letterSpacing: "3px", color: "rgba(240,230,255,0.5)", textTransform: "uppercase", marginTop: 8 }}>{lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 80px 120px", maxWidth: 1200, margin: "0 auto", boxSizing: "border-box" }}>
        <div style={{ border: "1px solid " + MAGENTA + "66", padding: "80px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(255,0,255,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 11, letterSpacing: "4px", color: CYAN, textTransform: "uppercase", marginBottom: 20 }}>INITIATE SEQUENCE</div>
          <h2 style={{ fontFamily: SANS, fontWeight: 900, fontSize: 52, color: WHITE, margin: "0 0 16px", letterSpacing: "-2px", textShadow: "2px 2px 0 " + MAGENTA }}>
            JOIN THE<br /><span style={{ color: CYAN }}>REVOLUTION</span>
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 16, color: "rgba(240,230,255,0.55)", margin: "0 0 40px" }}>500+ schools already operating in the future.</p>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", height: 56, padding: "0 40px", fontFamily: SANS, fontWeight: 900, fontSize: 15, letterSpacing: "3px", textTransform: "uppercase", background: "linear-gradient(135deg, " + MAGENTA + ", " + CYAN + ")", color: DARK, textDecoration: "none", borderRadius: 4, boxShadow: "0 0 30px " + MAGENTA + "66, 0 0 60px " + CYAN + "33" }}>
            ◈ START NOW
          </a>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ feature, delay, vis }: { feature: { icon: string; label: string; desc: string; color: string }; delay: number; vis: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "36px 40px",
        border: "1px solid",
        borderColor: hov ? feature.color + "66" : "rgba(255,0,255,0.15)",
        background: hov ? "rgba(255,0,255,0.04)" : "transparent",
        transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
        boxShadow: hov ? "0 0 20px " + feature.color + "22, inset 0 0 20px " + feature.color + "08" : "none",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div style={{ fontFamily: "'DM Sans'", fontSize: 28, color: feature.color, marginBottom: 16, textShadow: "0 0 12px " + feature.color }}>{feature.icon}</div>
      <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 13, letterSpacing: "3px", color: feature.color, textTransform: "uppercase", marginBottom: 12 }}>{feature.label}</div>
      <p style={{ fontFamily: SANS, fontSize: 15, color: "rgba(240,230,255,0.55)", lineHeight: 1.65, margin: 0 }}>{feature.desc}</p>
    </div>
  );
}
