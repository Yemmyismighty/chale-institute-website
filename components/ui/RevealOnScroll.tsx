'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom';
  delay?: number;
  duration?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  animation = 'slide-up',
  delay = 0,
  duration = 600,
}) => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Animation variants
  const animations = {
    fade: {
      initial: 'opacity-0',
      animate: 'opacity-100',
    },
    'slide-up': {
      initial: 'opacity-0 translate-y-10',
      animate: 'opacity-100 translate-y-0',
    },
    'slide-down': {
      initial: 'opacity-0 -translate-y-10',
      animate: 'opacity-100 translate-y-0',
    },
    'slide-left': {
      initial: 'opacity-0 translate-x-10',
      animate: 'opacity-100 translate-x-0',
    },
    'slide-right': {
      initial: 'opacity-0 -translate-x-10',
      animate: 'opacity-100 translate-x-0',
    },
    zoom: {
      initial: 'opacity-0 scale-95',
      animate: 'opacity-100 scale-100',
    },
  };

  const selectedAnimation = animations[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${
        isInView ? selectedAnimation.animate : selectedAnimation.initial
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
