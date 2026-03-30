import React, { useState, useEffect, useRef } from "react";

const SANS = "'DM Sans', system-ui, sans-serif";
const SERIF = "'Instrument Serif', serif";

const BG = "#FAF7F2";
const TEXT = "#1C1A17";
const MUTED = "#7A7060";
const GOLD = "#B8962E";
const GOLD_BRIGHT = "#D4AF37";
const GOLD_PALE = "#F5EDD8";
const RULE = "rgba(212,175,55,0.25)";

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

function GoldDivider({ width = 120, centered = true }: { width?: number; centered?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: centered ? "center" : "flex-start", margin: "0 0 28px" }}>
      <div style={{ width: width * 0.3, height: 1, background: `linear-gradient(to right, transparent, ${GOLD_BRIGHT})` }} />
      <div style={{ width: 5, height: 5, borderRadius: "50%", background: GOLD_BRIGHT, transform: "rotate(45deg)", flexShrink: 0 }} />
      <div style={{ width: width * 0.4, height: 1, background: GOLD_BRIGHT }} />
      <div style={{ width: 5, height: 5, borderRadius: "50%", background: GOLD_BRIGHT, transform: "rotate(45deg)", flexShrink: 0 }} />
      <div style={{ width: width * 0.3, height: 1, background: `linear-gradient(to left, transparent, ${GOLD_BRIGHT})` }} />
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14 }}>
      <div style={{ width: 44, height: 44, background: GOLD_PALE, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, borderRadius: 4, border: `1px solid ${GOLD}30` }}>
        {icon}
      </div>
      <div>
        <div style={{ fontFamily: SERIF, fontSize: 19, color: TEXT, marginBottom: 8, fontStyle: "italic" }}>{title}</div>
        <div style={{ fontFamily: SANS, fontSize: 14, color: MUTED, lineHeight: 1.75 }}>{desc}</div>
      </div>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: "center", padding: "0 32px" }}>
      <div style={{ fontFamily: SERIF, fontSize: "clamp(36px, 4vw, 56px)", color: GOLD, fontStyle: "italic" }}>{value}</div>
      <div style={{ fontFamily: SANS, fontSize: 13, color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 6 }}>{label}</div>
    </div>
  );
}

