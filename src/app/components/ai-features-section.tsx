import React, { useEffect, useRef, useState } from "react";
import { useIsMobile } from "./shared";
import aiSectionImg   from "../../assets/ai-section/ai-section.png";
import aiFeature1     from "../../assets/ai-section/ai-feature-1.png";
import aiFeature2     from "../../assets/ai-section/ai-feature-2.png";
import aiFeature3     from "../../assets/ai-section/ai-feature-3.png";
import aiFeature4     from "../../assets/ai-section/ai-feature-4.png";
import aiFeature5     from "../../assets/ai-section/ai-feature-5.png";

const CARD_IMAGES = [aiFeature1, aiFeature2, aiFeature3, aiFeature4, aiFeature5];

/* ── Design tokens ────────────────────────────────────────── */
const SERIF = "'Instrument Serif', serif";
const SANS  = "'DM Sans', system-ui, sans-serif";
const DARK  = "#1A1A1E";
const BLUE  = "#53AEF3";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";
const TINT  = "#EFEFED";

/* ── Card metadata ────────────────────────────────────────── */
const CARDS = [
  {
    num: "01",
    title: "AI Goal Generator",
    desc: "Create personalized IEP goals tailored to each student's needs and current performance.",
  },
  {
    num: "02",
    title: "Smart Tracking Suggestions",
    desc: "Get AI recommendations on the most effective way to track each goal.",
  },
  {
    num: "03",
    title: "Progress Notes Generator",
    desc: "Automatically generate clear, ready-to-use progress notes after every session.",
  },
  {
    num: "04",
    title: "Worksheet Generator",
    desc: "Create customized, standards-aligned practice worksheets for any student in seconds.",
  },
  {
    num: "05",
    title: "AI Assistance Across Workflow",
    desc: "AI helps at every step — from planning goals to writing reports — so nothing slips through.",
  },
];

