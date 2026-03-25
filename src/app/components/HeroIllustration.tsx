import React from "react";

/* ─── Card definitions ──────────────────────────────────────── */
const CARDS = [
  {
    label: ["IEP Goal", "Tracking"],
    color: "#0abfbc",
    bg: "#d6f7f6",
    left: 12,
    top: 118,
    rotate: -22,
  },
  {
    label: ["AI-Powered"],
    color: "#3b6ef5",
    bg: "#e4ecff",
    left: 122,
    top: 55,
    rotate: -11,
  },
  {
    label: ["Worksheets"],
    color: "#f59e0b",
    bg: "#fff3d0",
    left: 230,
    top: 18,
    rotate: 0,
  },
  {
    label: ["Track", "Services"],
    color: "#10b981",
    bg: "#d2f6e8",
    left: 338,
    top: 55,
    rotate: 11,
  },
  {
    label: ["Collaborate"],
    color: "#8b5cf6",
    bg: "#ede9ff",
    left: 448,
    top: 118,
    rotate: 22,
  },
] as const;

/* ─── Per-card icons ────────────────────────────────────────── */
function CardIcon({ index, color }: { index: number; color: string }) {
  const s = { stroke: color, strokeWidth: "1.8", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
  if (index === 0)
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" {...s} />
        <circle cx="12" cy="12" r="4.5" {...s} />
        <circle cx="12" cy="12" r="1.8" fill={color} />
      </svg>
    );
  if (index === 1)
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 3H5a1 1 0 00-1 1v4M9 3h10a1 1 0 011 1v4M9 3V1m0 2v18m0 0H5a1 1 0 01-1-1v-4m5 5h10a1 1 0 001-1v-4M4 8h16M4 16h16" {...s} />
      </svg>
    );
  if (index === 2)
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" {...s} />
        <path d="M14 2v6h6M8 13h8M8 17h5" {...s} />
      </svg>
    );
  if (index === 3)
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 20V10M12 20V4M6 20v-6" {...s} />
      </svg>
    );
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" {...s} />
      <circle cx="9" cy="7" r="4" {...s} />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" {...s} />
    </svg>
  );
}

/* ─── Main component ────────────────────────────────────────── */
export function HeroIllustration() {
  return (
    /*
      Container is 550×290. The outermost cards rotate 22° but
      transformOrigin is center so they extend slightly outside
      this box — we allow overflow:visible so they're not clipped.
    */
    <div
      style={{
        position: "relative",
        width: 550,
        height: 290,
        flexShrink: 0,
        /* cards allowed to bleed slightly beyond the box */
        overflow: "visible",
      }}
    >
      {CARDS.map((card, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: card.left,
            top: card.top,
            width: 90,
            height: 118,
            background: "#ffffff",
            borderRadius: 16,
            boxShadow:
              "0 10px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05)",
            border: "1px solid rgba(0,0,0,0.045)",
            transform: `rotate(${card.rotate}deg)`,
            transformOrigin: "center center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "14px 8px 12px",
            gap: 9,
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          {/* Icon circle */}
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: "50%",
              backgroundColor: card.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <CardIcon index={i} color={card.color} />
          </div>

          {/* Label */}
          <div
            style={{
              fontSize: 10.5,
              fontWeight: 700,
              color: "#252525",
              textAlign: "center",
              lineHeight: 1.35,
              letterSpacing: "-0.1px",
            }}
          >
            {card.label.map((line, j) => (
              <div key={j}>{line}</div>
            ))}
          </div>

          {/* Small color dot at bottom */}
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: card.color,
              opacity: 0.7,
              marginTop: "auto",
            }}
          />
        </div>
      ))}

      {/* Faint arc connector line behind the cards */}
      <svg
        width="550"
        height="290"
        viewBox="0 0 550 290"
        fill="none"
        style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
      >
        <path
          d="M57 228 Q145 110 275 68 Q405 110 493 228"
          stroke="rgba(10,191,188,0.12)"
          strokeWidth="2"
          strokeDasharray="5 6"
          fill="none"
        />
        {/* Tiny dot at each card center on the arc */}
        {[
          [57, 228], [145, 114], [275, 73], [405, 114], [493, 228],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="#0abfbc" opacity="0.18" />
        ))}
      </svg>
    </div>
  );
}
