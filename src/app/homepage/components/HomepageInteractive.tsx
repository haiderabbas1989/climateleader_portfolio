'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import PlatformSection from './PlatformSection';
import ResearchSection from './ResearchSection';
import LeadershipSection from './LeadershipSection';
import MissionSection from './MissionSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';

const HomepageInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleViewWork = () => {
    scrollToSection('platforms');
  };

  const handleContact = () => {
    scrollToSection('contact');
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-bold text-text-primary mb-4">
              Loading...
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onViewWork={handleViewWork} onContact={handleContact} />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <PlatformSection />
      <ResearchSection />
      <LeadershipSection />
      <MissionSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default HomepageInteractive;