import React from 'react';
import { Shield, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-3">
            <a
              href="https://amazon-hike.com/"
              className="inline-flex items-center gap-2.5 text-slate-100 font-bold text-base hover:text-sky-400 transition-colors"
              aria-label="回首頁：亞馬遜國家山岳協會"
            >
              <div className="w-7 h-7 rounded bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                <Shield className="w-4 h-4" />
              </div>
              <span>亞馬遜國家山岳協會</span>
            </a>
            <p className="text-slate-400 leading-relaxed max-w-md">
              登山安全教育知識平台・第十章：求援與應變。本平台為公益性山域安全教案，旨在建立健全之事故管理思維與求援協作準則。
            </p>
          </div>

          {/* Col 2: Fast Navigation */}
          <div className="space-y-2">
            <span className="text-slate-200 font-semibold block text-sm">單元速查</span>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#first-response" className="hover:text-sky-400 transition-colors">第一時間處置</a></li>
              <li><a href="#sos-decision" className="hover:text-sky-400 transition-colors">SOS 求救決策助手</a></li>
              <li><a href="#dispatch-card" className="hover:text-sky-400 transition-colors">山難求援通報卡</a></li>
              <li><a href="#comm-tools" className="hover:text-sky-400 transition-colors">通訊工具比較</a></li>
              <li><a href="#first-aid" className="hover:text-sky-400 transition-colors">野外急救照護</a></li>
            </ul>
          </div>

          {/* Col 3: Practical Tools */}
          <div className="space-y-2">
            <span className="text-slate-200 font-semibold block text-sm">實戰工具</span>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#waiting-rescue" className="hover:text-sky-400 transition-colors">等待救援階段管理</a></li>
              <li><a href="#leader-mgmt" className="hover:text-sky-400 transition-colors">領隊 5 維責任清單</a></li>
              <li><a href="#decision-tree" className="hover:text-sky-400 transition-colors">事故動態決策樹</a></li>
              <li><a href="#scenario-training" className="hover:text-sky-400 transition-colors">高海拔失溫情境演練</a></li>
              <li><a href="#one-page-checklist" className="hover:text-sky-400 transition-colors">一頁式離線檢核表</a></li>
            </ul>
          </div>
        </div>

        {/* Legal and Disclaimer Notice */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} 亞馬遜國家山岳協會. 登山教育版權所有. 本站內容為事故應變教案，不取代現場專業搜救或醫療單位之正式指示。
          </p>
          <div className="flex items-center gap-4">
            <span>緊急求援專線：119 / 112</span>
            <span>WGS84 座標格式</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
