'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import Heading from '@/components/ui/Heading';
import Carousel from '@/components/ui/Carousel';
import ReadingCard from '@/components/cards/ReadingCard';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

export interface ReadingShowcaseProps {
  title?: string;
  description?: string;
  readings: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    downloadUrl: string;
    category?: string;
  }>;
}

const ReadingShowcase: React.FC<ReadingShowcaseProps> = ({
  title = 'Readings',
  description,
  readings,
}) => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-light-bg dark:bg-dark-bg overflow-hidden">
      <Container size="full">
        {/* Section Header */}
        <RevealOnScroll animation="fade" duration={800}>
          <div className="text-center mb-12 md:mb-16 px-4">
            {title && (
              <Heading level={2} align="center" className="mb-4">
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

        {/* Carousel */}
        <RevealOnScroll animation="slide-up" duration={800} delay={200}>
          <div className="px-4 md:px-8">
            <Carousel showArrows={true} autoPlay={false}>
              {readings.map((reading) => (
                <ReadingCard
                  key={reading.id}
                  title={reading.title}
                  description={reading.description}
                  image={reading.image}
                  downloadUrl={reading.downloadUrl}
                  category={reading.category}
                />
              ))}
            </Carousel>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
};

export default ReadingShowcase;
