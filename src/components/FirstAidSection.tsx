import React from 'react';
import { firstAidPrinciples } from '../data/chapter10.ts';
import { HeartPulse, Droplet, Shield, Flame, Activity, AlertTriangle } from 'lucide-react';

export const FirstAidSection: React.FC = () => {
  const principleIcons = [
    <HeartPulse className="w-5 h-5 text-red-400" key="0" />,
    <Droplet className="w-5 h-5 text-rose-400" key="1" />,
    <Shield className="w-5 h-5 text-amber-400" key="2" />,
    <Flame className="w-5 h-5 text-orange-400" key="3" />,
    <Activity className="w-5 h-5 text-emerald-400" key="4" />,
  ];

  return (
    <section id="first-aid" className="py-16 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-semibold">
            <span>第六單元</span>
            <span className="text-red-500">•</span>
            <span>野外初步急救安全規範</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
            傷患初步處置
          </h2>
          <p className="text-slate-300 text-base">
            野外急救（Wilderness First Aid）的根本目的在於「在等待救援前維持生命並防止傷勢惡化」。非專業醫護人員應避免侵入性或冒險醫療處置。
          </p>
        </div>

        {/* 5 Core Principles */}
        <div className="mt-12 space-y-6">
          {firstAidPrinciples.map((rule, idx) => (
            <div
              key={rule.id}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-xl hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                    {principleIcons[idx]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">
                      {rule.number}｜{rule.title}
                    </h3>
                    <span className="text-xs text-sky-400 font-medium">現代急救準則</span>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 self-start">
                  規範等級：野外通用準則
                </div>
              </div>

              <div className="mt-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm font-semibold text-amber-300 leading-relaxed">
                {rule.keyPrinciple}
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                {rule.details.map((detail, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                    <span className="leading-relaxed text-slate-300">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Equipment Tags */}
              {rule.equipment && (
                <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/60">
                  <span className="text-xs font-semibold text-slate-400">可用防失溫裝備：</span>
                  {rule.equipment.map((eq, eIdx) => (
                    <span
                      key={eIdx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-700 text-xs text-slate-300"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              )}

              {/* Special Warning if any */}
              {rule.warning && (
                <div className="mt-4 p-3 rounded-lg bg-red-950/30 border border-red-500/30 text-xs text-red-200 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{rule.warning}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
