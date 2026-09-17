import React from 'react';

export const DispatchInfoSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 800 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="山難求援通報核心十要素圖解：座標、傷勢、人數、天候與通訊"
    >
      <rect x="10" y="10" width="780" height="400" rx="16" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />

      {/* Center Radar / Hub */}
      <circle cx="400" cy="210" r="70" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
      <circle cx="400" cy="210" r="50" fill="#0284c7" fillOpacity="0.15" />
      <circle cx="400" cy="210" r="30" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" />
      <text x="400" y="205" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
        119 / 搜救中心
      </text>
      <text x="400" y="225" fill="#f8fafc" fontSize="15" fontWeight="600" textAnchor="middle">
        關鍵通報 10 要素
      </text>

      {/* 8 radiating sectors */}
      {[
        { title: '精確座標與地點', desc: 'WGS84 經緯度/標高/步道地標', x: 130, y: 70, color: '#38bdf8' },
        { title: '隊伍總人數', desc: '幾人受傷 / 幾人健全照護', x: 400, y: 55, color: '#f59e0b' },
        { title: '具體傷勢評估', desc: '意識狀態/呼吸/大出血/骨折', x: 670, y: 70, color: '#ef4444' },
        { title: '能否自行移動', desc: '完全無法移動 / 可攙扶緩慢行走', x: 690, y: 210, color: '#ec4899' },
        { title: '現場即時天氣', desc: '氣溫/降雨/風速/雲霧能見度', x: 670, y: 350, color: '#8b5cf6' },
        { title: '地形環境與接應', desc: '避風處/可否吊掛/周邊斷崖', x: 400, y: 365, color: '#10b981' },
        { title: '可用物資與裝備', desc: '帳篷/睡袋/剩餘乾糧飲水天數', x: 130, y: 350, color: '#06b6d4' },
        { title: '通訊與聯絡協定', desc: '剩餘電量/指定開機通話時段', x: 110, y: 210, color: '#eab308' },
      ].map((item, idx) => (
        <g key={idx}>
          {/* Connector Line */}
          <line x1="400" y1="210" x2={item.x} y2={item.y} stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
          <g transform={`translate(${item.x}, ${item.y})`}>
            <rect x="-95" y="-32" width="190" height="64" rx="10" fill="#1e293b" stroke={item.color} strokeWidth="1.5" />
            <text x="0" y="-8" fill={item.color} fontSize="13" fontWeight="bold" textAnchor="middle">
              {item.title}
            </text>
            <text x="0" y="14" fill="#94a3b8" fontSize="11" textAnchor="middle">
              {item.desc}
            </text>
          </g>
        </g>
      ))}
    </svg>
  );
};
