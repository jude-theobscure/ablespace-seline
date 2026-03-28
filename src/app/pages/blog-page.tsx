import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../components/shared";
import { MAX_W, PAD_X, PAD_X_MOB, SECT_PY, SECT_PY_MOB, HERO_PT, HERO_PT_MOB, HERO_PB, HERO_PB_MOB, H1_SIZE, H1_SIZE_MOB, H2_SIZE, H2_SIZE_MOB, BODY_SIZE, STAT_SIZE, STAT_SIZE_MOB, CARD_RADIUS, CTA_RADIUS, CTA_PAD_X, CTA_PAD_Y, CTA_PAD_X_MOB, CTA_PAD_Y_MOB, CARD_GAP, BTN_RADIUS, BTN_PAD, BTN_SIZE } from "./page-layout";

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

const ARTICLES = [
  {
    emoji: "🎯",
    category: "IEP Strategy",
    categoryColor: BLUE,
    title: "How to Write SMART IEP Goals That Actually Drive Progress",
    excerpt: "Learn the proven framework for writing measurable IEP goals that align with IDEA requirements and translate directly into improved student outcomes.",
    date: "March 8, 2025",
    readTime: "6 min",
    bg: `linear-gradient(135deg, #E0F2FE, #53AEF3)`,
  },
  {
    emoji: "📊",
    category: "Data Collection",
    categoryColor: "#0DB8A0",
    title: "The Complete Guide to ABA Data Collection in Schools",
    excerpt: "A comprehensive walkthrough of every data type — trial-by-trial, interval recording, duration, and more — and when to use each one.",
    date: "Feb 28, 2025",
    readTime: "10 min",
    bg: `linear-gradient(135deg, #E0F7F5, #0DB8A0)`,
  },
  {
    emoji: "⚖️",
    category: "Compliance",
    categoryColor: "#D97706",
    title: "IDEA 2025 Updates Every Special Ed Director Should Know",
    excerpt: "A concise breakdown of the latest IDEA regulatory updates and what they mean for IEP documentation, timelines, and student rights.",
    date: "Feb 20, 2025",
    readTime: "7 min",
    bg: `linear-gradient(135deg, #FEF3C7, #D97706)`,
  },
  {
    emoji: "🤖",
    category: "AI & Technology",
    categoryColor: "#6B5ECD",
    title: "AI Progress Notes: What to Trust, What to Review",
    excerpt: "AI-generated progress notes can save hours per week — but only if you know how to review them correctly. Here's a clinician's guide.",
    date: "Feb 12, 2025",
    readTime: "5 min",
    bg: `linear-gradient(135deg, #EDE8F8, #6B5ECD)`,
  },
  {
    emoji: "👥",
    category: "Team Collaboration",
    categoryColor: "#DB2777",
    title: "Building a Unified Special Ed Team Across 10 Schools",
    excerpt: "How one district coordinator brought consistency, communication, and compliance to a team of 80+ providers spread across a large district.",
    date: "Jan 30, 2025",
    readTime: "9 min",
    bg: `linear-gradient(135deg, #FCE7F3, #DB2777)`,
  },
  {
    emoji: "💰",
    category: "Medicaid Billing",
    categoryColor: "#16A34A",
    title: "Maximizing School-Based Medicaid Reimbursements in 2025",
    excerpt: "Step-by-step strategies to improve your clean claim rate, reduce denials, and capture every dollar your district is owed under Medicaid.",
    date: "Jan 22, 2025",
    readTime: "8 min",
    bg: `linear-gradient(135deg, #F0FDF4, #16A34A)`,
  },
];

