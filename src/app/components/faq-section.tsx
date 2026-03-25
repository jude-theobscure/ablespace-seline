import React, { useState } from "react";
import { useIsMobile } from "./shared";

/* ── Design tokens ────────────────────────────────────────── */
const SERIF = "'Instrument Serif', serif";
const SANS  = "'DM Sans', system-ui, sans-serif";
const DARK  = "#1A1A1E";
const BLUE  = "#53AEF3";
const MUTED = "#6E6E73";

/* ── FAQ data ─────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What is AbleSpace?",
    a: "AbleSpace is an AI-powered IEP and special education management platform. It helps special education teams track student goals, write progress notes, manage IEPs, and collaborate — all in one place.",
  },
  {
    q: "Is AbleSpace HIPAA and FERPA compliant?",
    a: "Yes. AbleSpace is fully HIPAA and FERPA compliant. All student data is encrypted at rest and in transit. We also hold ISO 27001 certification and are 1EdTech certified.",
  },
  {
    q: "How does the AI progress note feature work?",
    a: "After a session, you log data directly in AbleSpace. Our AI drafts a compliant, clinically appropriate progress note based on the session data — saving therapists an average of 45 minutes per day.",
  },
  {
    q: "Can AbleSpace integrate with our existing IEP system?",
    a: "Yes. AbleSpace supports integrations with major IEP systems via our district plan, including single sign-on (SSO) and data sync capabilities. Contact us to discuss your specific setup.",
  },
  {
    q: "Is there a mobile app?",
    a: "Yes. AbleSpace is available on iOS and Android. You can track data, update goals, and review progress from anywhere — whether you're in the classroom or on the go.",
  },
  {
    q: "How do I get started for my school or district?",
    a: "You can start a free trial for individual use, or reach out to our team for a district rollout. We provide onboarding, staff training, and a dedicated success manager for district accounts.",
  },
  {
    q: "What does pricing look like?",
    a: "AbleSpace offers individual plans for solo practitioners and team plans for schools and districts. Pricing scales with your team size. Contact us for a custom district quote.",
  },
];

/* ═══════════════════════════════════════════════════════════ */
export function FAQSection() {
  const isMobile = useIsMobile();
  return (
    <section style={{ background: "#F8F8F5", padding: isMobile ? "60px 0" : "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px" : "0 80px", boxSizing: "border-box" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: isMobile ? 40 : 64 }}>
          <p style={{
            fontFamily: SANS, fontWeight: 500, fontSize: 12,
            color: BLUE, letterSpacing: "2px", textTransform: "uppercase",
            margin: "0 0 14px",
          }}>
            FAQ
          </p>
          <h2 style={{
            fontFamily: SERIF, fontWeight: 400, fontSize: isMobile ? 34 : 48,
            lineHeight: 1.1, color: DARK, margin: "0 0 16px",
          }}>
            Frequently asked questions
          </h2>
          <p style={{
            fontFamily: SANS, fontWeight: 300, fontSize: 18,
            color: MUTED, margin: "0 auto", lineHeight: 1.6, maxWidth: 480,
          }}>
            Everything you need to know about AbleSpace. Can't find an answer?{" "}
            <a href="#" style={{ color: BLUE, textDecoration: "none", fontWeight: 400 }}>
              Talk to our team.
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {FAQS.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ── Single accordion item ────────────────────────────────── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      borderBottom: "1px solid rgba(0,0,0,0.08)",
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", background: "none", border: "none",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 16, padding: "22px 0",
          cursor: "pointer", textAlign: "left",
        }}
      >
        <span style={{
          fontFamily: SANS, fontWeight: 500, fontSize: 16,
          color: DARK, lineHeight: 1.4,
        }}>
          {question}
        </span>
        {/* +/− icon */}
        <div style={{
          width: 32, height: 32, flexShrink: 0,
          borderRadius: "50%",
          background: open ? BLUE : "rgba(0,0,0,0.05)",
          border: open ? "none" : "1px solid rgba(0,0,0,0.08)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.22s, border-color 0.22s",
          boxShadow: open ? "0 2px 12px rgba(83,174,243,0.30)" : "none",
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d={open ? "M2 6h8" : "M6 2v8M2 6h8"}
              stroke={open ? "#fff" : MUTED}
              strokeWidth="1.5" strokeLinecap="round"
            />
          </svg>
        </div>
      </button>

      {/* Answer */}
      <div style={{
        overflow: "hidden",
        maxHeight: open ? 300 : 0,
        transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <p style={{
          fontFamily: SANS, fontWeight: 300, fontSize: 15,
          color: MUTED, lineHeight: 1.7,
          margin: "0 0 22px", paddingRight: 44,
        }}>
          {answer}
        </p>
      </div>
    </div>
  );
}
