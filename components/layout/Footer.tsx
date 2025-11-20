import React from 'react';
import Link from 'next/link';
import { FooterProps } from '@/types';
import Container from './Container';
import SocialIcon from '@/components/ui/SocialIcon';

const Footer: React.FC<FooterProps> = ({ sections, copyright, socialLinks = [] }) => {
  return (
    <footer className="bg-light-surface dark:bg-dark-surface border-t border-light-border dark:border-dark-border mt-auto transition-colors duration-300">
      <Container>
        <div className="py-12 md:py-16">
          {/* Footer sections grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-light-text dark:text-white font-semibold text-lg mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-light-text-secondary dark:text-gray-400 hover:text-light-text dark:hover:text-white transition-colors duration-250 text-sm md:text-base inline-block py-1.5"
                        {...(link.external && {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        })}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social links and copyright */}
          <div className="pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social links */}
            {socialLinks.length > 0 && (
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-250 min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label={`Visit our ${social.platform} page`}
                  >
                    <SocialIcon platform={social.platform} className="w-6 h-6" />
                  </a>
                ))}
              </div>
            )}

            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-right">
              {copyright}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
