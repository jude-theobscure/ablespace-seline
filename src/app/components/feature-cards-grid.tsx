import React from "react";
import { useIsMobile } from "./shared";
import { CARD_RADIUS } from "../pages/page-layout";
import { T } from "../styles/typography";

const SANS = "'DM Sans', system-ui, sans-serif";
const DARK = "#1A1A1E";

export interface FeatureCard {
  img: string;
  label: string;
  title: string;
  desc: string;
  cta: string;
}

interface FeatureCardsGridProps {
  cards: FeatureCard[];
  revealStyle?: React.CSSProperties;
}

export function FeatureCardsGrid({ cards, revealStyle }: FeatureCardsGridProps) {
  const isMobile = useIsMobile();

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
      gap: 20,
      ...revealStyle,
      transitionDelay: "120ms",
    }}>
      {cards.map(card => (
        <div key={card.label} style={{
          background: "#fff",
          border: "1px solid rgba(0,0,0,0.07)",
          borderRadius: CARD_RADIUS,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}>
          <div style={{ height: 400, overflow: "hidden", flexShrink: 0, borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
            {card.img ? (
              <img
                src={card.img}
                alt={card.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
              />
            ) : (
              <div style={{ width: "100%", height: "100%", background: "#EEECEA", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: SANS, fontSize: 13, color: "#A0A0A0" }}>{card.label}</span>
              </div>
            )}
          </div>
          <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
            <span style={{
              ...T.label(), fontSize: 10,
              display: "inline-block",
              marginBottom: 10,
            }}>
              {card.label}
            </span>
            <h4 style={{ ...T.h4(), margin: "0 0 8px" }}>
              {card.title}
            </h4>
            <p style={{ ...T.bodySm(), margin: "0 0 16px", flex: 1 }}>
              {card.desc}
            </p>
            <a href="#" style={{
              alignSelf: "flex-start",
              display: "inline-flex", alignItems: "center", gap: 4,
              fontFamily: SANS, fontWeight: 500, fontSize: 13,
              color: DARK,
              background: "rgba(0,0,0,0.04)",
              border: "1px solid rgba(0,0,0,0.10)",
              borderRadius: 9999,
              padding: "6px 14px",
              textDecoration: "none", cursor: "pointer",
            }}>
              {card.cta} <span style={{ opacity: 0.5, fontSize: 11 }}>→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
