import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../components/shared";
import {
  MAX_W, PAD_X, PAD_X_MOB,
  SECT_PY, SECT_PY_MOB,
  HERO_PT, HERO_PT_MOB, HERO_PB, HERO_PB_MOB,
  H1_SIZE, H1_SIZE_MOB, H2_SIZE, H2_SIZE_MOB,
  BODY_SIZE, CARD_RADIUS, CTA_RADIUS,
  CTA_PAD_X, CTA_PAD_Y, CTA_PAD_X_MOB, CTA_PAD_Y_MOB,
  CARD_GAP, BTN_RADIUS, BTN_PAD, BTN_SIZE,
} from "./page-layout";

const SANS  = "'DM Sans', system-ui, sans-serif";
const SERIF = "'Instrument Serif', serif";
const BLUE  = "#53AEF3";
const DARK  = "#1A1A1E";
const MUTED = "#6E6E73";
const BG    = "#F8F8F5";
const PURPLE = "#6B5ECD";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const triggered = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, vis };
}

const CAPABILITIES = [
  {
    icon: "🎨",
    badgeBg: "#EDE8F8",
    iconColor: PURPLE,
    title: "Read Figma designs",
    desc: "Claude reads your Figma frames, components, and design tokens directly — no copy-paste, no screenshots. The AI sees exactly what you see.",
    tags: ["Frames", "Components", "Tokens"],
  },
  {
    icon: "⚡",
    badgeBg: "#E0F7F5",
    iconColor: "#0DB8A0",
    title: "Generate pixel-perfect code",
    desc: "From a selected Figma frame, Claude generates production-ready React components with your exact spacing, typography, and color values.",
    tags: ["React", "TypeScript", "Inline Styles"],
  },
  {
    icon: "🔗",
    badgeBg: "#E0F2FE",
    iconColor: "#0284C7",
    title: "Code Connect",
    desc: "Link your Figma components to your real codebase. Claude reuses your existing components instead of generating new ones from scratch.",
    tags: ["Code Connect", "Reuse", "Consistency"],
  },
  {
    icon: "🗂",
    badgeBg: "#FEF3C7",
    iconColor: "#D97706",
    title: "Extract design variables",
    desc: "Pull spacing, color, and typography variables from your Figma design system and apply them consistently across your entire codebase.",
    tags: ["Variables", "Design System", "Tokens"],
  },
  {
    icon: "✏️",
    badgeBg: "#FCE7F3",
    iconColor: "#DB2777",
    title: "Write back to Figma",
    desc: "Create and modify frames, components, and variables directly in Figma from your Claude Code session — design and code in one loop.",
    tags: ["Write", "Canvas", "Automation"],
  },
  {
    icon: "🔄",
    badgeBg: "#F0FDF4",
    iconColor: "#16A34A",
    title: "Stay in sync",
    desc: "When your Figma design updates, Claude detects the changes and can regenerate or patch only the affected components — no full rewrites.",
    tags: ["Sync", "Updates", "Incremental"],
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Install the Figma plugin",
    desc: "The Figma MCP server is available as a plugin in Claude Code. Enable it in settings and authenticate with your Figma account.",
  },
  {
    step: "02",
    title: "Select a frame in Figma",
    desc: "Open your Figma file, select the frame or component you want to implement, and share the link with Claude Code.",
  },
  {
    step: "03",
    title: "Claude builds it for you",
    desc: "Claude reads the design data, generates the code, and wires it into your existing codebase — matching your patterns and conventions.",
  },
];

const SETUP_STEPS = [
  {
    num: "1",
    title: "Enable the Figma plugin",
    desc: 'In Claude Code, open Settings → Plugins and enable "Figma MCP Server".',
    code: "Settings → Plugins → Figma MCP Server → Enable",
  },
  {
    num: "2",
    title: "Authenticate with Figma",
    desc: "Run /mcp in Claude Code to see your MCP connections and complete the Figma OAuth flow.",
    code: "/mcp",
  },
  {
    num: "3",
    title: "Share a Figma frame link",
    desc: "In Figma, right-click any frame → Copy link → Paste it in your Claude Code conversation.",
    code: "Right-click frame → Copy link → Paste in Claude Code",
  },
];

