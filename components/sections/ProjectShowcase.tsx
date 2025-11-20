'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import Heading from '@/components/ui/Heading';
import Carousel from '@/components/ui/Carousel';
import ProjectCard from '@/components/cards/ProjectCard';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

export interface ProjectShowcaseProps {
  title?: string;
  description?: string;
  projects: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    href: string;
    category?: string;
  }>;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  title = 'See Our Work',
  description,
  projects,
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
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  href={project.href}
                  category={project.category}
                />
              ))}
            </Carousel>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
};

export default ProjectShowcase;
