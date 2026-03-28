const metrics = [
  { label: "Total Visits", value: "16,398", change: "+21%", up: true },
  { label: "Views per Visit", value: "5.33", change: "+9%", up: true },
  { label: "Visit Duration", value: "9m 13s", change: "+12%", up: true },
  { label: "Bounce Rate", value: "42%", change: "−10%", up: false },
  { label: "Revenue", value: "$695", change: "+12%", up: true },
];

// Visitor bars — normalized height values (out of 100)
const visitorBars = [28, 42, 35, 55, 48, 62, 50, 72, 58, 80, 68, 76, 64, 88, 74, 90, 78, 84, 70, 82, 66, 76, 60, 70, 54, 66, 50, 58];
const pageViewBars = [35, 52, 44, 66, 58, 74, 62, 84, 70, 92, 80, 88, 76, 96, 86, 98, 90, 94, 82, 92, 76, 86, 70, 80, 64, 76, 58, 68];

function MiniBar({ values, color = "#3b8dff" }: { values: number[]; color?: string }) {
  return (
    <div className="flex items-end gap-[2px]" style={{ height: 52 }}>
      {values.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-[2px]"
          style={{
            height: `${v}%`,
            backgroundColor: color,
            opacity: 0.55 + (v / 100) * 0.45,
            minWidth: 3,
          }}
        />
      ))}
    </div>
  );
}

const navLinks = [
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor" />
        <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor" />
        <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor" />
        <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" />
      </svg>
    ),
    label: "Dashboard",
    active: true,
  },
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Visitors",
    active: false,
  },
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <path d="M3 12 L6 7 L9 10 L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Funnels",
    active: false,
  },
  {
    icon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 5v4l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Settings",
    active: false,
  },
];

