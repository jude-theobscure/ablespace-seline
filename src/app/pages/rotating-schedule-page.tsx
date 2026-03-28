import React, { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../components/shared";
import heroImg from "../../assets/rotating-schedule/hero-section.png";
import feature1Img from "../../assets/rotating-schedule/feature-1.png";
import feature2Img from "../../assets/rotating-schedule/feature-2.png";
import feature3Img from "../../assets/rotating-schedule/feature-3.png";
import feature4Img from "../../assets/rotating-schedule/feature-4.png";
import { SocialProofStrip } from "../components/social-proof-strip";
import { TestimonialsSection } from "../components/testimonials-section";
import { FAQSection } from "../components/faq-section";
import { CTABannerSection } from "../components/cta-banner-section";
import { FooterSection } from "../components/footer-section";
import { MAX_W, PAD_X, PAD_X_MOB, SECT_PY, SECT_PY_MOB } from "./page-layout";
import { Btn3D } from "../components/btn-3d";
import { T } from "../styles/typography";
import { FeatureRow } from "../components/feature-row";
import { FeatureSplitCard } from "../components/feature-split-card";

const SANS  = "'DM Sans', system-ui, sans-serif";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";

function useReveal(threshold = 0.12) {
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
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, vis };
}

const FEATURES = [
  {
    img: feature1Img,
    title: "Smart Rotating Calendar Sync",
    desc: "Import your school's A/B or custom rotation schedule. AbleSpace maps every provider's caseload to the right days automatically — no manual entry needed.",
    bullets: [
      "Supports A/B, 6-day, and custom rotation types",
      "Auto-maps providers to the correct rotation days",
      "Syncs in real time when the calendar changes",
      "Works across multiple schools and campuses",
    ],
  },
  {
    img: feature2Img,
    title: "Conflict Detection & Auto-Rescheduling",
    desc: "Instantly flag scheduling conflicts before they happen. When a student is absent or a provider is out, AbleSpace flags missed services and suggests makeup slots.",
    bullets: [
      "Detects provider and student schedule conflicts",
      "Suggests available makeup slots automatically",
      "Tracks absences and missed service minutes",
      "Alerts before IEP mandate gaps occur",
    ],
  },
  {
    img: feature3Img,
    title: "Provider Dashboards & Utilization Reports",
    desc: "Each therapist sees their own personalized daily schedule — who, where, and when. Admins get a full-picture view of service delivery across the district.",
    bullets: [
      "Personalized daily schedule view per provider",
      "Real-time service utilization tracking",
      "Export compliance reports in one click",
      "Multi-school admin dashboard",
    ],
  },
  {
    img: feature4Img,
    title: "Multi-School & District Management",
    desc: "Manage rotating schedules across multiple buildings and campuses from a single admin view. Keep every team aligned without the back-and-forth.",
    bullets: [
      "Centralized schedule management across all schools",
      "Role-based access for admins, providers, and staff",
      "District-wide compliance reporting in one place",
      "Instant updates pushed to all providers simultaneously",
    ],
  },
];

