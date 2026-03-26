import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../components/shared";

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

const FEATURES = [
  {
    name: "Auto Session Timers",
    icon: "⏱",
    color: "#EDE8F8",
    iconColor: "#6B5ECD",
    desc: "Start a timer when the session begins, stop when it ends. AbleSpace logs every minute accurately for billing and IEP purposes.",
    tags: ["Timers", "Accuracy", "Automation"],
  },
  {
    name: "Session Notes AI",
    icon: "📋",
    color: "#E0F7F5",
    iconColor: "#0DB8A0",
    desc: "After each session, AI drafts a compliant progress note based on your data. Review and approve in under 60 seconds.",
    tags: ["AI Notes", "Compliance", "Speed"],
  },
  {
    name: "Schedule Management",
    icon: "🗓",
    color: "#FEF3C7",
    iconColor: "#D97706",
    desc: "See every provider's caseload in one calendar. Identify conflicts, gaps, and over-allocated therapists instantly.",
    tags: ["Calendar", "Caseload", "Scheduling"],
  },
  {
    name: "Billing Integration",
    icon: "💰",
    color: "#E0F2FE",
    iconColor: "#0284C7",
    desc: "Session data flows directly into Medicaid billing codes. No double entry, no missed claims.",
    tags: ["Medicaid", "Billing", "Integration"],
  },
  {
    name: "Mobile Data Entry",
    icon: "📱",
    color: "#FCE7F3",
    iconColor: "#DB2777",
    desc: "Log session data from your phone during the session — no clipboard, no transcribing later.",
    tags: ["Mobile", "Real-time", "Efficiency"],
  },
  {
    name: "Utilization Reports",
    icon: "📈",
    color: "#F0FDF4",
    iconColor: "#16A34A",
    desc: "See exactly how much service time each student is receiving versus their IEP mandate.",
    tags: ["Reports", "IEP Mandate", "Compliance"],
  },
];

const STATS = [
  { value: "45 min", label: "Saved per session note" },
  { value: "100%", label: "Billing accuracy" },
  { value: "3×", label: "More sessions documented" },
  { value: "0", label: "Missed billing claims" },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Start your session",
    desc: "Open the student's profile, tap Start Session, and the timer begins. All IEP goals are pre-loaded.",
  },
  {
    step: "02",
    title: "Log data as you go",
    desc: "Record trial data, notes, and observations on your phone in real time — no paper needed.",
  },
  {
    step: "03",
    title: "Approve and bill",
    desc: "Review the AI-drafted note, approve it, and the session is logged for billing and IEP records.",
  },
];

