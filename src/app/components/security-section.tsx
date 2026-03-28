import React from "react";
import { useIsMobile } from "./shared";

/* ── Design tokens ────────────────────────────────────────── */
const SERIF = "'Source Sans 3', sans-serif";
const SANS  = "'DM Sans', system-ui, sans-serif";
const DARK  = "#1A1A1E";
const BLUE  = "#53AEF3";

/* ── Trust items ──────────────────────────────────────────── */
const ITEMS = [
  { label: "HIPAA Compliant",            icon: <HipaaIcon />    },
  { label: "FERPA Compliant",            icon: <FerpaIcon />    },
  { label: "ISO 27001 Certified",        icon: <IsoIcon />      },
  { label: "1EdTech Certified",          icon: <EdTechIcon />   },
  { label: "Encrypted Data",             icon: <EncryptIcon />  },
  { label: "Secure Collaboration",       icon: <CollabIcon />   },
  { label: "Manage Devices",             icon: <DevicesIcon />  },
  { label: "Two-Factor Authentication",  icon: <TwoFAIcon />    },
];

/* ═══════════════════════════════════════════════════════════ */
export function SecuritySection() {
  const isMobile = useIsMobile();
  return (
    <section style={{ background: "#F8F8F5", padding: isMobile ? "40px 0" : "56px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px" : "0 80px", boxSizing: "border-box" }}>

        {/* Card */}
        <div style={{
          background: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.07)",
          borderRadius: 28,
          padding: isMobile ? "32px 20px" : "48px 56px",
          boxSizing: "border-box",
        }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <p style={{
              fontFamily: SANS, fontWeight: 500, fontSize: 12,
              color: BLUE, letterSpacing: "2px", textTransform: "uppercase",
              margin: "0 0 10px",
            }}>
              Safe &amp; Secure
            </p>
            <h2 style={{
              fontFamily: SERIF, fontWeight: 600, fontSize: isMobile ? 28 : 36,
              lineHeight: 1.15, color: DARK,
              margin: 0,
            }}>
              Trusted to keep student data safe
            </h2>
          </div>

          {/* Grid — two rows of 4 (2 on mobile) */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: isMobile ? "24px 12px" : "32px 16px",
          }}>
            {ITEMS.map(({ label, icon }) => (
              <div
                key={label}
                style={{
                  display: "flex", flexDirection: "column",
                  alignItems: "center", gap: 10,
                  textAlign: "center",
                }}
              >
                {/* Icon box */}
                <div style={{
                  width: 44, height: 44,
                  background: "rgba(83,174,243,0.07)",
                  border: "1px solid rgba(83,174,243,0.16)",
                  borderRadius: 14,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {icon}
                </div>
                {/* Label */}
                <span style={{
                  fontFamily: SANS, fontWeight: 400, fontSize: 13,
                  color: "rgba(0,0,0,0.55)",
                  lineHeight: 1.4,
                  maxWidth: 110,
                }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Icons (dark stroke for light background) ─────────────── */
const IC = "rgba(0,0,0,0.45)";

function HipaaIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L4 5v6c0 5 3.5 9.3 8 10.3C16.5 20.3 20 16 20 11V5L12 2z"
        stroke={IC} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke={IC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FerpaIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="3" stroke={IC} strokeWidth="1.5" />
      <path d="M8 9h8M8 12h5M8 15h6" stroke={IC} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IsoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={IC} strokeWidth="1.5" />
      <path d="M12 7v5l3 3" stroke={IC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EdTechIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L2 8l10 5 10-5-10-5z" stroke={IC} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2 8v6M22 8v6M6 10.5v4.5a6 6 0 0 0 12 0v-4.5"
        stroke={IC} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function EncryptIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke={IC} strokeWidth="1.5" />
      <path d="M8 11V7a4 4 0 1 1 8 0v4" stroke={IC} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1.5" fill={IC} />
    </svg>
  );
}

function CollabIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="8" cy="8" r="3" stroke={IC} strokeWidth="1.5" />
      <circle cx="16" cy="8" r="3" stroke={IC} strokeWidth="1.5" />
      <path d="M2 20c0-3.3 2.7-6 6-6h8c3.3 0 6 2.7 6 6"
        stroke={IC} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DevicesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="7" width="14" height="10" rx="2" stroke={IC} strokeWidth="1.5" />
      <path d="M16 10h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3" stroke={IC} strokeWidth="1.5" />
      <circle cx="19" cy="16" r="0.8" fill={IC} />
    </svg>
  );
}

function TwoFAIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="2" width="14" height="20" rx="3" stroke={IC} strokeWidth="1.5" />
      <path d="M10 7h4M10 11h4M10 15h2" stroke={IC} strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="17" cy="15" r="2.5" stroke={IC} strokeWidth="1.2" />
      <path d="M16 15l.7.7 1.3-1.4" stroke={IC} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
