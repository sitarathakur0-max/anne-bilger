export type PageId = 'home' | 'services' | 'about' | 'faq' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'consultation' | 'hearing' | 'daily';
}

export interface ConsultationStep {
  step: string;
  title: string;
  description: string;
  focus: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceInterest: string;
  preferredTime: string;
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  message?: string;
}
