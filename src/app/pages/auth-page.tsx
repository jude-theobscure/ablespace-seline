import React, { useEffect, useRef, useState } from "react";
import navbarLogo from "../../assets/navbar/icon-logo.svg";
import signUpPreview from "../../assets/sign-up/previewpng.png";

const SANS  = "'DM Sans', system-ui, sans-serif";
const SERIF = "'Instrument Serif', serif";
const BLUE  = "#53AEF3";
const DARK  = "#1A1A1E";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    setVis(true);
  }, []);
  return { ref, vis };
}

/* ── Input ──────────────────────────────────────────────────── */
function Field({
  label, type = "text", placeholder, value, onChange, autoFocus,
}: {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  autoFocus?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={{
        fontFamily: SANS, fontSize: 11, fontWeight: 700,
        color: MUTED, letterSpacing: "1.5px", textTransform: "uppercase",
        display: "block", marginBottom: 8,
      }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        autoFocus={autoFocus}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%", height: 48, padding: "0 16px",
          borderRadius: 10,
          border: focused
            ? `1.5px solid ${BLUE}`
            : "1.5px solid rgba(0,0,0,0.12)",
          fontFamily: SANS, fontSize: 15, color: DARK,
          background: "#fff",
          outline: "none", boxSizing: "border-box",
          transition: "border-color 0.2s",
        }}
      />
    </div>
  );
}

/* ── Social button ──────────────────────────────────────────── */
function SocialBtn({ icon, label }: { icon: React.ReactNode; label: string }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: 1, height: 44, minWidth: 0,
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        borderRadius: 10, border: "1.5px solid rgba(0,0,0,0.10)",
        background: hov ? BG : "#fff",
        cursor: "pointer",
        fontFamily: SANS, fontSize: 13, fontWeight: 500, color: DARK,
        transition: "background 0.15s",
        whiteSpace: "nowrap",
      }}
    >
      {icon}
      {label}
    </button>
  );
}

const GoogleIcon = (
  <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908C16.658 14.033 17.64 11.725 17.64 9.2z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
    <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
  </svg>
);

const MicrosoftIcon = (
  <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="1" width="7.5" height="7.5" fill="#F25022"/>
    <rect x="9.5" y="1" width="7.5" height="7.5" fill="#7FBA00"/>
    <rect x="1" y="9.5" width="7.5" height="7.5" fill="#00A4EF"/>
    <rect x="9.5" y="9.5" width="7.5" height="7.5" fill="#FFB900"/>
  </svg>
);

const CleverIcon = (
  <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="#4274F6"/>
    <path d="M11.5 6.5A3.5 3.5 0 1 0 11.5 11.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
  </svg>
);

const ClasslinkIcon = (
  <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
    <rect width="18" height="18" rx="4" fill="#1B5FAD"/>
    <path d="M4 9h10M9 4v10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

/* ── OR divider ─────────────────────────────────────────────── */
function OrDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "24px 0" }}>
      <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
      <span style={{ fontFamily: SANS, fontSize: 12, color: MUTED, fontWeight: 500, letterSpacing: "0.05em" }}>OR</span>
      <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
    </div>
  );
}

