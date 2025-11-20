import React from 'react';
import Card from './Card';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { ContentCardProps } from '@/types';

const ContentCard: React.FC<ContentCardProps> = ({
  image,
  title,
  description,
  interactive = false,
  clickable = false,
  href,
  tags,
}) => {
  return (
    <Card
      interactive={interactive}
      clickable={clickable}
      href={href}
      hoverEffect="lift"
    >
      {/* Image Section */}
      <div className="relative w-full h-48 overflow-hidden">
        <OptimizedImage
          src={image}
          alt={title}
          fill
          objectFit="cover"
          className="transition-transform duration-250"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-semibold text-light-text dark:text-white mb-2" id={`card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-light-text-secondary dark:text-gray-400 text-sm md:text-base leading-relaxed mb-4 flex-grow" id={`card-desc-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>

        {/* Tags (Optional) */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-500/10 rounded-full border border-primary-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ContentCard;
