import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, TrendingUp, Users, Globe } from 'lucide-react';

const PortfolioPreview = () => {
  const featuredProject = {
    id: 1,
    title: 'Maharshi Excellence Academy',
    category: 'Educational Website',
    description: 'A comprehensive educational platform that increased student enrollment by 150% and improved user engagement.',
    challenge: 'The academy needed a modern, user-friendly website to showcase courses and streamline enrollment.',
    solution: 'We created a responsive educational platform with intuitive navigation and conversion-optimized design.',
    results: [
      { metric: '150%', description: 'Increase in student enrollment' },
      { metric: '85%', description: 'Improvement in user engagement' },
      { metric: '3x', description: 'Faster page load times' }
    ],
    link: 'https://maharshiexcellenceacademy.com',
    image: '/lovable-uploads/8ea93cc9-96b2-4be5-b2e2-941eceffbe3d.png' // Using the Travel Agency image as a strong visual placeholder
  };
  
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-electric-blue/10 px-4 py-2 rounded-full border border-electric-blue/20 mb-6">
            <Globe className="text-electric-blue" size={16} />
            <span className="text-electric-blue text-sm font-medium">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Our <span className="text-electric-blue text-glow">Work</span> Speaks
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real projects, real results. See how we've helped businesses transform their digital presence.
          </p>
        </div>
        
        {/* Featured Case Study - Enhanced border and shadow */}
        <div className="bg-gradient-to-br from-electric-blue/5 to-neon-pink/5 border border-electric-blue/20 rounded-2xl overflow-hidden mb-16 shadow-lg shadow-electric-blue/10">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-electric-blue/20 text-electric-blue px-3 py-1 rounded-full text-sm font-medium">
                  FEATURED PROJECT
                </span>
                <span className="text-gray-400 text-sm">{featuredProject.category}</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {featuredProject.title}
              </h3>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Challenge & Solution */}
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse-slow"></div>
                    Challenge
                  </h4>
                  <p className="text-gray-400 leading-relaxed pl-4 border-l-2 border-electric-blue/30">
                    {featuredProject.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                    Solution
                  </h4>
                  <p className="text-gray-400 leading-relaxed pl-4 border-l-2 border-neon-pink/30">
                    {featuredProject.solution}
                  </p>
                </div>
              </div>

              {/* Results Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {featuredProject.results.map((result, index) => (
                  <div key={index} className="text-center p-4 bg-black/40 rounded-lg border border-electric-blue/10 hover:shadow-glow transition-all duration-300">
                    <div className="text-2xl md:text-3xl font-bold text-electric-blue mb-1">
                      {result.metric}
                    </div>
                    <div className="text-xs text-gray-400 leading-tight">
                      {result.description}
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild className="btn-primary flex items-center gap-2 w-full sm:w-auto">
                <a href={featuredProject.link} target="_blank" rel="noopener noreferrer">
                  Visit Live Site <ExternalLink size={16} />
                </a>
              </Button>
            </div>

            {/* Visual Side - Using Image with Neon Border/Glow */}
            <div className="bg-black/60 p-8 lg:p-12 flex items-center justify-center min-h-[400px]">
              <div className="relative w-full max-w-lg mx-auto group">
                {/* Neon Glow Container */}
                <div className="absolute inset-0 bg-electric-blue/50 blur-3xl rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse-slow"></div>
                
                <div className="relative rounded-xl overflow-hidden border-4 border-electric-blue/30 shadow-2xl shadow-neon-pink/20">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title + " preview"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm text-center">
                    <p className="text-xs text-gray-400">Visual mockup of a recent project (Travel Agency) illustrating design style.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-primary">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" className="btn-secondary">
              <Link to="/portfolio">View All Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
