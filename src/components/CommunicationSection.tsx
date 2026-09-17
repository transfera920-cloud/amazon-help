import React from 'react';
import { commTools } from '../data/chapter10.ts';
import { CommToolsSvg } from './svg/CommToolsSvg.tsx';
import { Radio, Smartphone, Satellite, CheckCircle, AlertTriangle, Info, Zap } from 'lucide-react';

export const CommunicationSection: React.FC = () => {
  const toolIcons = [
    <Smartphone className="w-5 h-5 text-sky-400" key="0" />,
    <Radio className="w-5 h-5 text-amber-400" key="1" />,
    <Satellite className="w-5 h-5 text-emerald-400" key="2" />,
  ];

  return (
    <section id="comm-tools" className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-sky-400 text-xs font-semibold">
            <span>第五單元</span>
            <span className="text-slate-500">•</span>
            <span>通訊角色深度比較</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
            通訊工具
          </h2>
          <p className="text-slate-300 text-base">
            本單元非商業裝備推薦，而是分析各類通訊工具在山域環境中的功能定位、適用情境與物理限制。
          </p>
        </div>

        {/* SVG Graphic */}
        <div className="mt-8 rounded-2xl bg-slate-900 border border-slate-800 p-4 sm:p-6 shadow-xl">
          <CommToolsSvg className="w-full h-auto max-h-[300px]" />
        </div>

        {/* 3 Columns Comparison */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {commTools.map((tool, idx) => (
            <div
              key={tool.name}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between shadow-lg hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      {toolIcons[idx]}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-100">{tool.name}</h3>
                      <span className="text-xs text-slate-400">{tool.role}</span>
                    </div>
                  </div>
                </div>

                <div className="inline-block px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-semibold text-sky-400">
                  {tool.tag}
                </div>

                {/* Pros */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    優點 (Strengths)
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {tool.pros.map((p, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5 bg-slate-950/50 p-1.5 rounded">
                        <span className="text-emerald-500 font-bold">+</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limits */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    限制 (Limitations)
                  </span>
                  <ul className="space-y-1 text-xs text-slate-400">
                    {tool.limits.map((l, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-1.5 bg-slate-950/50 p-1.5 rounded">
                        <span className="text-amber-500 font-bold">-</span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best For */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                  <span className="text-slate-200 font-bold block mb-0.5">適合環境：</span>
                  <span className="text-slate-400">{tool.bestFor}</span>
                </div>

                {/* Important Note */}
                {tool.importantNote && (
                  <div className="p-2.5 rounded-lg bg-red-950/30 border border-red-500/30 text-[11px] text-red-200 leading-relaxed flex items-start gap-1.5">
                    <Info className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span>{tool.importantNote}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 112 Emergency Call Info */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 shrink-0 mt-0.5">
            <Zap className="w-6 h-6" />
          </div>
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
            <h4 className="font-bold text-slate-100 text-sm sm:text-base">
              野外撥打 112 的漫遊運作原理：
            </h4>
            <p className="leading-relaxed text-slate-400">
              當您的手機在山區顯示「無服務」或「僅限緊急呼叫」時，只要現場仍有任一家國內電信業者的基地台微弱訊號（哪怕不是自己的電信業者），撥打 112 即可跨網漫遊轉接至 119 救災救護指揮中心。語音系統接通後，按『0』轉接 110、按『9』轉接 119。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
