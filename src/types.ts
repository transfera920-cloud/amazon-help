export interface ChapterInfo {
  association: string;
  chapterNumber: string;
  chapterTitle: string;
  heroHeadline: string;
  heroSubline: string;
  primaryCta: string;
  secondaryCta: string;
  coreMotto: string;
  fullPhilosophy: string;
}

export interface IncidentFlowStep {
  step: number;
  title: string;
  desc: string;
  badge: string;
}

export interface FirstResponseStep {
  number: string;
  title: string;
  coreIdea: string;
  items?: string[];
  note?: string;
}

export interface SOSOption {
  id: string;
  level: string;
  label: string;
  icon: string;
  color: string;
  traits: string[];
}

export interface CommToolComparison {
  name: string;
  role: string;
  tag: string;
  pros: string[];
  limits: string[];
  bestFor: string;
  importantNote?: string;
}

export interface FirstAidRule {
  id: number;
  number: string;
  title: string;
  keyPrinciple: string;
  details: string[];
  warning?: string;
  equipment?: string[];
}

export interface WaitingStage {
  phase: string;
  timeRange: string;
  focus: string;
  tasks: string[];
  note?: string;
}

export interface LeaderDimension {
  id: string;
  title: string;
  subtitle: string;
  focus: string;
  tasks: string[];
}

export interface DecisionNode {
  id: string;
  question: string;
  yesNext?: string;
  noNext?: string;
  action?: string;
  subActions?: string[];
  type: 'condition' | 'action' | 'assessment';
}

export interface ScenarioQuestion {
  id: number;
  title: string;
  context: string;
  options: {
    id: string;
    text: string;
    status: 'recommended' | 'reassess' | 'high_risk' | 'safer_alternative';
    explanation: string;
    nextStep: string;
  }[];
}

export interface ChecklistGroup {
  id: string;
  title: string;
  items: {
    id: string;
    label: string;
    detail?: string;
  }[];
}
