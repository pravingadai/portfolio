// Project type
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'mern' | 'ai' | 'java';
  skills: string[];
  demoLink: string;
  githubLink: string;
  bgGradient: string;
}

// Blog post type
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  imageUrl: string;
  category: 'react' | 'backend' | 'aws' | 'ai';
  date: string;
  tags?: string[];
}

// Skills type
export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Experience type
export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  skills: string[];
}

// ContactForm type
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Theme type
export type Theme = 'dark' | 'light';

// Language type
export type Language = 'EN' | 'FR' | 'ES';
