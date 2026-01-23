import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Capability {
  category: string;
  icon: string;
  skills: string[];
}

const LeadershipSection = () => {
  const capabilities: Capability[] = [
    {
      category: 'Technical Leadership',
      icon: 'CpuChipIcon',
      skills: [
        'Production-grade system architecture and deployment',
        'Multi-satellite data integration (EUMETSAT, Himawari, MODIS)',
        'Machine learning model development and optimization',
        'Real-time forecasting system design and scaling',
        'API development and enterprise integration'
      ]
    },
    {
      category: 'Operational Excellence',
      icon: 'ChartBarIcon',
      skills: [
        'Utility-scale infrastructure deployment (10+ GW)',
        'Cross-functional team leadership and coordination',
        'Multi-region operations (India & Middle East)',
        'Enterprise client relationship management',
        'Performance optimization and impact measurement'
      ]
    },
    {
      category: 'Strategic Execution',
      icon: 'LightBulbIcon',
      skills: [
        'Research-to-product translation and commercialization',
        'Market entry strategy for emerging economies',
        'Stakeholder engagement (investors, clients, policy makers)',
        'Platform scaling and growth strategy',
        'Partnership development and ecosystem building'
      ]
    },
    {
      category: 'Domain Expertise',
      icon: 'GlobeAsiaAustraliaIcon',
      skills: [
        'Renewable energy forecasting and grid integration',
        'Climate data analytics and satellite remote sensing',
        'Carbon credit systems and sustainability metrics',
        'Energy trading and market optimization',
        'Emerging market infrastructure challenges'
      ]
    }
  ];

  const geographicReach = [
    {
      region: 'India',
      icon: 'MapPinIcon',
      highlights: ['100+ solar plants deployed', '8+ GW capacity managed', 'Multiple state operations']
    },
    {
      region: 'Middle East',
      icon: 'MapPinIcon',
      highlights: ['2+ GW capacity served', 'Enterprise partnerships', 'Regional expansion ongoing']
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

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
          <h3 className="text-2xl font-heading font-bold text-text-primary mb-8 text-center">
            Geographic Deployment Proof
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {geographicReach.map((geo, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={geo.icon as any} size={20} variant="solid" className="text-primary" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-text-primary">
                    {geo.region}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {geo.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Icon name="ArrowRightIcon" size={16} variant="outline" className="text-primary flex-shrink-0 mt-1" />
                      <span className="text-text-secondary">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;