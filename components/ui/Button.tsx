import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  fullWidth = false,
  className = '',
}) => {
  // Base styles - ensuring minimum touch target of 44x44px for accessibility
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-button transition-all duration-250 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg disabled:opacity-50 disabled:cursor-not-allowed';

  // Variant styles with beautiful gradients and effects
  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-700 hover:to-primary-600 focus:ring-primary-500 shadow-lg hover:shadow-xl hover:scale-105 active:scale-100',
    secondary: 'bg-gradient-to-r from-accent-600 to-accent-500 text-white hover:from-accent-700 hover:to-accent-600 focus:ring-accent-500 shadow-lg hover:shadow-xl hover:scale-105 active:scale-100',
    outline: 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10 hover:border-primary-400 focus:ring-primary-500 backdrop-blur-sm',
    ghost: 'text-primary-400 hover:bg-primary-500/10 hover:text-primary-300 focus:ring-primary-500',
  };

  // Size styles - ensuring minimum 44px height for touch targets
  const sizeStyles = {
    sm: 'px-4 py-2.5 text-sm min-h-[44px]',
    md: 'px-6 py-3 text-base min-h-[44px]',
    lg: 'px-8 py-4 text-lg min-h-[48px]',
  };

  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';

  // Combine all styles
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  // Common props for both button and link
  const commonProps = {
    className: buttonClasses,
    ...(disabled && { 'aria-disabled': true }),
  };

  // Render as link if href is provided
  if (href && !disabled) {
    return (
      <Link href={href} {...commonProps}>
        {children}
      </Link>
    );
  }

  // Render as button
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...commonProps}
    >
      {children}
    </button>
  );
};

export default Button;
