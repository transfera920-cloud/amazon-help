import React, { useState } from 'react';
import { sosSeverityLevels } from '../data/chapter10.ts';
import { SosDecisionSvg } from './svg/SosDecisionSvg.tsx';
import { AlertTriangle, CheckCircle2, HelpCircle, ShieldAlert, ArrowRight, RotateCcw } from 'lucide-react';

export const SosDecisionSection: React.FC = () => {
  const [selectedSeverity, setSelectedSeverity] = useState<string>('severe');
  const [hasLifeThreat, setHasLifeThreat] = useState<boolean | null>(true);

  const resetDecision = () => {
    setSelectedSeverity('severe');
    setHasLifeThreat(true);
  };

  return (
    <section id="sos-decision" className="py-16 bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-semibold">
            <span>第二單元</span>
            <span className="text-red-500">•</span>
            <span>教學互動決策</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
            SOS 求救流程與決策助手
          </h2>
          <p className="text-slate-300 text-base">
            本工具為「山域事故管理教案互動架構」，透過層級式問題輔助登山者建立清晰的求救思維。
          </p>
        </div>

        {/* Mandatory Educational Disclaimer */}
        <div className="mt-6 p-4 rounded-xl bg-amber-950/40 border border-amber-500/50 text-amber-200 text-xs sm:text-sm flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-amber-300 font-bold">教學聲明與免責條款：</strong>
            這是一個教育用判斷架構，不取代專業醫療或救援單位之現場判斷。本網站非醫療診斷工具，山域情況千變萬化，若現場有任何疑慮，請以維護人員生命安全為最高優先，儘早透過 119 或衛星通訊尋求外部搜救支援。
          </div>
        </div>

        {/* SVG Diagram Overview */}
        <div className="mt-8 rounded-2xl bg-slate-950 border border-slate-800 p-4 sm:p-6 shadow-xl">
          <div className="text-xs text-slate-400 mb-3 flex items-center justify-between">
            <span className="font-semibold text-slate-300">SOS 決策邏輯架構圖 (Decision Pipeline SVG)</span>
            <span>可縮放向量圖表</span>
          </div>
          <SosDecisionSvg className="w-full h-auto max-h-[360px]" />
        </div>

        {/* Interactive Decision Helper Tool */}
        <div className="mt-10 rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-sky-400 animate-pulse" />
              <h3 className="text-lg font-bold text-slate-100">SOS 求救互動決策演練台</h3>
            </div>
            <button
              onClick={resetDecision}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>重新選擇</span>
            </button>
          </div>

          {/* Step 1: Severity Assessment */}
          <div className="mt-6 space-y-3">
            <label className="block text-sm font-bold text-sky-400">
              第一步：傷勢有多嚴重？
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sosSeverityLevels.map((lvl) => {
                const isSelected = selectedSeverity === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    onClick={() => {
                      setSelectedSeverity(lvl.id);
                      if (lvl.id === 'severe') setHasLifeThreat(true);
                    }}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'border-sky-400 bg-sky-950/40 ring-2 ring-sky-500/40'
                        : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-100">{lvl.level}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-sky-400" />}
                    </div>
                    <p className="text-xs text-slate-400 font-semibold mt-1">{lvl.label}</p>
                    <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                      {lvl.traits.map((trait, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-1.5">
                          <span className="text-slate-500">•</span>
                          <span>{trait}</span>
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Immediate Life Threat */}
          <div className="mt-8 space-y-3 pt-6 border-t border-slate-800">
            <label className="block text-sm font-bold text-amber-400">
              第二步：是否有立即生命危險？
            </label>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setHasLifeThreat(true)}
                className={`px-6 py-3 rounded-xl border font-bold text-sm flex items-center gap-2 transition-all ${
                  hasLifeThreat === true
                    ? 'border-red-500 bg-red-950/70 text-red-200 ring-2 ring-red-500/50'
                    : 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700'
                }`}
              >
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span>是 (YES) — 出現呼吸困難、意識昏迷或噴射性出血</span>
              </button>

              <button
                onClick={() => setHasLifeThreat(false)}
                className={`px-6 py-3 rounded-xl border font-bold text-sm flex items-center gap-2 transition-all ${
                  hasLifeThreat === false
                    ? 'border-emerald-500 bg-emerald-950/70 text-emerald-200 ring-2 ring-emerald-500/50'
                    : 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>否 (NO) — 意識清醒，無危及生命之急性徵象</span>
              </button>
            </div>
          </div>

          {/* Step 3: Interactive Outcome Card */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              教案評估路徑與建議處置方針：
            </div>

            {hasLifeThreat === true ? (
              <div className="p-5 rounded-xl bg-red-950/40 border border-red-500/60 text-red-200 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-red-600 text-white font-black text-xs">
                    立即行動
                  </span>
                  <h4 className="text-base font-bold text-red-100">
                    立即啟動緊急求援，同步展開現場急救
                  </h4>
                </div>
                <p className="text-sm text-red-200/90 leading-relaxed">
                  生命受到立即威脅！請立即撥打 119 或觸發衛星通訊 SOS。在等待外部支援的同時，依團隊急救受訓能力執行關鍵處置：若無反應且無正常呼吸立刻展開野外 CPR；若大出血以直接加壓或止血帶止血；迅速為傷患以睡袋睡墊包覆隔絕失溫。
                </p>
                <div className="text-xs text-red-300/80 pt-2 border-t border-red-900/60 flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>下一步：切換至「山難求援通報」區塊，確認精確經緯度座標以利搜救隊派遣。</span>
                </div>
              </div>
            ) : (
              <div className="p-5 rounded-xl bg-slate-900 border border-emerald-500/40 text-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-emerald-600 text-slate-950 font-black text-xs">
                    多維綜合評估
                  </span>
                  <h4 className="text-base font-bold text-slate-100">
                    繼續深層評估：移動能力、環境安全與團隊資源
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                    <p className="font-semibold text-amber-300">1. 移動與自力撤退能力：</p>
                    <p className="text-slate-400">傷患是否能自行步行？是否能藉攙扶緩慢步行下山？若骨折劇痛無法移動，切勿強行勉強行走造成二次骨頭位移。</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                    <p className="font-semibold text-amber-300">2. 環境與氣候條件：</p>
                    <p className="text-slate-400">現場是否避風？是否處於暴風雨雪威脅中？天黑前能否抵達安全山屋或登山口？</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                    <p className="font-semibold text-amber-300">3. 團隊照護耐力：</p>
                    <p className="text-slate-400">同行隊員是否有足夠體力與熱水持續照料？是否能安全進行輪流看守？</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                    <p className="font-semibold text-amber-300">4. 通訊與裝備資源：</p>
                    <p className="text-slate-400">是否有可靠的手機/衛星訊號？是否有足夠帳篷睡袋支持迫降過夜？若無法自力撤離且資源受限，應及早通報待援。</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                  重點提醒：所有非立即生命危險的傷病，都必須每 15 至 30 分鐘重新評估一次。若意識轉為遲鈍或呼吸變急促，應隨時升級為緊急求援！
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
