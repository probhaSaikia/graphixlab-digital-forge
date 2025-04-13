
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const PortfolioPreview = () => {
  const projects = [
    {
      id: 1,
      title: 'Harshi Excellence Academy',
      category: 'Educational Website',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
      delay: 0.1,
      featured: true,
      link: 'https://harshiexcellenceacademy.com'
    },
    {
      id: 2,
      title: 'Brand Identity System',
      category: 'Graphic Design',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
      delay: 0.2
    },
    {
      id: 3,
      title: 'SaaS Dashboard UI',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      delay: 0.3
    },
    {
      id: 4,
      title: 'Mobile App Development',
      category: 'App Development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
      delay: 0.4
    },
    {
      id: 5,
      title: 'SEO Performance Boost',
      category: 'SEO Optimization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      delay: 0.5
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Check out my educational website project and other design concepts that showcase creativity and expertise.
          </p>
        </div>
        
        {/* Featured Project */}
        <div className="mb-16 bg-electric-blue/10 dark:bg-black border border-electric-blue/20 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <span className="text-electric-blue font-medium mb-2 block">FEATURED PROJECT</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Harshi Excellence Academy</h3>
              <p className="text-gray-300 mb-6">
                A comprehensive educational website designed to showcase courses, facilitate student enrollment, 
                and provide informational resources for Harshi Excellence Academy.
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
                <a href="https://harshiexcellenceacademy.com" target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>
            <div className="bg-black flex items-center justify-center p-8">
              <img 
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8" 
                alt="Harshi Excellence Academy" 
                className="rounded-lg max-h-[400px] object-cover shadow-lg border border-electric-blue/20"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(project => !project.featured).map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg h-72 animate-fade-in"
              style={{ animationDelay: `${project.delay}s` }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-electric-blue font-medium mb-1">{project.category}</span>
                <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                {project.link ? (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white flex items-center hover:text-electric-blue transition-colors"
                  >
                    Visit Website <ExternalLink size={16} className="ml-1" />
                  </a>
                ) : (
                  <Link 
                    to={`/portfolio/${project.id}`} 
                    className="text-white flex items-center hover:text-electric-blue transition-colors"
                  >
                    View Details <ExternalLink size={16} className="ml-1" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="btn-primary">
            <Link to="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
