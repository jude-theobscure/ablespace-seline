import React from "react";
import { useIsMobile } from "./shared";
import { CARD_RADIUS } from "../pages/page-layout";
import { Btn3D } from "./btn-3d";
import { T } from "../styles/typography";

const BLUE = "#53AEF3";

export interface FeatureRowProps {
  img: string;
  title: string;
  desc: string;
  bullets: string[];
  flip?: boolean;
  revealStyle?: React.CSSProperties;
}

export function FeatureRow({ img, title, desc, bullets, flip = false, revealStyle }: FeatureRowProps) {
  const isMobile = useIsMobile();

  return (
    <div style={{
      display: "flex",
      flexDirection: isMobile ? "column" : flip ? "row-reverse" : "row",
      alignItems: "center",
      gap: isMobile ? 32 : 72,
      ...revealStyle,
    }}>
      <div style={{
        flex: "0 0 40%",
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: CARD_RADIUS,
        overflow: "hidden",
      }}>
        <img src={img} alt={title} style={{ width: "100%", display: "block", objectFit: "cover" }} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3 style={{ ...T.h3(isMobile), margin: "0 0 12px" }}>{title}</h3>
        <p style={{ ...T.body(), margin: "0 0 20px" }}>{desc}</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
          {bullets.map(b => (
            <li key={b} style={{ ...T.bullet(), display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
              <span style={{ color: BLUE, fontWeight: 600, flexShrink: 0, marginTop: 1 }}>✓</span>{b}
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", gap: 10 }}>
          <Btn3D label="Educators" variant="primary">Sign up for free</Btn3D>
          <Btn3D label="Admins" variant="ghost">Learn More</Btn3D>
        </div>
      </div>
    </div>
  );
}
