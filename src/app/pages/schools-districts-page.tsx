import React from "react";
import { useIsMobile } from "../components/shared";
import { Btn3D } from "../components/btn-3d";
import { SocialProofStrip } from "../components/social-proof-strip";
import { TestimonialsSection } from "../components/testimonials-section";
import { FAQSection } from "../components/faq-section";
import { CTABannerSection } from "../components/cta-banner-section";
import { FooterSection } from "../components/footer-section";
import { FeatureRow } from "../components/feature-row";
import { FeatureCardsGrid } from "../components/feature-cards-grid";
import { FeatureSplitCard } from "../components/feature-split-card";
import { T } from "../styles/typography";
import { MAX_W, PAD_X, PAD_X_MOB, SECT_PY, SECT_PY_MOB, BG, MUTED } from "../pages/page-layout";
import featureGraphic from "../../assets/Feature Graphics.png";
import dashImg from "../../assets/c588e3d6fd588f8e1f139a98e572e19e10a451dd.png";
import feat1 from "../../assets/schools-districts/feature-1.png";
import feat2 from "../../assets/schools-districts/feature-2.png";
import feat3 from "../../assets/schools-districts/feature-3.png";
import feat4 from "../../assets/schools-districts/feature-4.png";
import feat5 from "../../assets/schools-districts/feature-5.png";
import dataPrivacyImg from "../../assets/schools-districts/data-privacy.png";

const SANS  = "'DM Sans', system-ui, sans-serif";
const BLUE  = "#53AEF3";
const DARK  = "#1A1A1E";

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

const GRID_CARDS = [
  {
    img: feat3,
    label: "IEP MANAGEMENT",
    title: "District-wide IEP oversight in one place",
    desc: "Monitor every student's IEP progress across all schools. Admins get real-time compliance status without chasing down paperwork.",
    cta: "Explore IEP tools",
  },
  {
    img: feat4,
    label: "REPORTING & ANALYTICS",
    title: "Data-driven decisions for every principal",
    desc: "Generate district-wide reports on service minutes, goal mastery, and caseload distribution — exportable in one click.",
    cta: "See reporting",
  },
];

