
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const PortfolioPreview = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Redesign',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      delay: 0.1
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
    },
    {
      id: 6,
      title: 'Social Media Campaign',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093',
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Check out some of our recent work that showcases our expertise and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-navy/40 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-electric-blue font-medium mb-1">{project.category}</span>
                <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                <Link 
                  to={`/portfolio/${project.id}`} 
                  className="text-white flex items-center hover:text-electric-blue transition-colors"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </Link>
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
