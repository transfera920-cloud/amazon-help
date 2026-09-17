/**
 * 亞馬遜國家山岳協會｜登山安全教育知識平台
 * 第十章：求援與應變
 */

import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { CoreConceptSection } from './components/CoreConceptSection.tsx';
import { FirstResponseSection } from './components/FirstResponseSection.tsx';
import { SosDecisionSection } from './components/SosDecisionSection.tsx';
import { RescueTimelineSection } from './components/RescueTimelineSection.tsx';
import { EmergencyDispatchSection } from './components/EmergencyDispatchSection.tsx';
import { CommunicationSection } from './components/CommunicationSection.tsx';
import { FirstAidSection } from './components/FirstAidSection.tsx';
import { WaitingRescueSection } from './components/WaitingRescueSection.tsx';
import { LeaderManagementSection } from './components/LeaderManagementSection.tsx';
import { DecisionTreeSection } from './components/DecisionTreeSection.tsx';
import { RescueCollabSection } from './components/RescueCollabSection.tsx';
import { ScenarioTrainingSection } from './components/ScenarioTrainingSection.tsx';
import { OnePageChecklistSection } from './components/OnePageChecklistSection.tsx';
import { SummarySection } from './components/SummarySection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      {/* Top Fixed Header with Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Section 0: Core Concept & Pipeline */}
        <CoreConceptSection />

        {/* Section 1: First Response (冷靜、評估、求救) */}
        <FirstResponseSection />

        {/* Section 2: SOS Decision Assistant (SOS 決策樹與互動工具) */}
        <SosDecisionSection />

        {/* Section 3: Rescue Timeline & Environmental Factors */}
        <RescueTimelineSection />

        {/* Section 4: Emergency Dispatch Card & Generator */}
        <EmergencyDispatchSection />

        {/* Section 5: Communication Tools In-Depth Comparison */}
        <CommunicationSection />

        {/* Section 6: Wilderness First Aid & Hypothermia Prevention */}
        <FirstAidSection />

        {/* Section 7: Waiting for Rescue (4 Phases & Psychological Management) */}
        <WaitingRescueSection />

        {/* Section 8: Leader Incident Management (5 Dimensions & Interactive 15-Item Checklist) */}
        <LeaderManagementSection />

        {/* Section 9: Incident Dynamic Decision Tree (Continuous Re-evaluation Loop) */}
        <DecisionTreeSection />

        {/* Section 10: Rescue Collaboration (Info Exchange, Handover, Support) */}
        <RescueCollabSection />

        {/* Section 11: Scenario Training (High-altitude Hypothermia & Trauma) */}
        <ScenarioTrainingSection />

        {/* Section 12: One-Page Emergency Checklist (Printable / Offline Ready) */}
        <OnePageChecklistSection />

        {/* Section 13: Summary & Association Closing */}
        <SummarySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
