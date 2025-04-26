import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Search, 
  PenTool, 
  LayoutDashboard, 
  LineChart, 
  Mail, 
  Database, 
  MonitorSmartphone, 
  Image, 
  Server,
  IndianRupee,
  Check 
} from 'lucide-react';

const Services = () => {
  const webTechServices = [
    {
      icon: <Globe className="text-electric-blue" size={24} />,
      title: 'Web Development',
      description: 'Custom websites and web applications with responsive designs and modern functionality.',
    },
    {
      icon: <Search className="text-electric-blue" size={24} />,
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategies to improve your website\'s visibility and ranking on search engines.',
    },
    {
      icon: <Database className="text-electric-blue" size={24} />,
      title: 'Web Hosting',
      description: 'Reliable and secure hosting solutions with 99.9% uptime guarantee and excellent support.',
    },
    {
      icon: <Server className="text-electric-blue" size={24} />,
      title: 'Maintenance & Support',
      description: 'Ongoing website maintenance, updates, and technical support to keep your site running smoothly.',
    },
  ];

  const designServices = [
    {
      icon: <PenTool className="text-electric-blue" size={24} />,
      title: 'Graphic Design',
      description: 'Eye-catching visuals including logos, branding materials, and marketing collateral.',
    },
    {
      icon: <LayoutDashboard className="text-electric-blue" size={24} />,
      title: 'UI/UX Design',
      description: 'User-centered interface and experience design that enhances usability and satisfaction.',
    },
    {
      icon: <Image className="text-electric-blue" size={24} />,
      title: 'Print Design',
      description: 'Professional designs for business cards, brochures, posters, and other print materials.',
    },
    {
      icon: <MonitorSmartphone className="text-electric-blue" size={24} />,
      title: 'Responsive Design',
      description: 'Mobile-friendly designs that provide optimal viewing experience across all devices.',
    },
  ];

  const marketingServices = [
    {
      icon: <LineChart className="text-electric-blue" size={24} />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to reach your target audience and drive conversions.',
    },
    {
      icon: <Mail className="text-electric-blue" size={24} />,
      title: 'Email Marketing',
      description: 'Effective email campaigns to nurture leads, engage customers, and drive sales.',
    },
    {
      icon: <Image className="text-electric-blue" size={24} />,
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns to build brand awareness and engage with your audience.',
    },
    {
      icon: <LineChart className="text-electric-blue" size={24} />,
      title: 'Google Ads',
      description: 'Targeted advertising campaigns on Google to drive quality traffic to your website.',
    },
  ];

  const renderServiceCards = (services: any[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <Card key={index} className="bg-black border border-electric-blue/20 card-hover">
          <CardHeader>
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-electric-blue/10 mb-4">
              {service.icon}
            </div>
            <CardTitle className="text-white">{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-400">{service.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">Our Services</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Comprehensive digital solutions tailored to meet your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16 bg-black border-t border-electric-blue/10">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Web & Tech</h2>
            <div className="w-16 h-1 bg-electric-blue rounded-full mb-10"></div>
            {renderServiceCards(webTechServices)}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Design</h2>
            <div className="w-16 h-1 bg-electric-blue rounded-full mb-10"></div>
            {renderServiceCards(designServices)}
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Marketing</h2>
            <div className="w-16 h-1 bg-electric-blue rounded-full mb-10"></div>
            {renderServiceCards(marketingServices)}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-black border-t border-electric-blue/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing Plans</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Flexible pricing options to suit businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-black border border-electric-blue/20 rounded-xl p-8 hover:shadow-lg hover:shadow-electric-blue/10 transition-all duration-300">
              <h3 className="text-xl font-medium text-gray-300 mb-2">Basic</h3>
              <div className="mb-6 flex items-center">
                <IndianRupee className="text-white mr-1" size={20} />
                <span className="text-4xl font-bold text-white">9,999</span>
                <span className="text-gray-400"> / project</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">✓</span>
                  <span className="text-gray-400">Simple Website (up to 5 pages)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">✓</span>
                  <span className="text-gray-400">Mobile Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">✓</span>
                  <span className="text-gray-400">Basic SEO Setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">✓</span>
                  <span className="text-gray-400">Contact Form</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">✗</span>
                  <span className="text-gray-500">E-commerce Functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">✗</span>
                  <span className="text-gray-500">Custom Functionality</span>
                </li>
              </ul>
              <Button className="btn-primary w-full">Get Started</Button>
            </div>

            {/* Pro Plan */}
            <div className="bg-black border border-electric-blue rounded-xl p-8 shadow-lg shadow-electric-blue/20 transform scale-105 z-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-electric-blue text-black px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">Pro</h3>
              <div className="mb-6 flex items-center">
                <IndianRupee className="text-white mr-1" size={20} />
                <span className="text-4xl font-bold text-white">24,999</span>
                <span className="text-gray-400"> / project</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">✓</span>
                  <span className="text-gray-400">Custom Website (up to 12 pages)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">✓</span>
                  <span className="text-gray-400">Advanced Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">✓</span>
                  <span className="text-gray-400">Comprehensive SEO</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">✓</span>
                  <span className="text-gray-400">Interactive Elements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">✓</span>
                  <span className="text-gray-400">Basic E-commerce</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">✗</span>
                  <span className="text-gray-500">Advanced Custom Functionality</span>
                </li>
              </ul>
              <Button className="btn-primary w-full">Get Started</Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-black border border-electric-blue/20 rounded-xl p-8 hover:shadow-lg hover:shadow-electric-blue/10 transition-all duration-300">
              <h3 className="text-xl font-medium text-gray-300 mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">Custom</span>
                <span className="text-gray-400"> pricing</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">✓</span>
                  <span className="text-gray-400">Unlimited Pages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">✓</span>
                  <span className="text-gray-400">Premium Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">✓</span>
                  <span className="text-gray-400">Advanced SEO Strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">✓</span>
                  <span className="text-gray-400">Full E-commerce Solution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">✓</span>
                  <span className="text-gray-400">Custom Functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-electric-blue mr-2">✓</span>
                  <span className="text-gray-400">Priority Support</span>
                </li>
              </ul>
              <Button className="btn-secondary w-full">Request Quote</Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Not sure which plan is right for you?</p>
            <Button className="btn-primary">
              Contact Us for a Custom Solution
            </Button>
          </div>
        </div>
      </section>

      {/* Web Development Package Benefits Section */}
      <section className="py-16 bg-black border-t border-electric-blue/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Web Development Package Benefits</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Domain Benefits */}
            <Card className="bg-black border border-electric-blue/20">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Globe className="text-electric-blue" size={24} />
                  <CardTitle className="text-white">Free Domain</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">.in Domain – Absolutely FREE (if available)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">.com Domain – Available at minimal additional cost</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Maintenance Benefits */}
            <Card className="bg-black border border-electric-blue/20">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Server className="text-electric-blue" size={24} />
                  <CardTitle className="text-white">Free Maintenance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">3 Months Free Maintenance & Updates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Bug fixes and minor content edits</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Performance optimization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <IndianRupee className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">After 3 months: Plans from ₹499/month</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Package Inclusions */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* What's Included - Left Side */}
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">Custom-designed, responsive website</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">Basic SEO setup for Google ranking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">Fast & secure hosting support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">Standard features (forms, gallery, blog)</span>
                </li>
              </ul>

              {/* Why Choose Us - Right Side */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">One-stop solution for design, domain, hosting & maintenance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Quick delivery & high-quality work</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Support via WhatsApp, call, or email</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button className="btn-primary text-lg px-8 py-6">
              Get Started with Your Website
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
