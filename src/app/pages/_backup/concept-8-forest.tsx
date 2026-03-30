import React, { useState, useEffect, useRef } from "react";

const SANS = "'DM Sans', system-ui, sans-serif";
const SERIF = "'Instrument Serif', serif";

const BG = "#F4F8F4";
const DARK_GREEN = "#2D6A4F";
const MED_GREEN = "#52B788";
const LIGHT_GREEN = "#95D5B2";
const PALE_GREEN = "#B7E4C7";
const ICON_BG = "#E8F5E9";
const TERRACOTTA = "#E76F51";
const TEXT = "#1A2E1F";
const MUTED = "#5A7A60";
const CTA_BG = "#1B4332";

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

function LeafBlob({ top, left, size, color, rotate = 0 }: { top: string; left: string; size: number; color: string; rotate?: number }) {
  return (
    <svg
      style={{ position: "absolute", top, left, width: size, height: size, opacity: 0.18, pointerEvents: "none", transform: `rotate(${rotate}deg)` }}
      viewBox="0 0 100 100"
    >
      <path d="M50 5 C75 5, 95 25, 95 50 C95 75, 75 95, 50 95 C25 95, 5 75, 5 50 C5 25, 25 5, 50 5 Z" fill={color} />
      <path d="M50 10 Q80 30, 70 60 Q60 85, 35 80 Q10 70, 15 45 Q20 15, 50 10 Z" fill={color} opacity="0.5" />
    </svg>
  );
}

