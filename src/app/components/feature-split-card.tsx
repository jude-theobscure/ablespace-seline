import React from "react";
import { useIsMobile } from "./shared";
import { Btn3D } from "./btn-3d";
import { T } from "../styles/typography";

const BG   = "#F8F8F5";
const BLUE = "#53AEF3";

export interface FeatureSplitCardProps {
  img: string;
  title: string;
  desc: string;
  bullets: string[];
  imagePosition?: "left" | "right";
  revealStyle?: React.CSSProperties;
}

export function FeatureSplitCard({ img, title, desc, bullets, imagePosition = "left", revealStyle }: FeatureSplitCardProps) {
  const isMobile = useIsMobile();
  const imgLeft = imagePosition === "left";

  return (
    <div style={revealStyle}>
      <div style={{
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: 28,
        overflow: "hidden",
        minHeight: isMobile ? "auto" : 480,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      }}>
        {/* Image panel */}
        <div style={{
          background: BG,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 32, overflow: "hidden",
          borderRight: (!isMobile && imgLeft) ? "1px solid rgba(0,0,0,0.06)" : "none",
          borderLeft: (!isMobile && !imgLeft) ? "1px solid rgba(0,0,0,0.06)" : "none",
          borderBottom: isMobile ? "1px solid rgba(0,0,0,0.06)" : "none",
          order: isMobile ? 1 : (imgLeft ? 0 : 1),
        }}>
          <img
            src={img}
            alt={title}
            style={{ maxWidth: "100%", maxHeight: 380, objectFit: "contain", borderRadius: 10 }}
          />
        </div>

        {/* Text panel */}
        <div style={{
          padding: isMobile ? "32px 24px" : "56px 48px",
          display: "flex", flexDirection: "column", justifyContent: "center",
          order: isMobile ? 0 : (imgLeft ? 1 : 0),
        }}>
          <h3 style={{ ...T.h3(isMobile), margin: "0 0 12px" }}>{title}</h3>
          <p style={{ ...T.body(), maxWidth: 340, margin: "0 0 20px" }}>{desc}</p>
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
    </div>
  );
}