function ArticleCard({ article, index }: { article: typeof ARTICLES[0]; index: number }) {
  const { ref, vis } = useReveal();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: CARD_RADIUS,
        overflow: "hidden",
        transform: vis
          ? hovered ? "translateY(-4px)" : "translateY(0)"
          : "translateY(24px)",
        opacity: vis ? 1 : 0,
        transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s, box-shadow 0.2s ease`,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: 40,
          background: article.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
        }}
      >
        {article.emoji}
      </div>
      <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        <span
          style={{
            display: "inline-block",
            background: article.categoryColor + "18",
            color: article.categoryColor,
            fontFamily: SANS,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 0.8,
            padding: "3px 10px",
            borderRadius: 20,
            alignSelf: "flex-start",
          }}
        >
          {article.category.toUpperCase()}
        </span>
        <div
          style={{
            fontFamily: SERIF,
            fontSize: 17,
            color: DARK,
            lineHeight: 1.4,
          }}
        >
          {article.title}
        </div>
        <div
          style={{
            fontFamily: SANS,
            fontSize: 13,
            color: MUTED,
            lineHeight: 1.6,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {article.excerpt}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: 8 }}>
          <span style={{ fontFamily: SANS, fontSize: 12, color: MUTED }}>
            {article.date} · {article.readTime}
          </span>
          <span style={{ fontFamily: SANS, fontSize: 13, fontWeight: 600, color: BLUE }}>
            Read →
          </span>
        </div>
      </div>
    </div>
  );
}

export function BlogPage() {
  const isMobile = useIsMobile();
  const heroReveal = useReveal();
  const featuredReveal = useReveal();
  const gridReveal = useReveal();
  const ctaReveal = useReveal();
  const [email, setEmail] = useState("");

  return (
    <div style={{ fontFamily: SANS, background: BG, minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #F0F7FF 0%, #F8F8F5 55%, #F5F0FF 100%)",
          padding: isMobile ? `${HERO_PT_MOB}px 0 ${HERO_PB_MOB}px` : `${HERO_PT}px 0 ${HERO_PB}px`,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box", position: "relative", zIndex: 1, textAlign: "center" }}>
        <div
          ref={heroReveal.ref}
          style={{
            maxWidth: 720,
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
            INSIGHTS & RESOURCES
          </div>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: isMobile ? H1_SIZE_MOB : H1_SIZE,
              fontWeight: 400,
              color: DARK,
              lineHeight: 1.1,
              margin: "0 0 20px",
            }}
          >
            Special ed insights
            <br />
            <span style={{ color: BLUE }}>from the field.</span>
          </h1>
          <p
            style={{
              fontFamily: SANS,
              fontSize: BODY_SIZE,
              color: MUTED,
              lineHeight: 1.7,
              margin: "0 auto 36px",
              maxWidth: 520,
            }}
          >
            Evidence-based strategies, compliance updates, and real stories from special education teams across the country.
          </p>
          <input
            type="text"
            placeholder="Search articles..."
            style={{
              fontFamily: SANS,
              width: "100%",
              maxWidth: 480,
              border: "1.5px solid rgba(0,0,0,0.12)",
              borderRadius: 12,
              padding: "12px 16px",
              fontSize: 14,
              outline: "none",
              color: DARK,
              background: "#fff",
              boxSizing: "border-box",
            }}
          />
        </div>
        </div>
      </section>

      {/* Featured Article */}
      <section style={{ padding: isMobile ? `${SECT_PY_MOB}px 0` : `${SECT_PY}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
        <div
          ref={featuredReveal.ref}
          style={{
            background: "#fff",
            borderRadius: 20,
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            opacity: featuredReveal.vis ? 1 : 0,
            transform: featuredReveal.vis ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #EDE8F8, #E0F7F5)",
              borderRadius: isMobile ? "20px 20px 0 0" : "20px 0 0 20px",
              minHeight: 260,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
            }}
          >
            📰
          </div>
          <div style={{ padding: isMobile ? "28px 24px" : "40px 40px" }}>
            <span
              style={{
                display: "inline-block",
                background: BLUE,
                color: "#fff",
                fontFamily: SANS,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1,
                padding: "4px 12px",
                borderRadius: 20,
                marginBottom: 16,
              }}
            >
              FEATURED
            </span>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: 28,
                fontWeight: 400,
                color: DARK,
                lineHeight: 1.3,
                margin: "0 0 12px",
              }}
            >
              5 Ways AI Is Transforming IEP Documentation in 2025
            </h2>
            <div style={{ fontFamily: SANS, fontSize: 13, color: MUTED, marginBottom: 16 }}>
              March 15, 2025 · 8 min read
            </div>
            <p style={{ fontFamily: SANS, fontSize: 14, color: MUTED, lineHeight: 1.7, margin: "0 0 24px" }}>
              Discover how special education teams across the country are using AI-powered tools to cut documentation time in half while improving compliance and student outcomes.
            </p>
            <a
              href="#"
              style={{
                fontFamily: SANS,
                fontSize: 15,
                fontWeight: 600,
                color: BLUE,
                textDecoration: "none",
              }}
            >
              Read article →
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* Article Grid */}
      <section style={{ padding: isMobile ? `0 0 ${SECT_PY_MOB}px` : `0 0 ${SECT_PY}px` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
        <div ref={gridReveal.ref}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: CARD_GAP,
            }}
          >
            {ARTICLES.map((article, i) => (
              <ArticleCard key={i} article={article} index={i} />
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* CTA Newsletter */}
      <section style={{ padding: isMobile ? `0 0 ${SECT_PY_MOB}px` : `0 0 ${SECT_PY}px` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
        <div
          ref={ctaReveal.ref}
          style={{
            background: "#fff",
            borderRadius: isMobile ? 20 : CTA_RADIUS,
            padding: isMobile ? `${CTA_PAD_Y_MOB}px ${CTA_PAD_X_MOB}px` : `${CTA_PAD_Y}px ${CTA_PAD_X}px`,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: 28,
            opacity: ctaReveal.vis ? 1 : 0,
            transform: ctaReveal.vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div>
            <div style={{ fontFamily: SERIF, fontSize: 26, color: DARK, marginBottom: 6 }}>
              Subscribe to our newsletter
            </div>
            <div style={{ fontFamily: SANS, fontSize: 14, color: MUTED }}>
              Weekly insights for special ed teams.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 12,
              width: isMobile ? "100%" : "auto",
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                fontFamily: SANS,
                fontSize: 14,
                border: "1.5px solid rgba(0,0,0,0.12)",
                borderRadius: 10,
                padding: "12px 16px",
                outline: "none",
                width: isMobile ? "100%" : 240,
                color: DARK,
                background: BG,
                boxSizing: "border-box",
              }}
            />
            <button
              style={{
                fontFamily: SANS,
                fontSize: BTN_SIZE,
                fontWeight: 600,
                color: "#fff",
                background: BLUE,
                border: "none",
                borderRadius: BTN_RADIUS,
                padding: BTN_PAD,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
