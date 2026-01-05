import { PageContent } from './types';

export const aboutContent: PageContent = {
  metadata: {
    title: 'About Us - Chale Institute',
    description: 'Learn about Chale Institute\'s mission, vision, history, and commitment to educational excellence.',
    keywords: ['about', 'mission', 'vision', 'history', 'values'],
    ogImage: '/images/og-image.jpg',
  },
  hero: {
    title: 'About Chale Institute',
    subtitle: 'Empowering the next generation of African thought leaders through innovative education, groundbreaking research, and a commitment to excellence.',
    backgroundImage: '/images/campus-life.jpg',
    cta: {
      title: '',
      primaryButton: {
        label: 'Explore Our Story',
        href: '#our-story',
      },
    },
  },
  sections: [
    {
      id: 'our-story',
      type: 'text',
      title: 'Our Story',
      data: {
        content: 'Founded with a vision to transform education in Africa, Chale Institute has been at the forefront of academic excellence and innovation for over two decades. What began as a small initiative to develop African thought leadership has grown into a thriving institution recognized for its commitment to rigorous academics, groundbreaking research, and meaningful community engagement. Our journey reflects our unwavering belief that education is the most powerful tool for social transformation and that African voices and perspectives are essential to solving global challenges.',
        image: {
          src: '/images/about-campus.jpg',
          alt: 'Chale Institute Campus',
          position: 'right',
        },
        layout: 'split',
      },
    },
    {
      id: 'mission-vision',
      type: 'grid',
      title: 'Our Mission & Vision',
      description: 'What drives us forward',
      data: {
        items: [
          {
            id: 'mission',
            icon: '🎯',
            title: 'Our Mission',
            description: 'To cultivate intellectual curiosity, foster innovation, and develop leaders who will shape a better future through excellence in teaching, groundbreaking research, and meaningful community engagement.',
            href: '/about',
          },
          {
            id: 'vision',
            icon: '🌟',
            title: 'Our Vision',
            description: 'To be a leading institution that empowers African thought leaders to translate indigenous ideas of liberty into bold policies for a modern, prosperous, and free continent.',
            href: '/about',
          },
          {
            id: 'values',
            icon: '💎',
            title: 'Our Values',
            description: 'Excellence, integrity, inclusivity, innovation, and a commitment to social responsibility guide everything we do.',
            href: '/about',
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
      id: 'core-values',
      type: 'grid',
      title: 'Core Values',
      description: 'The principles that guide our institution',
      data: {
        items: [
          {
            id: 'value-1',
            icon: '🏆',
            title: 'Excellence',
            description: 'We pursue the highest standards in teaching, research, and student support, continuously striving to improve and innovate.',
            href: '/about',
          },
          {
            id: 'value-2',
            icon: '🤝',
            title: 'Integrity',
            description: 'We operate with honesty, transparency, and ethical principles in all our endeavors and relationships.',
            href: '/about',
          },
          {
            id: 'value-3',
            icon: '🌍',
            title: 'Inclusivity',
            description: 'We celebrate diversity and create an environment where all students and faculty feel valued and supported.',
            href: '/about',
          },
          {
            id: 'value-4',
            icon: '💡',
            title: 'Innovation',
            description: 'We encourage creative thinking, experimentation, and the development of new ideas and approaches.',
            href: '/about',
          },
          {
            id: 'value-5',
            icon: '🌱',
            title: 'Social Responsibility',
            description: 'We are committed to making a positive impact on society and addressing the challenges facing our communities.',
            href: '/about',
          },
          {
            id: 'value-6',
            icon: '📚',
            title: 'Intellectual Freedom',
            description: 'We foster an environment where ideas can be freely explored, debated, and challenged in pursuit of truth.',
            href: '/about',
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
      id: 'by-the-numbers',
      type: 'grid',
      title: 'By The Numbers',
      description: 'Our impact and reach',
      data: {
        items: [
          {
            id: 'stat-1',
            icon: '👥',
            title: '5,000+',
            description: 'Students enrolled across all programs and levels.',
            href: '/about',
          },
          {
            id: 'stat-2',
            icon: '👨‍🏫',
            title: '300+',
            description: 'Faculty members and researchers from around the world.',
            href: '/about',
          },
          {
            id: 'stat-3',
            icon: '🎓',
            title: '50,000+',
            description: 'Alumni making impact across industries and continents.',
            href: '/about',
          },
          {
            id: 'stat-4',
            icon: '📚',
            title: '200+',
            description: 'Research projects and publications annually.',
            href: '/about',
          },
          {
            id: 'stat-5',
            icon: '🌐',
            title: '80+',
            description: 'Countries represented in our student and faculty community.',
            href: '/about',
          },
          {
            id: 'stat-6',
            icon: '🏢',
            title: '500+',
            description: 'Industry and institutional partnerships worldwide.',
            href: '/about',
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
      id: 'leadership',
      type: 'grid',
      title: 'Leadership Team',
      description: 'Meet the visionaries leading our institution',
      data: {
        items: [
          {
            id: 'leader-1',
            image: '/images/alumni-1.jpg',
            title: 'Dr. Ade Ogunwole',
            description: 'Founder & Principal. Visionary leader with 30+ years in education and African thought leadership.',
            href: '/about/leadership',
            tags: ['Founder', 'Principal'],
          },
          {
            id: 'leader-2',
            image: '/images/alumni-2.jpg',
            title: 'Prof. Chioma Okafor',
            description: 'Vice Principal, Academic Affairs. Leading our academic excellence and research initiatives.',
            href: '/about/leadership',
            tags: ['Academic', 'Research'],
          },
          {
            id: 'leader-3',
            image: '/images/alumni-3.jpg',
            title: 'Dr. Kwame Mensah',
            description: 'Vice Principal, Student Affairs. Dedicated to student success and campus community.',
            href: '/about/leadership',
            tags: ['Student Affairs', 'Community'],
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
      id: 'campus-facilities',
      type: 'text',
      title: 'Campus & Facilities',
      data: {
        content: 'Our state-of-the-art campus is designed to support academic excellence and student success. We feature modern lecture halls, advanced laboratories, a comprehensive library with extensive digital resources, collaborative study spaces, recreational facilities, and comfortable residential accommodations. Our campus is equipped with the latest technology and infrastructure to support teaching, learning, and research. We maintain a beautiful, safe, and inclusive environment that fosters intellectual growth and personal development.',
        image: {
          src: '/images/campus-life.jpg',
          alt: 'Chale Institute Campus Life',
          position: 'left',
        },
        layout: 'split',
      },
    },
    {
      id: 'accreditation',
      type: 'grid',
      title: 'Accreditation & Recognition',
      description: 'Our commitment to quality and standards',
      data: {
        items: [
          {
            id: 'accred-1',
            icon: '✓',
            title: 'Institutional Accreditation',
            description: 'Fully accredited by the National Universities Commission (NUC) and recognized internationally.',
            href: '/about',
          },
          {
            id: 'accred-2',
            icon: '✓',
            title: 'Program Accreditation',
            description: 'All programs meet rigorous quality standards and are accredited by relevant professional bodies.',
            href: '/about',
          },
          {
            id: 'accred-3',
            icon: '✓',
            title: 'International Recognition',
            description: 'Recognized by leading international ranking organizations and educational bodies.',
            href: '/about',
          },
          {
            id: 'accred-4',
            icon: '✓',
            title: 'Quality Assurance',
            description: 'Continuous quality improvement processes and regular external evaluations.',
            href: '/about',
          },
          {
            id: 'accred-5',
            icon: '✓',
            title: 'Research Excellence',
            description: 'Research programs meet international standards and contribute to global knowledge.',
            href: '/about',
          },
          {
            id: 'accred-6',
            icon: '✓',
            title: 'Student Support',
            description: 'Comprehensive support services recognized for excellence in student development.',
            href: '/about',
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
      id: 'about-cta',
      type: 'cta',
      data: {
        title: 'Join Our Community',
        description: 'Become part of a vibrant community of scholars, innovators, and leaders committed to excellence and positive change.',
        primaryButton: {
          label: 'Apply Now',
          href: '/admissions',
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
