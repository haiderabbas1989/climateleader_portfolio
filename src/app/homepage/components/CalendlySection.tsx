'use client';

import React, { useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const CalendlySection = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body?.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body?.contains(script)) {
        document.body?.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="schedule" className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Icon name="CalendarDaysIcon" size={32} variant="outline" className="text-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            Schedule a Conversation
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Prefer a direct conversation? Schedule a 30-minute call at your convenience.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-surface rounded-xl p-6 border border-border shadow-sm">
            <div className="bg-white rounded-lg overflow-hidden">
              {/* Calendly inline widget */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/haiderabbas1989/30min"
                style={{ minWidth: '320px', height: '500px' }}
              />
            </div>
          </div>

          {/* Additional context for visitors */}
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="UserGroupIcon" size={20} variant="outline" className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-text-primary mb-2">For Investors</h3>
                  <p className="text-sm text-text-secondary">
                    Discuss growth opportunities, market positioning, and strategic partnerships.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="BuildingOffice2Icon" size={20} variant="outline" className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-text-primary mb-2">For Operators</h3>
                  <p className="text-sm text-text-secondary">
                    Explore Solarad AI forecasting solutions and CredoCarbon MRV capabilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="AcademicCapIcon" size={20} variant="outline" className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-text-primary mb-2">For Researchers</h3>
                  <p className="text-sm text-text-secondary">
                    Collaborate on climate-tech research, publications, and policy initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;