export function FigmaMcpPage() {
  const isMobile = useIsMobile();
  const heroReveal   = useReveal(0.05);
  const capReveal    = useReveal(0.08);
  const howReveal    = useReveal(0.1);
  const setupReveal  = useReveal(0.1);
  const ctaReveal    = useReveal(0.1);

  const [hovA, setHovA] = useState(false);
  const [hovB, setHovB] = useState(false);

  return (
    <div style={{ background: BG, minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── Hero ── */}
      <section
        ref={heroReveal.ref}
        style={{
          background: "linear-gradient(160deg, #0F172A 0%, #1A1035 50%, #0F172A 100%)",
          padding: isMobile
            ? `${HERO_PT_MOB}px 0 ${HERO_PB_MOB}px`
            : `${HERO_PT}px 0 ${HERO_PB}px`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blobs */}
        <div style={{
          position: "absolute", top: -80, left: "5%",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(107,94,205,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -60, right: "8%",
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(83,174,243,0.14) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        {/* Figma logo watermark */}
        <div style={{
          position: "absolute", top: "50%", right: isMobile ? "-10%" : "6%",
          transform: "translateY(-50%)",
          opacity: 0.06, fontSize: 200, lineHeight: 1,
          pointerEvents: "none", userSelect: "none",
        }}>
          ✦
        </div>

        <div style={{
          maxWidth: MAX_W, margin: "0 auto",
          padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box",
          position: "relative", zIndex: 1,
          textAlign: "center",
        }}>
          {/* Label */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: SANS, fontWeight: 500, fontSize: 11,
            letterSpacing: 2, color: BLUE,
            background: "rgba(83,174,243,0.12)",
            border: "1px solid rgba(83,174,243,0.25)",
            padding: "5px 14px", borderRadius: 9999,
            marginBottom: 24,
            opacity: heroReveal.vis ? 1 : 0,
            transform: heroReveal.vis ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}>
            FIGMA MCP
          </div>

          <h1 style={{
            fontFamily: SERIF, fontWeight: 400,
            fontSize: isMobile ? H1_SIZE_MOB : H1_SIZE,
            lineHeight: 1.08,
            color: "#FFFFFF",
            margin: "0 auto 20px",
            maxWidth: 820,
            opacity: heroReveal.vis ? 1 : 0,
            transform: heroReveal.vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 600ms ease 80ms, transform 600ms ease 80ms",
          }}>
            Design in Figma.
            <br />
            <span style={{ color: BLUE }}>Build in Claude Code.</span>
          </h1>

          <p style={{
            fontFamily: SANS, fontWeight: 300,
            fontSize: isMobile ? 17 : BODY_SIZE,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.65,
            margin: "0 auto 40px",
            maxWidth: 560,
            opacity: heroReveal.vis ? 1 : 0,
            transform: heroReveal.vis ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 600ms ease 160ms, transform 600ms ease 160ms",
          }}>
            The Figma MCP server connects your design files directly to Claude Code — so you can go from a Figma frame to production-ready code without leaving your editor.
          </p>

          <div style={{
            display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap",
            opacity: heroReveal.vis ? 1 : 0,
            transform: heroReveal.vis ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 600ms ease 240ms, transform 600ms ease 240ms",
          }}>
            <a
              href="#"
              onMouseEnter={() => setHovA(true)}
              onMouseLeave={() => setHovA(false)}
              style={{
                display: "inline-flex", alignItems: "center",
                fontFamily: SANS, fontWeight: 500, fontSize: BTN_SIZE,
                color: "white", background: hovA ? "#3D9FE8" : BLUE,
                border: "none", borderRadius: BTN_RADIUS,
                padding: BTN_PAD, textDecoration: "none",
                cursor: "pointer",
                transform: hovA ? "translateY(-1px)" : "none",
                transition: "background 0.18s, transform 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              Get started with Figma MCP →
            </a>
            <a
              href="#"
              onMouseEnter={() => setHovB(true)}
              onMouseLeave={() => setHovB(false)}
              style={{
                display: "inline-flex", alignItems: "center",
                fontFamily: SANS, fontWeight: 400, fontSize: BTN_SIZE,
                color: "rgba(255,255,255,0.85)",
                background: hovB ? "rgba(255,255,255,0.08)" : "transparent",
                border: "1.5px solid rgba(255,255,255,0.2)",
                borderRadius: BTN_RADIUS, padding: BTN_PAD,
                textDecoration: "none", cursor: "pointer",
                transition: "background 0.18s",
                whiteSpace: "nowrap",
              }}
            >
              View documentation
            </a>
          </div>

          {/* Trust row */}
          <div style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            gap: 24, flexWrap: "wrap", marginTop: 40,
            opacity: heroReveal.vis ? 1 : 0,
            transition: "opacity 600ms ease 320ms",
          }}>
            {["✦ Free to use", "✦ HIPAA compliant", "✦ Works with any Figma plan"].map((item, i) => (
              <span key={i} style={{
                fontFamily: SANS, fontWeight: 400, fontSize: 12,
                color: "rgba(255,255,255,0.35)",
              }}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities grid ── */}
      <section style={{
        background: BG,
        padding: isMobile
          ? `${SECT_PY_MOB}px 0`
          : `${SECT_PY}px 0`,
      }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
          <div
            ref={capReveal.ref}
            style={{
              textAlign: "center", marginBottom: 56,
              opacity: capReveal.vis ? 1 : 0,
              transform: capReveal.vis ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 600ms ease, transform 600ms ease",
            }}
          >
            <div style={{
              display: "inline-block",
              fontFamily: SANS, fontWeight: 500, fontSize: 11,
              letterSpacing: 2, color: PURPLE,
              background: "rgba(107,94,205,0.08)",
              border: "1px solid rgba(107,94,205,0.15)",
              padding: "5px 14px", borderRadius: 9999, marginBottom: 20,
            }}>
              CAPABILITIES
            </div>
            <h2 style={{
              fontFamily: SERIF, fontWeight: 400,
              fontSize: isMobile ? H2_SIZE_MOB : H2_SIZE,
              lineHeight: 1.1, color: DARK,
              margin: "0 auto 16px", maxWidth: 620,
            }}>
              Everything you need to go from
              <br />design to code.
            </h2>
            <p style={{
              fontFamily: SANS, fontWeight: 300,
              fontSize: 18, color: MUTED, lineHeight: 1.55,
              margin: "0 auto", maxWidth: 520,
            }}>
              The Figma MCP server gives Claude Code deep access to your design files — layouts, components, tokens, and more.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: CARD_GAP,
          }}>
            {CAPABILITIES.map((cap, i) => (
              <CapabilityCard key={cap.title} cap={cap} i={i} vis={capReveal.vis} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{
        background: "#FFFFFF",
        padding: isMobile
          ? `${SECT_PY_MOB}px 0`
          : `${SECT_PY}px 0`,
      }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
          <div
            ref={howReveal.ref}
            style={{
              textAlign: "center", marginBottom: 60,
              opacity: howReveal.vis ? 1 : 0,
              transform: howReveal.vis ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 600ms ease, transform 600ms ease",
            }}
          >
            <div style={{
              display: "inline-block",
              fontFamily: SANS, fontWeight: 500, fontSize: 11,
              letterSpacing: 2, color: BLUE,
              background: "rgba(83,174,243,0.08)",
              border: "1px solid rgba(83,174,243,0.15)",
              padding: "5px 14px", borderRadius: 9999, marginBottom: 20,
            }}>
              HOW IT WORKS
            </div>
            <h2 style={{
              fontFamily: SERIF, fontWeight: 400,
              fontSize: isMobile ? H2_SIZE_MOB : H2_SIZE,
              lineHeight: 1.1, color: DARK,
              margin: "0 auto", maxWidth: 580,
            }}>
              From Figma frame to
              <br />running code in minutes.
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? 32 : 48,
            position: "relative",
          }}>
            {!isMobile && (
              <div style={{
                position: "absolute",
                top: 28, left: "16.66%", right: "16.66%",
                height: 1,
                background: "linear-gradient(90deg, rgba(83,174,243,0.3), rgba(107,94,205,0.3))",
              }} />
            )}
            {HOW_IT_WORKS.map((step, i) => (
              <div
                key={step.step}
                style={{
                  textAlign: "center",
                  opacity: howReveal.vis ? 1 : 0,
                  transform: howReveal.vis ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 500ms ease ${i * 120}ms, transform 500ms ease ${i * 120}ms`,
                }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: BLUE,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px",
                  position: "relative", zIndex: 1,
                }}>
                  <span style={{ fontFamily: SANS, fontWeight: 700, fontSize: 14, color: "white" }}>
                    {step.step}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: SANS, fontWeight: 600,
                  fontSize: 17, color: DARK, margin: "0 0 10px",
                }}>{step.title}</h3>
                <p style={{
                  fontFamily: SANS, fontWeight: 400,
                  fontSize: 14, color: MUTED,
                  lineHeight: 1.6, margin: 0,
                }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Setup guide ── */}
      <section style={{
        background: BG,
        padding: isMobile
          ? `${SECT_PY_MOB}px 0`
          : `${SECT_PY}px 0`,
      }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", padding: isMobile ? `0 ${PAD_X_MOB}px` : `0 ${PAD_X}px`, boxSizing: "border-box" }}>
          <div
            ref={setupReveal.ref}
            style={{
              textAlign: "center", marginBottom: 56,
              opacity: setupReveal.vis ? 1 : 0,
              transform: setupReveal.vis ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 600ms ease, transform 600ms ease",
            }}
          >
            <div style={{
              display: "inline-block",
              fontFamily: SANS, fontWeight: 500, fontSize: 11,
              letterSpacing: 2, color: BLUE,
              background: "rgba(83,174,243,0.08)",
              border: "1px solid rgba(83,174,243,0.15)",
              padding: "5px 14px", borderRadius: 9999, marginBottom: 20,
            }}>
              SETUP GUIDE
            </div>
            <h2 style={{
              fontFamily: SERIF, fontWeight: 400,
              fontSize: isMobile ? H2_SIZE_MOB : H2_SIZE,
              lineHeight: 1.1, color: DARK,
              margin: "0 auto", maxWidth: 560,
            }}>
              Up and running in
              <br />three steps.
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: CARD_GAP,
          }}>
            {SETUP_STEPS.map((s, i) => (
              <div
                key={s.num}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: CARD_RADIUS,
                  padding: 28,
                  opacity: setupReveal.vis ? 1 : 0,
                  transform: setupReveal.vis ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 500ms ease ${i * 100}ms, transform 500ms ease ${i * 100}ms`,
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "rgba(83,174,243,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16,
                }}>
                  <span style={{ fontFamily: SANS, fontWeight: 700, fontSize: 13, color: BLUE }}>
                    {s.num}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: SANS, fontWeight: 600,
                  fontSize: 16, color: DARK, margin: "0 0 8px",
                }}>{s.title}</h3>
                <p style={{
                  fontFamily: SANS, fontWeight: 400,
                  fontSize: 13.5, color: MUTED,
                  lineHeight: 1.6, margin: "0 0 16px",
                }}>{s.desc}</p>
                <div style={{
                  background: "#F8F8F5",
                  borderRadius: 8,
                  padding: "10px 14px",
                  fontFamily: "'SF Mono', 'Fira Code', monospace",
                  fontSize: 12,
                  color: PURPLE,
                }}>
                  {s.code}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: BG,
        padding: isMobile
          ? `0 ${PAD_X_MOB}px ${SECT_PY_MOB}px`
          : `0 ${PAD_X}px ${SECT_PY}px`,
      }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto" }}>
          <div
            ref={ctaReveal.ref}
            style={{
              background: "linear-gradient(135deg, #0F172A 0%, #1A1035 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: isMobile ? 20 : CTA_RADIUS,
              padding: isMobile
                ? `${CTA_PAD_Y_MOB}px ${CTA_PAD_X_MOB}px`
                : `${CTA_PAD_Y}px ${CTA_PAD_X}px`,
              textAlign: "center",
              position: "relative", overflow: "hidden",
              opacity: ctaReveal.vis ? 1 : 0,
              transform: ctaReveal.vis ? "translateY(0) scale(1)" : "translateY(32px) scale(0.98)",
              transition: "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <div style={{
              position: "absolute", top: -80, left: -80,
              width: 300, height: 300,
              background: "radial-gradient(circle, rgba(107,94,205,0.2) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: -40, right: "10%",
              width: 200, height: 200,
              background: "radial-gradient(circle, rgba(83,174,243,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                display: "inline-block",
                fontFamily: SANS, fontWeight: 500, fontSize: 11,
                letterSpacing: 2, color: BLUE,
                background: "rgba(83,174,243,0.12)",
                border: "1px solid rgba(83,174,243,0.25)",
                padding: "5px 14px", borderRadius: 9999, marginBottom: 20,
              }}>
                GET STARTED FREE
              </div>

              <h2 style={{
                fontFamily: SERIF, fontWeight: 400,
                fontSize: isMobile ? H2_SIZE_MOB : H2_SIZE,
                lineHeight: 1.1, color: "#FFFFFF",
                margin: "0 0 16px",
              }}>
                Your designs deserve
                <br />better than copy-paste.
              </h2>

              <p style={{
                fontFamily: SANS, fontWeight: 300,
                fontSize: 18, color: "rgba(255,255,255,0.55)",
                margin: "0 0 36px", lineHeight: 1.5,
              }}>
                Connect Figma MCP today — free for all Claude Code users.
              </p>

              <div style={{
                display: "flex", justifyContent: "center",
                gap: 12, flexWrap: "wrap",
              }}>
                <a href="#" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: SANS, fontWeight: 500, fontSize: BTN_SIZE,
                  color: "white", background: BLUE,
                  border: "none", borderRadius: BTN_RADIUS,
                  padding: BTN_PAD, textDecoration: "none",
                  cursor: "pointer", whiteSpace: "nowrap",
                }}>
                  Enable Figma MCP →
                </a>
                <a href="#" style={{
                  display: "inline-flex", alignItems: "center",
                  fontFamily: SANS, fontWeight: 400, fontSize: BTN_SIZE,
                  color: "rgba(255,255,255,0.8)",
                  background: "transparent",
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  borderRadius: BTN_RADIUS, padding: BTN_PAD,
                  textDecoration: "none", cursor: "pointer", whiteSpace: "nowrap",
                }}>
                  Read the docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CapabilityCard({ cap, i, vis }: {
  cap: typeof CAPABILITIES[number];
  i: number;
  vis: boolean;
}) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: CARD_RADIUS,
        padding: 28,
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        opacity: vis ? 1 : 0,
        transition: `opacity 500ms cubic-bezier(0.16,1,0.3,1) ${100 + i * 60}ms,
                     transform 300ms ease,
                     box-shadow 300ms ease`,
        cursor: "default",
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        background: cap.badgeBg,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 16, fontSize: 22,
      }}>
        {cap.icon}
      </div>
      <div style={{
        fontFamily: SANS, fontWeight: 600,
        fontSize: 16, color: DARK, marginBottom: 8,
      }}>{cap.title}</div>
      <p style={{
        fontFamily: SANS, fontWeight: 400,
        fontSize: 13.5, color: MUTED,
        lineHeight: 1.6, margin: "0 0 16px",
      }}>{cap.desc}</p>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {cap.tags.map(tag => (
          <span key={tag} style={{
            fontFamily: SANS, fontWeight: 500,
            fontSize: 11, color: cap.iconColor,
            background: cap.badgeBg,
            padding: "3px 10px", borderRadius: 9999,
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
