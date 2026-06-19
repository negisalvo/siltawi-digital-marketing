/**
 * Types and interfaces for the Siltawi Digital Marketing company website.
 */

export interface ServiceItem {
  name: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide icons
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string; // 'digital-marketing' | 'web-dev' | 'branding' | 'content' | 'seo'
  image: string;
  client: string;
  description: string;
  link?: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  department: string;
  image: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface CompanyStat {
  id: string;
  value: string;
  numberValue: number;
  suffix: string;
  label: string;
  iconName: string;
}

export interface CoreValue {
  name: string;
  description: string;
  iconName: string;
}

export interface TargetClient {
  name: string;
  description: string;
  iconName: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
}
