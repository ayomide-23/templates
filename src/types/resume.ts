export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  summary: string;
  profilePhoto?: string;
  workExperience: WorkExperience[];
  education: Education[];
  skills: string[];
  projects?: Project[];
  certificates?: Certificate[];
  languages?: Language[];
  publications?: Publication[];
  metrics?: Metric[];
}

export interface WorkExperience {
  company: string;
  jobTitle: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  graduationDate: string;
  gpa?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  id?: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface Publication {
  title: string;
  journal: string;
  date: string;
  authors: string;
}

export interface Metric {
  label: string;
  value: string;
}

export type ThemeVariant = 'neutral' | 'accent' | 'dark';

export interface TemplateMetadata {
  id: number;
  name: string;
  slug: string;
  description: string;
  industry: string;
  fonts: string[];
  features: string[];
  recommendedFor: string;
}
