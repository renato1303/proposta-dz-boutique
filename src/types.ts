export type SlideTheme = 'black' | 'green-deep' | 'green-mid' | 'lime' | 'white';

export interface SlideData {
  id: string;
  number: string;
  title: string;
  kicker: string;
  theme: SlideTheme;
  brandbar?: string;
  speakerNotes?: string[];
}

export interface TeamMember {
  name: string;
  initial: string;
  role: string;
  focus: string;
  deliverables?: string[];
  photo?: string;
}

export interface PhaseInfo {
  id: string;
  number: string;
  title: string;
  month: string;
  objective: string;
  highlights: string[];
  kpis: string;
}

export interface DeliverableItem {
  id: string;
  title: string;
  category: 'Estratégia' | 'Tracking & Tech' | 'Mídia & Anúncios' | 'Conversão' | 'Frente Paralela' | 'Visão de Futuro';
  detail: string;
  timeline: string;
}

export interface PricingOption {
  type: 'monthly' | 'onetime';
  label: string;
  amount: string;
  period: string;
  description: string;
  badge?: string;
  benefits: string[];
  isHighlighted?: boolean;
}
