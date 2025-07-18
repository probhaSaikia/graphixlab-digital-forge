
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
  Check,
  Users,
  Bot,
  MessageSquare,
  BadgePercent,
  X
} from 'lucide-react';

const Services = () => {
  const webTechServices = [
    {
      icon: <Globe className="text-electric-blue" size={32} />,
      title: 'Web Development',
      description: 'Turn visitors into customers with high-converting websites that work flawlessly across all devices and drive real business results.',
    },
    {
      icon: <Search className="text-electric-blue" size={32} />,
      title: 'SEO Optimization',
      description: 'Dominate search results and attract qualified leads with proven SEO strategies that increase your online visibility and revenue.',
    },
    {
      icon: <Database className="text-electric-blue" size={32} />,
      title: 'Web Hosting',
      description: 'Keep your website running at peak performance with lightning-fast, secure hosting that ensures 99.9% uptime for your business.',
    },
    {
      icon: <Server className="text-electric-blue" size={32} />,
      title: 'Maintenance & Support',
      description: 'Focus on your business while we handle all technical updates, security patches, and performance optimizations for your website.',
    },
  ];

  const designServices = [
    {
      icon: <PenTool className="text-electric-blue" size={32} />,
      title: 'Graphic Design',
      description: 'Create powerful brand impressions with stunning visual designs that capture attention and communicate your message effectively.',
    },
    {
      icon: <LayoutDashboard className="text-electric-blue" size={32} />,
      title: 'UI/UX Design',
      description: 'Boost user engagement and conversions with intuitive, beautiful interfaces that users love to interact with.',
    },
    {
      icon: <Image className="text-electric-blue" size={32} />,
      title: 'Print Design',
      description: 'Make lasting impressions with professional print materials that reinforce your brand and drive business growth.',
    },
    {
      icon: <MonitorSmartphone className="text-electric-blue" size={32} />,
      title: 'Responsive Design',
      description: 'Reach customers everywhere with designs that look perfect and function flawlessly on every device and screen size.',
    },
  ];

  const marketingServices = [
    {
      icon: <LineChart className="text-electric-blue" size={32} />,
      title: 'Digital Marketing',
      description: 'Multiply your reach and maximize ROI with data-driven marketing strategies that deliver measurable business growth.',
    },
    {
      icon: <Users className="text-electric-blue" size={32} />,
      title: 'Social Media Management',
      description: 'Build engaged communities and increase brand awareness across Instagram, Facebook, and LinkedIn to drive more sales.',
    },
    {
      icon: <Mail className="text-electric-blue" size={32} />,
      title: 'Email Marketing',
      description: 'Turn prospects into loyal customers with personalized email campaigns that nurture relationships and boost sales.',
    },
    {
      icon: <MessageSquare className="text-electric-blue" size={32} />,
      title: 'WhatsApp Marketing',
      description: 'Connect directly with customers through WhatsApp Business API for instant communication and higher conversion rates.',
    },
    {
      icon: <BadgePercent className="text-electric-blue" size={32} />,
      title: 'Digital Advertising',
      description: 'Get immediate results with targeted ad campaigns across Google and social platforms that maximize your advertising ROI.',
    },
    {
      icon: <LineChart className="text-electric-blue" size={32} />,
      title: 'Google Ads',
      description: 'Drive qualified traffic and generate leads with expertly managed Google Ads campaigns that deliver consistent results.',
    },
    {
      icon: <Bot className="text-electric-blue" size={32} />,
      title: 'AI Agents Services',
      description: 'Automate customer service and boost efficiency with custom AI chatbots that work 24/7 to grow your business.',
    },
  ];

  const renderServiceCards = (services: any[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <Card 
          key={index} 
          className="bg-black border border-electric-blue/20 hover:border-electric-blue/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-electric-blue/20 hover:scale-[1.02] cursor-pointer group"
          onClick={() => window.location.href = '/contact'}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-electric-blue/10 group-hover:bg-electric-blue/20 transition-all duration-300 mb-4 group-hover:scale-110">
              {service.icon}
            </div>
            <CardTitle className="text-white text-xl group-hover:text-electric-blue transition-colors duration-300">{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">{service.description}</CardDescription>
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
              Comprehensive digital solutions tailored to accelerate your business growth and maximize your success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16 bg-black border-t border-electric-blue/10">
        <div className="container mx-auto px-4">
          <div className="mb-20">
            <div className="relative mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Web & Tech</h2>
              <div className="w-full h-px bg-gradient-to-r from-electric-blue via-electric-blue/50 to-transparent"></div>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-electric-blue rounded-full"></div>
            </div>
            {renderServiceCards(webTechServices)}
          </div>

          <div className="mb-20">
            <div className="relative mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Design</h2>
              <div className="w-full h-px bg-gradient-to-r from-electric-blue via-electric-blue/50 to-transparent"></div>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-electric-blue rounded-full"></div>
            </div>
            {renderServiceCards(designServices)}
          </div>

          <div>
            <div className="relative mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Marketing</h2>
              <div className="w-full h-px bg-gradient-to-r from-electric-blue via-electric-blue/50 to-transparent"></div>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-electric-blue rounded-full"></div>
            </div>
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
              Flexible pricing options designed to deliver maximum value for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-black border border-electric-blue/20 rounded-xl p-8 hover:shadow-lg hover:shadow-electric-blue/10 hover:border-electric-blue/40 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
              <div className="mb-6 flex items-center">
                <IndianRupee className="text-white mr-1" size={24} />
                <span className="text-5xl font-bold text-white">9,999</span>
                <span className="text-gray-400 ml-2">/ project</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-electric-blue mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-400">Simple Website (up to 5 pages)</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-electric-blue mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-400">Mobile Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-electric-blue mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-400">Basic SEO Setup</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-electric-blue mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-400">Contact Form</span>
                </li>
                <li className="flex items-start">
                  <X className="text-red-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-500">E-commerce Functionality</span>
                </li>
                <li className="flex items-start">
                  <X className="text-red-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-500">Custom Functionality</span>
                </li>
              </ul>
              <Button className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white transition-all duration-300 hover:scale-105 active:scale-95">
                Select Plan
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="bg-black border-2 border-electric-blue rounded-xl p-8 shadow-xl shadow-electric-blue/30 transform scale-105 z-10 hover:shadow-2xl hover:shadow-electric-blue/40 transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-electric-blue text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/5 to-transparent rounded-xl pointer-events-none"></div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="mb-6 flex items-center">
                <IndianRupee className="text-white mr-1" size={24} />
                <span className="text-5xl font-bold text-white">24,999</span>
                <span className="text-gray-400 ml-2">/ project</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-electric-blue mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-400">Custom Website (up to 12 pages)</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-electric-blue mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-400">Advanced Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-electric-blue mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-400">Comprehensive SEO</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-electric-blue mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-400">Interactive Elements</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-electric-blue mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-400">Basic E-commerce</span>
                </li>
                <li className="flex items-start">
                  <X className="text-red-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-500">Advanced Custom Functionality</span>
                </li>
              </ul>
              <Button className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white transition-all duration-300 hover:scale-105 active:scale-95">
                Select Plan
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-black border border-electric-blue/20 rounded-xl p-8 hover:shadow-lg hover:shadow-electric-blue/10 hover:border-electric-blue/40 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">Custom</span>
                <div className="text-gray-400 mt-1">Tailored solutions for large-scale projects</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-electric-blue mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-400">Unlimited Pages</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-electric-blue mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-400">Premium Design</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-electric-blue mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-400">Advanced SEO Strategy</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-electric-blue mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-400">Full E-commerce Solution</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-electric-blue mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-400">Custom Functionality</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-electric-blue mr-3 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-400">Priority Support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300 hover:scale-105 active:scale-95">
                Request Quote
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Not sure which plan is right for you?</p>
            <Button className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-3 transition-all duration-300 hover:scale-105 active:scale-95">
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
            <Card className="bg-black border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-electric-blue/10 rounded-lg">
                    <Globe className="text-electric-blue" size={24} />
                  </div>
                  <CardTitle className="text-white">Free Domain</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">.in Domain – Absolutely FREE (if available)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">.com Domain – Available at minimal additional cost</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Maintenance Benefits */}
            <Card className="bg-black border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-electric-blue/10 rounded-lg">
                    <Server className="text-electric-blue" size={24} />
                  </div>
                  <CardTitle className="text-white">Free Maintenance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">3 Months Free Maintenance & Updates</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Bug fixes and minor content edits</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-electric-blue mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Performance optimization</span>
                  </li>
                  <li className="flex items-start space-x-3">
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
            <Button className="bg-electric-blue hover:bg-electric-blue/90 text-white text-lg px-8 py-6 transition-all duration-300 hover:scale-105 active:scale-95">
              Get Started with Your Website
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
