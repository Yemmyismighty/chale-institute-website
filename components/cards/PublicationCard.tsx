import React from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Button from '@/components/ui/Button';

export interface PublicationCardProps {
  image: string;
  title: string;
  description: string;
  downloadUrl: string;
  tags?: string[];
}

const PublicationCard: React.FC<PublicationCardProps> = ({
  image,
  title,
  description,
  downloadUrl,
  tags,
}) => {
  return (
    <div className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-card overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-card-hover hover:shadow-primary-500/10 dark:hover:shadow-primary-500/10 h-full flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
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
        <h3 className="text-xl font-semibold text-light-text dark:text-white mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-light-text-secondary dark:text-gray-400 text-sm md:text-base leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Tags (Optional) */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
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

        {/* Download Button */}
        <a
          href={downloadUrl}
          download
          className="inline-flex items-center justify-center font-medium rounded-button transition-all duration-250 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-bg dark:focus:ring-offset-dark-bg focus:ring-primary-500 px-6 py-3 text-base min-h-[44px] w-full bg-light-text-muted dark:bg-gray-600 text-white hover:bg-light-text-secondary dark:hover:bg-gray-500 mt-auto"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download
        </a>
      </div>
    </div>
  );
};

export default PublicationCard;
