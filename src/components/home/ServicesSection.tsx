
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Search, 
  PenTool, 
  LineChart, 
  Mail, 
  Database, 
  ChevronRight 
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => (
  <Card className="bg-black border border-electric-blue/20 card-hover animate-fade-in" style={{ animationDelay: `${delay}s` }}>
    <CardHeader>
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-electric-blue/10 mb-4">
        {icon}
      </div>
      <CardTitle className="text-white">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-400">{description}</CardDescription>
      <Link 
        to="/services" 
        className="flex items-center text-electric-blue mt-4 hover:underline"
      >
        Learn More <ChevronRight size={16} className="ml-1" />
      </Link>
    </CardContent>
  </Card>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="text-electric-blue" size={24} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies.',
      delay: 0.1
    },
    {
      icon: <Search className="text-electric-blue" size={24} />,
      title: 'SEO Optimization',
      description: 'Boost your visibility and drive more traffic to your website.',
      delay: 0.2
    },
    {
      icon: <PenTool className="text-electric-blue" size={24} />,
      title: 'Graphic Design',
      description: 'Eye-catching visuals that communicate your brand message effectively.',
      delay: 0.3
    },
    {
      icon: <LineChart className="text-electric-blue" size={24} />,
      title: 'Digital Marketing',
      description: 'Strategic campaigns to grow your audience and increase conversions.',
      delay: 0.4
    },
    {
      icon: <Mail className="text-electric-blue" size={24} />,
      title: 'Email Campaigns',
      description: 'Engaging email marketing that nurtures leads and drives sales.',
      delay: 0.5
    },
    {
      icon: <Database className="text-electric-blue" size={24} />,
      title: 'Web Hosting',
      description: 'Reliable hosting solutions with top-tier performance and security.',
      delay: 0.6
    },
  ];
  
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the online world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
