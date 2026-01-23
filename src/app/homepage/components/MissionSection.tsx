import React from 'react';
import Icon from '@/components/ui/AppIcon';

const MissionSection = () => {
  const focusAreas = [
    {
      icon: 'BoltIcon',
      title: 'Scale Climate Infrastructure',
      description: 'Expanding utility-scale renewable energy deployments across emerging markets with production-grade forecasting systems'
    },
    {
      icon: 'GlobeAsiaAustraliaIcon',
      title: 'Bridge Research & Execution',
      description: 'Translating cutting-edge climate science into commercially viable, operationally proven infrastructure solutions'
    },
    {
      icon: 'UsersIcon',
      title: 'Enable Stakeholder Action',
      description: 'Providing investors, operators, and policy makers with data-driven tools for credible climate action'
    }
  ];

  return (
    <section id="mission" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            Current Mission
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Forward-looking focus on scaling climate infrastructure through proven technology and operational excellence.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-primary/10 mb-12">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <p className="text-2xl font-heading font-semibold text-text-primary leading-relaxed">
              "Moving beyond promises to proven results—deploying production-grade climate infrastructure that delivers measurable impact at utility scale."
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              The mission is to accelerate the global transition to renewable energy by bridging the critical gap between research innovation and commercial deployment. Through platforms like Solarad AI and CredoCarbon, we're demonstrating that climate solutions can be both scientifically rigorous and commercially successful—creating systems that serve 10+ GW of capacity while maintaining the technical depth expected from PhD-level research.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-8 border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name={area.icon as any} size={32} variant="solid" className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-text-primary mb-3">
                {area.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 border-2 border-primary/20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-6 text-center">
              Impact Metrics & Future Goals
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">20+ GW</div>
                <p className="text-text-secondary">Target Capacity by 2026</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">5+ Markets</div>
                <p className="text-text-secondary">Geographic Expansion</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">$1M+</div>
                <p className="text-text-secondary">Annual Impact per 100MW</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;