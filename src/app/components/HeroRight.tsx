/**
 * HeroRight — the right-column illustration for the AbleSpace hero.
 * Mimics Seline's right-side dashboard peek:
 *   • Three overlapping feature cards with subtle rotation
 *   • The NinjaMascot sitting in the bottom-right corner
 */
import React from "react";
import { NinjaMascot } from "./NinjaMascot";

const TEAL  = "#0DB8A0";
const BLUE  = "#3b6ef5";
const AMBER = "#f59e0b";
const CARD_SHADOW = "0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)";

/* ── Mini bar chart ──────────────────────────────────────── */
const goalBars = [38,52,44,60,55,70,58,76,64,84,70,80,66,90,76,94,80,88,74,86];
function MiniBar({ values, color }: { values: number[]; color: string }) {
  return (
    <div style={{ display:"flex", alignItems:"flex-end", gap:2, height:36, marginTop:8 }}>
      {values.map((v,i) => (
        <div key={i} style={{
          flex:1, height:`${v}%`,
          backgroundColor: color,
          opacity: 0.35 + (v/100)*0.60,
          borderRadius:2, minWidth:2,
        }} />
      ))}
    </div>
  );
}

/* ── Single feature card ─────────────────────────────────── */
interface CardProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
}
function Card({ style, children }: CardProps) {
  return (
    <div style={{
      position:"absolute",
      background:"#fff",
      borderRadius:16,
      border:"1px solid rgba(0,0,0,0.07)",
      boxShadow: CARD_SHADOW,
      padding:"16px 18px",
      fontFamily:"'DM Sans', system-ui, sans-serif",
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ── Main export ─────────────────────────────────────────── */
export function HeroRight() {
  return (
    <div style={{
      position:"relative",
      width:"100%",
      height:520,
      flexShrink:0,
    }}>

      {/* ── Card 1: IEP Goal Progress ── */}
      <Card style={{
        top:0, left:0, width:220,
        transform:"rotate(-3deg)",
        zIndex:2,
      }}>
        {/* Header row */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10 }}>
          <div>
            <div style={{ fontSize:10, fontWeight:500, color:"#aaa", textTransform:"uppercase", letterSpacing:"0.08em" }}>
              IEP Goal Progress
            </div>
            <div style={{ fontSize:22, fontWeight:700, color:"#1A1A1E", letterSpacing:"-0.5px", marginTop:2 }}>
              74%
            </div>
          </div>
          <span style={{
            background:"#d1faf1", color:"#0a7c5c",
            fontSize:11, fontWeight:600,
            borderRadius:9999, padding:"2px 8px",
          }}>+6%</span>
        </div>
        <MiniBar values={goalBars} color={TEAL} />
        {/* Progress bar */}
        <div style={{ marginTop:10, height:4, borderRadius:99, background:"#f0f0f0" }}>
          <div style={{ width:"74%", height:"100%", borderRadius:99, background:TEAL }} />
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", marginTop:4 }}>
          <span style={{ fontSize:9.5, color:"#bbb" }}>138 / 186 goals</span>
          <span style={{ fontSize:9.5, color:TEAL, fontWeight:600 }}>On track</span>
        </div>
      </Card>

      {/* ── Card 2: Active IEPs ── */}
      <Card style={{
        top:30, right:8, width:196,
        transform:"rotate(2.5deg)",
        zIndex:3,
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
          <div style={{
            width:36, height:36, borderRadius:10,
            background:"#E0F7F4",
            display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="8" cy="7" r="4" stroke={TEAL} strokeWidth="1.8"/>
              <path d="M2 21v-2a4 4 0 014-4h4" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M17 11v6m3-3h-6" stroke={TEAL} strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize:10, color:"#aaa", fontWeight:500, textTransform:"uppercase", letterSpacing:"0.07em" }}>Active IEPs</div>
            <div style={{ fontSize:22, fontWeight:700, color:"#1A1A1E", letterSpacing:"-0.5px" }}>186</div>
          </div>
        </div>
        {/* Mini student rows */}
        {["Marcus T.", "Aiden R.", "Sofia L."].map((name, i) => (
          <div key={name} style={{
            display:"flex", alignItems:"center", justifyContent:"space-between",
            padding:"5px 0",
            borderTop: i===0 ? "1px solid #f4f4f4" : "none",
          }}>
            <div style={{ display:"flex", alignItems:"center", gap:7 }}>
              <div style={{
                width:20, height:20, borderRadius:"50%",
                background: [TEAL, BLUE, AMBER][i],
                opacity:0.8,
                display:"flex", alignItems:"center", justifyContent:"center",
              }}>
                <span style={{ fontSize:9, color:"#fff", fontWeight:700 }}>{name[0]}</span>
              </div>
              <span style={{ fontSize:11, color:"#555" }}>{name}</span>
            </div>
            <span style={{
              fontSize:9.5, fontWeight:600,
              color:"#0a7c5c", background:"#d1faf1",
              borderRadius:99, padding:"1px 6px",
            }}>Active</span>
          </div>
        ))}
      </Card>

      {/* ── Card 3: Upcoming Reviews ── */}
      <Card style={{
        top:210, left:24, width:200,
        transform:"rotate(-1.5deg)",
        zIndex:4,
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:9, marginBottom:12 }}>
          <div style={{
            width:34, height:34, borderRadius:9,
            background:"#fff3d0",
            display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
          }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="17" rx="3" stroke={AMBER} strokeWidth="1.8"/>
              <path d="M7 2v3M17 2v3M3 10h18" stroke={AMBER} strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="8" cy="15" r="1.2" fill={AMBER}/>
              <circle cx="12" cy="15" r="1.2" fill={AMBER}/>
              <circle cx="16" cy="15" r="1.2" fill={AMBER}/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize:10, color:"#aaa", fontWeight:500, textTransform:"uppercase", letterSpacing:"0.07em" }}>Reviews Due</div>
            <div style={{ fontSize:22, fontWeight:700, color:"#1A1A1E", letterSpacing:"-0.5px" }}>23</div>
          </div>
        </div>
        {[
          { name:"Emma K.", date:"Dec 14", urgent:true },
          { name:"Liam P.", date:"Dec 17", urgent:false },
          { name:"Zoe M.", date:"Dec 20", urgent:false },
        ].map((row) => (
          <div key={row.name} style={{
            display:"flex", alignItems:"center", justifyContent:"space-between",
            padding:"4px 0",
            borderBottom:"1px solid #f6f6f6",
          }}>
            <span style={{ fontSize:11, color:"#444" }}>{row.name}</span>
            <span style={{
              fontSize:9.5, fontWeight:600,
              color: row.urgent ? "#b45309" : "#aaa",
              background: row.urgent ? "#fef3c7" : "#f4f4f4",
              borderRadius:99, padding:"1px 7px",
            }}>{row.date}</span>
          </div>
        ))}
      </Card>

      {/* ── Card 4: Services Logged ── */}
      <Card style={{
        top:230, right:0, width:172,
        transform:"rotate(3deg)",
        zIndex:3,
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <div style={{
            width:32, height:32, borderRadius:8,
            background:"#ede9ff",
            display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round"/>
              <rect x="9" y="3" width="6" height="4" rx="1" stroke="#8b5cf6" strokeWidth="1.8"/>
              <path d="M9 12h6M9 16h4" stroke="#8b5cf6" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize:10, color:"#aaa", fontWeight:500, textTransform:"uppercase", letterSpacing:"0.07em" }}>Services</div>
            <div style={{ fontSize:20, fontWeight:700, color:"#1A1A1E", letterSpacing:"-0.5px" }}>1,432</div>
          </div>
        </div>
        <div style={{
          marginTop:10, display:"flex", alignItems:"center",
          gap:6, padding:"6px 8px",
          background:"#f5f3ff", borderRadius:8,
        }}>
          <div style={{ width:6, height:6, borderRadius:"50%", background:"#8b5cf6", flexShrink:0 }} />
          <span style={{ fontSize:10.5, color:"#6d28d9" }}>+18% this month</span>
        </div>
      </Card>

      {/* ── Mascot — bottom right, leaning ── */}
      <div style={{
        position:"absolute",
        bottom:-8,
        right:4,
        transform:"rotate(-5deg)",
        transformOrigin:"bottom center",
        zIndex:5,
      }}>
        <NinjaMascot />
      </div>

      {/* ── Soft radial glow behind cards ── */}
      <div style={{
        position:"absolute",
        top:"50%", left:"50%",
        transform:"translate(-50%, -50%)",
        width:340, height:340,
        background:"radial-gradient(circle, rgba(13,184,160,0.07) 0%, transparent 70%)",
        pointerEvents:"none",
        zIndex:0,
      }} />
    </div>
  );
}
