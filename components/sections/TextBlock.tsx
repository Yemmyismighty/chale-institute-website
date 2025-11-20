'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import Heading from '@/components/ui/Heading';
import OptimizedImage from '@/components/ui/OptimizedImage';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { TextBlockProps } from '@/types';

const TextBlock: React.FC<TextBlockProps> = ({
  title,
  content,
  image,
  layout = 'centered',
}) => {
  // Centered layout - text only or text with image below
  if (layout === 'centered') {
    return (
      <section className="py-16 md:py-20 lg:py-24 bg-light-bg dark:bg-dark-bg" aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <Container size="md">
          <RevealOnScroll animation="fade" duration={800}>
            <div className="text-center">
              <Heading level={2} align="center" className="mb-6" id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                {title}
              </Heading>
              <div
                className="text-lg md:text-xl text-light-text dark:text-gray-300 leading-relaxed prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              {image && (
                <div className="mt-8 md:mt-12 relative w-full h-64 md:h-96 rounded-card overflow-hidden">
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
              )}
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    );
  }

  // Split layout - text and image side by side (stacked on mobile)
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-light-bg dark:bg-dark-bg" aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <Container size="lg">
        <div
          className={`flex flex-col ${
            image?.position === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } gap-8 md:gap-12 lg:gap-16 items-center`}
        >
          {/* Text Content */}
          <RevealOnScroll animation={image?.position === 'right' ? 'slide-right' : 'slide-left'} duration={800} className="flex-1">
            <Heading level={2} className="mb-6" id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {title}
            </Heading>
            <div
              className="text-lg md:text-xl text-light-text dark:text-gray-300 leading-relaxed prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </RevealOnScroll>

          {/* Image */}
          {image && (
            <RevealOnScroll animation={image.position === 'right' ? 'slide-left' : 'slide-right'} duration={800} delay={200} className="flex-1 w-full">
              <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-card overflow-hidden">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  objectFit="cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>
          )}
        </div>
      </Container>
    </section>
  );
};

export default TextBlock;
