import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../components/shared";
import { TestimonialsSection } from "../components/testimonials-section";
import { FooterSection } from "../components/footer-section";
import {
  MAX_W, PAD_X, PAD_X_MOB, SECT_PY, SECT_PY_MOB,
  HERO_PT, HERO_PT_MOB, HERO_PB, HERO_PB_MOB,
  H1_SIZE, H1_SIZE_MOB, H2_SIZE, H2_SIZE_MOB,
  BODY_SIZE, STAT_SIZE, STAT_SIZE_MOB,
} from "./page-layout";

const SANS  = "'DM Sans', system-ui, sans-serif";
const SERIF = "'Instrument Serif', serif";
const BLUE  = "#53AEF3";
const DARK  = "#1A1A1E";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";

/* ─── Reveal hook ───────────────────────────────────────────────── */
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const triggered = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !triggered.current) {
        triggered.current = true; setVis(true); obs.disconnect();
      }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, vis };
}

const revealStyle = (vis: boolean, delay = 0): React.CSSProperties => ({
  opacity: vis ? 1 : 0,
  transform: vis ? "translateY(0)" : "translateY(28px)",
  transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
});

/* ─── Data (from PDF) ───────────────────────────────────────────── */
const FREE_FEATURES = [
  "AbleSpace AI",
  "Reports and Graphs",
  "Scheduling",
  "Unlimited Students",
  "Accommodations & Service Time",
  "Mobile App",
];

const CUSTOM_FEATURES = [
  "Admin Portal",
  "Staff and Admin Training",
  "Advanced Collaboration",
  "IEP System Integrations",
  "Single Sign On",
  "Dedicated Success Manager",
];

type RowType = { label: string; free: boolean; custom: boolean };

