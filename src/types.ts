export type PageId = 'home' | 'about' | 'services' | 'industries' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  href: string;
}

export interface MetricItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
  accentMetric: string;
  accentMetricLabel: string;
}

export interface IndustryItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  challengesSolved: string[];
  keyMetric: string;
  keyMetricLabel: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  specialties: string[];
  image: string;
  linkedin: string;
}

export interface ValueItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  focus: string;
  description: string;
  deliverable: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface TestimonialItem {
  quote: string;
  clientName: string;
  position: string;
  company: string;
  industry: string;
  metricHighlight: string;
  image: string;
  isPlaceholder: boolean;
}
