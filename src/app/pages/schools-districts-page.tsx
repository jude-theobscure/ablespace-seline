import React from "react";
import { useIsMobile } from "../components/shared";
import { Btn3D } from "../components/btn-3d";
import { SocialProofStrip } from "../components/social-proof-strip";
import { ProblemSolutionSection } from "../components/problem-solution-section";
import { FeaturesSection } from "../components/features-section";
import { AIFeaturesSection } from "../components/ai-features-section";
import { SchoolsDistrictsSection } from "../components/schools-districts-section";
import { MobileAppSection } from "../components/mobile-app-section";
import { SecuritySection } from "../components/security-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { FAQSection } from "../components/faq-section";
import { CTABannerSection } from "../components/cta-banner-section";
import { FooterSection } from "../components/footer-section";
import { T } from "../styles/typography";
import featureGraphic from "../../assets/Feature Graphics.png";
import dashImg from "../../assets/c588e3d6fd588f8e1f139a98e572e19e10a451dd.png";

const SANS  = "'DM Sans', system-ui, sans-serif";
const BLUE  = "#53AEF3";
const DARK  = "#1A1A1E";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";

const COMPLIANCE = [
  {
    label: "HIPAA", sub: "Compliant",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5L2 4v4c0 3.3 2.5 5.8 6 6.5 3.5-.7 6-3.2 6-6.5V4L8 1.5z"
          stroke="#C0BFBA" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M5.5 8l1.8 1.8L10.5 6" stroke="#C0BFBA" strokeWidth="1.3"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "ISO 27001", sub: "Certified",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="#C0BFBA" strokeWidth="1.3"/>
        <path d="M5 7h6M5 9.5h4" stroke="#C0BFBA" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="8" cy="5.5" r="1" fill="#C0BFBA"/>
      </svg>
    ),
  },
  {
    label: "FERPA", sub: "Compliant",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5L2 4v4c0 3.3 2.5 5.8 6 6.5 3.5-.7 6-3.2 6-6.5V4L8 1.5z"
          stroke="#C0BFBA" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M5.5 8l1.8 1.8L10.5 6" stroke="#C0BFBA" strokeWidth="1.3"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function SchoolsDistrictsPage() {
  const isMobile = useIsMobile();

  return (
    <div style={{ backgroundColor: BG, minHeight: "100vh", overflowX: "hidden", position: "relative" }}>

      {/* ── Decorative organic curves ── */}
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

      {/* ── Hero ── */}
      <section style={{ position: "relative", zIndex: 1, padding: isMobile ? "112px 0 60px" : "136px 0 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px" : "0 80px", boxSizing: "border-box" }}>
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? 48 : 60,
          }}>

            {/* Left content */}
            <div style={{ flex: isMobile ? "none" : "0 0 480px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

              <h1 style={{ ...T.h1(isMobile), margin: 0, marginBottom: 16, maxWidth: 640 }}>
                <span style={{ display: "block" }}>Special Ed Management</span>
                <span style={{ display: "block" }}>for Schools &amp; Districts</span>
              </h1>

              <p style={{ ...T.heroSub(), maxWidth: 460, margin: 0, marginBottom: 24 }}>
                Give your district full visibility, give providers back their time —
                all in one IDEA-compliant platform built for special education teams.
              </p>

              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "flex-start", gap: 12, marginBottom: 28, width: isMobile ? "100%" : "auto" }}>
                <Btn3D label="Get a Quote" variant="primary">Get a Quote</Btn3D>
                <Btn3D label="Schedule a Demo" variant="ghost">Schedule a Demo</Btn3D>
              </div>

              {/* Compliance badges */}
              <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: isMobile ? 16 : 32, marginBottom: 40 }}>
                {COMPLIANCE.map(({ label, sub, icon }) => (
                  <div key={label} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }}>
                    {icon}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ ...T.bodySm(), fontWeight: 600, color: "#A0A0A0" }}>{label}</span>
                      <span style={{ ...T.caption(), color: "#BBBBBB" }}>{sub}</span>
                    </div>
                  </div>
                ))}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }}>
                  <span style={{ background: "#FF492C", color: "#fff", fontFamily: SANS, fontWeight: 700, fontSize: 11, borderRadius: 3, padding: "2px 5px" }}>G2</span>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ ...T.caption(), fontWeight: 600, color: "#F5A623" }}>★★★★★</span>
                    <span style={{ ...T.caption(), color: "#BBBBBB" }}>5.0 Rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — feature graphic */}
            <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={featureGraphic} alt="AbleSpace feature graphic" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>

          </div>

          {/* Dashboard screenshot */}
          <div style={{ marginTop: 96, width: "100%", position: "relative" }}>
            <div style={{ width: "100%", borderRadius: "24px 24px 0 0", border: "1px solid rgba(0,0,0,0.07)", overflow: "hidden" }}>
              {/* Browser chrome */}
              <div style={{ height: 42, background: "#F0F0EE", borderBottom: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", position: "relative", flexShrink: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: 16 }}>
                  <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F57" }} />
                  <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#FEBC2E" }} />
                  <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28C840" }} />
                </div>
                <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", background: "rgba(0,0,0,0.07)", borderRadius: 9999, padding: "4px 16px", width: 200, textAlign: "center", fontFamily: SANS, fontSize: 13, color: MUTED, letterSpacing: "-0.1px" }}>
                  app.ablespace.io
                </div>
              </div>
              <div style={{ lineHeight: 0 }}>
                <img src={dashImg} alt="AbleSpace dashboard" style={{ width: "100%", display: "block", objectFit: "cover" }} />
              </div>
            </div>
            {/* Fade to BG */}
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "60%", background: "linear-gradient(to bottom, transparent 0%, rgba(248,248,245,0.7) 50%, #F8F8F5 75%)", pointerEvents: "none", zIndex: 2 }} />
          </div>
        </div>
      </section>

      <SocialProofStrip />
      <ProblemSolutionSection />
      <FeaturesSection />
      <AIFeaturesSection />
      <SchoolsDistrictsSection />
      <MobileAppSection />
      <SecuritySection />
      <TestimonialsSection />
      <FAQSection />
      <CTABannerSection />
      <FooterSection />

    </div>
  );
}
