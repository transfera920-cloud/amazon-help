import React, { useState } from 'react';
import { dispatchCardFields, dispatchSample, dispatchCheckQuestions } from '../data/chapter10.ts';
import { DispatchInfoSvg } from './svg/DispatchInfoSvg.tsx';
import { Radio, Copy, Check, Info, FileText, CheckCircle2, HelpCircle } from 'lucide-react';

export const EmergencyDispatchSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Interactive Generator State
  const [customLocation, setCustomLocation] = useState('');
  const [customCoords, setCustomCoords] = useState('');
  const [customPeople, setCustomPeople] = useState('隊伍共 人， 人受傷');
  const [customInjury, setCustomInjury] = useState('');
  const [customCanMove, setCustomCanMove] = useState('無法自主負重行走');
  const [customWeather, setCustomWeather] = useState('多雲微風，能見度可');
  const [customGear, setCustomGear] = useState('有帳篷睡袋，糧食充足');
  const [customContact, setCustomContact] = useState('手機通聯，電量約 70%');
  const [customCopied, setCustomCopied] = useState(false);

  const sampleFullText = `${dispatchSample.statement}
位置：${dispatchSample.location}
座標：${dispatchSample.coordinates}
人員：${dispatchSample.personnel}
傷勢：${dispatchSample.injury}
天候：${dispatchSample.weather}
地形：${dispatchSample.terrain}
裝備：${dispatchSample.supplies}
通訊：${dispatchSample.communication}`;

  const generatedCustomText = `我需要山岳救援。
地點：${customLocation || '[請填寫山域名稱與步道里程]'}
座標：${customCoords || '[請填寫 WGS84 經緯度座標與高程]'}
人數：${customPeople}
傷勢：${customInjury || '[請填寫傷患意識、呼吸與具體外傷情況]'}
移動能力：${customCanMove}
現場天氣：${customWeather}
可用裝備：${customGear}
通訊方式：${customContact}`;

  const handleCopySample = () => {
    navigator.clipboard.writeText(sampleFullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyCustom = () => {
    navigator.clipboard.writeText(generatedCustomText);
    setCustomCopied(true);
    setTimeout(() => setCustomCopied(false), 2500);
  };

  return (
    <section id="dispatch-card" className="py-16 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/40 text-sky-400 text-xs font-semibold">
            <span>第四單元</span>
            <span className="text-sky-500">•</span>
            <span>實務通報模板</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
            山難求援通報
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            正確通報，讓救援人員知道「你在哪裡、發生什麼事、需要什麼」。
          </p>
        </div>

        {/* Dispatch Hub SVG Graphic */}
        <div className="mt-8 rounded-2xl bg-slate-950 border border-slate-800 p-4 sm:p-6 shadow-xl">
          <DispatchInfoSvg className="w-full h-auto max-h-[340px]" />
        </div>

        {/* 10 Core Dispatch Fields Grid */}
        <div className="mt-10 space-y-4">
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Radio className="w-5 h-5 text-sky-400" />
            <span>求援通報資訊卡：必備的 10 大關鍵要素</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {dispatchCardFields.map((field, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <span className="text-xs font-bold text-sky-400 block mb-1">{field.label}</span>
                <p className="text-xs text-slate-400 leading-relaxed">{field.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Template Sample & Generator */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Official Sample Card */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300">
                  <FileText className="w-3.5 h-3.5 text-sky-400" />
                  <span>標準通報範例卡 (Demo Script)</span>
                </span>
                <button
                  onClick={handleCopySample}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 text-xs font-semibold transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? '已複製到剪貼簿' : '一鍵複製範例'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed space-y-1.5 whitespace-pre-line">
                {sampleFullText}
              </div>

              {/* Strict Notice */}
              <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-500/40 text-amber-300 text-xs flex items-start gap-2">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{dispatchSample.disclaimer}</span>
              </div>
            </div>
          </div>

          {/* Interactive Custom Dispatch Generator */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300">
                  <Radio className="w-3.5 h-3.5 text-emerald-400" />
                  <span>現場通報生成練習器 (Practice Generator)</span>
                </span>
                <button
                  onClick={handleCopyCustom}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold transition-colors"
                >
                  {customCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{customCopied ? '已複製自訂通報' : '複製生成內容'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1">地點與山名步道</label>
                  <input
                    type="text"
                    value={customLocation}
                    onChange={(e) => setCustomLocation(e.target.value)}
                    placeholder="例：雪山黑森林8.2K處"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 focus:outline-none focus:border-sky-500 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">精確 GPS 座標 (WGS84)</label>
                  <input
                    type="text"
                    value={customCoords}
                    onChange={(e) => setCustomCoords(e.target.value)}
                    placeholder="例：北緯 24.38°，東經 121.23°"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 focus:outline-none focus:border-sky-500 text-xs font-mono"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-slate-400 mb-1">傷情與意識狀態</label>
                  <input
                    type="text"
                    value={customInjury}
                    onChange={(e) => setCustomInjury(e.target.value)}
                    placeholder="例：膝蓋扭傷無法站立，無大出血，意識清醒"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 focus:outline-none focus:border-sky-500 text-xs"
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-line leading-relaxed">
                {generatedCustomText}
              </div>
            </div>
          </div>
        </div>

        {/* 9 Self-check questions card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-sky-400" />
            <h3 className="text-lg font-bold text-slate-100">求援通報檢核卡（通話前反思 9 問）</h3>
          </div>
          <p className="text-sm text-slate-400 mb-6">
            在撥通 119 或傳送衛星簡訊前，先在心中快速核對這 9 個問題，能讓整段通話維持冷靜且條理分明：
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dispatchCheckQuestions.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  Q{idx + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100">{item.q}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
