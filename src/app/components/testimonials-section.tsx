import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "./shared";

const SANS  = "'DM Sans', system-ui, sans-serif";
const SERIF = "'Instrument Serif', serif";
const BLUE  = "#53AEF3";
const DARK  = "#1A1A1E";

const TOP_CARDS = [
  {
    initials: "SK",
    avatarBg: "#EDE8F8",
    avatarColor: "#6B5ECD",
    name: "Sarah K.",
    role: "Special Ed Coordinator, Ohio",
    quote:
      "AbleSpace replaced 4 different tools. My team actually uses it every day — that alone is a miracle in special ed.",
  },
  {
    initials: "MT",
    avatarBg: "#E0F7F5",
    avatarColor: "#0DB8A0",
    name: "Marcus T.",
    role: "School Psychologist, Texas",
    quote:
      "The AI progress notes save each therapist 45 minutes a day. That's real time back with our students.",
  },
  {
    initials: "RP",
    avatarBg: "#FEF3C7",
    avatarColor: "#D97706",
    name: "Reena P.",
    role: "Director of Special Services, CA",
    quote:
      "We passed our state compliance audit without stress for the first time ever. Everything was ready to export.",
  },
];

export function TestimonialsSection() {
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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "#F8F8F5",
        padding: isMobile ? "60px 20px" : "100px 80px",
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 56,
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 600ms ease, transform 600ms ease",
        }}
      >
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
          LOVED BY EDUCATORS
        </div>

        <h2
          style={{
            fontFamily: SERIF,
            fontWeight: 400,
            fontSize: isMobile ? 34 : 52,
            lineHeight: 1.1,
            color: DARK,
            textAlign: "center",
            margin: "0 auto",
            maxWidth: 600,
          }}
        >
          Trusted by special ed teams
          <br />
          across the country.
        </h2>
      </div>

      {/* ── Top 3 cards ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: 20,
          marginBottom: 20,
          maxWidth: 1040,
          margin: "0 auto 20px",
        }}
      >
        {TOP_CARDS.map((card, i) => (
          <div
            key={card.name}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 24,
              padding: 28,
              boxShadow: "0 4px 28px rgba(0,0,0,0.06), 0 1px 6px rgba(0,0,0,0.04)",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(32px)",
              transition: `opacity 500ms cubic-bezier(0.16,1,0.3,1) ${200 + i * 80}ms,
                           transform 500ms cubic-bezier(0.16,1,0.3,1) ${200 + i * 80}ms`,
            }}
          >
            <div style={{ fontSize: 14, color: "#F59E0B", marginBottom: 16 }}>
              ★★★★★
            </div>
            <p
              style={{
                fontFamily: SERIF,
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: 17,
                color: DARK,
                lineHeight: 1.6,
                margin: "0 0 20px",
              }}
            >
              "{card.quote}"
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: card.avatarBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: SANS,
                    fontWeight: 700,
                    fontSize: 13,
                    color: card.avatarColor,
                  }}
                >
                  {card.initials}
                </span>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontWeight: 600,
                    fontSize: 14,
                    color: DARK,
                    lineHeight: 1.3,
                  }}
                >
                  {card.name}
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontWeight: 400,
                    fontSize: 12,
                    color: "#6E6E73",
                    lineHeight: 1.3,
                  }}
                >
                  {card.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Featured light card ── */}
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          background: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.07)",
          borderRadius: 24,
          padding: "40px 48px",
          boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr auto",
          gap: isMobile ? 24 : 48,
          alignItems: "center",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(32px)",
          transition: `opacity 500ms cubic-bezier(0.16,1,0.3,1) ${200 + 3 * 80}ms,
                       transform 500ms cubic-bezier(0.16,1,0.3,1) ${200 + 3 * 80}ms`,
        }}
      >
        {/* Left */}
        <div>
          <div
            style={{
              fontFamily: SERIF,
              fontWeight: 400,
              fontSize: 80,
              color: "rgba(83,174,243,0.25)",
              lineHeight: 0.8,
              marginBottom: 16,
            }}
          >
            "
          </div>
          <p
            style={{
              fontFamily: SERIF,
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: 22,
              color: DARK,
              lineHeight: 1.55,
              margin: 0,
              maxWidth: 600,
            }}
          >
            AbleSpace has the perfect trifecta — beautiful design, IDEA
            compliance, and modern features like AI notes and goal tracking. I
            want all my schools on it.
          </p>
        </div>

        {/* Right */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #53AEF3, #6B5ECD)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 2,
            }}
          >
            <span
              style={{
                fontFamily: SANS,
                fontWeight: 700,
                fontSize: 18,
                color: "white",
              }}
            >
              JL
            </span>
          </div>
          <div
            style={{
              fontFamily: SANS,
              fontWeight: 600,
              fontSize: 15,
              color: DARK,
              textAlign: "center",
            }}
          >
            Janet L.
          </div>
          <div
            style={{
              fontFamily: SANS,
              fontWeight: 400,
              fontSize: 13,
              color: "#6E6E73",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            Special Ed Program Lead, FL
          </div>
          <div style={{ fontSize: 14, color: "#F59E0B", marginTop: 8 }}>
            ★★★★★
          </div>
        </div>
      </div>
    </section>
  );
}
