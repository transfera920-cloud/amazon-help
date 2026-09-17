import React from 'react';
import { chapterMeta } from '../data/chapter10.ts';
import { MountainHeroSvg } from './svg/MountainHeroSvg.tsx';
import { ArrowDownRight, Compass, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-12 pb-20 overflow-hidden bg-slate-950">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs sm:text-sm font-semibold tracking-wide">
              <Compass className="w-4 h-4" />
              <span>{chapterMeta.association}｜{chapterMeta.chapterNumber}：{chapterMeta.chapterTitle}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              {chapterMeta.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {chapterMeta.heroSubline}
            </p>

            {/* Core Philosophy Highlight Badge */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-300">本章核心思維</p>
                <p className="text-sm text-slate-300 mt-0.5">{chapterMeta.fullPhilosophy}</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#core-concept"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-sky-500/20 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <span>{chapterMeta.primaryCta}</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#one-page-checklist"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm sm:text-base transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <span>{chapterMeta.secondaryCta}</span>
              </a>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>現場安全第一</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>10項完整通報</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>領隊5維管理</span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-slate-950">
              <MountainHeroSvg className="w-full h-auto" />
            </div>
            <div className="mt-3 text-center text-xs text-slate-400">
              圖示：搜救直升機、高軌道衛星連線與山難座標定位示意
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
