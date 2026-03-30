import React, { useState, useEffect, useRef } from "react";

const STYLE_ID = "aurora-keyframes";

const KEYFRAMES = `
@keyframes aurora-shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes card-shimmer {
  0%   { opacity: 0.7; }
  50%  { opacity: 1; }
  100% { opacity: 0.7; }
}
@keyframes float-slow {
  0%   { transform: translateY(0px) rotate(0deg); }
  50%  { transform: translateY(-18px) rotate(3deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}
`;

const FEATURES = [
  {
    icon: "✦",
    color: "#67E8F9",
    title: "9+ Data Collection Types",
    desc: "Frequency, duration, trial-by-trial, interval, ABC data, and more. Collect every type with one tap.",
  },
  {
    icon: "◈",
    color: "#C084FC",
    title: "AI Progress Notes",
    desc: "Our AI reads your collected data and writes HIPAA-compliant progress notes in seconds. Edit and send.",
  },
  {
    icon: "⬡",
    color: "#34D399",
    title: "IEP Goal Dashboard",
    desc: "Visual goal maps, benchmark tracking, and timeline views so you always know where every student stands.",
  },
  {
    icon: "◉",
    color: "#67E8F9",
    title: "Team Collaboration",
    desc: "Share data across your team in real time. Role-based access. Audit trails. Built for districts.",
  },
];

