import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  focus: string;
  icon: string;
}

const EducationSection = () => {
  const education: Education[] = [
    {
      degree: 'Ph.D., Chemical Engineering',
      institution: 'Indian Institute of Technology Delhi',
      location: 'New Delhi, India',
      year: '2022',
      focus: 'Solar aerosol science. GPA 8.2/10. Thesis: "Removal of Colloidal Asphaltene from Surfaces and Effect of Aerosols on Solar Power"',
      icon: 'AcademicCapIcon'
    },
    {
      degree: 'M.Tech. & B.Tech., Chemical Engineering',
      institution: 'Harcourt Butler Technological Institute',
      location: 'Kanpur, India',
      year: '2013',
      focus: 'Chemical Engineering',
      icon: 'BeakerIcon'
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-surface">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            Academic Foundation
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Research credentials establishing technical authority and scientific rigor in renewable energy systems.
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={edu.icon as any} size={32} variant="outline" className="text-primary" />
                  </div>
                </div>
                <div className="flex-grow space-y-3">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                    <h3 className="text-2xl font-heading font-bold text-text-primary">
                      {edu.degree}
                    </h3>
                    <span className="inline-flex items-center px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      {edu.year}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-text-secondary">
                      <Icon name="BuildingLibraryIcon" size={18} variant="outline" />
                      <p className="text-lg font-semibold">{edu.institution}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-text-secondary">
                      <Icon name="MapPinIcon" size={18} variant="outline" />
                      <p>{edu.location}</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-base text-text-primary font-medium">
                      <span className="text-text-secondary">Focus: </span>
                      {edu.focus}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://scholar.google.com/citations?user=wKW26f0AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg font-heading font-semibold transition-all duration-300 hover:bg-surface hover:shadow-lg hover:-translate-y-0.5"
          >
            <Icon name="AcademicCapIcon" size={20} variant="outline" />
            <span>View Google Scholar Profile</span>
            <Icon name="ArrowTopRightOnSquareIcon" size={18} variant="outline" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