export function Concept7CreamGold() {
  const hero = useReveal(0.05);
  const features = useReveal(0.1);
  const testimonial = useReveal(0.1);
  const statsSection = useReveal(0.1);
  const cta = useReveal(0.1);

  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: SANS, color: TEXT, overflowX: "hidden" }}>
      {/* Fixed gold frame border */}
      <div style={{ position: "fixed", inset: 0, border: "1px solid rgba(184,150,46,0.2)", pointerEvents: "none", zIndex: 9999 }} />

      {/* HERO */}
      <section
        style={{
          paddingTop: 140,
          paddingBottom: 100,
          paddingLeft: 24,
          paddingRight: 24,
          textAlign: "center",
          maxWidth: 760,
          margin: "0 auto",
        }}
      >
        <div
          ref={hero.ref}
          style={{
            opacity: hero.vis ? 1 : 0,
            transform: hero.vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          <div style={{ fontFamily: SANS, fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD, marginBottom: 28, fontWeight: 600 }}>
            Special Education · IEP Tracking · AI-Powered
          </div>

          <GoldDivider width={160} />

          <h1 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1.12, color: TEXT, marginBottom: 32, letterSpacing: "-0.01em" }}>
            The refined way to manage{" "}
            <span style={{ color: GOLD, fontStyle: "italic" }}>every IEP goal</span>
          </h1>

          <p style={{ fontFamily: SANS, fontSize: "clamp(15px, 1.8vw, 18px)", color: MUTED, lineHeight: 1.85, maxWidth: 560, margin: "0 auto 48px" }}>
            AbleSpace brings quiet efficiency to special education. Track goals, log data, and generate AI progress notes — giving your team 3+ hours back each day.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
              style={{
                background: ctaHovered ? GOLD_BRIGHT : "transparent",
                color: ctaHovered ? "#FAF7F2" : GOLD,
                border: `1px solid ${GOLD_BRIGHT}`,
                borderRadius: 4,
                padding: "13px 40px",
                fontFamily: SANS,
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
                letterSpacing: "0.04em",
                transition: "all 0.25s ease",
              }}
            >
              Begin Your Journey
            </button>
            <button
              style={{
                background: "transparent",
                color: MUTED,
                border: `1px solid ${RULE}`,
                borderRadius: 4,
                padding: "13px 40px",
                fontFamily: SANS,
                fontWeight: 500,
                fontSize: 15,
                cursor: "pointer",
                letterSpacing: "0.04em",
              }}
            >
              View the Platform
            </button>
          </div>
        </div>
      </section>

      {/* Gold rule divider */}
      <div style={{ borderTop: `1px solid ${RULE}`, maxWidth: 900, margin: "0 auto" }} />

      {/* STATS */}
      <section
        ref={statsSection.ref}
        style={{
          padding: "64px 24px",
          opacity: statsSection.vis ? 1 : 0,
          transform: statsSection.vis ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 32 }}>
          <StatItem value="90%" label="Reduction in admin time" />
          <div style={{ width: 1, background: RULE, alignSelf: "stretch" }} />
          <StatItem value="9+" label="Data types tracked" />
          <div style={{ width: 1, background: RULE, alignSelf: "stretch" }} />
          <StatItem value="300+" label="Trusting schools" />
          <div style={{ width: 1, background: RULE, alignSelf: "stretch" }} />
          <StatItem value="3 hrs" label="Saved per day" />
        </div>
      </section>

      {/* Gold rule divider */}
      <div style={{ borderTop: `1px solid ${RULE}`, maxWidth: 900, margin: "0 auto" }} />

      {/* FEATURES */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ fontFamily: SANS, fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD, marginBottom: 20, fontWeight: 600 }}>
              Platform Highlights
            </div>
            <GoldDivider width={100} />
            <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(28px, 4vw, 48px)", color: TEXT, fontStyle: "italic" }}>
              Crafted for special educators
            </h2>
          </div>
          <div
            ref={features.ref}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 48,
              opacity: features.vis ? 1 : 0,
              transform: features.vis ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          >
            <FeatureItem icon="🎯" title="Precise Goal Tracking" desc="Log measurable progress across 9+ data types — frequency, duration, accuracy, and more. Every data point tells the full story." />
            <FeatureItem icon="✍️" title="AI Progress Notes" desc="One click generates beautifully written, IDEA-compliant progress reports. Our AI understands IEP language — so you don't have to start from scratch." />
            <FeatureItem icon="🔐" title="HIPAA & FERPA Secure" desc="Student data is encrypted at rest and in transit. Role-based permissions and full audit logs ensure compliance at every layer." />
          </div>
        </div>
      </section>

      {/* Gold rule divider */}
      <div style={{ borderTop: `1px solid ${RULE}`, maxWidth: 900, margin: "0 auto" }} />

      {/* TESTIMONIAL */}
      <section style={{ padding: "80px 24px" }}>
        <div
          ref={testimonial.ref}
          style={{
            maxWidth: 680,
            margin: "0 auto",
            opacity: testimonial.vis ? 1 : 0,
            transform: testimonial.vis ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div style={{
            background: "#FFFDF8",
            borderLeft: `4px solid ${GOLD}`,
            padding: "40px 44px",
            borderRadius: "0 4px 4px 0",
            boxShadow: "0 2px 24px rgba(184,150,46,0.08)",
          }}>
            <div style={{ fontFamily: SERIF, fontSize: "clamp(18px, 2.5vw, 24px)", color: TEXT, lineHeight: 1.7, fontStyle: "italic", marginBottom: 28 }}>
              "AbleSpace has completely transformed how our SLPs and OTs document student progress. The AI notes alone have given our team back hours every single week."
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 4, background: GOLD_PALE, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, border: `1px solid ${GOLD}40` }}>
                👩‍🏫
              </div>
              <div>
                <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 14, color: TEXT }}>Director of Special Education</div>
                <div style={{ fontFamily: SANS, fontSize: 13, color: MUTED }}>Mid-Atlantic School District</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold rule divider */}
      <div style={{ borderTop: `1px solid ${RULE}`, maxWidth: 900, margin: "0 auto" }} />

      {/* CTA */}
      <section
        ref={cta.ref}
        style={{
          padding: "100px 24px",
          textAlign: "center",
          opacity: cta.vis ? 1 : 0,
          transform: cta.vis ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div style={{ fontFamily: SANS, fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD, marginBottom: 28, fontWeight: 600 }}>
          Join 300+ Schools
        </div>
        <GoldDivider width={120} />
        <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(30px, 4.5vw, 58px)", color: TEXT, marginBottom: 20, fontStyle: "italic" }}>
          Elevate your IEP practice
        </h2>
        <p style={{ fontFamily: SANS, fontSize: 16, color: MUTED, maxWidth: 460, margin: "0 auto 44px", lineHeight: 1.8 }}>
          Setup in under 10 minutes. No contracts. HIPAA and FERPA compliant from day one.
        </p>
        <button
          onMouseEnter={e => {
            (e.target as HTMLButtonElement).style.background = GOLD_BRIGHT;
            (e.target as HTMLButtonElement).style.color = "#FAF7F2";
          }}
          onMouseLeave={e => {
            (e.target as HTMLButtonElement).style.background = "transparent";
            (e.target as HTMLButtonElement).style.color = GOLD;
          }}
          style={{
            background: "transparent",
            color: GOLD,
            border: `1px solid ${GOLD_BRIGHT}`,
            borderRadius: 4,
            padding: "15px 52px",
            fontFamily: SANS,
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
            letterSpacing: "0.05em",
            transition: "all 0.25s ease",
          }}
        >
          Request a Private Demo
        </button>
      </section>

      {/* Bottom gold rule */}
      <div style={{ borderTop: `1px solid ${RULE}`, padding: "24px", textAlign: "center" }}>
        <div style={{ fontFamily: SANS, fontSize: 12, color: `${MUTED}80`, letterSpacing: "0.08em" }}>
          © 2024 AbleSpace · HIPAA Compliant · FERPA Compliant
        </div>
      </div>
    </div>
  );
}
