import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../components/shared";

const SANS  = "'DM Sans', system-ui, sans-serif";
const SERIF = "'Instrument Serif', serif";
const BLUE  = "#53AEF3";
const DARK  = "#1A1A1E";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const triggered = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true; setVis(true); obs.disconnect();
      }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, vis };
}

const FAQ_CATEGORIES = [
  {
    label: "Getting Started",
    items: [
      {
        q: "Is AbleSpace really free?",
        a: "Yes. Our Starter plan is free forever — no credit card, no trial expiration. You get full access to data collection, the mobile app, and 5 AI progress notes per month.",
      },
      {
        q: "How long does setup take?",
        a: "Most teams are up and running in under an hour. Our onboarding checklist guides you through adding students, configuring goals, and collecting your first data point.",
      },
      {
        q: "Do you offer a free trial of paid plans?",
        a: "Yes — every new account gets a 14-day free trial of the Team plan. No credit card required to start.",
      },
      {
        q: "What devices does AbleSpace work on?",
        a: "AbleSpace works on any modern browser (Chrome, Safari, Firefox, Edge) and has native iOS and Android apps for mobile data collection during sessions.",
      },
    ],
  },
  {
    label: "Data & Compliance",
    items: [
      {
        q: "Is AbleSpace HIPAA compliant?",
        a: "Yes. AbleSpace is fully HIPAA, FERPA, and IDEA compliant. All data is encrypted in transit and at rest. We sign Business Associate Agreements (BAAs) with all Team and District customers.",
      },
      {
        q: "Can I import existing student data?",
        a: "Yes. AbleSpace supports CSV imports for student rosters, existing IEPs, and historical session data. Our support team assists with any migration.",
      },
      {
        q: "Who owns the data?",
        a: "You do. AbleSpace never uses student data for AI training or sells data to third parties. You can export all your data at any time.",
      },
      {
        q: "What happens to my data if I cancel?",
        a: "You have 90 days to export all your data after cancellation. After that period, data is securely deleted from our servers.",
      },
    ],
  },
  {
    label: "Billing & Plans",
    items: [
      {
        q: "How does per-provider pricing work?",
        a: "You pay for each team member who logs sessions or collects data. Administrators and parents who only view data don't count as providers.",
      },
      {
        q: "Can I switch plans?",
        a: "Yes. Upgrade anytime — your new plan takes effect immediately. Downgrade at the end of your current billing period.",
      },
      {
        q: "Do you offer nonprofit discounts?",
        a: "Yes — nonprofits, Title I schools, and charter schools qualify for special pricing. Contact our team to learn more.",
      },
      {
        q: "Is there a district-wide contract option?",
        a: "Yes. District contracts include volume pricing, SSO/SIS integration, dedicated support, and custom onboarding. Contact our sales team.",
      },
    ],
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.25s ease",
        flexShrink: 0,
      }}
    >
      <path
        d="M4.5 6.75L9 11.25L13.5 6.75"
        stroke={MUTED}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FaqItem({
  question,
  answer,
  globalIndex,
  openFaq,
  setOpenFaq,
}: {
  question: string;
  answer: string;
  globalIndex: number;
  openFaq: number | null;
  setOpenFaq: (i: number | null) => void;
}) {
  const isOpen = openFaq === globalIndex;

  return (
    <div
      onClick={() => setOpenFaq(isOpen ? null : globalIndex)}
      style={{
        background: "#fff",
        borderRadius: 16,
        marginBottom: 8,
        padding: "20px 24px",
        cursor: "pointer",
        boxShadow: isOpen
          ? "0 4px 20px rgba(0,0,0,0.08)"
          : "0 2px 8px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.2s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div
          style={{
            fontFamily: SANS,
            fontSize: 15,
            fontWeight: 600,
            color: DARK,
            lineHeight: 1.4,
          }}
        >
          {question}
        </div>
        <ChevronIcon open={isOpen} />
      </div>
      {isOpen && (
        <div
          style={{
            fontFamily: SANS,
            fontSize: 14,
            color: MUTED,
            lineHeight: 1.7,
            marginTop: 14,
            paddingTop: 14,
            borderTop: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export function FaqPage() {
  const isMobile = useIsMobile();
  const heroReveal = useReveal();
  const faqReveal = useReveal();
  const ctaReveal = useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  let globalIndex = 0;

  return (
    <div style={{ fontFamily: SANS, background: BG, minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #F0F7FF 0%, #F8F8F5 55%, #F5F0FF 100%)",
          padding: isMobile ? "80px 24px 64px" : "120px 24px 96px",
          textAlign: "center",
        }}
      >
        <div
          ref={heroReveal.ref}
          style={{
            maxWidth: 640,
            margin: "0 auto",
            opacity: heroReveal.vis ? 1 : 0,
            transform: heroReveal.vis ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div
            style={{
              display: "inline-block",
              fontFamily: SANS,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              color: BLUE,
              background: BLUE + "18",
              padding: "5px 14px",
              borderRadius: 20,
              marginBottom: 24,
            }}
          >
            FAQ
          </div>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: isMobile ? 40 : 60,
              fontWeight: 400,
              color: DARK,
              lineHeight: 1.1,
              margin: "0 0 20px",
            }}
          >
            Questions answered,
            <br />
            <span style={{ color: BLUE }}>fast.</span>
          </h1>
          <p
            style={{
              fontFamily: SANS,
              fontSize: isMobile ? 15 : 17,
              color: MUTED,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Everything your team needs to know about AbleSpace — from getting started to advanced billing.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section style={{ padding: isMobile ? "48px 24px 32px" : "72px 24px 48px" }}>
        <div
          ref={faqReveal.ref}
          style={{
            maxWidth: 800,
            margin: "0 auto",
            opacity: faqReveal.vis ? 1 : 0,
            transform: faqReveal.vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.label} style={{ marginBottom: 40 }}>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  color: MUTED,
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {cat.label}
              </div>
              {cat.items.map((item) => {
                const idx = globalIndex++;
                return (
                  <FaqItem
                    key={item.q}
                    question={item.q}
                    answer={item.a}
                    globalIndex={idx}
                    openFaq={openFaq}
                    setOpenFaq={setOpenFaq}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: isMobile ? "0 24px 80px" : "0 24px 100px" }}>
        <div
          ref={ctaReveal.ref}
          style={{
            maxWidth: 800,
            margin: "0 auto",
            background: "#fff",
            borderRadius: 20,
            padding: isMobile ? "40px 28px" : "56px 64px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
            textAlign: "center",
            opacity: ctaReveal.vis ? 1 : 0,
            transform: ctaReveal.vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div
            style={{
              fontFamily: SERIF,
              fontSize: isMobile ? 26 : 32,
              color: DARK,
              marginBottom: 12,
            }}
          >
            Still have questions?
          </div>
          <div
            style={{
              fontFamily: SANS,
              fontSize: 15,
              color: MUTED,
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            Our team typically responds within 2 hours during business hours.
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
            }}
          >
            <button
              style={{
                fontFamily: SANS,
                fontSize: 15,
                fontWeight: 600,
                color: "#fff",
                background: BLUE,
                border: "none",
                borderRadius: 10,
                padding: "13px 28px",
                cursor: "pointer",
                width: isMobile ? "100%" : "auto",
              }}
            >
              Contact Us
            </button>
            <button
              style={{
                fontFamily: SANS,
                fontSize: 15,
                fontWeight: 600,
                color: DARK,
                background: "transparent",
                border: "1.5px solid rgba(0,0,0,0.15)",
                borderRadius: 10,
                padding: "13px 28px",
                cursor: "pointer",
                width: isMobile ? "100%" : "auto",
              }}
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
