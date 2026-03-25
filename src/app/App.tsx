import React, { useEffect, useState } from "react";
import { useIsMobile } from "./components/shared";
import dashImg from "../assets/c588e3d6fd588f8e1f139a98e572e19e10a451dd.png";
import { FeaturesSection } from "./components/features-section";
import { SocialProofStrip } from "./components/social-proof-strip";
import { ProblemSolutionSection } from "./components/problem-solution-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { CTABannerSection } from "./components/cta-banner-section";
import { FooterSection } from "./components/footer-section";
import { MobileAppSection } from "./components/mobile-app-section";
import { SecuritySection } from "./components/security-section";
import { AIFeaturesSection } from "./components/ai-features-section";
import { SchoolsDistrictsSection } from "./components/schools-districts-section";
import { FAQSection } from "./components/faq-section";

/* ── Design tokens ──────────────────────────────────────────── */
const BG    = "#F8F8F5";
const BLUE  = "#53AEF3";
const DARK  = "#1A1A1E";
const MUTED = "#6E6E73";

const SERIF = "'Instrument Serif', serif";
const SANS  = "'DM Sans', system-ui, sans-serif";

const BTN_BASE: React.CSSProperties = {
  height: 40,
  padding: "0 20px",
  borderRadius: 12,
  fontFamily: "'DM Sans', system-ui, sans-serif",
  fontWeight: 500,
  fontSize: 14,
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  textDecoration: "none",
  boxSizing: "border-box",
  transition: "background 0.18s, border-color 0.18s, transform 0.15s",
  whiteSpace: "nowrap",
  cursor: "pointer",
};

/* ── Avatars (navbar AI row) ────────────────────────────────── */
const AVATARS = [
  "https://images.unsplash.com/photo-1589220286904-3dcef62c68ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1762753674498-73ec49feafc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  "https://images.unsplash.com/photo-1696718569329-bb9b81c05c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
];

const LOGO_PILLS = [
  "Austin ISD", "Riverside USD", "Bright Futures",
  "Pathway Schools", "Horizon Academy", "Sunrise Learning",
];

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
        <rect x="2" y="3" width="12" height="10" rx="1.5"
          stroke="#C0BFBA" strokeWidth="1.3"/>
        <path d="M5 7h6M5 9.5h4" stroke="#C0BFBA" strokeWidth="1.3"
          strokeLinecap="round"/>
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

