import React, { useState, useEffect, useRef } from "react";

const SANS = "'DM Sans', system-ui, sans-serif";
const SERIF = "'Instrument Serif', serif";

const NEON_PINK = "#FF2D78";
const NEON_GREEN = "#00FF88";
const CYAN = "#00D4FF";
const BG = "#080810";
const CARD_BG = "#0F0F1A";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
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
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, vis };
}

function CircuitSVG() {
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12, pointerEvents: "none" }}
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={CYAN} stopOpacity="1" />
          <stop offset="100%" stopColor={CYAN} stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Horizontal traces */}
      <line x1="0" y1="120" x2="300" y2="120" stroke={CYAN} strokeWidth="1" />
      <line x1="300" y1="120" x2="300" y2="250" stroke={CYAN} strokeWidth="1" />
      <line x1="300" y1="250" x2="600" y2="250" stroke={CYAN} strokeWidth="1" />
      <line x1="600" y1="250" x2="600" y2="80" stroke={NEON_PINK} strokeWidth="1" />
      <line x1="600" y1="80" x2="900" y2="80" stroke={NEON_PINK} strokeWidth="1" />
      <line x1="900" y1="80" x2="900" y2="350" stroke={NEON_PINK} strokeWidth="1" />
      <line x1="900" y1="350" x2="1200" y2="350" stroke={NEON_PINK} strokeWidth="1" />
      <line x1="150" y1="0" x2="150" y2="120" stroke={CYAN} strokeWidth="1" />
      <line x1="750" y1="350" x2="750" y2="500" stroke={NEON_GREEN} strokeWidth="1" />
      <line x1="750" y1="500" x2="1050" y2="500" stroke={NEON_GREEN} strokeWidth="1" />
      <line x1="450" y1="250" x2="450" y2="420" stroke={NEON_GREEN} strokeWidth="1" />
      <line x1="0" y1="420" x2="450" y2="420" stroke={NEON_GREEN} strokeWidth="1" />
      <line x1="200" y1="420" x2="200" y2="600" stroke={CYAN} strokeWidth="1" />
      <line x1="200" y1="600" x2="500" y2="600" stroke={CYAN} strokeWidth="1" />
      <line x1="1050" y1="500" x2="1050" y2="700" stroke={NEON_GREEN} strokeWidth="1" />
      {/* Dots at junctions */}
      {[
        [150, 120], [300, 120], [300, 250], [600, 250], [600, 80], [900, 80],
        [900, 350], [750, 350], [750, 500], [1050, 500], [450, 250], [450, 420],
        [200, 420], [200, 600], [500, 600],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill={i % 3 === 0 ? NEON_PINK : i % 3 === 1 ? CYAN : NEON_GREEN} />
      ))}
    </svg>
  );
}

function NeonCard({
  icon, title, desc, accent,
}: { icon: string; title: string; desc: string; accent: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: CARD_BG,
        border: `1px solid ${hovered ? accent : accent + "40"}`,
        borderRadius: 12,
        padding: "32px 28px",
        transition: "all 0.3s ease",
        boxShadow: hovered
          ? `0 0 20px ${accent}55, 0 0 60px ${accent}22, inset 0 0 30px ${accent}08`
          : "0 2px 20px rgba(0,0,0,0.4)",
        cursor: "default",
        flex: 1,
        minWidth: 0,
      }}
    >
      <div
        style={{
          fontSize: 32,
          marginBottom: 16,
          filter: hovered ? `drop-shadow(0 0 8px ${accent})` : "none",
          transition: "filter 0.3s ease",
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontFamily: SANS,
          fontWeight: 700,
          fontSize: 18,
          color: hovered ? accent : "#E0E0F0",
          marginBottom: 10,
          transition: "color 0.3s ease",
        }}
      >
        {title}
      </div>
      <div style={{ fontFamily: SANS, fontSize: 14, color: "#7070A0", lineHeight: 1.7 }}>
        {desc}
      </div>
    </div>
  );
}

