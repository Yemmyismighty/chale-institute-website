'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  objectFit = 'cover',
  sizes,
}) => {
  const [imageError, setImageError] = useState(false);

  // Handle image loading errors with fallback UI
  if (imageError) {
    return (
      <div
        className={`bg-dark-surface flex items-center justify-center ${className}`}
        style={
          !fill && width && height
            ? { width: `${width}px`, height: `${height}px` }
            : undefined
        }
      >
        <div className="text-dark-text-muted text-center p-4">
          <svg
            className="w-12 h-12 mx-auto mb-2 opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm">Image unavailable</p>
        </div>
      </div>
    );
  }

  // Default responsive sizes if not provided
  // These sizes help the browser select the optimal image size for the viewport
  const defaultSizes = sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  // Common image props
  const imageProps = {
    src,
    alt,
    priority,
    className,
    onError: () => setImageError(true),
    style: { objectFit },
    ...(sizes && { sizes: defaultSizes }),
  };

  // Render with fill prop for responsive containers
  if (fill) {
    return (
      <Image
        {...imageProps}
        alt={alt}
        fill
        sizes={defaultSizes}
      />
    );
  }

  // Render with explicit width and height
  if (width && height) {
    return (
      <Image
        {...imageProps}
        alt={alt}
        width={width}
        height={height}
      />
    );
  }

  // Fallback: render with fill if no dimensions provided
  return (
    <Image
      {...imageProps}
      alt={alt}
      fill
      sizes={defaultSizes}
    />
  );
};

export default OptimizedImage;
