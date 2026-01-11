'use client';

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';

export interface HeroCarouselItem {
  id: string;
  image: string;
  title: string;
  quote: string;
  attribution: string;
}

export interface HeroWithCarouselProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  carouselItems: HeroCarouselItem[];
  cta?: {
    label: string;
    href: string;
  };
  overlay?: boolean;
  carouselFrameImage?: string;
}

const HeroWithCarousel: React.FC<HeroWithCarouselProps> = ({
  title,
  subtitle,
  backgroundImage,
  carouselItems,
  cta,
  overlay = true,
  carouselFrameImage,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const currentItem = carouselItems[currentIndex];

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden bg-light-bg dark:bg-dark-bg" aria-label="Hero section with carousel">

      {/* Content Container */}
      <Container size="full" className="relative z-20 h-full">
        <div className="grid grid-cols-1 1215:grid-cols-2 gap-8 1215:gap-12 items-center h-full py-16 md:py-20 lg:py-24 px-4 md:px-8">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            {/* Title */}
            <Heading
              level={1}
              align="left"
              className="text-light-text dark:text-white mb-4 md:mb-6"
            >
              {title}
            </Heading>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-base md:text-lg lg:text-xl text-light-text-secondary dark:text-gray-300 mb-8 md:mb-10 leading-relaxed">
                {subtitle}
              </p>
            )}

            {/* CTA Button */}
            {cta && (
              <div className="flex gap-4">
                <Button
                  href={cta.href}
                  variant="primary"
                  size="lg"
                  className="shadow-xl hover:shadow-2xl"
                >
                  {cta.label}
                </Button>
              </div>
            )}
          </div>

          {/* Right Side / Bottom on Mobile - Carousel with Frame Background */}
          <div className="flex flex-col items-center justify-center gap-8 w-full">
            {/* Carousel Frame Container */}
            <div className="relative w-full max-w-2xl aspect-video">
              {/* Frame Background */}
              {carouselFrameImage && (
                <div className="absolute inset-0 z-0">
                  <OptimizedImage
                    src={carouselFrameImage}
                    alt=""
                    fill
                    objectFit="cover"
                    className="w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 800px"
                  />
                </div>
              )}

              {/* Carousel Content */}
              <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-6 md:py-0 gap-4 md:gap-0">
                {/* Quote on Left */}
                <div className="flex-1 pr-0 md:pr-8">
                  <p className="text-white md:text-lg lg:text-xl leading-relaxed italic drop-shadow-lg">
                    &quot;{currentItem.quote}&quot;
                  </p>
                </div>

                {/* Image on Right */}
                <div className="flex-1 flex flex-col items-center gap-2 md:gap-4">
                  <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56">
                    <OptimizedImage
                      src={currentItem.image}
                      alt={currentItem.title}
                      fill
                      objectFit="contain"
                      className="transition-opacity duration-500"
                      sizes="(max-width: 768px) 150px, (max-width: 1024px) 250px, 300px"
                    />
                  </div>
                  {/* Attribution below image */}
                  <p className="text-white text-xs md:text-sm font-semibold text-center drop-shadow-lg">
                    {currentItem.attribution}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-6 justify-center">
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full bg-light-text/20 hover:bg-light-text/30 dark:bg-white/20 dark:hover:bg-white/30 text-light-text dark:text-white transition-colors duration-250"
                aria-label="Previous carousel item"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dot Indicators */}
              <div className="flex gap-2">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-light-text dark:bg-white w-8'
                        : 'bg-light-text/50 dark:bg-white/50 hover:bg-light-text/70 dark:hover:bg-white/70'
                    }`}
                    aria-label={`Go to carousel item ${index + 1}`}
                    aria-current={index === currentIndex}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="p-3 rounded-full bg-light-text/20 hover:bg-light-text/30 dark:bg-white/20 dark:hover:bg-white/30 text-light-text dark:text-white transition-colors duration-250"
                aria-label="Next carousel item"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroWithCarousel;
