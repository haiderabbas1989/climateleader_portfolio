'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  onViewWork: () => void;
  onContact: () => void;
}

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
                Climate-Tech Founder & Research Leader
              </p>
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                Bridging PhD-level research with utility-scale execution. Translating cutting-edge climate science into production-grade infrastructure across emerging markets.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 py-8 border-y border-border">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="BoltIcon" size={18} variant="solid" className="text-primary" />
                  <p className="text-3xl font-heading font-bold text-text-primary">India | UAE | KSA</p>
                </div>
                <p className="text-sm text-text-secondary">Geographies</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="BuildingOffice2Icon" size={18} variant="solid" className="text-primary" />
                  <p className="text-3xl font-heading font-bold text-text-primary">25+ Enterprise Clients</p>
                </div>
                <p className="text-sm text-text-secondary">Enterprise Clients</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="CurrencyDollarIcon" size={18} variant="solid" className="text-primary" />
                  <p className="text-3xl font-heading font-bold text-text-primary">$450K+</p>
                </div>
                <p className="text-sm text-text-secondary">Revenue Expansion</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onViewWork}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg text-base font-heading font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 flex items-center space-x-2">

                <span>View Work</span>
                <Icon name="ArrowRightIcon" size={20} variant="outline" />
              </button>
              <button
                onClick={onContact}
                className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg text-base font-heading font-semibold transition-all duration-300 hover:bg-surface hover:shadow-lg hover:-translate-y-0.5 flex items-center space-x-2">

                <span>Contact</span>
                <Icon name="EnvelopeIcon" size={20} variant="outline" />
              </button>
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
