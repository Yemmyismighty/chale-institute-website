'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderProps } from '@/types';
import Container from './Container';
import ThemeToggle from '@/components/ui/ThemeToggle';

const Header: React.FC<HeaderProps> = ({ logo, navigation = [] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border sticky top-0 z-50 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 transition-colors duration-300">
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center z-50">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation and Theme Toggle */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              {/* Navigation */}
              {navigation.length > 0 && (
                <nav className="flex items-center space-x-6 lg:space-x-8" aria-label="Main navigation">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-light-text-secondary dark:text-gray-300 hover:text-light-text dark:hover:text-white transition-colors duration-250 text-sm lg:text-base font-medium py-2"
                      {...(item.external && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              )}

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              {navigation.length > 0 && (
                <button
                  onClick={toggleMobileMenu}
                  className="p-3 text-light-text dark:text-gray-300 hover:text-light-text-secondary dark:hover:text-white transition-colors duration-250 min-w-[44px] min-h-[44px] flex items-center justify-center z-50"
                  aria-label="Toggle menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-light-surface dark:bg-dark-surface border-l border-light-border dark:border-dark-border z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 pt-24 space-y-1" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className="text-light-text dark:text-gray-300 hover:text-light-text-secondary dark:hover:text-white hover:bg-light-surface-hover dark:hover:bg-dark-surface-hover transition-colors duration-250 text-base font-medium py-3 px-4 rounded-lg"
              {...(item.external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
