export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string[];
  technologies: string[];
  github: string;
  live: string;
  gradient?: string;
  status?: string;
}

export interface Experience {
  company: string;
  role: string;
  website: string;
  period: string;
  achievements: string[];
}

export interface Skill {
  category: string;
  items: string[];
}
