import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Globe, Search, PenTool, LineChart, Mail, Database, Users, ArrowRight, TrendingUp, Smartphone } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  delay: number;
}

const ServiceCard = ({
  icon,
  title,
  description,
  benefits,
  delay
}: ServiceCardProps) => (
  <Card 
    className="bg-black/60 border border-electric-blue/20 hover:border-electric-blue/60 transition-all duration-300 card-hover animate-fade-in group" 
    style={{ animationDelay: `${delay}s` }}
  >
    <CardHeader className="pb-4">
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-electric-blue/10 mb-4 group-hover:bg-electric-blue/20 transition-colors group-hover:scale-110">
        {icon}
      </div>
      <CardTitle className="text-white text-xl mb-2 group-hover:text-electric-blue transition-colors">{title}</CardTitle>
      <CardDescription className="text-gray-300 leading-relaxed">{description}</CardDescription>
    </CardHeader>
    <CardContent className="pt-0">
      <ul className="space-y-2 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
            <div className="w-1.5 h-1.5 rounded-full bg-electric-blue/80 mt-2 flex-shrink-0 group-hover:bg-neon-pink"></div>
            {benefit}
          </li>
        ))}
      </ul>
      <Button asChild className="w-full bg-electric-blue/10 hover:bg-electric-blue text-electric-blue hover:text-white border border-electric-blue/30 transition-all duration-300 group-hover:shadow-glow">
        <Link to="/services" className="flex items-center justify-center gap-2">
          Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </CardContent>
  </Card>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="text-electric-blue" size={28} />,
      title: 'Websites That Convert',
      description: 'Transform visitors into customers with high-performance websites designed for results.',
      benefits: ['Mobile-first responsive design', 'SEO-optimized architecture', 'Fast loading speeds', 'Conversion-focused layouts'],
      delay: 0.1
    },
    {
      icon: <TrendingUp className="text-electric-blue" size={28} />,
      title: 'Growth-Driven SEO',
      description: 'Dominate search results and attract qualified leads with strategic SEO optimization.',
      benefits: ['Keyword research & strategy', 'Technical SEO optimization', 'Content optimization', 'Local SEO for businesses'],
      delay: 0.2
    },
    {
      icon: <PenTool className="text-electric-blue" size={28} />,
      title: 'Brand Identity Design',
      description: 'Create memorable brand experiences that resonate with your target audience.',
      benefits: ['Logo & visual identity design', 'Brand guideline development', 'Marketing collateral design', 'Digital asset creation'],
      delay: 0.3
    },
    {
      icon: <LineChart className="text-electric-blue" size={28} />,
      title: 'Results-Driven Marketing',
      description: 'Amplify your reach and maximize ROI with data-driven digital marketing strategies.',
      benefits: ['Social media advertising', 'Google Ads management', 'Analytics & reporting', 'Marketing automation'],
      delay: 0.4
    },
    {
      icon: <Users className="text-electric-blue" size={28} />,
      title: 'Social Media Mastery',
      description: 'Build engaged communities and drive brand awareness across all social platforms.',
      benefits: ['Content strategy & creation', 'Community management', 'Influencer partnerships', 'Social commerce setup'],
      delay: 0.5
    },
    {
      icon: <Mail className="text-electric-blue" size={28} />,
      title: 'Email Marketing Success',
      description: 'Nurture leads and boost sales with personalized email campaigns that perform.',
      benefits: ['Automated email sequences', 'List building strategies', 'A/B testing & optimization', 'Performance analytics'],
      delay: 0.6
    }
  ];

  return (
    <section className="bg-black py-[18px]">
      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-electric-blue/10 px-4 py-2 rounded-full border border-electric-blue/20 mb-6">
            <Smartphone className="text-electric-blue" size={16} />
            <span className="text-electric-blue text-sm font-medium">Full-Service Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Services That <span className="text-electric-blue text-glow">Drive Growth</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            From stunning websites to powerful marketing campaigns, we deliver comprehensive digital solutions.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each service is designed to work together, creating a cohesive digital ecosystem for your business.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              benefits={service.benefits} 
              delay={service.delay} 
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-electric-blue/5 border border-electric-blue/20 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how our services can help you achieve your digital goals and drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-primary">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="btn-secondary">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
