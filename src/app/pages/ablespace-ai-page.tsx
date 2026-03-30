import React from "react";
import { useIsMobile } from "../components/shared";
import { Btn3D } from "../components/btn-3d";
import { SocialProofStrip } from "../components/social-proof-strip";
import { FeatureRow } from "../components/feature-row";
import { FeatureCardsGrid } from "../components/feature-cards-grid";
import { FeatureSplitCard } from "../components/feature-split-card";
import { TestimonialsSection } from "../components/testimonials-section";
import { MobileAppSection } from "../components/mobile-app-section";
import { FAQSection } from "../components/faq-section";
import { CTABannerSection } from "../components/cta-banner-section";
import { FooterSection } from "../components/footer-section";
import { T } from "../styles/typography";
import { MAX_W, PAD_X, PAD_X_MOB, SECT_PY, SECT_PY_MOB, BG } from "../pages/page-layout";
import aiHero    from "../../assets/ai-section/ai-section.png";
import aiFeat1   from "../../assets/ai-section/ai-feature-1.png";
import aiFeat2   from "../../assets/ai-section/ai-feature-2.png";
import aiFeat3   from "../../assets/ai-section/ai-feature-3.png";
import aiFeat4   from "../../assets/ai-section/ai-feature-4.png";
import aiFeat5   from "../../assets/ai-section/ai-feature-5.png";

const SANS = "'DM Sans', system-ui, sans-serif";
const BLUE = "#53AEF3";
const DARK = "#1A1A1E";

const PROGRESS_CARDS = [
  {
    img: aiFeat4,
    label: "PROGRESS & DATA",
    title: "Generate Progress Notes",
    desc: "Automatically create well-structured, standards-aligned progress notes in seconds based on the data you've collected.",
    cta: "Learn more",
  },
  {
    img: aiFeat5,
    label: "DATA TRACKING",
    title: "Suggest Data Tracking Method",
    desc: "AI recommends the best data collection method for each IEP goal — task analysis, prompts, rating scales, and more.",
    cta: "Learn more",
  },
];

