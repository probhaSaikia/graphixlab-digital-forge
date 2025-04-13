
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap, PenTool } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="hero-gradient relative overflow-hidden py-20 md:py-32">
      {/* Floating Elements */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-turquoise/10 animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="hidden md:block absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-turquoise/10 animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-coral/10 animate-float" style={{ animationDelay: '2.5s' }}></div>
      
      {/* Animated Code Snippets */}
      <div className="hidden lg:flex absolute left-10 top-1/3 opacity-20 animate-pulse-slow">
        <Code size={32} />
        <span className="ml-2 font-mono">&lt;div&gt;</span>
      </div>
      <div className="hidden lg:flex absolute right-10 bottom-1/3 opacity-20 animate-pulse-slow" style={{ animationDelay: '1.5s' }}>
        <span className="mr-2 font-mono">&lt;/div&gt;</span>
        <Code size={32} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-off-white animate-fade-in">
            Crafting Digital Experiences <span className="text-turquoise">That Convert</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            One agency, infinite solutions. We bring your vision to life with cutting-edge technology and creative design.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button className="btn-primary flex items-center gap-2 group">
              Let's Build Your Vision
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="btn-secondary">
              Explore Our Work
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center">
              <Zap className="text-turquoise mr-2" />
              <span>Fast Turnaround</span>
            </div>
            <div className="flex items-center">
              <PenTool className="text-turquoise mr-2" />
              <span>Creative Solutions</span>
            </div>
            <div className="flex items-center">
              <Code className="text-turquoise mr-2" />
              <span>Technical Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
