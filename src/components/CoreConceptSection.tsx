import React from 'react';
import { chapterMeta, corePhilosophySteps } from '../data/chapter10.ts';
import { RescueFlowSvg } from './svg/RescueFlowSvg.tsx';
import { ArrowRight, Compass, ShieldAlert } from 'lucide-react';

export const CoreConceptSection: React.FC = () => {
  return (
    <section id="core-concept" className="py-16 bg-slate-900/50 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>本章核心理念</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight leading-snug">
            事故發生後，真正重要的不是慌張，而是建立正確的事故管理順序。
          </h2>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-base leading-relaxed">
            <p className="font-bold text-sky-400 text-lg mb-1">
              「{chapterMeta.coreMotto}」
            </p>
            <p className="text-sm sm:text-base text-slate-400">
              而更完整的核心理念是：
              <span className="text-amber-300 font-semibold ml-1">
                「{chapterMeta.fullPhilosophy}」
              </span>
            </p>
          </div>
        </div>

        {/* Visual Workflow (Desktop SVG) */}
        <div className="mt-12 hidden md:block rounded-2xl bg-slate-950/80 border border-slate-800 p-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">山域事故管理全流程視覺化 (Incident Management Pipeline)</span>
            <span>十步閉環處置：從起點到交接</span>
          </div>
          <RescueFlowSvg className="w-full h-auto" />
        </div>

        {/* Mobile Vertical Flow List */}
        <div className="mt-8 md:hidden space-y-3">
          {corePhilosophySteps.map((step, idx) => (
            <div
              key={step.step}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/40 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                {step.step < 10 ? `0${step.step}` : step.step}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-100">{step.title}</h3>
                  <span className="px-2 py-0.5 text-[10px] rounded-md bg-slate-800 text-slate-400 font-medium">
                    {step.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Takeaway Callout */}
        <div className="mt-10 p-5 rounded-xl bg-sky-950/30 border border-sky-500/30 flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-sky-400 shrink-0 mt-1" />
          <div className="text-sm sm:text-base text-slate-300 leading-relaxed">
            <strong className="text-sky-300 font-semibold">為什麼必須依循順序？</strong>
            在未確保現場落石或環境安全前急於搶救，往往造成施救者自身墜崖或受傷（二次事故）；在未精確取得經緯度座標前盲目通報「我們出事了」，只會徒增搜救指揮中心的無效搜尋時間。依序落實每個節點，是生還率最高的專業管理思維。
          </div>
        </div>
      </div>
    </section>
  );
};
