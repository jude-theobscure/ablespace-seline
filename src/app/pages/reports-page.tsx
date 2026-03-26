import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../components/shared";

const SANS  = "'DM Sans', system-ui, sans-serif";
const SERIF = "'Instrument Serif', serif";
const BLUE  = "#53AEF3";
const DARK  = "#1A1A1E";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";

const BADGE_BG   = ["#EDE8F8","#E0F7F5","#FEF3C7","#E0F2FE","#FCE7F3","#F0FDF4"];
const ICON_COLOR = ["#6B5ECD","#0DB8A0","#D97706","#0284C7","#DB2777","#16A34A"];

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

const STATS = [
  { value: "20+", label: "Report templates" },
  { value: "1-click", label: "Generation" },
  { value: "100%", label: "Audit-ready" },
  { value: "5 min", label: "Meeting prep time" },
];

const FEATURES = [
  {
    emoji: "📈",
    title: "Progress Reports",
    desc: "Auto-generated graphs showing each student's progress on every IEP goal. Ready to share at the click of a button.",
    tags: ["IEP Goals","Graphs","Sharing"],
  },
  {
    emoji: "🏛",
    title: "Compliance Reports",
    desc: "Document every service, accommodation, and intervention with timestamped audit trails that satisfy IDEA, HIPAA, and FERPA.",
    tags: ["IDEA","HIPAA","FERPA"],
  },
  {
    emoji: "💼",
    title: "Billing Summaries",
    desc: "Monthly, quarterly, and annual billing summaries broken down by provider, student, and service type.",
    tags: ["Billing","Medicaid","Finance"],
  },
  {
    emoji: "👥",
    title: "Caseload Reports",
    desc: "See each provider's full caseload at a glance — minutes delivered, goals addressed, and upcoming reviews.",
    tags: ["Caseload","Providers","Oversight"],
  },
  {
    emoji: "📋",
    title: "IEP Meeting Packets",
    desc: "Generate a complete IEP meeting packet — current levels, goal progress, and service logs — in under 60 seconds.",
    tags: ["IEP Meetings","Packets","Efficiency"],
  },
  {
    emoji: "🗂",
    title: "Custom Report Builder",
    desc: "Build and save custom report templates for your district's specific reporting requirements.",
    tags: ["Custom","Templates","District"],
  },
];

const STEPS = [
  {
    num: "01",
    title: "Choose your report",
    desc: "Select from 20+ pre-built templates or build a custom report for your district's specific needs.",
  },
  {
    num: "02",
    title: "Set your filters",
    desc: "Filter by student, provider, date range, goal, or service type. Preview before you generate.",
  },
  {
    num: "03",
    title: "Export and share",
    desc: "Download as PDF or CSV, or share a secure link directly with parents, administrators, or state reviewers.",
  },
];

