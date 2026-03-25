export function NinjaMascot() {
  return (
    <div
      className="select-none"
      style={{ width: 164, height: 200, flexShrink: 0 }}
    >
      {/*
        ViewBox 0 0 230 290 → rendered at 164×200
        The overall CSS rotation (-6deg) on the parent gives the lean.
        Internally the torso is drawn shifted/tilted for extra slouch.
      */}
      <svg
        width="164"
        height="200"
        viewBox="0 0 230 290"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── GROUND SHADOW ── */}
        <ellipse cx="118" cy="284" rx="66" ry="7" fill="rgba(0,0,0,0.06)" />

        {/* ══════════════════════════════════════════════════ */}
        {/*  BODY — cloak, slouched/leaning left               */}
        {/* ══════════════════════════════════════════════════ */}

        {/* Main cloak — shifted & slightly asymmetric for slouch */}
        <path
          d="M32 165 Q18 210 22 258 Q24 274 62 278 Q115 284 168 278 Q200 272 202 255 Q208 208 194 163 Q166 146 112 144 Q62 145 32 165 Z"
          fill="#111111"
        />

        {/* Cloak inner depth — slightly off-center for lean */}
        <path d="M92 152 Q86 204 80 278" stroke="#0a0a0a" strokeWidth="2.5" fill="none" />
        <path d="M132 150 Q140 202 146 278" stroke="#0a0a0a" strokeWidth="2.5" fill="none" />
        {/* Center crease — shifted left for slouch */}
        <path d="M108 144 L104 280" stroke="#1a1a1a" strokeWidth="1.2" fill="none" opacity="0.4" />

        {/* Cloak hem */}
        <path
          d="M22 260 Q60 284 115 282 Q168 284 202 260"
          stroke="#0d0d0d"
          strokeWidth="2"
          fill="none"
        />

        {/* ── SITTING LEGS (cross-legged, leaning left) ── */}
        {/* Left knee — lower/further since we're leaning */}
        <path
          d="M24 242 Q6 252 10 272 Q14 282 46 280 Q78 278 94 268 L86 256 Q64 264 40 257 Z"
          fill="#111111"
        />
        {/* Right knee */}
        <path
          d="M198 238 Q218 248 215 268 Q210 280 178 278 Q150 276 135 266 L142 254 Q162 262 184 255 Z"
          fill="#0e0e0e"
        />
        {/* Left foot */}
        <ellipse cx="28" cy="274" rx="20" ry="9" fill="#111111" />
        {/* Right foot */}
        <ellipse cx="196" cy="272" rx="19" ry="8" fill="#0e0e0e" />

        {/* ── SLEEVES — left arm droops more (slouch) ── */}
        {/* Left sleeve (heavier drape, slouching side) */}
        <path
          d="M32 172 Q6 194 4 224 Q2 238 20 240 Q36 242 46 225 L54 208 Q34 216 30 203 Q28 190 40 178 Z"
          fill="#111111"
        />
        <ellipse cx="14" cy="232" rx="13" ry="10" fill="#111111" />

        {/* Right sleeve */}
        <path
          d="M192 168 Q218 186 220 214 Q222 228 206 232 Q192 234 182 218 L174 202 Q194 208 196 196 Q198 184 186 174 Z"
          fill="#111111"
        />
        <ellipse cx="210" cy="226" rx="12" ry="9" fill="#0e0e0e" />

        {/* ══════════════════════════════════════════════════ */}
        {/*  WHITE BADGE / TAG on chest                        */}
        {/* ══════════════════════════════════════════════════ */}
        {/* Badge slightly offset-left matching the slouch */}
        <rect x="90" y="164" width="32" height="22" rx="4" fill="white" />
        <rect x="91.5" y="165.5" width="29" height="19" rx="3" fill="#f9f9f9" stroke="#e4e4e4" strokeWidth="0.8" />
        <circle cx="106" cy="164" r="2" fill="#ddd" />
        <circle cx="106" cy="164" r="1" fill="#ccc" />
        {/* Badge lines */}
        <rect x="95" y="170" width="20" height="2" rx="1" fill="#e0e0e0" />
        <rect x="95" y="174" width="14" height="1.5" rx="0.75" fill="#e8e8e8" />
        <rect x="95" y="177.5" width="17" height="1.5" rx="0.75" fill="#e8e8e8" />

        {/* ══════════════════════════════════════════════════ */}
        {/*  HOOD — black cowl                                 */}
        {/* ══════════════════════════════════════════════════ */}

        {/* Hood back — slightly shifted left for slouch */}
        <ellipse cx="112" cy="90" rx="66" ry="70" fill="#111111" />

        {/* Hood peak — tilted right-ish (opposite lean direction, natural) */}
        <path
          d="M128 32 Q148 16 150 38 Q146 52 136 58 Q126 58 120 50 Q116 42 128 32 Z"
          fill="#111111"
        />
        <path
          d="M133 34 Q146 22 147 40 Q144 50 136 55"
          stroke="#1a1a1a"
          strokeWidth="1.8"
          fill="none"
        />

        {/* Hood side drapes */}
        {/* Left drape (heavier — slouch side) */}
        <path
          d="M48 84 Q34 112 36 144 Q38 164 66 172 Q78 156 76 136 Q74 110 82 88 Z"
          fill="#111111"
        />
        {/* Right drape */}
        <path
          d="M176 84 Q190 110 188 142 Q186 162 162 170 Q150 154 152 134 Q154 108 146 88 Z"
          fill="#111111"
        />

        {/* ══════════════════════════════════════════════════ */}
        {/*  FACE — inside hood opening                        */}
        {/* ══════════════════════════════════════════════════ */}

        {/* Face — beige, slightly off-center (leaning feel) */}
        <ellipse cx="112" cy="98" rx="46" ry="48" fill="#f2ddb8" />

        {/* Ears */}
        <ellipse cx="66" cy="100" rx="7" ry="9" fill="#eacc9a" />
        <ellipse cx="158" cy="100" rx="7" ry="9" fill="#eacc9a" />

        {/* ── Eyebrows ── */}
        <path d="M94 82 Q104 77 114 81" stroke="#5a3e22" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        <path d="M110 81 Q120 77 130 82" stroke="#5a3e22" strokeWidth="2.8" strokeLinecap="round" fill="none" />

        {/* ── Glasses (round) ── */}
        <circle cx="102" cy="96" r="14" fill="none" stroke="#222" strokeWidth="2.2" />
        <circle cx="102" cy="96" r="13" fill="rgba(59,141,255,0.07)" />
        <circle cx="122" cy="96" r="14" fill="none" stroke="#222" strokeWidth="2.2" />
        <circle cx="122" cy="96" r="13" fill="rgba(59,141,255,0.07)" />
        {/* Bridge */}
        <path d="M116 96 L108 96" stroke="#222" strokeWidth="1.9" strokeLinecap="round" />
        {/* Temple arms */}
        <path d="M88 96 L73 99" stroke="#222" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M136 96 L151 99" stroke="#222" strokeWidth="1.9" strokeLinecap="round" />

        {/* ── Eyes ── */}
        <ellipse cx="102" cy="96" rx="5.5" ry="6" fill="#1e1008" />
        <ellipse cx="122" cy="96" rx="5.5" ry="6" fill="#1e1008" />
        <circle cx="104.5" cy="93.5" r="2" fill="white" />
        <circle cx="124.5" cy="93.5" r="2" fill="white" />

        {/* ── Nose ── */}
        <ellipse cx="112" cy="109" rx="3" ry="2" fill="#d4a060" opacity="0.7" />

        {/* ── Smile — relaxed/easygoing ── */}
        <path
          d="M100 119 Q112 130 124 119"
          stroke="#b8783a"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="99" cy="119" r="2" fill="#e0a870" opacity="0.45" />
        <circle cx="125" cy="119" r="2" fill="#e0a870" opacity="0.45" />

        {/* Cheek blush */}
        <ellipse cx="87" cy="113" rx="11" ry="7" fill="rgba(245,130,100,0.14)" />
        <ellipse cx="137" cy="113" rx="11" ry="7" fill="rgba(245,130,100,0.14)" />

        {/* Hood rim shadow */}
        <path
          d="M68 70 Q112 58 156 70"
          stroke="#1a1a1a"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Fabric wrinkles */}
        <path d="M52 92 Q48 112 50 132" stroke="#1a1a1a" strokeWidth="1.4" fill="none" opacity="0.5" />
        <path d="M172 92 Q176 112 174 132" stroke="#1a1a1a" strokeWidth="1.4" fill="none" opacity="0.5" />
      </svg>
    </div>
  );
}
