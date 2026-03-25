import React, { useEffect, useRef, useState } from "react";
import { useIsMobile } from "./shared";

import imgDataTracking   from "../../assets/features/data-tracking.png";
import imgServiceTime    from "../../assets/features/service-time.png";
import imgReports        from "../../assets/features/reports.png";
import imgAccommodations from "../../assets/features/accommodations.png";
import imgScheduling     from "../../assets/features/scheduling.png";

const TAB_IMAGES = [
  imgDataTracking,
  imgServiceTime,
  imgReports,
  imgAccommodations,
  imgScheduling,
];

/* ── tokens ─────────────────────────────────────────────────── */
const BG   = "#F8F8F5";
const BLUE = "#53AEF3";
const DARK = "#1A1A1E";
const MUTED= "#6E6E73";
const SERIF= "'Instrument Serif', serif";
const SANS = "'DM Sans', system-ui, sans-serif";

/* ── tab data ────────────────────────────────────────────────── */
const TABS = [
  { label: "Data Tracking" },
  { label: "Service Time"  },
  { label: "Reports"       },
  { label: "Accommodations"},
  { label: "Scheduling"    },
];

const PANELS = [
  {
    num: "01",
    headline: ["Track every goal.", "With one tap."],
    body: "Collect data with a single click. AI organizes it automatically — nothing slips through the cracks.",
    bullets: ["9+ data collection types", "Phases, Labels, Goal History", "Real-time accuracy per student"],
  },
  {
    num: "02",
    headline: ["Auto-track sessions.", "Zero extra work."],
    body: "Smart adjustments for attendance. Customize service types and get instant billing-ready reports.",
    bullets: ["Smart attendance detection", "Customizable service types", "Instant billing-ready reports"],
  },
  {
    num: "03",
    headline: ["20+ reports.", "Always ready."],
    body: "Beautiful auto-generated graphs with filters and custom views — ready for your next IEP meeting, no extra work.",
    bullets: ["Auto-generated after every session", "Custom filters and date ranges", "Export-ready for IEP meetings"],
  },
  {
    num: "04",
    headline: ["Every accommodation.", "Tracked and given."],
    body: "One-tap tracking for given or refused accommodations — linked directly to each student's IEP with full history.",
    bullets: ["One-tap given/refused tracking", "Linked to student IEP automatically", "Full accommodation history log"],
  },
  {
    num: "05",
    headline: ["Plan sessions.", "Bill in seconds."],
    body: "Auto-generate Medicaid billing notes after every session. Calendar sync for all session types — saves 3+ hours weekly.",
    bullets: ["Auto-generated Medicaid billing notes", "Calendar sync for all session types", "Saves 3+ hours per week per provider"],
  },
];

