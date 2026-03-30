import React, { useState, useEffect, useRef } from "react";

const STARS = [
  { top: "4%", left: "12%" }, { top: "8%", left: "78%" }, { top: "3%", left: "45%" },
  { top: "14%", left: "90%" }, { top: "18%", left: "23%" }, { top: "6%", left: "60%" },
  { top: "22%", left: "5%" }, { top: "11%", left: "37%" }, { top: "27%", left: "85%" },
  { top: "31%", left: "55%" }, { top: "35%", left: "15%" }, { top: "40%", left: "72%" },
  { top: "44%", left: "92%" }, { top: "48%", left: "30%" }, { top: "52%", left: "65%" },
  { top: "56%", left: "8%" }, { top: "60%", left: "48%" }, { top: "63%", left: "82%" },
  { top: "67%", left: "20%" }, { top: "70%", left: "95%" }, { top: "74%", left: "38%" },
  { top: "78%", left: "70%" }, { top: "82%", left: "12%" }, { top: "86%", left: "55%" },
  { top: "90%", left: "88%" }, { top: "93%", left: "25%" }, { top: "96%", left: "42%" },
  { top: "2%", left: "33%" }, { top: "16%", left: "68%" }, { top: "38%", left: "42%" },
  { top: "50%", left: "18%" }, { top: "58%", left: "95%" }, { top: "72%", left: "62%" },
  { top: "88%", left: "75%" }, { top: "25%", left: "50%" }, { top: "46%", left: "78%" },
  { top: "65%", left: "35%" }, { top: "80%", left: "5%" }, { top: "10%", left: "15%" },
  { top: "33%", left: "98%" },
];

const FEATURES = [
  {
    icon: "⬡",
    title: "9+ Data Types",
    desc: "Frequency, duration, trial-by-trial, ABC, and more — every data type your team needs, beautifully unified.",
    color: "#53AEF3",
  },
  {
    icon: "◈",
    title: "AI Progress Notes",
    desc: "GPT-powered notes drafted in seconds from raw data. HIPAA-compliant, editable, and always audit-ready.",
    color: "#A78BFA",
  },
  {
    icon: "◉",
    title: "IEP Goal Tracking",
    desc: "Map goals to benchmarks, visualize progress over time, and share reports with families and districts.",
    color: "#53AEF3",
  },
  {
    icon: "◫",
    title: "Save 3 Hours/Day",
    desc: "Automate documentation so your team spends more time with students and less time on paperwork.",
    color: "#A78BFA",
  },
];