export function Concept3Aurora() {
  const [mounted, setMounted] = useState(false);
  const [cardAnim, setCardAnim] = useState([false, false, false, false]);

  useEffect(() => {
    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent = KEYFRAMES;
      document.head.appendChild(style);
    }
    const t = setTimeout(() => setMounted(true), 80);
    const timers = FEATURES.map((_, i) =>
      setTimeout(() => setCardAnim(prev => { const n = [...prev]; n[i] = true; return n; }), 600 + i * 130)
    );
    return () => { clearTimeout(t); timers.forEach(clearTimeout); };
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", overflowX: "hidden" }}>

      {/* Hero — aurora bg */}
      <section style={{
        background: "linear-gradient(135deg, #1a0533 0%, #0d2b4e 30%, #0d4a40 60%, #1a0533 100%)",
        backgroundSize: "300% 300%",
        animation: "aurora-shift 12s ease infinite",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "100px",
        paddingBottom: "100px",
        paddingLeft: "clamp(24px, 8vw, 120px)",
        paddingRight: "clamp(24px, 8vw, 120px)",
      }}>

        {/* Aurora SVG paths */}
        <svg style={{
          position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
          pointerEvents: "none", zIndex: 0,
        }} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <path d="M-100,400 Q200,100 500,300 T1100,200 T1600,350"
            stroke="rgba(103,232,249,0.18)" strokeWidth="120" fill="none" style={{ filter: "blur(40px)" }} />
          <path d="M-200,600 Q300,300 700,500 T1300,350 T1700,500"
            stroke="rgba(192,132,252,0.14)" strokeWidth="150" fill="none" style={{ filter: "blur(50px)" }} />
          <path d="M0,200 Q400,450 800,250 T1440,400"
            stroke="rgba(52,211,153,0.12)" strokeWidth="100" fill="none" style={{ filter: "blur(35px)" }} />
        </svg>

        {/* Floating orb */}
        <div style={{
          position: "absolute", top: "10%", right: "8%",
          width: "320px", height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(192,132,252,0.25) 0%, transparent 70%)",
          filter: "blur(30px)",
          animation: "float-slow 8s ease-in-out infinite",
          zIndex: 0,
        }} />
        <div style={{
          position: "absolute", bottom: "15%", left: "5%",
          width: "250px", height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(103,232,249,0.2) 0%, transparent 70%)",
          filter: "blur(25px)",
          animation: "float-slow 10s ease-in-out infinite reverse",
          zIndex: 0,
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: "760px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(103,232,249,0.12)",
            border: "1px solid rgba(103,232,249,0.3)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "36px",
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.8s ease 0.1s",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#67E8F9", display: "inline-block" }} />
            <span style={{ color: "#67E8F9", fontSize: "13px", fontWeight: 500, letterSpacing: "0.06em" }}>
              HIPAA · FERBA COMPLIANT · SOC2
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(44px, 7vw, 88px)",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.1,
            margin: "0 0 28px",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s",
          }}>
            Special education<br />
            <em style={{ color: "#67E8F9", fontStyle: "italic" }}>illuminated</em> by AI
          </h1>

          <p style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.75,
            maxWidth: "520px",
            margin: "0 0 48px",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.25s",
          }}>
            AbleSpace gives your team AI-powered IEP tracking, 9+ data types,
            and automatic progress notes — so you save 3 hours every single day.
          </p>

          <div style={{
            display: "flex", gap: "16px", flexWrap: "wrap",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s",
          }}>
            <button style={{
              background: "linear-gradient(135deg, #67E8F9, #2563EB)",
              color: "#fff",
              border: "none",
              borderRadius: "100px",
              padding: "16px 36px",
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "'DM Sans', system-ui, sans-serif",
              cursor: "pointer",
              boxShadow: "0 8px 32px rgba(103,232,249,0.3)",
              letterSpacing: "0.01em",
            }}>
              Start Free Trial
            </button>
            <button style={{
              background: "rgba(255,255,255,0.08)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "100px",
              padding: "16px 36px",
              fontSize: "16px",
              fontWeight: 500,
              fontFamily: "'DM Sans', system-ui, sans-serif",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
            }}>
              Watch Demo →
            </button>
          </div>
        </div>
      </section>

      {/* Features — light section */}
      <section style={{
        background: "#F0F7FF",
        padding: "100px clamp(24px, 8vw, 120px)",
      }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{
            fontSize: "13px", fontWeight: 600, letterSpacing: "0.12em",
            color: "#2563EB", textTransform: "uppercase", margin: "0 0 12px",
          }}>EVERYTHING YOU NEED</p>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400,
            color: "#0f172a",
            margin: 0,
            lineHeight: 1.2,
          }}>
            One platform for your whole team
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {FEATURES.map((f, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0 4px 24px rgba(37,99,235,0.08)",
              opacity: cardAnim[i] ? 1 : 0,
              transform: cardAnim[i] ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)",
            }}>
              <div style={{
                width: "44px", height: "44px",
                borderRadius: "12px",
                background: `${f.color}18`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "20px",
                color: f.color,
                marginBottom: "20px",
                border: `1px solid ${f.color}30`,
              }}>{f.icon}</div>
              <h3 style={{
                fontSize: "17px", fontWeight: 700, color: "#0f172a",
                margin: "0 0 10px", letterSpacing: "-0.01em",
              }}>{f.title}</h3>
              <p style={{
                fontSize: "15px", lineHeight: 1.65,
                color: "#475569", margin: 0,
              }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — back to aurora */}
      <section style={{
        background: "linear-gradient(135deg, #1a0533 0%, #0d2b4e 50%, #0d4a40 100%)",
        padding: "100px clamp(24px, 8vw, 120px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <svg style={{
          position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
          pointerEvents: "none",
        }} viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice">
          <path d="M0,200 Q360,50 720,200 T1440,200"
            stroke="rgba(103,232,249,0.12)" strokeWidth="100" fill="none" style={{ filter: "blur(30px)" }} />
        </svg>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(32px, 5vw, 60px)",
            fontWeight: 400,
            color: "#fff",
            margin: "0 0 20px",
            lineHeight: 1.2,
          }}>
            Join thousands of educators<br />already saving time
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.55)", fontSize: "17px",
            margin: "0 0 44px", lineHeight: 1.6,
          }}>
            Free 14-day trial. No credit card required. Cancel anytime.
          </p>
          <button style={{
            background: "linear-gradient(135deg, #C084FC, #7C3AED)",
            color: "#fff",
            border: "none",
            borderRadius: "100px",
            padding: "18px 48px",
            fontSize: "17px",
            fontWeight: 700,
            fontFamily: "'DM Sans', system-ui, sans-serif",
            cursor: "pointer",
            boxShadow: "0 8px 40px rgba(192,132,252,0.4)",
            letterSpacing: "0.01em",
          }}>
            Start Free — No Card Needed
          </button>
        </div>
      </section>
    </div>
  );
}