export function RotatingSchedulePage() {
  const isMobile = useIsMobile();
  const heroReveal = useReveal(0.05);
  const featReveal = useReveal(0.08);

  return (
    <div style={{ background: BG, minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── Hero ── */}
      <section
        ref={heroReveal.ref}
        style={{
          position: "relative", zIndex: 1,
          maxWidth: MAX_W, margin: "0 auto",
          padding: isMobile ? "112px 20px 0" : "136px 80px 0",
          boxSizing: "border-box",
        }}
      >
        <div style={{
          maxWidth: 640, margin: "0 auto",
          display: "flex", flexDirection: "column", alignItems: "center",
          textAlign: "center",
          opacity: heroReveal.vis ? 1 : 0,
          transform: heroReveal.vis ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 600ms ease, transform 600ms ease",
        }}>
          <h1 style={{
            ...T.h1(isMobile),
            margin: 0, marginBottom: 16, maxWidth: 640,
          }}>
            <span style={{ display: "block" }}>Rotating Schedule</span>
            <span style={{ display: "block" }}>that runs on autopilot.</span>
          </h1>

          <p style={{
            ...T.heroSub(),
            maxWidth: 460,
            margin: 0, marginBottom: 24,
          }}>
            Sync your school's rotation calendar, eliminate conflicts, and ensure
            every student receives their mandated service minutes — automatically.
          </p>

          <div style={{
            display: "flex", flexDirection: isMobile ? "column" : "row",
            alignItems: "center", justifyContent: "center", gap: 12,
            marginBottom: 28, width: isMobile ? "100%" : "auto",
          }}>
            <Btn3D label="Educators" variant="primary">Start for Free</Btn3D>
            <Btn3D label="Admins" variant="ghost">Learn More</Btn3D>
          </div>

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            flexWrap: "wrap", gap: isMobile ? 16 : 28,
          }}>
            {[
              { label: "HIPAA", sub: "Compliant" },
              { label: "ISO 27001", sub: "Certified" },
              { label: "FERPA", sub: "Compliant" },
            ].map(({ label, sub }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1.5L2 4v4c0 3.3 2.5 5.8 6 6.5 3.5-.7 6-3.2 6-6.5V4L8 1.5z"
                    stroke="#C0BFBA" strokeWidth="1.3" strokeLinejoin="round"/>
                  <path d="M5.5 8l1.8 1.8L10.5 6" stroke="#C0BFBA" strokeWidth="1.3"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ ...T.bodySm(), fontWeight: 600, color: "#A0A0A0" }}>{label}</span>
                  <span style={{ ...T.caption(), color: "#BBBBBB" }}>{sub}</span>
                </div>
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{
                background: "#FF492C", color: "#fff",
                fontFamily: SANS, fontWeight: 700, fontSize: 11,
                borderRadius: 3, padding: "2px 5px",
              }}>G2</span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ ...T.caption(), fontWeight: 600, color: "#F5A623" }}>★★★★★</span>
                <span style={{ ...T.caption(), color: "#BBBBBB" }}>5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero image / placeholder */}
        <div style={{ marginTop: 96, width: "100%", position: "relative" }}>
          <div style={{
            width: "100%",
            borderRadius: "24px 24px 0 0",
            border: "1px solid rgba(0,0,0,0.07)",
            overflow: "hidden",
          }}>
            {/* Browser top bar */}
            <div style={{
              height: 42, background: "#F0F0EE",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              display: "flex", alignItems: "center",
              position: "relative", flexShrink: 0,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: 16 }}>
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F57" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#FEBC2E" }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28C840" }} />
              </div>
              <div style={{
                position: "absolute", left: "50%", transform: "translateX(-50%)",
                background: "rgba(0,0,0,0.07)", borderRadius: 9999,
                padding: "4px 16px", width: 200, textAlign: "center",
                fontFamily: SANS, fontSize: 13, color: MUTED, letterSpacing: "-0.1px",
              }}>
                app.ablespace.io
              </div>
            </div>

            <div style={{ position: "relative", display: "block", lineHeight: 0, overflow: "hidden" }}>
              <img
                src={heroImg}
                alt="AbleSpace Rotating Schedule dashboard"
                style={{ width: "100%", display: "block", objectFit: "cover" }}
              />
            </div>

            {/* Fade to BG at bottom */}
            <div style={{
              position: "absolute", bottom: 0, left: 0,
              width: "100%", height: "40%",
              background: `linear-gradient(to bottom, transparent 0%, rgba(248,248,245,0.7) 50%, #F8F8F5 75%)`,
              pointerEvents: "none", zIndex: 2,
            }} />
          </div>
        </div>
      </section>

      <SocialProofStrip />

      {/* ── Features ── */}
      <section style={{
        padding: isMobile ? `${SECT_PY_MOB}px 0` : `${SECT_PY}px 0`,
        background: BG,
      }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
          <h2 style={{
            ...T.h2(isMobile),
            margin: "0 0 64px",
            textAlign: "center",
          }}>
            Rotating Schedule Features
          </h2>
          <div
            ref={featReveal.ref}
            style={{ display: "flex", flexDirection: "column", gap: isMobile ? 64 : 100 }}
          >
            {FEATURES.map((ft, i) => {
              const revealStyle: React.CSSProperties = {
                opacity: featReveal.vis ? 1 : 0,
                transform: featReveal.vis ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 600ms ease ${i * 120}ms, transform 600ms ease ${i * 120}ms`,
              };

              if (i === 2) return (
                <FeatureSplitCard key={ft.title} {...ft} imagePosition="left" revealStyle={revealStyle} />
              );

              return (
                <FeatureRow key={ft.title} {...ft} flip={i % 2 === 1} revealStyle={revealStyle} />
              );
            })}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection />
      <CTABannerSection />
      <FooterSection />
    </div>
  );
}
