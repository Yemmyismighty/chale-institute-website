// Content type definitions will be defined here
export interface PageContent {
  metadata: PageMetadata;
  hero: HeroData;
  sections: SectionData[];
}

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

export interface HeroData {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  cta?: CTAData;
}

export interface SectionData {
  id: string;
  type: 'grid' | 'text' | 'cta' | 'projects' | 'publications' | 'featured-publication';
  title?: string;
  description?: string;
  data: GridData | TextData | CTAData | ProjectsData | PublicationsData | FeaturedPublicationData;
}

export interface GridData {
  items: CardData[];
  columns?: ResponsiveColumns;
}

export interface CardData {
  id: string;
  image?: string;
  icon?: string;
  title: string;
  description: string;
  href?: string;
  tags?: string[];
}

export interface TextData {
  content: string;
  image?: ImageData;
  layout?: 'centered' | 'split';
}

export interface CTAData {
  title: string;
  description?: string;
  primaryButton: ButtonData;
  secondaryButton?: ButtonData;
}

export interface ButtonData {
  label: string;
  href: string;
  variant?: string;
}

export interface ImageData {
  src: string;
  alt: string;
  position?: 'left' | 'right';
}

export interface ResponsiveColumns {
  mobile: number;
  tablet: number;
  desktop: number;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: NavigationItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface ProjectsData {
  projects: ProjectItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  category?: string;
}

export interface PublicationsData {
  publications: PublicationItem[];
}

export interface PublicationItem {
  id: string;
  image: string;
  title: string;
  description: string;
  downloadUrl: string;
  tags?: string[];
}

export interface FeaturedPublicationData {
  featuredTitle: string;
  featuredSubtitle: string;
  description: string;
  backgroundImage: string;
  downloadUrl: string;
}
