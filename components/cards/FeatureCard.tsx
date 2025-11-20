import React from 'react';
import Card from './Card';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { FeatureCardProps } from '@/types';

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  interactive = false,
  clickable = false,
  href,
}) => {
  return (
    <Card
      interactive={interactive}
      clickable={clickable}
      href={href}
      hoverEffect="glow"
    >
      <div className="p-6 flex flex-col h-full">
        {/* Icon Section */}
        {icon && (
          <div className="mb-4" aria-hidden="true">
            {/* Check if icon is an emoji or image path */}
            {icon.startsWith('/') || icon.startsWith('http') ? (
              <div className="relative w-12 h-12">
                <OptimizedImage
                  src={icon}
                  alt=""
                  width={48}
                  height={48}
                  objectFit="contain"
                />
              </div>
            ) : (
              <div className="w-12 h-12 flex items-center justify-center text-4xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl">
                {icon}
              </div>
            )}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold text-light-text dark:text-white mb-3" id={`feature-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-light-text-secondary dark:text-gray-400 text-sm md:text-base leading-relaxed flex-grow" id={`feature-desc-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
      </div>
    </Card>
  );
};

export default FeatureCard;
