// Shared TypeScript types for component props
import { ReactNode } from 'react';

// ============================================================================
// Layout Component Props
// ============================================================================

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export interface HeaderProps {
  logo: {
    src: string;
    alt: string;
  };
  navigation?: NavigationItem[];
}

export interface FooterProps {
  sections: FooterSection[];
  copyright: string;
  socialLinks?: SocialLink[];
}

// ============================================================================
// Section Component Props
// ============================================================================

export interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  cta?: {
    label: string;
    href: string;
  };
  overlay?: boolean;
}

export interface ContentGridProps {
  title?: string;
  description?: string;
  items: CardData[];
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  cardType?: 'content' | 'feature' | 'custom';
}

export interface TextBlockProps {
  title: string;
  content: string;
  image?: {
    src: string;
    alt: string;
    position?: 'left' | 'right';
  };
  layout?: 'centered' | 'split';
}

export interface CallToActionProps {
  title: string;
  description?: string;
  primaryButton: ButtonProps & { children: ReactNode };
  secondaryButton?: ButtonProps & { children: ReactNode };
  backgroundStyle?: 'solid' | 'gradient' | 'image';
}

// ============================================================================
// Card Component Props
// ============================================================================

export interface CardProps {
  children: ReactNode;
  interactive?: boolean;
  clickable?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  hoverEffect?: 'lift' | 'scale' | 'glow' | 'none';
}

export interface ContentCardProps {
  image: string;
  title: string;
  description: string;
  interactive?: boolean;
  clickable?: boolean;
  href?: string;
  tags?: string[];
}

export interface FeatureCardProps {
  icon?: string;
  title: string;
  description: string;
  interactive?: boolean;
  clickable?: boolean;
  href?: string;
}

// ============================================================================
// UI Primitive Props
// ============================================================================

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
}

// ============================================================================
// Re-export content types for convenience
// ============================================================================

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
  icon: string;
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
