import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Platform {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  logoAlt: string;
  url: string;
  metrics: {label: string;value: string;icon: string;}[];
  features: string[];
  color: string;
}

const PlatformSection = () => {
  const platforms: Platform[] = [
  {
    name: 'Solarad AI',
    tagline: 'Production-Grade Solar Forecasting',
    description: 'Enterprise platform delivering real-time solar power predictions for utility-scale operations. Integrates multiple satellite data sources (EUMETSAT, Himawari, MODIS) with advanced machine learning models to optimize grid integration and energy trading.',
    logo: "/assets/images/solarad-logo-only.png",
    logoAlt: 'Solarad AI logo featuring stylized sun rays and data visualization elements in green and blue',
    url: 'https://solarad.ai',
    metrics: [
    { label: 'Capacity', value: '10+ GW', icon: 'BoltIcon' },
    { label: 'Plants', value: '100+', icon: 'BuildingOffice2Icon' },
    { label: 'Impact', value: '$350K+/100MW', icon: 'CurrencyDollarIcon' }],

    features: [
    'Real-time solar irradiance forecasting with 95%+ accuracy',
    'Multi-satellite data integration (EUMETSAT, Himawari, MODIS)',
    'Grid optimization and energy trading support',
    'Utility-scale deployment across India & Middle East',
    'Production-grade API for enterprise integration'],

    color: 'from-amber-500/10 to-orange-500/10'
  },
  {
    name: 'CredoCarbon',
    tagline: 'Enterprise Carbon Credit Management',
    description: 'Comprehensive platform for carbon footprint measurement, verification, and trading. Enables organizations to track emissions, manage carbon credits, and participate in voluntary carbon markets with full transparency and compliance.',
    logo: "/assets/images/favicon-1769191475586.png",
    logoAlt: 'CredoCarbon logo with green leaf icon and text representing unified MRV, registry, and trading platform',
    url: 'https://credocarbon.com',
    metrics: [
    { label: 'Industries', value: 'Multi-Sector', icon: 'BuildingOfficeIcon' },
    { label: 'Verification', value: 'Certified', icon: 'ShieldCheckIcon' },
    { label: 'Trading', value: 'Active', icon: 'ArrowsRightLeftIcon' }],

    features: [
    'Automated carbon footprint measurement and tracking',
    'Verified carbon credit generation and management',
    'Enterprise-grade compliance and reporting tools',
    'Integration with voluntary carbon market platforms',
    'Real-time emissions monitoring and analytics'],

    color: 'from-emerald-500/10 to-teal-500/10'
  }];


  return (
    <section id="platforms" className="py-24 px-6 bg-surface">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            Platform Portfolio
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Live production systems demonstrating research-to-execution capability at enterprise scale.
          </p>
        </div>

        <div className="space-y-12">
          {platforms.map((platform, index) =>
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-2xl">

              <div className={`bg-gradient-to-br ${platform.color} p-8 lg:p-12`}>
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-white rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                      <AppImage
                      src={platform.logo}
                      alt={platform.logoAlt}
                      className="w-full h-full object-cover" />

                    </div>
                  </div>
                  <div className="flex-grow space-y-4">
                    <div>
                      <h3 className="text-3xl font-heading font-bold text-text-primary mb-2">
                        {platform.name}
                      </h3>
                      <p className="text-xl font-semibold text-primary mb-3">
                        {platform.tagline}
                      </p>
                      <p className="text-text-secondary leading-relaxed">
                        {platform.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {platform.metrics.map((metric, idx) =>
                    <div key={idx} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                          <Icon name={metric.icon as any} size={20} variant="solid" className="text-primary" />
                          <div>
                            <p className="text-xs text-text-secondary">{metric.label}</p>
                            <p className="text-sm font-heading font-bold text-text-primary">{metric.value}</p>
                          </div>
                        </div>
                    )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <h4 className="text-lg font-heading font-semibold text-text-primary mb-4">
                  Key Capabilities
                </h4>
                <ul className="grid md:grid-cols-2 gap-4 mb-8">
                  {platform.features.map((feature, idx) =>
                <li key={idx} className="flex items-start space-x-3">
                      <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success flex-shrink-0 mt-0.5" />
                      <span className="text-text-primary">{feature}</span>
                    </li>
                )}
                </ul>
                <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-heading font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5">

                  <span>Explore Platform</span>
                  <Icon name="ArrowTopRightOnSquareIcon" size={20} variant="outline" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default PlatformSection;