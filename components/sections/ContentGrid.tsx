'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import Heading from '@/components/ui/Heading';
import ContentCard from '@/components/cards/ContentCard';
import FeatureCard from '@/components/cards/FeatureCard';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { ContentGridProps } from '@/types';

const ContentGrid: React.FC<ContentGridProps> = ({
  title,
  description,
  items,
  columns = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
  cardType = 'content',
}) => {
  // Generate grid column classes based on responsive breakpoints
  // Using fixed classes to ensure Tailwind can properly detect them
  const gridClasses = 'grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

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

        {/* Grid of Cards */}
        <div className={gridClasses}>
          {items.map((item, index) => {
            // Implement lazy loading for below-fold cards (after first 3)
            const isAboveFold = index < 3;
            // Stagger animation delay for each card
            const delay = index * 100;

            if (cardType === 'feature') {
              return (
                <RevealOnScroll key={item.id} animation="slide-up" delay={delay} duration={600}>
                  <FeatureCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    interactive={!!item.href}
                    clickable={!!item.href}
                    href={item.href}
                  />
                </RevealOnScroll>
              );
            }

            // Default to content card
            return (
              <RevealOnScroll key={item.id} animation="slide-up" delay={delay} duration={600}>
                <ContentCard
                  image={item.image || '/images/placeholder.jpg'}
                  title={item.title}
                  description={item.description}
                  interactive={!!item.href}
                  clickable={!!item.href}
                  href={item.href}
                  tags={item.tags}
                />
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ContentGrid;
