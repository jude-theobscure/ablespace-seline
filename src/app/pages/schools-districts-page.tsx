import React, { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../components/shared";

/* ── Tokens ─────────────────────────────────────────────────── */
const SERIF = "'Instrument Serif', serif";
const SANS  = "'DM Sans', system-ui, sans-serif";
const DARK  = "#1A1A1E";
const BLUE  = "#53AEF3";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";
const TINT  = "#EFEFED";

/* ── Scroll-reveal hook ─────────────────────────────────────── */
function useReveal(ref: React.RefObject<HTMLElement | null>, onReveal: () => void) {
  const triggered = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true;
        onReveal();
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
}

/* ── Data ───────────────────────────────────────────────────── */
const STATS = [
  { value: "500+", label: "Schools using AbleSpace" },
  { value: "120k+", label: "Students tracked" },
  { value: "3 hrs", label: "Saved per provider daily" },
  { value: "100%", label: "IDEA compliant" },
];

const CHALLENGES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L3 7v5c0 4.4 3.4 7.7 8 8.5 4.6-.8 8-4.1 8-8.5V7L11 3z"
          stroke={BLUE} strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 11l2 2 4-4" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Compliance risk",
    desc: "IDEA, HIPAA, and FERPA requirements are constantly evolving. Manual tracking leaves districts exposed to costly audit failures.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke={BLUE} strokeWidth="1.5"/>
        <rect x="12" y="3" width="7" height="7" rx="1.5" stroke={BLUE} strokeWidth="1.5"/>
        <rect x="3" y="12" width="7" height="7" rx="1.5" stroke={BLUE} strokeWidth="1.5"/>
        <rect x="12" y="12" width="7" height="7" rx="1.5" stroke={BLUE} strokeWidth="1.5"/>
      </svg>
    ),
    title: "Fragmented tools",
    desc: "Teams juggle spreadsheets, paper forms, and disconnected apps. Data silos slow down IEP meetings and create inconsistent records.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke={BLUE} strokeWidth="1.5"/>
        <path d="M11 7v4.5l3 2" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Staff time drain",
    desc: "Providers spend 3+ hours daily on paperwork instead of students. High turnover means repeated onboarding costs and lost institutional knowledge.",
  },
];

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5h14M3 10h14M3 15h8" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "District-wide Dashboard",
    desc: "A single view of all schools, providers, students, and IEP compliance status across your entire district.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="8" cy="7" r="3" stroke={BLUE} strokeWidth="1.5"/>
        <path d="M3 17c0-3 2.2-5 5-5h4c2.8 0 5 2 5 5" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 5l1.5 1.5L19 4" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Bulk User Management",
    desc: "Onboard your entire special education staff in minutes. Assign roles, schools, and caseloads in bulk — no manual setup.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke={BLUE} strokeWidth="1.5"/>
        <path d="M7 4V2M13 4V2M2 8h16" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "SSO & Integrations",
    desc: "Connect with Google Workspace, Microsoft Azure AD, and your existing SIS. One login, zero friction for staff.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 14l4-4 3 3 5-6" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="2" width="16" height="16" rx="2" stroke={BLUE} strokeWidth="1.5"/>
      </svg>
    ),
    title: "Compliance Reporting",
    desc: "Auto-generated IDEA compliance reports, audit-ready exports, and real-time alerts when a student's IEP is at risk.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L3 6v5c0 4 2.8 7 7 8 4.2-1 7-4 7-8V6L10 2z"
          stroke={BLUE} strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Data Migration",
    desc: "Our team handles the full migration from your existing IEP system. Zero downtime, zero data loss, full continuity.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke={BLUE} strokeWidth="1.5"/>
        <path d="M10 6v4.5l3 1.5" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Dedicated Success Manager",
    desc: "Every district account gets a named success manager for onboarding, training, and ongoing support — not a ticket queue.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Discovery call",
    desc: "We learn your district's size, current tools, compliance needs, and rollout timeline. No generic demos — a real conversation.",
  },
  {
    num: "02",
    title: "Setup & migration",
    desc: "Our team configures AbleSpace for your district, migrates existing data, and sets up SSO and integrations in under a week.",
  },
  {
    num: "03",
    title: "Staff training & launch",
    desc: "Live training sessions for administrators and providers. Ongoing support from your dedicated success manager.",
  },
];

