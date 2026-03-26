import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../components/shared";

const SANS  = "'DM Sans', system-ui, sans-serif";
const SERIF = "'Instrument Serif', serif";
const BLUE  = "#53AEF3";
const DARK  = "#1A1A1E";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const triggered = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true; setVis(true); obs.disconnect();
      }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, vis };
}

const STATS = [
  { value: "4.9/5", label: "Average rating" },
  { value: "2,400+", label: "Active users" },
  { value: "500+", label: "Schools" },
  { value: "98%", label: "Would recommend" },
];

const RATING_BARS = [
  { stars: 5, pct: 89 },
  { stars: 4, pct: 8 },
  { stars: 3, pct: 2 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 0 },
];

const REVIEWS = [
  {
    initials: "SK",
    avatarBg: "#EDE8F8",
    avatarColor: "#6B5ECD",
    gradient: null,
    name: "Sarah K.",
    role: "Special Ed Coordinator, Ohio",
    quote: "AbleSpace replaced 4 different tools. My team actually uses it every day — that alone is a miracle in special ed. The AI notes save us 45 minutes per therapist per day.",
  },
  {
    initials: "MT",
    avatarBg: "#E0F7F5",
    avatarColor: "#0DB8A0",
    gradient: null,
    name: "Marcus T.",
    role: "School Psychologist, Texas",
    quote: "The data collection options are everything I could ask for. Trial-by-trial, interval, duration — all built in. And the graphs just appear. No Excel, no manual charting.",
  },
  {
    initials: "RP",
    avatarBg: "#FEF3C7",
    avatarColor: "#D97706",
    gradient: null,
    name: "Reena P.",
    role: "Director of Special Services, CA",
    quote: "We passed our state compliance audit without stress for the first time ever. Everything was audit-ready and exportable. AbleSpace is the best investment our district made.",
  },
  {
    initials: "JL",
    avatarBg: null,
    avatarColor: "#fff",
    gradient: "linear-gradient(135deg, #53AEF3, #6B5ECD)",
    name: "Janet L.",
    role: "Special Ed Program Lead, FL",
    quote: "The perfect trifecta: beautiful design, IDEA compliance, and modern AI features. I've never seen a tool my team actually wants to open every morning.",
  },
  {
    initials: "DW",
    avatarBg: "#E0F2FE",
    avatarColor: "#0284C7",
    gradient: null,
    name: "David W.",
    role: "BCBA, New York",
    quote: "Medicaid billing used to take my admin half a day each week. Now it's automated. The clean claim rate is incredible — we've barely had any denials.",
  },
  {
    initials: "AM",
    avatarBg: "#FCE7F3",
    avatarColor: "#DB2777",
    gradient: null,
    name: "Alicia M.",
    role: "Speech-Language Pathologist, Illinois",
    quote: "The parent portal changed everything. Parents can see their child's progress in real time and come to IEP meetings already informed. It completely changed the dynamic.",
  },
];

const PLATFORM_BADGES = [
  "★★★★★ on G2",
  "★★★★★ on Capterra",
  "★★★★★ on Google",
];

