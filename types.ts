
export interface TattooStyle {
  id: string;
  title: string;
  image: string;
  className?: string;
}

export interface Story {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
}

export interface Artist {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
}

export interface Location {
  id: string;
  city: string;
  address: string;
  phone?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  serviceType: string;
  description?: string;
}

export interface Course {
  id: string;
  title: string;
  badge?: string;
  targetAudience?: string;
  duration: string;
  level: string;
  description: string;
}

export interface Offer {
  id: string;
  category: string;
  title: string;
  image: string;
  bgColor: string; // Tailwind class or hex code
}