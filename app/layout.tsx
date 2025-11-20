import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/content/site';

export const metadata: Metadata = {
  title: 'Chale Institute - Learn to be free',
  description: 'Welcome to Chale Institute, where we empower students through innovative education programs and cutting-edge research opportunities.',
  keywords: ['education', 'innovation', 'research', 'learning', 'institute'],
  openGraph: {
    title: 'Chale Institute - Empowering Education and Innovation',
    description: 'Welcome to Chale Institute, where we empower students through innovative education programs and cutting-edge research opportunities.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Skip to main content link for keyboard navigation */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-button focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header 
          logo={siteConfig.header.logo}
          navigation={siteConfig.header.navigation}
        />
        {children}
        <Footer
          sections={siteConfig.footer.sections}
          copyright={siteConfig.footer.copyright}
          socialLinks={siteConfig.footer.socialLinks}
        />
      </body>
    </html>
  );
}
