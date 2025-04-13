
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <Layout>
      <div className="relative">
        {/* Decorative elements that follow cursor with parallax effect */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-70 hidden md:block">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `pulse-slow ${2 + Math.random() * 3}s infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        <HeroSection />
        
        {/* Glowing divider */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-5 w-20 h-10">
            <div className="absolute w-full h-full bg-electric-blue opacity-20 blur-xl rounded-full animate-pulse-slow"></div>
            <div className="absolute w-1/2 h-1/2 left-1/4 top-1/4 bg-neon-pink opacity-30 blur-lg rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        <ServicesSection />
        
        {/* Another fancy divider */}
        <div className="relative py-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center">
              <div className="h-px w-1/3 bg-gradient-to-r from-transparent to-electric-blue/50"></div>
              <div className="mx-4">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-electric-blue/20 rounded-full blur-md animate-pulse-slow"></div>
                  <img 
                    src="/lovable-uploads/1e56e3ab-ca17-4e3a-96cb-d62c665012a8.png" 
                    alt="GraphiXlab Icon" 
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
              </div>
              <div className="h-px w-1/3 bg-gradient-to-l from-transparent to-neon-pink/50"></div>
            </div>
          </div>
        </div>
        
        <WhyChooseUsSection />
        <PortfolioPreview />
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Index;