export function AbleSpaceAiPage() {
  const isMobile = useIsMobile();
  const padX   = isMobile ? PAD_X_MOB : PAD_X;
  const sectPy = isMobile ? SECT_PY_MOB : SECT_PY;

  return (
    <div style={{ backgroundColor: BG, minHeight: "100vh", overflowX: "hidden", position: "relative" }}>

      {/* ── Decorative curves ── */}
      <svg aria-hidden style={{
        position: "absolute", top: 0, left: 0,
        width: "100%", height: 560,
        pointerEvents: "none", zIndex: 0, overflow: "visible",
      }} viewBox="0 0 1440 560" preserveAspectRatio="none" fill="none">
        <path d="M -60 420 C 80 340 160 230 240 150 C 320 70 440 10 600 -20"
          stroke="rgba(0,0,0,0.08)" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M -40 500 C 100 410 190 295 275 205 C 360 118 475 52 635 20"
          stroke="rgba(0,0,0,0.05)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M 1500 420 C 1360 340 1280 230 1200 150 C 1120 70 1000 10 840 -20"
          stroke="rgba(0,0,0,0.08)" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M 1480 500 C 1340 410 1250 295 1165 205 C 1080 118 965 52 805 20"
          stroke="rgba(0,0,0,0.05)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      </svg>

      {/* ── 1. Hero ── */}
      <section style={{ position: "relative", zIndex: 1, padding: isMobile ? "112px 0 60px" : "136px 0 80px" }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: `0 ${padX}px`, boxSizing: "border-box" }}>
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? 48 : 60,
          }}>

            {/* Left */}
            <div style={{ flex: "0 0 480px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span style={{ ...T.label(), display: "block", marginBottom: 16 }}>ABLESPACE AI</span>

              <h1 style={{ ...T.h1(isMobile), margin: "0 0 20px" }}>
                <span style={{ display: "block" }}>AbleSpace AI.</span>
                <span style={{ display: "block" }}>Built for Special Education</span>
              </h1>

              <p style={{ ...T.heroSub(), maxWidth: 460, margin: "0 0 28px" }}>
                Let AI handle the heavy lifting — so planning, documenting, and tracking IEP goals
                becomes faster, smarter, and stress-free, giving you more time to focus on your students.
              </p>

              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 12, width: isMobile ? "100%" : "auto" }}>
                <Btn3D label="Educators" variant="primary">Sign up for free</Btn3D>
                <Btn3D label="Admins" variant="ghost">Learn More</Btn3D>
              </div>
            </div>

            {/* Right — hero image */}
            <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={aiHero} alt="AbleSpace AI" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. Social proof ── */}
      <SocialProofStrip />

      {/* ── IEP Writing Assistance heading ── */}
      <section style={{ padding: `${sectPy}px 0 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: `0 ${padX}px`, boxSizing: "border-box" }}>
          <span style={{ ...T.label(), display: "block", marginBottom: 12 }}>IEP WRITING ASSISTANCE</span>
          <h2 style={{ ...T.h2(isMobile), margin: 0, maxWidth: 560 }}>Let AI write the first draft</h2>
        </div>
      </section>

      {/* ── 3. Feature row — image right, content left ── */}
      <section style={{ padding: `${sectPy}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: `0 ${padX}px`, boxSizing: "border-box" }}>
          <FeatureRow
            img={aiFeat1}
            title="Generate IEP Goal"
            desc="Automatically create well-structured, standards-aligned IEP goals in seconds. Adjust complexity, generate similar goals, or add objectives with a single click."
            bullets={[
              "Aligns with state or common core standards",
              "Suggests objectives automatically",
              "Adjust complexity with one click",
              "Generate multiple goal variations instantly",
            ]}
            flip={true}
          />
        </div>
      </section>

      {/* ── 4. Feature row — image left, content right ── */}
      <section style={{ padding: `${sectPy}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: `0 ${padX}px`, boxSizing: "border-box" }}>
          <FeatureRow
            img={aiFeat2}
            title="Generate Goal Strategies"
            desc="Automatically create well-structured, standards-aligned goal strategies in seconds. Adjust complexity, generate similar strategies, or add objectives with a single click."
            bullets={[
              "Aligns with state or common core standards",
              "Keep attendance logs accurate and consistent",
              "Suggests objectives automatically",
              "Instantly access records for reports and reviews",
            ]}
            flip={false}
          />
        </div>
      </section>

      {/* ── 5. Feature row — image right, content left ── */}
      <section style={{ padding: `${sectPy}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: `0 ${padX}px`, boxSizing: "border-box" }}>
          <FeatureRow
            img={aiFeat3}
            title="Generate Present Level Statements"
            desc="Automatically create well-structured, standards-aligned present level statements in seconds. Adjust complexity, generate similar statements, or add objectives with a single click."
            bullets={[
              "Aligns with state or common core standards",
              "Keep attendance logs accurate and consistent",
              "Suggests objectives automatically",
              "Instantly access records for reports and reviews",
            ]}
            flip={true}
          />
        </div>
      </section>

      {/* ── Progress and Data Support heading ── */}
      <section style={{ padding: `${sectPy}px 0 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: `0 ${padX}px`, boxSizing: "border-box" }}>
          <span style={{ ...T.label(), display: "block", marginBottom: 12 }}>PROGRESS AND DATA SUPPORT</span>
          <h2 style={{ ...T.h2(isMobile), margin: 0, maxWidth: 520 }}>Data-driven documentation, automated</h2>
        </div>
      </section>

      {/* ── 6. Feature cards grid ── */}
      <section style={{ padding: `${sectPy}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: `0 ${padX}px`, boxSizing: "border-box" }}>
          <FeatureCardsGrid cards={PROGRESS_CARDS} />
        </div>
      </section>

      {/* ── 7. Feature split card — Align to Standard ── */}
      <section style={{ padding: `${sectPy}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: `0 ${padX}px`, boxSizing: "border-box" }}>
          <FeatureSplitCard
            img={aiHero}
            title="Align to Standard"
            desc="Turn audit results into detailed, shareable reports instantly — complete with insights and action points."
            bullets={[
              "Generate professional PDF audit reports",
              "Track IEP goals using Task Analysis, Prompts, Rating scales, and more",
              "Share with providers or administrators seamlessly",
              "Organise goals with Visual Phases, Custom Tags, and Goal History",
            ]}
            imagePosition="left"
          />
        </div>
      </section>

      {/* ── 8–12. Shared sections ── */}
      <TestimonialsSection />
      <MobileAppSection />
      <FAQSection />
      <CTABannerSection />
      <FooterSection />

    </div>
  );
}
