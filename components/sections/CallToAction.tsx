import React from 'react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { CallToActionProps } from '@/types';

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  backgroundStyle = 'solid',
}) => {
  // Background style classes with beautiful gradients
  const backgroundClasses = {
    solid: 'bg-gradient-to-br from-dark-surface to-dark-surface-hover',
    gradient: 'bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 gradient-mesh',
    image: 'relative',
  };

  return (
    <section
      className={`relative w-full py-16 md:py-20 lg:py-24 overflow-hidden ${backgroundClasses[backgroundStyle]}`}
      aria-labelledby={`cta-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Background Image (if backgroundStyle is 'image') */}
      {backgroundStyle === 'image' && (
        <>
          <div className="absolute inset-0 z-0" role="img" aria-label="Call to action background">
            <OptimizedImage
              src="/images/cta-bg.jpg"
              alt=""
              fill
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
        </>
      )}

      {/* Content */}
      <Container size="lg" className={backgroundStyle === 'image' ? 'relative z-20' : ''}>
        <div className="text-center max-w-3xl mx-auto">
          {/* Title */}
          <Heading
            level={2}
            align="center"
            className="text-white mb-4 md:mb-6"
            id={`cta-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {title}
          </Heading>

          {/* Description */}
          {description && (
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed">
              {description}
            </p>
          )}

          {/* Buttons - Stacked on mobile, inline on larger screens */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button */}
            <Button
              href={primaryButton.href}
              variant={primaryButton.variant as any || 'primary'}
              size="lg"
              className="w-full sm:w-auto shadow-lg hover:shadow-xl"
            >
              {primaryButton.children}
            </Button>

            {/* Secondary Button (optional) */}
            {secondaryButton && (
              <Button
                href={secondaryButton.href}
                variant={secondaryButton.variant as any || 'outline'}
                size="lg"
                className="w-full sm:w-auto"
              >
                {secondaryButton.children}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
