import { useState } from "react";
import { useIsMobile } from "./shared";

const SANS = "'DM Sans', system-ui, sans-serif";

const NAV_COLS = [
  {
    heading: "Product",
    links: ["Features", "AbleSpace AI", "Pricing", "Changelog", "Roadmap"],
  },
  {
    heading: "For Schools",
    links: [
      "Schools & Districts",
      "Special Ed Teams",
      "Therapists & Providers",
      "Administrators",
      "Case Studies",
    ],
  },
  {
    heading: "Resources",
    links: [
      "Documentation",
      "Tutorials",
      "Blog",
      "IDEA Compliance Guide",
      "Contact Support",
    ],
  },
  {
    heading: "Legal",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "FERPA Compliance",
      "HIPAA Compliance",
      "Security",
    ],
  },
];

function SocialIcon({ children }: { children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: hov ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(255,255,255,0.50)",
        fontSize: 14,
        cursor: "pointer",
        transition: "background 0.18s",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

function FooterLink({ children }: { children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "block",
        fontFamily: SANS,
        fontWeight: 400,
        fontSize: 14,
        color: hov ? "rgba(255,255,255,0.90)" : "rgba(255,255,255,0.55)",
        textDecoration: "none",
        padding: "4px 0",
        transition: "color 0.15s",
      }}
    >
      {children}
    </a>
  );
}

export function FooterSection() {
  const isMobile = useIsMobile();
  return (
    <footer
      style={{
        background: "#1A1A1E",
        padding: isMobile ? "48px 20px 24px" : "64px 80px 32px",
        fontFamily: SANS,
      }}
    >
      {/* ── Top grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "2fr 1fr 1fr 1fr 1fr",
          gap: isMobile ? "32px 24px" : 48,
          paddingBottom: 48,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Column 1 — Brand */}
        <div style={{ gridColumn: isMobile ? "1 / -1" : undefined }}>
          {/* Logo row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: "#53AEF3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                <path
                  d="M9 24L16 8L23 24"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.5 19.5h9"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span
              style={{
                fontFamily: SANS,
                fontWeight: 600,
                fontSize: 16,
                color: "white",
              }}
            >
              AbleSpace
            </span>
          </div>

          {/* Tagline */}
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 300,
              fontSize: 14,
              color: "rgba(255,255,255,0.50)",
              maxWidth: 220,
              lineHeight: 1.6,
              margin: "0 0 20px",
            }}
          >
            Where Every IEP Gets the Attention It Deserves.
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 8 }}>
            {/* Twitter/X */}
            <SocialIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialIcon>
            {/* LinkedIn */}
            <SocialIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </SocialIcon>
            {/* Instagram */}
            <SocialIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* Columns 2–5 — Nav links */}
        {NAV_COLS.map((col) => (
          <div key={col.heading}>
            <div
              style={{
                fontFamily: SANS,
                fontWeight: 600,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: 1.5,
                color: "rgba(255,255,255,0.30)",
                marginBottom: 16,
              }}
            >
              {col.heading}
            </div>
            {col.links.map((link) => (
              <FooterLink key={link}>{link}</FooterLink>
            ))}
          </div>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: SANS,
            fontWeight: 400,
            fontSize: 13,
            color: "rgba(255,255,255,0.35)",
          }}
        >
          © 2026 AbleSpace Inc. All rights reserved.
        </span>

        <span
          style={{
            fontFamily: SANS,
            fontWeight: 400,
            fontSize: 12,
            color: "rgba(255,255,255,0.25)",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          🇺🇸 Data hosted securely in the United States
        </span>

        <span
          style={{
            fontFamily: SANS,
            fontWeight: 500,
            fontSize: 12,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: 0.5,
          }}
        >
          HIPAA · FERPA · ISO 27001
        </span>
      </div>
    </footer>
  );
}
