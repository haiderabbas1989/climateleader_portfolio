import React from 'react';
import Icon from '@/components/ui/AppIcon';


interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  achievements: string[];
  icon: string;
  logo?: string;
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: 'Co-Founder & Chief Executive Officer',
      company: 'Solarad AI',
      location: 'India & Middle East',
      period: '2022 - Present',
      type: 'Climate-Tech Platform',
      achievements: [
        'Built production-grade solar forecasting platform serving 10+ GW capacity across 100+ utility-scale plants',
        'Integrated EUMETSAT, Himawari, and MODIS satellite data for real-time renewable energy predictions',
        'Delivered USD 350K+ annual impact per 100 MW plant through optimized grid integration',
        'Established operational presence across India and Middle East emerging markets',
        'Led cross-functional teams spanning data science, engineering, and commercial operations'
      ],
      icon: 'SunIcon'
    },
    {
      title: 'Founder',
      company: 'CredoCarbon',
      location: 'Dubai',
      period: '2026 - Present',
      type: 'Carbon Credit Platform',
      achievements: [
        'Developed enterprise carbon credit management and trading platform',
        'Built technical infrastructure for carbon footprint measurement and verification',
        'Designed scalable architecture supporting multiple industry verticals',
        'Established partnerships with corporate sustainability teams and verification bodies',
        'Led product development from research prototype to commercial deployment'
      ],
      icon: 'CloudIcon'
    },
    {
      title: 'Senior Research Scientist',
      company: 'ReNew Power (Collaboration)',
      location: 'India',
      period: '2021 - 2022',
      type: 'Utility-Scale Research',
      achievements: [
        'Conducted applied research on renewable energy forecasting for utility-scale deployments',
        'Developed machine learning models for solar and wind power prediction',
        'Collaborated with operations teams to translate research into production systems',
        'Published peer-reviewed papers on renewable energy integration challenges',
        'Contributed to grid stability and energy trading optimization strategies'
      ],
      icon: 'BeakerIcon'
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            Operational Track Record
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Progression from research to scale, demonstrating consistent delivery of production-grade climate infrastructure.
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-8 border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={exp.icon as any} size={32} variant="solid" className="text-primary" />
                  </div>
                </div>
                <div className="flex-grow space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-heading font-bold text-text-primary">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-text-secondary">
                        <Icon name="BuildingOffice2Icon" size={18} variant="outline" />
                        <p className="text-lg font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-2">
                      <span className="inline-flex items-center px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <Icon name="MapPinIcon" size={18} variant="outline" />
                    <p>{exp.location}</p>
                  </div>
                  <div className="pt-2">
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success flex-shrink-0 mt-0.5" />
                          <span className="text-text-primary leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;