import React, { useEffect, useRef, useState } from "react";
import { useIsMobile } from "./shared";

/* ── Design tokens (mirrors existing page) ────────────────── */
const SERIF = "'Source Sans 3', sans-serif";
const SANS  = "'DM Sans', system-ui, sans-serif";
const DARK  = "#1A1A1E";
const BLUE  = "#53AEF3";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";
const TINT  = "#EFEFED"; // matches tab-bar shade in FeaturesSection

/* ── Content ──────────────────────────────────────────────── */
const PROBLEMS = [
  "Data scattered across multiple tools",
  "Manual entry takes hours every week",
  "Missed deadlines and compliance risks",
  "Poor coordination across teams",
  "Reporting during IEP meetings is stressful",
];

const SOLUTIONS = [
  "Capture and log data in seconds",
  "Automatically organize goals and progress",
  "Track services, accommodations, and time",
  "Generate reports instantly",
  "Stay aligned across your entire team",
];

/* Mini cards that float chaotically in the left panel */
const CHAOS_CARDS = [
  { label: "IEP deadline missed",    sub: "3 days overdue"    },
  { label: "Goal data not logged",   sub: "Missing entry"     },
  { label: "Service log incomplete", sub: "Action needed"     },
  { label: "Team sync overdue",      sub: "No recent update"  },
  { label: "Report not ready",       sub: "Meeting today"     },
];

/* Absolute position + rotation for each chaos card */
const CHAOS_POS = [
  { top: 6,   left: 10,  rotate: "-2.5deg", z: 3 },
  { top: 50,  left: 55,  rotate:  "1.5deg", z: 5 },
  { top: 96,  left: 12,  rotate: "-1deg",   z: 2 },
  { top: 18,  left: 185, rotate:  "2deg",   z: 4 },
  { top: 122, left: 138, rotate: "-1.5deg", z: 6 },
];