const TESTIMONIALS = [
  {
    quote: "We rolled out AbleSpace across 14 schools in one semester. The compliance reporting alone paid for itself — we passed our state audit without a single finding.",
    name: "Dr. Patricia M.",
    role: "Executive Director of Special Education, Austin ISD",
    initials: "PM",
    bg: "#EDE8F8",
    color: "#6B5ECD",
  },
  {
    quote: "The district dashboard gives me visibility I've never had before. I can see which providers are behind on IEPs and fix it before it becomes a compliance issue.",
    name: "James R.",
    role: "Director of Student Services, Riverside USD",
    initials: "JR",
    bg: "#E0F7F5",
    color: "#0DB8A0",
  },
];

/* ════════════════════════════════════════════════════════════ */
export function SchoolsDistrictsPage() {
  const isMobile = useIsMobile();

  /* Reveal state */
  const heroRef      = useRef<HTMLDivElement>(null);
  const statsRef     = useRef<HTMLDivElement>(null);
  const challengeRef = useRef<HTMLDivElement>(null);
  const featuresRef  = useRef<HTMLDivElement>(null);
  const stepsRef     = useRef<HTMLDivElement>(null);
  const testiRef     = useRef<HTMLDivElement>(null);
  const ctaRef       = useRef<HTMLDivElement>(null);

  const [heroVis,      setHeroVis]      = useState(false);
  const [statsVis,     setStatsVis]     = useState(false);
  const [challengeVis, setChallengeVis] = useState(false);
  const [featuresVis,  setFeaturesVis]  = useState(false);
  const [stepsVis,     setStepsVis]     = useState(false);
  const [testiVis,     setTestiVis]     = useState(false);
  const [ctaVis,       setCtaVis]       = useState(false);

  const [hovA, setHovA] = useState(false);
  const [hovB, setHovB] = useState(false);
  const [hovCtaA, setHovCtaA] = useState(false);
  const [hovCtaB, setHovCtaB] = useState(false);

  useReveal(heroRef,      () => setHeroVis(true));
  useReveal(statsRef,     () => setStatsVis(true));
  useReveal(challengeRef, () => setChallengeVis(true));
  useReveal(featuresRef,  () => setFeaturesVis(true));
  useReveal(stepsRef,     () => setStepsVis(true));
  useReveal(testiRef,     () => setTestiVis(true));
  useReveal(ctaRef,       () => setCtaVis(true));

  const fade = (vis: boolean, delay = 0): React.CSSProperties => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 650ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 650ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <div style={{ backgroundColor: BG, minHeight: "100vh" }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(160deg, #EEF6FE 0%, ${BG} 60%)`,
        padding: isMobile ? "80px 20px 60px" : "120px 80px 80px",
        maxWidth: 1200, margin: "0 auto", boxSizing: "border-box",
      }}>
        <div ref={heroRef} style={{ maxWidth: 720, ...fade(heroVis) }}>

          {/* Label */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(83,174,243,0.10)",
            border: "1px solid rgba(83,174,243,0.20)",
            borderRadius: 9999, padding: "5px 14px", marginBottom: 24,
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 6h6M6 3v6" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span style={{ fontFamily: SANS, fontWeight: 500, fontSize: 12, color: BLUE, letterSpacing: "0.5px" }}>
              For Schools &amp; Districts
            </span>
          </div>

          <h1 style={{
            fontFamily: SERIF, fontWeight: 400,
            fontSize: isMobile ? 38 : 60,
            lineHeight: 1.08, color: DARK,
            margin: "0 0 20px", letterSpacing: "-0.5px",
          }}>
            Special education,<br />simplified for your<br />
            <span style={{ color: BLUE }}>entire district.</span>
          </h1>

          <p style={{
            fontFamily: SANS, fontWeight: 300, fontSize: isMobile ? 16 : 19,
            color: MUTED, lineHeight: 1.65, margin: "0 0 36px", maxWidth: 560,
          }}>
            AbleSpace gives district administrators full visibility, providers back their time,
            and students the consistent support they deserve — all in one IDEA-compliant platform.
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
                textDecoration: "none", transition: "background 0.18s, transform 0.15s",
                transform: hovA ? "translateY(-1px)" : "none",
              }}
            >
              Get a Quote →
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
      <div style={{ background: TINT, borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div
          ref={statsRef}
          style={{
            maxWidth: 1200, margin: "0 auto",
            padding: isMobile ? "32px 20px" : "32px 80px",
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
            gap: isMobile ? "24px 16px" : 0,
            ...fade(statsVis),
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
              <div style={{
                fontFamily: SERIF, fontWeight: 400, fontSize: isMobile ? 32 : 40,
                color: DARK, lineHeight: 1,
              }}>{s.value}</div>
              <div style={{
                fontFamily: SANS, fontWeight: 400, fontSize: 13,
                color: MUTED, marginTop: 6,
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Challenges ───────────────────────────────────────── */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={challengeRef} style={{ ...fade(challengeVis) }}>
            <p style={{
              fontFamily: SANS, fontWeight: 500, fontSize: 12,
              color: BLUE, letterSpacing: "2px", textTransform: "uppercase",
              margin: "0 0 14px", textAlign: "center",
            }}>The Problem</p>
            <h2 style={{
              fontFamily: SERIF, fontWeight: 400,
              fontSize: isMobile ? 32 : 46,
              lineHeight: 1.1, color: DARK,
              textAlign: "center", margin: "0 0 16px",
            }}>
              Districts are stretched thin.<br />The paperwork never stops.
            </h2>
            <p style={{
              fontFamily: SANS, fontWeight: 300, fontSize: 17,
              color: MUTED, textAlign: "center", maxWidth: 520,
              margin: "0 auto 56px", lineHeight: 1.65,
            }}>
              Special education teams are doing incredible work — but outdated systems
              are slowing them down and putting districts at risk.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
              gap: 20,
            }}>
              {CHALLENGES.map((c, i) => (
                <div
                  key={c.title}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderRadius: 20,
                    padding: "28px 28px 32px",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                    opacity: challengeVis ? 1 : 0,
                    transform: challengeVis ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 600ms ease ${i * 100}ms, transform 600ms ease ${i * 100}ms`,
                  }}
                >
                  <div style={{
                    width: 44, height: 44,
                    background: "rgba(83,174,243,0.08)",
                    border: "1px solid rgba(83,174,243,0.16)",
                    borderRadius: 12,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 18,
                  }}>
                    {c.icon}
                  </div>
                  <h3 style={{
                    fontFamily: SANS, fontWeight: 600, fontSize: 17,
                    color: DARK, margin: "0 0 10px",
                  }}>{c.title}</h3>
                  <p style={{
                    fontFamily: SANS, fontWeight: 300, fontSize: 14.5,
                    color: MUTED, margin: 0, lineHeight: 1.65,
                  }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section style={{ background: TINT, padding: isMobile ? "60px 20px" : "100px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={featuresRef} style={{ ...fade(featuresVis) }}>
            <p style={{
              fontFamily: SANS, fontWeight: 500, fontSize: 12,
              color: BLUE, letterSpacing: "2px", textTransform: "uppercase",
              margin: "0 0 14px", textAlign: "center",
            }}>Built for Districts</p>
            <h2 style={{
              fontFamily: SERIF, fontWeight: 400,
              fontSize: isMobile ? 32 : 46,
              lineHeight: 1.1, color: DARK,
              textAlign: "center", margin: "0 0 56px",
            }}>
              Everything a district needs,<br />nothing it doesn't.
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
              gap: 16,
            }}>
              {FEATURES.map((f, i) => (
                <div
                  key={f.title}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderRadius: 18,
                    padding: "24px 24px 28px",
                    opacity: featuresVis ? 1 : 0,
                    transform: featuresVis ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 550ms ease ${i * 70}ms, transform 550ms ease ${i * 70}ms`,
                  }}
                >
                  <div style={{
                    width: 40, height: 40,
                    background: "rgba(83,174,243,0.08)",
                    border: "1px solid rgba(83,174,243,0.14)",
                    borderRadius: 10,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 14,
                  }}>
                    {f.icon}
                  </div>
                  <h3 style={{
                    fontFamily: SANS, fontWeight: 600, fontSize: 15.5,
                    color: DARK, margin: "0 0 8px",
                  }}>{f.title}</h3>
                  <p style={{
                    fontFamily: SANS, fontWeight: 300, fontSize: 14,
                    color: MUTED, margin: 0, lineHeight: 1.65,
                  }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={stepsRef}>
            <p style={{
              fontFamily: SANS, fontWeight: 500, fontSize: 12,
              color: BLUE, letterSpacing: "2px", textTransform: "uppercase",
              margin: "0 0 14px", textAlign: "center",
              ...fade(stepsVis),
            }}>How It Works</p>
            <h2 style={{
              fontFamily: SERIF, fontWeight: 400,
              fontSize: isMobile ? 32 : 46,
              lineHeight: 1.1, color: DARK,
              textAlign: "center", margin: "0 0 56px",
              ...fade(stepsVis),
            }}>
              From contract to launch<br />in under two weeks.
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
              gap: isMobile ? 32 : 0,
              position: "relative",
            }}>
              {/* Connector line */}
              {!isMobile && (
                <div style={{
                  position: "absolute",
                  top: 22, left: "16.67%", right: "16.67%",
                  height: 1,
                  background: "linear-gradient(90deg, rgba(83,174,243,0.3) 0%, rgba(83,174,243,0.3) 100%)",
                  zIndex: 0,
                }} />
              )}

              {STEPS.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    textAlign: "center", padding: isMobile ? 0 : "0 40px",
                    position: "relative", zIndex: 1,
                    opacity: stepsVis ? 1 : 0,
                    transform: stepsVis ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 600ms ease ${i * 120}ms, transform 600ms ease ${i * 120}ms`,
                  }}
                >
                  {/* Step circle */}
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: BLUE, color: "#fff",
                    fontFamily: SANS, fontWeight: 700, fontSize: 13,
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20,
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

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section style={{ background: TINT, padding: isMobile ? "60px 20px" : "100px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div ref={testiRef}>
            <p style={{
              fontFamily: SANS, fontWeight: 500, fontSize: 12,
              color: BLUE, letterSpacing: "2px", textTransform: "uppercase",
              margin: "0 0 14px", textAlign: "center", ...fade(testiVis),
            }}>Trusted By Districts</p>
            <h2 style={{
              fontFamily: SERIF, fontWeight: 400,
              fontSize: isMobile ? 32 : 46,
              lineHeight: 1.1, color: DARK,
              textAlign: "center", margin: "0 0 48px", ...fade(testiVis),
            }}>
              What district leaders say.
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)",
              gap: 20,
            }}>
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={t.name}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderRadius: 24,
                    padding: isMobile ? "28px 24px" : "36px 40px",
                    boxShadow: "0 4px 28px rgba(0,0,0,0.06)",
                    opacity: testiVis ? 1 : 0,
                    transform: testiVis ? "translateY(0)" : "translateY(28px)",
                    transition: `opacity 600ms ease ${i * 120}ms, transform 600ms ease ${i * 120}ms`,
                  }}
                >
                  <div style={{
                    fontFamily: SERIF, fontWeight: 400, fontSize: 60,
                    color: "rgba(83,174,243,0.20)", lineHeight: 0.8, marginBottom: 16,
                  }}>"</div>
                  <p style={{
                    fontFamily: SERIF, fontWeight: 400, fontStyle: "italic",
                    fontSize: isMobile ? 16 : 19,
                    color: DARK, lineHeight: 1.6, margin: "0 0 24px",
                  }}>
                    {t.quote}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: "50%",
                      background: t.bg, display: "flex",
                      alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <span style={{ fontFamily: SANS, fontWeight: 700, fontSize: 14, color: t.color }}>
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 14, color: DARK }}>
                        {t.name}
                      </div>
                      <div style={{ fontFamily: SANS, fontWeight: 400, fontSize: 12.5, color: MUTED }}>
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Compliance banner ────────────────────────────────── */}
      <section style={{ padding: isMobile ? "40px 20px" : "56px 80px" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          background: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.07)",
          borderRadius: 20,
          padding: isMobile ? "24px 20px" : "32px 48px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: 20,
        }}>
          <div>
            <p style={{
              fontFamily: SANS, fontWeight: 600, fontSize: 15,
              color: DARK, margin: "0 0 4px",
            }}>Enterprise-grade compliance & security</p>
            <p style={{ fontFamily: SANS, fontWeight: 300, fontSize: 13.5, color: MUTED, margin: 0 }}>
              Every district plan includes full IDEA compliance tools, HIPAA/FERPA protections, and ISO 27001 certified infrastructure.
            </p>
          </div>
          <div style={{ display: "flex", gap: 24, flexShrink: 0, flexWrap: "wrap" }}>
            {["HIPAA", "FERPA", "ISO 27001", "1EdTech"].map((badge) => (
              <div key={badge} style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: SANS, fontWeight: 700, fontSize: 12,
                  color: DARK, letterSpacing: "0.5px",
                }}>{badge}</div>
                <div style={{ fontFamily: SANS, fontWeight: 400, fontSize: 11, color: MUTED }}>
                  Certified
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ padding: isMobile ? "0 20px 60px" : "0 80px 100px" }}>
        <div
          ref={ctaRef}
          style={{
            maxWidth: 1200, margin: "0 auto",
            background: `linear-gradient(135deg, #1A1A1E 0%, #2a2a30 100%)`,
            borderRadius: isMobile ? 20 : 28,
            padding: isMobile ? "48px 24px" : "72px 80px",
            textAlign: "center",
            position: "relative", overflow: "hidden",
            ...fade(ctaVis),
          }}
        >
          {/* Decorative glow */}
          <div style={{
            position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)",
            width: 400, height: 200,
            background: "radial-gradient(ellipse, rgba(83,174,243,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{
              fontFamily: SANS, fontWeight: 500, fontSize: 12,
              color: "rgba(83,174,243,0.9)", letterSpacing: "2px",
              textTransform: "uppercase", margin: "0 0 16px",
            }}>Ready to get started?</p>
            <h2 style={{
              fontFamily: SERIF, fontWeight: 400,
              fontSize: isMobile ? 32 : 50,
              lineHeight: 1.1, color: "#FFFFFF",
              margin: "0 0 16px",
            }}>
              Bring AbleSpace to<br />your entire district.
            </h2>
            <p style={{
              fontFamily: SANS, fontWeight: 300, fontSize: 17,
              color: "rgba(255,255,255,0.55)", margin: "0 0 36px", lineHeight: 1.55,
            }}>
              Custom pricing. Dedicated onboarding. Up and running in under two weeks.
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
                  textDecoration: "none", transition: "background 0.18s, transform 0.15s",
                  transform: hovCtaA ? "translateY(-1px)" : "none",
                }}
              >
                Get a Quote →
              </a>
              <a
                href="#"
                onMouseEnter={() => setHovCtaB(true)}
                onMouseLeave={() => setHovCtaB(false)}
                style={{
                  display: "inline-flex", alignItems: "center",
                  height: 48, padding: "0 28px", borderRadius: 12,
                  fontFamily: SANS, fontWeight: 400, fontSize: 15,
                  background: hovCtaB ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)",
                  color: "#fff", textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.18)",
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
