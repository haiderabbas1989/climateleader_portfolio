'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/homepage', icon: 'HomeIcon' },
    { label: 'Research', href: '/homepage#research', icon: 'AcademicCapIcon' },
    { label: 'Platforms', href: '/homepage#platforms', icon: 'CubeIcon' },
    { label: 'Contact', href: '/homepage#contact', icon: 'EnvelopeIcon' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-card shadow-md ${className}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/homepage" 
            className="flex items-center space-x-3 transition-opacity duration-300 hover:opacity-80"
          >
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
            <span className="text-xl font-heading font-bold text-text-primary">
              Dr. Haider Rizvi
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium text-text-secondary transition-all duration-300 hover:text-primary hover:bg-surface"
              >
                <Icon name={item.icon as any} size={18} variant="outline" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/homepage#contact"
              className="px-5 py-2 bg-primary text-primary-foreground rounded-md text-sm font-heading font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-card hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-text-secondary hover:text-primary hover:bg-surface transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} 
              size={24} 
              variant="outline" 
            />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-6 py-4 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded-md text-base font-medium text-text-secondary transition-all duration-300 hover:text-primary hover:bg-surface"
              >
                <Icon name={item.icon as any} size={20} variant="outline" />
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Link
                href="/homepage#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-5 py-3 bg-primary text-primary-foreground rounded-md text-base font-heading font-semibold transition-all duration-300 hover:bg-primary/90"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;