import { PageContent } from './types';

export const researchContent: PageContent = {
  metadata: {
    title: 'Research - Chale Institute',
    description: 'Explore our groundbreaking research initiatives and academic excellence at Chale Institute.',
    keywords: ['research', 'innovation', 'academic', 'studies', 'publications'],
    ogImage: '/images/og-image.jpg',
  },
  hero: {
    title: 'Advancing Knowledge Through Research',
    subtitle: 'At Chale Institute, we conduct groundbreaking research that addresses real-world challenges and contributes to the advancement of knowledge across all disciplines.',
    backgroundImage: '/images/project-sustainability.jpg',
    cta: {
      title: '',
      primaryButton: {
        label: 'Explore Our Research',
        href: '#research-areas',
      },
    },
  },
  sections: [
    {
      id: 'research-areas',
      type: 'grid',
      title: 'Research Areas',
      description: 'We focus on key areas that drive innovation and create positive impact',
      data: {
        items: [
          {
            id: 'research-1',
            icon: '🔬',
            title: 'African Philosophy & Governance',
            description: 'Exploring indigenous African thought systems and their applications to modern governance, economics, and social development.',
            href: '/research/african-philosophy',
          },
          {
            id: 'research-2',
            icon: '💡',
            title: 'Technology & Innovation',
            description: 'Developing cutting-edge solutions in AI, machine learning, and digital technologies for African development.',
            href: '/research/technology',
          },
          {
            id: 'research-3',
            icon: '🌍',
            title: 'Sustainable Development',
            description: 'Research on renewable energy, environmental conservation, and sustainable practices for a better future.',
            href: '/research/sustainability',
          },
          {
            id: 'research-4',
            icon: '📊',
            title: 'Economics & Trade',
            description: 'Investigating economic policies, trade relationships, and prosperity frameworks for African nations.',
            href: '/research/economics',
          },
          {
            id: 'research-5',
            icon: '🎓',
            title: 'Education Policy',
            description: 'Analyzing educational systems, policy reforms, and innovative approaches to learning and development.',
            href: '/research/education',
          },
          {
            id: 'research-6',
            icon: '🏥',
            title: 'Public Health',
            description: 'Addressing health challenges and developing evidence-based solutions for improved public health outcomes.',
            href: '/research/health',
          },
        ],
        columns: {
          mobile: 1,
          tablet: 2,
          desktop: 3,
        },
      },
    },
    {
      id: 'research-centers',
      type: 'grid',
      title: 'Research Centers & Institutes',
      description: 'Our dedicated research facilities and collaborative centers',
      data: {
        items: [
          {
            id: 'center-1',
            image: '/images/project-liberty.jpg',
            title: 'Center for African Thought Leadership',
            description: 'Dedicated to advancing African philosophical traditions and their contemporary applications.',
            href: '/research/centers/african-thought',
            tags: ['Philosophy', 'Leadership'],
          },
          {
            id: 'center-2',
            image: '/images/project-google-ml.jpg',
            title: 'Institute for Technology & Innovation',
            description: 'Pioneering research in AI, machine learning, and digital transformation for African contexts.',
            href: '/research/centers/technology',
            tags: ['Technology', 'AI'],
          },
          {
            id: 'center-3',
            image: '/images/project-sustainability.jpg',
            title: 'Sustainable Development Research Lab',
            description: 'Conducting research on environmental sustainability and renewable energy solutions.',
            href: '/research/centers/sustainability',
            tags: ['Environment', 'Energy'],
          },
        ],
        columns: {
          mobile: 1,
          tablet: 2,
          desktop: 3,
        },
      },
    },
    {
      id: 'research-impact',
      type: 'text',
      title: 'Research Impact',
      data: {
        content: 'Our research has directly influenced policy decisions, informed educational reforms, and contributed to solving critical challenges facing African societies. Through partnerships with international institutions and local organizations, we ensure our findings translate into real-world impact. Our researchers have published in leading journals, presented at major conferences, and collaborated with policymakers to implement evidence-based solutions.',
        layout: 'centered',
      },
    },
    {
      id: 'research-opportunities',
      type: 'grid',
      title: 'Research Opportunities',
      description: 'Join our research community and contribute to groundbreaking work',
      data: {
        items: [
          {
            id: 'opp-1',
            icon: '👨‍🎓',
            title: 'Graduate Research Programs',
            description: 'Pursue advanced research as part of our graduate programs with mentorship from leading scholars.',
            href: '/programs/graduate',
          },
          {
            id: 'opp-2',
            icon: '🤝',
            title: 'Research Assistantships',
            description: 'Work alongside faculty researchers and gain hands-on experience in your field of interest.',
            href: '/research/assistantships',
          },
          {
            id: 'opp-3',
            icon: '🌐',
            title: 'International Collaborations',
            description: 'Participate in collaborative research projects with partner institutions worldwide.',
            href: '/research/collaborations',
          },
          {
            id: 'opp-4',
            icon: '💰',
            title: 'Research Funding',
            description: 'Access grants and funding opportunities to support your research initiatives.',
            href: '/research/funding',
          },
          {
            id: 'opp-5',
            icon: '📚',
            title: 'Research Facilities',
            description: 'Utilize state-of-the-art laboratories and research facilities for your projects.',
            href: '/research/facilities',
          },
          {
            id: 'opp-6',
            icon: '📖',
            title: 'Publication Support',
            description: 'Get support in publishing your research in peer-reviewed journals and conferences.',
            href: '/research/publication',
          },
        ],
        columns: {
          mobile: 1,
          tablet: 2,
          desktop: 3,
        },
      },
    },
    {
      id: 'research-cta',
      type: 'cta',
      data: {
        title: 'Ready to Advance Knowledge?',
        description: 'Join our research community and contribute to groundbreaking work that shapes the future of Africa.',
        primaryButton: {
          label: 'Get Involved',
          href: '/contact',
          variant: 'primary',
        },
        secondaryButton: {
          label: 'Learn More',
          href: '#research-areas',
          variant: 'outline',
        },
      },
    },
  ],
};