export function ServiceTimePage() {
  const isMobile = useIsMobile();
  const heroReveal = useReveal(0.05);
  const statsReveal = useReveal(0.1);
  const gridReveal = useReveal(0.08);
  const howReveal = useReveal(0.1);
  const ctaReveal = useReveal(0.1);

  const [hovA, setHovA] = useState(false);
  const [hovB, setHovB] = useState(false);

  return (
    <div style={{ background: BG, minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── Hero ── */}
      <section
        ref={heroReveal.ref}
        style={{
          background: "linear-gradient(160deg, #F0F7FF 0%, #F8F8F5 55%, #F5F0FF 100%)",
          padding: isMobile ? "80px 20px 60px" : "120px 80px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div style={{
          position: "absolute", top: -60, left: "10%",
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(83,174,243,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -40, right: "5%",
          width: 300, height: 300,
          background: "radial-gradient(circle, rgba(107,94,205,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Label */}
          <div style={{
            display: "inline-block",
            fontFamily: SANS, fontWeight: 500, fontSize: 11,
            letterSpacing: 2, color: BLUE,
            background: "rgba(83,174,243,0.08)",
            border: "1px solid rgba(83,174,243,0.15)",
            padding: "5px 14px", borderRadius: 9999,
            marginBottom: 20,
            opacity: heroReveal.vis ? 1 : 0,
            transform: heroReveal.vis ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}>
            SESSION LOGGING & BILLING
          </div>

          <h1 style={{
            fontFamily: SERIF, fontWeight: 400,
            fontSize: isMobile ? 38 : 62,
            lineHeight: 1.08,
            color: DARK,
            margin: "0 auto 20px",
            maxWidth: 820,
            opacity: heroReveal.vis ? 1 : 0,
            transform: heroReveal.vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 600ms ease 80ms, transform 600ms ease 80ms",
          }}>
            Track every session.
            <br />
            <span style={{ color: BLUE }}>Bill every minute.</span>
          </h1>

          <p style={{
            fontFamily: SANS, fontWeight: 300,
            fontSize: isMobile ? 17 : 20,
            color: MUTED, lineHeight: 1.6,
            margin: "0 auto 40px",
            maxWidth: 560,
            opacity: heroReveal.vis ? 1 : 0,
            transform: heroReveal.vis ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 600ms ease 160ms, transform 600ms ease 160ms",
          }}>
            AbleSpace automates session logging, note-writing, and Medicaid billing so your providers spend their time on students, not paperwork.
          </p>

          <div style={{
            display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap",
            opacity: heroReveal.vis ? 1 : 0,
            transform: heroReveal.vis ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 600ms ease 240ms, transform 600ms ease 240ms",
          }}>
            <a
              href="#"
              onMouseEnter={() => setHovA(true)}
              onMouseLeave={() => setHovA(false)}
              style={{
                display: "inline-flex", alignItems: "center",
                fontFamily: SANS, fontWeight: 500, fontSize: 15,
                color: "white", background: hovA ? "#3D9FE8" : BLUE,
                border: "none", borderRadius: 12,
                padding: "13px 28px", textDecoration: "none",
                cursor: "pointer",
                transform: hovA ? "translateY(-1px)" : "none",
                transition: "background 0.18s, transform 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              Start logging sessions free →
            </a>
            <a
              href="#"
              onMouseEnter={() => setHovB(true)}
              onMouseLeave={() => setHovB(false)}
              style={{
                display: "inline-flex", alignItems: "center",
                fontFamily: SANS, fontWeight: 400, fontSize: 15,
                color: DARK,
                background: hovB ? "rgba(0,0,0,0.04)" : "transparent",
                border: "1.5px solid rgba(0,0,0,0.15)",
                borderRadius: 12, padding: "13px 28px",
                textDecoration: "none", cursor: "pointer",
                transition: "background 0.18s",
                whiteSpace: "nowrap",
              }}
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section style={{
        background: "#FFFFFF",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        padding: isMobile ? "32px 20px" : "40px 80px",
      }}>
        <div
          ref={statsReveal.ref}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
            gap: isMobile ? "24px 12px" : 0,
            maxWidth: 900, margin: "0 auto",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                textAlign: "center",
                borderRight: (!isMobile && i < STATS.length - 1) ? "1px solid rgba(0,0,0,0.07)" : "none",
                padding: "0 24px",
                opacity: statsReveal.vis ? 1 : 0,
                transform: statsReveal.vis ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 500ms ease ${i * 80}ms, transform 500ms ease ${i * 80}ms`,
              }}
            >
              <div style={{
                fontFamily: SERIF, fontWeight: 400,
                fontSize: isMobile ? 36 : 44,
                color: DARK, lineHeight: 1,
                marginBottom: 6,
              }}>{s.value}</div>
              <div style={{
                fontFamily: SANS, fontWeight: 400,
                fontSize: 13, color: MUTED,
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features grid ── */}
      <section style={{
        padding: isMobile ? "60px 20px" : "100px 80px",
        background: BG,
      }}>
        <div
          ref={gridReveal.ref}
          style={{
            textAlign: "center", marginBottom: 56,
            opacity: gridReveal.vis ? 1 : 0,
            transform: gridReveal.vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          <div style={{
            display: "inline-block",
            fontFamily: SANS, fontWeight: 500, fontSize: 11,
            letterSpacing: 2, color: BLUE,
            background: "rgba(83,174,243,0.08)",
            border: "1px solid rgba(83,174,243,0.15)",
            padding: "5px 14px", borderRadius: 9999, marginBottom: 20,
          }}>
            BUILT FOR PROVIDERS
          </div>
          <h2 style={{
            fontFamily: SERIF, fontWeight: 400,
            fontSize: isMobile ? 34 : 52,
            lineHeight: 1.1, color: DARK,
            margin: "0 auto 16px", maxWidth: 600,
          }}>
            Every tool your therapy
            <br />team needs.
          </h2>
          <p style={{
            fontFamily: SANS, fontWeight: 300,
            fontSize: 18, color: MUTED, lineHeight: 1.55,
            margin: "0 auto", maxWidth: 520,
          }}>
            From auto-timers to Medicaid billing codes, AbleSpace eliminates every manual step between a session and a submitted claim.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: 20,
          maxWidth: 1080, margin: "0 auto",
        }}>
          {FEATURES.map((ft, i) => (
            <FeatureCard key={ft.name} ft={ft} i={i} vis={gridReveal.vis} />
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{
        background: "#FFFFFF",
        padding: isMobile ? "60px 20px" : "100px 80px",
      }}>
        <div
          ref={howReveal.ref}
          style={{
            textAlign: "center", marginBottom: 60,
            opacity: howReveal.vis ? 1 : 0,
            transform: howReveal.vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          <div style={{
            display: "inline-block",
            fontFamily: SANS, fontWeight: 500, fontSize: 11,
            letterSpacing: 2, color: BLUE,
            background: "rgba(83,174,243,0.08)",
            border: "1px solid rgba(83,174,243,0.15)",
            padding: "5px 14px", borderRadius: 9999, marginBottom: 20,
          }}>
            HOW IT WORKS
          </div>
          <h2 style={{
            fontFamily: SERIF, fontWeight: 400,
            fontSize: isMobile ? 34 : 52,
            lineHeight: 1.1, color: DARK,
            margin: "0 auto", maxWidth: 600,
          }}>
            From session start to
            <br />approved claim.
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: isMobile ? 32 : 48,
          maxWidth: 1000, margin: "0 auto",
          position: "relative",
        }}>
          {/* Connector line (desktop only) */}
          {!isMobile && (
            <div style={{
              position: "absolute",
              top: 28, left: "16.66%", right: "16.66%",
              height: 1,
              background: "linear-gradient(90deg, rgba(83,174,243,0.3), rgba(107,94,205,0.3))",
            }} />
          )}

          {HOW_IT_WORKS.map((step, i) => (
            <div
              key={step.step}
              style={{
                textAlign: "center",
                opacity: howReveal.vis ? 1 : 0,
                transform: howReveal.vis ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 500ms ease ${i * 120}ms, transform 500ms ease ${i * 120}ms`,
              }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                background: BLUE,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px",
                position: "relative", zIndex: 1,
              }}>
                <span style={{
                  fontFamily: SANS, fontWeight: 700,
                  fontSize: 14, color: "white",
                }}>{step.step}</span>
              </div>
              <h3 style={{
                fontFamily: SANS, fontWeight: 600,
                fontSize: 17, color: DARK,
                margin: "0 0 10px",
              }}>{step.title}</h3>
              <p style={{
                fontFamily: SANS, fontWeight: 400,
                fontSize: 14, color: MUTED,
                lineHeight: 1.6, margin: 0,
              }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: BG, padding: isMobile ? "0 20px 60px" : "0 80px 100px" }}>
        <div
          ref={ctaReveal.ref}
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: isMobile ? 20 : 32,
            padding: isMobile ? "40px 24px" : "72px 80px",
            boxShadow: "0 8px 56px rgba(0,0,0,0.08), 0 2px 16px rgba(0,0,0,0.04)",
            textAlign: "center",
            position: "relative", overflow: "hidden",
            opacity: ctaReveal.vis ? 1 : 0,
            transform: ctaReveal.vis ? "translateY(0) scale(1)" : "translateY(32px) scale(0.98)",
            transition: "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div style={{
            position: "absolute", top: -80, left: -80,
            width: 300, height: 300,
            background: "radial-gradient(circle, rgba(83,174,243,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -40, right: "10%",
            width: 200, height: 200,
            background: "radial-gradient(circle, rgba(107,94,205,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-block",
              fontFamily: SANS, fontWeight: 500, fontSize: 11,
              letterSpacing: 2, color: BLUE,
              background: "rgba(83,174,243,0.08)",
              border: "1px solid rgba(83,174,243,0.15)",
              padding: "5px 14px", borderRadius: 9999, marginBottom: 20,
            }}>
              GET STARTED FREE
            </div>

            <h2 style={{
              fontFamily: SERIF, fontWeight: 400,
              fontSize: isMobile ? 34 : 52,
              lineHeight: 1.1, color: DARK,
              margin: "0 0 16px",
            }}>
              Stop losing billable time
              <br />to paperwork.
            </h2>

            <p style={{
              fontFamily: SANS, fontWeight: 300,
              fontSize: 18, color: MUTED,
              margin: "0 0 36px", lineHeight: 1.5,
            }}>
              Free to start. No credit card.
              <br />Set up in under an hour.
            </p>

            <div style={{
              display: "flex", justifyContent: "center",
              gap: 12, flexWrap: "wrap",
            }}>
              <a
                href="#"
                style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: SANS, fontWeight: 500, fontSize: 15,
                  color: "white", background: BLUE,
                  border: "none", borderRadius: 12,
                  padding: "12px 28px", textDecoration: "none",
                  cursor: "pointer", whiteSpace: "nowrap",
                }}
              >
                Sign Up for Free →
              </a>
              <a
                href="#"
                style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: SANS, fontWeight: 400, fontSize: 15,
                  color: DARK, background: "transparent",
                  border: "1.5px solid rgba(0,0,0,0.15)",
                  borderRadius: 12, padding: "12px 28px",
                  textDecoration: "none", cursor: "pointer", whiteSpace: "nowrap",
                }}
              >
                Schedule a Demo →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ ft, i, vis }: {
  ft: typeof FEATURES[number];
  i: number;
  vis: boolean;
}) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: 20,
        padding: 28,
        boxShadow: hov
          ? "0 12px 40px rgba(0,0,0,0.10), 0 2px 10px rgba(0,0,0,0.06)"
          : "0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.04)",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        opacity: vis ? 1 : 0,
        transition: `opacity 500ms cubic-bezier(0.16,1,0.3,1) ${100 + i * 60}ms,
                     transform 300ms ease,
                     box-shadow 300ms ease`,
        cursor: "default",
      }}
    >
      {/* Icon */}
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        background: ft.color,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 16, fontSize: 22,
      }}>
        {ft.icon}
      </div>

      {/* Name */}
      <div style={{
        fontFamily: SANS, fontWeight: 600,
        fontSize: 16, color: DARK, marginBottom: 8,
      }}>{ft.name}</div>

      {/* Description */}
      <p style={{
        fontFamily: SANS, fontWeight: 400,
        fontSize: 13.5, color: MUTED,
        lineHeight: 1.6, margin: "0 0 16px",
      }}>{ft.desc}</p>

      {/* Tags */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {ft.tags.map(tag => (
          <span key={tag} style={{
            fontFamily: SANS, fontWeight: 500,
            fontSize: 11, color: ft.iconColor,
            background: ft.color,
            padding: "3px 10px", borderRadius: 9999,
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
