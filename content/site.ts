import { NavigationItem, FooterSection, SocialLink } from './types';

export const siteConfig = {
  header: {
    logo: {
      src: '/images/logo.svg',
      alt: 'Chale Institute',
    },
    navigation: [
      { label: 'Programs', href: '#programs' },
      { label: 'About', href: '#about' },
      { label: 'Research', href: '/research' },
      { label: 'Admissions', href: '/admissions' },
      { label: 'Contact', href: '/contact' },
    ] as NavigationItem[],
  },
  footer: {
    sections: [
      {
        title: 'Programs',
        links: [
          { label: 'Undergraduate', href: '/programs/undergraduate' },
          { label: 'Graduate', href: '/programs/graduate' },
          { label: 'Professional Development', href: '/programs/professional' },
          { label: 'Research', href: '/programs/research' },
        ],
      },
      {
        title: 'About',
        links: [
          { label: 'Our Story', href: '/about' },
          { label: 'Faculty', href: '/about/faculty' },
          { label: 'Campus', href: '/campus' },
          { label: 'News & Events', href: '/news' },
        ],
      },
      {
        title: 'Admissions',
        links: [
          { label: 'Apply Now', href: '/apply' },
          { label: 'Visit Campus', href: '/visit' },
          { label: 'Tuition & Aid', href: '/tuition' },
          { label: 'International Students', href: '/international' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Student Portal', href: '/portal' },
          { label: 'Library', href: '/library' },
          { label: 'Career Services', href: '/services/career' },
          { label: 'Support', href: '/support' },
        ],
      },
    ] as FooterSection[],
    copyright: `© ${new Date().getFullYear()} Chale Institute. All rights reserved.`,
    socialLinks: [
      { platform: 'Facebook', url: 'https://facebook.com/chaleinstitute' },
      { platform: 'Twitter', url: 'https://twitter.com/chaleinstitute' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/company/chaleinstitute' },
      { platform: 'Instagram', url: 'https://instagram.com/chaleinstitute' },
    ] as SocialLink[],
  },
};
