'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactForm {
  name: string;
  email: string;
  stakeholderType: string;
  message: string;
}

const ContactSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    stakeholderType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsHydrated(true);
    
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

  const stakeholderTypes = [
    { value: 'Solarad AI', label: 'Utility-Scale Solar Operator (Solarad AI)', icon: 'BuildingOffice2Icon' },
    { value: 'CredoCarbon', label: 'Carbon Market Participant (CredoCarbon)', icon: 'GlobeAltIcon' },
    { value: 'investor', label: 'Venture Capital / Growth Investor', icon: 'BanknotesIcon' },
    { value: 'research', label: 'Research / Academic Community', icon: 'AcademicCapIcon' },
    { value: 'policy', label: 'Policy / Government Stakeholder', icon: 'BuildingLibraryIcon' },
    { value: 'other', label: 'Other', icon: 'UserIcon' }
  ];

  const contactMethods = [
    {
      icon: 'EnvelopeIcon',
      label: 'Email',
      value: 'haider@solarad.ai, haider@credocarbon.com',
      link: 'mailto:haider@solarad.ai'
    },
    {
      icon: 'PhoneIcon',
      label: 'Phone',
      value: '+91 97951 19246',
      link: 'tel:+919795119246'
    },
    {
      icon: 'ChatBubbleLeftRightIcon',
      label: 'WhatsApp',
      value: 'Connect via WhatsApp',
      link: 'https://wa.me/919795119246'
    },
    {
      icon: 'MapPinIcon',
      label: 'Location',
      value: 'New Delhi, India | Dubai, United Arab Emirates',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: 'AcademicCapIcon',
      label: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=wKW26f0AAAAJ&hl=en'
    },
    {
      icon: 'UserCircleIcon',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/-haiderabbas'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Formspree endpoint mapping based on stakeholder type
  const getFormspreeEndpoint = (stakeholderType: string): string => {
    // Business inquiries: Solarad AI and CredoCarbon
    const businessStakeholders = ['Solarad AI', 'CredoCarbon'];
    
    if (businessStakeholders.includes(stakeholderType)) {
      // Routes to haider@solarad.ai for business-critical inquiries
      return 'https://formspree.io/f/xvzkbqyn';
    }
    
    // All other stakeholder types route to personal inbox
    // Routes to haiderabbas1989@gmail.com
    return 'https://formspree.io/f/mqepbjjo';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Get the appropriate Formspree endpoint based on stakeholder type
    const formspreeEndpoint = getFormspreeEndpoint(formData.stakeholderType);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', stakeholderType: '', message: '' });

        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setIsSubmitting(false);
        setSubmitStatus('error');
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  if (!isHydrated) {
    return (
      <section id="contact" className="py-24 px-6 bg-surface">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
              Contact Gateway
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Multiple touchpoints optimized for different stakeholder types.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 px-6 bg-surface">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            Contact Gateway
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Multiple touchpoints optimized for different stakeholder types—investors, enterprise clients, research community, and policy makers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">
                Get in Touch
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Dr. John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="john.smith@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="stakeholderType" className="block text-sm font-semibold text-text-primary mb-2">
                    Stakeholder Type
                  </label>
                  <select
                    id="stakeholderType"
                    name="stakeholderType"
                    value={formData.stakeholderType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select your role</option>
                    {stakeholderTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your interest in collaboration, investment, or partnership opportunities..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-heading font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="ArrowPathIcon" size={20} variant="outline" className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Icon name="PaperAirplaneIcon" size={20} variant="outline" />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 p-4 bg-success/10 text-success rounded-lg">
                    <Icon name="CheckCircleIcon" size={20} variant="solid" />
                    <span className="font-semibold">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 p-4 bg-destructive/10 text-destructive rounded-lg">
                    <Icon name="XCircleIcon" size={20} variant="solid" />
                    <span className="font-semibold">Failed to send message. Please try again or contact us directly.</span>
                  </div>
                )}
              </form>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="text-xl font-heading font-bold text-text-primary mb-6">
                Direct Contact
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={method.icon as any} size={20} variant="outline" className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">{method.label}</p>
                      {method.link ? (
                        <a
                          href={method.link}
                          className="text-text-primary font-semibold hover:text-primary transition-colors duration-300"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-text-primary font-semibold">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Networks - moved below Direct Contact */}
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="text-xl font-heading font-bold text-text-primary mb-6">
                Professional Networks
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-surface rounded-lg transition-all duration-300 hover:shadow-md hover:bg-primary/5 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={link.icon as any} size={20} variant="outline" className="text-primary" />
                      </div>
                      <span className="font-semibold text-text-primary">{link.label}</span>
                    </div>
                    <Icon name="ArrowTopRightOnSquareIcon" size={20} variant="outline" className="text-text-secondary group-hover:text-primary transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Scheduling + Stakeholder Context (Unified Cluster) */}
          <div className="space-y-8">

            {/* Unified container for scheduling context */}
            <div className="rounded-2xl border border-border bg-surface p-4 space-y-6">

              {/* Schedule a Conversation */}
              <div className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="CalendarDaysIcon"
                      size={20}
                      variant="outline"
                      className="text-primary"
                    />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-text-primary">
                    Schedule a Conversation
                  </h3>
                </div>

                <p className="text-sm text-text-secondary mb-4">
                  Prefer a direct discussion? Book a quick call at a time that works for you.
                </p>

                <div className="bg-surface rounded-lg overflow-hidden border border-border">
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/haiderabbas1989/30min"
                    style={{ minWidth: '320px', height: '360px' }}
                  />
                </div>
              </div>
              {/* Stakeholder-Specific Engagement (Contextual) */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-5 border border-primary/10">
                <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
                  Stakeholder-Specific Engagement
                </h3>

                <div className="space-y-2">
                  {stakeholderTypes.map((type, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon
                          name={type.icon as any}
                          size={18}
                          variant="outline"
                          className="text-primary"
                        />
                      </div>
                      <p className="font-medium text-text-primary">
                        {type.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            {/* Trust Anchors - moved below Stakeholder-Specific Engagement */}
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="text-xl font-heading font-bold text-text-primary mb-5">
                Trust Anchors
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-text-secondary">
                  <Icon
                    name="BuildingLibraryIcon"
                    size={18}
                    variant="outline"
                    className="text-primary"
                  />
                  <span>IIT Delhi PhD Credentials</span>
                </div>

                <div className="flex items-center space-x-3 text-text-secondary">
                  <Icon
                    name="BuildingOffice2Icon"
                    size={18}
                    variant="outline"
                    className="text-primary"
                  />
                  <span>ReNew Power Collaboration</span>
                </div>

                <div className="flex items-center space-x-3 text-text-secondary">
                  <Icon
                    name="GlobeAsiaAustraliaIcon"
                    size={18}
                    variant="outline"
                    className="text-primary"
                  />
                  <span>India & Middle East Operations</span>
                </div>

                <div className="flex items-center space-x-3 text-text-secondary">
                  <Icon
                    name="BoltIcon"
                    size={18}
                    variant="outline"
                    className="text-primary"
                  />
                  <span>10+ GW Deployed Capacity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;