export function Concept1DarkMatter() {
  const [visible, setVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState([false, false, false, false]);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 100);
    const timers = FEATURES.map((_, i) =>
      setTimeout(() => setCardVisible((prev) => {
        const next = [...prev];
        next[i] = true;
        return next;
      }), 400 + i * 150)
    );
    return () => { clearTimeout(t1); timers.forEach(clearTimeout); };
  }, []);

  return (
    <div style={{
      background: "#070711",
      minHeight: "100vh",
      fontFamily: "'DM Sans', system-ui, sans-serif",
      overflowX: "hidden",
      position: "relative",
    }}>
      {/* Stars */}
      {STARS.map((s, i) => (
        <div key={i} style={{
          position: "fixed",
          top: s.top,
          left: s.left,
          width: i % 3 === 0 ? "2px" : "1.5px",
          height: i % 3 === 0 ? "2px" : "1.5px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.6)",
          pointerEvents: "none",
          zIndex: 0,
        }} />
      ))}

      {/* Orbs */}
      <div style={{
        position: "fixed", top: "-120px", left: "-120px",
        width: "500px", height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(83,174,243,0.18) 0%, transparent 70%)",
        filter: "blur(40px)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "fixed", bottom: "0", right: "-100px",
        width: "600px", height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)",
        filter: "blur(50px)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "fixed", top: "35%", left: "50%",
        width: "400px", height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(83,174,243,0.07) 0%, transparent 70%)",
        filter: "blur(60px)",
        transform: "translateX(-50%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Hero */}
      <section style={{
        position: "relative", zIndex: 1,
        paddingTop: "140px",
        paddingBottom: "100px",
        paddingLeft: "clamp(24px, 8vw, 120px)",
        paddingRight: "clamp(24px, 8vw, 120px)",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
      }}>
        <div style={{
          display: "inline-block",
          border: "1px solid rgba(83,174,243,0.35)",
          borderRadius: "100px",
          padding: "6px 18px",
          marginBottom: "32px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
        }}>
          <span style={{ color: "#53AEF3", fontSize: "13px", letterSpacing: "0.08em", fontWeight: 500 }}>
            HIPAA · FERPA COMPLIANT
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(52px, 8vw, 96px)",
          fontWeight: 400,
          lineHeight: 1.08,
          color: "#fff",
          margin: "0 0 28px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s",
        }}>
          IEP tracking that{" "}
          <span style={{
            color: "#53AEF3",
            textShadow: "0 0 40px rgba(83,174,243,0.6)",
          }}>
            thinks
          </span>
          <br />alongside you
        </h1>

        <p style={{
          fontSize: "18px",
          color: "rgba(255,255,255,0.6)",
          maxWidth: "560px",
          margin: "0 auto 48px",
          lineHeight: 1.7,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
        }}>
          AbleSpace gives special education teams AI-powered data collection,
          automatic progress notes, and IEP goal tracking — saving 3 hours every day.
        </p>

        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s",
        }}>
          <button style={{
            background: "#53AEF3",
            color: "#070711",
            border: "none",
            borderRadius: "100px",
            padding: "16px 40px",
            fontSize: "16px",
            fontWeight: 700,
            fontFamily: "'DM Sans', system-ui, sans-serif",
            cursor: "pointer",
            boxShadow: "0 0 40px rgba(83,174,243,0.5), 0 0 80px rgba(83,174,243,0.2)",
            letterSpacing: "0.01em",
          }}>
            Start Free Trial →
          </button>
        </div>
      </section>

      {/* Feature Cards */}
      <section style={{
        position: "relative", zIndex: 1,
        padding: "0 clamp(24px, 6vw, 100px) 120px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}>
          {FEATURES.map((f, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "20px",
              padding: "32px 28px",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              opacity: cardVisible[i] ? 1 : 0,
              transform: cardVisible[i] ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
            }}>
              <div style={{
                fontSize: "28px",
                marginBottom: "20px",
                color: f.color,
                textShadow: `0 0 20px ${f.color}`,
              }}>{f.icon}</div>
              <h3 style={{
                color: "#fff",
                fontSize: "18px",
                fontWeight: 600,
                margin: "0 0 12px",
                letterSpacing: "-0.01em",
              }}>{f.title}</h3>
              <p style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "15px",
                lineHeight: 1.65,
                margin: 0,
              }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section style={{
        position: "relative", zIndex: 1,
        textAlign: "center",
        padding: "80px clamp(24px, 6vw, 100px) 120px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}>
        <p style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          color: "#fff",
          margin: "0 0 12px",
          fontWeight: 400,
        }}>
          Ready to transform your team?
        </p>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "16px", margin: "0 0 40px" }}>
          Join thousands of special educators saving hours every week.
        </p>
        <button style={{
          background: "transparent",
          color: "#53AEF3",
          border: "1px solid rgba(83,174,243,0.5)",
          borderRadius: "100px",
          padding: "14px 36px",
          fontSize: "15px",
          fontWeight: 600,
          fontFamily: "'DM Sans', system-ui, sans-serif",
          cursor: "pointer",
          boxShadow: "0 0 24px rgba(83,174,243,0.2)",
          letterSpacing: "0.02em",
        }}>
          Book a Demo
        </button>
      </section>
    </div>
  );
}
