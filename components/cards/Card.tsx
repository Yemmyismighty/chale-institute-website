import React from 'react';
import Link from 'next/link';
import { CardProps } from '@/types';
import { cn } from '@/lib/utils';

const Card: React.FC<CardProps> = ({
  children,
  interactive = false,
  clickable = false,
  href,
  onClick,
  className = '',
  hoverEffect = 'lift',
}) => {
  // Base card styles with subtle gradient border effect and theme support
  const baseStyles = 'bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-card overflow-hidden backdrop-blur-sm h-full flex flex-col';

  // Transition styles
  const transitionStyles = 'transition-all duration-300 ease-in-out';

  // Focus styles for keyboard navigation
  const focusStyles = 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-bg';

  // Hover effect styles (only applied when interactive is true)
  const hoverEffectStyles = interactive
    ? {
        lift: 'hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-card-hover hover:shadow-primary-500/10 dark:hover:shadow-primary-500/10',
        scale: 'hover:scale-[1.02]',
        glow: 'hover:shadow-lg dark:hover:shadow-card-hover hover:border-primary-500/50 dark:hover:border-primary-500/50 hover:shadow-primary-500/20 dark:hover:shadow-primary-500/30',
        none: '',
      }[hoverEffect]
    : '';

  // Clickable styles (cursor pointer when clickable)
  const clickableStyles = clickable ? 'cursor-pointer' : '';

  // Combine all styles
  const cardClasses = cn(
    baseStyles,
    transitionStyles,
    hoverEffectStyles,
    clickableStyles,
    className
  );

  // If clickable and href is provided, render as a link
  if (clickable && href) {
    return (
      <Link 
        href={href} 
        className={cn(cardClasses, focusStyles)}
        tabIndex={0}
      >
        {children}
      </Link>
    );
  }

  // If clickable with onClick handler, render as button
  if (clickable && onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cn(cardClasses, focusStyles, 'w-full text-left')}
        tabIndex={0}
      >
        {children}
      </button>
    );
  }

  // Otherwise, render as a static div
  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;
