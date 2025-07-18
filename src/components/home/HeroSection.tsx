
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap, PenTool, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="hero-gradient relative overflow-hidden py-24 md:py-36">
      {/* Static Background Elements - Simplified */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-electric-blue/10 blur-xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-neon-pink/10 blur-lg"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-electric-blue/5 blur-2xl"></div>
      </div>
      
      {/* Subtle Code Elements */}
      <div className="hidden lg:flex absolute left-12 top-1/3 opacity-10">
        <Code size={28} className="text-electric-blue" />
      </div>
      <div className="hidden lg:flex absolute right-12 bottom-1/3 opacity-10">
        <Code size={28} className="text-neon-pink" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Single Compelling Headline */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-electric-blue/10 px-4 py-2 rounded-full border border-electric-blue/20 mb-6">
              <Star className="text-electric-blue" size={16} />
              <span className="text-electric-blue text-sm font-medium">Award-Winning Digital Agency</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Crafting Digital <span className="text-electric-blue">Excellence</span>
            </h1>
          </div>
          
          {/* Benefit-Focused Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
            Transform your business with cutting-edge web solutions that drive results
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            From concept to conversion, we build digital experiences that captivate your audience and grow your business.
          </p>
          
          {/* Prominent CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Button className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group">
              Get Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button className="bg-transparent border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
              View Our Work
            </Button>
          </div>
          
          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            <div className="flex flex-col items-center p-4">
              <div className="bg-electric-blue/10 p-3 rounded-full mb-3">
                <Zap className="text-electric-blue" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-400 text-center">Rapid development and deployment</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="bg-electric-blue/10 p-3 rounded-full mb-3">
                <PenTool className="text-electric-blue" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Custom Design</h3>
              <p className="text-sm text-gray-400 text-center">Tailored solutions for your brand</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="bg-electric-blue/10 p-3 rounded-full mb-3">
                <Code className="text-electric-blue" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Expert Development</h3>
              <p className="text-sm text-gray-400 text-center">Clean, scalable, future-proof code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
