import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../components/shared";
import { TestimonialsSection } from "../components/testimonials-section";
import { FooterSection } from "../components/footer-section";
import {
  MAX_W, PAD_X, PAD_X_MOB, SECT_PY, SECT_PY_MOB,
  HERO_PT, HERO_PT_MOB, HERO_PB, HERO_PB_MOB,
  H1_SIZE, H1_SIZE_MOB, H2_SIZE, H2_SIZE_MOB,
  BODY_SIZE, STAT_SIZE, STAT_SIZE_MOB, CARD_RADIUS, CARD_GAP,
} from "./page-layout";

const SANS  = "'DM Sans', system-ui, sans-serif";
const SERIF = "'Instrument Serif', serif";
const BLUE  = "#53AEF3";
const DARK  = "#1A1A1E";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";
const TINT  = "#EFEFED";

function useReveal(threshold = 0.1) {
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

const FILTERS = ["All", "Beginner", "Intermediate", "Advanced"];

const COURSES = [
  {
    gradientBg: "linear-gradient(135deg, #EDE8F8 0%, #B8A9F0 100%)",
    level: "Beginner",
    title: "Collecting & Analyzing Data to Monitor IEP Goals & Behaviors",
    tags: "Digital IEP data collection, IEP data collection course, IEP tracking",
    lessons: 14,
    duration: "34m",
    rating: 4.5,
    teachers: 400,
    free: true,
  },
  {
    gradientBg: "linear-gradient(135deg, #E0F7F5 0%, #0DB8A0 100%)",
    level: "Advanced",
    title: "Advanced Data Collection for BCBAs",
    tags: "Trial-by-trial, interval recording, data types, graphing, trend analysis",
    lessons: 8,
    duration: "2h",
    rating: 4.7,
    teachers: 218,
    free: false,
  },
  {
    gradientBg: "linear-gradient(135deg, #FEF3C7 0%, #F59E0B 100%)",
    level: "Intermediate",
    title: "IDEA Compliance & IEP Mastery",
    tags: "IDEA requirements, IEP writing, compliance systems, state audits",
    lessons: 10,
    duration: "3h",
    rating: 4.6,
    teachers: 312,
    free: false,
  },
  {
    gradientBg: "linear-gradient(135deg, #F0FDF4 0%, #16A34A 100%)",
    level: "Intermediate",
    title: "AI Tools for Special Educators",
    tags: "AbleSpace AI, progress notes, goal writing, clinical integrity",
    lessons: 6,
    duration: "1.5h",
    rating: 4.8,
    teachers: 527,
    free: true,
  },
  {
    gradientBg: "linear-gradient(135deg, #F0F7FF 0%, #53AEF3 100%)",
    level: "Beginner",
    title: "AbleSpace Certification: Core Skills",
    tags: "Platform basics, data collection, IEP tools, compliance overview",
    lessons: 12,
    duration: "3.5h",
    rating: 4.5,
    teachers: 683,
    free: true,
  },
  {
    gradientBg: "linear-gradient(135deg, #FCE7F3 0%, #DB2777 100%)",
    level: "Advanced",
    title: "Scheduling & Service Tracking for Districts",
    tags: "Admin tools, service logs, provider scheduling, district compliance",
    lessons: 9,
    duration: "2.5h",
    rating: 4.6,
    teachers: 145,
    free: false,
  },
];

const STATS = [
  { value: "90%", label: "report improvement\nin compliance" },
  { value: "4 hrs", label: "saved per week\non average" },
  { value: "80%", label: "report improvement\nin collaboration" },
];

function StarIcon({ filled }: { filled: boolean; half?: boolean }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path
        d="M6.5 1L8.09 4.87L12.28 5.24L9.19 7.92L10.16 12.01L6.5 9.77L2.84 12.01L3.81 7.92L0.72 5.24L4.91 4.87L6.5 1Z"
        fill={filled ? "#F59E0B" : "none"}
        stroke="#F59E0B"
        strokeWidth="0.8"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon key={i} filled={i <= Math.round(rating)} />
      ))}
    </div>
  );
}