export function SchoolsDistrictsPage() {
  const isMobile = useIsMobile();
  const padX = isMobile ? PAD_X_MOB : PAD_X;
  const sectPy = isMobile ? SECT_PY_MOB : SECT_PY;

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

      {/* ── 1. Hero ── */}
      <section style={{ position: "relative", zIndex: 1, padding: isMobile ? "112px 0 60px" : "136px 0 80px" }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? "0 20px" : "0 80px", boxSizing: "border-box" }}>
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

          {/* 2. Dashboard screenshot */}
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

      {/* 3. Social proof */}
      <SocialProofStrip />

      {/* 4. Feature row — image right, content left */}
      <section style={{ padding: `${sectPy}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: `0 ${padX}px`, boxSizing: "border-box" }}>
          <FeatureRow
            img={feat1}
            title="Full district visibility without the admin burden"
            desc="Principals and admins see live caseloads, compliance status, and service delivery across every school — without waiting on weekly reports."
            bullets={[
              "Real-time caseload dashboards per school",
              "Compliance alerts before deadlines hit",
              "One login for district-wide oversight",
            ]}
            flip={true}
          />
        </div>
      </section>

      {/* 5. Feature row — content right, image left */}
      <section style={{ padding: `${sectPy}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: `0 ${padX}px`, boxSizing: "border-box" }}>
          <FeatureRow
            img={feat2}
            title="Give providers back hours every week"
            desc="Paperwork that used to take Friday afternoons now happens automatically. Providers spend more time with students, less time documenting."
            bullets={[
              "Auto-generated session notes from data",
              "One-tap service time logging",
              "Progress reports ready in seconds",
            ]}
            flip={false}
          />
        </div>
      </section>

      {/* 6. Feature cards grid */}
      <section style={{ padding: `${sectPy}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: `0 ${padX}px`, boxSizing: "border-box" }}>
          <div style={{ marginBottom: 40 }}>
            <span style={{ ...T.label(), display: "block", marginBottom: 12 }}>BUILT FOR DISTRICTS</span>
            <h2 style={{ ...T.h2(isMobile), margin: 0, maxWidth: 520 }}>Everything your admin team needs</h2>
          </div>
          <FeatureCardsGrid cards={GRID_CARDS} />
        </div>
      </section>

      {/* 7. Feature row — content right, image left */}
      <section style={{ padding: `${sectPy}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: `0 ${padX}px`, boxSizing: "border-box" }}>
          <FeatureRow
            img={feat5}
            title="IDEA compliance built in, not bolted on"
            desc="Every session, note, and goal is automatically tied to IDEA requirements. Audits that used to take weeks now take minutes."
            bullets={[
              "Automatic IDEA compliance checks",
              "Audit-ready documentation instantly",
              "Built-in FERPA and HIPAA controls",
            ]}
            flip={false}
          />
        </div>
      </section>

      {/* 8. Data Privacy */}
      <section style={{ padding: `${sectPy}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: `0 ${padX}px`, boxSizing: "border-box" }}>
          <FeatureSplitCard
            img={dataPrivacyImg}
            title="Data Privacy You Can Count On"
            desc="AbleSpace complies with HIPAA, FERPA, and NYS Ed Law 2-D. Built with state-of-the-art encryption, strict access controls, and regular audits."
            bullets={[
              "HIPAA & FERPA compliant",
              "ISO 27001 certified",
              "Encrypted data at rest and in transit",
              "Two-factor authentication & device management",
            ]}
            imagePosition="right"
          />
        </div>
      </section>

      {/* 9. Frequently Used Documents */}
      <section style={{ padding: `${sectPy}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: `0 ${padX}px`, boxSizing: "border-box" }}>
          <span style={{ ...T.label(), display: "block", marginBottom: 12 }}>RESOURCES</span>
          <h2 style={{ ...T.h2(isMobile), margin: "0 0 8px" }}>Frequently Used Documents</h2>
          <p style={{ ...T.heroSub(), margin: "0 0 40px" }}>For purchase orders in schools and districts.</p>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: 20,
          }}>
            {[
              { title: "W9 Form", desc: "Required by districts to set up as a vendor" },
              { title: "Sole Source Letter", desc: "Required by districts to set up as a vendor" },
            ].map(({ title, desc }) => (
              <div key={title} style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: 16,
                padding: "28px 28px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Folded corner */}
                <div style={{
                  position: "absolute", top: 0, right: 0,
                  width: 0, height: 0,
                  borderStyle: "solid",
                  borderWidth: "0 40px 40px 0",
                  borderColor: `transparent rgba(0,0,0,0.06) transparent transparent`,
                }} />
                <div style={{
                  position: "absolute", top: 0, right: 0,
                  width: 38, height: 38,
                  background: BG,
                  borderBottomLeftRadius: 10,
                }} />

                {/* Doc icon */}
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: BG,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M7 4C7 2.9 7.9 2 9 2h10l6 6v16c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2V4z" fill="#B0BAC5"/>
                    <path d="M19 2l6 6h-4c-1.1 0-2-.9-2-2V2z" fill="#8A96A3"/>
                    <path d="M10 13h8M10 17h6M10 21h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>

                <div>
                  <h3 style={{ ...T.h3(isMobile), margin: "0 0 6px", fontSize: 18 }}>{title}</h3>
                  <p style={{ ...T.body(), margin: 0 }}>{desc}</p>
                </div>

                <a href="#" style={{
                  alignSelf: "flex-start",
                  display: "inline-flex", alignItems: "center", gap: 8,
                  fontFamily: SANS, fontWeight: 600, fontSize: 13,
                  color: "#fff",
                  background: BLUE,
                  borderRadius: 9999,
                  padding: "9px 20px",
                  textDecoration: "none", cursor: "pointer",
                  border: "none",
                }}>
                  Download
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M6.5 2v7M3 7l3.5 3.5L10 7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. How is it different */}
      <section style={{ padding: `${sectPy}px 0`, background: "#fff" }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: `0 ${padX}px`, boxSizing: "border-box" }}>
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? 40 : 80,
          }}>
            <div style={{ flex: 1 }}>
              <span style={{ ...T.label(), display: "block", marginBottom: 16 }}>THE DIFFERENCE</span>
              <h2 style={{ ...T.h2(isMobile), margin: "0 0 20px" }}>
                How is it different from other IEP systems I already have?
              </h2>
              <p style={{ ...T.bodyLg(), margin: "0 0 32px" }}>
                Other IEP systems help you author IEPs and generate compliance reports. But the day-to-day
                data collection is still done on pen and paper. This is where AbleSpace comes in — you enter
                data with a click, and AbleSpace takes care of the rest.
              </p>
              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 12 }}>
                <Btn3D label="Get a Quote" variant="primary">Get a Quote</Btn3D>
                <Btn3D label="Schedule a demo" variant="ghost">Schedule a Demo</Btn3D>
              </div>
              <p style={{ ...T.bodySm(), margin: "16px 0 0", color: "#BBBBBB" }}>
                or <a href="#" style={{ color: BLUE, textDecoration: "none" }}>Contact us</a> for more information.
              </p>
            </div>
            {/* Right — visual callout */}
            <div style={{
              flex: "0 0 340px",
              background: BG,
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 20,
              padding: "32px 28px",
              display: "flex", flexDirection: "column", gap: 20,
            }}>
              {[
                { label: "Other IEP Systems", items: ["Author IEPs", "Compliance reports"], muted: true },
                { label: "AbleSpace", items: ["One-click data collection", "Auto-generated notes", "Real-time progress tracking"], muted: false },
              ].map(({ label, items, muted }) => (
                <div key={label}>
                  <p style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: muted ? "#BBBBBB" : BLUE, margin: "0 0 10px", textTransform: "uppercase" }}>{label}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {items.map(item => (
                      <div key={item} style={{
                        display: "flex", alignItems: "center", gap: 10,
                        background: "#fff",
                        border: `1px solid ${muted ? "rgba(0,0,0,0.05)" : "rgba(83,174,243,0.18)"}`,
                        borderRadius: 10,
                        padding: "10px 14px",
                      }}>
                        <span style={{ color: muted ? "#CCCCCC" : BLUE, fontWeight: 600, fontSize: 14 }}>{muted ? "–" : "✓"}</span>
                        <span style={{ fontFamily: SANS, fontSize: 13, color: muted ? "#BBBBBB" : DARK, fontWeight: muted ? 400 : 500 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Funding Sources */}
      <section style={{ padding: `${sectPy}px 0` }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: `0 ${padX}px`, boxSizing: "border-box" }}>
          <div style={{
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: 20,
            padding: isMobile ? "36px 24px" : "52px 64px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? 32 : 60,
          }}>
            {/* Icon */}
            <div style={{
              width: 72, height: 72, borderRadius: 18, flexShrink: 0,
              background: "rgba(83,174,243,0.08)",
              border: "1px solid rgba(83,174,243,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="12" stroke={BLUE} strokeWidth="1.5"/>
                <path d="M16 10v12M11 14h10M11 18h10" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <span style={{ ...T.label(), display: "block", marginBottom: 10 }}>FUNDING</span>
              <h2 style={{ ...T.h2(isMobile), margin: "0 0 12px", fontSize: isMobile ? 28 : 38 }}>Funding Sources</h2>
              <p style={{ ...T.bodyLg(), margin: "0 0 28px", maxWidth: 560 }}>
                K-12 educational institutions — both at the school and district levels — have access to a range
                of federal and statewide opportunities to fund AbleSpace purchases.
              </p>
              <a href="#" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: SANS, fontWeight: 600, fontSize: 14,
                color: BLUE,
                background: "rgba(83,174,243,0.07)",
                border: "1px solid rgba(83,174,243,0.18)",
                borderRadius: 9999,
                padding: "10px 22px",
                textDecoration: "none", cursor: "pointer",
              }}>
                Learn more
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 12–15. Testimonials, FAQ, CTA, Footer */}
      <TestimonialsSection />
      <FAQSection />
      <CTABannerSection />
      <FooterSection />

    </div>
  );
}
