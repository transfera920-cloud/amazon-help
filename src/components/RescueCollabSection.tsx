import React from 'react';
import { rescueCollabModules } from '../data/chapter10.ts';
import { Handshake, Share2, Compass, Users } from 'lucide-react';

export const RescueCollabSection: React.FC = () => {
  const collabIcons = [
    <Share2 className="w-5 h-5 text-sky-400" key="0" />,
    <Compass className="w-5 h-5 text-amber-400" key="1" />,
    <Users className="w-5 h-5 text-emerald-400" key="2" />,
  ];

  return (
    <section id="rescue-collab" className="py-16 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
            <span>第十單元</span>
            <span className="text-emerald-500">•</span>
            <span>內外搜救協作機制</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
            救援合作與交接
          </h2>
          <p className="text-slate-300 text-base">
            搜救行動是一場內外雙向的緊密協同作業。隊伍現場的主動配合與接應，是縮短搜尋時間與確保吊掛安全的致勝關鍵。
          </p>
        </div>

        {/* 3 Modules Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {rescueCollabModules.map((mod, idx) => (
            <div
              key={mod.title}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700">
                    {collabIcons[idx]}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100">{mod.title}</h3>
                    <span className="text-xs text-sky-400 font-medium">核心模組</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {mod.desc}
                </p>

                <ul className="space-y-2 text-xs text-slate-400">
                  {mod.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800/60">
                      <span className="text-emerald-400 font-bold mt-0.5">•</span>
                      <span className="text-slate-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