function ReviewCard({ review, index }: { review: typeof REVIEWS[0]; index: number }) {
  const { ref, vis } = useReveal();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: 28,
        boxShadow: hovered
          ? "0 20px 56px rgba(0,0,0,0.12)"
          : "0 4px 20px rgba(0,0,0,0.07)",
        transform: vis
          ? hovered ? "translateY(-4px)" : "translateY(0)"
          : "translateY(28px)",
        opacity: vis ? 1 : 0,
        transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s, box-shadow 0.2s ease`,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {/* Stars */}
      <div style={{ color: "#F59E0B", fontSize: 16, letterSpacing: 1 }}>★★★★★</div>

      {/* Quote */}
      <div
        style={{
          fontFamily: SERIF,
          fontSize: 17,
          fontStyle: "italic",
          color: DARK,
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        "{review.quote}"
      </div>

      {/* Attribution */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: review.gradient ?? review.avatarBg ?? "#eee",
            color: review.avatarColor,
            fontFamily: SANS,
            fontSize: 13,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {review.initials}
        </div>
        <div>
          <div style={{ fontFamily: SANS, fontSize: 14, fontWeight: 700, color: DARK }}>
            {review.name}
          </div>
          <div style={{ fontFamily: SANS, fontSize: 13, color: MUTED }}>
            {review.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReviewsPage() {
  const isMobile = useIsMobile();
  const heroReveal = useReveal();
  const ratingReveal = useReveal();
  const gridReveal = useReveal();
  const badgesReveal = useReveal();
  const ctaReveal = useReveal();

  return (
    <div style={{ fontFamily: SANS, background: BG, minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #F0F7FF 0%, #F8F8F5 55%, #F5F0FF 100%)",
          padding: isMobile ? "80px 24px 64px" : "120px 24px 96px",
          textAlign: "center",
        }}
      >
        <div
          ref={heroReveal.ref}
          style={{
            maxWidth: 680,
            margin: "0 auto",
            opacity: heroReveal.vis ? 1 : 0,
            transform: heroReveal.vis ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div
            style={{
              display: "inline-block",
              fontFamily: SANS,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              color: BLUE,
              background: BLUE + "18",
              padding: "5px 14px",
              borderRadius: 20,
              marginBottom: 24,
            }}
          >
            REVIEWS
          </div>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: isMobile ? 40 : 60,
              fontWeight: 400,
              color: DARK,
              lineHeight: 1.1,
              margin: "0 0 20px",
            }}
          >
            Loved by special ed
            <br />
            <span style={{ color: BLUE }}>teams everywhere.</span>
          </h1>
          <p
            style={{
              fontFamily: SANS,
              fontSize: isMobile ? 15 : 17,
              color: MUTED,
              lineHeight: 1.7,
              margin: "0 auto 44px",
              maxWidth: 500,
            }}
          >
            Real stories from therapists, coordinators, and administrators who use AbleSpace every day.
          </p>

          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
              gap: isMobile ? 16 : 24,
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            {STATS.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: isMobile ? 28 : 34,
                    color: DARK,
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontFamily: SANS, fontSize: 13, color: MUTED }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section style={{ padding: isMobile ? "48px 24px 32px" : "72px 24px 48px" }}>
        <div
          ref={ratingReveal.ref}
          style={{
            maxWidth: 600,
            margin: "0 auto",
            background: "#fff",
            borderRadius: 20,
            padding: isMobile ? "36px 28px" : "48px 56px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
            textAlign: "center",
            opacity: ratingReveal.vis ? 1 : 0,
            transform: ratingReveal.vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div
            style={{
              fontFamily: SERIF,
              fontSize: 72,
              color: DARK,
              lineHeight: 1,
              marginBottom: 8,
            }}
          >
            4.9
          </div>
          <div style={{ fontSize: 24, color: "#F59E0B", letterSpacing: 2, marginBottom: 8 }}>
            ★★★★★
          </div>
          <div style={{ fontFamily: SANS, fontSize: 14, color: MUTED, marginBottom: 32 }}>
            Based on 847 verified reviews
          </div>

          {/* Rating bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {RATING_BARS.map((bar) => (
              <div
                key={bar.stars}
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 13,
                    color: MUTED,
                    width: 24,
                    textAlign: "right",
                    flexShrink: 0,
                  }}
                >
                  {bar.stars}★
                </div>
                <div
                  style={{
                    flex: 1,
                    height: 8,
                    background: "#F0F0EE",
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${bar.pct}%`,
                      height: "100%",
                      background: BLUE,
                      borderRadius: 4,
                      transition: "width 1s ease",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 13,
                    color: MUTED,
                    width: 32,
                    textAlign: "left",
                    flexShrink: 0,
                  }}
                >
                  {bar.pct}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Grid */}
      <section style={{ padding: isMobile ? "32px 24px 48px" : "48px 24px 64px" }}>
        <div ref={gridReveal.ref} style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {REVIEWS.map((review, i) => (
              <ReviewCard key={review.name} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Platform Badges */}
      <section style={{ padding: isMobile ? "0 24px 48px" : "0 24px 64px" }}>
        <div
          ref={badgesReveal.ref}
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 16,
            opacity: badgesReveal.vis ? 1 : 0,
            transform: badgesReveal.vis ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {PLATFORM_BADGES.map((badge) => (
            <div
              key={badge}
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: "20px 24px",
                textAlign: "center",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                fontFamily: SANS,
                fontSize: 16,
                fontWeight: 700,
                color: DARK,
              }}
            >
              <span style={{ color: "#F59E0B" }}>{badge.split(" on ")[0]}</span>
              <span style={{ color: MUTED }}> on {badge.split(" on ")[1]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? "0 24px 80px" : "0 24px 100px" }}>
        <div
          ref={ctaReveal.ref}
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            background: "#fff",
            borderRadius: 20,
            padding: isMobile ? "48px 28px" : "64px 80px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
            textAlign: "center",
            opacity: ctaReveal.vis ? 1 : 0,
            transform: ctaReveal.vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div
            style={{
              fontFamily: SERIF,
              fontSize: isMobile ? 28 : 40,
              color: DARK,
              marginBottom: 12,
            }}
          >
            Ready to join them?
          </div>
          <div
            style={{
              fontFamily: SANS,
              fontSize: 16,
              color: MUTED,
              marginBottom: 36,
            }}
          >
            Free to start. No credit card.
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
            }}
          >
            <button
              style={{
                fontFamily: SANS,
                fontSize: 15,
                fontWeight: 600,
                color: "#fff",
                background: BLUE,
                border: "none",
                borderRadius: 10,
                padding: "14px 32px",
                cursor: "pointer",
                width: isMobile ? "100%" : "auto",
              }}
            >
              Get started free
            </button>
            <button
              style={{
                fontFamily: SANS,
                fontSize: 15,
                fontWeight: 600,
                color: DARK,
                background: "transparent",
                border: "1.5px solid rgba(0,0,0,0.15)",
                borderRadius: 10,
                padding: "14px 32px",
                cursor: "pointer",
                width: isMobile ? "100%" : "auto",
              }}
            >
              Book a demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
