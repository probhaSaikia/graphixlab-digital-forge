import React from 'react';
import Layout from '@/components/Layout';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import ImageCarousel from '@/components/home/ImageCarousel';
import ContactSection from '@/components/home/ContactSection';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home, Layout as LayoutIcon, Users } from "lucide-react";

const Index = () => {
  const joinTeamWhatsAppLink = `https://wa.me/7002642149?text=${encodeURIComponent("Hello! I would like to join your team. Please let me know about available opportunities.")}`;

  return (
    <Layout>
      <div className="relative">
        {/* Breadcrumb appears above hero */}
        <div className="container mx-auto py-4 px-4 text-white/80 bg-black">
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
                <BreadcrumbPage className="text-electric-blue">Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        {/* Explicitly setting the badge prop */}
        <HeroGeometric 
          badge="GraphiXlab Digital Forge"
          title1="Elevate Your Digital"
          title2="Presence With Style"
        />
        
        {/* Join Our Team Button Section */}
        <div className="relative bg-black py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-electric-blue/20 to-neon-pink/20 border border-electric-blue/30">
              <a
                href={joinTeamWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-gradient-to-r from-electric-blue to-neon-pink hover:from-electric-blue/80 hover:to-neon-pink/80 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-glow flex items-center gap-2">
                  <Users size={20} />
                  Join Our Team
                </Button>
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Passionate about digital innovation? Come work with us!
            </p>
            
            {/* Additional descriptive content */}
            <div className="mt-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Build the Future with <span className="text-electric-blue">GraphiXlab</span>
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                We're always looking for talented individuals who share our passion for creating exceptional digital experiences. Whether you're a designer, telecaller, or social media influencer, we'd love to hear from you.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400">
                <div className="text-center">
                  <h4 className="text-white font-semibold mb-2">Telecaller</h4>
                  <p className="text-sm">Remote position • Earn up to ₹30,000/month</p>
                </div>
                <div className="text-center">
                  <h4 className="text-white font-semibold mb-2">Social Media Influencer</h4>
                  <p className="text-sm">Remote position • Earn up to ₹30,000/month</p>
                </div>
                <div className="text-center">
                  <h4 className="text-white font-semibold mb-2">Creative Freedom</h4>
                  <p className="text-sm">Express your ideas and shape innovative projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <ServicesSection />
        
        {/* Glowing divider with electric-blue */}
        <div className="relative bg-black">
          <div className="absolute left-1/2 -translate-x-1/2 -top-5 w-20 h-10">
            <div className="absolute w-full h-full bg-electric-blue opacity-20 blur-xl rounded-full animate-pulse-slow"></div>
            <div className="absolute w-1/2 h-1/2 left-1/4 top-1/4 bg-neon-pink opacity-30 blur-lg rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        <WhyChooseUsSection />
        
        {/* Fancy divider with electric-blue gradient */}
        <div className="relative py-10 bg-black">
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
        
        {/* Adding the Image Carousel component after the PortfolioPreview */}
        <ImageCarousel />
        
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Index;