export function Concept6NeonNight() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsTriggered = useRef(false);

  const hero = useReveal(0.05);
  const cards = useReveal(0.1);
  const stats = useReveal(0.1);
  const cta = useReveal(0.1);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !statsTriggered.current) {
        statsTriggered.current = true;
        let f1 = 0, f2 = 0, f3 = 0;
        const interval = setInterval(() => {
          f1 = Math.min(f1 + 3, 90);
          f2 = Math.min(f2 + 1, 9);
          f3 = Math.min(f3 + 7, 300);
          setCount1(f1);
          setCount2(f2);
          setCount3(f3);
          if (f1 >= 90 && f2 >= 9 && f3 >= 300) clearInterval(interval);
        }, 16);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scanlineStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backgroundImage: "repeating-linear-gradient(to bottom, transparent 0px, transparent 1px, rgba(255,255,255,0.015) 1px, rgba(255,255,255,0.015) 2px)",
    pointerEvents: "none",
    zIndex: 2,
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: SANS, overflowX: "hidden" }}>
      {/* Fixed neon frame border */}
      <div style={{ position: "fixed", inset: 0, border: `1px solid ${NEON_PINK}18`, pointerEvents: "none", zIndex: 9999 }} />

      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 64,
          overflow: "hidden",
        }}
      >
        {/* Scanlines */}
        <div style={scanlineStyle} />
        {/* Circuit board */}
        <CircuitSVG />
        {/* Ambient glow blobs */}
        <div style={{ position: "absolute", top: "15%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${NEON_PINK}18 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "8%", width: 350, height: 350, borderRadius: "50%", background: `radial-gradient(circle, ${CYAN}15 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "40%", right: "25%", width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle, ${NEON_GREEN}12 0%, transparent 70%)`, pointerEvents: "none" }} />

        <div
          ref={hero.ref}
          style={{
            position: "relative",
            zIndex: 3,
            textAlign: "center",
            maxWidth: 860,
            padding: "0 24px",
            opacity: hero.vis ? 1 : 0,
            transform: hero.vis ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24, padding: "6px 16px", border: `1px solid ${NEON_PINK}60`, borderRadius: 100, background: `${NEON_PINK}0D` }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: NEON_PINK, boxShadow: `0 0 8px ${NEON_PINK}`, display: "inline-block" }} />
            <span style={{ fontFamily: SANS, fontSize: 12, color: NEON_PINK, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>AI-Powered IEP Tracking</span>
          </div>

          <h1 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(42px, 7vw, 88px)", lineHeight: 1.1, color: "#E8E8FF", marginBottom: 24, letterSpacing: "-0.02em" }}>
            Special Ed Teams{" "}
            <span style={{
              color: NEON_PINK,
              textShadow: `0 0 20px ${NEON_PINK}, 0 0 40px ${NEON_PINK}80, 0 0 80px ${NEON_PINK}40`,
              fontStyle: "italic",
            }}>
              Unlocked
            </span>
          </h1>

          <p style={{ fontFamily: SANS, fontSize: "clamp(15px, 2vw, 19px)", color: "#7070A0", lineHeight: 1.8, maxWidth: 580, margin: "0 auto 40px" }}>
            Track IEP goals, log 9+ data types, and generate AI progress notes in seconds. Save 3+ hours daily — so your team can focus on students, not paperwork.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              style={{
                background: NEON_GREEN,
                color: "#080810",
                border: "none",
                borderRadius: 8,
                padding: "14px 36px",
                fontFamily: SANS,
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
                boxShadow: `0 0 20px ${NEON_GREEN}88, 0 0 60px ${NEON_GREEN}33`,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.target as HTMLButtonElement).style.boxShadow = `0 0 30px ${NEON_GREEN}CC, 0 0 80px ${NEON_GREEN}55`;
                (e.target as HTMLButtonElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.target as HTMLButtonElement).style.boxShadow = `0 0 20px ${NEON_GREEN}88, 0 0 60px ${NEON_GREEN}33`;
                (e.target as HTMLButtonElement).style.transform = "translateY(0)";
              }}
            >
              Start Free Trial
            </button>
            <button
              style={{
                background: "transparent",
                color: CYAN,
                border: `1px solid ${CYAN}60`,
                borderRadius: 8,
                padding: "14px 36px",
                fontFamily: SANS,
                fontWeight: 600,
                fontSize: 16,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.target as HTMLButtonElement).style.borderColor = CYAN;
                (e.target as HTMLButtonElement).style.boxShadow = `0 0 15px ${CYAN}44`;
              }}
              onMouseLeave={e => {
                (e.target as HTMLButtonElement).style.borderColor = `${CYAN}60`;
                (e.target as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} style={{ padding: "60px 24px", borderTop: `1px solid ${NEON_PINK}20`, borderBottom: `1px solid ${NEON_PINK}20` }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 40 }}>
          {[
            { val: count1, suffix: "%", label: "Reduction in admin time" , color: NEON_PINK },
            { val: count2, suffix: "+", label: "Data types supported", color: CYAN },
            { val: count3, suffix: "+", label: "Schools trust AbleSpace", color: NEON_GREEN },
          ].map(({ val, suffix, label, color }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: "clamp(48px, 6vw, 72px)", color, textShadow: `0 0 20px ${color}88`, lineHeight: 1 }}>
                {val}{suffix}
              </div>
              <div style={{ fontFamily: SANS, fontSize: 14, color: "#50507A", marginTop: 8, letterSpacing: "0.05em" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(30px, 4vw, 52px)", color: "#E0E0F0", marginBottom: 16, fontStyle: "italic" }}>
              Everything your team needs
            </h2>
            <p style={{ fontFamily: SANS, color: "#60608A", fontSize: 16 }}>Powerful tools built for special educators</p>
          </div>
          <div
            ref={cards.ref}
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
              opacity: cards.vis ? 1 : 0,
              transform: cards.vis ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <NeonCard accent={NEON_PINK} icon="🎯" title="IEP Goal Tracking" desc="Set measurable goals, log progress across 9+ data types, and visualize growth over time. Every trial, every session, perfectly captured." />
            <NeonCard accent={CYAN} icon="🤖" title="AI Progress Notes" desc="Generate IDEA-compliant progress notes in one click. Our AI understands special ed language, saving your team hours every reporting cycle." />
            <NeonCard accent={NEON_GREEN} icon="🔒" title="HIPAA & FERPA Secure" desc="Enterprise-grade encryption, role-based access, and audit logs ensure student data stays protected and compliant at every level." />
            <NeonCard accent={NEON_PINK} icon="📊" title="Real-Time Dashboards" desc="See every student's IEP status at a glance. Filter by caseload, service type, or goal area. Built for busy specialists and administrators alike." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={cta.ref}
        style={{
          padding: "100px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          opacity: cta.vis ? 1 : 0,
          transform: cta.vis ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${NEON_PINK}12 0%, transparent 60%)`, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", padding: "2px 20px", border: `1px solid ${NEON_GREEN}60`, borderRadius: 4, marginBottom: 24, background: `${NEON_GREEN}0D` }}>
            <span style={{ fontFamily: SANS, fontSize: 11, color: NEON_GREEN, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700 }}>Ready to upgrade?</span>
          </div>
          <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(32px, 5vw, 64px)", color: "#E8E8FF", marginBottom: 20, fontStyle: "italic" }}>
            Power up your IEP workflow
          </h2>
          <p style={{ fontFamily: SANS, color: "#70709A", fontSize: 17, maxWidth: 500, margin: "0 auto 40px" }}>
            Join 300+ schools already saving hours each week. Setup takes under 10 minutes.
          </p>
          <button
            style={{
              background: NEON_GREEN,
              color: "#080810",
              border: "none",
              borderRadius: 8,
              padding: "16px 48px",
              fontFamily: SANS,
              fontWeight: 800,
              fontSize: 17,
              cursor: "pointer",
              boxShadow: `0 0 30px ${NEON_GREEN}99, 0 0 80px ${NEON_GREEN}44`,
              letterSpacing: "0.02em",
            }}
          >
            Get Started Free →
          </button>
        </div>
      </section>
    </div>
  );
}
