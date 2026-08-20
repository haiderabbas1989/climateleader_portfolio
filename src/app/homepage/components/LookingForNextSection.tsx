import React from 'react';
import Icon from '@/components/ui/AppIcon';

const RESUME_HREF = '/assets/resume/dr-haider-rizvi-resume.pdf';

const LookingForNextSection = () => {
  const focusAreas = [
    {
      icon: 'LightBulbIcon',
      title: 'Strategic Problem-Solving',
      description: 'Given a complex business problem, building the rigorous framework to solve it — grounded in the same hypothesis-first approach from PhD research.'
    },
    {
      icon: 'ChartBarIcon',
      title: 'Operational Execution',
      description: 'Systems, playbooks, and cross-functional structures that turn strategy into repeatable, scalable execution.'
    },
    {
      icon: 'GlobeAsiaAustraliaIcon',
      title: 'Market & Commercial Strategy',
      description: 'Proven ability to open new markets from zero — P&L ownership, pricing strategy, and stakeholder management with Fortune 500 accounts.'
    }
  ];

  return (
    <section id="mission" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            What I'm Looking For Next
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Bringing the same rigor from applied research and commercial operations to the next problem worth solving.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-primary/10 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-text-primary leading-relaxed">
              Open to Strategy & Business Operations Leadership, Solutions Consulting, and Revenue/Commercial Operations roles — ideally where I can take on a defined, complex problem and build the framework to solve it, the same way I've approached both research and company-building.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

        <div className="text-center">
          <a
            href={RESUME_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-heading font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Download Resume</span>
            <Icon name="ArrowDownTrayIcon" size={20} variant="outline" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LookingForNextSection;
