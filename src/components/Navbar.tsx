import React, { useState } from 'react';
import { Shield, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: '第一時間', href: '#first-response' },
    { label: '求救流程', href: '#sos-decision' },
    { label: '通報', href: '#dispatch-card' },
    { label: '通訊', href: '#comm-tools' },
    { label: '傷患處置', href: '#first-aid' },
    { label: '等待救援', href: '#waiting-rescue' },
    { label: '領隊管理', href: '#leader-mgmt' },
    { label: '情境演練', href: '#scenario-training' },
    { label: '檢核表', href: '#one-page-checklist' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="https://amazon-hike.com/"
            className="flex items-center gap-3 text-slate-100 hover:text-sky-400 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1"
            aria-label="回首頁：亞馬遜國家山岳協會"
          >
            <div className="w-9 h-9 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
              <Shield className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm sm:text-base tracking-wide block leading-tight">
              亞馬遜國家山岳協會
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="主要章節導覽">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2.5 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-900 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Emergency Badge & Mobile Button */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-red-950/60 border border-red-500/40 rounded-full text-red-300 text-xs font-semibold">
              <PhoneCall className="w-3.5 h-3.5 text-red-400 animate-pulse" />
              <span>山難求援 119</span>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label={mobileMenuOpen ? '關閉選單' : '開啟導覽選單'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-200 hover:text-sky-400 hover:bg-slate-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
