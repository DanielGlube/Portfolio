export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Publication {
  title: string;
  description: string;
  role?: string;
  link?: string;
  image?: string;
}

export interface NavLink {
  label: string;
  href: string;
}