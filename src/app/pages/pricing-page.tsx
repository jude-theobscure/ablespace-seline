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

const STARTER_FEATURES = [
  "Up to 10 students",
  "All 9+ data types",
  "AI progress notes (5/month)",
  "Basic reports",
  "Mobile app access",
  "Email support",
];

const TEAM_FEATURES = [
  "Everything in Starter, plus:",
  "Unlimited students",
  "Unlimited AI notes",
  "All report templates",
  "Medicaid billing",
  "Rotating schedule",
  "Priority support",
  "Team collaboration",
];

const DISTRICT_FEATURES = [
  "Everything in Team, plus:",
  "Multi-school admin dashboard",
  "SSO / SIS integration",
  "Dedicated success manager",
  "Custom SLAs",
  "Training & onboarding",
  "Volume pricing",
];

const FAQ_ITEMS = [
  {
    q: "Is AbleSpace really free to start?",
    a: "Yes — the Starter plan is free forever with no credit card required. You get access to all data types, the mobile app, and 5 AI notes per month.",
  },
  {
    q: "What counts as a 'provider'?",
    a: "Any team member who logs sessions or collects data — speech therapists, OTs, PTs, school psychologists, BCBAs, and special education teachers.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes, you can upgrade, downgrade, or cancel at any time. If you downgrade, you keep access until the end of your billing period.",
  },
  {
    q: "Is my student data secure?",
    a: "Absolutely. AbleSpace is HIPAA, FERPA, and IDEA compliant. Data is encrypted in transit and at rest, and never used for AI training.",
  },
  {
    q: "Do you offer discounts for nonprofits?",
    a: "Yes — we offer special pricing for nonprofit organizations, charter schools, and Title I schools. Contact our team to learn more.",
  },
];

function CheckIcon({ color = BLUE }: { color?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ flexShrink: 0, marginTop: 1 }}
    >
      <circle cx="8" cy="8" r="8" fill={color} fillOpacity="0.12" />
      <path
        d="M4.5 8L7 10.5L11.5 6"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      style={{
        flexShrink: 0,
        transition: "transform 0.25s ease",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <path
        d="M4.5 7L9 11.5L13.5 7"
        stroke={MUTED}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureItem({ text, highlight, checkColor }: { text: string; highlight?: boolean; checkColor?: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        fontFamily: SANS,
        fontSize: 14,
        color: highlight ? MUTED : DARK,
        fontStyle: highlight ? "italic" : "normal",
        fontWeight: highlight ? 400 : 500,
        lineHeight: 1.5,
      }}
    >
      {!highlight && <CheckIcon color={checkColor} />}
      {highlight && (
        <div style={{ width: 16, height: 16, flexShrink: 0 }} />
      )}
      <span>{text}</span>
    </div>
  );
}

