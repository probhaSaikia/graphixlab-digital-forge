
import React from 'react';
import { 
  Users, 
  Code2, 
  Clock, 
  Shield, 
  Trophy,
  BadgeCheck
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => (
  <div className="flex items-start animate-slide-in" style={{ animationDelay: `${delay}s` }}>
    <div className="flex-shrink-0 mr-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-electric-blue/10">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Users className="text-electric-blue" size={24} />,
      title: 'Single Point of Contact',
      description: 'No more juggling multiple freelancers. Get all your digital needs met in one place.',
      delay: 0.1
    },
    {
      icon: <Code2 className="text-electric-blue" size={24} />,
      title: 'Full-Stack Expertise',
      description: 'From front-end design to back-end development, we handle it all with precision.',
      delay: 0.2
    },
    {
      icon: <Clock className="text-electric-blue" size={24} />,
      title: 'Fast Turnaround',
      description: 'We value your time and deliver projects efficiently without compromising quality.',
      delay: 0.3
    },
    {
      icon: <Shield className="text-electric-blue" size={24} />,
      title: 'Reliable Support',
      description: 'Count on ongoing assistance and maintenance for your digital assets.',
      delay: 0.4
    },
    {
      icon: <Trophy className="text-electric-blue" size={24} />,
      title: 'Award-Winning Designs',
      description: 'Our creative work has been recognized for its innovation and effectiveness.',
      delay: 0.5
    },
    {
      icon: <BadgeCheck className="text-electric-blue" size={24} />,
      title: 'Results-Driven Approach',
      description: 'We focus on creating solutions that achieve your business objectives.',
      delay: 0.6
    },
  ];
  
  return (
    <section className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">Why Choose Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            We combine technical expertise with creative vision to deliver exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
