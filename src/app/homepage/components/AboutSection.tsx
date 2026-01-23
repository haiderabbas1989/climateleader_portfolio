import React from 'react';
import Icon from '@/components/ui/AppIcon';

const AboutSection = () => {
  const highlights = [
    {
      icon: 'AcademicCapIcon',
      title: 'Research Foundation',
      description: 'PhD from IIT Delhi with focus on renewable energy forecasting and climate data analytics'
    },
    {
      icon: 'ChartBarIcon',
      title: 'Commercial Scale',
      description: 'Deployed solutions across 10+ GW capacity serving 100+ utility-scale solar plants'
    },
    {
      icon: 'GlobeAsiaAustraliaIcon',
      title: 'Emerging Markets',
      description: 'Deep operational expertise across India and Middle East renewable infrastructure'
    },
    {
      icon: 'CpuChipIcon',
      title: 'Technical Depth',
      description: 'Production-grade systems integrating EUMETSAT, Himawari, and MODIS satellite data'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            Research Meets Execution
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A rare combination of PhD-level technical depth and proven commercial scale, translating cutting-edge climate science into real-world infrastructure impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-6 border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={highlight.icon as any} size={24} variant="outline" className="text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-text-primary leading-relaxed">
              Dr. Syed Haider Abbas Rizvi represents the new generation of climate leaders who don't just publish papers—they deploy solutions at utility scale. With a foundation in rigorous academic research from IIT Delhi, he has translated theoretical advances into production-grade systems serving over 10 GW of solar capacity across India and the Middle East.
            </p>
            <p className="text-lg text-text-primary leading-relaxed">
              His work bridges the critical gap between what's possible in research labs and what's profitable in the field. This unique positioning enables him to speak fluently to research committees, boardrooms, and policy makers—bringing scientific rigor to commercial execution and operational discipline to academic innovation.
            </p>
            <p className="text-lg text-text-primary leading-relaxed">
              The brand embodies credible climate action: moving beyond promises to proven results, from experimental concepts to enterprise-scale infrastructure, from theoretical models to systems generating USD 350K+ annual impact per 100 MW plant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;