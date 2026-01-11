import HeroWithCarousel from '@/components/sections/HeroWithCarousel';
import ContentGrid from '@/components/sections/ContentGrid';
import TextBlock from '@/components/sections/TextBlock';
import CallToAction from '@/components/sections/CallToAction';
import ProjectShowcase from '@/components/sections/ProjectShowcase';
import PublicationGrid from '@/components/sections/PublicationGrid';
import FeaturedPublication from '@/components/sections/FeaturedPublication';
import ReadingShowcase from '@/components/sections/ReadingShowcase';
import { homeContent } from '@/content/home';
import { SectionData, GridData, TextData, CTAData, ProjectsData, PublicationsData, FeaturedPublicationData, ReadingsData } from '@/content/types';

export default function Home() {
  const { hero, sections, carouselItems = [] } = homeContent;

  return (
    <main className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-white transition-colors duration-300" id="main-content">
      {/* Hero Section with Carousel */}
      <HeroWithCarousel
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        carouselItems={carouselItems}
        carouselFrameImage="/images/Frame 76.png"
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
            // Determine card type based on whether items have images or icons
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

          case 'projects': {
            const projectsData = section.data as ProjectsData;
            return (
              <ProjectShowcase
                key={section.id}
                title={section.title}
                description={section.description}
                projects={projectsData.projects}
              />
            );
          }

          case 'publications': {
            const publicationsData = section.data as PublicationsData;
            return (
              <PublicationGrid
                key={section.id}
                title={section.title}
                description={section.description}
                publications={publicationsData.publications}
              />
            );
          }

          case 'featured-publication': {
            const featuredPubData = section.data as FeaturedPublicationData;
            return (
              <FeaturedPublication
                key={section.id}
                title={section.title}
                featuredTitle={featuredPubData.featuredTitle}
                featuredSubtitle={featuredPubData.featuredSubtitle}
                description={featuredPubData.description}
                backgroundImage={featuredPubData.backgroundImage}
                downloadUrl={featuredPubData.downloadUrl}
              />
            );
          }

          case 'readings': {
            const readingsData = section.data as ReadingsData;
            return (
              <ReadingShowcase
                key={section.id}
                title={section.title}
                description={section.description}
                readings={readingsData.readings}
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
