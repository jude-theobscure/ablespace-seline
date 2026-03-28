import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../components/shared";
import { MAX_W, PAD_X, PAD_X_MOB, SECT_PY, SECT_PY_MOB, HERO_PT, HERO_PT_MOB, HERO_PB, HERO_PB_MOB, H1_SIZE, H1_SIZE_MOB, H2_SIZE, H2_SIZE_MOB, BODY_SIZE, STAT_SIZE, STAT_SIZE_MOB, CARD_RADIUS, CTA_RADIUS, CTA_PAD_X, CTA_PAD_Y, CTA_PAD_X_MOB, CTA_PAD_Y_MOB, CARD_GAP, BTN_RADIUS, BTN_PAD, BTN_SIZE } from "./page-layout";

const SANS  = "'DM Sans', system-ui, sans-serif";
const SERIF = "'Instrument Serif', serif";
const BLUE  = "#53AEF3";
const DARK  = "#1A1A1E";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";

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

const AI_FEATURES = [
  {
    icon: "📝",
    title: "AI Progress Notes",
    badgeBg: "#EDE8F8",
    iconColor: "#6B5ECD",
    desc: "After every session, AI drafts a compliant, personalized progress note in your voice — based on the exact data you collected.",
    tags: ["Progress Notes", "IDEA Compliant", "Personalized"],
  },
  {
    icon: "🎯",
    title: "Goal Writing Assistant",
    badgeBg: "#E0F7F5",
    iconColor: "#0DB8A0",
    desc: "Describe what you want to work on and AI suggests SMART IEP goal language aligned to standards and age-appropriate expectations.",
    tags: ["IEP Goals", "SMART Goals", "Standards-Aligned"],
  },
  {
    icon: "📊",
    title: "Trend Analysis",
    badgeBg: "#FEF3C7",
    iconColor: "#D97706",
    desc: "AbleSpace AI scans your data history and surfaces patterns — regressions, plateaus, and breakthroughs — before the next IEP meeting.",
    tags: ["Trends", "Data Analysis", "Early Warning"],
  },
  {
    icon: "💬",
    title: "Parent Communication Drafts",
    badgeBg: "#E0F2FE",
    iconColor: "#0284C7",
    desc: "Generate warm, professional parent updates based on session data. Review and send — no starting from a blank page.",
    tags: ["Parent Comms", "FERPA Safe", "Efficiency"],
  },
  {
    icon: "⚠️",
    title: "Compliance Checker",
    badgeBg: "#FCE7F3",
    iconColor: "#DB2777",
    desc: "AI reviews every IEP and session record for missing fields, incomplete services, and compliance gaps — before they become audit failures.",
    tags: ["Compliance", "Audit", "IDEA"],
  },
  {
    icon: "🔮",
    title: "Predictive Insights",
    badgeBg: "#F0FDF4",
    iconColor: "#16A34A",
    desc: "Predict which students are at risk of missing their annual goals with enough time to intervene and adjust the plan.",
    tags: ["Predictive", "At-Risk", "Intervention"],
  },
];

const DIFF_POINTS = [
  {
    icon: "🧠",
    title: "Purpose-built",
    desc: "Not a generic LLM wrapper. Trained on special ed documentation, IDEA requirements, and IEP goal structures.",
  },
  {
    icon: "🔒",
    title: "Privacy-first",
    desc: "All AI processing is HIPAA compliant. Student data is never used for model training.",
  },
  {
    icon: "✅",
    title: "Educator-reviewed",
    desc: "Every AI output is reviewed and refined by certified special education professionals before release.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Collect data as usual",
    desc: "Use AbleSpace's data collection tools during your session. The AI works with what you already capture.",
  },
  {
    num: "02",
    title: "AI drafts your documentation",
    desc: "After the session, AI generates progress notes, goal updates, and parent summaries — all pre-filled.",
  },
  {
    num: "03",
    title: "Review, edit, approve",
    desc: "You're always in control. Review every AI output, make edits, and approve with one click.",
  },
];

