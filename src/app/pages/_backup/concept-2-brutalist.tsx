import React, { useState, useEffect, useRef } from "react";

const FEATURES = [
  {
    num: "01",
    title: "IEP GOAL TRACKING",
    desc: "Map every goal to benchmarks. Visual dashboards. No more lost binders. Data lives here.",
    tag: "CORE FEATURE",
  },
  {
    num: "02",
    title: "9+ DATA TYPES",
    desc: "Frequency, duration, trial-by-trial, ABC notation, interval recording — everything in one place.",
    tag: "DATA",
  },
  {
    num: "03",
    title: "AI PROGRESS NOTES",
    desc: "Draft compliant progress notes in seconds. AI reads your data so you don't have to rewrite it.",
    tag: "AI-POWERED",
  },
  {
    num: "04",
    title: "HIPAA/FERPA READY",
    desc: "Bank-grade encryption. Audit logs. Role-based access. Built for districts from day one.",
    tag: "COMPLIANCE",
  },
];

const MARQUEE_TEXT = "IEP TRACKING · DATA COLLECTION · AI NOTES · COMPLIANCE · SAVE 3 HRS/DAY · SPECIAL EDUCATION · ";

export function Concept2Brutalist() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [btnHover, setBtnHover] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    const speed = 0.8;
    const fullWidth = el.scrollWidth / 2;

    function animate() {
      offsetRef.current -= speed;
      if (Math.abs(offsetRef.current) >= fullWidth) {
        offsetRef.current = 0;
      }
      if (el) el.style.transform = `translateX(${offsetRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div style={{
      background: "#F5F5F0",
      minHeight: "100vh",
      fontFamily: "'DM Sans', system-ui, sans-serif",
      overflowX: "hidden",
    }}>

      {/* Hero */}
      <section style={{
        paddingTop: "100px",
        paddingBottom: "0",
        paddingLeft: "clamp(24px, 6vw, 80px)",
        paddingRight: "clamp(24px, 6vw, 80px)",
        borderBottom: "4px solid #000",
      }}>
        <div style={{
          display: "inline-block",
          background: "#FF3B30",
          color: "#fff",
          fontSize: "12px",
          fontWeight: 800,
          letterSpacing: "0.15em",
          padding: "6px 14px",
          marginBottom: "32px",
          border: "3px solid #000",
          boxShadow: "4px 4px 0 #000",
        }}>
          SPECIAL EDUCATION SOFTWARE
        </div>

        <h1 style={{
          fontSize: "clamp(52px, 10vw, 104px)",
          fontWeight: 900,
          lineHeight: 0.92,
          letterSpacing: "-0.03em",
          textTransform: "uppercase",
          color: "#000",
          margin: "0 0 0",
          maxWidth: "900px",
        }}>
          TRACK.<br />
          MEASURE.<br />
          <span style={{ color: "#FF3B30", WebkitTextStroke: "0px" }}>PROVE IT.</span>
        </h1>

        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "32px",
          paddingTop: "48px",
          paddingBottom: "48px",
          borderTop: "3px solid #000",
          marginTop: "48px",
        }}>
          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: 500,
            color: "#000",
            maxWidth: "480px",
            lineHeight: 1.5,
            margin: 0,
          }}>
            AbleSpace is the IEP tracking platform built for teams who are done
            wasting time on paperwork. AI-powered. Data-driven. Uncompromising.
          </p>
          <button
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              background: "#000",
              color: "#fff",
              border: "3px solid #000",
              padding: "18px 40px",
              fontSize: "18px",
              fontWeight: 800,
              fontFamily: "'DM Sans', system-ui, sans-serif",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: btnHover ? "4px 4px 0 #FF3B30" : "8px 8px 0 #FF3B30",
              transform: btnHover ? "translate(4px, 4px)" : "translate(0, 0)",
              transition: "transform 0.12s ease, box-shadow 0.12s ease",
            }}>
            START FREE →
          </button>
        </div>
      </section>

      {/* Marquee */}
      <div style={{
        background: "#FF3B30",
        borderBottom: "3px solid #000",
        overflow: "hidden",
        padding: "14px 0",
        whiteSpace: "nowrap",
      }}>
        <div ref={marqueeRef} style={{ display: "inline-flex", willChange: "transform" }}>
          {[MARQUEE_TEXT, MARQUEE_TEXT].map((txt, i) => (
            <span key={i} style={{
              fontSize: "15px",
              fontWeight: 800,
              letterSpacing: "0.12em",
              color: "#fff",
              paddingRight: "0",
            }}>
              {txt}
            </span>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        borderBottom: "4px solid #000",
      }}>
        {[
          { num: "3 HRS", label: "SAVED PER DAY" },
          { num: "9+", label: "DATA TYPES" },
          { num: "10K+", label: "EDUCATORS TRUST US" },
        ].map((s, i) => (
          <div key={i} style={{
            padding: "40px clamp(20px, 4vw, 60px)",
            borderRight: i < 2 ? "4px solid #000" : "none",
            textAlign: "center",
          }}>
            <div style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 900,
              color: "#000",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}>{s.num}</div>
            <div style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#FF3B30",
              marginTop: "8px",
            }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <section style={{
        padding: "80px clamp(24px, 6vw, 80px)",
      }}>
        <div style={{
          display: "inline-block",
          fontSize: "11px",
          fontWeight: 800,
          letterSpacing: "0.2em",
          marginBottom: "48px",
          textTransform: "uppercase",
          borderBottom: "3px solid #000",
          paddingBottom: "8px",
        }}>FEATURES</div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}>
          {FEATURES.map((f, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: "#fff",
                border: "3px solid #000",
                padding: "32px 28px",
                cursor: "default",
                boxShadow: hoveredCard === i ? "4px 4px 0 #000" : "8px 8px 0 #000",
                transform: hoveredCard === i ? "translate(4px, 4px)" : "translate(0, 0)",
                transition: "transform 0.12s ease, box-shadow 0.12s ease",
              }}>
              <div style={{
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.15em",
                color: "#FF3B30",
                marginBottom: "16px",
              }}>{f.tag}</div>
              <div style={{
                fontSize: "clamp(48px, 5vw, 64px)",
                fontWeight: 900,
                color: "rgba(0,0,0,0.06)",
                lineHeight: 1,
                marginBottom: "8px",
                letterSpacing: "-0.04em",
              }}>{f.num}</div>
              <h3 style={{
                fontSize: "20px",
                fontWeight: 800,
                letterSpacing: "-0.01em",
                margin: "0 0 14px",
                textTransform: "uppercase",
              }}>{f.title}</h3>
              <div style={{
                width: "40px",
                height: "3px",
                background: "#FF3B30",
                marginBottom: "16px",
              }} />
              <p style={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: "#333",
                margin: 0,
              }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Block */}
      <section style={{
        margin: "0 clamp(24px, 6vw, 80px) 80px",
        background: "#000",
        border: "4px solid #000",
        padding: "clamp(40px, 6vw, 80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "32px",
        boxShadow: "10px 10px 0 #FF3B30",
      }}>
        <div>
          <p style={{
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "0.2em",
            color: "#FF3B30",
            margin: "0 0 12px",
          }}>GET STARTED TODAY</p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 900,
            color: "#fff",
            margin: 0,
            lineHeight: 1.1,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
          }}>READY TO STOP<br />DROWNING IN PAPER?</h2>
        </div>
        <button style={{
          background: "#FF3B30",
          color: "#fff",
          border: "3px solid #FF3B30",
          padding: "20px 48px",
          fontSize: "18px",
          fontWeight: 800,
          fontFamily: "'DM Sans', system-ui, sans-serif",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          cursor: "pointer",
          boxShadow: "6px 6px 0 rgba(255,255,255,0.2)",
        }}>
          BOOK DEMO NOW →
        </button>
      </section>
    </div>
  );
}
