export type PageId = 'home' | 'services' | 'about' | 'blog' | 'contact';

export interface ServiceItem {
  id: string;
  category: 'web' | 'marketing';
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  technologies: string[];
  pencilAnnotation: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  accentColor: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: 'Web Architecture' | 'SEO Strategy' | 'Digital Growth' | 'Engineering';
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  content: string[];
  keyTakeaways: string[];
  pencilNote: string;
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
  note: string;
  tapeColor?: string;
}

export interface AnimePoster {
  id: string;
  title: string;
  theme: string;
  image: string;
  quote: string;
  pencilCaption: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  serviceReceived: string;
  rating: number;
  rotationDeg: number;
  noteColor: 'yellow' | 'blue' | 'green';
}