/* ════════════════════════════════════════════════════════════ */
export function FeaturesSection() {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab]     = useState(0);
  const [displayedTab, setDisplayedTab] = useState(0);
  const [phaseOut, setPhaseOut]       = useState(false);
  const [animKey, setAnimKey]         = useState(0);
  const transitioning                 = useRef(false);

  /* scroll-reveal refs */
  const headerRef = useRef<HTMLDivElement>(null);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const panelRef  = useRef<HTMLDivElement>(null);
  const [headerVis, setHeaderVis] = useState(false);
  const [tabBarVis, setTabBarVis] = useState(false);
  const [panelVis,  setPanelVis]  = useState(false);

  useReveal(headerRef, () => setHeaderVis(true));
  useReveal(tabBarRef, () => setTabBarVis(true), 200);
  useReveal(panelRef,  () => setPanelVis(true),  350);

  const switchTab = (i: number) => {
    if (i === activeTab || transitioning.current) return;
    transitioning.current = true;
    setPhaseOut(true);
    setTimeout(() => {
      setDisplayedTab(i);
      setActiveTab(i);
      setAnimKey(k => k + 1);
      setPhaseOut(false);
      setTimeout(() => { transitioning.current = false; }, 280);
    }, 180);
  };

  const panelStyle: React.CSSProperties = {
    opacity   : phaseOut ? 0 : 1,
    transform : phaseOut ? "translateY(-12px)" : "translateY(0)",
    transition: phaseOut
      ? "opacity 180ms ease-in, transform 180ms ease-in"
      : "opacity 280ms ease-out, transform 280ms ease-out",
  };

  const revealStyle = (vis: boolean, delay = 0): React.CSSProperties => ({
    opacity  : vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
  });

  return (
    <section style={{ backgroundColor: BG, padding: isMobile ? "60px 0" : "120px 0 100px", fontFamily: SANS }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px" : "0 80px", boxSizing: "border-box" }}>

        {/* ── Section header ── */}
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: 0, ...revealStyle(headerVis) }}>
          <p style={{
            fontFamily: SANS, fontWeight: 500, fontSize: 12,
            color: BLUE, letterSpacing: "2px", textTransform: "uppercase",
            marginBottom: 14,
          }}>
            Everything you need
          </p>
          <h2 style={{
            fontFamily: SERIF, fontWeight: 400, fontSize: isMobile ? 34 : 52,
            color: DARK, lineHeight: 1.1, margin: 0,
          }}>
            Powerful features built<br />for real classrooms.
          </h2>
          <p style={{
            fontFamily: SANS, fontWeight: 300, fontSize: 18,
            color: MUTED, maxWidth: 480, margin: "16px auto 56px", lineHeight: 1.6,
          }}>
            From IEP tracking to billing — every tool your team needs, without the chaos.
          </p>
        </div>

        {/* ── Tab bar ── */}
        <div ref={tabBarRef} style={{ display: "flex", justifyContent: "center", marginBottom: 48, ...revealStyle(tabBarVis, 200), overflowX: isMobile ? "auto" : "visible" }}>
          <div style={{
            background: "#EFEFED", borderRadius: 14, padding: 4,
            display: "inline-flex", gap: 2,
            flexShrink: 0,
          }}>
            {TABS.map((t, i) => (
              <button
                key={t.label}
                onClick={() => switchTab(i)}
                style={{
                  fontFamily: SANS, fontWeight: 500, fontSize: 14,
                  padding: "9px 20px", borderRadius: 10, cursor: "pointer",
                  border: "none", outline: "none",
                  background: activeTab === i ? "#FFFFFF" : "transparent",
                  color: activeTab === i ? DARK : MUTED,
                  boxShadow: activeTab === i ? "0 1px 4px rgba(0,0,0,0.10)" : "none",
                  transition: "all 200ms ease",
                  whiteSpace: "nowrap",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Feature panel ── */}
        <div ref={panelRef} style={{ ...revealStyle(panelVis, 350) }}>
          <div style={{ ...panelStyle }}>
            <div style={{
              background: "#FFFFFF",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 28,
              overflow: "hidden",
              minHeight: isMobile ? "auto" : 480,
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            }}>
              {/* LEFT — text */}
              <div style={{
                padding: isMobile ? "32px 24px" : "56px 48px",
                display: "flex", flexDirection: "column", justifyContent: "center",
                borderRight: isMobile ? "none" : "1px solid rgba(0,0,0,0.06)",
                borderBottom: isMobile ? "1px solid rgba(0,0,0,0.06)" : "none",
              }}>
                <div style={{
                  display: "inline-block",
                  fontFamily: SANS, fontWeight: 600, fontSize: 11,
                  color: BLUE, background: "rgba(83,174,243,0.10)",
                  padding: "3px 10px", borderRadius: 9999,
                  marginBottom: 20, width: "fit-content",
                }}>
                  {PANELS[displayedTab].num}
                </div>
                <h3 style={{
                  fontFamily: SERIF, fontWeight: 400, fontSize: 36,
                  color: DARK, lineHeight: 1.15, margin: "0 0 14px",
                }}>
                  {PANELS[displayedTab].headline[0]}<br />{PANELS[displayedTab].headline[1]}
                </h3>
                <p style={{
                  fontFamily: SANS, fontWeight: 300, fontSize: 16,
                  color: MUTED, lineHeight: 1.7,
                  maxWidth: 340, margin: "0 0 28px",
                }}>
                  {PANELS[displayedTab].body}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {PANELS[displayedTab].bullets.map(b => (
                    <div key={b} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: BLUE, flexShrink: 0 }} />
                      <span style={{ fontFamily: SANS, fontWeight: 400, fontSize: 14, color: "#3D3D3D" }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — illustration */}
              <div style={{
                background: BG,
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: 32, position: "relative", overflow: "hidden",
              }}>
                <img
                  key={displayedTab}
                  src={TAB_IMAGES[displayedTab]}
                  alt={TABS[displayedTab].label}
                  style={{
                    maxWidth: "100%",
                    maxHeight: 380,
                    objectFit: "contain",
                    borderRadius: 10,
                    opacity: phaseOut ? 0 : 1,
                    transform: phaseOut ? "translateY(-8px)" : "translateY(0)",
                    transition: phaseOut
                      ? "opacity 180ms ease-in, transform 180ms ease-in"
                      : "opacity 280ms ease-out, transform 280ms ease-out",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── Scroll-reveal hook (fires exactly once) ────────────────── */
function useReveal(ref: React.RefObject<HTMLElement | null>, cb: () => void, delay = 0) {
  const triggered = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !triggered.current) {
        triggered.current = true;
        setTimeout(cb, delay);
        obs.disconnect();
      }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
}

/* ════════════════════════════════════════════════════════════ */
/*  MOCKUP 1 — DATA TRACKING                                    */
/* ════════════════════════════════════════════════════════════ */
function MockupDataTracking() {
  const [count, setCount]   = useState(0);
  const [pills, setPills]   = useState([false, false, false]);

  useEffect(() => {
    let start: number | null = null;
    const dur = 1000;
    const raf = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 88));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    [0, 1, 2].forEach(i => setTimeout(() =>
      setPills(prev => { const n = [...prev]; n[i] = true; return n; }), 200 + i * 100));
  }, []);

  const phases = [
    { label: "On track", bg: "#E6F7EE", color: "#1A7A1A" },
    { label: "Behind",   bg: "#FFF3E0", color: "#B85C00" },
    { label: "Mastered", bg: "#EDE8F8", color: "#5A3F9A" },
  ];

  return (
    <div style={{ fontFamily: SANS }}>
      {/* Header */}
      <div style={{
        background: "#F5F5F5", height: 40,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 16px",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}>
        <span style={{ fontWeight: 500, fontSize: 13, color: DARK }}>← Take Data</span>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#0DB8A0", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontSize: 11, fontWeight: 600 }}>TL</span>
        </div>
      </div>

      {/* Two columns */}
      <div style={{ display: "flex" }}>
        {/* Goals list */}
        <div style={{ flex: 1, padding: 14, borderRight: "1px solid rgba(0,0,0,0.06)" }}>
          <p style={{ fontWeight: 600, fontSize: 12, color: DARK, marginBottom: 10 }}>Goals & Objectives</p>
          <div style={{ background: BG, borderRadius: 8, padding: 12, border: "1px solid rgba(0,0,0,0.06)" }}>
            <p style={{ fontWeight: 600, fontSize: 13, color: DARK, marginBottom: 4 }}>1. Communication</p>
            <p style={{ fontSize: 12, color: MUTED, marginBottom: 8 }}>Student will use words...</p>
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 8 }}>
              <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 4, background: "rgba(236,72,153,0.12)", color: "#BE185D" }}>Language</span>
              <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 4, background: "rgba(249,115,22,0.12)", color: "#C2410C" }}>Expressive Skills</span>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <AvatarChip name="Tom"   color="#22C55E" />
              <AvatarChip name="Olivia" color="#EC4899" />
            </div>
          </div>
        </div>

        {/* Accuracy */}
        <div style={{ width: 130, flexShrink: 0, padding: 14 }}>
          <p style={{ fontSize: 10, fontWeight: 500, color: MUTED, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 }}>Accuracy</p>
          <p style={{ fontFamily: SERIF, fontSize: 40, fontWeight: 400, color: DARK, lineHeight: 1, marginBottom: 14 }}>{count}%</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {phases.map((ph, i) => (
              <div key={ph.label} style={{
                opacity: pills[i] ? 1 : 0,
                transform: pills[i] ? "translateY(0)" : "translateY(6px)",
                transition: "opacity 250ms ease, transform 250ms ease",
              }}>
                <span style={{
                  display: "inline-block", fontSize: 12, fontWeight: 500,
                  color: ph.color, background: ph.bg,
                  padding: "4px 12px", borderRadius: 6,
                }}>{ph.label}</span>
              </div>
            ))}
            <span style={{ fontSize: 13, color: BLUE, fontWeight: 500, marginTop: 4, cursor: "pointer" }}>+ Create phases</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AvatarChip({ name, color }: { name: string; color: string }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      background: color + "18", padding: "2px 8px", borderRadius: 9999,
      fontSize: 11, fontWeight: 500, color,
    }}>
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: color, display: "inline-block" }} />
      {name}
    </span>
  );
}

