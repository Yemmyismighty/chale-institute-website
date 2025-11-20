import React from 'react';

export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  id?: string;
}

const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className = '',
  align = 'left',
  id,
}) => {
  // Typography styles for each heading level
  const levelStyles = {
    1: 'text-5xl md:text-6xl lg:text-7xl font-bold',
    2: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    3: 'text-3xl md:text-4xl lg:text-5xl font-semibold',
    4: 'text-2xl md:text-3xl lg:text-4xl font-semibold',
    5: 'text-xl md:text-2xl lg:text-3xl font-medium',
    6: 'text-lg md:text-xl lg:text-2xl font-medium',
  };

  // Alignment styles
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // Base styles for all headings with theme support
  const baseStyles = 'text-light-text dark:text-dark-text';

  // Combine all styles
  const headingClasses = `${baseStyles} ${levelStyles[level]} ${alignStyles[align]} ${className}`;

  // Create the appropriate heading element
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={headingClasses} id={id}>{children}</Tag>;
};

export default Heading;
