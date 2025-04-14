
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const PortfolioPreview = () => {
  // Renamed from Harshi to Maharshi
  const featuredProject = {
    id: 1,
    title: 'Maharshi Excellence Academy',
    category: 'Educational Website',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
    delay: 0.1,
    featured: true,
    link: 'https://maharshiexcellenceacademy.com'
  };
  
  return <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">Featured Project</h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{
          animationDelay: '0.1s'
        }}>
            Check out my educational website project that showcases creativity and expertise.
          </p>
        </div>
        
        {/* Featured Project */}
        <div className="mb-16 bg-electric-blue/10 dark:bg-black border border-electric-blue/20 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <span className="text-electric-blue font-medium mb-2 block">FEATURED PROJECT</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{featuredProject.title}</h3>
              <p className="text-gray-300 mb-6">
                A comprehensive educational website designed to showcase courses, facilitate student enrollment, 
                and provide informational resources for Maharshi Excellence Academy.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-white font-semibold mb-1">Key Features</h4>
                  <ul className="text-gray-400 space-y-1">
                    <li className="flex items-center">
                      <span className="text-electric-blue mr-2">✓</span>
                      Responsive design for all devices
                    </li>
                    <li className="flex items-center">
                      <span className="text-electric-blue mr-2">✓</span>
                      Course catalog and enrollment system
                    </li>
                    <li className="flex items-center">
                      <span className="text-electric-blue mr-2">✓</span>
                      Faculty profiles and student testimonials
                    </li>
                    <li className="flex items-center">
                      <span className="text-electric-blue mr-2">✓</span>
                      Integrated contact and inquiry forms
                    </li>
                  </ul>
                </div>
              </div>
              <Button asChild className="bg-electric-blue hover:bg-electric-blue/90 text-white flex items-center">
                <a href={featuredProject.link} target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>
            <div className="bg-black flex items-center justify-center p-8">
              <div className="w-full h-full min-h-[250px] md:min-h-[350px] relative rounded-md overflow-hidden shadow-lg border border-electric-blue/30">
                <div className="absolute inset-0 bg-electric-blue/5 backdrop-blur-sm z-10 flex items-center justify-center">
                  <div className="animate-pulse flex flex-col items-center">
                    <div className="h-8 w-8 border-4 border-electric-blue border-t-transparent rounded-full animate-spin mb-2"></div>
                    <p className="text-electric-blue text-sm">Loading Preview...</p>
                  </div>
                </div>
                <iframe 
                  src={featuredProject.link}
                  className="w-full h-full absolute inset-0 z-0"
                  title="Maharshi Excellence Academy Website Preview"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                  onLoad={(e) => {
                    // Remove loading overlay when iframe is loaded
                    const target = e.target as HTMLIFrameElement;
                    const parent = target.parentElement;
                    if (parent) {
                      const loadingOverlay = parent.querySelector('div.absolute');
                      if (loadingOverlay) loadingOverlay.classList.add('hidden');
                    }
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="btn-primary">
            <Link to="/portfolio">View Project Details</Link>
          </Button>
        </div>
      </div>
    </section>;
};

export default PortfolioPreview;
