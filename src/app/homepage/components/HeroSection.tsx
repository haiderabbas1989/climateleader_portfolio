'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  onViewWork: () => void;
  onContact: () => void;
}

const RESUME_HREF = '/resume';

const HeroSection = ({ onViewWork, onContact }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-surface via-white to-slate-50 pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-text-primary leading-tight">
                Dr. Syed Haider Abbas Rizvi
              </h1>
              <p className="text-2xl lg:text-3xl font-heading font-semibold text-primary">
                Strategy & Business Operations Leader | Applied Research to Commercial Execution
              </p>
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                Strategy and operations leader with 4 years building and scaling Solarad AI, preceded by 6 years of industry-funded PhD research with ReNew Power — diagnosing a 10% power-loss problem for India's largest renewable energy company and leading a research programme generating USD 35M+ commercial impact.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 py-8 border-y border-border">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="GlobeAsiaAustraliaIcon" size={24} variant="solid" className="text-primary" />
                  <p className="text-2xl font-heading font-bold text-text-primary">6 Countries</p>
                </div>
                <p className="text-sm text-text-secondary">Market Expansion</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="BuildingOffice2Icon" size={24} variant="solid" className="text-primary" />
                  <p className="text-2xl font-heading font-bold text-text-primary">100+ Plants (~10 GW)</p>
                </div>
                <p className="text-sm text-text-secondary">Deployed Capacity</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="CurrencyDollarIcon" size={24} variant="solid" className="text-primary" />
                  <p className="text-2xl font-heading font-bold text-text-primary">USD 35M+</p>
                </div>
                <p className="text-sm text-text-secondary">Research Impact</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onViewWork}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg text-base font-heading font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 flex items-center space-x-2">

                <span>View Experience</span>
                <Icon name="ArrowRightIcon" size={20} variant="outline" />
              </button>
              <Link
                href={RESUME_HREF}
                className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg text-base font-heading font-semibold transition-all duration-300 hover:bg-surface hover:shadow-lg hover:-translate-y-0.5 flex items-center space-x-2">

                <span>Download Resume</span>
                <Icon name="ArrowDownTrayIcon" size={20} variant="outline" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <AppImage
                  src="/assets/images/Haider_Profession_Photo-1769179858780.jpg"
                  alt="Professional headshot of Dr. Syed Haider Abbas Rizvi in business attire with confident expression"
                  className="w-full h-full object-cover" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