const COMPARE_ROWS: { section: string; rows: RowType[] }[] = [
  {
    section: "Data tracking",
    rows: [
      { label: "Unlimited Students",     free: true,  custom: true  },
      { label: "Standard Goal Types",    free: true,  custom: true  },
      { label: "Data Export",            free: true,  custom: true  },
      { label: "Student Groups",         free: false, custom: true  },
      { label: "HIPAA/FERPA Compliance", free: true,  custom: true  },
      { label: "Custom Goal Type",       free: false, custom: true  },
      { label: "Goal Tags",              free: false, custom: true  },
    ],
  },
  {
    section: "Data Visualization",
    rows: [
      { label: "Auto Generated Graphs",      free: true,  custom: true },
      { label: "Automated Reports",          free: true,  custom: true },
      { label: "Archive Students",           free: false, custom: true },
      { label: "Archive Goals",              free: false, custom: true },
      { label: "Data Averages",              free: false, custom: true },
      { label: "Reorder/Renumber Goals",     free: false, custom: true },
      { label: "Student Filters in Reports", free: false, custom: true },
      { label: "Print Caseload",             free: false, custom: true },
      { label: "Print Notes",                free: false, custom: true },
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "Is AbleSpace really free to start?",
    a: "Yes — the Free plan is free forever with no credit card required. You get access to all data types, the mobile app, and 5 AI progress notes per month.",
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
    q: "Do you offer discounts for nonprofits or Title I schools?",
    a: "Yes — we offer special pricing for nonprofit organizations, charter schools, and Title I schools. Contact our team to learn more.",
  },
];

const STATS = [
  { value: "90%", label: "report improvement in compliance" },
  { value: "4 hrs", label: "saved per week on average" },
  { value: "80%", label: "report improvement in collaboration" },
];

/* ─── Sub-components ────────────────────────────────────────────── */
function CheckIcon({ color = BLUE }: { color?: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="8.5" cy="8.5" r="8.5" fill={color} fillOpacity="0.13" />
      <path d="M5 8.5L7.5 11L12 6.5" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="8.5" cy="8.5" r="8.5" fill="rgba(0,0,0,0.05)" />
      <path d="M5.5 8.5h6" stroke={MUTED} strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
      style={{ flexShrink: 0, transition: "transform 0.25s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
      <path d="M4.5 7L9 11.5L13.5 7" stroke={MUTED} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureRow({ text, color }: { text: string; color?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: SANS, fontSize: 14, color: DARK, fontWeight: 400, lineHeight: 1.5 }}>
      <span style={{ fontFamily: SANS, fontSize: 16, color: color ?? BLUE, lineHeight: 1 }}>→</span>
      <span>{text}</span>
    </div>
  );
}

function CellVal({ val }: { val: boolean }) {
  return val ? <CheckIcon color={DARK} /> : <DashIcon />;
}

/* ─── Main component ────────────────────────────────────────────── */
export function PricingPage() {
  const isMobile = useIsMobile();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroReveal   = useReveal();
  const cardsReveal  = useReveal();
  const tableReveal  = useReveal();
  const statsReveal  = useReveal();
  const faqReveal    = useReveal();

  return (
    <div style={{ fontFamily: SANS, background: BG, overflowX: "hidden" }}>

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section style={{
        background: `linear-gradient(160deg, ${BG} 0%, #EEEEE8 100%)`,
        padding: isMobile
          ? `${HERO_PT_MOB}px 0 ${HERO_PB_MOB}px`
          : `${HERO_PT}px 0 ${HERO_PB}px`,
      }}>
        <div
          ref={heroReveal.ref}
          style={{
            maxWidth: MAX_W, margin: "0 auto",
            padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`,
            boxSizing: "border-box", width: "100%",
            textAlign: "center", ...revealStyle(heroReveal.vis),
          }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center",
            background: "rgba(83,174,243,0.12)",
            border: "1px solid rgba(83,174,243,0.25)",
            borderRadius: 100, padding: "5px 14px", marginBottom: 24,
          }}>
            <span style={{ fontFamily: SANS, fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: "0.07em" }}>
              SIMPLE PRICING
            </span>
          </div>

          <h1 style={{
            fontFamily: SERIF,
            fontSize: isMobile ? H1_SIZE_MOB : H1_SIZE,
            fontWeight: 400, color: DARK,
            lineHeight: 1.08, margin: "0 0 20px",
          }}>
            Start Free, Scale with Enterprise
          </h1>

          <p style={{
            fontFamily: SANS, fontSize: BODY_SIZE, color: MUTED,
            lineHeight: 1.65, margin: "0 auto",
            maxWidth: 560,
          }}>
            Digitize your Special Education Workflows with the only Caseload Management tool that offers IEP Goal Tracking, Reporting, Service Time Tracking, Medicaid Billing, and more.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PRICING CARDS
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: isMobile ? `${SECT_PY_MOB}px 0` : `${SECT_PY}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
          <div
            ref={cardsReveal.ref}
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 20,
              alignItems: "start",
            }}
          >

            {/* ── Free Plan ── */}
            <div style={{
              border: "1px solid rgba(0,0,0,0.09)",
              borderRadius: 16,
              padding: isMobile ? "32px 24px" : "40px 36px",
              display: "flex", flexDirection: "column", gap: 24,
              ...revealStyle(cardsReveal.vis, 0),
            }}>
              <div>
                <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 13, color: MUTED, marginBottom: 8 }}>
                  For Individuals
                </div>
                <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 26, color: DARK, marginBottom: 4 }}>
                  Free Plan
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontFamily: SERIF, fontSize: 56, color: DARK, lineHeight: 1 }}>$0</span>
                  <span style={{ fontFamily: SANS, fontSize: 14, color: MUTED }}>per month</span>
                </div>
              </div>

              <a
                href="#"
                style={{
                  display: "block", textAlign: "center",
                  fontFamily: SANS, fontWeight: 600, fontSize: 15,
                  color: "#fff", background: BLUE,
                  border: "none", borderRadius: 10,
                  padding: "13px 24px", cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Sign up for free →
              </a>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {FREE_FEATURES.map((f) => (
                  <FeatureRow key={f} text={f} color={BLUE} />
                ))}
              </div>
            </div>

            {/* ── Custom Plan ── */}
            <div style={{
              border: "1px solid rgba(0,0,0,0.09)",
              borderRadius: 16,
              padding: isMobile ? "32px 24px" : "40px 36px",
              display: "flex", flexDirection: "column", gap: 24,
              ...revealStyle(cardsReveal.vis, 0.08),
            }}>
              <div>
                <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 13, color: MUTED, marginBottom: 8 }}>
                  For Schools/Districts/Enterprises
                </div>
                <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 26, color: DARK, marginBottom: 4 }}>
                  Custom Plan
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontFamily: SERIF, fontSize: 40, color: DARK, lineHeight: 1.2 }}>Contact us</span>
                </div>
              </div>

              <a
                href="#"
                style={{
                  display: "block", textAlign: "center",
                  fontFamily: SANS, fontWeight: 600, fontSize: 15,
                  color: DARK, background: "transparent",
                  border: "1.5px solid rgba(26,26,30,0.2)",
                  borderRadius: 10, padding: "13px 24px",
                  cursor: "pointer", textDecoration: "none",
                }}
              >
                Contact us
              </a>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {CUSTOM_FEATURES.map((f) => (
                  <FeatureRow key={f} text={f} color={MUTED} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          COMPARE & DECIDE TABLE
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: BG, padding: isMobile ? `${SECT_PY_MOB}px 0` : `${SECT_PY}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>

          <div
            ref={tableReveal.ref}
            style={{ marginBottom: 40, ...revealStyle(tableReveal.vis) }}
          >
            <h2 style={{
              fontFamily: SERIF, fontWeight: 400,
              fontSize: isMobile ? H2_SIZE_MOB : H2_SIZE,
              color: DARK, margin: "0 0 8px", lineHeight: 1.1,
            }}>
              Compare &amp; Decide
            </h2>
          </div>

          <div style={{
            background: "#fff",
            borderRadius: 16,
            border: "1px solid rgba(0,0,0,0.08)",
            overflow: "hidden",
            ...revealStyle(tableReveal.vis, 0.08),
          }}>
            {/* Header */}
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 80px 80px" : "1fr 180px 180px",
              background: "#FAFAFA",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}>
              <div style={{ padding: isMobile ? "18px 16px" : "22px 32px" }} />
              {["Free", "Custom"].map((col) => (
                <div key={col} style={{
                  padding: isMobile ? "18px 8px" : "22px 20px",
                  textAlign: "center",
                  borderLeft: "1px solid rgba(0,0,0,0.08)",
                  fontFamily: SANS, fontSize: isMobile ? 13 : 15,
                  fontWeight: 700, color: DARK,
                }}>
                  {col}
                </div>
              ))}
            </div>

            {COMPARE_ROWS.map((group, gi) => (
              <div key={group.section}>
                {/* Section label */}
                <div style={{
                  padding: isMobile ? "12px 16px 8px" : "16px 32px 10px",
                  background: "#F7F7F5",
                  borderTop: gi === 0 ? "none" : "1px solid rgba(0,0,0,0.08)",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr 80px 80px" : "1fr 180px 180px",
                }}>
                  <span style={{
                    fontFamily: SANS, fontSize: 13, fontWeight: 700,
                    color: DARK,
                  }}>
                    {group.section}
                  </span>
                  <span style={{
                    textAlign: "center",
                    fontFamily: SANS, fontSize: 12, fontWeight: 500, color: MUTED,
                    borderLeft: "1px solid rgba(0,0,0,0.08)",
                  }}>
                    Free
                  </span>
                  <span style={{
                    textAlign: "center",
                    fontFamily: SANS, fontSize: 12, fontWeight: 500, color: MUTED,
                    borderLeft: "1px solid rgba(0,0,0,0.08)",
                  }}>
                    Custom
                  </span>
                </div>

                {group.rows.map((row, ri) => (
                  <div
                    key={row.label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: isMobile ? "1fr 80px 80px" : "1fr 180px 180px",
                      borderBottom: ri < group.rows.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
                    }}
                  >
                    <div style={{
                      padding: isMobile ? "13px 16px" : "15px 32px",
                      fontFamily: SANS, fontSize: isMobile ? 13 : 14, color: DARK, fontWeight: 400,
                    }}>
                      {row.label}
                    </div>
                    {[row.free, row.custom].map((val, ci) => (
                      <div key={ci} style={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        borderLeft: "1px solid rgba(0,0,0,0.05)",
                        padding: "13px 8px",
                      }}>
                        <CellVal val={val} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}

            {/* Footer CTA row */}
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 80px 80px" : "1fr 180px 180px",
              borderTop: "1px solid rgba(0,0,0,0.08)",
              background: "#FAFAFA",
              padding: "20px 0",
            }}>
              <div />
              {[
                { label: "Sign up for free", href: "#", primary: true },
                { label: "Contact Us", href: "#", primary: false },
              ].map((btn, bi) => (
                <div key={bi} style={{
                  padding: isMobile ? "0 8px" : "0 20px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderLeft: "1px solid rgba(0,0,0,0.08)",
                }}>
                  <a
                    href={btn.href}
                    style={{
                      display: "block", width: "100%", textAlign: "center",
                      fontFamily: SANS, fontWeight: 600,
                      fontSize: isMobile ? 11 : 13,
                      color: btn.primary ? "#fff" : DARK,
                      background: btn.primary ? BLUE : "transparent",
                      border: btn.primary ? "none" : "1.5px solid rgba(26,26,30,0.18)",
                      borderRadius: 8, padding: isMobile ? "9px 6px" : "10px 18px",
                      textDecoration: "none",
                    }}
                  >
                    {btn.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STAT STRIP
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: isMobile ? "56px 0" : "80px 0" }}>
        <div
          ref={statsReveal.ref}
          style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}
        >
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? 40 : 0,
          }}>
            {STATS.map((s, i) => (
              <div key={s.value} style={{
                textAlign: "center",
                borderRight: (!isMobile && i < STATS.length - 1) ? "1px solid rgba(0,0,0,0.08)" : "none",
                padding: isMobile ? 0 : "0 40px",
                ...revealStyle(statsReveal.vis, i * 0.1),
              }}>
                <div style={{
                  fontFamily: SERIF,
                  fontSize: isMobile ? STAT_SIZE_MOB : STAT_SIZE,
                  color: DARK, lineHeight: 1, marginBottom: 8,
                }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: SANS, fontSize: 15, color: MUTED, lineHeight: 1.5 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* ══════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: BG, padding: isMobile ? `${SECT_PY_MOB}px 0` : `${SECT_PY}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div ref={faqReveal.ref} style={{ textAlign: "center", marginBottom: 56, ...revealStyle(faqReveal.vis) }}>
              <h2 style={{
                fontFamily: SERIF, fontWeight: 400,
                fontSize: isMobile ? H2_SIZE_MOB : H2_SIZE,
                color: DARK, margin: 0, lineHeight: 1.1,
              }}>
                Frequently asked questions
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} style={{
                    borderTop: "1px solid rgba(0,0,0,0.09)",
                    borderBottom: i === FAQ_ITEMS.length - 1 ? "1px solid rgba(0,0,0,0.09)" : "none",
                    ...revealStyle(faqReveal.vis, 0.05 * i),
                  }}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      style={{
                        width: "100%", display: "flex", alignItems: "center",
                        justifyContent: "space-between", gap: 16,
                        padding: "22px 0", background: "none", border: "none",
                        cursor: "pointer", textAlign: "left",
                      }}
                    >
                      <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: 16, color: DARK, lineHeight: 1.4 }}>
                        {item.q}
                      </span>
                      <ChevronIcon open={isOpen} />
                    </button>
                    <div style={{ maxHeight: isOpen ? 300 : 0, overflow: "hidden", transition: "max-height 0.3s ease" }}>
                      <p style={{ fontFamily: SANS, fontSize: 15, color: MUTED, lineHeight: 1.75, margin: "0 0 22px", paddingRight: 40 }}>
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

      <FooterSection />

    </div>
  );
}
