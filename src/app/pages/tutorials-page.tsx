import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../components/shared";
import { MAX_W, PAD_X, PAD_X_MOB, SECT_PY, SECT_PY_MOB, HERO_PT, HERO_PT_MOB, HERO_PB, HERO_PB_MOB, H1_SIZE, H1_SIZE_MOB, H2_SIZE, H2_SIZE_MOB, BODY_SIZE, STAT_SIZE, STAT_SIZE_MOB, CARD_RADIUS, CTA_RADIUS, CTA_PAD_X, CTA_PAD_Y, CTA_PAD_X_MOB, CTA_PAD_Y_MOB, CARD_GAP, BTN_RADIUS, BTN_PAD, BTN_SIZE } from "./page-layout";

const SANS  = "'DM Sans', system-ui, sans-serif";
const SERIF = "'Instrument Serif', serif";
const BLUE  = "#53AEF3";
const DARK  = "#1A1A1E";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";
const TINT  = "#EFEFED";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const triggered = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true; setVis(true); obs.disconnect();
      }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, vis };
}

const FILTERS = ["All", "Getting Started", "Data Collection", "IEP Tools", "AI Features", "Billing"];

const TUTORIALS = [
  {
    category: "Getting Started",
    bg: "linear-gradient(135deg, #EDE8F8, #53AEF3)",
    title: "Getting Started with AbleSpace in 10 Minutes",
    description: "A complete walkthrough of your account setup, adding students, and collecting your first data point.",
    duration: "10:24",
  },
  {
    category: "Data Collection",
    bg: "linear-gradient(135deg, #E0F7F5, #0DB8A0)",
    title: "How to Use Trial-by-Trial Data Collection",
    description: "Record correct and incorrect responses for any discrete skill target, with automatic graphing.",
    duration: "6:12",
  },
  {
    category: "IEP Tools",
    bg: "linear-gradient(135deg, #FEF3C7, #D97706)",
    title: "Writing and Tracking IEP Goals",
    description: "Set up annual goals, short-term objectives, and baselines — then watch progress update in real time.",
    duration: "8:45",
  },
  {
    category: "AI Features",
    bg: "linear-gradient(135deg, #F0FDF4, #16A34A)",
    title: "AI Progress Notes: Your First 5 Minutes",
    description: "See how AI drafts a compliant progress note from your session data and how to review and approve it.",
    duration: "4:30",
  },
  {
    category: "Billing",
    bg: "linear-gradient(135deg, #FCE7F3, #DB2777)",
    title: "Setting Up Medicaid Billing",
    description: "Configure your billing settings, verify student eligibility, and submit your first clean claim.",
    duration: "12:18",
  },
  {
    category: "Data Collection",
    bg: "linear-gradient(135deg, #E0F2FE, #0284C7)",
    title: "Interval Recording Made Simple",
    description: "Whole interval, partial interval, or momentary time sampling — choose the right method for every behavior target.",
    duration: "5:55",
  },
  {
    category: "IEP Tools",
    bg: "linear-gradient(135deg, #EDE8F8, #6B5ECD)",
    title: "Generating IEP Meeting Reports",
    description: "Pull a complete IEP packet — current levels, progress graphs, and service logs — in under 60 seconds.",
    duration: "3:40",
  },
  {
    category: "Getting Started",
    bg: "linear-gradient(135deg, #FEF3C7, #F59E0B)",
    title: "Adding Your Team and Setting Roles",
    description: "Invite providers, set permissions, and make sure everyone has the right access from day one.",
    duration: "5:08",
  },
  {
    category: "AI Features",
    bg: "linear-gradient(135deg, #F0FDF4, #059669)",
    title: "Using the Goal Writing Assistant",
    description: "Let AI suggest SMART goal language for any skill area — then customize to fit your student's unique needs.",
    duration: "7:22",
  },
];