function CourseCard({ course, index }: { course: typeof COURSES[0]; index: number }) {
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
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.10)" : "0 2px 8px rgba(0,0,0,0.05)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          height: 168,
          background: course.gradientBg,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Level badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: "rgba(255,255,255,0.88)",
            backdropFilter: "blur(4px)",
            fontFamily: SANS,
            fontSize: 11,
            fontWeight: 700,
            color: DARK,
            padding: "4px 10px",
            borderRadius: 20,
          }}
        >
          {course.level}
        </div>
        {/* FREE badge */}
        {course.free && (
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              background: BLUE,
              fontFamily: SANS,
              fontSize: 11,
              fontWeight: 700,
              color: "#fff",
              padding: "4px 10px",
              borderRadius: 20,
            }}
          >
            FREE
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        {/* Rating + teachers */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <StarRating rating={course.rating} />
          <span style={{ fontFamily: SANS, fontSize: 12, fontWeight: 700, color: DARK }}>
            {course.rating}
          </span>
          <span style={{ fontFamily: SANS, fontSize: 12, color: MUTED }}>
            · {course.teachers.toLocaleString()} Teachers
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: SERIF,
            fontSize: 18,
            fontWeight: 400,
            color: DARK,
            lineHeight: 1.35,
          }}
        >
          {course.title}
        </div>

        {/* Tags */}
        <div
          style={{
            fontFamily: SANS,
            fontSize: 13,
            color: MUTED,
            lineHeight: 1.6,
            flex: 1,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          } as React.CSSProperties}
        >
          {course.tags}
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 12,
            borderTop: `1px solid ${TINT}`,
          }}
        >
          <span style={{ fontFamily: SANS, fontSize: 13, color: MUTED, fontWeight: 500 }}>
            {course.lessons} Lessons · {course.duration}
          </span>
          <span style={{ fontFamily: SANS, fontSize: 13, fontWeight: 700, color: BLUE }}>
            {course.free ? "Enroll free →" : "Enroll →"}
          </span>
        </div>
      </div>
    </div>
  );
}

