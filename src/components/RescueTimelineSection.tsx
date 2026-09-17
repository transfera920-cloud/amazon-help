import React from 'react';
import { rescueTimelineFactors } from '../data/chapter10.ts';
import { TimelineSvg } from './svg/TimelineSvg.tsx';
import { Clock, CloudLightning, Mountain, Radio, Eye, Users, AlertCircle } from 'lucide-react';

export const RescueTimelineSection: React.FC = () => {
  const factorIcons = [
    <CloudLightning className="w-4 h-4 text-amber-400" key="0" />,
    <Mountain className="w-4 h-4 text-emerald-400" key="1" />,
    <Clock className="w-4 h-4 text-sky-400" key="2" />,
    <Radio className="w-4 h-4 text-indigo-400" key="3" />,
    <Eye className="w-4 h-4 text-purple-400" key="4" />,
    <Users className="w-4 h-4 text-rose-400" key="5" />,
    <AlertCircle className="w-4 h-4 text-amber-400" key="6" />,
  ];

  return (
    <section id="rescue-timeline" className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-sky-400 text-xs font-semibold">
            <span>第三單元</span>
            <span className="text-slate-500">•</span>
            <span>救援時序與變數</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
            求救到救援的時間線
          </h2>
          <p className="text-slate-300 text-base">
            山難求援不是按下按鈕後消防車五分鐘就到。在崇山峻嶺中，每一步接應都考驗著隊伍的耐心、紀律與自保能力。
          </p>
        </div>

        {/* SVG Timeline */}
        <div className="mt-10 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl overflow-x-auto">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">救援行動標準時間軸 (Rescue Timeline SVG)</span>
            <span>事故發生 → 啟動 → 通報 → 通訊 → 穩定 → 接應 → 監測 → 聯絡 → 抵達 → 交接</span>
          </div>
          <div className="min-w-[800px]">
            <TimelineSvg className="w-full h-auto" />
          </div>
        </div>

        {/* Essential Reality Check: No Fixed Promise */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-red-500/10 text-red-400 shrink-0 mt-0.5">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100">
                切勿將搜救到達時間視為「固定承諾」
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mt-1 leading-relaxed">
                都市 119 救護車在平地平均 8 至 10 分鐘抵達；但在高山環境中，搜救人員徒步挺進可能耗費數小時甚至超過一天。因此，<strong>等待救援期間的現場自理與防失溫，才是保住性命的根本關鍵</strong>。
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6">
            <h4 className="text-sm font-semibold text-sky-400 uppercase tracking-wider mb-4">
              直接影響救援速度與直升機起降的 7 大關鍵變數：
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {rescueTimelineFactors.map((factor, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-slate-300 hover:border-slate-700 transition-colors"
                >
                  <div className="p-1.5 rounded-lg bg-slate-900 shrink-0 mt-0.5">
                    {factorIcons[idx]}
                  </div>
                  <span className="leading-relaxed">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
