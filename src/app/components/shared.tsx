import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   Shared design tokens — single source of truth for the page
───────────────────────────────────────────────────────────── */
export const SERIF = "'Instrument Serif', serif";
export const SANS  = "'DM Sans', system-ui, sans-serif";
export const DARK  = "#1A1A1E";
export const BLUE  = "#53AEF3";
export const MUTED = "#6E6E73";
export const BG    = "#F8F8F5";
export const TINT  = "#EFEFED";

/* ─────────────────────────────────────────────────────────────
   useIsMobile — returns true when viewport < breakpoint
───────────────────────────────────────────────────────────── */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", fn, { passive: true });
    return () => window.removeEventListener("resize", fn);
  }, [breakpoint]);
  return isMobile;
}

/* ─────────────────────────────────────────────────────────────
   SectionWrapper — consistent max-width + responsive padding
───────────────────────────────────────────────────────────── */
export function SectionWrapper({
  children,
  isMobile,
  style,
}: {
  children: React.ReactNode;
  isMobile: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{
      maxWidth: 1200, margin: "0 auto",
      padding: isMobile ? "0 20px" : "0 80px",
      boxSizing: "border-box",
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SectionLabel — small uppercase blue label
───────────────────────────────────────────────────────────── */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: SANS, fontWeight: 500, fontSize: 12,
      color: BLUE, letterSpacing: "2px", textTransform: "uppercase",
      margin: "0 0 14px",
    }}>
      {children}
    </p>
  );
}

/* ─────────────────────────────────────────────────────────────
   SectionHeading — consistent h2 (centered by default)
───────────────────────────────────────────────────────────── */
export function SectionHeading({
  children,
  isMobile,
  align = "center",
  style,
}: {
  children: React.ReactNode;
  isMobile: boolean;
  align?: "center" | "left";
  style?: React.CSSProperties;
}) {
  return (
    <h2 style={{
      fontFamily: SERIF, fontWeight: 400,
      fontSize: isMobile ? 34 : 48,
      lineHeight: 1.1, color: DARK,
      margin: "0 0 16px",
      textAlign: align,
      ...style,
    }}>
      {children}
    </h2>
  );
}

/* ─────────────────────────────────────────────────────────────
   SectionSubtext — body copy under a heading
───────────────────────────────────────────────────────────── */
export function SectionSubtext({
  children,
  align = "center",
  maxWidth = 520,
  style,
}: {
  children: React.ReactNode;
  align?: "center" | "left";
  maxWidth?: number;
  style?: React.CSSProperties;
}) {
  return (
    <p style={{
      fontFamily: SANS, fontWeight: 300, fontSize: 17,
      color: MUTED, margin: "0 auto", lineHeight: 1.6,
      maxWidth: align === "center" ? maxWidth : "100%",
      textAlign: align,
      ...style,
    }}>
      {children}
    </p>
  );
}
