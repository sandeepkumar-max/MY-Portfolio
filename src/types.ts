export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'frontend' | 'development-tools' | 'other';
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  technologies: string[];
  imagePlaceholderColor: string; // Gradient class for the placeholder
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  status: 'completed' | 'ongoing';
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  badgeColor: string;
  description: string;
}

export interface Statistic {
  label: string;
  value: number;
  suffix: string;
  iconName: string;
}

export interface Goal {
  title: string;
  description: string;
  iconName: string;
  timeframe: string;
}