export function DashboardPreview() {
  return (
    <div
      className="w-full rounded-t-2xl overflow-hidden"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "none",
        maxHeight: 420,
      }}
    >
      {/* ── Window Chrome Bar ── */}
      <div
        className="flex items-center gap-3 px-5 py-3 border-b"
        style={{ backgroundColor: "#f7f7f7", borderColor: "#e8e8e8" }}
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-[6px]">
          <div className="w-[11px] h-[11px] rounded-full" style={{ backgroundColor: "#ff5f57" }} />
          <div className="w-[11px] h-[11px] rounded-full" style={{ backgroundColor: "#febc2e" }} />
          <div className="w-[11px] h-[11px] rounded-full" style={{ backgroundColor: "#28c840" }} />
        </div>
        {/* URL bar */}
        <div className="flex-1 flex justify-center">
          <div
            className="flex items-center gap-1.5 px-4 py-1 rounded-md text-xs"
            style={{
              backgroundColor: "#efefef",
              color: "#888",
              border: "1px solid #e0e0e0",
              minWidth: 220,
              maxWidth: 320,
            }}
          >
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
              <path d="M8 1a5 5 0 0 1 5 5v1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 1 5-5zm0 1.5A3.5 3.5 0 0 0 4.5 6v1h7V6A3.5 3.5 0 0 0 8 2.5z" fill="#aaa" />
            </svg>
            app.seline.so/edain.io
          </div>
        </div>
      </div>

      {/* ── App Content ── */}
      <div className="flex" style={{ height: 374 }}>

        {/* ── SIDEBAR ── */}
        <div
          className="flex flex-col flex-shrink-0 py-5"
          style={{ width: 200, backgroundColor: "#fafafa", borderRight: "1px solid #f0f0f0" }}
        >
          {/* Logo mark */}
          <div className="flex items-center gap-2 px-5 mb-6">
            <div
              className="flex items-center justify-center rounded-full"
              style={{ width: 26, height: 26, backgroundColor: "#111" }}
            >
              <svg width="14" height="14" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="12" r="7" fill="white" />
                <rect x="7" y="11" width="14" height="4" rx="2" fill="#111" />
                <circle cx="11" cy="13" r="1" fill="white" />
                <circle cx="17" cy="13" r="1" fill="white" />
                <circle cx="14" cy="6" r="3" fill="#111" />
              </svg>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#111", letterSpacing: "-0.3px" }}>seline</span>
          </div>

          {/* Site selector */}
          <div
            className="flex items-center justify-between mx-4 mb-5 px-3 py-2 rounded-lg cursor-pointer"
            style={{ backgroundColor: "#f0f0f0", border: "1px solid #e4e4e4" }}
          >
            <div className="flex items-center gap-2">
              <div
                className="flex items-center justify-center rounded"
                style={{ width: 18, height: 18, backgroundColor: "#ddeeff" }}
              >
                <span style={{ fontSize: 9, fontWeight: 800, color: "#3b8dff" }}>E</span>
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#222" }}>Edain</span>
            </div>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#888" strokeWidth="1.8" strokeLinecap="round">
              <polyline points="2 4 6 8 10 4" />
            </svg>
          </div>

          {/* Date range label */}
          <div className="flex items-center gap-1.5 px-5 mb-5">
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#aaa" strokeWidth="1.6" strokeLinecap="round">
              <circle cx="8" cy="8" r="6.5" />
              <polyline points="8 4.5 8 8 10.5 10" />
            </svg>
            <span style={{ fontSize: 11, color: "#888" }}>Last 30 days</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-0.5 px-3">
            {navLinks.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 px-3 py-[7px] rounded-lg cursor-pointer transition-all"
                style={{
                  backgroundColor: item.active ? "#3b8dff" : "transparent",
                  color: item.active ? "#ffffff" : "#888",
                  fontSize: 12,
                  fontWeight: item.active ? 600 : 400,
                }}
              >
                <span style={{ opacity: item.active ? 1 : 0.7 }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: "#fff" }}>

          {/* Top header */}
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ borderBottom: "1px solid #f2f2f2" }}
          >
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111", margin: 0, letterSpacing: "-0.3px" }}>
                Dashboard
              </h3>
              <p style={{ fontSize: 11, color: "#aaa", margin: 0, marginTop: 1 }}>edain.io</p>
            </div>
            <div className="flex items-center gap-2">
              {/* Filter button */}
              <button
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5"
                style={{
                  border: "1px solid #e8e8e8",
                  backgroundColor: "#fff",
                  fontSize: 11,
                  color: "#555",
                  cursor: "pointer",
                }}
              >
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M2 4h12M5 8h6M7 12h2" />
                </svg>
                Filter
              </button>
              {/* Date range button */}
              <button
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5"
                style={{
                  border: "1px solid #e8e8e8",
                  backgroundColor: "#fff",
                  fontSize: 11,
                  color: "#333",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <rect x="2" y="3" width="12" height="11" rx="2" />
                  <path d="M5 1v3M11 1v3M2 7h12" />
                </svg>
                Jul 28 – Aug 26
              </button>
            </div>
          </div>

          {/* ── Metric Cards ── */}
          <div className="grid grid-cols-5 gap-3 px-6 pt-4 pb-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl p-3"
                style={{ border: "1px solid #f0f0f0", backgroundColor: "#fafafa" }}
              >
                <p style={{ fontSize: 10, color: "#aaa", marginBottom: 4, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  {m.label}
                </p>
                <p style={{ fontSize: 17, fontWeight: 800, color: "#111", letterSpacing: "-0.5px", marginBottom: 5 }}>
                  {m.value}
                </p>
                <span
                  className="inline-block rounded-full px-1.5 py-0.5"
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: m.up ? "#15803d" : "#dc2626",
                    backgroundColor: m.up ? "#dcfce7" : "#fee2e2",
                  }}
                >
                  {m.change}
                </span>
              </div>
            ))}
          </div>

          {/* ── Charts Row ── */}
          <div className="grid grid-cols-2 gap-3 px-6">
            {/* Unique Visitors chart */}
            <div
              className="rounded-xl p-4"
              style={{ border: "1px solid #f0f0f0", backgroundColor: "#fafafa" }}
            >
              <div className="flex items-start justify-between mb-1">
                <div>
                  <p style={{ fontSize: 10, color: "#aaa", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Unique Visitors
                  </p>
                  <p style={{ fontSize: 16, fontWeight: 800, color: "#111", letterSpacing: "-0.4px", marginTop: 2 }}>
                    12,038
                  </p>
                </div>
                <span
                  className="rounded-full px-1.5 py-0.5"
                  style={{ fontSize: 10, fontWeight: 600, color: "#15803d", backgroundColor: "#dcfce7" }}
                >
                  +18%
                </span>
              </div>
              <MiniBar values={visitorBars} color="#3b8dff" />
            </div>

            {/* Page Views chart */}
            <div
              className="rounded-xl p-4"
              style={{ border: "1px solid #f0f0f0", backgroundColor: "#fafafa" }}
            >
              <div className="flex items-start justify-between mb-1">
                <div>
                  <p style={{ fontSize: 10, color: "#aaa", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Page Views
                  </p>
                  <p style={{ fontSize: 16, fontWeight: 800, color: "#111", letterSpacing: "-0.4px", marginTop: 2 }}>
                    39,746
                  </p>
                </div>
                <span
                  className="rounded-full px-1.5 py-0.5"
                  style={{ fontSize: 10, fontWeight: 600, color: "#15803d", backgroundColor: "#dcfce7" }}
                >
                  +22%
                </span>
              </div>
              <MiniBar values={pageViewBars} color="#3b8dff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}