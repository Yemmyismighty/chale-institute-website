import React from 'react';
import Container from '@/components/layout/Container';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import { HeroProps } from '@/types';

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  cta,
  overlay = true,
}) => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden gradient-mesh" aria-label="Hero section">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" role="img" aria-label="Hero background image">
        <OptimizedImage
          src={backgroundImage}
          alt=""
          fill
          priority
          objectFit="cover"
          className="w-full h-full opacity-40"
          sizes="100vw"
        />
      </div>

      {/* Optional Overlay for better text readability with beautiful gradient */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg/90 via-primary-950/70 to-accent-950/70 z-10" aria-hidden="true" />
      )}

      {/* Content */}
      <Container size="lg" className="relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <Heading
            level={1}
            align="center"
            className="text-white dark:text-white mb-4 md:mb-6 drop-shadow-lg"
          >
            {title}
          </Heading>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 dark:text-gray-200 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              {subtitle}
            </p>
          )}

          {/* CTA Button */}
          {cta && (
            <Button
              href={cta.href}
              variant="primary"
              size="lg"
              className="shadow-xl hover:shadow-2xl"
            >
              {cta.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