function GrowthBar({ label, value, color }: { label: string; value: number; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true;
        setTimeout(() => setWidth(value), 200);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontFamily: SANS, fontSize: 13, color: MUTED }}>
        <span>{label}</span>
        <span style={{ fontWeight: 700, color: DARK_GREEN }}>{value}%</span>
      </div>
      <div style={{ height: 8, background: ICON_BG, borderRadius: 100, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${width}%`, background: color, borderRadius: 100, transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)" }} />
      </div>
    </div>
  );
}

function ForestCard({ icon, title, desc, delay = 0 }: { icon: string; title: string; desc: string; delay?: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#FFFFFF" : "#FAFDF9",
        border: `1px solid ${hovered ? MED_GREEN : PALE_GREEN}`,
        borderRadius: 16,
        padding: "32px 28px",
        transition: "all 0.3s ease",
        boxShadow: hovered ? `0 12px 40px rgba(82,183,136,0.15), 0 2px 8px rgba(0,0,0,0.04)` : "0 2px 12px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        flex: 1,
        minWidth: 0,
      }}
    >
      <div style={{
        width: 52, height: 52, borderRadius: "50%", background: ICON_BG,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 24, marginBottom: 20,
        border: `1px solid ${PALE_GREEN}`,
      }}>
        {icon}
      </div>
      <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 17, color: TEXT, marginBottom: 10 }}>{title}</div>
      <div style={{ fontFamily: SANS, fontSize: 14, color: MUTED, lineHeight: 1.75 }}>{desc}</div>
    </div>
  );
}

export function Concept8Forest() {
  const hero = useReveal(0.05);
  const cards = useReveal(0.1);
  const growth = useReveal(0.1);
  const statsSection = useReveal(0.1);
  const cta = useReveal(0.1);

  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: SANS, color: TEXT, overflowX: "hidden" }}>

      {/* HERO */}
      <section style={{ position: "relative", paddingTop: 120, paddingBottom: 100, overflow: "hidden" }}>
        {/* Organic blob decorations */}
        <LeafBlob top="-60px" left="-80px" size={360} color={DARK_GREEN} rotate={20} />
        <LeafBlob top="30%" left="70%" size={280} color={MED_GREEN} rotate={-15} />
        <LeafBlob top="60%" left="5%" size={200} color={LIGHT_GREEN} rotate={45} />
        <LeafBlob top="-20px" left="80%" size={180} color={PALE_GREEN} rotate={30} />

        <div
          ref={hero.ref}
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            opacity: hero.vis ? 1 : 0,
            transform: hero.vis ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: ICON_BG, border: `1px solid ${PALE_GREEN}`, borderRadius: 100, padding: "6px 16px", marginBottom: 28 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: MED_GREEN, display: "inline-block" }} />
              <span style={{ fontFamily: SANS, fontSize: 12, color: DARK_GREEN, fontWeight: 600, letterSpacing: "0.1em" }}>HIPAA · FERPA Compliant</span>
            </div>

            <h1 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.15, color: TEXT, marginBottom: 24, letterSpacing: "-0.01em" }}>
              Help students{" "}
              <span style={{ color: DARK_GREEN, fontStyle: "italic" }}>grow</span>{" "}
              with AbleSpace
            </h1>

            <p style={{ fontFamily: SANS, fontSize: 17, color: MUTED, lineHeight: 1.8, marginBottom: 36, maxWidth: 460 }}>
              An IEP tracking platform built around the natural rhythms of special education. Track goals, collaborate with your team, and let AI handle the paperwork.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button
                style={{
                  background: DARK_GREEN,
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 10,
                  padding: "14px 36px",
                  fontFamily: SANS,
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = "#245C42"; (e.target as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = DARK_GREEN; (e.target as HTMLButtonElement).style.transform = "translateY(0)"; }}
              >
                Start Free Trial
              </button>
              <button
                style={{
                  background: "transparent",
                  color: DARK_GREEN,
                  border: `1.5px solid ${MED_GREEN}`,
                  borderRadius: 10,
                  padding: "14px 36px",
                  fontFamily: SANS,
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right side: growth chart visual */}
          <div style={{ background: "white", borderRadius: 20, padding: 36, boxShadow: `0 8px 48px rgba(45,106,79,0.1), 0 2px 8px rgba(0,0,0,0.04)`, border: `1px solid ${PALE_GREEN}` }}>
            <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 16, color: TEXT, marginBottom: 6 }}>Student Progress Overview</div>
            <div style={{ fontFamily: SANS, fontSize: 13, color: MUTED, marginBottom: 28 }}>IEP Goal Achievement — Spring Semester</div>
            <GrowthBar label="Reading Comprehension" value={78} color={MED_GREEN} />
            <GrowthBar label="Math Problem Solving" value={65} color={DARK_GREEN} />
            <GrowthBar label="Social Communication" value={88} color={LIGHT_GREEN} />
            <GrowthBar label="Fine Motor Skills" value={72} color={TERRACOTTA} />
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${PALE_GREEN}`, display: "flex", justifyContent: "space-between" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 28, color: MED_GREEN }}>24</div>
                <div style={{ fontFamily: SANS, fontSize: 11, color: MUTED }}>Active Goals</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 28, color: DARK_GREEN }}>76%</div>
                <div style={{ fontFamily: SANS, fontSize: 11, color: MUTED }}>On Track</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 28, color: TERRACOTTA }}>8</div>
                <div style={{ fontFamily: SANS, fontSize: 11, color: MUTED }}>This Week</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        ref={statsSection.ref}
        style={{
          background: "white",
          padding: "56px 24px",
          borderTop: `1px solid ${PALE_GREEN}`,
          borderBottom: `1px solid ${PALE_GREEN}`,
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: 32,
            opacity: statsSection.vis ? 1 : 0,
            transform: statsSection.vis ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {[
            { val: "90%", label: "Admin time saved", color: DARK_GREEN },
            { val: "9+", label: "Data types", color: MED_GREEN },
            { val: "3 hrs", label: "Saved per day", color: TERRACOTTA },
            { val: "300+", label: "Schools using AbleSpace", color: DARK_GREEN },
          ].map(({ val, label, color }) => (
            <div key={label} style={{ textAlign: "center", padding: "16px 24px", background: ICON_BG, borderRadius: 14, border: `1px solid ${PALE_GREEN}`, minWidth: 140 }}>
              <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 40, color, lineHeight: 1 }}>{val}</div>
              <div style={{ fontFamily: SANS, fontSize: 13, color: MUTED, marginTop: 8 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(28px, 4vw, 50px)", color: TEXT, marginBottom: 16, fontStyle: "italic" }}>
              Everything in one{" "}
              <span style={{ color: DARK_GREEN }}>rooted</span>{" "}
              platform
            </h2>
            <p style={{ fontFamily: SANS, fontSize: 16, color: MUTED, maxWidth: 460, margin: "0 auto" }}>
              Designed for the natural workflow of special education teams.
            </p>
          </div>
          <div
            ref={cards.ref}
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
              opacity: cards.vis ? 1 : 0,
              transform: cards.vis ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <ForestCard icon="🎯" title="IEP Goal Tracking" desc="Log progress across 9+ data types — frequency, duration, accuracy, and more. Visual growth charts make student progress instantly clear." />
            <ForestCard icon="🤖" title="AI Progress Notes" desc="Generate IDEA-compliant progress notes in one click. Our AI learns your team's voice and produces polished reports instantly." />
            <ForestCard icon="👥" title="Team Collaboration" desc="Speech therapists, OTs, and teachers work seamlessly together. Shared caseloads, real-time updates, and secure messaging built-in." />
            <ForestCard icon="📋" title="Scheduling & Sessions" desc="Rotating schedules, session logs, and service tracking all in one place. Never lose track of minutes delivered or goals addressed." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={cta.ref}
        style={{
          background: CTA_BG,
          padding: "100px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          opacity: cta.vis ? 1 : 0,
          transition: "opacity 0.9s ease",
        }}
      >
        {/* Subtle leaf shapes in CTA */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: `${MED_GREEN}15`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -40, left: -40, width: 180, height: 180, borderRadius: "50%", background: `${LIGHT_GREEN}10`, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", background: `${TERRACOTTA}20`, border: `1px solid ${TERRACOTTA}50`, borderRadius: 100, padding: "6px 18px", marginBottom: 28 }}>
            <span style={{ fontFamily: SANS, fontSize: 12, color: TERRACOTTA, fontWeight: 600, letterSpacing: "0.12em" }}>JOIN 300+ SCHOOLS</span>
          </div>
          <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(30px, 4.5vw, 60px)", color: "#FFFFFF", marginBottom: 20, fontStyle: "italic" }}>
            Nurture student growth, together
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 17, color: `${LIGHT_GREEN}CC`, maxWidth: 480, margin: "0 auto 44px", lineHeight: 1.8 }}>
            AbleSpace grows with your team. HIPAA and FERPA compliant, setup in under 10 minutes, no contracts required.
          </p>
          <button
            style={{
              background: TERRACOTTA,
              color: "#FFFFFF",
              border: "none",
              borderRadius: 12,
              padding: "16px 48px",
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: 17,
              cursor: "pointer",
              boxShadow: `0 8px 32px ${TERRACOTTA}55`,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => { (e.target as HTMLButtonElement).style.transform = "translateY(-3px)"; (e.target as HTMLButtonElement).style.boxShadow = `0 12px 40px ${TERRACOTTA}77`; }}
            onMouseLeave={e => { (e.target as HTMLButtonElement).style.transform = "translateY(0)"; (e.target as HTMLButtonElement).style.boxShadow = `0 8px 32px ${TERRACOTTA}55`; }}
          >
            Start Free — No Credit Card
          </button>
        </div>
      </section>
    </div>
  );
}
