'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import Heading from '@/components/ui/Heading';
import PublicationCard from '@/components/cards/PublicationCard';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

export interface PublicationGridProps {
  title?: string;
  description?: string;
  publications: Array<{
    id: string;
    image: string;
    title: string;
    description: string;
    downloadUrl: string;
    tags?: string[];
  }>;
}

const PublicationGrid: React.FC<PublicationGridProps> = ({
  title,
  description,
  publications,
}) => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-light-bg dark:bg-dark-bg" aria-labelledby={title ? `section-${title.toLowerCase().replace(/\s+/g, '-')}` : undefined}>
      <Container size="lg">
        {/* Section Header */}
        {(title || description) && (
          <RevealOnScroll animation="fade" duration={800}>
            <div className="text-center mb-12 md:mb-16">
              {title && (
                <Heading level={2} align="center" className="mb-4" id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {title}
                </Heading>
              )}
              {description && (
                <p className="text-lg md:text-xl text-light-text-muted dark:text-gray-400 max-w-3xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          </RevealOnScroll>
        )}

        {/* Grid of Publication Cards */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((publication, index) => (
            <RevealOnScroll key={publication.id} animation="slide-up" delay={index * 100} duration={600}>
              <PublicationCard
                image={publication.image}
                title={publication.title}
                description={publication.description}
                downloadUrl={publication.downloadUrl}
                tags={publication.tags}
              />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PublicationGrid;
