import React, { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../components/shared";
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
import heroImg from "../../assets/data-types/hero-data-types.png";
import feature1Img from "../../assets/data-types/feature-1.png";
import feature2Img from "../../assets/data-types/feature-2.png";
import feature3Img from "../../assets/data-types/feature-3.png";
import feature4Img from "../../assets/data-types/feature-4.png";
import feature5Img from "../../assets/data-types/feature-5.png";
import feature6Img from "../../assets/data-types/feature-6.png";
import feature7Img from "../../assets/data-types/feature-7.png";
import feature8Img from "../../assets/data-types/feature-8.png";
import feature9Img from "../../assets/data-types/feature-9.png";
import feature10Img from "../../assets/data-types/feature-10.png";
import feature11Img from "../../assets/data-types/feature-11.png";
import feature12Img from "../../assets/data-types/feature-12.png";

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
  title: "Built for Real IEP Progress Tracking",
  desc: "Each data type is designed to fit different goal measurement styles so you can track progress the way your student learns best.",
  bullets: [
    "Collect data with 10+ built-in data types",
    "Phases, labels, and full goal history built in",
    "Instantly access records for reports and reviews",
    "Works across IEP goals, objectives, and benchmarks",
  ],
};

const CARDS_1 = [
  {
    img: feature2Img,
    label: "ACCURACY",
    title: "Track correct vs. incorrect responses",
    desc: "Record total attempts, accuracy percentages, and error patterns for clear progress insights.",
    cta: "Accuracy",
  },
  {
    img: feature3Img,
    label: "PROMPTING LEVELS",
    title: "Measure the level of assistance needed",
    desc: "Select from custom prompt levels or multiple-choice options to track how much support a student requires.",
    cta: "Prompting Levels",
  },
];

const CARDS_2 = [
  {
    img: feature4Img,
    label: "TASK ANALYSIS",
    title: "Break skills into step-by-step mastery",
    desc: "Break complex skills into step-by-step components and record mastery for each step.",
    cta: "Task Analysis",
  },
  {
    img: feature5Img,
    label: "TASK WITH PROMPTS",
    title: "Track each step with prompting levels",
    desc: "Combine task analysis with prompting levels to track each step and the level of assistance provided.",
    cta: "Task with Prompts",
  },
];

const CARDS_3 = [
  {
    img: feature6Img,
    label: "RATING SCALE",
    title: "Rate behavior consistency and quality",
    desc: "Use numeric or labeled scales (e.g., 1–5 or Never–Always) to measure consistency, quality, or frequency of a behavior.",
    cta: "Rating Scale",
  },
  {
    img: feature7Img,
    label: "FREQUENCY",
    title: "Count how often a behavior occurs",
    desc: "Count how often a specific behavior or skill occurs within a session or time period.",
    cta: "Frequency",
  },
];

const CARDS_4 = [
  {
    img: feature8Img,
    label: "DURATION",
    title: "Record how long behaviors last",
    desc: "Record how long a student engages in an activity or displays a behavior.",
    cta: "Duration",
  },
  {
    img: feature9Img,
    label: "OPPORTUNITY",
    title: "Track responses across every opportunity",
    desc: "Track total opportunities, correct responses, and errors for any repeatable skill or activity.",
    cta: "Opportunity",
  },
];

const CARDS_5 = [
  {
    img: feature10Img,
    label: "ANECDOTAL",
    title: "Document qualitative observations",
    desc: "Document qualitative observations when quantitative tracking isn't possible.",
    cta: "Anecdotal",
  },
  {
    img: feature11Img,
    label: "RUBRICS",
    title: "Rate performance with custom rubrics",
    desc: "Rate student performance using custom rubric scales and descriptors.",
    cta: "Rubrics",
  },
];

const FEATURE_12 = {
  img: feature12Img,
  title: "Custom Goal",
  desc: "Custom goals let you combine multiple data types and create tailored tracking solutions.",
  bullets: [
    "Build goals your way with custom data types",
    "Combine multiple data types into a single goal",
    "Flexible templates without rigid structures",
    "Keep everything organized and easy to review",
  ],
};

export function DataTypesPage() {
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
            <span style={{ display: "block" }}>IEP-Ready Data Types</span>
            <span style={{ display: "block" }}>for Progress Tracking</span>
          </h1>

          <p style={{
            ...T.heroSub(),
            maxWidth: 460,
            margin: 0, marginBottom: 24,
          }}>
            Every goal is unique — AbleSpace lets you track it your way with
            flexible, customizable data types built for IEP accuracy.
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
                alt="AbleSpace Data Types dashboard"
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
            Goal Data Types
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
                  <FeatureCardsGrid cards={CARDS_1} revealStyle={rs(1)} />
                  <FeatureCardsGrid cards={CARDS_2} revealStyle={rs(2)} />
                  <FeatureCardsGrid cards={CARDS_3} revealStyle={rs(3)} />
                  <FeatureCardsGrid cards={CARDS_4} revealStyle={rs(4)} />
                  <FeatureCardsGrid cards={CARDS_5} revealStyle={rs(5)} />
                  <FeatureSplitCard {...FEATURE_12} imagePosition="left" revealStyle={rs(6)} />
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