export function ReportsPage() {
  const isMobile = useIsMobile();

  const hero     = useReveal();
  const stats    = useReveal();
  const features = useReveal();
  const steps    = useReveal();
  const cta      = useReveal();

  const [hovA, setHovA] = useState(false);
  const [hovB, setHovB] = useState(false);
  const [hovCtaA, setHovCtaA] = useState(false);
  const [hovCtaB, setHovCtaB] = useState(false);
  const [hovCard, setHovCard] = useState<number | null>(null);

  const fade = (vis: boolean, delay = 0): React.CSSProperties => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 650ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 650ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <div style={{ backgroundColor: BG, minHeight: "100vh", fontFamily: SANS }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(160deg, #F0F7FF 0%, #F8F8F5 55%, #F5F0FF 100%)",
        padding: isMobile ? "80px 20px 60px" : "120px 80px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Blobs */}
        <div style={{
          position: "absolute", top: -80, right: -60,
          width: 420, height: 420,
          background: "radial-gradient(ellipse, rgba(83,174,243,0.13) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -100, left: -80,
          width: 360, height: 360,
          background: "radial-gradient(ellipse, rgba(107,94,205,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div
          ref={hero.ref}
          style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, ...fade(hero.vis) }}
        >
          {/* Label pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(83,174,243,0.10)",
            border: "1px solid rgba(83,174,243,0.20)",
            borderRadius: 9999, padding: "5px 14px", marginBottom: 28,
          }}>
            <span style={{ fontSize: 12, color: BLUE }}>📊</span>
            <span style={{ fontFamily: SANS, fontWeight: 500, fontSize: 12, color: BLUE, letterSpacing: "0.5px" }}>
              Reports & Analytics
            </span>
          </div>

          <h1 style={{
            fontFamily: SERIF, fontWeight: 400,
            fontSize: isMobile ? 38 : 62,
            lineHeight: 1.08, color: DARK,
            margin: "0 0 22px", letterSpacing: "-0.5px",
          }}>
            Every report your team<br />needs, in seconds.
          </h1>

          <p style={{
            fontFamily: SANS, fontWeight: 300, fontSize: isMobile ? 16 : 20,
            color: MUTED, lineHeight: 1.65, margin: "0 0 36px", maxWidth: 560,
          }}>
            AbleSpace auto-generates 20+ report types — from IEP progress to billing summaries — so your team is always ready for any meeting, audit, or review.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#"
              onMouseEnter={() => setHovA(true)}
              onMouseLeave={() => setHovA(false)}
              style={{
                display: "inline-flex", alignItems: "center",
                height: 48, padding: "0 28px", borderRadius: 12,
                fontFamily: SANS, fontWeight: 500, fontSize: 15,
                background: hovA ? "#3D9FE8" : BLUE, color: "#fff",
                textDecoration: "none",
                transition: "background 0.18s, transform 0.15s",
                transform: hovA ? "translateY(-1px)" : "none",
              }}
            >
              Explore Reports →
            </a>
            <a
              href="#"
              onMouseEnter={() => setHovB(true)}
              onMouseLeave={() => setHovB(false)}
              style={{
                display: "inline-flex", alignItems: "center",
                height: 48, padding: "0 28px", borderRadius: 12,
                fontFamily: SANS, fontWeight: 400, fontSize: 15,
                background: hovB ? "rgba(0,0,0,0.04)" : "transparent",
                color: DARK, textDecoration: "none",
                border: "1.5px solid rgba(0,0,0,0.18)",
                transition: "background 0.18s",
              }}
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────── */}
      <div style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div
          ref={stats.ref}
          style={{
            maxWidth: 1200, margin: "0 auto",
            padding: isMobile ? "32px 20px" : "32px 80px",
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
            gap: isMobile ? "24px 16px" : 0,
            ...fade(stats.vis),
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                textAlign: "center",
                borderRight: !isMobile && i < STATS.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
                padding: isMobile ? 0 : "0 32px",
              }}
            >
              <div style={{ fontFamily: SERIF, fontWeight: 400, fontSize: isMobile ? 32 : 40, color: DARK, lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontFamily: SANS, fontWeight: 400, fontSize: 13, color: MUTED, marginTop: 6 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Features grid ────────────────────────────────────── */}
      <section style={{ background: BG, padding: isMobile ? "60px 20px" : "100px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={features.ref}>
            <div style={{ textAlign: "center", marginBottom: 16, ...fade(features.vis) }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(83,174,243,0.10)",
                border: "1px solid rgba(83,174,243,0.20)",
                borderRadius: 9999, padding: "5px 14px",
              }}>
                <span style={{ fontFamily: SANS, fontWeight: 500, fontSize: 12, color: BLUE, letterSpacing: "0.5px" }}>
                  Report Types
                </span>
              </div>
            </div>

            <h2 style={{
              fontFamily: SERIF, fontWeight: 400,
              fontSize: isMobile ? 32 : 46,
              lineHeight: 1.1, color: DARK,
              textAlign: "center", margin: "0 0 56px",
              ...fade(features.vis, 80),
            }}>
              One platform. Every report<br />your district will ever need.
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
              gap: 20,
            }}>
              {FEATURES.map((f, i) => (
                <div
                  key={f.title}
                  onMouseEnter={() => setHovCard(i)}
                  onMouseLeave={() => setHovCard(null)}
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderRadius: 20,
                    padding: "28px 28px 32px",
                    cursor: "default",
                    boxShadow: hovCard === i ? "0 12px 40px rgba(0,0,0,0.10)" : "0 2px 12px rgba(0,0,0,0.05)",
                    transform: hovCard === i ? "translateY(-3px)" : "translateY(0)",
                    transition: "box-shadow 0.22s ease, transform 0.22s ease",
                    opacity: features.vis ? 1 : 0,
                  }}
                >
                  <div style={{
                    width: 48, height: 48,
                    background: BADGE_BG[i % BADGE_BG.length],
                    borderRadius: 14,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 18,
                    fontSize: 22,
                  }}>
                    {f.emoji}
                  </div>

                  <h3 style={{
                    fontFamily: SANS, fontWeight: 600, fontSize: 16,
                    color: DARK, margin: "0 0 10px",
                  }}>{f.title}</h3>

                  <p style={{
                    fontFamily: SANS, fontWeight: 300, fontSize: 14.5,
                    color: MUTED, margin: "0 0 18px", lineHeight: 1.65,
                  }}>{f.desc}</p>

                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {f.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: SANS, fontWeight: 500, fontSize: 11.5,
                          color: ICON_COLOR[i % ICON_COLOR.length],
                          background: BADGE_BG[i % BADGE_BG.length],
                          borderRadius: 9999, padding: "3px 10px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: isMobile ? "60px 20px" : "100px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={steps.ref}>
            <div style={{ textAlign: "center", marginBottom: 16, ...fade(steps.vis) }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(83,174,243,0.10)",
                border: "1px solid rgba(83,174,243,0.20)",
                borderRadius: 9999, padding: "5px 14px",
              }}>
                <span style={{ fontFamily: SANS, fontWeight: 500, fontSize: 12, color: BLUE, letterSpacing: "0.5px" }}>
                  How It Works
                </span>
              </div>
            </div>

            <h2 style={{
              fontFamily: SERIF, fontWeight: 400,
              fontSize: isMobile ? 32 : 46,
              lineHeight: 1.1, color: DARK,
              textAlign: "center", margin: "0 0 64px",
              ...fade(steps.vis, 80),
            }}>
              Any report, in three steps.
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
              gap: isMobile ? 40 : 0,
              position: "relative",
            }}>
              {!isMobile && (
                <div style={{
                  position: "absolute",
                  top: 24, left: "16.67%", right: "16.67%",
                  height: 1,
                  background: "rgba(83,174,243,0.30)",
                  zIndex: 0,
                }} />
              )}

              {STEPS.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    textAlign: "center",
                    padding: isMobile ? 0 : "0 40px",
                    position: "relative", zIndex: 1,
                    opacity: steps.vis ? 1 : 0,
                    transform: steps.vis ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 600ms ease ${i * 130}ms, transform 600ms ease ${i * 130}ms`,
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: BLUE, color: "#fff",
                    fontFamily: SANS, fontWeight: 700, fontSize: 14,
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 22,
                    boxShadow: "0 4px 16px rgba(83,174,243,0.35)",
                  }}>
                    {step.num}
                  </div>
                  <h3 style={{
                    fontFamily: SANS, fontWeight: 600, fontSize: 17,
                    color: DARK, margin: "0 0 10px",
                  }}>{step.title}</h3>
                  <p style={{
                    fontFamily: SANS, fontWeight: 300, fontSize: 14.5,
                    color: MUTED, margin: 0, lineHeight: 1.65,
                  }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA banner ───────────────────────────────────────── */}
      <section style={{ background: BG, padding: isMobile ? "40px 20px 80px" : "60px 80px 100px" }}>
        <div
          ref={cta.ref}
          style={{
            maxWidth: 1200, margin: "0 auto",
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: 28,
            padding: isMobile ? "48px 24px" : "72px 80px",
            textAlign: "center",
            position: "relative", overflow: "hidden",
            boxShadow: "0 4px 40px rgba(0,0,0,0.06)",
            ...fade(cta.vis),
          }}
        >
          {/* Blobs */}
          <div style={{
            position: "absolute", top: -60, right: -60,
            width: 320, height: 320,
            background: "radial-gradient(ellipse, rgba(83,174,243,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -60, left: -60,
            width: 280, height: 280,
            background: "radial-gradient(ellipse, rgba(107,94,205,0.09) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(83,174,243,0.10)",
              border: "1px solid rgba(83,174,243,0.20)",
              borderRadius: 9999, padding: "5px 14px", marginBottom: 24,
            }}>
              <span style={{ fontFamily: SANS, fontWeight: 500, fontSize: 12, color: BLUE, letterSpacing: "0.5px" }}>
                Always audit-ready
              </span>
            </div>

            <h2 style={{
              fontFamily: SERIF, fontWeight: 400,
              fontSize: isMobile ? 32 : 50,
              lineHeight: 1.1, color: DARK,
              margin: "0 0 16px",
            }}>
              Stop scrambling before<br />every meeting.
            </h2>

            <p style={{
              fontFamily: SANS, fontWeight: 300, fontSize: isMobile ? 15 : 18,
              color: MUTED, margin: "0 0 36px", lineHeight: 1.6,
              maxWidth: 440, marginLeft: "auto", marginRight: "auto",
            }}>
              Every report your team needs — generated in one click, always up to date, always compliant.
            </p>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="#"
                onMouseEnter={() => setHovCtaA(true)}
                onMouseLeave={() => setHovCtaA(false)}
                style={{
                  display: "inline-flex", alignItems: "center",
                  height: 48, padding: "0 28px", borderRadius: 12,
                  fontFamily: SANS, fontWeight: 500, fontSize: 15,
                  background: hovCtaA ? "#3D9FE8" : BLUE, color: "#fff",
                  textDecoration: "none",
                  transition: "background 0.18s, transform 0.15s",
                  transform: hovCtaA ? "translateY(-1px)" : "none",
                }}
              >
                Try Reports Free →
              </a>
              <a
                href="#"
                onMouseEnter={() => setHovCtaB(true)}
                onMouseLeave={() => setHovCtaB(false)}
                style={{
                  display: "inline-flex", alignItems: "center",
                  height: 48, padding: "0 28px", borderRadius: 12,
                  fontFamily: SANS, fontWeight: 400, fontSize: 15,
                  background: hovCtaB ? "rgba(0,0,0,0.04)" : "transparent",
                  color: DARK, textDecoration: "none",
                  border: "1.5px solid rgba(0,0,0,0.18)",
                  transition: "background 0.18s",
                }}
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
