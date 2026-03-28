import React, { useEffect, useRef, useState } from "react";
import { useIsMobile } from "./shared";
import mobileAppImg from "../../assets/mobile-app.png";

/* ── Design tokens ────────────────────────────────────────── */
const SERIF = "'Source Sans 3', sans-serif";
const SANS  = "'DM Sans', system-ui, sans-serif";
const DARK  = "#1A1A1E";
const BLUE  = "#53AEF3";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";
const TINT  = "#EFEFED";

/* ═══════════════════════════════════════════════════════════ */
export function MobileAppSection() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [leftVis,  setLeftVis]  = useState(false);
  const [rightVis, setRightVis] = useState(false);
  const triggered = useRef(false);

  const [hovA, setHovA] = useState(false);
  const [hovB, setHovB] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          setLeftVis(true);
          setTimeout(() => setRightVis(true), 150);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const reveal = (vis: boolean): React.CSSProperties => ({
    opacity  : vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(28px)",
    transition: "opacity 650ms cubic-bezier(0.16,1,0.3,1), transform 650ms cubic-bezier(0.16,1,0.3,1)",
  });

  return (
    <section style={{ background: TINT, padding: isMobile ? "60px 0" : "100px 0" }}>
      <div
        ref={sectionRef}
        style={{
          maxWidth: 1200, margin: "0 auto",
          padding: isMobile ? "0 20px" : "0 80px", boxSizing: "border-box",
          display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "stretch" : "center", gap: isMobile ? 40 : 80,
        }}
      >

        {/* ── LEFT: Content ─────────────────────────────────── */}
        <div style={{ flex: "1 1 0", minWidth: 0, ...reveal(leftVis) }}>

          {/* Label pill */}
          <p style={{
            fontFamily: SANS, fontWeight: 500, fontSize: 12,
            color: BLUE, letterSpacing: "2px", textTransform: "uppercase",
            margin: "0 0 14px",
          }}>
            Mobile App
          </p>

          {/* Headline */}
          <h2 style={{
            fontFamily: SERIF, fontWeight: 600, fontSize: isMobile ? 34 : 48,
            lineHeight: 1.1, color: DARK, margin: "0 0 16px",
          }}>
            Take AbleSpace anywhere
          </h2>

          {/* Subtext */}
          <p style={{
            fontFamily: SANS, fontWeight: 300, fontSize: 18,
            color: MUTED, margin: "0 0 36px", lineHeight: 1.6,
            maxWidth: 440,
          }}>
            Track data, monitor progress, and update goals directly from
            your phone or tablet — whether you're in the classroom or on
            the move.
          </p>

          {/* App store buttons */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: 12, marginBottom: 16 }}>

            {/* App Store */}
            <a
              href="#"
              onMouseEnter={() => setHovA(true)}
              onMouseLeave={() => setHovA(false)}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: hovA ? "#2d2d31" : DARK,
                color: "#FFFFFF",
                borderRadius: 14,
                padding: "10px 20px",
                textDecoration: "none",
                boxSizing: "border-box",
                transition: "background 0.18s, transform 0.15s",
                transform: hovA ? "translateY(-1px)" : "none",
                flexShrink: 0,
              }}
            >
              <AppleIcon />
              <div style={{ lineHeight: 1 }}>
                <div style={{
                  fontFamily: SANS, fontWeight: 400, fontSize: 10,
                  color: "rgba(255,255,255,0.65)", marginBottom: 3,
                }}>
                  Download on the
                </div>
                <div style={{
                  fontFamily: SANS, fontWeight: 600, fontSize: 15,
                  color: "#FFFFFF",
                }}>
                  App Store
                </div>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="#"
              onMouseEnter={() => setHovB(true)}
              onMouseLeave={() => setHovB(false)}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: hovB ? "#2d2d31" : DARK,
                color: "#FFFFFF",
                borderRadius: 14,
                padding: "10px 20px",
                textDecoration: "none",
                boxSizing: "border-box",
                transition: "background 0.18s, transform 0.15s",
                transform: hovB ? "translateY(-1px)" : "none",
                flexShrink: 0,
              }}
            >
              <GooglePlayIcon />
              <div style={{ lineHeight: 1 }}>
                <div style={{
                  fontFamily: SANS, fontWeight: 400, fontSize: 10,
                  color: "rgba(255,255,255,0.65)", marginBottom: 3,
                }}>
                  Get it on
                </div>
                <div style={{
                  fontFamily: SANS, fontWeight: 600, fontSize: 15,
                  color: "#FFFFFF",
                }}>
                  Google Play
                </div>
              </div>
            </a>
          </div>

          {/* Fine print */}
          <p style={{
            fontFamily: SANS, fontWeight: 400, fontSize: 12,
            color: "#AEAEB2", margin: 0,
          }}>
            Works on iPhone, iPad, and Android devices
          </p>
        </div>

        {/* ── RIGHT: Phone placeholder ───────────────────────── */}
        <div
          style={{
            flex: "1 1 0", minWidth: 0,
            display: "flex", justifyContent: "center",
            ...reveal(rightVis),
          }}
        >
          <img
            src={mobileAppImg}
            alt="AbleSpace mobile app"
            style={{
              maxWidth: 640,
              width: "100%",
              display: "block",
              objectFit: "contain",
            }}
          />
        </div>

      </div>
    </section>
  );
}

/* ── Icons ────────────────────────────────────────────────── */

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M14.5 10.5c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.6 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1.1 1.6 2.3 2.7 2.3 1.1 0 1.5-.7 2.8-.7 1.3 0 1.7.7 2.8.7 1.2 0 2-1.1 2.7-2.2.5-.8.9-1.7 1.1-2.2-2.4-1-.2-4-.2-3.9z"
        fill="white"
      />
      <path
        d="M12.1 4.7c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.6.6-1.1 1.6-1 2.6 1 .1 1.9-.5 2.6-1.2z"
        fill="white"
      />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 2.5L11.5 10L3.5 17.5V2.5z" fill="white" opacity="0.9" />
      <path d="M3.5 2.5L14 7.5L11.5 10L3.5 2.5z" fill="white" />
      <path d="M3.5 17.5L11.5 10L14 12.5L3.5 17.5z" fill="white" opacity="0.7" />
      <path d="M14 7.5L17 10L14 12.5L11.5 10L14 7.5z" fill="white" opacity="0.85" />
    </svg>
  );
}

function PhoneScreenIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="2" width="14" height="20" rx="3"
        stroke={BLUE} strokeWidth="1.5" />
      <path d="M9 6h6M9 10h4M9 14h5"
        stroke={BLUE} strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="12" cy="18.5" r="1" fill={BLUE} />
    </svg>
  );
}
