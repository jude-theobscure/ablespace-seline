import React, { useState, useEffect, useRef } from "react";

const FEATURES = [
  {
    num: "01",
    title: "IEP Goal Tracking",
    desc: "Map every benchmark and goal with surgical precision. Visual timelines, completion rates, and shareable progress reports — all in one place.",
    aside: "Used by 500+ districts nationwide.",
  },
  {
    num: "02",
    title: "9+ Data Collection Types",
    desc: "Frequency, duration, trial-by-trial, ABC notation, interval recording, and more. Collect every data type your team needs without switching tools.",
    aside: "One tap per data point.",
  },
  {
    num: "03",
    title: "AI Progress Notes",
    desc: "Our AI reads your collected data and writes full, compliant progress notes in under ten seconds. HIPAA-ready. Always editable. Never generic.",
    aside: "Save 3 hours every day.",
  },
  {
    num: "04",
    title: "Team Collaboration",
    desc: "Role-based access, real-time data sharing, and district-wide audit logs. AbleSpace is built for entire teams, not just individual educators.",
    aside: "HIPAA & FERPA compliant.",
  },
];

export function Concept5Editorial() {
  const [mounted, setMounted] = useState(false);
  const [lineWidths, setLineWidths] = useState(FEATURES.map(() => 0));

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    const timers = FEATURES.map((_, i) =>
      setTimeout(() => setLineWidths(prev => {
        const n = [...prev]; n[i] = 100; return n;
      }), 800 + i * 200)
    );
    return () => { clearTimeout(t); timers.forEach(clearTimeout); };
  }, []);

  return (
    <div style={{
      background: "#FAFAF8",
      minHeight: "100vh",
      fontFamily: "'DM Sans', system-ui, sans-serif",
      color: "#1A1A1E",
      overflowX: "hidden",
    }}>

      {/* Hero */}
      <section style={{
        maxWidth: "1160px",
        margin: "0 auto",
        padding: "120px clamp(24px, 7vw, 80px) 100px",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 300px",
          gap: "80px",
          alignItems: "flex-start",
        }}>
          {/* Left — headline */}
          <div>
            <p style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#53AEF3",
              textTransform: "uppercase",
              margin: "0 0 32px",
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.7s ease 0.1s",
            }}>
              ABLESPACE — AI-POWERED SPECIAL EDUCATION
            </p>

            <h1 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(44px, 6.5vw, 84px)",
              fontWeight: 400,
              lineHeight: 1.08,
              color: "#1A1A1E",
              margin: "0 0 36px",
              letterSpacing: "-0.02em",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s",
            }}>
              The future of<br />
              special education<br />
              <em style={{ color: "#53AEF3" }}>starts here.</em>
            </h1>

            <p style={{
              fontSize: "17px",
              color: "#6E6E73",
              lineHeight: 1.8,
              maxWidth: "65ch",
              margin: "0 0 44px",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s",
            }}>
              AbleSpace is the platform built for special education teams who
              believe data should work for them — not the other way around.
              AI-powered notes, 9+ data types, and complete IEP goal tracking
              in one thoughtfully designed tool.
            </p>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              flexWrap: "wrap",
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.9s ease 0.45s",
            }}>
              <a href="#" style={{
                color: "#1A1A1E",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "underline",
                textDecorationColor: "#53AEF3",
                textDecorationThickness: "2px",
                textUnderlineOffset: "4px",
                letterSpacing: "0.01em",
              }}>
                Start your free trial →
              </a>
              <a href="#" style={{
                color: "#6E6E73",
                fontSize: "15px",
                textDecoration: "underline",
                textDecorationColor: "rgba(110,110,115,0.4)",
                textUnderlineOffset: "4px",
              }}>
                See how it works
              </a>
            </div>
          </div>

          {/* Right — pull quotes / metadata */}
          <div style={{
            paddingTop: "120px",
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.9s ease 0.5s",
          }}>
            <div style={{
              borderLeft: "2px solid #53AEF3",
              paddingLeft: "20px",
              marginBottom: "40px",
            }}>
              <p style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "19px",
                fontStyle: "italic",
                color: "#1A1A1E",
                lineHeight: 1.55,
                margin: "0 0 8px",
              }}>
                "We save 3 hours every single day. I don't know how we managed without it."
              </p>
              <p style={{ fontSize: "13px", color: "#6E6E73", margin: 0 }}>
                — Special Ed Director, Chicago ISD
              </p>
            </div>

            <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "24px" }}>
              {[
                { label: "Educators", val: "10,000+" },
                { label: "Schools", val: "500+" },
                { label: "Goals tracked", val: "2M+" },
              ].map((s, i) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  padding: "10px 0",
                  borderBottom: i < 2 ? "1px solid rgba(0,0,0,0.06)" : "none",
                }}>
                  <span style={{ fontSize: "13px", color: "#6E6E73" }}>{s.label}</span>
                  <span style={{ fontSize: "20px", fontWeight: 700, color: "#1A1A1E", letterSpacing: "-0.02em" }}>{s.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features — numbered editorial list */}
      <section style={{
        maxWidth: "1160px",
        margin: "0 auto",
        padding: "100px clamp(24px, 7vw, 80px)",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          gap: "0 80px",
          alignItems: "flex-start",
          marginBottom: "60px",
        }}>
          <div>
            <p style={{
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em",
              color: "#53AEF3", textTransform: "uppercase", margin: 0,
            }}>CAPABILITIES</p>
          </div>
          <div>
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "#1A1A1E",
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}>
              Everything your team needs,<br />nothing they don't.
            </h2>
          </div>
        </div>

        {FEATURES.map((f, i) => (
          <div key={i}>
            <div style={{
              width: `${lineWidths[i]}%`,
              height: "1px",
              background: "rgba(0,0,0,0.12)",
              transition: "width 0.9s cubic-bezier(0.16,1,0.3,1)",
            }} />
            <div style={{
              display: "grid",
              gridTemplateColumns: "200px 1fr 220px",
              gap: "0 80px",
              padding: "44px 0",
              alignItems: "flex-start",
            }}>
              {/* Big decorative number */}
              <div style={{ position: "relative" }}>
                <span style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "96px",
                  fontWeight: 400,
                  color: "rgba(0,0,0,0.05)",
                  lineHeight: 1,
                  display: "block",
                  letterSpacing: "-0.04em",
                  userSelect: "none",
                }}>{f.num}</span>
                <span style={{
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  transform: "translateY(-50%)",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#53AEF3",
                  letterSpacing: "0.05em",
                }}>{f.num}</span>
              </div>

              {/* Main content */}
              <div>
                <h3 style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(22px, 2.5vw, 30px)",
                  fontWeight: 400,
                  color: "#1A1A1E",
                  margin: "0 0 16px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                }}>{f.title}</h3>
                <p style={{
                  fontSize: "16px",
                  color: "#6E6E73",
                  lineHeight: 1.8,
                  maxWidth: "55ch",
                  margin: 0,
                }}>{f.desc}</p>
              </div>

              {/* Aside */}
              <div style={{ paddingTop: "6px" }}>
                <p style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "16px",
                  fontStyle: "italic",
                  color: "#1A1A1E",
                  lineHeight: 1.6,
                  margin: 0,
                  opacity: 0.6,
                }}>{f.aside}</p>
              </div>
            </div>
          </div>
        ))}
        <div style={{ height: "1px", background: "rgba(0,0,0,0.12)" }} />
      </section>

      {/* Testimonial — full-width dark block */}
      <section style={{
        background: "#1A1A1E",
        padding: "100px clamp(24px, 8vw, 120px)",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(24px, 3.5vw, 44px)",
          fontStyle: "italic",
          fontWeight: 400,
          color: "#fff",
          lineHeight: 1.55,
          maxWidth: "820px",
          margin: "0 auto 32px",
          letterSpacing: "-0.01em",
        }}>
          "AbleSpace transformed how our district handles IEP documentation.
          Our therapists spend their time with kids — not with paperwork."
        </p>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", margin: "0 0 60px", letterSpacing: "0.06em" }}>
          DIRECTOR OF SPECIAL SERVICES, METROPOLITAN SCHOOL DISTRICT
        </p>
        <a href="#" style={{
          color: "#53AEF3",
          fontSize: "16px",
          fontWeight: 500,
          textDecoration: "underline",
          textDecorationColor: "rgba(83,174,243,0.5)",
          textDecorationThickness: "1px",
          textUnderlineOffset: "4px",
          letterSpacing: "0.01em",
        }}>
          Read more stories →
        </a>
      </section>

      {/* Footer CTA */}
      <section style={{
        maxWidth: "1160px",
        margin: "0 auto",
        padding: "100px clamp(24px, 7vw, 80px)",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "40px",
        alignItems: "center",
        flexWrap: "wrap",
        borderTop: "1px solid rgba(0,0,0,0.08)",
      }}>
        <div>
          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em",
            color: "#53AEF3", textTransform: "uppercase", margin: "0 0 16px",
          }}>GET STARTED</p>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 400,
            color: "#1A1A1E",
            margin: 0,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}>
            Ready to transform<br />your team's workflow?
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-end" }}>
          <button style={{
            background: "#1A1A1E",
            color: "#fff",
            border: "none",
            borderRadius: "100px",
            padding: "16px 36px",
            fontSize: "16px",
            fontWeight: 600,
            fontFamily: "'DM Sans', system-ui, sans-serif",
            cursor: "pointer",
            letterSpacing: "0.01em",
            whiteSpace: "nowrap",
          }}>
            Start free trial →
          </button>
          <p style={{ fontSize: "13px", color: "#6E6E73", margin: 0 }}>
            14-day free trial, no card required
          </p>
        </div>
      </section>
    </div>
  );
}
