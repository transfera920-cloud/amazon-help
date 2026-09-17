import React from 'react';

export const RescueFlowSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 1000 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="山域事故管理全流程圖：從事故發生到救援交接的十個連續步驟"
    >
      <defs>
        <linearGradient id="flowGrad" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.5" stopColor="#f59e0b" />
          <stop offset="1" stopColor="#10b981" />
        </linearGradient>
        <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Connection Backbone Line */}
      <path
        d="M 60 90 L 940 90 M 940 90 C 970 90 970 230 940 230 L 60 230"
        stroke="url(#flowGrad)"
        strokeWidth="3"
        strokeDasharray="6 4"
        strokeOpacity="0.4"
      />

      {/* Flow Steps 1 to 5 (Top Row) */}
      {[
        { step: 1, title: '事故發生', sub: '現場冷靜', x: 70, y: 90, color: '#ef4444' },
        { step: 2, title: '確保安全', sub: '排除環境危險', x: 275, y: 90, color: '#f97316' },
        { step: 3, title: '評估傷患', sub: '意識/呼吸/出血', x: 480, y: 90, color: '#f59e0b' },
        { step: 4, title: '決定求援', sub: '啟動應變時機', x: 685, y: 90, color: '#eab308' },
        { step: 5, title: '取得位置', sub: '精確座標地標', x: 890, y: 90, color: '#06b6d4' },
      ].map((node) => (
        <g key={node.step} transform={`translate(${node.x}, ${node.y})`} filter="url(#nodeGlow)">
          <rect x="-80" y="-45" width="160" height="90" rx="12" fill="#1e293b" stroke={node.color} strokeWidth="2" />
          <circle cx="-55" cy="-20" r="14" fill={node.color} fillOpacity="0.2" stroke={node.color} strokeWidth="1.5" />
          <text x="-55" y="-15" fill={node.color} fontSize="12" fontWeight="bold" textAnchor="middle">
            0{node.step}
          </text>
          <text x="-30" y="-16" fill="#f8fafc" fontSize="15" fontWeight="600">
            {node.title}
          </text>
          <text x="0" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">
            {node.sub}
          </text>
          <circle cx="0" cy="45" r="4" fill={node.color} />
        </g>
      ))}

      {/* Flow Steps 6 to 10 (Bottom Row - Returned) */}
      {[
        { step: 6, title: '建立通訊', sub: '手機/衛星/無線電', x: 890, y: 230, color: '#38bdf8' },
        { step: 7, title: '現場處置', sub: '止血/包紮/保暖', x: 685, y: 230, color: '#3b82f6' },
        { step: 8, title: '等待救援', sub: '避難/資源/信號', x: 480, y: 230, color: '#6366f1' },
        { step: 9, title: '監測回報', sub: '動態追蹤變化', x: 275, y: 230, color: '#8b5cf6' },
        { step: 10, title: '救援交接', sub: '紀錄交接移交', x: 70, y: 230, color: '#10b981' },
      ].map((node) => (
        <g key={node.step} transform={`translate(${node.x}, ${node.y})`} filter="url(#nodeGlow)">
          <rect x="-80" y="-45" width="160" height="90" rx="12" fill="#1e293b" stroke={node.color} strokeWidth="2" />
          <circle cx="-55" cy="-20" r="14" fill={node.color} fillOpacity="0.2" stroke={node.color} strokeWidth="1.5" />
          <text x="-55" y="-15" fill={node.color} fontSize="12" fontWeight="bold" textAnchor="middle">
            {node.step < 10 ? `0${node.step}` : node.step}
          </text>
          <text x="-30" y="-16" fill="#f8fafc" fontSize="15" fontWeight="600">
            {node.title}
          </text>
          <text x="0" y="16" fill="#94a3b8" fontSize="12" textAnchor="middle">
            {node.sub}
          </text>
          <circle cx="0" cy="-45" r="4" fill={node.color} />
        </g>
      ))}

      {/* Guidance Arrows */}
      <path d="M 180 90 L 195 90" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arr)" />
      <path d="M 385 90 L 400 90" stroke="#f59e0b" strokeWidth="2" />
      <path d="M 590 90 L 605 90" stroke="#f59e0b" strokeWidth="2" />
      <path d="M 795 90 L 810 90" stroke="#f59e0b" strokeWidth="2" />
      <path d="M 785 230 L 770 230" stroke="#10b981" strokeWidth="2" />
      <path d="M 580 230 L 565 230" stroke="#10b981" strokeWidth="2" />
      <path d="M 375 230 L 360 230" stroke="#10b981" strokeWidth="2" />
      <path d="M 170 230 L 155 230" stroke="#10b981" strokeWidth="2" />
    </svg>
  );
};
