import React, { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../components/shared";
import heroImg from "../../assets/reports/reports-hero-section.png";
import feature1Img from "../../assets/reports/feature-1.png";
import feature2Img from "../../assets/reports/feature-2.png";
import feature3Img from "../../assets/reports/feature-3.png";
import feature4Img from "../../assets/reports/feature-4.png";
import feature5Img from "../../assets/reports/feature-5.png";
import feature6Img from "../../assets/reports/feature-6.png";
import feature7Img from "../../assets/reports/feature-7.png";
import feature8Img from "../../assets/reports/feature-8.png";
import feature9Img from "../../assets/reports/feature-9.png";
import feature10Img from "../../assets/reports/feature-10.png";
import { SocialProofStrip } from "../components/social-proof-strip";
import { TestimonialsSection } from "../components/testimonials-section";
import { FAQSection } from "../components/faq-section";
import { CTABannerSection } from "../components/cta-banner-section";
import { FooterSection } from "../components/footer-section";
import { MAX_W, PAD_X, PAD_X_MOB, SECT_PY, SECT_PY_MOB } from "./page-layout";
import { Btn3D } from "../components/btn-3d";
import { T } from "../styles/typography";
import { FeatureCardsGrid } from "../components/feature-cards-grid";
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

const FEATURE_1 = {
  img: feature1Img,
  title: "20+ Auto-Generated Report Types",
  desc: "From goal progress to service logs, AbleSpace generates every report you need for IEP meetings, audits, and parent updates — automatically.",
  bullets: [
    "Progress reports, service summaries, and billing logs",
    "Auto-populated with session data — no manual entry",
    "Covers IEP goals, accommodations, and service time",
    "Ready for state submissions and parent meetings",
  ],
};

const FEATURE_2 = {
  img: feature2Img,
  title: "One-Click Export in Any Format",
  desc: "Export any report to PDF, CSV, or print directly — formatted and ready to share with parents, admins, or state agencies in seconds.",
  bullets: [
    "Export to PDF, CSV, or print with one click",
    "Professional formatting out of the box",
    "Shareable links for remote IEP meetings",
    "Bulk export across an entire caseload at once",
  ],
};

// Replace img with imports once assets are added
const FEATURE_3 = {
  img: feature7Img,
  title: "Real-Time Goal Progress Tracking",
  desc: "Log data after every session and watch progress update instantly across your entire caseload.",
  bullets: [
    "Progress updates live after every session",
    "Visual trend lines per student and goal",
    "Instant alerts when goals fall behind schedule",
    "Covers annual goals, objectives, and benchmarks",
  ],
};

const FEATURE_4 = {
  img: feature10Img,
  title: "Compliance & Audit Report Packages",
  desc: "Generate a complete compliance package — goals, services, data, and timelines — ready for state submissions or parent meetings.",
  bullets: [
    "Pre-built formats for IEP and 504 reviews",
    "Meets state and federal documentation standards",
    "Include progress graphs automatically",
    "Export or print in one click",
  ],
};

const CARDS_1 = [
  {
    img: feature3Img,
    label: "PROGRESS GRAPHS",
    title: "Visualize every student's growth",
    desc: "Auto-generated trend lines show goal progress over time. Drop them into any IEP meeting report without touching a spreadsheet.",
    cta: "Progress Graphs",
  },
  {
    img: feature4Img,
    label: "COMPLIANCE REPORTS",
    title: "Audit-ready in one click",
    desc: "Generate a full compliance package — services delivered, accommodations logged, and goals tracked — ready for any state or district audit.",
    cta: "Compliance Reports",
  },
];

const CARDS_2 = [
  {
    img: feature5Img,
    label: "SERVICE SUMMARIES",
    title: "Every session, fully documented",
    desc: "Auto-generated service logs for every student — searchable, exportable, and ready for parent meetings or district reviews.",
    cta: "Service Summaries",
  },
  {
    img: feature6Img,
    label: "BILLING LOGS",
    title: "Billing records that pay you back",
    desc: "Session-by-session billing logs auto-filled with provider, duration, and service type — ready for Medicaid or insurance submission.",
    cta: "Billing Logs",
  },
];

const CARDS_3 = [
  {
    img: feature8Img,
    label: "PARENT REPORTS",
    title: "Keep families in the loop",
    desc: "Share professional progress summaries directly with parents — formatted and ready in one click, no extra work required.",
    cta: "Parent Reports",
  },
  {
    img: feature9Img,
    label: "DISTRICT REPORTS",
    title: "District-wide visibility in one view",
    desc: "Admins get a full picture of service delivery, compliance status, and goal progress across every school and provider.",
    cta: "District Reports",
  },
];

export function ReportsPage() {
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
            <span style={{ display: "block" }}>Reports that write</span>
            <span style={{ display: "block" }}>themselves.</span>
          </h1>

          <p style={{
            ...T.heroSub(),
            maxWidth: 460,
            margin: 0, marginBottom: 24,
          }}>
            Auto-generate progress reports, compliance summaries, and IEP meeting
            packets — export in one click, every time.
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

        {/* Dashboard screenshot in browser chrome */}
        <div style={{ marginTop: 96, width: "100%", position: "relative" }}>
          <div style={{
            width: "100%",
            borderRadius: "24px 24px 0 0",
            border: "1px solid rgba(0,0,0,0.07)",
            overflow: "hidden",
          }}>
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
            <div style={{ display: "block", lineHeight: 0 }}>
              <img
                src={heroImg}
                alt="AbleSpace Reports dashboard"
                style={{ width: "100%", display: "block", objectFit: "cover" }}
              />
            </div>
          </div>
          {/* Fade to BG at bottom */}
          <div style={{
            position: "absolute", bottom: 0, left: 0,
            width: "100%", height: "60%",
            background: `linear-gradient(to bottom, transparent 0%, rgba(248,248,245,0.7) 50%, #F8F8F5 75%)`,
            pointerEvents: "none", zIndex: 2,
          }} />
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
            margin: "0 0 64px", textAlign: "center",
          }}>
            Reports Features
          </h2>
          <div
            ref={featReveal.ref}
            style={{ display: "flex", flexDirection: "column", gap: isMobile ? 64 : 100 }}
          >
            {(() => {
              const rs = (i: number): React.CSSProperties => ({
                opacity: featReveal.vis ? 1 : 0,
                transform: featReveal.vis ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 600ms ease ${i * 80}ms, transform 600ms ease ${i * 80}ms`,
              });
              return (
                <>
                  <FeatureRow {...FEATURE_1} flip={false} revealStyle={rs(0)} />
                  <FeatureRow {...FEATURE_2} flip={true}  revealStyle={rs(1)} />
                  <FeatureCardsGrid cards={CARDS_1} revealStyle={rs(2)} />
                  <FeatureCardsGrid cards={CARDS_2} revealStyle={rs(3)} />
                  <FeatureSplitCard {...FEATURE_3} imagePosition="left" revealStyle={rs(4)} />
                  <FeatureCardsGrid cards={CARDS_3} revealStyle={rs(5)} />
                  <FeatureSplitCard {...FEATURE_4} imagePosition="right" revealStyle={rs(6)} />
                </>
              );
            })()}
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
