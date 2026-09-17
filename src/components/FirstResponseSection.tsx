import React from 'react';
import { firstResponseSteps } from '../data/chapter10.ts';
import { HeartPulse, Eye, Radio, AlertTriangle } from 'lucide-react';

export const FirstResponseSection: React.FC = () => {
  const stepIcons = [
    <HeartPulse className="w-6 h-6 text-sky-400" key="01" />,
    <Eye className="w-6 h-6 text-amber-400" key="02" />,
    <Radio className="w-6 h-6 text-red-400" key="03" />,
  ];

  return (
    <section id="first-response" className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-sky-400 text-xs font-semibold">
            <span>第一單元</span>
            <span className="text-slate-500">•</span>
            <span>現場初始處置</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
            事故發生第一時間
          </h2>
          <p className="text-slate-400 text-base">
            事故剛發生的前五分鐘是決定後續搜救與生存走向的關鍵黃金期。切忌盲目急動，依循三大核心步調落實處置。
          </p>
        </div>

        {/* 3 Core Steps Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {firstResponseSteps.map((step, idx) => (
            <div
              key={step.number}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-slate-700 tracking-tighter">
                    {step.number}
                  </span>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    {stepIcons[idx]}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-100">
                    {step.number}｜{step.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                    {step.coreIdea}
                  </p>
                </div>

                {/* Specific items for Step 02 */}
                {step.items && (
                  <div className="pt-3 border-t border-slate-800/80">
                    <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                      全面態勢感知 8 項評估清單：
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {step.items.map((item, itemIdx) => {
                        const [boldTitle, ...rest] = item.split('：');
                        return (
                          <li key={itemIdx} className="flex items-start gap-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                            <span>
                              <strong className="text-slate-100 font-semibold">{boldTitle}：</strong>
                              <span className="text-slate-400">{rest.join('：')}</span>
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {/* Notes for Step 01 & 03 */}
                {step.note && (
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                    <span className="text-sky-400 font-semibold mr-1">處置要訣：</span>
                    {step.note}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span>STEP_{step.number}_STATUS</span>
                <span className="text-emerald-400">READY</span>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Banner */}
        <div className="mt-8 p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
            <strong>領隊特別戒律：</strong>
            切勿在未確認上方無落石或未確保自身重心前直接探頭伸手救援。高山山難統計中，有相當比例的重傷源自施救者的「二次滑墜」。冷靜與自保永遠高於盲目搶救。
          </div>
        </div>
      </div>
    </section>
  );
};
