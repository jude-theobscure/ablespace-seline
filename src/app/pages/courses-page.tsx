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

const LEVEL_STYLES: Record<string, { color: string; bg: string }> = {
  Beginner:     { color: "#16A34A", bg: "#F0FDF4" },
  Intermediate: { color: "#D97706", bg: "#FEF3C7" },
  Advanced:     { color: "#6B5ECD", bg: "#EDE8F8" },
};

const COURSES = [
  {
    emoji: "🎓",
    gradientBg: "linear-gradient(135deg, #EDE8F8, #53AEF3)",
    level: "Beginner",
    title: "AbleSpace Certification: Core Skills",
    description: "The complete foundation course for any provider new to AbleSpace. Cover data collection, IEP tools, and compliance basics.",
    lessons: 12,
    hours: "3.5",
    credits: "3.5",
    instructor: "Dr. Sarah Kim, PhD, BCBA-D",
    initials: "SK",
    avatarBg: "#EDE8F8",
    avatarColor: "#6B5ECD",
  },
  {
    emoji: "📊",
    gradientBg: "linear-gradient(135deg, #E0F7F5, #0DB8A0)",
    level: "Advanced",
    title: "Advanced Data Collection for BCBAs",
    description: "Deep dive into all 9+ data types, graphing, trend analysis, and how to use AbleSpace AI alongside your clinical judgment.",
    lessons: 8,
    hours: "2",
    credits: "2",
    instructor: "Marcus Torres, MS, BCBA",
    initials: "MT",
    avatarBg: "#E0F7F5",
    avatarColor: "#0DB8A0",
  },
  {
    emoji: "⚖️",
    gradientBg: "linear-gradient(135deg, #FEF3C7, #D97706)",
    level: "Intermediate",
    title: "IDEA Compliance & IEP Mastery",
    description: "Master IDEA requirements, write airtight IEPs, and build a compliance system that passes any state audit.",
    lessons: 10,
    hours: "3",
    credits: "3",
    instructor: "Reena Patel, EdD, Special Ed Director",
    initials: "RP",
    avatarBg: "#FEF3C7",
    avatarColor: "#D97706",
  },
  {
    emoji: "🤖",
    gradientBg: "linear-gradient(135deg, #F0FDF4, #16A34A)",
    level: "Intermediate",
    title: "AI Tools for Special Educators",
    description: "Learn to use AbleSpace AI effectively — progress notes, goal writing, trend analysis — while maintaining clinical integrity.",
    lessons: 6,
    hours: "1.5",
    credits: "1.5",
    instructor: "Janet Lee, MS, SLP-CCC",
    initials: "JL",
    avatarBg: "#FCE7F3",
    avatarColor: "#DB2777",
  },
];

const BENEFITS = [
  { emoji: "🎓", label: "CE Credits Included" },
  { emoji: "📱", label: "Learn at Your Pace" },
  { emoji: "👩‍🏫", label: "Expert Instructors" },
  { emoji: "🏆", label: "Team Certificates" },
];

function CourseCard({ course, index }: { course: typeof COURSES[0]; index: number }) {
  const { ref, vis } = useReveal();
  const [hovered, setHovered] = useState(false);
  const level = LEVEL_STYLES[course.level];

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: 32,
        transform: vis
          ? hovered ? "translateY(-4px)" : "translateY(0)"
          : "translateY(28px)",
        opacity: vis ? 1 : 0,
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s, box-shadow 0.2s ease`,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            background: course.gradientBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
          }}
        >
          {course.emoji}
        </div>
        <span
          style={{
            fontFamily: SANS,
            fontSize: 11,
            fontWeight: 700,
            color: level.color,
            background: level.bg,
            padding: "4px 12px",
            borderRadius: 20,
          }}
        >
          {course.level}
        </span>
      </div>

      {/* Title */}
      <div style={{ fontFamily: SERIF, fontSize: 22, color: DARK, lineHeight: 1.3 }}>
        {course.title}
      </div>

      {/* Description */}
      <div style={{ fontFamily: SANS, fontSize: 14, color: MUTED, lineHeight: 1.7 }}>
        {course.description}
      </div>

      {/* Meta pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {[
          `${course.lessons} lessons`,
          `${course.hours} hours`,
          `${course.credits} CE credits`,
        ].map((meta) => (
          <span
            key={meta}
            style={{
              fontFamily: SANS,
              fontSize: 12,
              fontWeight: 600,
              color: BLUE,
              background: BLUE + "15",
              padding: "4px 12px",
              borderRadius: 20,
            }}
          >
            {meta}
          </span>
        ))}
      </div>

      {/* Instructor */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: course.avatarBg,
            color: course.avatarColor,
            fontFamily: SANS,
            fontSize: 12,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {course.initials}
        </div>
        <div style={{ fontFamily: SANS, fontSize: 13, color: MUTED }}>
          Instructor: <span style={{ color: DARK, fontWeight: 600 }}>{course.instructor}</span>
        </div>
      </div>

      {/* Enroll button */}
      <button
        style={{
          fontFamily: SANS,
          fontSize: 14,
          fontWeight: 600,
          color: BLUE,
          background: "transparent",
          border: `1.5px solid ${BLUE}`,
          borderRadius: 10,
          padding: "11px 20px",
          cursor: "pointer",
          transition: "background 0.2s ease, color 0.2s ease",
          marginTop: "auto",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = BLUE;
          (e.currentTarget as HTMLButtonElement).style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
          (e.currentTarget as HTMLButtonElement).style.color = BLUE;
        }}
      >
        Enroll Now →
      </button>
    </div>
  );
}

export function CoursesPage() {
  const isMobile = useIsMobile();
  const heroReveal = useReveal();
  const benefitsReveal = useReveal();

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
            Structured learning
            <br />
            <span style={{ color: BLUE }}>for your whole team.</span>
          </h1>
          <p
            style={{
              fontFamily: SANS,
              fontSize: BODY_SIZE,
              color: MUTED,
              lineHeight: 1.7,
              margin: "0 auto",
              maxWidth: 520,
            }}
          >
            Multi-lesson courses designed by certified special education professionals. Earn CE credits and build skills your team can apply immediately.
          </p>
        </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section style={{ padding: isMobile ? `40px 0 8px` : `56px 0 8px` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
        <div
          ref={benefitsReveal.ref}
          style={{
            background: "#fff",
            borderRadius: 20,
            padding: isMobile ? "28px 20px" : "28px 48px",
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: CARD_GAP,
            opacity: benefitsReveal.vis ? 1 : 0,
            transform: benefitsReveal.vis ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {BENEFITS.map((b) => (
            <div
              key={b.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: 28 }}>{b.emoji}</span>
              <span style={{ fontFamily: SANS, fontSize: 14, fontWeight: 600, color: DARK }}>
                {b.label}
              </span>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Course Cards */}
      <section style={{ padding: isMobile ? `${SECT_PY_MOB}px 0` : `${SECT_PY}px 0` }}>
        <div
          style={{
            maxWidth: MAX_W,
            margin: "0 auto",
            padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`,
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: CARD_GAP,
          }}
        >
          {COURSES.map((course, i) => (
            <CourseCard key={course.title} course={course} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
