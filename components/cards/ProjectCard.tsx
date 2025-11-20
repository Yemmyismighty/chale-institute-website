import React from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Button from '@/components/ui/Button';

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  category?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  href,
  category,
}) => {
  return (
    <Link
      href={href}
      className="relative flex-shrink-0 w-full md:w-[600px] lg:w-[700px] h-[400px] md:h-[500px] rounded-card overflow-hidden group snap-start"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={image}
          alt={title}
          fill
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 700px"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 md:p-10 lg:p-12">
        {/* Category Badge */}
        {category && (
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-white bg-primary-600 rounded-full">
              {category}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-xl">
          {title}
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-200 mb-6 max-w-2xl leading-relaxed">
          {description}
        </p>

        {/* CTA Button */}
        <div>
          <Button
            variant="outline"
            size="md"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-light-text"
          >
            See Project
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
