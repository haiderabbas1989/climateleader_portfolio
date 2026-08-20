import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Capability {
  category: string;
  icon: string;
  skills: string[];
}

interface Recognition {
  title: string;
  description: string;
  icon: string;
}

const LeadershipSection = () => {
  const capabilities: Capability[] = [
    {
      category: 'Strategic & Operational Leadership',
      icon: 'LightBulbIcon',
      skills: [
        'Root-cause analysis',
        'Business operations & process design',
        'Program & delivery management',
        'OKR frameworks',
        'Organizational scaling'
      ]
    },
    {
      category: 'Financial Ownership',
      icon: 'BanknotesIcon',
      skills: [
        'P&L management',
        'Unit economics (CAC/LTV/payback)',
        'Pricing strategy',
        'Cash-flow management',
        'Budget planning'
      ]
    },
    {
      category: 'Market & Commercial Strategy',
      icon: 'GlobeAsiaAustraliaIcon',
      skills: [
        'Market-entry & expansion strategy',
        'Commercial strategy & pricing',
        'Stakeholder & account management',
        'C-suite/VP contract negotiation'
      ]
    },
    {
      category: 'Applied Research & Technical Depth',
      icon: 'CpuChipIcon',
      skills: [
        'Applied research design',
        'Technical due diligence',
        'Satellite data analytics',
        'Solar irradiance forecasting',
        'Technical writing'
      ]
    }
  ];

  const recognitions: Recognition[] = [
    {
      title: 'President, PG Academic and Co-Curricular Council, IIT Delhi (2019-20)',
      description: 'Launched IIT Delhi\'s first Research Scholars\' Day; led a 16-member team; secured sponsorship from Honeywell and Shell.',
      icon: 'TrophyIcon'
    },
    {
      title: 'Best Secretary Award, Board of Hostel Management, IIT Delhi (2018-19)',
      description: 'Achieved lowest per-capita hostel costs among 13 hostels; increased resident participation by 40%; negotiated a 50% wage increase for support staff.',
      icon: 'StarIcon'
    },
    {
      title: 'Gold Medal, Inter-IIT Snooker Championship (2017)',
      description: 'Gold Medal, Inter-school Badminton (2008).',
      icon: 'TrophyIcon'
    }
  ];

  return (
    <section id="leadership" className="py-24 px-6 bg-surface">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            Leadership Capabilities
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Operational excellence and cross-functional coordination at utility scale across emerging markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={capability.icon as any} size={24} variant="outline" className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-primary">
                  {capability.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {capability.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success flex-shrink-0 mt-0.5" />
                    <span className="text-text-primary">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-primary/10 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Icon name="MapPinIcon" size={28} variant="solid" className="text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
              6-Country Footprint
            </h3>
            <p className="text-lg text-text-secondary">
              India, UAE, Saudi Arabia, and beyond. Middle East grew from 0% to 40% of company revenue in 18 months.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-heading font-bold text-text-primary mb-8 text-center">
            Leadership & Recognition
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {recognitions.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={item.icon as any} size={20} variant="solid" className="text-primary" />
                </div>
                <h4 className="text-base font-heading font-semibold text-text-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
