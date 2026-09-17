import React, { useState } from 'react';
import { leaderDimensions, leaderChecklistItems } from '../data/chapter10.ts';
import { LeaderPentagonSvg } from './svg/LeaderPentagonSvg.tsx';
import { UserCheck, CheckSquare, Square, RefreshCw, Award } from 'lucide-react';

export const LeaderManagementSection: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checkedCount = Object.values(checkedIds).filter(Boolean).length;
  const totalCount = leaderChecklistItems.length;
  const progressPercent = Math.round((checkedCount / totalCount) * 100);

  const resetChecks = () => {
    setCheckedIds({});
  };

  return (
    <section id="leader-mgmt" className="py-16 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/40 text-sky-400 text-xs font-semibold">
            <span>第八單元</span>
            <span className="text-sky-500">•</span>
            <span>領隊多維度指揮模式</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
            領隊事故管理
          </h2>
          <p className="text-slate-300 text-base">
            事故發生後，領隊不是單純的施救者，而是身兼現場五大維度的指揮官。
          </p>
        </div>

        {/* 5-Dimensional Pentagon SVG Visual */}
        <div className="mt-10 rounded-2xl bg-slate-950 border border-slate-800 p-4 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">領隊事故管理五大面向模型 (Leader Command Model)</span>
            <span>傷患・團隊・環境・通訊・時間</span>
          </div>
          <LeaderPentagonSvg className="w-full h-auto max-h-[420px]" />
        </div>

        {/* 5 Dimensions Details Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {leaderDimensions.map((dim) => (
            <div
              key={dim.id}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                  {dim.subtitle}
                </span>
                <h3 className="text-base font-bold text-slate-100">{dim.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{dim.focus}</p>
                <div className="pt-2 border-t border-slate-800/80">
                  <ul className="space-y-1 text-xs text-slate-300">
                    {dim.tasks.map((t, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="text-sky-500 text-[10px]">■</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive 15-Item Responsibility Checklist */}
        <div className="mt-16 rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-sky-400" />
                <h3 className="text-lg font-bold text-slate-100">
                  領隊責任全檢核清單 (15 項核心任務)
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                點擊核選項目進行現場或桌面推演模擬，追蹤掌控進度。
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-xs text-slate-400">完成度：</span>
                <span className="text-sm font-bold text-sky-400 ml-1">
                  {checkedCount} / {totalCount} ({progressPercent}%)
                </span>
              </div>
              <button
                onClick={resetChecks}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs flex items-center gap-1 transition-colors"
                title="重置清單"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>重置</span>
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 bg-slate-900 rounded-full my-6 overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Checklist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {leaderChecklistItems.map((item) => {
              const isChecked = !!checkedIds[item.id];
              return (
                <button
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-all ${
                    isChecked
                      ? 'bg-sky-950/40 border-sky-500/50 text-slate-100'
                      : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="mt-0.5 shrink-0 text-sky-400">
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-600" />
                    )}
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs font-medium block leading-snug">{item.label}</span>
                    <span className="inline-block px-1.5 py-0.2 rounded bg-slate-800 text-[10px] text-slate-400">
                      {item.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {progressPercent === 100 && (
            <div className="mt-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-emerald-200 flex items-center gap-3">
              <Award className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold">
                恭喜！領隊 15 項核心管理任務已全面確認無遺漏，現場態勢已妥善建立。
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
