import { useState } from "react";

const SANS = "'DM Sans', system-ui, sans-serif";
const BLUE = "#53AEF3";
const DARK = "#1A1A1E";

interface Btn3DProps {
  label?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
}

export function Btn3D({ label, children, variant = "primary", href = "#", onClick }: Btn3DProps) {
  const [hov, setHov] = useState(false);
  const [press, setPress] = useState(false);

  const isPrimary = variant === "primary";

  const style: React.CSSProperties = {
    minWidth: 148,
    maxWidth: 148,
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    fontFamily: SANS,
    fontWeight: isPrimary ? 500 : 400,
    fontSize: 14,
    color: isPrimary ? "#fff" : DARK,
    background: isPrimary
      ? hov ? "#3D9FE8" : BLUE
      : hov ? "rgba(0,0,0,0.04)" : "#fff",
    border: isPrimary ? "none" : "1.5px solid rgba(0,0,0,0.15)",
    borderRadius: 8,
    padding: "8px 20px",
    textDecoration: "none",
    cursor: "pointer",
    gap: 2,
    boxSizing: "border-box",
    boxShadow: isPrimary
      ? press ? "0 1px 0 #1E82C8" : "0 4px 0 #1E82C8"
      : press ? "0 1px 0 rgba(0,0,0,0.15)" : "0 4px 0 rgba(0,0,0,0.15)",
    transform: press ? "translateY(3px)" : "translateY(0)",
    transition: "background 0.15s, transform 80ms ease, box-shadow 80ms ease",
  };

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setHov(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={style}
    >
      {label && (
        <span style={{ fontSize: 10, fontWeight: 400, opacity: isPrimary ? 0.8 : 0.5, lineHeight: 1 }}>
          {label}
        </span>
      )}
      <span>{children}</span>
    </a>
  );
}
