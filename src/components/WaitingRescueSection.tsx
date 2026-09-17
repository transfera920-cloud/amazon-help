import React from 'react';
import { waitingPhases, psychologicalPrinciples } from '../data/chapter10.ts';
import { Clock, HeartHandshake, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

export const WaitingRescueSection: React.FC = () => {
  return (
    <section id="waiting-rescue" className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-sky-400 text-xs font-semibold">
            <span>第七單元</span>
            <span className="text-slate-500">•</span>
            <span>現場管理與心理穩定</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
            等待救援：四階段管理與心理防線
          </h2>
          <p className="text-slate-300 text-base">
            通報完成並非坐以待斃。將等待時間有系統地切分為明確的管理階段，並將全隊心理狀態納入管理核心。
          </p>
        </div>

        {/* 4 Phases Timeline Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {waitingPhases.map((stage, idx) => (
            <div
              key={stage.phase}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 font-bold text-xs border border-sky-500/20">
                    {stage.phase}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span>{stage.timeRange}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-100">{stage.focus}</h3>
                </div>

                <ul className="space-y-2 text-xs text-slate-300">
                  {stage.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>

                {stage.note && (
                  <div className="p-2.5 rounded-lg bg-amber-950/30 border border-amber-500/30 text-[11px] text-amber-200 leading-relaxed">
                    <strong>原則提醒：</strong>
                    {stage.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Psychological Management Block */}
        <div className="mt-16 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100">
                等待救援期間，心理狀態也是事故管理的一部分
              </h3>
              <p className="text-sm text-slate-400">
                恐慌是山難現場的隱形毒藥。有組織的心理調控能使全體隊員維持清晰理智。
              </p>
            </div>
          </div>

          {/* Golden Core Quote */}
          <div className="my-6 p-4 rounded-xl bg-slate-950 border border-purple-500/30 flex items-center justify-between">
            <div className="text-base sm:text-lg font-bold text-slate-100">
              核心心法：
              <span className="text-purple-400 ml-1">等待救援不是「什麼都不做」</span>，而是
              <span className="text-sky-400 ml-1">「持續管理現場，直到救援人員接手」</span>。
            </div>
          </div>

          {/* 6 Psychological Action Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {psychologicalPrinciples.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span>{item.title}</span>
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
