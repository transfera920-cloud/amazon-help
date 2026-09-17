import React from 'react';

export const DecisionTreeSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 900 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="山域事故決策樹：安全評估、生命威脅與撤離處置之動態決策流程"
    >
      <defs>
        <filter id="treeShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Root Node: Incident Occurs */}
      <g transform="translate(450, 45)" filter="url(#treeShadow)">
        <rect x="-100" y="-25" width="200" height="50" rx="10" fill="#dc2626" stroke="#fca5a5" strokeWidth="2" />
        <text x="0" y="6" fill="#fff" fontSize="16" fontWeight="bold" textAnchor="middle">
          ⚡ 事故發生
        </text>
      </g>

      {/* Down arrow to Question 1 */}
      <line x1="450" y1="70" x2="450" y2="115" stroke="#94a3b8" strokeWidth="2" />

      {/* Question 1: Is Site Safe? */}
      <g transform="translate(450, 150)" filter="url(#treeShadow)">
        <polygon points="0,-35 120,0 0,35 -120,0" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
        <text x="0" y="5" fill="#f8fafc" fontSize="14" fontWeight="600" textAnchor="middle">
          現場安全嗎？
        </text>
      </g>

      {/* Q1 NO -> Hazard Mitigation */}
      <line x1="330" y1="150" x2="160" y2="150" stroke="#ef4444" strokeWidth="2" />
      <rect x="235" y="135" width="30" height="20" rx="4" fill="#7f1d1d" />
      <text x="250" y="149" fill="#fca5a5" fontSize="11" fontWeight="bold" textAnchor="middle">
        否
      </text>

      <g transform="translate(160, 150)" filter="url(#treeShadow)">
        <rect x="-110" y="-30" width="220" height="60" rx="8" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
        <text x="0" y="-6" fill="#f87171" fontSize="13" fontWeight="bold" textAnchor="middle">
          先處理現場危險
        </text>
        <text x="0" y="14" fill="#cbd5e1" fontSize="11" textAnchor="middle">
          移離落石崩塌區 / 確保自保
        </text>
      </g>

      {/* Loopback from Hazard to Q1 */}
      <path d="M 160 180 L 160 210 L 410 210" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="285" y="225" fill="#fcd34d" fontSize="11" textAnchor="middle">
        安全後再行評估
      </text>

      {/* Q1 YES -> Question 2 */}
      <line x1="450" y1="185" x2="450" y2="250" stroke="#10b981" strokeWidth="2" />
      <rect x="455" y="205" width="30" height="20" rx="4" fill="#064e3b" />
      <text x="470" y="219" fill="#a7f3d0" fontSize="11" fontWeight="bold" textAnchor="middle">
        是
      </text>

      {/* Question 2: Life Threat? */}
      <g transform="translate(450, 280)" filter="url(#treeShadow)">
        <polygon points="0,-35 150,0 0,35 -150,0" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
        <text x="0" y="5" fill="#f8fafc" fontSize="14" fontWeight="600" textAnchor="middle">
          是否有立即生命危險？
        </text>
      </g>

      {/* Q2 YES -> Immediate Rescue */}
      <path d="M 300 280 L 160 280 L 160 350" stroke="#ef4444" strokeWidth="2" />
      <rect x="220" y="265" width="30" height="20" rx="4" fill="#7f1d1d" />
      <text x="235" y="279" fill="#fca5a5" fontSize="11" fontWeight="bold" textAnchor="middle">
        是
      </text>

      <g transform="translate(160, 390)" filter="url(#treeShadow)">
        <rect x="-110" y="-40" width="220" height="80" rx="10" fill="#450a0a" stroke="#ef4444" strokeWidth="2" />
        <text x="0" y="-18" fill="#f87171" fontSize="13" fontWeight="bold" textAnchor="middle">
          🚨 立即啟動緊急求援
        </text>
        <text x="0" y="4" fill="#fef2f2" fontSize="12" textAnchor="middle">
          通報 119 / 現場急救止血
        </text>
        <text x="0" y="24" fill="#cbd5e1" fontSize="11" textAnchor="middle">
          全包覆保暖防休克 / 監測
        </text>
      </g>

      {/* Q2 NO -> Question 3: Can Move? */}
      <path d="M 600 280 L 720 280 L 720 345" stroke="#10b981" strokeWidth="2" />
      <rect x="645" y="265" width="30" height="20" rx="4" fill="#064e3b" />
      <text x="660" y="279" fill="#a7f3d0" fontSize="11" fontWeight="bold" textAnchor="middle">
        否
      </text>

      <g transform="translate(720, 375)" filter="url(#treeShadow)">
        <polygon points="0,-30 110,0 0,30 -110,0" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
        <text x="0" y="5" fill="#f8fafc" fontSize="13" fontWeight="600" textAnchor="middle">
          是否能移動？
        </text>
      </g>

      {/* Q3 Cannot Move */}
      <path d="M 610 375 L 530 375 L 530 450" stroke="#f59e0b" strokeWidth="2" />
      <rect x="560" y="360" width="40" height="20" rx="4" fill="#78350f" />
      <text x="580" y="374" fill="#fde68a" fontSize="11" fontWeight="bold" textAnchor="middle">
        不能
      </text>

      <g transform="translate(530, 490)" filter="url(#treeShadow)">
        <rect x="-100" y="-35" width="200" height="70" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="0" y="-12" fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="middle">
          評估是否需要救援
        </text>
        <text x="0" y="8" fill="#cbd5e1" fontSize="11" textAnchor="middle">
          就地避難防失溫
        </text>
        <text x="0" y="24" fill="#fcd34d" fontSize="11" textAnchor="middle">
          視情況果斷啟動求援
        </text>
      </g>

      {/* Q3 Can Move */}
      <path d="M 830 375 L 830 450" stroke="#10b981" strokeWidth="2" />
      <rect x="815" y="405" width="30" height="20" rx="4" fill="#064e3b" />
      <text x="830" y="419" fill="#a7f3d0" fontSize="11" fontWeight="bold" textAnchor="middle">
        能
      </text>

      <g transform="translate(800, 490)" filter="url(#treeShadow)">
        <rect x="-90" y="-35" width="180" height="70" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
        <text x="0" y="-12" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle">
          評估環境與團隊能力
        </text>
        <text x="0" y="8" fill="#cbd5e1" fontSize="11" textAnchor="middle">
          攙扶自力下撤 /
        </text>
        <text x="0" y="24" fill="#cbd5e1" fontSize="11" textAnchor="middle">
          或安全處待援
        </text>
      </g>

      {/* Unified Bottom Box: Continuous Reassessment */}
      <path d="M 160 435 L 160 575 L 450 575" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 530 530 L 530 575" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 800 530 L 800 575 L 570 575" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />

      <g transform="translate(450, 575)" filter="url(#treeShadow)">
        <rect x="-130" y="-22" width="260" height="44" rx="10" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
        <text x="0" y="5" fill="#f0f9ff" fontSize="14" fontWeight="bold" textAnchor="middle">
          🔄 所有分支最終回到「持續重新評估」
        </text>
      </g>
    </svg>
  );
};
