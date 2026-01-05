import Hero from '@/components/sections/Hero';
import ContentGrid from '@/components/sections/ContentGrid';
import { contactContent } from '@/content/contact';
import { SectionData, GridData } from '@/content/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: contactContent.metadata.title,
  description: contactContent.metadata.description,
  keywords: contactContent.metadata.keywords,
  openGraph: {
    title: contactContent.metadata.title,
    description: contactContent.metadata.description,
    images: [contactContent.metadata.ogImage || '/images/og-image.jpg'],
  },
};

export default function Contact() {
  const { hero, sections } = contactContent;

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

          default:
            return null;
        }
      })}
    </main>
  );
}