/* ════════════════════════════════════════════════════════════ */
/*  MOCKUP 2 — SERVICE TIME                                     */
/* ════════════════════════════════════════════════════════════ */
function MockupServiceTime() {
  const [dropOpen,   setDropOpen]   = useState(false);
  const [checkDrawn, setCheckDrawn] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDropOpen(true), 400);
    const t2 = setTimeout(() => setCheckDrawn(true), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div style={{ fontFamily: SANS }}>
      <div style={{ padding: 16, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <p style={{ fontWeight: 600, fontSize: 14, color: DARK }}>Service Time</p>
      </div>

      {/* Student row */}
      <div style={{
        display: "flex", alignItems: "center", gap: 12,
        padding: "12px 16px", borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#0DB8A0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ color: "#fff", fontWeight: 600, fontSize: 13 }}>MJ</span>
        </div>
        <div style={{ flex: 1, height: 12, background: "rgba(0,0,0,0.07)", borderRadius: 6 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#E6F7EE", padding: "3px 8px", borderRadius: 9999 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }} />
          <span style={{ fontSize: 12, fontWeight: 500, color: "#15803D" }}>Present</span>
        </div>
      </div>

      {/* Info rows */}
      {[
        { icon: "⏱", label: "Time (mins)",  value: "30 mins", bold: true  },
        { icon: "📅", label: "Attendance",   value: "",        bold: false },
        { icon: "📋", label: "Service type", value: "",        bold: false },
      ].map((row, i) => (
        <div key={row.label} style={{
          display: "flex", alignItems: "center",
          padding: "10px 16px",
          borderBottom: "1px solid rgba(0,0,0,0.04)",
          gap: 10,
        }}>
          <span style={{ fontSize: 13 }}>{row.icon}</span>
          <span style={{ flex: 1, fontSize: 13, color: MUTED }}>{row.label}</span>
          <span style={{ fontSize: 13, fontWeight: row.bold ? 500 : 400, color: row.bold ? DARK : "rgba(0,0,0,0.22)" }}>
            {row.value || "—"}
          </span>
        </div>
      ))}

      {/* Dropdown */}
      <div style={{
        maxHeight: dropOpen ? 120 : 0,
        opacity: dropOpen ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 400ms cubic-bezier(0.16,1,0.3,1), opacity 400ms cubic-bezier(0.16,1,0.3,1)",
        margin: "0 16px 16px",
      }}>
        <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.10)", borderRadius: 8, padding: 4, marginTop: 4 }}>
          {["Consultation", "Home Therapy", "Drive Time"].map((item) => (
            <div key={item} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "8px 12px",
              fontSize: 13,
              fontWeight: item === "Home Therapy" ? 500 : 400,
              color: item === "Home Therapy" ? "#0DB8A0" : MUTED,
            }}>
              {item}
              {item === "Home Therapy" && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7L5.5 10L11.5 4"
                    stroke="#0DB8A0" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round"
                    strokeDasharray="12"
                    strokeDashoffset={checkDrawn ? 0 : 12}
                    style={{ transition: "stroke-dashoffset 300ms ease 400ms" }}
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════ */
/*  MOCKUP 3 — REPORTS / LINE CHART                             */
/* ════════════════════════════════════════════════════════════ */
function MockupReports() {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLen, setPathLen] = useState(400);
  const [progress, setProgress] = useState(0);
  const [dotsIn,   setDotsIn]   = useState(false);

  /* chart geometry */
  const W = 320, H = 160, PAD = { t: 16, r: 16, b: 28, l: 36 };
  const cW = W - PAD.l - PAD.r;
  const cH = H - PAD.t - PAD.b;
  const data = [
    { x: "Sep", v: 65 }, { x: "Oct", v: 72 },
    { x: "Nov", v: 78 }, { x: "Dec", v: 85 }, { x: "May", v: 91 },
  ];
  const minV = 55, maxV = 100;
  const px = (i: number) => PAD.l + (i / (data.length - 1)) * cW;
  const py = (v: number) => PAD.t + cH - ((v - minV) / (maxV - minV)) * cH;

  const pts = data.map((d, i) => ({ x: px(i), y: py(d.v) }));
  const linePath = pts.reduce((acc, p, i) =>
    i === 0 ? `M${p.x},${p.y}`
    : `${acc} C${pts[i-1].x + cW/8},${pts[i-1].y} ${p.x - cW/8},${p.y} ${p.x},${p.y}`, "");
  const areaPath = `${linePath} L${pts[pts.length-1].x},${PAD.t + cH} L${pts[0].x},${PAD.t + cH} Z`;

  useEffect(() => {
    if (pathRef.current) setPathLen(pathRef.current.getTotalLength() || 400);
  }, []);

  useEffect(() => {
    if (!pathLen) return;
    let start: number | null = null;
    const dur = 1200;
    const raf = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setProgress(e);
      if (p < 1) requestAnimationFrame(raf);
      else setTimeout(() => setDotsIn(true), 80);
    };
    requestAnimationFrame(raf);
  }, [pathLen]);

  const offset = pathLen * (1 - progress);

  return (
    <div style={{ fontFamily: SANS }}>
      {/* Header */}
      <div style={{
        display: "flex", alignItems: "flex-start", justifyContent: "space-between",
        padding: "14px 16px 8px",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}>
        <div>
          <p style={{ fontWeight: 600, fontSize: 13, color: DARK }}>Goal Accuracy Over Time</p>
          <p style={{ fontWeight: 300, fontSize: 12, color: MUTED }}>Communication goal history</p>
        </div>
        <span style={{ fontSize: 11, fontWeight: 500, color: "#1A7A1A", background: "#E6F7EE", padding: "3px 8px", borderRadius: 4 }}>+6%</span>
      </div>

      {/* Chart */}
      <div style={{ padding: "8px 0 0" }}>
        <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: "block", overflow: "visible" }}>
          <defs>
            <clipPath id="chart-progress">
              <rect x={PAD.l} y={0} width={cW * progress} height={H} />
            </clipPath>
          </defs>

          {/* Grid lines */}
          {[60, 80, 100].map(v => (
            <g key={v}>
              <line x1={PAD.l} x2={W - PAD.r} y1={py(v)} y2={py(v)}
                stroke="rgba(0,0,0,0.06)" strokeWidth={1} strokeDasharray="4 3" />
              <text x={PAD.l - 6} y={py(v) + 4} textAnchor="end" fontSize={10} fill="rgba(0,0,0,0.28)">{v}%</text>
            </g>
          ))}

          {/* Area fill */}
          <path d={areaPath} fill="rgba(83,174,243,0.08)" clipPath="url(#chart-progress)" />

          {/* Line */}
          <path
            ref={pathRef}
            d={linePath}
            stroke={BLUE} strokeWidth={2.5} fill="none"
            strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray={pathLen}
            strokeDashoffset={offset}
          />

          {/* Data points + x labels */}
          {pts.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r={4} fill="#fff" stroke={BLUE} strokeWidth={2}
                opacity={dotsIn ? 1 : 0}
                style={{
                  transform: dotsIn ? "scale(1)" : "scale(0)",
                  transformOrigin: `${p.x}px ${p.y}px`,
                  transition: `opacity 200ms ease ${i * 80}ms, transform 200ms ease ${i * 80}ms`,
                }}
              />
              <text x={p.x} y={H - 4} textAnchor="middle" fontSize={10} fill="rgba(0,0,0,0.30)">
                {data[i].x}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════ */
/*  MOCKUP 4 — ACCOMMODATIONS                                   */
/* ════════════════════════════════════════════════════════════ */
function MockupAccommodations() {
  const [rowsIn, setRowsIn] = useState([false, false, false, false]);
  const [pillsIn, setPillsIn] = useState([false, false, false, false]);

  const rows = [
    { icon: "🕐", iconBg: "rgba(83,174,243,0.15)",   label: "Extra time for tasks",        status: "✓ Given",  sBg: "#E6F7EE", sColor: "#1A7A1A" },
    { icon: "📖", iconBg: "rgba(139,92,246,0.15)",   label: "Tests read aloud",            status: "Given",    sBg: "#E6F7EE", sColor: "#1A7A1A" },
    { icon: "✏️", iconBg: "rgba(249,115,22,0.15)",   label: "Preferential seating",        status: "Given",    sBg: "#E6F7EE", sColor: "#1A7A1A" },
    { icon: "📝", iconBg: "rgba(236,72,153,0.15)",   label: "Reduced assignment length",   status: "Refused",  sBg: "#FFEAEA", sColor: "#CC2200" },
  ];

  useEffect(() => {
    rows.forEach((_, i) => {
      setTimeout(() => {
        setRowsIn(prev => { const n = [...prev]; n[i] = true; return n; });
        setTimeout(() => setPillsIn(prev => { const n = [...prev]; n[i] = true; return n; }), 200);
      }, i * 80);
    });
  }, []);

  return (
    <div style={{ fontFamily: SANS }}>
      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 16px",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}>
        <p style={{ fontWeight: 600, fontSize: 13, color: DARK }}>Accommodations</p>
        <span style={{ fontSize: 11, fontWeight: 500, color: BLUE, background: "rgba(83,174,243,0.10)", padding: "3px 8px", borderRadius: 4 }}>4 of 4 today</span>
      </div>

      {rows.map((row, i) => (
        <div key={row.label} style={{
          display: "flex", alignItems: "center", gap: 12,
          padding: "12px 16px",
          borderBottom: i < rows.length - 1 ? "1px solid rgba(0,0,0,0.04)" : "none",
          opacity: rowsIn[i] ? 1 : 0,
          transform: rowsIn[i] ? "translateX(0)" : "translateX(20px)",
          transition: `opacity 350ms ease-out, transform 350ms ease-out`,
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: row.iconBg,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, flexShrink: 0,
          }}>
            {row.icon}
          </div>
          <span style={{ flex: 1, fontSize: 13, color: DARK }}>{row.label}</span>
          <span style={{
            fontSize: 12, fontWeight: 500,
            color: row.sColor, background: row.sBg,
            padding: "4px 10px", borderRadius: 6,
            opacity: pillsIn[i] ? 1 : 0,
            transform: pillsIn[i] ? "scale(1)" : "scale(0.7)",
            transition: "opacity 200ms ease, transform 200ms ease",
            whiteSpace: "nowrap",
          }}>
            {row.status}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════ */
/*  MOCKUP 5 — SCHEDULING & BILLING                             */
/* ════════════════════════════════════════════════════════════ */
function MockupScheduling() {
  const [cardIn, setCardIn]   = useState(false);
  const [rowsIn, setRowsIn]   = useState([false, false, false, false]);

  const billingRows = [
    { label: "Service Time",  value: "Occupational" },
    { label: "Session Date",  value: "July 12, 2025" },
    { label: "Time Spent",    value: "45 mins"       },
    { label: "CDT",           value: "97530"         },
  ];

  useEffect(() => {
    const t1 = setTimeout(() => setCardIn(true), 200);
    billingRows.forEach((_, i) =>
      setTimeout(() => setRowsIn(prev => { const n = [...prev]; n[i] = true; return n; }), 400 + i * 60)
    );
    return () => clearTimeout(t1);
  }, []);

  return (
    <div style={{ fontFamily: SANS, padding: 20, position: "relative", minHeight: 260 }}>
      {/* Back card — calendar */}
      <div style={{
        width: "80%",
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 10,
        overflow: "hidden",
        position: "relative", zIndex: 1,
      }}>
        {/* Calendar header */}
        <div style={{
          display: "flex", gap: 0,
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}>
          {["Mon", "Tue"].map(d => (
            <div key={d} style={{
              flex: 1, padding: "8px 12px",
              fontWeight: 500, fontSize: 11, color: MUTED,
              borderRight: d === "Mon" ? "1px solid rgba(0,0,0,0.06)" : "none",
            }}>{d}</div>
          ))}
        </div>
        {/* Session block */}
        <div style={{
          margin: 10,
          background: "rgba(83,174,243,0.12)",
          borderLeft: `3px solid ${BLUE}`,
          borderRadius: 6, padding: "8px 10px",
        }}>
          <p style={{ fontWeight: 600, fontSize: 12, color: BLUE }}>Primary</p>
          <p style={{ fontSize: 11, color: MUTED }}>A, B, C, D, E</p>
          <p style={{ fontSize: 10, color: "rgba(0,0,0,0.35)", marginTop: 2 }}>5 Apr, 2024</p>
        </div>
        <div style={{ padding: "6px 12px", fontSize: 11, color: "rgba(0,0,0,0.30)", borderTop: "1px solid rgba(0,0,0,0.04)" }}>30</div>
      </div>

      {/* Front card — billing */}
      <div style={{
        position: "absolute",
        bottom: 8, right: 8,
        width: "65%",
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 10,
        boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
        zIndex: 2,
        padding: 16,
        opacity: cardIn ? 1 : 0,
        transform: cardIn ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 500ms cubic-bezier(0.16,1,0.3,1), transform 500ms cubic-bezier(0.16,1,0.3,1)",
      }}>
        <p style={{ fontWeight: 600, fontSize: 13, color: DARK, marginBottom: 12 }}>Billing Info.</p>
        {billingRows.map((row, i) => (
          <div key={row.label} style={{
            display: "flex", justifyContent: "space-between",
            padding: "6px 0",
            borderBottom: i < billingRows.length - 1 ? "1px solid rgba(0,0,0,0.04)" : "none",
            opacity: rowsIn[i] ? 1 : 0,
            transition: `opacity 250ms ease ${i * 60}ms`,
          }}>
            <span style={{ fontSize: 12, color: "#AEAEB2", fontWeight: 400 }}>{row.label}</span>
            <span style={{ fontSize: 12, color: DARK,     fontWeight: 500 }}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
