import React from 'react';
import Icon from '@/components/ui/AppIcon';

const AboutSection = () => {
  const highlights = [
    {
      icon: 'AcademicCapIcon',
      title: 'Applied Research Foundation',
      description: 'PhD in solar aerosol science (IIT Delhi); diagnosed a 10% power-loss problem for India\'s largest renewable energy company, generating USD 35M+ in commercial impact.'
    },
    {
      icon: 'ChartBarIcon',
      title: 'Operating Leadership',
      description: 'Built Solarad AI\'s entire commercial operating system from zero: GTM, delivery, CRM/revenue operations, and financial planning.'
    },
    {
      icon: 'GlobeAsiaAustraliaIcon',
      title: 'Market Expansion',
      description: 'Led Middle East market-entry strategy from the ground up, growing the region from 0% to 40% of company revenue in 18 months.'
    },
    {
      icon: 'BanknotesIcon',
      title: 'Financial & Team Ownership',
      description: 'Owned full P&L, unit economics, and pricing strategy (+20% margin improvement); built and led an 11-person cross-functional team with under 10% annual attrition.'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            From Research Problem to Commercial Scale
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A strategy and operations leader who defines problems rigorously, then builds the system to solve them — proven across both applied research and commercial execution.
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
              Dr. Syed Haider Abbas Rizvi is a strategy and operations leader who builds the systems that turn research into results. With a PhD in solar aerosol science from IIT Delhi, he began his career solving a concrete, high-stakes problem: diagnosing a 10% power-loss issue for ReNew Power, India's largest renewable energy company, through a research programme that went on to generate USD 35M+ in commercial impact.
            </p>
            <p className="text-lg text-text-primary leading-relaxed">
              That same approach — define the problem rigorously, then build the framework to solve it — carried into building Solarad AI's entire operating engine from the ground up: go-to-market systems, delivery infrastructure, CRM and revenue operations, and financial planning. As Co-Founder & COO (later CEO), he led the company's Middle East market-entry strategy, growing the region from 0% to 40% of total revenue within 18 months, while owning P&L, pricing strategy, and a growing cross-functional team.
            </p>
            <p className="text-lg text-text-primary leading-relaxed">
              The throughline across research and operations is the same: rigorous problem definition, disciplined execution, and a bias toward building repeatable systems rather than one-off wins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
