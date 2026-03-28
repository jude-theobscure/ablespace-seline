import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "./shared";
import logo1 from "../../assets/social-proof/social-strip-logo-1@2x.png";
import logo2 from "../../assets/social-proof/social-strip-logo-2@2x.png";
import logo3 from "../../assets/social-proof/social-strip-logo-3@2x.png";
import logo4 from "../../assets/social-proof/social-strip-logo-4@2x.png";
import logo5 from "../../assets/social-proof/social-strip-logo-5@2x.png";
import logo6 from "../../assets/social-proof/social-strip-logo-6@2x.png";
import logo7 from "../../assets/social-proof/social-strip-logo-7@2x.png";
import logo8 from "../../assets/social-proof/social-strip-logo-8@2x.png";

const SERIF = "'Source Sans 3', sans-serif";
const SANS  = "'DM Sans', system-ui, sans-serif";
const DARK  = "#1A1A1E";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";

const LOGOS = [
  { src: logo1 },
  { src: logo2 },
  { src: logo3 },
  { src: logo4 },
  { src: logo5 },
  { src: logo6 },
  { src: logo7 },
  { src: logo8 },
];

const STATS = [
  { number: "20,000+", label: "Sped-Ed professionals" },
  { number: "500+",    label: "Schools & districts"   },
  { number: "2M+",     label: "IEP goals tracked"     },
];

export function SocialProofStrip() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [logosIn, setLogosIn] = useState<boolean[]>(new Array(LOGOS.length).fill(false));
  const [statsIn, setStatsIn] = useState<boolean[]>(new Array(STATS.length).fill(false));
  const triggered = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          // Stagger logos: 60ms apart
          LOGOS.forEach((_, i) =>
            setTimeout(() =>
              setLogosIn(prev => { const n = [...prev]; n[i] = true; return n; }),
              i * 60
            )
          );
          // Stats: after logos settle, 100ms apart
          STATS.forEach((_, i) =>
            setTimeout(() =>
              setStatsIn(prev => { const n = [...prev]; n[i] = true; return n; }),
              300 + i * 100
            )
          );
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: BG,
        padding: isMobile ? "40px 0" : "48px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px" : "0 80px", boxSizing: "border-box", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
      {/* Logo row */}
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: isMobile ? 20 : 40,
        flexWrap: "wrap",
      }}>
        {LOGOS.map((logo, i) => (
          <div
            key={i}
            style={{
              opacity: logosIn[i] ? 1 : 0,
              transform: logosIn[i] ? "scale(1)" : "scale(0.85)",
              transition: "opacity 500ms cubic-bezier(0.16,1,0.3,1), transform 500ms cubic-bezier(0.16,1,0.3,1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logo.src}
              alt={`Partner logo ${i + 1}`}
              style={{
                height: isMobile ? 42 : 54,
                width: "auto",
                objectFit: "contain",
                filter: "grayscale(100%)",
                opacity: 0.55,
              }}
            />
          </div>
        ))}
      </div>

      {/* ③ Stats row */}
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {STATS.map((stat, i) => (
          <div key={stat.label} style={{ display: "contents" }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              padding: isMobile ? "0 16px" : "0 64px",
              opacity: statsIn[i] ? 1 : 0,
              transform: statsIn[i] ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 500ms cubic-bezier(0.16,1,0.3,1), transform 500ms cubic-bezier(0.16,1,0.3,1)`,
              transitionDelay: `${i * 100}ms`,
            }}>
              <span style={{
                fontFamily: SERIF,
                fontWeight: 600,
                fontSize: 36,
                color: DARK,
                lineHeight: 1,
              }}>
                {stat.number}
              </span>
              <span style={{
                fontFamily: SANS,
                fontWeight: 300,
                fontSize: 13,
                color: MUTED,
              }}>
                {stat.label}
              </span>
            </div>
            {i < STATS.length - 1 && (
              <div style={{
                width: 1,
                height: 40,
                background: "rgba(0,0,0,0.10)",
                flexShrink: 0,
              }} />
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}