import Hero from '@/components/sections/Hero';
import ContentGrid from '@/components/sections/ContentGrid';
import TextBlock from '@/components/sections/TextBlock';
import CallToAction from '@/components/sections/CallToAction';
import { aboutContent } from '@/content/about';
import { SectionData, GridData, TextData, CTAData } from '@/content/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: aboutContent.metadata.title,
  description: aboutContent.metadata.description,
  keywords: aboutContent.metadata.keywords,
  openGraph: {
    title: aboutContent.metadata.title,
    description: aboutContent.metadata.description,
    images: [aboutContent.metadata.ogImage || '/images/og-image.jpg'],
  },
};

export default function About() {
  const { hero, sections } = aboutContent;

  return (
    <main className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-white transition-colors duration-300" id="main-content">
      {/* Hero Section */}
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        cta={hero.cta ? {
          label: hero.cta.primaryButton.label,
          href: hero.cta.primaryButton.href,
        } : undefined}
        overlay={true}
      />

      {/* Dynamic Sections */}
      {sections.map((section: SectionData) => {
        switch (section.type) {
          case 'grid': {
            const gridData = section.data as GridData;
            const cardType = gridData.items.some(item => item.icon) ? 'feature' : 'content';
            
            return (
              <ContentGrid
                key={section.id}
                title={section.title}
                description={section.description}
                items={gridData.items}
                columns={gridData.columns}
                cardType={cardType}
              />
            );
          }

          case 'text': {
            const textData = section.data as TextData;
            return (
              <TextBlock
                key={section.id}
                title={section.title || ''}
                content={textData.content}
                image={textData.image}
                layout={textData.layout}
              />
            );
          }

          case 'cta': {
            const ctaData = section.data as CTAData;
            return (
              <CallToAction
                key={section.id}
                title={ctaData.title}
                description={ctaData.description}
                primaryButton={{
                  children: ctaData.primaryButton.label,
                  href: ctaData.primaryButton.href,
                  variant: ctaData.primaryButton.variant as any,
                }}
                secondaryButton={
                  ctaData.secondaryButton
                    ? {
                        children: ctaData.secondaryButton.label,
                        href: ctaData.secondaryButton.href,
                        variant: ctaData.secondaryButton.variant as any,
                      }
                    : undefined
                }
                backgroundStyle="gradient"
              />
            );
          }

          default:
            return null;
        }
      })}
    </main>
  );
}
