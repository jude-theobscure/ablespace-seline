import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "./shared";
import { Btn3D } from "./btn-3d";
import { T } from "../styles/typography";

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
        padding: isMobile ? "0 0 60px" : "0 0 100px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px" : "0 80px", boxSizing: "border-box" }}>
      <div
        ref={ref}
        style={{
          background: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.07)",
          borderRadius: isMobile ? 20 : 32,
          padding: isMobile ? "40px 24px" : "72px 80px",
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
              ...T.label(),
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
              ...T.h2(isMobile),
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
              ...T.bodyLg(),
              margin: "0 0 36px",
            }}
          >
            Free to start. No credit card.
            <br />
            Set up in under an hour.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
            <Btn3D label="Educators" variant="primary">Sign Up for Free</Btn3D>
            <Btn3D label="Admins" variant="ghost">Learn More</Btn3D>
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
                    ...T.caption(),
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
      </div>
    </section>
  );
}