function FeatureCard({ feature, isMobile }: { feature: typeof AI_FEATURES[0]; isMobile: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: CARD_RADIUS,
        padding: isMobile ? "28px 24px" : "32px 28px",
        border: "1px solid rgba(0,0,0,0.07)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        cursor: "default",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          background: feature.badgeBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          flexShrink: 0,
        }}
      >
        {feature.icon}
      </div>
      <div>
        <div
          style={{
            fontFamily: SANS,
            fontWeight: 700,
            fontSize: 18,
            color: DARK,
            marginBottom: 8,
          }}
        >
          {feature.title}
        </div>
        <div
          style={{
            fontFamily: SANS,
            fontSize: 15,
            color: MUTED,
            lineHeight: 1.65,
          }}
        >
          {feature.desc}
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
        {feature.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: SANS,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: feature.iconColor,
              background: feature.badgeBg,
              borderRadius: 6,
              padding: "4px 10px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function AbleSpaceAiPage() {
  const isMobile = useIsMobile();

  const heroReveal = useReveal();
  const featuresReveal = useReveal();
  const diffReveal = useReveal();
  const stepsReveal = useReveal();
  const ctaReveal = useReveal();

  const revealStyle = (vis: boolean, delay = 0): React.CSSProperties => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  return (
    <div style={{ fontFamily: SANS, background: BG, overflowX: "hidden" }}>

      {/* ── Hero ── */}
      <section
        style={{
          background: "linear-gradient(160deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
          position: "relative",
          overflow: "hidden",
          padding: isMobile ? `${HERO_PT_MOB}px 0 ${HERO_PB_MOB}px` : `${HERO_PT}px 0 ${HERO_PB}px`,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(83,174,243,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(107,94,205,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          ref={heroReveal.ref}
          style={{
            maxWidth: MAX_W,
            margin: "0 auto",
            padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`,
            boxSizing: "border-box",
            width: "100%",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
            ...revealStyle(heroReveal.vis),
          }}
        >
          {/* Label pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(83,174,243,0.15)",
              border: "1px solid rgba(83,174,243,0.3)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 32,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 600, color: BLUE, fontFamily: SANS, letterSpacing: "0.05em" }}>
              ABLESPACE AI
            </span>
          </div>

          <h1
            style={{
              fontFamily: SERIF,
              fontSize: isMobile ? H1_SIZE_MOB : H1_SIZE,
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.08,
              margin: "0 0 24px",
            }}
          >
            The AI built for<br />special education.
          </h1>

          <p
            style={{
              fontFamily: SANS,
              fontSize: BODY_SIZE,
              fontWeight: 300,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.65,
              maxWidth: 580,
              margin: "0 auto 40px",
            }}
          >
            AbleSpace AI understands IDEA, IEP goals, and special ed workflows. It's not generic AI — it's purpose-built for your team.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: 32,
            }}
          >
            <button
              style={{
                fontFamily: SANS,
                fontWeight: 600,
                fontSize: BTN_SIZE,
                color: "#fff",
                background: BLUE,
                border: "none",
                borderRadius: BTN_RADIUS,
                padding: BTN_PAD,
                cursor: "pointer",
                letterSpacing: "0.01em",
              }}
            >
              Try AbleSpace AI free
            </button>
            <button
              style={{
                fontFamily: SANS,
                fontWeight: 600,
                fontSize: BTN_SIZE,
                color: "#fff",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: BTN_RADIUS,
                padding: BTN_PAD,
                cursor: "pointer",
                letterSpacing: "0.01em",
              }}
            >
              See how it works
            </button>
          </div>

          {/* Trust row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: isMobile ? 6 : 10,
              fontFamily: SANS,
              fontSize: 13,
              color: "rgba(255,255,255,0.45)",
            }}
          >
            <span>✦ No hallucinations</span>
            <span style={{ opacity: 0.4 }}>•</span>
            <span>✦ HIPAA compliant</span>
            <span style={{ opacity: 0.4 }}>•</span>
            <span>✦ Trained on special ed data</span>
          </div>
        </div>
      </section>

      {/* ── AI Features ── */}
      <section style={{ background: BG, padding: isMobile ? `${SECT_PY_MOB}px 0` : `${SECT_PY}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
          <div
            ref={featuresReveal.ref}
            style={{ textAlign: "center", marginBottom: 56, ...revealStyle(featuresReveal.vis) }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(83,174,243,0.12)",
                border: "1px solid rgba(83,174,243,0.25)",
                borderRadius: 100,
                padding: "5px 14px",
                marginBottom: 20,
              }}
            >
              <span style={{ fontFamily: SANS, fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: "0.07em" }}>
                CAPABILITIES
              </span>
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: isMobile ? H2_SIZE_MOB : H2_SIZE,
                fontWeight: 400,
                color: DARK,
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              What AbleSpace AI can do.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: CARD_GAP,
            }}
          >
            {AI_FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                style={{
                  ...revealStyle(featuresReveal.vis, 0.08 * i),
                }}
              >
                <FeatureCard feature={feature} isMobile={isMobile} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It's Different ── */}
      <section style={{ background: "#fff", padding: isMobile ? `${SECT_PY_MOB}px 0` : `${SECT_PY}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
          <div
            ref={diffReveal.ref}
            style={{ textAlign: "center", marginBottom: 56, ...revealStyle(diffReveal.vis) }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(83,174,243,0.12)",
                border: "1px solid rgba(83,174,243,0.25)",
                borderRadius: 100,
                padding: "5px 14px",
                marginBottom: 20,
              }}
            >
              <span style={{ fontFamily: SANS, fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: "0.07em" }}>
                WHY ABLESPACE
              </span>
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: isMobile ? H2_SIZE_MOB : H2_SIZE,
                fontWeight: 400,
                color: DARK,
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Built different, by design.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: 32,
            }}
          >
            {DIFF_POINTS.map((point, i) => (
              <div
                key={point.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 16,
                  ...revealStyle(diffReveal.vis, 0.1 * i),
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    background: "rgba(83,174,243,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                  }}
                >
                  {point.icon}
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontWeight: 700,
                    fontSize: 20,
                    color: DARK,
                  }}
                >
                  {point.title}
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 15,
                    color: MUTED,
                    lineHeight: 1.65,
                  }}
                >
                  {point.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ background: BG, padding: isMobile ? `${SECT_PY_MOB}px 0` : `${SECT_PY}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
          <div
            ref={stepsReveal.ref}
            style={{ textAlign: "center", marginBottom: 64, ...revealStyle(stepsReveal.vis) }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(83,174,243,0.12)",
                border: "1px solid rgba(83,174,243,0.25)",
                borderRadius: 100,
                padding: "5px 14px",
                marginBottom: 20,
              }}
            >
              <span style={{ fontFamily: SANS, fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: "0.07em" }}>
                HOW IT WORKS
              </span>
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: isMobile ? H2_SIZE_MOB : H2_SIZE,
                fontWeight: 400,
                color: DARK,
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Three steps to less paperwork.
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: isMobile ? "flex-start" : "center",
                  gap: isMobile ? 16 : 32,
                  background: "#fff",
                  borderRadius: 20,
                  padding: isMobile ? "28px 24px" : "36px 40px",
                  border: "1px solid rgba(0,0,0,0.07)",
                  ...revealStyle(stepsReveal.vis, 0.12 * i),
                }}
              >
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: isMobile ? 36 : 48,
                    color: BLUE,
                    lineHeight: 1,
                    flexShrink: 0,
                    minWidth: isMobile ? undefined : 80,
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: SANS,
                      fontWeight: 700,
                      fontSize: 20,
                      color: DARK,
                      marginBottom: 8,
                    }}
                  >
                    {step.title}
                  </div>
                  <div
                    style={{
                      fontFamily: SANS,
                      fontSize: 15,
                      color: MUTED,
                      lineHeight: 1.65,
                    }}
                  >
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: BG, padding: isMobile ? `0 0 ${SECT_PY_MOB}px` : `0 0 ${SECT_PY}px` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
        <div
          ref={ctaReveal.ref}
          style={{
            background: "#fff",
            borderRadius: isMobile ? 20 : CTA_RADIUS,
            padding: isMobile ? `${CTA_PAD_Y_MOB}px ${CTA_PAD_X_MOB}px` : `${CTA_PAD_Y}px ${CTA_PAD_X}px`,
            textAlign: "center",
            border: "1px solid rgba(0,0,0,0.06)",
            ...revealStyle(ctaReveal.vis),
          }}
        >
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: isMobile ? H2_SIZE_MOB : H2_SIZE,
              fontWeight: 400,
              color: DARK,
              margin: "0 0 16px",
              lineHeight: 1.1,
            }}
          >
            AI that actually understands<br />your students.
          </h2>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 17,
              color: MUTED,
              margin: "0 0 36px",
              lineHeight: 1.6,
            }}
          >
            Free to start. No credit card. Set up in under an hour.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <button
              style={{
                fontFamily: SANS,
                fontWeight: 600,
                fontSize: BTN_SIZE,
                color: "#fff",
                background: BLUE,
                border: "none",
                borderRadius: BTN_RADIUS,
                padding: BTN_PAD,
                cursor: "pointer",
                letterSpacing: "0.01em",
              }}
            >
              Get started free
            </button>
            <button
              style={{
                fontFamily: SANS,
                fontWeight: 600,
                fontSize: BTN_SIZE,
                color: DARK,
                background: "transparent",
                border: `1.5px solid rgba(26,26,30,0.2)`,
                borderRadius: BTN_RADIUS,
                padding: BTN_PAD,
                cursor: "pointer",
                letterSpacing: "0.01em",
              }}
            >
              Book a demo
            </button>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
