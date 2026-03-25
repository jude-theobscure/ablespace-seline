/* AbleSpace dashboard mockup — teal chrome, fade-to-white overlay */

const DM = "'DM Sans', system-ui, sans-serif";
const TEAL = "#0DB8A0";

const metrics = [
  { label: "Total Students",   value: "248",   change: "+12%", up: true },
  { label: "Active IEPs",      value: "186",   change: "+8%",  up: true },
  { label: "Goals on Track",   value: "74%",   change: "+6%",  up: true },
  { label: "Upcoming Reviews", value: "23",    change: "+5%",  up: true },
  { label: "Services Logged",  value: "1,432", change: "+18%", up: true },
];

const goalBars    = [38,52,44,60,55,70,58,76,64,84,70,80,66,90,76,94,80,88,74,86,68,78,62,74,56,68,50,62];
const serviceBars = [28,44,36,56,48,64,52,72,60,82,68,78,62,88,74,92,78,86,70,84,64,76,58,70,52,64,46,58];

function MiniBar({ values, color = TEAL }: { values: number[]; color?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 52 }}>
      {values.map((v, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: `${v}%`,
            backgroundColor: color,
            opacity: 0.40 + (v / 100) * 0.58,
            borderRadius: 2,
            minWidth: 3,
          }}
        />
      ))}
    </div>
  );
}

