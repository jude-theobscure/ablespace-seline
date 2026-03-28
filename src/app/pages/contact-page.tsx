import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../components/shared";
import { MAX_W, PAD_X, PAD_X_MOB, SECT_PY, SECT_PY_MOB, HERO_PT, HERO_PT_MOB, HERO_PB, HERO_PB_MOB, H1_SIZE, H1_SIZE_MOB, H2_SIZE, H2_SIZE_MOB, BODY_SIZE, STAT_SIZE, STAT_SIZE_MOB, CARD_RADIUS, CTA_RADIUS, CTA_PAD_X, CTA_PAD_Y, CTA_PAD_X_MOB, CTA_PAD_Y_MOB, CARD_GAP, BTN_RADIUS, BTN_PAD, BTN_SIZE } from "./page-layout";

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

const CONTACT_CARDS = [
  {
    emoji: "💬",
    title: "Live Chat",
    detail: null,
    description: "Chat with our team directly in AbleSpace. Typically responds in under 5 minutes during business hours.",
  },
  {
    emoji: "📧",
    title: "Email",
    detail: "hello@ablespace.io",
    description: "We reply within 2 business hours.",
  },
  {
    emoji: "📅",
    title: "Schedule a Call",
    detail: null,
    description: "Book a 30-minute intro call with a special ed specialist on our team.",
  },
];

const INTEREST_OPTIONS = ["A live demo", "General questions", "District pricing"];

const inputStyle: React.CSSProperties = {
  fontFamily: SANS,
  fontSize: 14,
  color: DARK,
  background: "#fff",
  border: "1.5px solid rgba(0,0,0,0.12)",
  borderRadius: 10,
  padding: "12px 16px",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  fontFamily: SANS,
  fontSize: 12,
  fontWeight: 700,
  color: MUTED,
  textTransform: "uppercase",
  letterSpacing: 1.5,
  display: "block",
  marginBottom: 6,
};

export function ContactPage() {
  const isMobile = useIsMobile();
  const heroReveal = useReveal();
  const formReveal = useReveal();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    role: "",
    message: "",
  });
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  const handleChange = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <div style={{ fontFamily: SANS, background: BG, minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #F0F7FF 0%, #F8F8F5 55%, #F5F0FF 100%)",
          padding: isMobile ? `${HERO_PT_MOB}px 0 ${HERO_PB_MOB}px` : `${HERO_PT}px 0 ${HERO_PB}px`,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box", position: "relative", zIndex: 1, textAlign: "center" }}>
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
            CONTACT US
          </div>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: isMobile ? H1_SIZE_MOB : H1_SIZE,
              fontWeight: 400,
              color: DARK,
              lineHeight: 1.1,
              margin: "0 0 20px",
            }}
          >
            We'd love to
            <br />
            <span style={{ color: BLUE }}>hear from you.</span>
          </h1>
          <p
            style={{
              fontFamily: SANS,
              fontSize: BODY_SIZE,
              color: MUTED,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Whether you have a question, want a demo, or are ready to bring AbleSpace to your district — our team is here.
          </p>
        </div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: isMobile ? `${SECT_PY_MOB}px 0` : `${SECT_PY}px 0`, background: "#fff" }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
        <div
          ref={formReveal.ref}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 48 : 64,
            opacity: formReveal.vis ? 1 : 0,
            transform: formReveal.vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {/* Left: Contact Form */}
          <div>
            <div
              style={{
                fontFamily: SANS,
                fontSize: 20,
                fontWeight: 600,
                color: DARK,
                marginBottom: 28,
              }}
            >
              Send us a message
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* First Name / Last Name */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <div>
                  <label style={labelStyle}>First Name</label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={handleChange("firstName")}
                    placeholder="Jane"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Last Name</label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={handleChange("lastName")}
                    placeholder="Smith"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="jane@school.edu"
                  style={inputStyle}
                />
              </div>

              {/* Organization / Role */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <div>
                  <label style={labelStyle}>Organization</label>
                  <input
                    type="text"
                    value={form.organization}
                    onChange={handleChange("organization")}
                    placeholder="School or district"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Role</label>
                  <input
                    type="text"
                    value={form.role}
                    onChange={handleChange("role")}
                    placeholder="e.g. BCBA, Director"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="Tell us how we can help..."
                  style={{
                    ...inputStyle,
                    height: 120,
                    resize: "vertical",
                    fontFamily: SANS,
                  }}
                />
              </div>

              {/* Interest pills */}
              <div>
                <label style={{ ...labelStyle, marginBottom: 10 }}>I'm interested in:</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {INTEREST_OPTIONS.map((opt) => {
                    const active = selectedInterest === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => setSelectedInterest(active ? null : opt)}
                        style={{
                          fontFamily: SANS,
                          fontSize: 13,
                          fontWeight: 600,
                          padding: "9px 18px",
                          borderRadius: 20,
                          border: active ? "none" : "1.5px solid rgba(0,0,0,0.12)",
                          background: active ? BLUE : "#fff",
                          color: active ? "#fff" : DARK,
                          cursor: "pointer",
                          transition: "background 0.2s ease, color 0.2s ease, border 0.2s ease",
                        }}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit */}
              <button
                style={{
                  fontFamily: SANS,
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#fff",
                  background: BLUE,
                  border: "none",
                  borderRadius: 10,
                  padding: "14px 20px",
                  cursor: "pointer",
                  width: "100%",
                  marginTop: 4,
                }}
              >
                Send Message →
              </button>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div>
            <div
              style={{
                fontFamily: SANS,
                fontSize: 20,
                fontWeight: 600,
                color: DARK,
                marginBottom: 28,
              }}
            >
              Get in touch
            </div>

            {/* Contact cards */}
            {CONTACT_CARDS.map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#fff",
                  borderRadius: CARD_RADIUS,
                  padding: 20,
                  border: "1px solid rgba(0,0,0,0.07)",
                  marginBottom: 12,
                }}
              >
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{card.emoji}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: SANS,
                        fontSize: 15,
                        fontWeight: 700,
                        color: DARK,
                        marginBottom: 4,
                      }}
                    >
                      {card.title}
                    </div>
                    {card.detail && (
                      <div
                        style={{
                          fontFamily: SANS,
                          fontSize: 14,
                          color: BLUE,
                          fontWeight: 600,
                          marginBottom: 4,
                        }}
                      >
                        {card.detail}
                      </div>
                    )}
                    <div
                      style={{
                        fontFamily: SANS,
                        fontSize: 13,
                        color: MUTED,
                        lineHeight: 1.6,
                      }}
                    >
                      {card.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Office hours */}
            <div
              style={{
                fontFamily: SANS,
                fontSize: 13,
                color: MUTED,
                marginTop: 16,
                marginBottom: 24,
                lineHeight: 1.6,
              }}
            >
              Monday–Friday, 8am–6pm EST
            </div>

            {/* Map placeholder */}
            <div
              style={{
                background: "linear-gradient(135deg, #E0F7F5, #EDE8F8)",
                borderRadius: 16,
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: SANS,
                fontSize: 15,
                color: MUTED,
                fontWeight: 500,
              }}
            >
              San Francisco, CA 📍
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
