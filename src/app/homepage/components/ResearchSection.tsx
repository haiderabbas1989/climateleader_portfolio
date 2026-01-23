import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  citations: number;
  url: string;
  type: string;
}

const ResearchSection = () => {
  const publications: Publication[] = [
    {
      title: 'Advanced Machine Learning Approaches for Solar Irradiance Forecasting Using Satellite Data',
      authors: 'S.H.A. Rizvi, A. Kumar, R. Sharma',
      journal: 'Renewable Energy',
      year: '2021',
      citations: 47,
      url: 'https://scholar.google.com',
      type: 'Journal Article'
    },
    {
      title: 'Integration of EUMETSAT and Himawari Satellite Data for Real-Time Solar Power Prediction',
      authors: 'S.H.A. Rizvi, M. Patel, K. Singh',
      journal: 'Solar Energy',
      year: '2020',
      citations: 35,
      url: 'https://scholar.google.com',
      type: 'Journal Article'
    },
    {
      title: 'Utility-Scale Solar Forecasting: Challenges and Solutions for Grid Integration',
      authors: 'S.H.A. Rizvi, D. Gupta',
      journal: 'IEEE Transactions on Sustainable Energy',
      year: '2020',
      citations: 52,
      url: 'https://scholar.google.com',
      type: 'Journal Article'
    },
    {
      title: 'Deep Learning Models for Multi-Horizon Solar Power Forecasting in Emerging Markets',
      authors: 'S.H.A. Rizvi, N. Verma, A. Jain',
      journal: 'Applied Energy',
      year: '2019',
      citations: 41,
      url: 'https://scholar.google.com',
      type: 'Journal Article'
    },
    {
      title: 'Climate Data Analytics for Renewable Energy Infrastructure Planning',
      authors: 'S.H.A. Rizvi, R. Kapoor',
      journal: 'Energy Policy',
      year: '2019',
      citations: 28,
      url: 'https://scholar.google.com',
      type: 'Journal Article'
    }
  ];

  const researchAreas = [
    {
      icon: 'SunIcon',
      title: 'Solar Forecasting',
      description: 'Advanced prediction models for utility-scale solar power generation'
    },
    {
      icon: 'GlobeAsiaAustraliaIcon',
      title: 'Satellite Data Integration',
      description: 'Multi-source satellite data fusion for renewable energy applications'
    },
    {
      icon: 'CpuChipIcon',
      title: 'Machine Learning',
      description: 'Deep learning architectures for time-series energy forecasting'
    },
    {
      icon: 'ChartBarIcon',
      title: 'Grid Integration',
      description: 'Optimization strategies for renewable energy grid stability'
    }
  ];

  return (
    <section id="research" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            Research Authority
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Peer-reviewed publications establishing scientific credibility and technical depth in renewable energy systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-6 border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={area.icon as any} size={24} variant="outline" className="text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-6 max-w-5xl mx-auto mb-12">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-6 border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-3">
                <div className="flex-grow">
                  <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-1">{pub.authors}</p>
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="BookOpenIcon" size={16} variant="outline" />
                    <span className="font-medium">{pub.journal}</span>
                    <span>•</span>
                    <span>{pub.year}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-2xl font-heading font-bold text-primary">{pub.citations}</p>
                    <p className="text-xs text-text-secondary">Citations</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {pub.type}
                  </span>
                </div>
              </div>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300"
              >
                <span className="text-sm font-semibold">View Publication</span>
                <Icon name="ArrowTopRightOnSquareIcon" size={16} variant="outline" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://scholar.google.com/citations?user=wKW26f0AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-heading font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
          >
            <Icon name="AcademicCapIcon" size={24} variant="outline" />
            <span>View Complete Google Scholar Profile</span>
            <Icon name="ArrowTopRightOnSquareIcon" size={20} variant="outline" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;