import React, { useState } from 'react';
import { DecisionTreeSvg } from './svg/DecisionTreeSvg.tsx';
import { GitBranch, RefreshCw, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';

export const DecisionTreeSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: '起點：事故突發',
      prompt: '現場是否安全？上方有無落石或崩塌危險？',
      options: [
        { label: '否 — 現場有立即環境危險', next: 1, color: 'border-red-500 text-red-300' },
        { label: '是 — 現場目前穩定安全', next: 2, color: 'border-emerald-500 text-emerald-300' },
      ],
    },
    {
      title: '處置：排除環境二次災害',
      prompt: '施救者與傷患身處危險區域（如落石路段或崩壁邊緣）。首要任務是自保與避險，將全隊移至掩蔽安全處，切忌直接在危險地帶展開急救。',
      action: '移至安全避難區後，重新進入傷患評估。',
      options: [{ label: '已移至安全處，開始評估傷患', next: 2, color: 'border-sky-500 text-sky-300' }],
    },
    {
      title: '評估：是否有立即生命危險？',
      prompt: '檢查意識（叫喚能否回答）、呼吸（有無正常呼吸起伏）、以及是否有可見之大動脈噴射性出血？',
      options: [
        { label: '是 — 昏迷無反應 / 呼吸異常 / 大出血', next: 3, color: 'border-red-500 text-red-300' },
        { label: '否 — 意識清楚，呼吸平穩，無致命大出血', next: 4, color: 'border-emerald-500 text-emerald-300' },
      ],
    },
    {
      title: '緊急路徑：立即啟動緊急求援與急救',
      prompt: '【紅燈警示】立刻通報 119 或按壓衛星 SOS，同時依受訓能力執行 CPR、加壓止血與全包覆保暖防休克。隨時準備直升機或地面搜救隊接應。',
      action: '所有處置完畢後，每 5-10 分鐘持續重新評估意識與呼吸變化！',
      options: [{ label: '進入持續監測回報循環', next: 7, color: 'border-purple-500 text-purple-300' }],
    },
    {
      title: '評估：傷患是否具備自主移動能力？',
      prompt: '傷患右腳或肢體是否骨折？能否在隊友攙扶下自行緩慢行走？是否出現嚴重暈眩無法站立？',
      options: [
        { label: '不能移動 — 骨折劇痛無法負重行走', next: 5, color: 'border-amber-500 text-amber-300' },
        { label: '能自主移動 — 傷勢輕微，可攙扶緩步行走', next: 6, color: 'border-emerald-500 text-emerald-300' },
      ],
    },
    {
      title: '處置路徑：就地避難並評估求援',
      prompt: '【無法行走】切勿強行勉強傷患行走導致骨折位移穿刺。應搭建帳篷就地避難防失溫，評估通訊、天候與糧食。若無法安全由隊伍自力背負下撤，果斷啟動求援。',
      action: '完成固定與保暖，視情況啟動求援並持續評估。',
      options: [{ label: '進入持續監測回報循環', next: 7, color: 'border-purple-500 text-purple-300' }],
    },
    {
      title: '處置路徑：評估環境與團隊撤退能力',
      prompt: '【能緩步行走】評估距離登山口或山屋的步行時間。若天黑將至且氣候惡化，即便傷患能走也可能失溫受困，需綜合衡量是否於安全點避難或求援。',
      action: '決定小心結伴撤離，若中途惡化隨時轉換為求援模式。',
      options: [{ label: '進入持續監測回報循環', next: 7, color: 'border-purple-500 text-purple-300' }],
    },
    {
      title: '全流程終極核心：持續動態重新評估',
      prompt: '山野環境中沒有「一次判斷即可高枕無憂」的靜態決策！天候會轉變、體溫會流失、傷患意識可能逐漸昏迷。所有決策分支皆必須定期「重新回到起點再次評估」。',
      action: '若傷情惡化，立即升級求救層級！',
      options: [{ label: '重新演練決策樹', next: 0, color: 'border-sky-500 text-sky-300' }],
    },
  ];

  return (
    <section id="decision-tree" className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-sky-400 text-xs font-semibold">
            <span>第九單元</span>
            <span className="text-slate-500">•</span>
            <span>事故動態決策樹</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
            事故決策樹
          </h2>
          <p className="text-slate-300 text-base">
            清晰的邏輯分支能避免在高壓混亂中做出危險決策。所有分支最後皆指向「持續重新評估」。
          </p>
        </div>

        {/* SVG Visualization */}
        <div className="mt-10 rounded-2xl bg-slate-900 border border-slate-800 p-4 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">山域事故決策流程樹 (Decision Tree Flowchart)</span>
            <span>現場安全 → 生命危險 → 移動能力 → 持續動態重新評估</span>
          </div>
          <DecisionTreeSvg className="w-full h-auto max-h-[520px]" />
        </div>

        {/* Step-by-step Interactive Node Walkthrough */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-sky-400" />
              <h3 className="text-lg font-bold text-slate-100">決策樹互動步進演練</h3>
            </div>
            <button
              onClick={() => setActiveStep(0)}
              className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>從頭開始</span>
            </button>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-sky-500/20 text-sky-400 text-xs font-bold border border-sky-500/30">
                節點 {activeStep + 1} / {steps.length}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-100">
                {steps[activeStep].title}
              </h4>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed p-4 rounded-xl bg-slate-950 border border-slate-800">
              {steps[activeStep].prompt}
            </p>

            {steps[activeStep].action && (
              <div className="p-3 rounded-lg bg-sky-950/40 border border-sky-500/30 text-xs sm:text-sm text-sky-200">
                <strong>指導行動：</strong> {steps[activeStep].action}
              </div>
            )}

            <div className="pt-4 border-t border-slate-800/80">
              <div className="text-xs text-slate-400 mb-2">請選擇現場狀況以繼續演練：</div>
              <div className="flex flex-wrap gap-3">
                {steps[activeStep].options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => setActiveStep(opt.next)}
                    className={`px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold bg-slate-950 hover:bg-slate-900 transition-all flex items-center gap-2 ${opt.color}`}
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