/* ═══════════════════════════════════════════════════════════ */
export function AIFeaturesSection() {
  const isMobile = useIsMobile();
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef   = useRef<HTMLDivElement>(null);
  const [headerVis, setHeaderVis] = useState(false);
  const [cardVis,   setCardVis]   = useState<boolean[]>(
    new Array(CARDS.length).fill(false)
  );

  useReveal(headerRef, () => setHeaderVis(true));
  useReveal(gridRef, () => {
    CARDS.forEach((_, i) =>
      setTimeout(
        () => setCardVis(prev => { const n = [...prev]; n[i] = true; return n; }),
        i * 90
      )
    );
  });

  const revealStyle = (vis: boolean, delay = 0): React.CSSProperties => ({
    opacity  : vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
  });

  const cardStyle = (i: number): React.CSSProperties => ({
    background: "#FFFFFF",
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: 24,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 2px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
    opacity: cardVis[i] ? 1 : 0,
    transform: cardVis[i] ? "translateY(0)" : "translateY(24px)",
    transition: "opacity 550ms ease, transform 550ms ease",
  });

  return (
    <section style={{ background: BG, padding: isMobile ? "60px 0" : "100px 0" }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: isMobile ? "0 20px" : "0 80px", boxSizing: "border-box",
      }}>

        {/* ── Header ──────────────────────────────────────────── */}
        <div
          ref={headerRef}
          style={{ textAlign: "center", marginBottom: 56, ...revealStyle(headerVis) }}
        >
          {/* Label pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(83,174,243,0.08)",
            border: "1px solid rgba(83,174,243,0.18)",
            borderRadius: 9999,
            padding: "5px 14px",
            marginBottom: 18,
          }}>
            <SparkleIcon size={13} />
            <span style={{
              fontFamily: SANS, fontWeight: 500, fontSize: 12,
              color: BLUE, letterSpacing: "1px",
            }}>
              AI-powered workflows
            </span>
          </div>

          <h2 style={{
            fontFamily: SERIF, fontWeight: 400, fontSize: isMobile ? 34 : 52,
            lineHeight: 1.1, color: DARK, margin: "0 0 16px",
          }}>
            AI that works with you —<br />not extra work for you
          </h2>
          <p style={{
            fontFamily: SANS, fontWeight: 300, fontSize: 18,
            color: MUTED, maxWidth: 520, margin: "0 auto", lineHeight: 1.6,
          }}>
            From generating IEP goals to writing progress notes, AbleSpace
            uses AI to simplify your daily workflow and save hours every week.
          </p>
        </div>

        {/* ── Section image ───────────────────────────────────── */}
        <div style={{ marginBottom: 48, borderRadius: 16, overflow: "hidden" }}>
          <img
            src={aiSectionImg}
            alt="AbleSpace AI features overview"
            style={{ width: "100%", display: "block", objectFit: "cover" }}
          />
        </div>

        {/* ── Card grid ───────────────────────────────────────── */}
        <div ref={gridRef}>

          {/* Row 1 — 3 equal cards */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 16, marginBottom: 16 }}>

            {/* Card 1 */}
            <div style={{ flex: "1 1 0", minWidth: 0, ...cardStyle(0) }}>
              <div style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", lineHeight: 0 }}>
                <img src={CARD_IMAGES[0]} alt={CARDS[0].title} style={{ width: "100%", display: "block", objectFit: "cover" }} />
              </div>
              <CardText card={CARDS[0]} />
            </div>

            {/* Card 2 */}
            <div style={{ flex: "1 1 0", minWidth: 0, ...cardStyle(1) }}>
              <div style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", lineHeight: 0 }}>
                <img src={CARD_IMAGES[1]} alt={CARDS[1].title} style={{ width: "100%", display: "block", objectFit: "cover" }} />
              </div>
              <CardText card={CARDS[1]} />
            </div>

            {/* Card 3 */}
            <div style={{ flex: "1 1 0", minWidth: 0, ...cardStyle(2) }}>
              <div style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", lineHeight: 0 }}>
                <img src={CARD_IMAGES[2]} alt={CARDS[2].title} style={{ width: "100%", display: "block", objectFit: "cover" }} />
              </div>
              <CardText card={CARDS[2]} />
            </div>
          </div>

          {/* Row 2 — 2 wider cards */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 16 }}>

            {/* Card 4 */}
            <div style={{ flex: "1 1 0", minWidth: 0, ...cardStyle(3) }}>
              <div style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", lineHeight: 0 }}>
                <img src={CARD_IMAGES[3]} alt={CARDS[3].title} style={{ width: "100%", display: "block", objectFit: "cover" }} />
              </div>
              <CardText card={CARDS[3]} />
            </div>

            {/* Card 5 */}
            <div style={{ flex: "1 1 0", minWidth: 0, ...cardStyle(4) }}>
              <div style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", lineHeight: 0 }}>
                <img src={CARD_IMAGES[4]} alt={CARDS[4].title} style={{ width: "100%", display: "block", objectFit: "cover" }} />
              </div>
              <CardText card={CARDS[4]} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Shared card text block ───────────────────────────────── */
function CardText({ card }: { card: typeof CARDS[number] }) {
  return (
    <div style={{ padding: "20px 24px 24px", flex: 1 }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 8 }}>
        <span style={{
          fontFamily: SANS, fontWeight: 600, fontSize: 16,
          color: DARK, lineHeight: 1.3,
        }}>
          {card.title}
        </span>
        <span style={{
          fontFamily: SANS, fontWeight: 600, fontSize: 11,
          color: BLUE, background: "rgba(83,174,243,0.10)",
          padding: "3px 10px", borderRadius: 9999, flexShrink: 0,
          lineHeight: 1.8,
        }}>
          {card.num}
        </span>
      </div>
      <p style={{
        fontFamily: SANS, fontWeight: 300, fontSize: 14,
        color: MUTED, margin: 0, lineHeight: 1.65,
      }}>
        {card.desc}
      </p>
    </div>
  );
}

