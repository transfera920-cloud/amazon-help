import React from 'react';

export const MountainHeroSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="山域搜救意象視覺：崇山峻嶺、衛星軌道通訊、GPS 定位十字標與緊急求援訊號"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="skyGrad" x1="400" y1="0" x2="400" y2="500" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0b132b" />
          <stop offset="0.6" stopColor="#1c2541" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="mtnBack" x1="400" y1="150" x2="400" y2="450" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e293b" stopOpacity="0.8" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="mtnMid" x1="400" y1="200" x2="400" y2="500" gradientUnits="userSpaceOnUse">
          <stop stopColor="#334155" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="mtnFront" x1="400" y1="280" x2="400" y2="500" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e293b" />
          <stop offset="1" stopColor="#020617" />
        </linearGradient>
        <radialGradient id="beaconPulse" cx="500" cy="240" r="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ef4444" stopOpacity="0.5" />
          <stop offset="0.6" stopColor="#f59e0b" stopOpacity="0.2" />
          <stop offset="1" stopColor="#ef4444" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sky Canvas */}
      <rect width="800" height="500" rx="20" fill="url(#skyGrad)" />

      {/* Stars & Grid Coordinates */}
      <g opacity="0.3">
        <line x1="0" y1="100" x2="800" y2="100" stroke="#38bdf8" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="0" y1="250" x2="800" y2="250" stroke="#38bdf8" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="200" y1="0" x2="200" y2="500" stroke="#38bdf8" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="600" y1="0" x2="600" y2="500" stroke="#38bdf8" strokeWidth="0.5" strokeDasharray="4 8" />
      </g>

      {/* Satellite in Upper Left & Transmission Beam */}
      <g transform="translate(180, 70)">
        {/* Satellite icon */}
        <circle cx="0" cy="0" r="10" fill="#38bdf8" fillOpacity="0.3" />
        <circle cx="0" cy="0" r="4" fill="#38bdf8" />
        <rect x="-18" y="-4" width="10" height="8" rx="1" fill="#64748b" stroke="#38bdf8" strokeWidth="1" />
        <rect x="8" y="-4" width="10" height="8" rx="1" fill="#64748b" stroke="#38bdf8" strokeWidth="1" />
        <path d="M -8 -8 C -12 -12, -18 -12, -22 -8" stroke="#38bdf8" strokeWidth="1.5" />
        <path d="M 8 -8 C 12 -12, 18 -12, 22 -8" stroke="#38bdf8" strokeWidth="1.5" />

        {/* Orbit Arc */}
        <path d="M -120 40 Q 60 -30 240 20" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.6" />
        <text x="15" y="-12" fill="#38bdf8" fontSize="11" fontFamily="monospace">SAT-LINK 406MHz / SOS</text>
      </g>

      {/* Transmission Cones to Ground Incident Site (500, 240) */}
      <path d="M 180 70 L 460 230 L 540 250 Z" fill="#38bdf8" fillOpacity="0.06" />

      {/* Far Distant Mountain Ridges */}
      <path
        d="M 0 320 Q 150 180 300 240 T 600 190 T 800 260 L 800 500 L 0 500 Z"
        fill="url(#mtnBack)"
      />

      {/* Mid Mountain Ridges */}
      <path
        d="M 0 370 L 120 280 L 260 340 L 420 220 L 580 310 L 720 250 L 800 300 L 800 500 L 0 500 Z"
        fill="url(#mtnMid)"
      />

      {/* Foreground Mountain Peak with Ridge Lines */}
      <path
        d="M 0 440 L 180 350 L 360 410 L 500 240 L 640 380 L 800 360 L 800 500 L 0 500 Z"
        fill="url(#mtnFront)"
      />

      {/* Ridge Line Contours */}
      <path d="M 500 240 L 480 340 L 440 430" stroke="#475569" strokeWidth="1.5" strokeOpacity="0.5" />
      <path d="M 500 240 L 560 330 L 610 440" stroke="#475569" strokeWidth="1.5" strokeOpacity="0.5" />
      <path d="M 420 220 L 400 300 L 360 410" stroke="#334155" strokeWidth="1" strokeOpacity="0.5" />

      {/* Incident Location & Emergency Beacon Pulse (500, 240) */}
      <circle cx="500" cy="240" r="80" fill="url(#beaconPulse)" />
      <circle cx="500" cy="240" r="45" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.8" />
      <circle cx="500" cy="240" r="24" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.9" />
      <circle cx="500" cy="240" r="6" fill="#ef4444" />

      {/* GPS Target Crosshair */}
      <line x1="500" y1="190" x2="500" y2="225" stroke="#38bdf8" strokeWidth="2" />
      <line x1="500" y1="255" x2="500" y2="290" stroke="#38bdf8" strokeWidth="2" />
      <line x1="450" y1="240" x2="485" y2="240" stroke="#38bdf8" strokeWidth="2" />
      <line x1="515" y1="240" x2="550" y2="240" stroke="#38bdf8" strokeWidth="2" />

      {/* Coordinate & Status Overlay Card */}
      <g transform="translate(480, 160)">
        <rect x="0" y="0" width="220" height="60" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
        <circle cx="15" cy="18" r="4" fill="#ef4444" />
        <text x="26" y="22" fill="#ef4444" fontSize="11" fontWeight="bold">EMERGENCY DISPATCH</text>
        <text x="15" y="38" fill="#f8fafc" fontSize="12" fontFamily="monospace">N 23°28'12" E 120°57'36"</text>
        <text x="15" y="52" fill="#94a3b8" fontSize="11">ALT: 3,550m | RESCUE PENDING</text>
      </g>

      {/* Airborne Helicopter Silhouette Approach in Top Right */}
      <g transform="translate(680, 110)">
        {/* Rotor Blade */}
        <line x1="-35" y1="-12" x2="35" y2="-12" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="0" cy="-12" r="2" fill="#cbd5e1" />
        <line x1="0" y1="-12" x2="0" y2="-5" stroke="#64748b" strokeWidth="2" />
        {/* Fuselage */}
        <ellipse cx="-2" cy="0" rx="18" ry="9" fill="#e2e8f0" />
        {/* Cockpit Window */}
        <path d="M 6 -4 Q 14 -1 14 3 L 8 4 Z" fill="#0284c7" />
        {/* Tail Boom & Rotor */}
        <line x1="-18" y1="0" x2="-45" y2="-3" stroke="#cbd5e1" strokeWidth="3" />
        <line x1="-45" y1="-10" x2="-45" y2="4" stroke="#94a3b8" strokeWidth="1.5" />
        {/* Landing Skids */}
        <line x1="-12" y1="12" x2="12" y2="12" stroke="#64748b" strokeWidth="2" />
        <line x1="-6" y1="7" x2="-6" y2="12" stroke="#64748b" strokeWidth="1.5" />
        <line x1="6" y1="7" x2="6" y2="12" stroke="#64748b" strokeWidth="1.5" />
        <text x="-40" y="28" fill="#38bdf8" fontSize="10" fontFamily="sans-serif">搜救航空隊接近中</text>
      </g>
    </svg>
  );
};
