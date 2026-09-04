export interface Procedure {
  id: string;
  name: string;
  category: 'facial' | 'corporal' | 'laser';
  categoryLabel: string;
  description: string;
  benefits: string[];
  details: {
    headline: string;
    intro: string;
    reasonsTitle: string;
    reasons: string[];
    experienceTitle: string;
    experience: string;
    closing: string;
  };
  imageUrl: string;
  recommendedSessions?: string;
  whatsappMessage: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  treatment?: string;
  rating: number;
  text: string;
  initials: string;
}

export interface ResultItem {
  id: string;
  title: string;
  category: 'facial' | 'corporal' | 'laser';
  description: string;
  beforeImg: string;
  afterImg: string;
  sessions: string;
  tag: string;
}

export interface Differential {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}
