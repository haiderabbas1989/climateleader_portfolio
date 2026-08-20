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
      title: 'Co-Founder & Chief Operating Officer (progressed to CEO, Apr 2025)',
      company: 'Solarad AI',
      location: 'Delhi NCR & Middle East',
      period: 'Jul 2022 - Present',
      type: 'Strategy & Operations',
      achievements: [
        'Designed and led Middle East market-entry strategy from the ground up — growing the region from 0% to 40% of company revenue within 18 months',
        'Built Solarad AI\'s full commercial operating system — GTM playbooks, client onboarding, CRM/revenue-ops infrastructure (Salesforce, HubSpot, Pipedrive) — sustaining 95%+ customer satisfaction and 90%+ renewal rates',
        'Owned P&L and financial strategy — unit economics, pricing design (+20% margin improvement), and 12+ months cash-runway management',
        'Led fundraising end-to-end, closing USD 450K in seed funding with institutional investors',
        'Built and led a cross-functional team of 11 across data science, engineering, and operations, sustaining under 10% annual attrition',
        'Served as primary escalation and governance owner across enterprise accounts including Masdar, ACWA Power, Layla Solar Energy Company, Tata Power, Adani Power, Marubeni, ReNew Power, Jio Platforms, Jakson Green, Ayana Power, Zelestra Energy, South Rabigh Renewable Energy Company, TotalEnergies, ACME Power, and EDF Renewables'
      ],
      icon: 'BriefcaseIcon'
    },
    {
      title: 'Research Lead – Industry Partnerships',
      company: 'ReNew Power Centre of Excellence, IIT Delhi',
      location: 'New Delhi',
      period: 'Jan 2021 - Jun 2022',
      type: 'Applied Research',
      achievements: [
        'Identified the root cause of ~10% monthly power loss from dust deposition through structured root-cause analysis; findings directly informed client capital allocation decisions',
        'Owned end-to-end delivery of a research programme generating USD 350K impact per 100MW plant, delivered 100% on-time',
        'Drove institutional adoption through structured knowledge transfer, training, and governance reporting',
        'Served as primary client-facing lead with ReNew Power\'s executive team'
      ],
      icon: 'BeakerIcon'
    },
    {
      title: 'Industry Research Programme Lead & Laboratory Incharge',
      company: 'IIT Delhi',
      location: 'New Delhi',
      period: 'Jan 2016 - Dec 2020',
      type: 'Applied Research',
      achievements: [
        'Secured and led an industry-sponsored research collaboration with ReNew Power generating USD 35M+ commercial impact',
        'Led a cross-functional team of 8 across academia and industry',
        'Built the Complex Fluid Laboratory from scratch within a USD 255K capital budget',
        'Mentored 6 Master\'s students across 4 research projects; produced 5 peer-reviewed publications (2021-2024)'
      ],
      icon: 'BeakerIcon'
    },
    {
      title: 'Visiting Professor',
      company: 'Harcourt Butler Technological Institute',
      location: 'Kanpur',
      period: 'Jul 2013 - Dec 2015',
      type: 'Academia',
      achievements: [
        'Designed and delivered undergraduate chemical engineering curriculum',
        'Mentored 4 cohorts (40+ students) on technical research and professional development'
      ],
      icon: 'AcademicCapIcon'
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            Experience
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Progression from applied research to commercial operating leadership, building the systems that turn a well-defined problem into a repeatable result.
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

          <div className="bg-surface/60 rounded-xl px-6 py-4 border border-dashed border-border">
            <p className="text-sm text-text-secondary leading-relaxed">
              <span className="font-semibold text-text-primary">Also exploring:</span> CredoCarbon, an early-stage carbon-credit concept, on a part-time basis. Not currently a full-time focus — open to pursuing further if market traction strengthens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
