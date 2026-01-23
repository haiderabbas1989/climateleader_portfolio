'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const FooterSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState('2026');

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Education', href: '#education' },
        { label: 'Experience', href: '#experience' },
        { label: 'Platforms', href: '#platforms' }
      ]
    },
    {
      title: 'Research',
      links: [
        { label: 'Publications', href: '#research' },
        { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=wKW26f0AAAAJ&hl=en', external: true },
        { label: 'Leadership', href: '#leadership' },
        { label: 'Mission', href: '#mission' }
      ]
    },
    {
      title: 'Platforms',
      links: [
        { label: 'Solarad AI', href: 'https://solarad.ai', external: true },
        { label: 'CredoCarbon', href: 'https://credocarbon.com', external: true }
      ]
    },
    {
      title: 'Connect',
      links: [
        { label: 'Contact', href: '#contact' },
        { label: 'LinkedIn', href: 'https://linkedin.com/-haiderabbas', external: true }
      ]
    }
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  if (!isHydrated) {
    return (
      <footer className="bg-text-primary text-white py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm opacity-70">© 2026 Dr. Syed Haider Abbas Rizvi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-text-primary text-white py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link href="/homepage" className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <svg 
                  viewBox="0 0 40 40" 
                  className="w-6 h-6"
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M20 8L12 16L20 24L28 16L20 8Z" 
                    fill="currentColor" 
                    className="text-primary-foreground"
                  />
                  <path 
                    d="M20 24L12 32H28L20 24Z" 
                    fill="currentColor" 
                    className="text-primary-foreground opacity-70"
                  />
                </svg>
              </div>
              <span className="text-xl font-heading font-bold"></span>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed">
              Bridging PhD-level research with utility-scale execution in renewable energy infrastructure.
            </p>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-heading font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center space-x-1"
                      >
                        <span>{link.label}</span>
                        <Icon name="ArrowTopRightOnSquareIcon" size={14} variant="outline" />
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => handleScrollToSection(e, link.href)}
                        className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-300"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-70">
              © {currentYear} Dr. Syed Haider Abbas Rizvi. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://scholar.google.com/citations?user=wKW26f0AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                aria-label="Google Scholar"
              >
                <Icon name="AcademicCapIcon" size={20} variant="outline" />
              </a>
              <a
                href="https://linkedin.com/-haiderabbas"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                aria-label="LinkedIn"
              >
                <Icon name="UserCircleIcon" size={20} variant="outline" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;