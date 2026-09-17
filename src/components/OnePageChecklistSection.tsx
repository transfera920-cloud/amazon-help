import React, { useState } from 'react';
import { onePageChecklistData } from '../data/chapter10.ts';
import { ClipboardCheck, CheckSquare, Square, Printer, RotateCcw } from 'lucide-react';

export const OnePageChecklistSection: React.FC = () => {
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});

  const totalItemsCount = onePageChecklistData.reduce((acc, g) => acc + g.items.length, 0);
  const checkedItemsCount = Object.values(checkedMap).filter(Boolean).length;
  const progressPercent = Math.round((checkedItemsCount / totalItemsCount) * 100);

  const toggleItem = (id: string) => {
    setCheckedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setCheckedMap({});
  };

  return (
    <section id="one-page-checklist" className="py-16 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/40 text-sky-400 text-xs font-semibold">
              <span>第十二單元</span>
              <span className="text-sky-500">•</span>
              <span>現場離線備忘</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
              登山事故求援一頁式檢核表
            </h2>
            <p className="text-slate-300 text-base">
              現場照單核對，確保在高度心理壓力下無一關鍵程序遭到遺漏。支援列印與離線勾選。
            </p>
          </div>

          {/* Action Tools: Print & Reset */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold transition-colors"
              title="列印一頁式檢核表以供戶外防水紙攜帶"
            >
              <Printer className="w-4 h-4 text-sky-400" />
              <span>列印 / 存為 PDF</span>
            </button>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 text-xs sm:text-sm font-semibold transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>重置</span>
            </button>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="my-8 p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
              <ClipboardCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-slate-100">全流程檢核掌控進度</span>
              <span className="text-xs text-slate-400 block">
                已核對 {checkedItemsCount} / {totalItemsCount} 項 ({progressPercent}%)
              </span>
            </div>
          </div>
          <div className="w-full sm:w-64 h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-sky-400 to-emerald-400 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* 5 Groups Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {onePageChecklistData.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between shadow-xl hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="pb-3 border-b border-slate-800">
                  <h3 className="text-base font-bold text-slate-100">{group.title}</h3>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {group.items.map((item) => {
                    const isChecked = !!checkedMap[item.id];
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => toggleItem(item.id)}
                          className={`w-full p-2.5 rounded-lg border text-left flex items-start gap-2.5 transition-all ${
                            isChecked
                              ? 'bg-sky-950/40 border-sky-500/50 text-slate-100 line-through opacity-80'
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
                          <span className="leading-snug">{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
