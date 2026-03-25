import React, { useEffect, useRef, useState } from "react";
import { useIsMobile } from "./shared";
import schoolsDistrictsImg from "../../assets/schools-districts.svg";

/* ── Design tokens ────────────────────────────────────────── */
const SERIF = "'Instrument Serif', serif";
const SANS  = "'DM Sans', system-ui, sans-serif";
const DARK  = "#1A1A1E";
const BLUE  = "#53AEF3";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";
const TINT  = "#EFEFED";

/* ── Feature list ─────────────────────────────────────────── */
const FEATURES_LEFT  = ["Admin Portal", "Staff & Admin Training", "Advanced Collaboration"];
const FEATURES_RIGHT = ["IEP System Integrations", "Single Sign-On", "Dedicated Success Manager"];

/* ═══════════════════════════════════════════════════════════ */
export function SchoolsDistrictsSection() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [leftVis,  setLeftVis]  = useState(false);
  const [rightVis, setRightVis] = useState(false);
  const triggered = useRef(false);

  const [hovPrimary,   setHovPrimary]   = useState(false);
  const [hovSecondary, setHovSecondary] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          setLeftVis(true);
          setTimeout(() => setRightVis(true), 160);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const reveal = (vis: boolean): React.CSSProperties => ({
    opacity  : vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(28px)",
    transition: "opacity 650ms cubic-bezier(0.16,1,0.3,1), transform 650ms cubic-bezier(0.16,1,0.3,1)",
  });

  return (
    <section style={{ background: TINT, padding: isMobile ? "60px 0" : "100px 0" }}>
      <div
        ref={sectionRef}
        style={{
          maxWidth: 1200, margin: "0 auto",
          padding: isMobile ? "0 20px" : "0 80px", boxSizing: "border-box",
          display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "stretch" : "center", gap: isMobile ? 40 : 80,
        }}
      >

        {/* ══ LEFT: Visual placeholder (flipped for layout variety) ══ */}
        <div
          style={{
            flex: "1 1 0", minWidth: 0,
            position: "relative",
            ...reveal(leftVis),
          }}
        >
          {/* Stacked shadow layers behind the main card */}
          <div style={{
            position: "absolute",
            top: 12, right: 12, left: -12,
            height: "calc(100% - 12px)",
            background: "rgba(0,0,0,0.04)",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: 28,
          }} />
          <div style={{
            position: "absolute",
            top: 6, right: 6, left: -6,
            height: "calc(100% - 6px)",
            background: "rgba(0,0,0,0.03)",
            border: "1px solid rgba(0,0,0,0.05)",
            borderRadius: 26,
          }} />

          {/* Main card */}
          <div style={{
            position: "relative",
            background: "#FFFFFF",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: 24,
            boxShadow: "0 12px 48px rgba(0,0,0,0.09), 0 3px 14px rgba(0,0,0,0.05)",
            overflow: "hidden",
          }}>
            {/* Browser chrome bar */}
            <div style={{
              height: 40,
              background: BG,
              borderBottom: "1px solid rgba(0,0,0,0.07)",
              display: "flex",
              alignItems: "center",
              position: "relative",
              flexShrink: 0,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginLeft: 14 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(0,0,0,0.12)" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(0,0,0,0.10)" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(0,0,0,0.09)" }} />
              </div>
              <div style={{
                position: "absolute", left: "50%", transform: "translateX(-50%)",
                background: "rgba(0,0,0,0.06)",
                borderRadius: 9999, padding: "4px 14px",
                fontFamily: SANS, fontSize: 11, color: MUTED,
              }}>
                app.ablespace.io/district
              </div>
            </div>

            {/* SVG illustration */}
            <div style={{ lineHeight: 0 }}>
              <img
                src={schoolsDistrictsImg}
                alt="Schools and Districts dashboard"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* ══ RIGHT: Content ══════════════════════════════════ */}
        <div style={{ flex: "1 1 0", minWidth: 0, ...reveal(rightVis) }}>

          {/* Label */}
          <p style={{
            fontFamily: SANS, fontWeight: 500, fontSize: 12,
            color: BLUE, letterSpacing: "2px", textTransform: "uppercase",
            margin: "0 0 16px",
          }}>
            For Schools &amp; Districts
          </p>

          {/* Headline */}
          <h2 style={{
            fontFamily: SERIF, fontWeight: 400, fontSize: isMobile ? 34 : 48,
            lineHeight: 1.1, color: DARK, margin: "0 0 18px",
          }}>
            Roll out AbleSpace across your entire school or district
          </h2>

          {/* Subtext */}
          <p style={{
            fontFamily: SANS, fontWeight: 300, fontSize: 18,
            color: MUTED, margin: "0 0 36px", lineHeight: 1.6,
          }}>
            Give your team the tools they need to collaborate, track
            progress, and manage IEPs at scale — all in one place.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 44 }}>
            <a
              href="#"
              onMouseEnter={() => setHovPrimary(true)}
              onMouseLeave={() => setHovPrimary(false)}
              style={{
                display: "inline-flex", alignItems: "center",
                height: 44, padding: "0 24px",
                background: hovPrimary ? "#3D9FE8" : BLUE,
                color: "#FFFFFF",
                fontFamily: SANS, fontWeight: 500, fontSize: 14,
                borderRadius: 12, textDecoration: "none",
                border: "none", cursor: "pointer",
                transition: "background 0.18s, transform 0.15s",
                transform: hovPrimary ? "translateY(-1px)" : "none",
                whiteSpace: "nowrap",
              }}
            >
              Learn More
            </a>
            <a
              href="#"
              onMouseEnter={() => setHovSecondary(true)}
              onMouseLeave={() => setHovSecondary(false)}
              style={{
                display: "inline-flex", alignItems: "center",
                height: 44, padding: "0 24px",
                background: hovSecondary ? "rgba(0,0,0,0.04)" : "transparent",
                color: DARK,
                fontFamily: SANS, fontWeight: 500, fontSize: 14,
                borderRadius: 12, textDecoration: "none",
                border: "1.5px solid rgba(0,0,0,0.18)", cursor: "pointer",
                transition: "background 0.18s, border-color 0.18s",
                whiteSpace: "nowrap",
              }}
            >
              Contact Us
            </a>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(0,0,0,0.08)", marginBottom: 28 }} />

          {/* Feature list — two columns */}
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ flex: "1 1 0", display: "flex", flexDirection: "column", gap: 14 }}>
              {FEATURES_LEFT.map(f => (
                <FeatureRow key={f} label={f} />
              ))}
            </div>
            <div style={{ flex: "1 1 0", display: "flex", flexDirection: "column", gap: 14 }}>
              {FEATURES_RIGHT.map(f => (
                <FeatureRow key={f} label={f} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── Feature row with check icon ──────────────────────────── */
function FeatureRow({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{
        width: 20, height: 20, flexShrink: 0,
        background: "rgba(83,174,243,0.10)",
        border: "1px solid rgba(83,174,243,0.20)",
        borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 5l2.5 2.5L8 3"
            stroke={BLUE} strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span style={{
        fontFamily: SANS, fontWeight: 400, fontSize: 15,
        color: DARK, lineHeight: 1.4,
      }}>
        {label}
      </span>
    </div>
  );
}

/* ── District placeholder icon ────────────────────────────── */
function DistrictIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="10" width="8" height="12" rx="1.5" stroke={BLUE} strokeWidth="1.5" />
      <rect x="14" y="10" width="8" height="12" rx="1.5" stroke={BLUE} strokeWidth="1.5" />
      <path d="M8 16h8" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 10V7a2 2 0 0 1 4 0v3" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="4" r="1.5" stroke={BLUE} strokeWidth="1.3" />
    </svg>
  );
}
