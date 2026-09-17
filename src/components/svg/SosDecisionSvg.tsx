import React from 'react';

export const SosDecisionSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 800 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="SOS 求救決策流程圖：傷勢評估、生命威脅判斷與處置路徑"
    >
      <defs>
        <filter id="shadowBox" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Background Grid Accent */}
      <rect x="10" y="10" width="780" height="460" rx="16" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />

      {/* Start Node: Assessment */}
      <g transform="translate(400, 60)" filter="url(#shadowBox)">
        <rect x="-140" y="-30" width="280" height="60" rx="12" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
        <text x="0" y="-5" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
          步驟一：傷勢與狀況初步評估
        </text>
        <text x="0" y="16" fill="#f8fafc" fontSize="15" fontWeight="600" textAnchor="middle">
          傷勢有多嚴重？是否出現意識/呼吸異常？
        </text>
      </g>

      {/* Arrow Down */}
      <line x1="400" y1="90" x2="400" y2="135" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" />
      <polygon points="395,135 405,135 400,145" fill="#64748b" />

      {/* Condition Node: Life Threat */}
      <g transform="translate(400, 180)" filter="url(#shadowBox)">
        <polygon points="0,-35 150,0 0,35 -150,0" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
        <text x="0" y="-5" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">
          關鍵分歧
        </text>
        <text x="0" y="14" fill="#f8fafc" fontSize="14" fontWeight="600" textAnchor="middle">
          是否有立即生命危險？
        </text>
      </g>

      {/* Branch: YES (Immediate Danger) */}
      <path d="M 250 180 L 160 180 L 160 270" stroke="#ef4444" strokeWidth="2.5" />
      <rect x="180" y="165" width="45" height="24" rx="6" fill="#7f1d1d" />
      <text x="202" y="181" fill="#fecaca" fontSize="12" fontWeight="bold" textAnchor="middle">
        是 (YES)
      </text>

      <g transform="translate(160, 320)" filter="url(#shadowBox)">
        <rect x="-130" y="-45" width="260" height="90" rx="12" fill="#450a0a" stroke="#ef4444" strokeWidth="2" />
        <text x="0" y="-20" fill="#f87171" fontSize="13" fontWeight="bold" textAnchor="middle">
          🚨 立即啟動緊急求援
        </text>
        <text x="0" y="2" fill="#fef2f2" fontSize="14" fontWeight="600" textAnchor="middle">
          撥打 119 / 衛星 SOS
        </text>
        <text x="0" y="24" fill="#fca5a5" fontSize="12" textAnchor="middle">
          同步展開止血、保暖與必要 CPR
        </text>
      </g>

      {/* Branch: NO (Assess Mobility & Environment) */}
      <path d="M 550 180 L 640 180 L 640 250" stroke="#10b981" strokeWidth="2.5" />
      <rect x="575" y="165" width="45" height="24" rx="6" fill="#064e3b" />
      <text x="597" y="181" fill="#a7f3d0" fontSize="12" fontWeight="bold" textAnchor="middle">
        否 (NO)
      </text>

      <g transform="translate(640, 290)" filter="url(#shadowBox)">
        <rect x="-130" y="-40" width="260" height="80" rx="12" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
        <text x="0" y="-18" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle">
          評估移動能力與環境安全
        </text>
        <text x="0" y="4" fill="#f8fafc" fontSize="13" textAnchor="middle">
          • 能否自行或攙扶緩慢撤離？
        </text>
        <text x="0" y="22" fill="#94a3b8" fontSize="12" textAnchor="middle">
          • 裝備物資與通訊是否充裕？
        </text>
      </g>

      {/* Sub Branch from Right */}
      <path d="M 550 330 L 490 380" stroke="#f59e0b" strokeWidth="2" />
      <path d="M 730 330 L 730 380" stroke="#10b981" strokeWidth="2" />

      {/* Cannot Move */}
      <g transform="translate(450, 420)">
        <rect x="-80" y="-25" width="160" height="50" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="0" y="-5" fill="#fcd34d" fontSize="12" fontWeight="bold" textAnchor="middle">無法自力移動</text>
        <text x="0" y="14" fill="#cbd5e1" fontSize="11" textAnchor="middle">就地避難並評估求援</text>
      </g>

      {/* Can Safely Retreat */}
      <g transform="translate(690, 420)">
        <rect x="-80" y="-25" width="160" height="50" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
        <text x="0" y="-5" fill="#6ee7b7" fontSize="12" fontWeight="bold" textAnchor="middle">能安全攙扶移動</text>
        <text x="0" y="14" fill="#cbd5e1" fontSize="11" textAnchor="middle">謹慎結伴下撤並持續監控</text>
      </g>

      {/* Bottom Reassessment Feedback Loop Line */}
      <path d="M 160 365 L 160 450 L 330 450" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
      <rect x="340" y="435" width="120" height="30" rx="6" fill="#0284c7" />
      <text x="400" y="455" fill="#f0f9ff" fontSize="12" fontWeight="bold" textAnchor="middle">
        🔄 持續動態重新評估
      </text>
    </svg>
  );
};
