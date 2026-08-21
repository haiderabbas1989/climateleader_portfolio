'use client';

import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import ResearchSection from './ResearchSection';
import LeadershipSection from './LeadershipSection';
import LookingForNextSection from './LookingForNextSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';

const HomepageInteractive = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleViewWork = () => scrollToSection('experience');
  const handleContact = () => scrollToSection('contact');

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onViewWork={handleViewWork} onContact={handleContact} />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ResearchSection />
      <LeadershipSection />
      <LookingForNextSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default HomepageInteractive;