function TutorialCard({ tutorial, index }: { tutorial: typeof TUTORIALS[0]; index: number }) {
  const { ref, vis } = useReveal();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: CARD_RADIUS,
        overflow: "hidden",
        transform: vis
          ? hovered ? "translateY(-4px)" : "translateY(0)"
          : "translateY(24px)",
        opacity: vis ? 1 : 0,
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s, box-shadow 0.2s ease`,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          height: 160,
          background: tutorial.bg,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Play button */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "9px solid transparent",
              borderBottom: "9px solid transparent",
              borderLeft: "16px solid " + DARK,
              marginLeft: 4,
            }}
          />
        </div>
        {/* Duration badge */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            background: "rgba(0,0,0,0.65)",
            color: "#fff",
            fontFamily: SANS,
            fontSize: 11,
            fontWeight: 600,
            padding: "3px 8px",
            borderRadius: 6,
          }}
        >
          {tutorial.duration}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        <span
          style={{
            display: "inline-block",
            background: TINT,
            color: MUTED,
            fontFamily: SANS,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 0.6,
            padding: "3px 10px",
            borderRadius: 20,
            alignSelf: "flex-start",
          }}
        >
          {tutorial.category.toUpperCase()}
        </span>
        <div
          style={{
            fontFamily: SANS,
            fontSize: 15,
            fontWeight: 600,
            color: DARK,
            lineHeight: 1.4,
          }}
        >
          {tutorial.title}
        </div>
        <div
          style={{
            fontFamily: SANS,
            fontSize: 13,
            color: MUTED,
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {tutorial.description}
        </div>
        <div style={{ fontFamily: SANS, fontSize: 13, fontWeight: 600, color: BLUE, marginTop: 4 }}>
          Watch tutorial →
        </div>
      </div>
    </div>
  );
}

export function TutorialsPage() {
  const isMobile = useIsMobile();
  const heroReveal = useReveal();
  const gridReveal = useReveal();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? TUTORIALS
    : TUTORIALS.filter((t) => t.category === activeFilter);

  return (
    <div style={{ fontFamily: SANS, background: BG, minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #F0F7FF 0%, #F8F8F5 55%, #F5F0FF 100%)",
          padding: isMobile ? `${HERO_PT_MOB}px 0 ${HERO_PB_MOB}px` : `${HERO_PT}px 0 ${HERO_PB}px`,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box", position: "relative", zIndex: 1, textAlign: "center" }}>
        <div
          ref={heroReveal.ref}
          style={{
            maxWidth: 680,
            margin: "0 auto",
            opacity: heroReveal.vis ? 1 : 0,
            transform: heroReveal.vis ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div
            style={{
              display: "inline-block",
              fontFamily: SANS,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              color: BLUE,
              background: BLUE + "18",
              padding: "5px 14px",
              borderRadius: 20,
              marginBottom: 24,
            }}
          >
            TUTORIALS
          </div>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: isMobile ? H1_SIZE_MOB : H1_SIZE,
              fontWeight: 400,
              color: DARK,
              lineHeight: 1.1,
              margin: "0 0 20px",
            }}
          >
            Learn AbleSpace
            <br />
            <span style={{ color: BLUE }}>step by step.</span>
          </h1>
          <p
            style={{
              fontFamily: SANS,
              fontSize: BODY_SIZE,
              color: MUTED,
              lineHeight: 1.7,
              margin: "0 auto 40px",
              maxWidth: 520,
            }}
          >
            Short, practical video tutorials and guides to help you and your team get the most out of every feature.
          </p>

          {/* Filter pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              justifyContent: "center",
            }}
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  fontFamily: SANS,
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "8px 18px",
                  borderRadius: 20,
                  border: "none",
                  cursor: "pointer",
                  background: activeFilter === filter ? BLUE : TINT,
                  color: activeFilter === filter ? "#fff" : DARK,
                  transition: "background 0.2s ease, color 0.2s ease",
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Tutorial Grid */}
      <section style={{ padding: isMobile ? `${SECT_PY_MOB}px 0` : `${SECT_PY}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
        <div ref={gridReveal.ref}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: CARD_GAP,
            }}
          >
            {filtered.map((tutorial, i) => (
              <TutorialCard key={tutorial.title} tutorial={tutorial} index={i} />
            ))}
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