export function PricingPage() {
  const isMobile = useIsMobile();
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroReveal = useReveal();
  const cardsReveal = useReveal();
  const faqReveal = useReveal();
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
          background: `linear-gradient(160deg, ${BG} 0%, #EEEEE8 100%)`,
          padding: isMobile ? `${HERO_PT_MOB}px 0 ${HERO_PB_MOB}px` : `${HERO_PT}px 0 ${HERO_PB}px`,
          display: "flex",
          justifyContent: "center",
        }}
      >
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
              background: "rgba(83,174,243,0.12)",
              border: "1px solid rgba(83,174,243,0.25)",
              borderRadius: 100,
              padding: "5px 14px",
              marginBottom: 24,
            }}
          >
            <span style={{ fontFamily: SANS, fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: "0.07em" }}>
              SIMPLE PRICING
            </span>
          </div>

          <h1
            style={{
              fontFamily: SERIF,
              fontSize: isMobile ? H1_SIZE_MOB : H1_SIZE,
              fontWeight: 400,
              color: DARK,
              lineHeight: 1.08,
              margin: "0 0 20px",
            }}
          >
            Pricing that grows<br />with your team.
          </h1>

          <p
            style={{
              fontFamily: SANS,
              fontSize: BODY_SIZE,
              color: MUTED,
              lineHeight: 1.65,
              margin: "0 0 40px",
            }}
          >
            Start free, scale when you're ready. No hidden fees, no long-term contracts.
          </p>

          {/* Billing toggle */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0,
              background: "rgba(0,0,0,0.06)",
              borderRadius: 12,
              padding: 4,
            }}
          >
            {(["monthly", "annual"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setBilling(mode)}
                style={{
                  fontFamily: SANS,
                  fontWeight: 600,
                  fontSize: 14,
                  color: billing === mode ? DARK : MUTED,
                  background: billing === mode ? "#fff" : "transparent",
                  border: "none",
                  borderRadius: 9,
                  padding: "9px 20px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {mode === "monthly" ? "Monthly" : "Annual"}
                {mode === "annual" && (
                  <span
                    style={{
                      fontFamily: SANS,
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#16A34A",
                      background: "#F0FDF4",
                      border: "1px solid #BBF7D0",
                      borderRadius: 6,
                      padding: "2px 7px",
                      letterSpacing: "0.03em",
                    }}
                  >
                    Save 20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section style={{ background: "#fff", padding: isMobile ? `${SECT_PY_MOB}px 0` : `${SECT_PY}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
          <div
            ref={cardsReveal.ref}
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: CARD_GAP,
              alignItems: "stretch",
            }}
          >
            {/* Starter */}
            <div
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.09)",
                borderRadius: CARD_RADIUS,
                padding: isMobile ? "32px 24px" : "40px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                ...revealStyle(cardsReveal.vis, 0),
              }}
            >
              <div>
                <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 22, color: DARK, marginBottom: 8 }}>
                  Starter
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
                  <span style={{ fontFamily: SERIF, fontSize: 52, color: DARK, lineHeight: 1 }}>$0</span>
                  <span style={{ fontFamily: SANS, fontSize: 14, color: MUTED }}>forever free</span>
                </div>
                <p style={{ fontFamily: SANS, fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>
                  Perfect for individual providers getting started with digital data collection.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, flexGrow: 1 }}>
                {STARTER_FEATURES.map((f) => (
                  <FeatureItem key={f} text={f} checkColor={BLUE} />
                ))}
              </div>

              <button
                style={{
                  fontFamily: SANS,
                  fontWeight: 600,
                  fontSize: 15,
                  color: DARK,
                  background: "transparent",
                  border: "1.5px solid rgba(26,26,30,0.2)",
                  borderRadius: 12,
                  padding: "13px 24px",
                  cursor: "pointer",
                  width: "100%",
                  letterSpacing: "0.01em",
                  transition: "border-color 0.2s ease",
                }}
              >
                Get started free
              </button>
            </div>

            {/* Team */}
            <div
              style={{
                background: "#fff",
                border: `2px solid ${BLUE}`,
                borderRadius: CARD_RADIUS,
                padding: isMobile ? "32px 24px" : "40px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                transform: isMobile ? "none" : "scale(1.02)",
                ...revealStyle(cardsReveal.vis, 0.08),
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 22, color: DARK }}>
                    Team
                  </div>
                  <div
                    style={{
                      fontFamily: SANS,
                      fontSize: 11,
                      fontWeight: 700,
                      color: BLUE,
                      background: "rgba(83,174,243,0.12)",
                      border: `1px solid rgba(83,174,243,0.25)`,
                      borderRadius: 8,
                      padding: "4px 10px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    MOST POPULAR
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontFamily: SERIF, fontSize: 52, color: DARK, lineHeight: 1 }}>
                    {billing === "annual" ? "$39" : "$49"}
                  </span>
                  <span style={{ fontFamily: SANS, fontSize: 14, color: MUTED }}>/ provider / month</span>
                </div>
                {billing === "annual" && (
                  <div style={{ fontFamily: SANS, fontSize: 12, color: "#16A34A", fontWeight: 600, marginBottom: 8 }}>
                    Billed annually — save 20%
                  </div>
                )}
                <p style={{ fontFamily: SANS, fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>
                  For special ed teams who need full automation and compliance tools.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, flexGrow: 1 }}>
                {TEAM_FEATURES.map((f, i) => (
                  <FeatureItem key={f} text={f} highlight={i === 0} checkColor={BLUE} />
                ))}
              </div>

              <button
                style={{
                  fontFamily: SANS,
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#fff",
                  background: BLUE,
                  border: "none",
                  borderRadius: 12,
                  padding: "13px 24px",
                  cursor: "pointer",
                  width: "100%",
                  letterSpacing: "0.01em",
                }}
              >
                Start free trial
              </button>
            </div>

            {/* District */}
            <div
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.09)",
                borderRadius: CARD_RADIUS,
                padding: isMobile ? "32px 24px" : "40px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                ...revealStyle(cardsReveal.vis, 0.16),
              }}
            >
              <div>
                <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 22, color: DARK, marginBottom: 8 }}>
                  District
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
                  <span style={{ fontFamily: SERIF, fontSize: 52, color: DARK, lineHeight: 1 }}>Custom</span>
                </div>
                <p style={{ fontFamily: SANS, fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>
                  For districts managing multiple schools with centralized oversight and compliance.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, flexGrow: 1 }}>
                {DISTRICT_FEATURES.map((f, i) => (
                  <FeatureItem key={f} text={f} highlight={i === 0} checkColor={DARK} />
                ))}
              </div>

              <button
                style={{
                  fontFamily: SANS,
                  fontWeight: 600,
                  fontSize: 15,
                  color: DARK,
                  background: "transparent",
                  border: "1.5px solid rgba(26,26,30,0.2)",
                  borderRadius: 12,
                  padding: "13px 24px",
                  cursor: "pointer",
                  width: "100%",
                  letterSpacing: "0.01em",
                }}
              >
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: BG, padding: isMobile ? `${SECT_PY_MOB}px 0` : `${SECT_PY}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div
            ref={faqReveal.ref}
            style={{ textAlign: "center", marginBottom: 56, ...revealStyle(faqReveal.vis) }}
          >
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
              Frequently asked questions
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  style={{
                    borderTop: i === 0 ? "1px solid rgba(0,0,0,0.1)" : "none",
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                    ...revealStyle(faqReveal.vis, 0.06 * i),
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      padding: "20px 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: SANS,
                        fontWeight: 600,
                        fontSize: 16,
                        color: DARK,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.q}
                    </span>
                    <ChevronIcon open={isOpen} />
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? 300 : 0,
                      overflow: "hidden",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: SANS,
                        fontSize: 15,
                        color: MUTED,
                        lineHeight: 1.7,
                        margin: "0 0 20px",
                        paddingRight: 40,
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
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
            Start free today.<br />Upgrade when you're ready.
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
            No credit card. No commitment. Cancel anytime.
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
                border: "1.5px solid rgba(26,26,30,0.2)",
                borderRadius: BTN_RADIUS,
                padding: BTN_PAD,
                cursor: "pointer",
                letterSpacing: "0.01em",
              }}
            >
              Contact sales
            </button>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
