import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  url: string;
  type: string;
}

const ResearchSection = () => {
  const publications: Publication[] = [
    {
      title: 'Validating Meteosat Second Generation and Himawari-8 Derived Solar Irradiance against Ground Measurements: Solarad AI’s Approach',
      authors: 'Jitendra Kumar Meher, Syed Haider Abbas Rizvi*, Bhramar Choudhary, Ravi Choudhary, Yash Thakre, Ritesh Kumar, and Vikram Singh',
      journal: 'Energies',
      year: '2024',
      url: 'https://doi.org/10.3390/en17122913',
      type: 'Journal Article'
    },
    {
      title: 'Assessment of Clear-Sky Irradiance from 6S affected by Local Climatology of India',
      authors: 'Syed Haider Abbas Rizvi, Bhramar Choudhary, Ravi Choudhary, Jitendra Kumar Meher, Nimisha Gupta, Jasvipul Chawla, Mayank Kumar, and Vikram Singh*',
      journal: 'Journal of Quantitative Spectroscopy and Radiative Transfer',
      year: '2024',
      url: 'https://doi.org/10.1016/j.jqsrt.2024.109166',
      type: 'Journal Article'
    },
    {
      title: 'Assessing Urban Heat Island Intensity and Emissions with Compressed Natural Gas in Non-Commercial Vehicles',
      authors: 'Syed Haider Abbas Rizvi, Prateek Agrawal, Shivam Batra, Nidhi, and Vikram Singh*',
      journal: 'Urban Climate',
      year: '2023',
      url: 'https://doi.org/10.1016/j.uclim.2023.101421',
      type: 'Journal Article'
    },
    {
      title: 'Effect of pH and Surfactants on Shear Induced Asphaltene Removal',
      authors: 'Syed Haider Abbas Rizvi, Shrimali Jonit Bharatbhai, Shivam Gupta, Jyoti Phirani, and Vikram Singh*',
      journal: 'Journal of Petroleum Science and Engineering',
      year: '2022',
      url: 'https://doi.org/10.1016/j.petrol.2022.110134',
      type: 'Journal Article'
    },
    {
      title: 'Deposition and Removal Studies of Asphaltene from the Glass Surface',
      authors: 'Syed Haider Abbas Rizvi, Anil Yadav, Jyoti Phirani, and Vikram Singh*',
      journal: 'Energy & Fuels',
      year: '2021',
      url: 'https://pubs.acs.org/doi/abs/10.1021/acs.energyfuels.0c03881',
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