import React from 'react';

export const TimelineSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 1000 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="求救到救援的時間軸：事故發生、通報、通訊、穩定傷患、接應準備、持續監測、救援抵達與交接"
    >
      <defs>
        <linearGradient id="timeGrad" x1="50" y1="100" x2="950" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ef4444" />
          <stop offset="0.3" stopColor="#f59e0b" />
          <stop offset="0.6" stopColor="#38bdf8" />
          <stop offset="0.85" stopColor="#818cf8" />
          <stop offset="1" stopColor="#10b981" />
        </linearGradient>
      </defs>

      {/* Main Track */}
      <line x1="50" y1="100" x2="950" y2="100" stroke="url(#timeGrad)" strokeWidth="4" />

      {/* 10 Checkpoints along the line */}
      {[
        { step: '01', title: '事故發生', sub: '現場冷靜', x: 50, color: '#ef4444' },
        { step: '02', title: '啟動求援', sub: '決定呼叫', x: 150, color: '#f97316' },
        { step: '03', title: '通報位置', sub: '精準座標', x: 250, color: '#f59e0b' },
        { step: '04', title: '建立通訊', sub: '協定管道', x: 350, color: '#eab308' },
        { step: '05', title: '現場穩定', sub: '止血保暖', x: 450, color: '#06b6d4' },
        { step: '06', title: '接應準備', sub: '清除障礙', x: 550, color: '#38bdf8' },
        { step: '07', title: '持續監測', sub: '生命徵象', x: 650, color: '#6366f1' },
        { step: '08', title: '保持聯絡', sub: '定時回報', x: 750, color: '#8b5cf6' },
        { step: '09', title: '救援抵達', sub: '視覺引導', x: 850, color: '#059669' },
        { step: '10', title: '交接完成', sub: '病程移交', x: 950, color: '#10b981' },
      ].map((pt, i) => (
        <g key={i} transform={`translate(${pt.x}, 100)`}>
          {/* Outer glow ring */}
          <circle cx="0" cy="0" r="14" fill="#0f172a" stroke={pt.color} strokeWidth="3" />
          <circle cx="0" cy="0" r="5" fill={pt.color} />

          {/* Alternating top and bottom text cards */}
          {i % 2 === 0 ? (
            <g transform="translate(0, -35)">
              <rect x="-42" y="-34" width="84" height="42" rx="6" fill="#1e293b" stroke={pt.color} strokeWidth="1" />
              <text x="0" y="-18" fill={pt.color} fontSize="11" fontWeight="bold" textAnchor="middle">
                {pt.step} {pt.title}
              </text>
              <text x="0" y="-4" fill="#94a3b8" fontSize="10" textAnchor="middle">
                {pt.sub}
              </text>
              <line x1="0" y1="8" x2="0" y2="21" stroke={pt.color} strokeWidth="1" />
            </g>
          ) : (
            <g transform="translate(0, 35)">
              <rect x="-42" y="-8" width="84" height="42" rx="6" fill="#1e293b" stroke={pt.color} strokeWidth="1" />
              <text x="0" y="8" fill={pt.color} fontSize="11" fontWeight="bold" textAnchor="middle">
                {pt.step} {pt.title}
              </text>
              <text x="0" y="22" fill="#94a3b8" fontSize="10" textAnchor="middle">
                {pt.sub}
              </text>
              <line x1="0" y1="-8" x2="0" y2="-21" stroke={pt.color} strokeWidth="1" />
            </g>
          )}
        </g>
      ))}
    </svg>
  );
};
