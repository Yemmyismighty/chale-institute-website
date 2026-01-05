import { PageContent } from './types';

export const contactContent: PageContent = {
  metadata: {
    title: 'Contact Us - Chale Institute',
    description: 'Get in touch with Chale Institute. We\'re here to help with your questions and inquiries.',
    keywords: ['contact', 'support', 'inquiries', 'help', 'communication'],
    ogImage: '/images/og-image.jpg',
  },
  hero: {
    title: 'Get In Touch',
    subtitle: 'Have questions? We\'d love to hear from you. Reach out to our team and we\'ll get back to you as soon as possible.',
    backgroundImage: '/images/hero-bg.jpg',
    cta: {
      title: '',
      primaryButton: {
        label: 'Send a Message',
        href: '#contact-form',
      },
    },
  },
  sections: [
    {
      id: 'contact-info',
      type: 'grid',
      title: 'Contact Information',
      description: 'Multiple ways to reach us',
      data: {
        items: [
          {
            id: 'contact-1',
            icon: '📍',
            title: 'Main Campus',
            description: 'Chale Institute, Lagos, Nigeria. Visit us during office hours Monday-Friday, 9 AM - 5 PM.',
            href: '/campus',
          },
          {
            id: 'contact-2',
            icon: '📧',
            title: 'Email',
            description: 'info@chaleinstitute.edu - General inquiries. admissions@chaleinstitute.edu - Admissions.',
            href: 'mailto:info@chaleinstitute.edu',
          },
          {
            id: 'contact-3',
            icon: '📞',
            title: 'Phone',
            description: '+234 (0) 123 456 7890 - Main line. +234 (0) 123 456 7891 - Admissions.',
            href: 'tel:+2341234567890',
          },
          {
            id: 'contact-4',
            icon: '🕐',
            title: 'Office Hours',
            description: 'Monday - Friday: 9:00 AM - 5:00 PM. Saturday: 10:00 AM - 2:00 PM. Sunday: Closed.',
            href: '/contact',
          },
          {
            id: 'contact-5',
            icon: '🌐',
            title: 'Social Media',
            description: 'Follow us on Facebook, Twitter, LinkedIn, and Instagram for updates and news.',
            href: '/contact',
          },
          {
            id: 'contact-6',
            icon: '💬',
            title: 'Live Chat',
            description: 'Chat with our support team online. Available during business hours.',
            href: '/contact',
          },
        ],
        columns: {
          mobile: 1,
          tablet: 2,
          desktop: 3,
        },
      },
    },
  ],
};
