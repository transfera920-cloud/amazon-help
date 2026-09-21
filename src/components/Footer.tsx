import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="https://amazon-hike.com/"
          className="inline-flex items-center gap-2.5 text-slate-100 font-bold text-base hover:text-sky-400 transition-colors"
          aria-label="回首頁：亞馬遜國家山岳協會"
        >
          <div className="w-7 h-7 rounded bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
            <Shield className="w-4 h-4" />
          </div>
          <span>亞馬遜國家山岳協會</span>
        </a>
      </div>
    </footer>
  );
};
