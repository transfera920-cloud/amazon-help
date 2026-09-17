import React from 'react';

export const CommToolsSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 900 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="三種山域通訊工具角色示意圖：手機、無線電、衛星通訊"
    >
      {/* Tool 1: Mobile Phone */}
      <g transform="translate(150, 160)">
        <rect x="-120" y="-130" width="240" height="260" rx="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="0" cy="-60" r="32" fill="#0284c7" fillOpacity="0.2" />
        {/* Cell Phone Icon */}
        <rect x="-14" y="-82" width="28" height="44" rx="4" stroke="#38bdf8" strokeWidth="2" fill="#0f172a" />
        <line x1="-6" y1="-44" x2="6" y2="-44" stroke="#38bdf8" strokeWidth="2" />
        <text x="0" y="-10" fill="#f8fafc" fontSize="16" fontWeight="bold" textAnchor="middle">
          手機 (Mobile)
        </text>
        <rect x="-45" y="5" width="90" height="20" rx="4" fill="#0369a1" />
        <text x="0" y="19" fill="#e0f2fe" fontSize="11" fontWeight="600" textAnchor="middle">
          基地台訊號覆蓋
        </text>
        <text x="0" y="48" fill="#94a3b8" fontSize="12" textAnchor="middle">
          直撥 119 / 112
        </text>
        <text x="0" y="68" fill="#94a3b8" fontSize="12" textAnchor="middle">
          低溫耗電快、深谷死角多
        </text>
        <text x="0" y="98" fill="#38bdf8" fontSize="11" textAnchor="middle">
          適合：熱門稜線步道
        </text>
      </g>

      {/* Tool 2: Two-way Radio */}
      <g transform="translate(450, 160)">
        <rect x="-120" y="-130" width="240" height="260" rx="16" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="0" cy="-60" r="32" fill="#d97706" fillOpacity="0.2" />
        {/* Radio Walkie-talkie Icon */}
        <line x1="8" y1="-95" x2="8" y2="-75" stroke="#f59e0b" strokeWidth="2.5" />
        <rect x="-15" y="-75" width="30" height="42" rx="4" stroke="#f59e0b" strokeWidth="2" fill="#0f172a" />
        <circle cx="0" cy="-56" r="6" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="0" y="-10" fill="#f8fafc" fontSize="16" fontWeight="bold" textAnchor="middle">
          無線電 (Radio)
        </text>
        <rect x="-45" y="5" width="90" height="20" rx="4" fill="#b45309" />
        <text x="0" y="19" fill="#fef3c7" fontSize="11" fontWeight="600" textAnchor="middle">
          團隊內部通聯
        </text>
        <text x="0" y="48" fill="#94a3b8" fontSize="12" textAnchor="middle">
          即時視距通話不需網路
        </text>
        <text x="0" y="68" fill="#94a3b8" fontSize="12" textAnchor="middle">
          非保證能直連消防隊
        </text>
        <text x="0" y="98" fill="#f59e0b" fontSize="11" textAnchor="middle">
          適合：前鋒後衛隊伍溝通
        </text>
      </g>

      {/* Tool 3: Satellite Messenger */}
      <g transform="translate(750, 160)">
        <rect x="-120" y="-130" width="240" height="260" rx="16" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
        <circle cx="0" cy="-60" r="32" fill="#059669" fillOpacity="0.2" />
        {/* Satellite Dish / Device */}
        <circle cx="0" cy="-55" r="16" stroke="#10b981" strokeWidth="2" strokeDasharray="3 2" />
        <path d="M-8 -50 L 0 -62 L 8 -50" stroke="#10b981" strokeWidth="2" />
        <circle cx="0" cy="-62" r="3" fill="#10b981" />
        <text x="0" y="-10" fill="#f8fafc" fontSize="16" fontWeight="bold" textAnchor="middle">
          衛星通訊 (Satellite)
        </text>
        <rect x="-45" y="5" width="90" height="20" rx="4" fill="#047857" />
        <text x="0" y="19" fill="#d1fae5" fontSize="11" fontWeight="600" textAnchor="middle">
          無基地台備援
        </text>
        <text x="0" y="48" fill="#94a3b8" fontSize="12" textAnchor="middle">
          全球覆蓋/獨立 SOS 鍵
        </text>
        <text x="0" y="68" fill="#94a3b8" fontSize="12" textAnchor="middle">
          需開闊天空、需訂閱費用
        </text>
        <text x="0" y="98" fill="#10b981" fontSize="11" textAnchor="middle">
          適合：偏遠百岳與荒野長程
        </text>
      </g>
    </svg>
  );
};
