'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import Heading from '@/components/ui/Heading';
import OptimizedImage from '@/components/ui/OptimizedImage';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

export interface FeaturedPublicationProps {
  title?: string;
  featuredTitle: string;
  featuredSubtitle: string;
  description: string;
  backgroundImage: string;
  downloadUrl: string;
}

const FeaturedPublication: React.FC<FeaturedPublicationProps> = ({
  title = 'Our African Philosophy',
  featuredTitle,
  featuredSubtitle,
  description,
  backgroundImage,
  downloadUrl,
}) => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-light-bg dark:bg-dark-bg">
      <Container size="lg">
        {/* Section Title */}
        {title && (
          <RevealOnScroll animation="fade" duration={800}>
            <div className="text-center mb-12 md:mb-16">
              <Heading level={2} align="center">
                {title}
              </Heading>
            </div>
          </RevealOnScroll>
        )}

        {/* Featured Card */}
        <RevealOnScroll animation="slide-up" duration={800} delay={200}>
          <div className="relative w-full min-h-[400px] md:min-h-[450px] rounded-card overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <OptimizedImage
                src={backgroundImage}
                alt={featuredTitle}
                fill
                objectFit="cover"
                className="w-full h-full"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[400px] md:min-h-[450px]">
              <div className="max-w-3xl">
                {/* Featured Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                  {featuredTitle}
                </h3>

                {/* Featured Subtitle */}
                <h4 className="text-xl md:text-2xl font-semibold text-white/90 mb-6 md:mb-8">
                  {featuredSubtitle}
                </h4>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-8 md:mb-10 max-w-2xl">
                  {description}
                </p>

                {/* Download Button */}
                <a
                  href={downloadUrl}
                  download
                  className="inline-flex items-center justify-center font-medium rounded-button transition-all duration-250 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg focus:ring-primary-500 px-8 py-4 text-base min-h-[48px] bg-light-text-muted dark:bg-gray-600 text-white hover:bg-light-text-secondary dark:hover:bg-gray-500 shadow-lg hover:shadow-xl"
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
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
};

export default FeaturedPublication;
