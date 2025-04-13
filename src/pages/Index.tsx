
import React from 'react';
import Layout from '@/components/Layout';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import ContactSection from '@/components/home/ContactSection';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home, Component } from "lucide-react";
import { useTheme } from '@/context/ThemeContext';

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <Layout>
      <div className="relative">
        {/* Breadcrumb appears above hero */}
        <div className={`container mx-auto py-4 px-4 ${theme === 'light' ? 'text-navy' : 'text-white/80'}`}>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="inline-flex items-center gap-1.5">
                  <Home size={16} strokeWidth={2} aria-hidden="true" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        <HeroGeometric 
          badge="GraphiXlab Studio"
          title1="Elevate Your Digital"
          title2="Presence With Style"
        />
        
        <ServicesSection />
        
        {/* Glowing divider with electric-blue */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-5 w-20 h-10">
            <div className="absolute w-full h-full bg-electric-blue opacity-20 blur-xl rounded-full animate-pulse-slow"></div>
            <div className="absolute w-1/2 h-1/2 left-1/4 top-1/4 bg-neon-pink opacity-30 blur-lg rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        <WhyChooseUsSection />
        
        {/* Fancy divider with electric-blue gradient */}
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
        
        <PortfolioPreview />
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Index;
