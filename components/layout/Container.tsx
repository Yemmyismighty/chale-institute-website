import React from 'react';
import { ContainerProps } from '@/types';

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
}) => {
  // Base styles with consistent horizontal padding
  const baseStyles = 'mx-auto px-4 sm:px-6 lg:px-8';

  // Size variants for max-width constraints
  const sizeStyles = {
    sm: 'max-w-3xl',      // ~768px
    md: 'max-w-5xl',      // ~1024px
    lg: 'max-w-7xl',      // ~1280px
    xl: 'max-w-[1536px]', // ~1536px
    full: 'max-w-full',   // No constraint
  };

  // Combine all styles
  const containerClasses = `${baseStyles} ${sizeStyles[size]} ${className}`;

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

export default Container;
