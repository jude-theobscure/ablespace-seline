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
import { SchoolsDistrictsPage } from "./pages/schools-districts-page";
import { DataTypesPage } from "./pages/data-types-page";
import { IepAuditPage } from "./pages/iep-audit-page";
import { ServiceTimePage } from "./pages/service-time-page";
import { AccommodationsPage } from "./pages/accommodations-page";
import { RotatingSchedulePage } from "./pages/rotating-schedule-page";
import { MedicaidBillingPage } from "./pages/medicaid-billing-page";
import { ReportsPage } from "./pages/reports-page";
import { CollaborationPage } from "./pages/collaboration-page";
import { AbleSpaceAiPage } from "./pages/ablespace-ai-page";
import { PricingPage } from "./pages/pricing-page";
import { BlogPage } from "./pages/blog-page";
import { TutorialsPage } from "./pages/tutorials-page";
import { CoursesPage } from "./pages/courses-page";
import { FaqPage } from "./pages/faq-page";
import { ReviewsPage } from "./pages/reviews-page";
import { ContactPage } from "./pages/contact-page";

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
  type Page = "home" | "schools" | "datatypes" | "iep-audit" | "service-time" | "accommodations" | "rotating-schedule" | "medicaid-billing" | "reports" | "collaboration" | "ai" | "pricing" | "blog" | "tutorials" | "courses" | "faq" | "reviews" | "contact";
  const [page, setPage] = useState<Page>("home");

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(248,248,245,0.92)",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "1px solid transparent",
        transition: "border-color 0.25s",
      }}>
      <nav style={{
        height: 64,
        display: "flex", alignItems: "center",
        maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px" : "0 80px",
        boxSizing: "border-box", gap: 32,
      }}>

        {/* Logo icon only */}
        <a href="#" onClick={(e) => { e.preventDefault(); navigate("home"); }} style={{ display:"flex", alignItems:"center", textDecoration:"none", flexShrink:0 }}>
          <AbleSpaceLogo />
        </a>

        {/* Links — immediately after logo, hidden on mobile */}
        {!isMobile && (
          <div style={{ display:"flex", alignItems:"center", gap:24 }}>
            <ProductMenu navigate={navigate} />
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("schools"); }} style={{
              fontFamily: SANS, fontSize: 14,
              color: page === "schools" ? DARK : MUTED,
              fontWeight: page === "schools" ? 500 : 400,
              textDecoration: "none", whiteSpace: "nowrap",
            }}>Schools</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("ai"); }} style={{
              fontFamily: SANS, fontSize: 14,
              color: page === "ai" ? DARK : MUTED,
              fontWeight: page === "ai" ? 500 : 400,
              textDecoration: "none", whiteSpace: "nowrap",
            }}>AbleSpace AI</a>
            <ResourcesMenu navigate={navigate} />
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("pricing"); }} style={{
              fontFamily: SANS, fontSize: 14,
              color: page === "pricing" ? DARK : MUTED,
              fontWeight: page === "pricing" ? 500 : 400,
              textDecoration: "none", whiteSpace: "nowrap",
            }}>Pricing</a>
          </div>
        )}

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Right actions */}
        <div style={{ display:"flex", alignItems:"center", gap:8, flexShrink:0 }}>
          {!isMobile && (
            <>
              <a href="#" style={{ fontFamily:SANS, fontSize:14, color:MUTED, fontWeight:400, textDecoration:"none", padding:"0 6px" }}>
                Login
              </a>
              <a href="#" style={{
                ...BTN_BASE,
                height: 40, padding: "0 18px",
                color: DARK, background: "transparent",
                border: "1.5px solid rgba(0,0,0,0.18)",
              }}>Get a demo</a>
            </>
          )}
          <a href="#" style={{
            ...BTN_BASE,
            height: isMobile ? 36 : 40, padding: "0 18px",
            background: BLUE, color: "#fff", border: "none",
          }}>Start for free</a>
        </div>
      </nav>
      </div>

      {/* ════════════════════════════════════════════════════ */}
      {/*  PAGE CONTENT                                        */}
      {/* ════════════════════════════════════════════════════ */}
      {page === "schools" ? <SchoolsDistrictsPage /> :
       page === "datatypes" ? <DataTypesPage /> :
       page === "iep-audit" ? <IepAuditPage /> :
       page === "service-time" ? <ServiceTimePage /> :
       page === "accommodations" ? <AccommodationsPage /> :
       page === "rotating-schedule" ? <RotatingSchedulePage /> :
       page === "medicaid-billing" ? <MedicaidBillingPage /> :
       page === "reports" ? <ReportsPage /> :
       page === "collaboration" ? <CollaborationPage /> :
       page === "ai" ? <AbleSpaceAiPage /> :
       page === "pricing" ? <PricingPage /> :
       page === "blog" ? <BlogPage /> :
       page === "tutorials" ? <TutorialsPage /> :
       page === "courses" ? <CoursesPage /> :
       page === "faq" ? <FaqPage /> :
       page === "reviews" ? <ReviewsPage /> :
       page === "contact" ? <ContactPage /> :
       <>

      {/* ── HERO — single column, left-aligned ── */}
      <section style={{
        position: "relative", zIndex: 1,
        maxWidth: 1200, margin: "0 auto",
        padding: isMobile ? "112px 20px 0" : "136px 80px 0",
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
      </>}
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

const PRODUCT_ITEMS = [
  { label: "IEP Audit",          desc: "Track every IEP goal with precision and ease." },
  { label: "Data Types",         desc: "9+ collection types built for special ed teams." },
  { label: "Service Time",       desc: "Auto-track sessions and generate billing notes." },
  { label: "Accommodations",     desc: "One-tap tracking linked to each student's IEP." },
  { label: "Rotating Schedule",  desc: "Smart calendar sync for all session types." },
  { label: "Medicaid Billing",   desc: "Auto-generate compliant billing after every session." },
  { label: "Reports",            desc: "20+ auto-generated graphs ready for IEP meetings." },
  { label: "Collaboration",      desc: "Share progress across your entire special ed team." },
];

const FOR_LINKS = [
  {
    label: "Learn more",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="5.5" stroke="#6E6E73" strokeWidth="1.2"/>
        <path d="M7 6.5v3M7 4.5v.5" stroke="#6E6E73" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Get a Quote",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="2" y="2" width="10" height="10" rx="2" stroke="#6E6E73" strokeWidth="1.2"/>
        <path d="M4.5 5h5M4.5 7h3.5M4.5 9h4" stroke="#6E6E73" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Schedule a Demo",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="5.5" stroke="#6E6E73" strokeWidth="1.2"/>
        <path d="M7 4v3.5l2 1.5" stroke="#6E6E73" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

type NavPage = "home" | "schools" | "datatypes" | "iep-audit" | "service-time" | "accommodations" | "rotating-schedule" | "medicaid-billing" | "reports" | "collaboration" | "ai" | "pricing" | "blog" | "tutorials" | "courses" | "faq" | "reviews" | "contact";

const PRODUCT_NAV: Record<string, NavPage> = {
  "IEP Audit": "iep-audit",
  "Data Types": "datatypes",
  "Service Time": "service-time",
  "Accommodations": "accommodations",
  "Rotating Schedule": "rotating-schedule",
  "Medicaid Billing": "medicaid-billing",
  "Reports": "reports",
  "Collaboration": "collaboration",
};

const RESOURCES_NAV: Record<string, NavPage> = {
  "Blog": "blog",
  "Tutorials": "tutorials",
  "Courses": "courses",
  "FAQs": "faq",
  "Reviews": "reviews",
  "Contact Us": "contact",
};

function ProductMenu({ navigate }: { navigate: (p: NavPage) => void }) {
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <a href="#" style={{
        fontFamily: SANS, fontSize: 14, color: open ? DARK : MUTED,
        fontWeight: 400, textDecoration: "none",
        display: "inline-flex", alignItems: "center", gap: 3,
        whiteSpace: "nowrap", transition: "color 0.15s",
      }}>
        Product
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
          style={{ opacity: 0.45, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      {/* Dropdown panel — outer div bridges the gap so hover isn't lost */}
      {open && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: "-24px",
          paddingTop: 12,
          zIndex: 200,
          width: 780,
        }}>
        <div style={{
          background: "#FFFFFF",
          borderRadius: 16,
          boxShadow: "0 12px 48px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
          border: "1px solid rgba(0,0,0,0.07)",
          display: "flex",
          overflow: "hidden",
        }}>

          {/* Left — Product items */}
          <div style={{ flex: 1, padding: "24px 24px 24px 24px" }}>
            <p style={{
              fontFamily: SANS, fontWeight: 500, fontSize: 11,
              color: MUTED, letterSpacing: "1.5px", textTransform: "uppercase",
              margin: "0 0 14px",
            }}>Product</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px 12px" }}>
              {PRODUCT_ITEMS.map((item, i) => (
                <a
                  key={item.label}
                  href="#"
                  onClick={(e) => { e.preventDefault(); navigate(PRODUCT_NAV[item.label]); setOpen(false); }}
                  onMouseEnter={() => setHoveredItem(i)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    display: "block",
                    padding: "10px 12px",
                    borderRadius: 10,
                    textDecoration: "none",
                    background: hoveredItem === i ? "rgba(0,0,0,0.04)" : "transparent",
                    border: "1px solid",
                    borderColor: hoveredItem === i ? "rgba(0,0,0,0.07)" : "transparent",
                    transition: "background 0.15s, border-color 0.15s",
                  }}
                >
                  <div style={{
                    fontFamily: SANS, fontWeight: 600, fontSize: 13.5,
                    color: DARK, marginBottom: 2,
                  }}>{item.label}</div>
                  <div style={{
                    fontFamily: SANS, fontWeight: 400, fontSize: 12,
                    color: MUTED, lineHeight: 1.45,
                  }}>{item.desc}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: 1, background: "rgba(0,0,0,0.07)", flexShrink: 0 }} />

          {/* Right — Product For */}
          <div style={{ width: 290, padding: "24px 24px", flexShrink: 0 }}>
            <p style={{
              fontFamily: SANS, fontWeight: 500, fontSize: 11,
              color: MUTED, letterSpacing: "1.5px", textTransform: "uppercase",
              margin: "0 0 14px",
            }}>Product For</p>

            {/* Feature card */}
            <div style={{
              background: "#F8F8F5",
              borderRadius: 12,
              padding: "16px",
              marginBottom: 4,
            }}>
              <h3 style={{
                fontFamily: SANS, fontWeight: 700, fontSize: 20,
                color: DARK, margin: "0 0 8px", lineHeight: 1.2,
              }}>Schools/Districts</h3>
              <p style={{
                fontFamily: SANS, fontWeight: 400, fontSize: 12.5,
                color: MUTED, margin: 0, lineHeight: 1.55,
              }}>
                Ease the burden of paperwork on providers, and enhance compliance
                by leveraging the power of digital data
              </p>
            </div>

            {/* Links */}
            {FOR_LINKS.map((link, i) => (
              <a
                key={link.label}
                href="#"
                onMouseEnter={() => setHoveredLink(i)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "11px 0",
                  borderBottom: i < FOR_LINKS.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                  textDecoration: "none",
                  transition: "opacity 0.15s",
                  opacity: hoveredLink !== null && hoveredLink !== i ? 0.5 : 1,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {link.icon}
                  <span style={{
                    fontFamily: SANS, fontWeight: 400, fontSize: 13.5, color: DARK,
                  }}>{link.label}</span>
                </div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.35 }}>
                  <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke={DARK} strokeWidth="1.4"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>

        </div>
        </div>
      )}
    </div>
  );
}

const RESOURCES_ITEMS = [
  { label: "Blog",      desc: "Insights, tips, and best practices for special ed teams." },
  { label: "Tutorials", desc: "Step-by-step guides to get the most out of AbleSpace." },
  { label: "Courses",   desc: "Structured learning paths for educators and providers." },
];

const SUPPORT_LINKS = [
  {
    label: "FAQs",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="5.5" stroke="#6E6E73" strokeWidth="1.2"/>
        <path d="M5.5 5.5a1.5 1.5 0 0 1 3 .5c0 1-1.5 1.5-1.5 2.5" stroke="#6E6E73" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="7" cy="10" r="0.6" fill="#6E6E73"/>
      </svg>
    ),
  },
  {
    label: "Reviews",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 2l1.3 2.6 2.9.4-2.1 2 .5 2.9L7 8.5l-2.6 1.4.5-2.9-2.1-2 2.9-.4L7 2z"
          stroke="#6E6E73" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Contact Us",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 3.5h10a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4l-3 1.5V4.5a1 1 0 0 1 1-1z"
          stroke="#6E6E73" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function ResourcesMenu({ navigate }: { navigate: (p: NavPage) => void }) {
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <a href="#" style={{
        fontFamily: SANS, fontSize: 14, color: open ? DARK : MUTED,
        fontWeight: 400, textDecoration: "none",
        display: "inline-flex", alignItems: "center", gap: 3,
        whiteSpace: "nowrap", transition: "color 0.15s",
      }}>
        Resources
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
          style={{ opacity: 0.45, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      {/* Dropdown panel */}
      {open && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: "-24px",
          paddingTop: 12,
          zIndex: 200,
          width: 620,
        }}>
        <div style={{
          background: "#FFFFFF",
          borderRadius: 16,
          boxShadow: "0 12px 48px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
          border: "1px solid rgba(0,0,0,0.07)",
          display: "flex",
          overflow: "hidden",
        }}>

          {/* Left — Resources items */}
          <div style={{ flex: 1, padding: "24px" }}>
            <p style={{
              fontFamily: SANS, fontWeight: 500, fontSize: 11,
              color: MUTED, letterSpacing: "1.5px", textTransform: "uppercase",
              margin: "0 0 14px",
            }}>Resources</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {RESOURCES_ITEMS.map((item, i) => (
                <a
                  key={item.label}
                  href="#"
                  onClick={(e) => { e.preventDefault(); navigate(RESOURCES_NAV[item.label]); setOpen(false); }}
                  onMouseEnter={() => setHoveredItem(i)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    display: "block",
                    padding: "14px 16px",
                    borderRadius: 10,
                    textDecoration: "none",
                    border: "1px solid",
                    borderColor: hoveredItem === i ? "rgba(0,0,0,0.10)" : "rgba(0,0,0,0.07)",
                    background: hoveredItem === i ? "rgba(0,0,0,0.02)" : "transparent",
                    transition: "background 0.15s, border-color 0.15s",
                  }}
                >
                  <div style={{
                    fontFamily: SANS, fontWeight: 600, fontSize: 14,
                    color: DARK, marginBottom: 3,
                  }}>{item.label}</div>
                  <div style={{
                    fontFamily: SANS, fontWeight: 400, fontSize: 12.5,
                    color: MUTED, lineHeight: 1.45,
                  }}>{item.desc}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: 1, background: "rgba(0,0,0,0.07)", flexShrink: 0 }} />

          {/* Right — Support */}
          <div style={{ width: 270, padding: "24px", flexShrink: 0 }}>
            <p style={{
              fontFamily: SANS, fontWeight: 500, fontSize: 11,
              color: MUTED, letterSpacing: "1.5px", textTransform: "uppercase",
              margin: "0 0 14px",
            }}>Support</p>

            {/* Feature card */}
            <div style={{
              background: "#F8F8F5",
              borderRadius: 12,
              padding: "16px",
              marginBottom: 4,
            }}>
              <h3 style={{
                fontFamily: SANS, fontWeight: 700, fontSize: 20,
                color: DARK, margin: "0 0 8px", lineHeight: 1.2,
              }}>Need help?</h3>
              <p style={{
                fontFamily: SANS, fontWeight: 400, fontSize: 12.5,
                color: MUTED, margin: 0, lineHeight: 1.55,
              }}>
                Everything you need to resolve questions, understand features,
                and move forward with confidence.
              </p>
            </div>

            {/* Links */}
            {SUPPORT_LINKS.map((link, i) => (
              <a
                key={link.label}
                href="#"
                onClick={(e) => { e.preventDefault(); navigate(RESOURCES_NAV[link.label]); setOpen(false); }}
                onMouseEnter={() => setHoveredLink(i)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "11px 0",
                  borderBottom: i < SUPPORT_LINKS.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                  textDecoration: "none",
                  transition: "opacity 0.15s",
                  opacity: hoveredLink !== null && hoveredLink !== i ? 0.5 : 1,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {link.icon}
                  <span style={{
                    fontFamily: SANS, fontWeight: 400, fontSize: 13.5, color: DARK,
                  }}>{link.label}</span>
                </div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.35 }}>
                  <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke={DARK} strokeWidth="1.4"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>

        </div>
        </div>
      )}
    </div>
  );
}