/* ── Scroll-reveal hook (fires exactly once) ─────────────── */
function useReveal(
  ref: React.RefObject<HTMLElement | null>,
  onReveal: () => void,
  delay = 0
) {
  const triggered = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
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

/* ══════════════════════════════════════════════════════════ */
/*  MOCK UI COMPONENTS                                        */
/* ══════════════════════════════════════════════════════════ */

/* ── Mock 1: AI Goal Generator ────────────────────────────── */
function MockGoalGenerator() {
  return (
    <div style={{ fontFamily: SANS, minHeight: 148 }}>
      {/* Student chip */}
      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        <Chip>Emily R. · Grade 3</Chip>
        <Chip blue>✦ AI Generated</Chip>
      </div>

      {/* Generated goal card */}
      <div style={{
        background: "#FFFFFF",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 10,
        padding: "12px 14px",
        marginBottom: 12,
        boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
      }}>
        <div style={{ fontSize: 12, color: DARK, lineHeight: 1.55, fontWeight: 400 }}>
          "By June 2025, Emily will identify main ideas in grade-level
          texts with{" "}
          <span style={{ color: BLUE, fontWeight: 600 }}>80% accuracy</span>
          {" "}across 4 of 5 trials."
        </div>
      </div>

      {/* Action pills */}
      <div style={{ display: "flex", gap: 6 }}>
        {["Accept", "Edit", "Regenerate"].map(label => (
          <div
            key={label}
            style={{
              border: "1px solid rgba(0,0,0,0.12)",
              borderRadius: 6, padding: "4px 10px",
              fontSize: 11, color: MUTED, fontWeight: 400,
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Mock 2: Smart Tracking Suggestions ──────────────────── */
function MockTrackingSuggestions() {
  const options = [
    { label: "Percentage accuracy", suggested: true  },
    { label: "Trial-by-trial data",  suggested: false },
    { label: "Observational notes",  suggested: false },
  ];
  return (
    <div style={{ fontFamily: SANS, minHeight: 148 }}>
      <div style={{ fontSize: 11, color: MUTED, marginBottom: 10 }}>
        Goal: Reading Comprehension
      </div>
      {options.map(({ label, suggested }) => (
        <div
          key={label}
          style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between",
            padding: "9px 12px",
            borderRadius: 9,
            background: suggested ? "rgba(83,174,243,0.06)" : "#FFFFFF",
            border: suggested
              ? "1px solid rgba(83,174,243,0.20)"
              : "1px solid rgba(0,0,0,0.07)",
            marginBottom: 7,
            boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 14, height: 14, borderRadius: "50%",
              border: suggested
                ? `1.5px solid ${BLUE}`
                : "1.5px solid rgba(0,0,0,0.20)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              {suggested && (
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: BLUE }} />
              )}
            </div>
            <span style={{
              fontSize: 12, color: DARK,
              fontWeight: suggested ? 500 : 400,
            }}>
              {label}
            </span>
          </div>
          {suggested && (
            <span style={{
              fontSize: 10, color: BLUE, fontWeight: 600,
              letterSpacing: "0.3px",
            }}>
              Suggested
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Mock 3: Progress Notes Generator ────────────────────── */
function MockProgressNotes() {
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setCursor(v => !v), 620);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ fontFamily: SANS, minHeight: 148 }}>
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ fontSize: 11, color: MUTED }}>May 14, 2025 · Session note</span>
        <Chip blue>AI Draft</Chip>
      </div>

      {/* Note body */}
      <div style={{
        background: "#FFFFFF",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 10, padding: "12px 14px",
        boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
      }}>
        <div style={{ fontSize: 12, color: DARK, lineHeight: 1.6 }}>
          During today's session, Emily demonstrated progress toward her
          reading comprehension goal. She correctly identified main ideas
          in 4 of 5 passages
          <span style={{
            display: "inline-block", width: 2, height: 13,
            background: cursor ? BLUE : "transparent",
            borderRadius: 1, marginLeft: 2, verticalAlign: "text-bottom",
            transition: "background 120ms",
          }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 10 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: BLUE }} />
          <span style={{ fontSize: 11, color: BLUE, fontWeight: 500 }}>
            Writing next sentence…
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Mock 4: Worksheet Generator ─────────────────────────── */
function MockWorksheet() {
  return (
    <div style={{ fontFamily: SANS, minHeight: 148 }}>
      {/* Sheet header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <span style={{ fontSize: 12, color: DARK, fontWeight: 600 }}>
          Reading Skills · Grade 3
        </span>
        <Chip>5 questions</Chip>
      </div>

      {/* Question rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 14 }}>
        {[70, 90, 55].map((w, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 16, height: 16, borderRadius: 4, flexShrink: 0,
              border: "1.5px solid rgba(0,0,0,0.15)",
              background: i === 0 ? "rgba(83,174,243,0.10)" : "transparent",
            }} />
            <div style={{
              height: 8, borderRadius: 4,
              background: i === 0 ? "rgba(83,174,243,0.18)" : "rgba(0,0,0,0.08)",
              width: `${w}%`,
            }} />
          </div>
        ))}
      </div>

      {/* Generate button */}
      <div style={{
        background: "rgba(83,174,243,0.08)",
        border: "1px solid rgba(83,174,243,0.18)",
        borderRadius: 8, padding: "9px 0",
        textAlign: "center",
        fontSize: 12, color: BLUE, fontWeight: 500,
        display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
      }}>
        <SparkleIcon size={12} />
        Generate Worksheet
      </div>
    </div>
  );
}

/* ── Mock 5: AI Across Workflow ───────────────────────────── */
function MockWorkflowPipeline() {
  const stages = [
    { label: "Plan",   sub: "AI drafts IEP goals"    },
    { label: "Track",  sub: "AI logs session data"   },
    { label: "Report", sub: "AI writes notes"        },
  ];

  return (
    <div style={{ fontFamily: SANS, minHeight: 148, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {stages.map(({ label, sub }, i) => (
          <React.Fragment key={label}>
            {/* Stage node */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              {/* Circle */}
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "rgba(83,174,243,0.08)",
                border: "1px solid rgba(83,174,243,0.22)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <SparkleIcon size={16} />
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: DARK, lineHeight: 1.2 }}>
                  {label}
                </div>
                <div style={{ fontSize: 11, color: MUTED, marginTop: 3, lineHeight: 1.3 }}>
                  {sub}
                </div>
              </div>
            </div>

            {/* Connector */}
            {i < stages.length - 1 && (
              <div style={{
                width: 32, flexShrink: 0,
                borderTop: "1.5px dashed rgba(83,174,243,0.30)",
                marginBottom: 36,
              }} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ── Shared micro-components ──────────────────────────────── */
function Chip({
  children, blue,
}: { children: React.ReactNode; blue?: boolean }) {
  return (
    <span style={{
      fontFamily: SANS, fontWeight: 500, fontSize: 11,
      color: blue ? BLUE : MUTED,
      background: blue ? "rgba(83,174,243,0.08)" : "rgba(0,0,0,0.05)",
      border: blue ? "1px solid rgba(83,174,243,0.15)" : "1px solid rgba(0,0,0,0.08)",
      padding: "3px 9px",
      borderRadius: 9999,
      lineHeight: 1.6,
      whiteSpace: "nowrap" as const,
    }}>
      {children}
    </span>
  );
}

function SparkleIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path
        d="M7 1.5L8.06 5.44L12 6.5L8.06 7.56L7 11.5L5.94 7.56L2 6.5L5.94 5.44L7 1.5Z"
        fill={BLUE} opacity="0.9"
      />
      <circle cx="11.5" cy="3" r="0.8" fill={BLUE} opacity="0.6" />
      <circle cx="3"    cy="11" r="0.6" fill={BLUE} opacity="0.4" />
    </svg>
  );
}
