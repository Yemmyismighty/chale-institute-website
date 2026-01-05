import { PageContent } from './types';

export const admissionsContent: PageContent = {
  metadata: {
    title: 'Admissions - Chale Institute',
    description: 'Learn about our admissions process, requirements, and how to apply to Chale Institute.',
    keywords: ['admissions', 'apply', 'enrollment', 'requirements', 'programs'],
    ogImage: '/images/og-image.jpg',
  },
  hero: {
    title: 'Join Our Community',
    subtitle: 'Begin your journey at Chale Institute. We welcome ambitious students who are ready to make a difference in the world.',
    backgroundImage: '/images/campus-life.jpg',
    cta: {
      title: '',
      primaryButton: {
        label: 'Start Your Application',
        href: '#application-process',
      },
    },
  },
  sections: [
    {
      id: 'why-chale',
      type: 'grid',
      title: 'Why Choose Chale Institute',
      description: 'Discover what makes our institution unique',
      data: {
        items: [
          {
            id: 'why-1',
            icon: '🎓',
            title: 'World-Class Education',
            description: 'Learn from renowned faculty and access cutting-edge academic programs designed for excellence.',
            href: '/about',
          },
          {
            id: 'why-2',
            icon: '🌍',
            title: 'Global Community',
            description: 'Connect with students and scholars from around the world in a diverse, inclusive environment.',
            href: '/community',
          },
          {
            id: 'why-3',
            icon: '💼',
            title: 'Career Opportunities',
            description: 'Access internships, mentorship, and career services that prepare you for success.',
            href: '/services/career',
          },
          {
            id: 'why-4',
            icon: '🔬',
            title: 'Research Excellence',
            description: 'Participate in groundbreaking research that addresses real-world challenges.',
            href: '/research',
          },
          {
            id: 'why-5',
            icon: '🏆',
            title: 'Proven Track Record',
            description: 'Join thousands of successful alumni making impact across industries and continents.',
            href: '/alumni',
          },
          {
            id: 'why-6',
            icon: '🤝',
            title: 'Supportive Community',
            description: 'Benefit from comprehensive support services and a collaborative learning environment.',
            href: '/support',
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
      id: 'application-process',
      type: 'text',
      title: 'Application Process',
      data: {
        content: 'Our admissions process is designed to identify students who demonstrate academic excellence, intellectual curiosity, and a commitment to making a positive impact. We review applications holistically, considering academic achievements, test scores, essays, and extracurricular activities. The process typically takes 4-6 weeks from submission to decision. We encourage you to start early and reach out to our admissions team if you have any questions.',
        layout: 'centered',
      },
    },
    {
      id: 'admission-steps',
      type: 'grid',
      title: 'Steps to Apply',
      description: 'Follow these simple steps to submit your application',
      data: {
        items: [
          {
            id: 'step-1',
            icon: '1️⃣',
            title: 'Create Your Account',
            description: 'Register on our online application portal to get started.',
            href: '/apply',
          },
          {
            id: 'step-2',
            icon: '2️⃣',
            title: 'Complete Application',
            description: 'Fill out the application form with your personal and academic information.',
            href: '/apply',
          },
          {
            id: 'step-3',
            icon: '3️⃣',
            title: 'Submit Documents',
            description: 'Upload transcripts, test scores, essays, and recommendation letters.',
            href: '/apply',
          },
          {
            id: 'step-4',
            icon: '4️⃣',
            title: 'Pay Application Fee',
            description: 'Submit the non-refundable application fee.',
            href: '/apply',
          },
          {
            id: 'step-5',
            icon: '5️⃣',
            title: 'Interview (if required)',
            description: 'Participate in an interview with our admissions team.',
            href: '/apply',
          },
          {
            id: 'step-6',
            icon: '6️⃣',
            title: 'Receive Decision',
            description: 'Get your admission decision and next steps for enrollment.',
            href: '/apply',
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
      id: 'requirements',
      type: 'grid',
      title: 'Admission Requirements',
      description: 'What you need to apply',
      data: {
        items: [
          {
            id: 'req-1',
            image: '/images/program-undergraduate.jpg',
            title: 'Undergraduate Requirements',
            description: 'High school diploma or equivalent, standardized test scores (SAT/ACT), transcripts, essays, and recommendation letters.',
            href: '/admissions/undergraduate',
            tags: ['High School', 'Competitive'],
          },
          {
            id: 'req-2',
            image: '/images/program-graduate.jpg',
            title: 'Graduate Requirements',
            description: 'Bachelor\'s degree, GRE/GMAT scores (program dependent), transcripts, statement of purpose, and professional references.',
            href: '/admissions/graduate',
            tags: ['Bachelor\'s Degree', 'Advanced'],
          },
          {
            id: 'req-3',
            image: '/images/program-professional.jpg',
            title: 'Professional Programs',
            description: 'Relevant work experience, professional certifications, and program-specific prerequisites.',
            href: '/admissions/professional',
            tags: ['Experience', 'Flexible'],
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
      id: 'financial-aid',
      type: 'text',
      title: 'Financial Aid & Scholarships',
      data: {
        content: 'We believe education should be accessible to talented students regardless of financial circumstances. Chale Institute offers a comprehensive financial aid package including scholarships, grants, loans, and work-study opportunities. Our financial aid advisors work with you to create an affordable education plan. We encourage all students to complete the FAFSA and explore scholarship opportunities.',
        layout: 'centered',
      },
    },
    {
      id: 'international-students',
      type: 'grid',
      title: 'International Students',
      description: 'Special support for students from around the world',
      data: {
        items: [
          {
            id: 'intl-1',
            icon: '🛂',
            title: 'Visa Support',
            description: 'Comprehensive assistance with visa applications and immigration requirements.',
            href: '/international/visa',
          },
          {
            id: 'intl-2',
            icon: '🏠',
            title: 'Housing Assistance',
            description: 'Help finding on-campus and off-campus housing options.',
            href: '/international/housing',
          },
          {
            id: 'intl-3',
            icon: '🌐',
            title: 'Cultural Integration',
            description: 'Programs and resources to help you adjust to campus life and culture.',
            href: '/international/integration',
          },
          {
            id: 'intl-4',
            icon: '💬',
            title: 'Language Support',
            description: 'English language support and ESL programs if needed.',
            href: '/international/language',
          },
          {
            id: 'intl-5',
            icon: '📋',
            title: 'Document Processing',
            description: 'Expedited processing of international application documents.',
            href: '/international/documents',
          },
          {
            id: 'intl-6',
            icon: '🤝',
            title: 'Mentorship Program',
            description: 'Connect with peer mentors and international student advisors.',
            href: '/international/mentorship',
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
      id: 'admissions-cta',
      type: 'cta',
      data: {
        title: 'Ready to Apply?',
        description: 'Start your application today and take the first step toward your future at Chale Institute.',
        primaryButton: {
          label: 'Apply Now',
          href: '/apply',
          variant: 'primary',
        },
        secondaryButton: {
          label: 'Schedule a Tour',
          href: '/visit',
          variant: 'outline',
        },
      },
    },
  ],
};
