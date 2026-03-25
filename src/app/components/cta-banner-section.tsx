import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "./shared";

const SANS  = "'DM Sans', system-ui, sans-serif";
const SERIF = "'Instrument Serif', serif";
const BLUE  = "#53AEF3";
const DARK  = "#1A1A1E";

const TRUST = [
  { icon: "🛡", label: "HIPAA Compliant" },
  { icon: "📋", label: "ISO 27001 Certified" },
  { icon: "🔐", label: "FERPA Compliant" },
];

export function CTABannerSection() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const triggered = useRef(false);

  const [hovA, setHovA] = useState(false);
  const [hovB, setHovB] = useState(false);

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
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      style={{
        background: "#F8F8F5",
        padding: isMobile ? "0 20px 60px" : "0 80px 100px",
      }}
    >
      <div
        ref={ref}
        style={{
          background: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.07)",
          borderRadius: isMobile ? 20 : 32,
          padding: isMobile ? "40px 24px" : "72px 80px",
          boxShadow: "0 8px 56px rgba(0,0,0,0.08), 0 2px 16px rgba(0,0,0,0.04)",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0) scale(1)" : "translateY(32px) scale(0.98)",
          transition: "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80, left: -80,
            width: 300, height: 300,
            background: "radial-gradient(circle, rgba(83,174,243,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40, right: "10%",
            width: 200, height: 200,
            background: "radial-gradient(circle, rgba(107,94,205,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Label pill */}
          <div
            style={{
              display: "inline-block",
              fontFamily: SANS,
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: 2,
              color: BLUE,
              background: "rgba(83,174,243,0.08)",
              border: "1px solid rgba(83,174,243,0.15)",
              padding: "5px 14px",
              borderRadius: 9999,
              marginBottom: 20,
            }}
          >
            GET STARTED TODAY
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: SERIF,
              fontWeight: 400,
              fontSize: isMobile ? 34 : 52,
              lineHeight: 1.1,
              color: DARK,
              margin: "0 0 16px",
            }}
          >
            Give your special ed team
            <br />
            the tool they deserve.
          </h2>

          {/* Subtext */}
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 300,
              fontSize: 18,
              color: "#6E6E73",
              margin: "0 0 36px",
              lineHeight: 1.5,
            }}
          >
            Free to start. No credit card.
            <br />
            Set up in under an hour.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              marginBottom: 32,
              flexWrap: "wrap",
            }}
          >
            {/* Button A */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <a
                href="#"
                onMouseEnter={() => setHovA(true)}
                onMouseLeave={() => setHovA(false)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: SANS,
                  fontWeight: 500,
                  fontSize: 15,
                  color: "white",
                  background: hovA ? "#3D9FE8" : BLUE,
                  border: "none",
                  borderRadius: 12,
                  padding: "12px 28px",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "background 0.18s, transform 0.15s",
                  transform: hovA ? "translateY(-1px)" : "none",
                  whiteSpace: "nowrap",
                }}
              >
                Sign Up for Free →
              </a>
              <span
                style={{
                  fontFamily: SANS,
                  fontWeight: 400,
                  fontSize: 11,
                  color: "#AEAEB2",
                  marginTop: 6,
                }}
              >
                For educators &amp; providers
              </span>
            </div>

            {/* Button B */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <a
                href="#"
                onMouseEnter={() => setHovB(true)}
                onMouseLeave={() => setHovB(false)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: SANS,
                  fontWeight: 400,
                  fontSize: 15,
                  color: DARK,
                  background: hovB ? "rgba(0,0,0,0.04)" : "transparent",
                  border: "1.5px solid rgba(0,0,0,0.15)",
                  borderRadius: 12,
                  padding: "12px 28px",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "background 0.18s",
                  whiteSpace: "nowrap",
                }}
              >
                Learn More →
              </a>
              <span
                style={{
                  fontFamily: SANS,
                  fontWeight: 400,
                  fontSize: 11,
                  color: "#AEAEB2",
                  marginTop: 6,
                }}
              >
                For school administrators
              </span>
            </div>
          </div>

          {/* Trust row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            {TRUST.map((item, i) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontFamily: SANS,
                    fontWeight: 400,
                    fontSize: 12,
                    color: "#AEAEB2",
                  }}
                >
                  <span style={{ fontSize: 14 }}>{item.icon}</span>
                  {item.label}
                </div>
                {i < TRUST.length - 1 && (
                  <div
                    style={{
                      width: 1,
                      height: 14,
                      background: "rgba(0,0,0,0.08)",
                      flexShrink: 0,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