/* ═══════════════════════════════════════════════════════════ */
export default function App() {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [hoverGhost,   setHoverGhost]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: BG,
      fontFamily: SANS,
      overflowX: "hidden",
      position: "relative",
    }}>

      {/* ════════════════════════════════════════════════════ */}
      {/*  DECORATIVE ORGANIC CURVES                          */}
      {/* ═══════════════════════════════════════════════════ */}
      <svg
        aria-hidden
        style={{
          position: "absolute", top: 0, left: 0,
          width: "100%", height: 560,
          pointerEvents: "none", zIndex: 0, overflow: "visible",
        }}
        viewBox="0 0 1440 560"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M -60 420 C 80 340 160 230 240 150 C 320 70 440 10 600 -20"
          stroke="rgba(0,0,0,0.08)" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M -40 500 C 100 410 190 295 275 205 C 360 118 475 52 635 20"
          stroke="rgba(0,0,0,0.05)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M 1500 420 C 1360 340 1280 230 1200 150 C 1120 70 1000 10 840 -20"
          stroke="rgba(0,0,0,0.08)" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M 1480 500 C 1340 410 1250 295 1165 205 C 1080 118 965 52 805 20"
          stroke="rgba(0,0,0,0.05)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      </svg>

      {/* ════════════════════════════════════════════════════ */}
      {/*  NAVBAR                                              */}
      {/* ════════════════════════════════════════════════════ */}
      <div style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(248,248,245,0.92)",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "1px solid transparent",
        transition: "border-color 0.25s",
      }}>
      <nav style={{
        height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px" : "0 80px",
        boxSizing: "border-box",
      }}>

        {/* Logo */}
        <a href="#" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none", flexShrink:0 }}>
          <AbleSpaceLogo />
          <span style={{ fontFamily:SANS, fontWeight:700, fontSize:15.5, color:DARK, letterSpacing:"-0.4px" }}>
            AbleSpace
          </span>
        </a>

        {/* Centre links — hidden on mobile */}
        {!isMobile && (
          <div style={{ display:"flex", alignItems:"center", gap:26 }}>
            <NavLink href="#" dropdown>Product</NavLink>
            <NavLink href="#">Schools/Districts</NavLink>
            <a href="#" style={{
              fontFamily:SANS, fontSize:14, color:MUTED, fontWeight:400,
              textDecoration:"none", display:"inline-flex", alignItems:"center", gap:7,
            }}>
              AbleSpace AI
              <div style={{ display:"flex" }}>
                {AVATARS.map((src, i) => (
                  <img key={i} src={src} alt="" style={{
                    width:18, height:18, borderRadius:"50%", objectFit:"cover",
                    border:`1.5px solid ${BG}`, marginLeft: i === 0 ? 0 : -6,
                  }} />
                ))}
              </div>
            </a>
            <NavLink href="#">Tutorials</NavLink>
            <NavLink href="#" dropdown>Resources</NavLink>
            <NavLink href="#">Pricing</NavLink>
          </div>
        )}

        {/* Right actions */}
        <div style={{ display:"flex", alignItems:"center", gap:isMobile ? 8 : 12, flexShrink:0 }}>
          {!isMobile && (
            <>
              <a href="#" style={{
                display: "inline-flex", alignItems: "center",
                height: 40, padding: "0 20px",
                borderRadius: 12,
                fontFamily: SANS, fontWeight: 500, fontSize: 14,
                textDecoration: "none", boxSizing: "border-box",
                whiteSpace: "nowrap", cursor: "pointer",
                color: DARK, background: "transparent",
                border: "1.5px solid rgba(0,0,0,0.18)",
                lineHeight: 1,
              }}>Get a Quote</a>
              <div style={{ width:1, height:18, background:"rgba(0,0,0,0.12)", flexShrink:0 }} />
              <a href="#" style={{ fontFamily:SANS, fontSize:14, color:MUTED, fontWeight:400, textDecoration:"none" }}>
                Login
              </a>
            </>
          )}
          <a href="#" style={{
            display: "inline-flex", alignItems: "center",
            height: isMobile ? 36 : 40, padding: "0 16px",
            borderRadius: 12,
            fontFamily: SANS, fontWeight: 500, fontSize: 14,
            textDecoration: "none", boxSizing: "border-box",
            whiteSpace: "nowrap", cursor: "pointer",
            background: BLUE, color: "#fff", border: "none",
            lineHeight: 1,
          }}>Sign up for free</a>
        </div>
      </nav>
      </div>

      {/* ════════════════════════════════════════════════════ */}
      {/*  HERO — single column, left-aligned                 */}
      {/* ════════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", zIndex: 1,
        maxWidth: 1200, margin: "0 auto",
        padding: isMobile ? "48px 20px 0" : "72px 80px 0",
        boxSizing: "border-box",
      }}>

        {/* Left content column — 640px max */}
        <div style={{
          maxWidth: 640,
          display: "flex", flexDirection: "column", alignItems: "flex-start",
          paddingBottom: 0,
        }}>

          {/* ① HEADLINE */}
          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
            fontSize: isMobile ? 38 : 64,
            lineHeight: 1.08,
            letterSpacing: "-0.5px",
            color: DARK,
            margin: 0,
            marginBottom: 16,
            maxWidth: 640,
          }}>
            <span style={{ display: "block" }}>
              <mark style={{
                background: "rgba(83,174,243,0.18)",
                borderRadius: 8,
                padding: "0 6px",
                color: "inherit",
              }}>
                AI-Powered
              </mark>
              {" "}IEP Tracking
            </span>
            <span style={{ display: "block" }}>for Sped-Ed Professionals</span>
          </h1>

          {/* ② SUBHEADLINE */}
          <p style={{
            fontFamily: SANS, fontWeight: 300,
            fontSize: 17, lineHeight: 1.5,
            color: MUTED, maxWidth: 460,
            margin: 0, marginBottom: 24,
          }}>
            Track IEP goals, services, and accommodations in one place —
            with AI-powered speed and accuracy.
          </p>

          {/* ③ CTA BUTTONS */}
          <div style={{ display:"flex", flexDirection: isMobile ? "column" : "row", alignItems:"flex-start", gap:12, marginBottom:28, width: isMobile ? "100%" : "auto" }}>

            {/* Primary */}
            <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
              <a
                href="#"
                onMouseEnter={() => setHoverPrimary(true)}
                onMouseLeave={() => setHoverPrimary(false)}
                style={{
                  ...BTN_BASE,
                  background: hoverPrimary ? "#3D9FE8" : BLUE,
                  color: "#fff",
                  border: "none",
                  transform: hoverPrimary ? "translateY(-1px)" : "none",
                }}
              >
                Sign Up for Free
                <span style={{ opacity: 0.75 }}>→</span>
              </a>
              <span style={{
                fontFamily: SANS, fontWeight: 400, fontSize: 11,
                color: "#AEAEB2", marginTop: 6,
              }}>For educators &amp; providers</span>
            </div>

            {/* Ghost */}
            <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
              <a
                href="#"
                onMouseEnter={() => setHoverGhost(true)}
                onMouseLeave={() => setHoverGhost(false)}
                style={{
                  ...BTN_BASE,
                  color: DARK,
                  background: hoverGhost ? "rgba(0,0,0,0.04)" : "transparent",
                  border: `1.5px solid ${hoverGhost ? DARK : "rgba(0,0,0,0.18)"}`,
                }}
              >
                Learn More
                <span style={{ opacity: 0.65 }}>→</span>
              </a>
              <span style={{
                fontFamily: SANS, fontWeight: 400, fontSize: 11,
                color: "#AEAEB2", marginTop: 6,
              }}>For school administrators</span>
            </div>
          </div>

          {/* ④ COMPLIANCE BADGES + G2 */}
          <div style={{ display:"flex", alignItems:"center", flexWrap:"wrap", gap: isMobile ? 16 : 32, marginBottom: 40 }}>
            {COMPLIANCE.map(({ label, sub, icon }) => (
              <div key={label} style={{ display:"flex", flexDirection:"row", alignItems:"center", gap:8 }}>
                {icon}
                <div style={{ display:"flex", flexDirection:"column" }}>
                  <span style={{ fontFamily:SANS, fontWeight:600, fontSize:13, color:"#A0A0A0", lineHeight:1.2 }}>{label}</span>
                  <span style={{ fontFamily:SANS, fontWeight:400, fontSize:12, color:"#BBBBBB", lineHeight:1.2 }}>{sub}</span>
                </div>
              </div>
            ))}
            {/* G2 as 4th item */}
            <div style={{ display:"flex", flexDirection:"row", alignItems:"center", gap:8 }}>
              <span style={{
                background: "#FF492C", color: "#fff",
                fontFamily: SANS, fontWeight: 700, fontSize: 11,
                borderRadius: 3, padding: "2px 5px",
              }}>G2</span>
              <div style={{ display:"flex", flexDirection:"column" }}>
                <span style={{ color:"#F5A623", fontSize:12, fontWeight:600, lineHeight:1.2 }}>★★★★★</span>
                <span style={{ fontFamily:SANS, fontWeight:400, fontSize:12, color:"#BBBBBB", lineHeight:1.2 }}>5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/*  DASHBOARD SCREENSHOT in browser chrome frame   */}
        {/* ════════════════════════════════════════════════ */}
        <div style={{
          marginTop: 0,
          width: "100%",
          position: "relative",
        }}>
          {/* Browser window wrapper */}
          <div style={{
            width: "100%",
            borderRadius: "24px 24px 0 0",
            border: "1px solid rgba(0,0,0,0.07)",
            boxShadow: "0 -12px 64px rgba(0,0,0,0.10), 0 -4px 20px rgba(0,0,0,0.05)",
            overflow: "hidden",
          }}>

            {/* ── Top bar: traffic lights + URL pill ── */}
            <div style={{
              height: 42,
              background: "#F0F0EE",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              display: "flex",
              alignItems: "center",
              position: "relative",
              flexShrink: 0,
            }}>
              {/* Traffic lights */}
              <div style={{ display:"flex", alignItems:"center", gap:6, marginLeft:16 }}>
                <div style={{ width:11, height:11, borderRadius:"50%", background:"#FF5F57" }} />
                <div style={{ width:11, height:11, borderRadius:"50%", background:"#FEBC2E" }} />
                <div style={{ width:11, height:11, borderRadius:"50%", background:"#28C840" }} />
              </div>
              {/* URL bar — centered */}
              <div style={{
                position: "absolute", left:"50%", transform:"translateX(-50%)",
                background: "rgba(0,0,0,0.07)",
                borderRadius: 9999, padding: "4px 16px", width: 200,
                textAlign: "center",
                fontFamily: SANS, fontSize: 13, color: MUTED,
                letterSpacing: "-0.1px",
              }}>
                app.ablespace.io
              </div>
            </div>

            {/* ── Dashboard screenshot ── */}
            <div style={{ position: "relative", display: "block", lineHeight: 0, overflow: "hidden" }}>
              <img
                src={dashImg}
                alt="AbleSpace dashboard — IEP goal tracking interface"
                style={{ width: "100%", display: "block", objectFit: "cover" }}
              />
              {/* Fade overlay — bottom 60% fades to BG */}
              <div style={{
                position: "absolute",
                bottom: 0, left: 0,
                width: "100%", height: "60%",
                background: "linear-gradient(to bottom, rgba(248,248,245,0) 0%, rgba(248,248,245,0.5) 40%, rgba(248,248,245,0.9) 70%, #F8F8F5 100%)",
                pointerEvents: "none",
                zIndex: 2,
              }} />
            </div>
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

/* ─── Sub-components ──────────────────────────────────────── */

function AbleSpaceLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="10" fill="#53AEF3" />
      <path d="M9 24L16 8L23 24" stroke="white" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 19.5h9" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24.5" cy="8.5" r="2.5" fill="white" opacity="0.85" />
    </svg>
  );
}

function NavLink({
  href, children, dropdown,
}: { href: string; children: React.ReactNode; dropdown?: boolean }) {
  return (
    <a href={href} style={{
      fontFamily: "'DM Sans', system-ui, sans-serif",
      fontSize: 14, color: "#6E6E73", fontWeight: 400,
      textDecoration: "none",
      display: "inline-flex", alignItems: "center", gap: 3,
      whiteSpace: "nowrap",
    }}>
      {children}
      {dropdown && (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity:0.45 }}>
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </a>
  );
}