/* ═══════════════════════════════════════════════════════════ */
export function ProblemSolutionSection() {
  const isMobile = useIsMobile();
  const headerRef  = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);
  const [headerVis, setHeaderVis] = useState(false);
  const [leftVis,   setLeftVis]   = useState(false);
  const [rightVis,  setRightVis]  = useState(false);

  useReveal(headerRef, () => setHeaderVis(true));
  useReveal(cardsRef, () => {
    setLeftVis(true);
    setTimeout(() => setRightVis(true), 140);
  });

  const reveal = (vis: boolean, delay = 0): React.CSSProperties => ({
    opacity  : vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 650ms cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                 transform 650ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <section style={{ background: BG, padding: isMobile ? "60px 0" : "100px 0" }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: isMobile ? "0 20px" : "0 80px", boxSizing: "border-box",
      }}>

        {/* ── Section header ────────────────────────────────── */}
        <div
          ref={headerRef}
          style={{ textAlign: "center", marginBottom: 52, ...reveal(headerVis) }}
        >
          <p style={{
            fontFamily: SANS, fontWeight: 500, fontSize: 12,
            color: BLUE, letterSpacing: "2px", textTransform: "uppercase",
            margin: "0 0 14px",
          }}>
            Why AbleSpace
          </p>
          <h2 style={{
            fontFamily: SERIF, fontWeight: 600, fontSize: isMobile ? 34 : 48,
            lineHeight: 1.1, color: DARK, margin: "0 0 14px",
          }}>
            There's a better way to manage IEPs
          </h2>
          <p style={{
            fontFamily: SANS, fontWeight: 300, fontSize: 17,
            color: MUTED, maxWidth: 440, margin: "0 auto", lineHeight: 1.6,
          }}>
            See exactly what changes when you move from the old way to AbleSpace.
          </p>
        </div>

        {/* ── Two-column comparison ─────────────────────────── */}
        <div
          ref={cardsRef}
          style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 14, alignItems: "stretch" }}
        >

          {/* ══ LEFT: The old way ══════════════════════════════ */}
          <div style={{
            flex: "1 1 0", minWidth: 0,
            background: TINT,
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 28,
            padding: "40px",
            boxSizing: "border-box",
            ...reveal(leftVis),
          }}>

            {/* Card label */}
            <p style={{
              fontFamily: SANS, fontWeight: 600, fontSize: 12,
              color: MUTED, letterSpacing: "1.5px", textTransform: "uppercase",
              margin: "0 0 10px",
            }}>
              The old way
            </p>

            {/* Headline */}
            <h3 style={{
              fontFamily: SERIF, fontWeight: 600, fontSize: 28,
              lineHeight: 1.2, color: DARK, margin: "0 0 10px",
            }}>
              Managing IEPs across disconnected tools
            </h3>

            {/* Subtext */}
            <p style={{
              fontFamily: SANS, fontWeight: 300, fontSize: 14,
              color: MUTED, margin: "0 0 32px", lineHeight: 1.65,
            }}>
              Spreadsheets, sticky notes, and separate portals create
              confusion and wasted time.
            </p>

            {/* Chaos visual ─ overlapping mini cards */}
            <div style={{
              position: "relative",
              height: 200,
              marginBottom: 32,
              overflow: "hidden",
            }}>
              {CHAOS_CARDS.map((card, i) => {
                const p = CHAOS_POS[i];
                return (
                  <div
                    key={card.label}
                    style={{
                      position: "absolute",
                      top: p.top, left: p.left,
                      width: 208,
                      transform: `rotate(${p.rotate})`,
                      zIndex: p.z,
                      background: "#FFFFFF",
                      border: "1px solid rgba(0,0,0,0.09)",
                      borderRadius: 10,
                      padding: "10px 14px",
                      display: "flex", alignItems: "center", gap: 10,
                      boxSizing: "border-box",
                    }}
                  >
                    {/* Icon */}
                    <div style={{
                      width: 26, height: 26, flexShrink: 0,
                      background: "rgba(0,0,0,0.05)",
                      borderRadius: 7,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <WarningIcon />
                    </div>
                    {/* Text */}
                    <div style={{ minWidth: 0 }}>
                      <div style={{
                        fontFamily: SANS, fontWeight: 500, fontSize: 12,
                        color: DARK, lineHeight: 1.25,
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                      }}>
                        {card.label}
                      </div>
                      <div style={{
                        fontFamily: SANS, fontWeight: 400, fontSize: 11,
                        color: MUTED, marginTop: 2, lineHeight: 1.2,
                      }}>
                        {card.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Problem bullets */}
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {PROBLEMS.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 18, height: 18, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <XIcon />
                  </div>
                  <span style={{
                    fontFamily: SANS, fontWeight: 400, fontSize: 14,
                    color: MUTED, lineHeight: 1.4,
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ══ RIGHT: The AbleSpace way ═══════════════════════ */}
          <div style={{
            flex: "1 1 0", minWidth: 0,
            background: "#FFFFFF",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 28,
            padding: "40px",
            boxSizing: "border-box",
            ...reveal(rightVis),
          }}>

            {/* Card label */}
            <p style={{
              fontFamily: SANS, fontWeight: 600, fontSize: 12,
              color: BLUE, letterSpacing: "1.5px", textTransform: "uppercase",
              margin: "0 0 10px",
            }}>
              The AbleSpace way
            </p>

            {/* Headline */}
            <h3 style={{
              fontFamily: SERIF, fontWeight: 600, fontSize: 28,
              lineHeight: 1.2, color: DARK, margin: "0 0 10px",
            }}>
              Everything in one place, powered by AI
            </h3>

            {/* Subtext */}
            <p style={{
              fontFamily: SANS, fontWeight: 300, fontSize: 14,
              color: MUTED, margin: "0 0 32px", lineHeight: 1.65,
            }}>
              Track, manage, and report on every IEP — without the chaos.
            </p>

            {/* Dashboard placeholder */}
            <div style={{
              background: TINT,
              border: "1.5px dashed rgba(0,0,0,0.13)",
              borderRadius: 16,
              height: 200,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginBottom: 32,
            }}>
              <div style={{
                width: 44, height: 44,
                background: "rgba(83,174,243,0.10)",
                border: "1px solid rgba(83,174,243,0.18)",
                borderRadius: 12,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <DashboardIcon />
              </div>
              <span style={{
                fontFamily: SANS, fontWeight: 500, fontSize: 13,
                color: "#AEAEB2",
              }}>
                Dashboard Preview
              </span>
            </div>

            {/* Solution bullets */}
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {SOLUTIONS.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 18, height: 18, flexShrink: 0,
                    background: "rgba(83,174,243,0.10)",
                    border: "1px solid rgba(83,174,243,0.18)",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <CheckIcon />
                  </div>
                  <span style={{
                    fontFamily: SANS, fontWeight: 400, fontSize: 14,
                    color: DARK, lineHeight: 1.4,
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Scroll-reveal hook ───────────────────────────────────── */
function useReveal(
  ref: React.RefObject<HTMLElement | null>,
  onReveal: () => void,
  delay = 0
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(onReveal, delay);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
}

/* ── Icons ────────────────────────────────────────────────── */

/** Stacked-card chaos: small warning triangle */
function WarningIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 2L13 12H1L7 2z"
        stroke="rgba(0,0,0,0.35)" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M7 6.5V9" stroke="rgba(0,0,0,0.35)" strokeWidth="1.2"
        strokeLinecap="round" />
      <circle cx="7" cy="10.5" r="0.6" fill="rgba(0,0,0,0.35)" />
    </svg>
  );
}

/** Problem bullet: X mark in muted gray */
function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M4 4l6 6M10 4l-6 6"
        stroke={MUTED} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Solution bullet: checkmark in blue */
function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2.5 2.5L8 3"
        stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Placeholder icon for dashboard block */
function DashboardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="2" width="18" height="13" rx="2"
        stroke={BLUE} strokeWidth="1.5" />
      <path d="M6 17h10" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 15v2" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 9l3-3 2 2 3-4"
        stroke={BLUE} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
