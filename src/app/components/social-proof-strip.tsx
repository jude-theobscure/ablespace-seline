import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "./shared";

const SERIF = "'Instrument Serif', serif";
const SANS  = "'DM Sans', system-ui, sans-serif";
const DARK  = "#1A1A1E";
const BLUE  = "#53AEF3";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";

const LOGOS = [
  { abbr: "RUSD",   name: "Riverside USD"         },
  { abbr: "AISD",   name: "Austin ISD"            },
  { abbr: "LAUSD",  name: "LAUSD"                 },
  { abbr: "CPS",    name: "Chicago Public Schools" },
  { abbr: "NYCDOE", name: "NYC DOE"               },
  { abbr: "DISD",   name: "Dallas ISD"            },
  { abbr: "BCS",    name: "Broward County Schools" },
  { abbr: "BPS",    name: "Boston Public Schools"  },
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
        padding: isMobile ? "40px 20px" : "48px 80px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 32,
      }}
    >
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
            key={logo.abbr}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              opacity: logosIn[i] ? 1 : 0,
              transform: logosIn[i] ? "scale(1)" : "scale(0.85)",
              transition: "opacity 500ms cubic-bezier(0.16,1,0.3,1), transform 500ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {/* Circle seal */}
            <div style={{
              width: 44, height: 44,
              borderRadius: "50%",
              border: "1.5px solid rgba(0,0,0,0.15)",
              background: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}>
              <span style={{
                fontFamily: SANS,
                fontWeight: 700,
                fontSize: logo.abbr.length > 4 ? 8 : 10,
                color: "#6E6E73",
                letterSpacing: "-0.2px",
                lineHeight: 1,
                textAlign: "center",
              }}>
                {logo.abbr}
              </span>
            </div>
            {/* District name */}
            <span style={{
              fontFamily: SANS,
              fontWeight: 400,
              fontSize: 10,
              color: "#AEAEB2",
              textAlign: "center",
              maxWidth: 60,
              lineHeight: 1.3,
            }}>
              {logo.name}
            </span>
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
                fontWeight: 400,
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
    </section>
  );
}