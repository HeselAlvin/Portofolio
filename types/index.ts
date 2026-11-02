export interface TechItem {
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  type: string;
  desc: string;
  image: string;
  screens?: {
    left: string;
    center: string;
    right: string;
  };
  github: string;
  tech: TechItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  desc: string;
  points?: string[];
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  type: string;
  desc: string;
  image: string;
  screens?: {
    left: string;
    center: string;
    right: string;
  };
  github: string;
  tech: TechItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  desc: string;
  points?: string[];
}

export interface CertificateItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  desc: string;
  image?: string;
  file?: string;
}