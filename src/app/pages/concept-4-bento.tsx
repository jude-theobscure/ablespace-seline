import React, { useState, useEffect, useRef } from "react";

interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

function BentoCard({ children, style = {} }: CardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: "1px solid #E8E8E2",
        borderRadius: "20px",
        padding: "28px",
        transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",
        transform: hovered ? "scale(1.025) translateY(-4px)" : "scale(1) translateY(0)",
        boxShadow: hovered
          ? "0 20px 48px rgba(0,0,0,0.1)"
          : "0 1px 4px rgba(0,0,0,0.04)",
        cursor: "default",
        ...style,
      }}>
      {children}
    </div>
  );
}

function MiniDataUI() {
  const goals = [
    { label: "Reading Fluency", pct: 78, color: "#FF6B35" },
    { label: "Math Problem Solving", pct: 55, color: "#4ECDC4" },
    { label: "Social Communication", pct: 90, color: "#45B7D1" },
    { label: "Writing Mechanics", pct: 42, color: "#96CEB4" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "20px" }}>
      {goals.map((g, i) => (
        <div key={i}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <span style={{ fontSize: "13px", fontWeight: 500, color: "#444" }}>{g.label}</span>
            <span style={{ fontSize: "13px", fontWeight: 700, color: g.color }}>{g.pct}%</span>
          </div>
          <div style={{ background: "#F0F0EA", borderRadius: "100px", height: "8px", overflow: "hidden" }}>
            <div style={{
              width: `${g.pct}%`,
              height: "100%",
              borderRadius: "100px",
              background: g.color,
              transition: "width 1.2s cubic-bezier(0.16,1,0.3,1)",
            }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function Concept4Bento() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      background: "#FAFAF7",
      minHeight: "100vh",
      fontFamily: "'DM Sans', system-ui, sans-serif",
      overflowX: "hidden",
    }}>

      {/* Hero */}
      <section style={{
        padding: "120px clamp(24px, 7vw, 100px) 80px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <div style={{
          display: "inline-block",
          background: "#FFF3EE",
          color: "#FF6B35",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          padding: "6px 16px",
          borderRadius: "100px",
          marginBottom: "28px",
          border: "1px solid #FFD4C0",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.6s ease 0.1s",
        }}>
          AI-POWERED IEP TRACKING
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "flex-start",
          gap: "32px",
          flexWrap: "wrap",
        }}>
          <h1 style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "clamp(42px, 6vw, 76px)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#1A1A1A",
            margin: 0,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s",
          }}>
            Every IEP goal,<br />
            <span style={{ color: "#FF6B35" }}>every data point</span>,<br />
            one happy team.
          </h1>

          <div style={{
            paddingTop: "8px",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s",
          }}>
            <p style={{
              fontSize: "17px",
              color: "#666",
              lineHeight: 1.7,
              maxWidth: "360px",
              margin: "0 0 28px",
            }}>
              AbleSpace brings AI progress notes, 9+ data types, and beautiful goal
              tracking to your entire special education team.
            </p>
            <button style={{
              background: "#FF6B35",
              color: "#fff",
              border: "none",
              borderRadius: "14px",
              padding: "16px 32px",
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "'DM Sans', system-ui, sans-serif",
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(255,107,53,0.35)",
              letterSpacing: "0.01em",
            }}>
              Start Free Trial →
            </button>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section style={{
        padding: "0 clamp(24px, 7vw, 100px) 100px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        {/* Top row: large card + 2 small */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "16px",
          marginBottom: "16px",
        }}>
          {/* Large card: IEP goal tracker mockup */}
          <BentoCard>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "10px",
                background: "#FFF3EE",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px",
              }}>📊</div>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#FF6B35", letterSpacing: "0.08em" }}>
                IEP GOAL DASHBOARD
              </span>
            </div>
            <h3 style={{
              fontSize: "22px", fontWeight: 700, color: "#1A1A1A",
              margin: "0 0 4px", letterSpacing: "-0.02em",
            }}>
              Track progress visually
            </h3>
            <p style={{ fontSize: "14px", color: "#888", margin: "0 0 0", lineHeight: 1.6 }}>
              Real-time goal completion across all students.
            </p>
            <MiniDataUI />
          </BentoCard>

          {/* AI notes card */}
          <BentoCard>
            <div style={{
              width: "40px", height: "40px", borderRadius: "12px",
              background: "linear-gradient(135deg, #4ECDC4, #45B7D1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "18px", marginBottom: "16px",
            }}>✦</div>
            <h3 style={{
              fontSize: "20px", fontWeight: 700, color: "#1A1A1A",
              margin: "0 0 10px", letterSpacing: "-0.02em",
            }}>AI Progress Notes</h3>
            <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.65, margin: 0 }}>
              Draft HIPAA-compliant notes from your data in under 10 seconds.
              AI does the writing, you do the caring.
            </p>
            <div style={{
              marginTop: "20px",
              background: "#F0FDFC",
              border: "1px solid #CCFAF7",
              borderRadius: "12px",
              padding: "14px",
            }}>
              <p style={{
                fontSize: "12px", color: "#0F766E", margin: 0,
                lineHeight: 1.6, fontStyle: "italic",
              }}>
                "Alex met 4 of 5 reading benchmarks this week, showing 78% mastery across
                fluency tasks…"
              </p>
            </div>
          </BentoCard>
        </div>

        {/* Middle row: 3 equal cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          marginBottom: "16px",
        }}>
          <BentoCard>
            <div style={{ fontSize: "28px", marginBottom: "14px" }}>🔢</div>
            <h3 style={{
              fontSize: "18px", fontWeight: 700, color: "#1A1A1A",
              margin: "0 0 8px", letterSpacing: "-0.01em",
            }}>9+ Data Types</h3>
            <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6, margin: 0 }}>
              Frequency, duration, trial-by-trial, ABC, interval, and more.
            </p>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "16px" }}>
              {["Freq", "Duration", "Trial", "ABC", "Rate", "+4"].map((tag, i) => (
                <span key={i} style={{
                  background: i % 2 === 0 ? "#F0F7FF" : "#FFF3EE",
                  color: i % 2 === 0 ? "#45B7D1" : "#FF6B35",
                  fontSize: "11px", fontWeight: 600,
                  padding: "4px 10px", borderRadius: "100px",
                  border: `1px solid ${i % 2 === 0 ? "#DBEAFE" : "#FFD4C0"}`,
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </BentoCard>

          <BentoCard style={{ background: "#1A1A1A" }}>
            <div style={{ fontSize: "28px", marginBottom: "14px" }}>⏱</div>
            <h3 style={{
              fontSize: "18px", fontWeight: 700, color: "#fff",
              margin: "0 0 8px", letterSpacing: "-0.01em",
            }}>Save 3 hrs/day</h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: "0 0 16px" }}>
              Automate documentation. Spend more time with students.
            </p>
            <div style={{
              fontSize: "48px", fontWeight: 900, color: "#FF6B35",
              letterSpacing: "-0.04em", lineHeight: 1,
            }}>3hrs</div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>
              saved per educator, per day
            </div>
          </BentoCard>

          <BentoCard>
            <div style={{ fontSize: "28px", marginBottom: "14px" }}>🔒</div>
            <h3 style={{
              fontSize: "18px", fontWeight: 700, color: "#1A1A1A",
              margin: "0 0 8px", letterSpacing: "-0.01em",
            }}>HIPAA/FERPA Ready</h3>
            <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6, margin: 0 }}>
              Bank-grade security, role-based access, and full audit logs for every district.
            </p>
            <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
              {["HIPAA", "FERPA", "SOC2"].map((b) => (
                <div key={b} style={{
                  background: "#F0FFF4",
                  border: "1px solid #BBF7D0",
                  borderRadius: "8px",
                  padding: "6px 10px",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#16A34A",
                }}>{b} ✓</div>
              ))}
            </div>
          </BentoCard>
        </div>

        {/* Wide stats card */}
        <BentoCard style={{
          background: "linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%)",
          border: "none",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "32px",
            alignItems: "center",
          }}>
            <div>
              <p style={{
                fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.08em", margin: "0 0 4px",
              }}>TRUSTED BY</p>
              <div style={{
                fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800,
                color: "#fff", letterSpacing: "-0.03em", lineHeight: 1,
              }}>10,000+</div>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", margin: "4px 0 0" }}>educators</p>
            </div>
            <div>
              <p style={{
                fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.08em", margin: "0 0 4px",
              }}>SCHOOLS</p>
              <div style={{
                fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800,
                color: "#fff", letterSpacing: "-0.03em", lineHeight: 1,
              }}>500+</div>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", margin: "4px 0 0" }}>and districts</p>
            </div>
            <div>
              <p style={{
                fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.08em", margin: "0 0 4px",
              }}>RATING</p>
              <div style={{
                fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800,
                color: "#fff", letterSpacing: "-0.03em", lineHeight: 1,
              }}>4.9★</div>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", margin: "4px 0 0" }}>app store</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <button style={{
                background: "#fff",
                color: "#FF6B35",
                border: "none",
                borderRadius: "14px",
                padding: "16px 32px",
                fontSize: "16px",
                fontWeight: 800,
                fontFamily: "'DM Sans', system-ui, sans-serif",
                cursor: "pointer",
                letterSpacing: "0.01em",
              }}>
                Join them →
              </button>
            </div>
          </div>
        </BentoCard>
      </section>
    </div>
  );
}
