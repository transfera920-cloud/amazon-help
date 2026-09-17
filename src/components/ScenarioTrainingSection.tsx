import React, { useState } from 'react';
import { scenarioData } from '../data/chapter10.ts';
import { AlertTriangle, CheckCircle2, RefreshCcw, ShieldCheck, ThermometerSnowflake, MountainSnow } from 'lucide-react';

export const ScenarioTrainingSection: React.FC = () => {
  const [selectedOptId, setSelectedOptId] = useState<string | null>(null);

  const selectedOption = scenarioData.options.find((o) => o.id === selectedOptId);

  const getStatusBadge = (status: 'recommended' | 'reassess' | 'high_risk' | 'safer_alternative') => {
    switch (status) {
      case 'recommended':
        return {
          label: '建議處置 (Recommended Protocol)',
          bg: 'bg-emerald-950/70 border-emerald-500/80 text-emerald-200',
          badgeBg: 'bg-emerald-600 text-slate-950',
        };
      case 'safer_alternative':
        return {
          label: '較安全的處理方式 (Safer Alternative)',
          bg: 'bg-sky-950/70 border-sky-500/80 text-sky-200',
          badgeBg: 'bg-sky-600 text-white',
        };
      case 'reassess':
        return {
          label: '需要重新評估 (Requires Reassessment)',
          bg: 'bg-amber-950/70 border-amber-500/80 text-amber-200',
          badgeBg: 'bg-amber-500 text-slate-950',
        };
      case 'high_risk':
        return {
          label: '高風險選項 (High Risk / Contraindicated)',
          bg: 'bg-red-950/70 border-red-500/80 text-red-200',
          badgeBg: 'bg-red-600 text-white',
        };
    }
  };

  return (
    <section id="scenario-training" className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-sky-400 text-xs font-semibold">
            <span>第十一單元</span>
            <span className="text-slate-500">•</span>
            <span>事故管理情境決策演練</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
            情境演練：高海拔失溫與骨折
          </h2>
          <p className="text-slate-300 text-base">
            本演練旨在訓練登山者的事故管理邏輯與風險識別能力。系統不打分數，著重於各處置方案背後的醫學與安全因果。
          </p>
        </div>

        {/* Scenario Briefing Card */}
        <div className="mt-10 rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 shrink-0 mt-1">
              <MountainSnow className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-sky-950 text-sky-400 font-bold text-xs border border-sky-800">
                  情境設定
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                  {scenarioData.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                {scenarioData.context}
              </p>

              {/* Environmental Constraints Checklist */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                  <span className="text-slate-500 block">海拔高度</span>
                  <span className="font-bold text-sky-400">約 3,500 公尺</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                  <span className="text-slate-500 block">時間與氣候</span>
                  <span className="font-bold text-amber-400">夜間 20:30 / 0°C 風雨</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                  <span className="text-slate-500 block">傷患徵象</span>
                  <span className="font-bold text-red-400">發抖・意識異常・右腿疑似骨折</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                  <span className="text-slate-500 block">隊伍可用人力</span>
                  <span className="font-bold text-emerald-400">共 4 人（3 人健全）</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Options Selection */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-bold text-slate-200">
              作為隊伍領隊，您會採取何種現場應變決策？（點擊選項檢視深度解析）
            </h4>
            {selectedOptId && (
              <button
                onClick={() => setSelectedOptId(null)}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1"
              >
                <RefreshCcw className="w-3 h-3" />
                <span>收起解析</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {scenarioData.options.map((opt, idx) => {
              const isSelected = selectedOptId === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedOptId(opt.id)}
                  className={`p-5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-sky-400 ring-2 ring-sky-500/40'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        方案 0{idx + 1}
                      </span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-sky-400" />}
                    </div>
                    <p className="text-sm font-medium text-slate-100 leading-relaxed">
                      {opt.text}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>點擊查看處置利弊分析</span>
                    <span className="text-sky-400 font-semibold">分析 →</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Option Deep Dive Card */}
        {selectedOption && (
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl transition-all">
            {(() => {
              const badge = getStatusBadge(selectedOption.status);
              return (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-md text-xs font-black tracking-wide ${badge.badgeBg}`}>
                      {badge.label}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 leading-relaxed">
                    <p className="font-semibold text-slate-100 mb-1">【因果與風險解析】</p>
                    <p className="text-slate-300">{selectedOption.explanation}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-500/40 text-xs sm:text-sm text-sky-200">
                    <p className="font-semibold text-sky-300 mb-1">【後續正確下一步】</p>
                    <p>{selectedOption.nextStep}</p>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Rigorous Field Guidelines for Hypothermia & Trauma */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-amber-400">
            <ThermometerSnowflake className="w-5 h-5" />
            <span>野外高海拔失溫與創傷照護三大絕對禁忌與原則：</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <strong className="text-red-400 block font-semibold">1. 嚴禁強迫意識混亂者活動</strong>
              <p className="text-slate-400 text-xs leading-relaxed">
                嚴重或中度失溫者肝醣儲備耗竭，強迫活動將引發四肢冰冷酸性血液瞬間回沖心臟，誘發致命的「回溫休克 (Afterdrop)」與心室顫動。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <strong className="text-amber-400 block font-semibold">2. 勿以「體溫32°C」為求援唯一門檻</strong>
              <p className="text-slate-400 text-xs leading-relaxed">
                登山者隨身儀器無法測得真實核心體溫。應以現場「意識改變、無法自主行走、劇烈顫抖轉為無反應、呼吸異常」為客觀求援標準。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <strong className="text-sky-400 block font-semibold">3. 吞嚥受損嚴禁灌水</strong>
              <p className="text-slate-400 text-xs leading-relaxed">
                傷患清醒能安全吞嚥時，可給予溫熱無酒精無咖啡因飲品；若傷患反應遲緩或意識不清，強迫灌水將導致液體嗆入肺部引發窒息。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
