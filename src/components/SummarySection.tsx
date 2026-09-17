import React from 'react';
import { chapterMeta } from '../data/chapter10.ts';
import { ShieldCheck, Compass, Heart, Award, ArrowUp } from 'lucide-react';

export const SummarySection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="summary" className="py-20 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-400 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>章節總結</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">
            求援，是事故管理的開始
          </h2>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl text-left space-y-4">
            <p className="text-lg sm:text-xl font-bold text-sky-400 text-center">
              「正確的求援，不是按下求救就結束，而是建立現場管理、保護傷患、與救援人員緊密協作的起點。」
            </p>
            <div className="border-t border-slate-800 pt-4 text-sm sm:text-base text-slate-300 leading-relaxed space-y-3">
              <p>
                在任何一場山難搜救中，生還的關鍵往往不是搜救隊走得多快，而是身處現場的登山隊伍在救援人員抵達前，是否做對了每一件關鍵小事：
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>自保冷靜：</strong>確保現場環境無落石與滑墜風險，拒絕次生災害。</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>精準座標：</strong>以 WGS84 經緯度回報，消弭搜救人員盲目盲找的無效時間。</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>防範失溫：</strong>用睡袋、睡墊阻斷地氣與寒風，保溫即是保命。</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>責任交接：</strong>詳實記錄時間與病程，無縫接軌專業搜救醫療人員。</span>
                </div>
              </div>
            </div>
          </div>

          {/* Association Signoff */}
          <div className="pt-6 space-y-2">
            <div className="flex items-center justify-center gap-2 text-sm font-bold text-slate-200">
              <Award className="w-5 h-5 text-sky-400" />
              <span>{chapterMeta.association}</span>
            </div>
            <p className="text-xs text-slate-400">
              致力於普及科學、系統化與負責任的現代登山安全教育
            </p>
          </div>

          {/* Back to top CTA */}
          <div className="pt-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
              <span>回到章節頂部</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