/* ── Left image panel ───────────────────────────────────────── */
function BrandPanel() {
  return (
    <div style={{
      flex: "0 0 52%",
      overflow: "hidden",
      flexShrink: 0,
    }}>
      <img
        src={signUpPreview}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   LOGIN PAGE
══════════════════════════════════════════════════════════════ */
export function LoginPage({ onNavigate }: { onNavigate: (p: "home" | "login" | "signup") => void }) {
  const { vis } = useReveal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<"email" | "password">("email");

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "email" && email.trim()) setStep("password");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* Left — form */}
      <div style={{
        flex: 1, background: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "48px 48px",
      }}>
        <div style={{
          width: "100%", maxWidth: 400,
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.55s ease, transform 0.55s ease",
        }}>

          {/* Step indicator */}
          <div style={{ display: "flex", gap: 6, marginBottom: 40 }}>
            {["Email", "Password"].map((s, i) => {
              const active = (step === "email" && i === 0) || (step === "password" && i === 1);
              const done = step === "password" && i === 0;
              return (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: "50%",
                    background: done ? BLUE : active ? BLUE + "20" : "rgba(0,0,0,0.06)",
                    border: active ? `1.5px solid ${BLUE}` : done ? "none" : "1.5px solid rgba(0,0,0,0.10)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.25s",
                  }}>
                    {done
                      ? <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5L9 3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      : <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, color: active ? BLUE : MUTED }}>{i + 1}</span>
                    }
                  </div>
                  <span style={{
                    fontFamily: SANS, fontSize: 12, fontWeight: 600,
                    color: active || done ? DARK : MUTED,
                    transition: "color 0.25s",
                  }}>{s}</span>
                  {i === 0 && (
                    <div style={{ width: 20, height: 1, background: "rgba(0,0,0,0.12)", margin: "0 4px" }} />
                  )}
                </div>
              );
            })}
          </div>

          <h2 style={{
            fontFamily: SERIF, fontWeight: 400, fontSize: 34,
            color: DARK, margin: "0 0 8px", lineHeight: 1.15,
          }}>
            {step === "email" ? "Log in to AbleSpace" : "Enter your password"}
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 14, color: MUTED, margin: "0 0 32px", lineHeight: 1.6 }}>
            {step === "email"
              ? "Enter your email to continue to your workspace."
              : <>Logging in as <strong style={{ color: DARK }}>{email}</strong></>
            }
          </p>

          <form onSubmit={handleContinue} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Field
              label="Email address"
              type="email"
              placeholder="you@school.edu"
              value={email}
              onChange={setEmail}
            />

            {step === "password" && (
              <div style={{
                opacity: step === "password" ? 1 : 0,
                transform: step === "password" ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}>
                <Field
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={setPassword}
                  autoFocus
                />
                <div style={{ textAlign: "right", marginTop: 8 }}>
                  <a href="#" style={{ fontFamily: SANS, fontSize: 13, color: BLUE, fontWeight: 500, textDecoration: "none" }}>
                    Forgot password?
                  </a>
                </div>
              </div>
            )}

            <button type="submit" style={{
              width: "100%", height: 48,
              background: BLUE, color: "#fff",
              border: "none", borderRadius: 10,
              fontFamily: SANS, fontSize: 15, fontWeight: 600,
              cursor: "pointer", marginTop: 4,
              transition: "opacity 0.15s",
            }}>
              {step === "email" ? "Continue" : "Log in"}
            </button>
          </form>

          <p style={{ fontFamily: SANS, fontSize: 14, color: MUTED, margin: "20px 0 0", textAlign: "center" }}>
            Don't have an account?{" "}
            <button onClick={() => onNavigate("signup")} style={{
              background: "none", border: "none", padding: 0,
              fontFamily: SANS, fontSize: 14, fontWeight: 600,
              color: DARK, cursor: "pointer", textDecoration: "underline",
              textUnderlineOffset: 3,
            }}>
              Sign up free
            </button>
          </p>

          <OrDivider />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
            <SocialBtn icon={GoogleIcon} label="Google" />
            <SocialBtn icon={MicrosoftIcon} label="Microsoft" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <SocialBtn icon={CleverIcon} label="Clever" />
            <SocialBtn icon={ClasslinkIcon} label="Classlink" />
          </div>

          <p style={{
            fontFamily: SANS, fontSize: 11.5, color: MUTED,
            marginTop: 28, textAlign: "center", lineHeight: 1.65,
          }}>
            By continuing, you agree to our{" "}
            <a href="#" style={{ color: MUTED, fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 2 }}>Privacy Policy</a>
            {" "}and{" "}
            <a href="#" style={{ color: MUTED, fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 2 }}>Terms of Service</a>.
          </p>
        </div>
      </div>

      <BrandPanel />
    </div>
  );
}