export function CoursesPage() {
  const isMobile = useIsMobile();
  const heroReveal  = useReveal();
  const gridReveal  = useReveal();
  const ctaReveal   = useReveal();
  const statsReveal = useReveal();

  const [search, setSearch]           = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = COURSES.filter((c) => {
    const matchesFilter = activeFilter === "All" || c.level === activeFilter;
    const matchesSearch =
      search === "" ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.tags.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{ fontFamily: SANS, background: BG, minHeight: "100vh" }}>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(160deg, #F0F7FF 0%, #F8F8F5 55%, #F5F0FF 100%)",
          padding: isMobile
            ? `${HERO_PT_MOB}px 0 ${HERO_PB_MOB}px`
            : `${HERO_PT}px 0 ${HERO_PB}px`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: MAX_W,
            margin: "0 auto",
            padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`,
            boxSizing: "border-box",
          }}
        >
          <div
            ref={heroReveal.ref}
            style={{
              maxWidth: 660,
              margin: "0 auto",
              opacity: heroReveal.vis ? 1 : 0,
              transform: heroReveal.vis ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {/* Label pill */}
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
              COURSES
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
              Master AbleSpace
            </h1>

            <p
              style={{
                fontFamily: SANS,
                fontSize: BODY_SIZE,
                color: MUTED,
                lineHeight: 1.7,
                margin: "0 auto 40px",
                maxWidth: 520,
              }}
            >
              Discover everything you need to efficiently use AbleSpace with our expertly crafted courses. Start mastering the platform today!
            </p>

            {/* Search */}
            <div
              style={{
                position: "relative",
                maxWidth: 440,
                margin: "0 auto 32px",
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                style={{
                  position: "absolute",
                  left: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: MUTED,
                }}
              >
                <circle cx="7.5" cy="7.5" r="5.5" stroke={MUTED} strokeWidth="1.5" />
                <path d="M11.5 11.5L15 15" stroke={MUTED} strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search courses"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  fontFamily: SANS,
                  fontSize: 15,
                  color: DARK,
                  background: "#fff",
                  border: "1.5px solid #E5E5E5",
                  borderRadius: 12,
                  padding: "13px 18px 13px 44px",
                  outline: "none",
                  boxSizing: "border-box",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              />
            </div>

            {/* Filter pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    fontFamily: SANS,
                    fontSize: 13,
                    fontWeight: 600,
                    padding: "8px 18px",
                    borderRadius: 20,
                    border: "none",
                    cursor: "pointer",
                    background: activeFilter === f ? BLUE : TINT,
                    color: activeFilter === f ? "#fff" : DARK,
                    transition: "background 0.2s ease, color 0.2s ease",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── All Courses Grid ────────────────────────────────────────── */}
      <section style={{ padding: isMobile ? `${SECT_PY_MOB}px 0` : `${SECT_PY}px 0` }}>
        <div
          style={{
            maxWidth: MAX_W,
            margin: "0 auto",
            padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`,
            boxSizing: "border-box",
          }}
        >
          {/* Section heading */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 32,
            }}
          >
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: isMobile ? H2_SIZE_MOB : 36,
                fontWeight: 400,
                color: DARK,
                margin: 0,
              }}
            >
              {activeFilter === "All" ? "All Courses" : `${activeFilter} Courses`}
            </h2>
            <span style={{ fontFamily: SANS, fontSize: 14, color: MUTED }}>
              {filtered.length} course{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div ref={gridReveal.ref}>
            {filtered.length > 0 ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                  gap: CARD_GAP,
                }}
              >
                {filtered.map((course, i) => (
                  <CourseCard key={course.title} course={course} index={i} />
                ))}
              </div>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  padding: "80px 0",
                  fontFamily: SANS,
                  fontSize: 16,
                  color: MUTED,
                }}
              >
                No courses match your search.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Need Personalized Help? ─────────────────────────────────── */}
      <section style={{ padding: isMobile ? `0 0 ${SECT_PY_MOB}px` : `0 0 ${SECT_PY}px` }}>
        <div
          style={{
            maxWidth: MAX_W,
            margin: "0 auto",
            padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`,
            boxSizing: "border-box",
          }}
        >
          <div
            ref={ctaReveal.ref}
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: isMobile ? "40px 28px" : "56px 72px",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              gap: isMobile ? 32 : 48,
              opacity: ctaReveal.vis ? 1 : 0,
              transform: ctaReveal.vis ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {/* Illustration */}
            <div
              style={{
                width: isMobile ? 120 : 160,
                height: isMobile ? 120 : 160,
                flexShrink: 0,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #EDE8F8, #F0F7FF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? 52 : 68,
              }}
            >
              🎓
            </div>

            {/* Text */}
            <div style={{ flex: 1, textAlign: isMobile ? "center" : "left" }}>
              <h3
                style={{
                  fontFamily: SERIF,
                  fontSize: isMobile ? 26 : 32,
                  fontWeight: 400,
                  color: DARK,
                  margin: "0 0 12px",
                  lineHeight: 1.2,
                }}
              >
                Need Personalized Help?
              </h3>
              <p
                style={{
                  fontFamily: SANS,
                  fontSize: 16,
                  color: MUTED,
                  lineHeight: 1.7,
                  margin: "0 0 28px",
                }}
              >
                Our support team is here to assist you with walkthroughs or demos.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  gap: 12,
                  justifyContent: isMobile ? "center" : "flex-start",
                  alignItems: isMobile ? "center" : "flex-start",
                }}
              >
                <button
                  style={{
                    fontFamily: SANS,
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#fff",
                    background: BLUE,
                    border: "none",
                    borderRadius: 10,
                    padding: "13px 28px",
                    cursor: "pointer",
                  }}
                >
                  Contact Support →
                </button>
                <button
                  style={{
                    fontFamily: SANS,
                    fontSize: 14,
                    fontWeight: 700,
                    color: DARK,
                    background: TINT,
                    border: "none",
                    borderRadius: 10,
                    padding: "13px 28px",
                    cursor: "pointer",
                  }}
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ────────────────────────────────────────────── */}
      <section
        style={{
          padding: isMobile ? `${SECT_PY_MOB}px 0` : `${SECT_PY}px 0`,
          background: "linear-gradient(160deg, #F0F7FF 0%, #F8F8F5 60%, #F5F0FF 100%)",
        }}
      >
        <div
          style={{
            maxWidth: MAX_W,
            margin: "0 auto",
            padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`,
            boxSizing: "border-box",
          }}
        >
          <div
            ref={statsReveal.ref}
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: CARD_GAP,
              opacity: statsReveal.vis ? 1 : 0,
              transform: statsReveal.vis ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.value}
                style={{
                  background: "#fff",
                  borderRadius: CARD_RADIUS,
                  padding: isMobile ? "32px 24px" : "40px 32px",
                  textAlign: "center",
                  opacity: statsReveal.vis ? 1 : 0,
                  transform: statsReveal.vis ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                }}
              >
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: isMobile ? STAT_SIZE_MOB : STAT_SIZE,
                    color: DARK,
                    lineHeight: 1,
                    marginBottom: 10,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: 14,
                    color: MUTED,
                    lineHeight: 1.5,
                    whiteSpace: "pre-line",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <FooterSection />
    </div>
  );
}
