import React from 'react';

export const LeaderPentagonSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 700 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="領隊事故管理五大面向五角形架構圖：傷患、團隊、環境、通訊、時間"
    >
      <defs>
        <filter id="pentagonGlow">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Center Circle */}
      <circle cx="350" cy="250" r="60" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" filter="url(#pentagonGlow)" />
      <text x="350" y="244" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
        領隊指揮核心
      </text>
      <text x="350" y="264" fill="#f8fafc" fontSize="15" fontWeight="600" textAnchor="middle">
        事故全盤掌控
      </text>

      {/* Pentagon outline connecting the 5 nodes */}
      {/* 
        Calculated vertices around center (350, 250), radius ~160:
        Angle 0 (top): (350, 90)
        Angle 72 (top-right): (502, 201)
        Angle 144 (bot-right): (444, 380)
        Angle 216 (bot-left): (256, 380)
        Angle 288 (top-left): (198, 201)
      */}
      <polygon
        points="350,90 502,201 444,380 256,380 198,201"
        fill="#0f172a"
        stroke="#334155"
        strokeWidth="2"
      />

      {/* Radial spokes */}
      <line x1="350" y1="250" x2="350" y2="90" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="350" y1="250" x2="502" y2="201" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="350" y1="250" x2="444" y2="380" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="350" y1="250" x2="256" y2="380" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="350" y1="250" x2="198" y2="201" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="3 3" />

      {/* 1. 傷患 (Top) */}
      <g transform="translate(350, 80)" filter="url(#pentagonGlow)">
        <rect x="-80" y="-35" width="160" height="70" rx="12" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
        <text x="0" y="-8" fill="#f87171" fontSize="15" fontWeight="bold" textAnchor="middle">
          1. 傷患 (Patient)
        </text>
        <text x="0" y="14" fill="#cbd5e1" fontSize="11" textAnchor="middle">
          急救止血 / 保暖 / 生命徵象
        </text>
      </g>

      {/* 2. 通訊 (Top-Right) */}
      <g transform="translate(520, 200)" filter="url(#pentagonGlow)">
        <rect x="-80" y="-35" width="160" height="70" rx="12" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
        <text x="0" y="-8" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle">
          2. 通訊 (Comm)
        </text>
        <text x="0" y="14" fill="#cbd5e1" fontSize="11" textAnchor="middle">
          119通報 / 座標 / 電量控管
        </text>
      </g>

      {/* 3. 時間 (Bottom-Right) */}
      <g transform="translate(460, 390)" filter="url(#pentagonGlow)">
        <rect x="-80" y="-35" width="160" height="70" rx="12" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
        <text x="0" y="-8" fill="#fbbf24" fontSize="15" fontWeight="bold" textAnchor="middle">
          3. 時間 (Time)
        </text>
        <text x="0" y="14" fill="#cbd5e1" fontSize="11" textAnchor="middle">
          記錄時序 / 天黑預判 / 迫降
        </text>
      </g>

      {/* 4. 環境 (Bottom-Left) */}
      <g transform="translate(240, 390)" filter="url(#pentagonGlow)">
        <rect x="-80" y="-35" width="160" height="70" rx="12" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
        <text x="0" y="-8" fill="#34d399" fontSize="15" fontWeight="bold" textAnchor="middle">
          4. 環境 (Env)
        </text>
        <text x="0" y="14" fill="#cbd5e1" fontSize="11" textAnchor="middle">
          避風庇護 / 落石預防 / 接應點
        </text>
      </g>

      {/* 5. 團隊 (Top-Left) */}
      <g transform="translate(180, 200)" filter="url(#pentagonGlow)">
        <rect x="-80" y="-35" width="160" height="70" rx="12" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
        <text x="0" y="-8" fill="#c084fc" fontSize="15" fontWeight="bold" textAnchor="middle">
          5. 團隊 (Team)
        </text>
        <text x="0" y="14" fill="#cbd5e1" fontSize="11" textAnchor="middle">
          心理安撫 / 職責指派 / 防散落
        </text>
      </g>
    </svg>
  );
};