/* ── Compact field (sign-up, tighter vertical rhythm) ───────── */
function CompactField({
  label, type = "text", placeholder, value, onChange,
}: {
  label: string; type?: string; placeholder: string;
  value: string; onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={{
        fontFamily: SANS, fontSize: 10.5, fontWeight: 700,
        color: MUTED, letterSpacing: "1.5px", textTransform: "uppercase",
        display: "block", marginBottom: 6,
      }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%", height: 42, padding: "0 14px",
          borderRadius: 10,
          border: focused ? `1.5px solid ${BLUE}` : "1.5px solid rgba(0,0,0,0.12)",
          fontFamily: SANS, fontSize: 14, color: DARK,
          background: "#fff", outline: "none", boxSizing: "border-box",
          transition: "border-color 0.2s",
        }}
      />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   SIGN UP PAGE
══════════════════════════════════════════════════════════════ */
export function SignUpPage({ onNavigate }: { onNavigate: (p: "home" | "login" | "signup") => void }) {
  const { vis } = useReveal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const strength = Math.min(4, Math.floor(password.length / 3));
  const strengthColors = ["#FF4D4D", "#FF944D", "#FFD700", "#22C55E"];
  const strengthLabels = ["Too short", "Weak", "Good", "Strong"];

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>

      {/* Left — form */}
      <div style={{
        flex: 1, background: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "0 48px",
        overflowY: "auto",
      }}>
        <div style={{
          width: "100%", maxWidth: 400,
          paddingTop: 32, paddingBottom: 32,
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.55s ease, transform 0.55s ease",
        }}>

          {/* Heading */}
          <h2 style={{
            fontFamily: SERIF, fontWeight: 400, fontSize: 30,
            color: DARK, margin: "0 0 4px", lineHeight: 1.15,
          }}>
            Create your account
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 13.5, color: MUTED, margin: "0 0 20px", lineHeight: 1.5 }}>
            Free forever — no credit card required.
          </p>

          {/* Social first */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
            <SocialBtn icon={GoogleIcon} label="Google" />
            <SocialBtn icon={MicrosoftIcon} label="Microsoft" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            <SocialBtn icon={CleverIcon} label="Clever" />
            <SocialBtn icon={ClasslinkIcon} label="Classlink" />
          </div>

          {/* OR divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "16px 0" }}>
            <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
            <span style={{ fontFamily: SANS, fontSize: 11.5, color: MUTED, fontWeight: 500, letterSpacing: "0.05em" }}>OR</span>
            <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
          </div>

          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <CompactField label="Full name" placeholder="Jane Smith" value={name} onChange={setName} />
            <CompactField label="Work email" type="email" placeholder="jane@school.edu" value={email} onChange={setEmail} />
            <CompactField label="Password" type="password" placeholder="Create a password (8+ chars)" value={password} onChange={setPassword} />

            {/* Password strength */}
            {password.length > 0 && (
              <div style={{ marginTop: -4 }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} style={{
                      flex: 1, height: 3, borderRadius: 2,
                      background: i <= strength ? strengthColors[strength - 1] : "rgba(0,0,0,0.08)",
                      transition: "background 0.25s",
                    }} />
                  ))}
                </div>
                <span style={{ fontFamily: SANS, fontSize: 11, color: MUTED }}>
                  {strengthLabels[Math.max(0, strength - 1)]}
                </span>
              </div>
            )}

            <button type="submit" style={{
              width: "100%", height: 44,
              background: BLUE, color: "#fff",
              border: "none", borderRadius: 10,
              fontFamily: SANS, fontSize: 14.5, fontWeight: 600,
              cursor: "pointer", marginTop: 4,
            }}>
              Sign up for FREE
            </button>
          </form>

          <p style={{ fontFamily: SANS, fontSize: 13, color: MUTED, margin: "14px 0 0", textAlign: "center" }}>
            Already have an account?{" "}
            <button onClick={() => onNavigate("login")} style={{
              background: "none", border: "none", padding: 0,
              fontFamily: SANS, fontSize: 13, fontWeight: 600,
              color: DARK, cursor: "pointer", textDecoration: "underline",
              textUnderlineOffset: 3,
            }}>
              Log in
            </button>
          </p>

          {/* Legal + compliance */}
          <div style={{
            marginTop: 18, paddingTop: 16,
            borderTop: "1px solid rgba(0,0,0,0.07)",
          }}>
            <p style={{ fontFamily: SANS, fontSize: 11, color: MUTED, margin: "0 0 12px", textAlign: "center", lineHeight: 1.6 }}>
              By signing up, you agree to our{" "}
              <a href="#" style={{ color: MUTED, fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 2 }}>Privacy Policy</a>
              {" "}and{" "}
              <a href="#" style={{ color: MUTED, fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 2 }}>Terms of Service</a>.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
              {["HIPAA", "FERPA", "ISO 27001"].map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1.5L2 4v4.5c0 2.625 2.1 5.075 5 5.675 2.9-.6 5-3.05 5-5.675V4L7 1.5z"
                      stroke={MUTED} strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
                    <path d="M4.5 7l2 2L9.5 5.5" stroke={MUTED} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 600, color: MUTED }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <BrandPanel />
    </div>
  );
}