const navLinks = [
  {
    label: "Dashboard",
    active: true,
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor" />
        <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor" />
        <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor" />
        <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Students",
    active: false,
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "IEP Goals",
    active: false,
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Services",
    active: false,
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <rect x="4" y="1" width="8" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 5h4M6 8h4M6 11h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Settings",
    active: false,
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 5v4l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function AbleSpaceDashboard() {
  return (
    /* Outer wrapper: clips the card and holds the fade overlay */
    <div style={{ position: "relative", width: "100%" }}>
      {/* The card itself */}
      <div
        style={{
          width: "100%",
          borderRadius: 20,
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow:
            "0 24px 80px rgba(13,184,160,0.08), 0 4px 24px rgba(0,0,0,0.06)",
          overflow: "hidden",
          background: "#ffffff",
          fontFamily: DM,
        }}
      >
        {/* ── Window Chrome — teal-tinted top bar ── */}
        <div
          style={{
            height: 44,
            background: "#F5FFFE",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Traffic lights */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: 16 }}>
            <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#FF5F57" }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#FEBC2E" }} />
            <div style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#28C840" }} />
          </div>

          {/* URL bar — centered absolutely */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(0,0,0,0.05)",
              borderRadius: 9999,
              padding: "4px 16px",
              width: 200,
              textAlign: "center",
              fontSize: 13,
              color: "#6E6E73",
              fontFamily: DM,
              letterSpacing: "-0.1px",
            }}
          >
            app.ablespace.io
          </div>
        </div>

        {/* ── App body ── */}
        <div style={{ display: "flex", height: 370 }}>

          {/* ── SIDEBAR ── */}
          <div
            style={{
              width: 210,
              flexShrink: 0,
              backgroundColor: "#fafafa",
              borderRight: "1px solid #f0f0f0",
              display: "flex",
              flexDirection: "column",
              padding: "20px 0",
            }}
          >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 20px", marginBottom: 20 }}>
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 8,
                  backgroundColor: TEAL,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M7 18L12 7L17 18" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.5 14.5h5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#111", letterSpacing: "-0.3px" }}>AbleSpace</span>
            </div>

            {/* School selector */}
            <div
              style={{
                margin: "0 12px 16px",
                padding: "7px 10px",
                borderRadius: 8,
                backgroundColor: "#efefef",
                border: "1px solid #e4e4e4",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 4,
                    backgroundColor: "#D0F5F0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: 9, fontWeight: 700, color: TEAL }}>R</span>
                </div>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: "#222" }}>Riverside USD</span>
              </div>
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#888" strokeWidth="1.8" strokeLinecap="round">
                <polyline points="2 4 6 8 10 4" />
              </svg>
            </div>

            {/* Date label */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "0 20px", marginBottom: 16 }}>
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#bbb" strokeWidth="1.6" strokeLinecap="round">
                <rect x="2" y="3" width="12" height="11" rx="2" />
                <path d="M5 1v3M11 1v3M2 7h12" />
              </svg>
              <span style={{ fontSize: 11, color: "#aaa" }}>2024–25 School Year</span>
            </div>

            {/* Nav */}
            <div style={{ display: "flex", flexDirection: "column", gap: 2, padding: "0 10px" }}>
              {navLinks.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "7px 10px",
                    borderRadius: 8,
                    backgroundColor: item.active ? TEAL : "transparent",
                    color: item.active ? "#fff" : "#999",
                    fontSize: 12,
                    fontWeight: item.active ? 600 : 400,
                    cursor: "pointer",
                  }}
                >
                  <span style={{ opacity: item.active ? 1 : 0.7 }}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* ── MAIN CONTENT ── */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", backgroundColor: "#fff" }}>

            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 24px",
                borderBottom: "1px solid #f2f2f2",
              }}
            >
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111", margin: 0, letterSpacing: "-0.3px", fontFamily: DM }}>
                  Dashboard
                </h3>
                <p style={{ fontSize: 11, color: "#aaa", margin: 0, marginTop: 1, fontFamily: DM }}>
                  Riverside Unified School District
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <button
                  style={{
                    display: "flex", alignItems: "center", gap: 5,
                    borderRadius: 8, padding: "5px 10px",
                    border: "1px solid #e8e8e8", background: "#fff",
                    fontSize: 11, color: "#555", cursor: "pointer", fontFamily: DM,
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M2 4h12M5 8h6M7 12h2" />
                  </svg>
                  Filter
                </button>
                <button
                  style={{
                    display: "flex", alignItems: "center", gap: 5,
                    borderRadius: 8, padding: "5px 10px",
                    border: "1px solid #e8e8e8", background: "#fff",
                    fontSize: 11, color: "#333", fontWeight: 500, cursor: "pointer", fontFamily: DM,
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <rect x="2" y="3" width="12" height="11" rx="2" />
                    <path d="M5 1v3M11 1v3M2 7h12" />
                  </svg>
                  Sep 2 – Dec 20, 2024
                </button>
              </div>
            </div>

            {/* Stat cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5,1fr)",
                gap: 10,
                padding: "14px 20px 10px",
              }}
            >
              {metrics.map((m) => (
                <div
                  key={m.label}
                  style={{
                    borderRadius: 12,
                    padding: "10px 12px",
                    border: "1px solid #f0f0f0",
                    backgroundColor: "#fafafa",
                  }}
                >
                  <p style={{ fontSize: 9.5, color: "#aaa", marginBottom: 4, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: DM }}>
                    {m.label}
                  </p>
                  <p style={{ fontSize: 17, fontWeight: 700, color: "#111", letterSpacing: "-0.5px", marginBottom: 5, fontFamily: DM }}>
                    {m.value}
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      borderRadius: 9999,
                      padding: "1px 6px",
                      fontSize: 10,
                      fontWeight: 600,
                      color: "#0a7c5c",
                      backgroundColor: "#d1faf1",
                      fontFamily: DM,
                    }}
                  >
                    {m.change}
                  </span>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, padding: "0 20px" }}>
              {[
                { label: "Goal Progress", value: "138 / 186", change: "+6%", bars: goalBars, color: TEAL },
                { label: "Services This Month", value: "312", change: "+18%", bars: serviceBars, color: "#3b6ef5" },
              ].map((chart) => (
                <div
                  key={chart.label}
                  style={{
                    borderRadius: 12,
                    padding: "12px 14px",
                    border: "1px solid #f0f0f0",
                    backgroundColor: "#fafafa",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 6 }}>
                    <div>
                      <p style={{ fontSize: 9.5, color: "#aaa", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: DM }}>
                        {chart.label}
                      </p>
                      <p style={{ fontSize: 16, fontWeight: 700, color: "#111", letterSpacing: "-0.4px", marginTop: 2, fontFamily: DM }}>
                        {chart.value}
                      </p>
                    </div>
                    <span
                      style={{
                        borderRadius: 9999,
                        padding: "1px 6px",
                        fontSize: 10,
                        fontWeight: 600,
                        color: "#0a7c5c",
                        backgroundColor: "#d1faf1",
                        fontFamily: DM,
                      }}
                    >
                      {chart.change}
                    </span>
                  </div>
                  <MiniBar values={chart.bars} color={chart.color} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Fade overlay — bottom edge dissolves into #FAFAF8 ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "42%",
          background: "linear-gradient(to bottom, transparent 0%, #FAFAF8 100%)",
          pointerEvents: "none",
          borderRadius: "0 0 20px 20px",
        }}
      />
    </div>
  );
}
