
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  // Portfolio categories
  const categories = ['All', 'Web Development', 'UI/UX Design', 'Graphic Design', 'Digital Marketing'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Portfolio projects
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website Redesign',
      category: 'Web Development',
      description: 'Complete redesign of an e-commerce platform with improved user experience and conversion rate optimization.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      results: '+150% conversion rate',
    },
    {
      id: 2,
      title: 'Corporate Brand Identity',
      category: 'Graphic Design',
      description: 'Comprehensive brand identity design including logo, color palette, typography, and brand guidelines.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
      results: 'Brand recognition +85%',
    },
    {
      id: 3,
      title: 'SaaS Application Dashboard',
      category: 'UI/UX Design',
      description: 'User interface design for a complex SaaS application with intuitive dashboards and data visualization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      results: 'User retention +45%',
    },
    {
      id: 4,
      title: 'Mobile App Development',
      category: 'Web Development',
      description: 'Custom cross-platform mobile application development with real-time data synchronization.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
      results: '100K+ downloads',
    },
    {
      id: 5,
      title: 'SEO Optimization Campaign',
      category: 'Digital Marketing',
      description: 'Comprehensive SEO strategy leading to significant improvements in search engine rankings and organic traffic.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      results: 'Organic traffic +200%',
    },
    {
      id: 6,
      title: 'Product Packaging Design',
      category: 'Graphic Design',
      description: 'Creative packaging design for a consumer product line with focus on shelf appeal and brand consistency.',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093',
      results: 'In-store sales +65%',
    },
    {
      id: 7,
      title: 'Digital Marketing Campaign',
      category: 'Digital Marketing',
      description: 'Multi-channel digital marketing campaign including social media, email, and paid advertising.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      results: 'ROI 300%',
    },
    {
      id: 8,
      title: 'Financial Services Website',
      category: 'Web Development',
      description: 'Secure and accessible website for a financial services company with client portal integration.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      results: 'Lead generation +75%',
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy/90 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">Our Portfolio</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Showcasing our creative work and digital solutions that drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category ? 'default' : 'outline'}
                className={
                  activeCategory === category 
                    ? 'bg-electric-blue text-white border-none' 
                    : 'bg-transparent border border-electric-blue/30 text-white hover:bg-electric-blue/10'
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-navy rounded-xl overflow-hidden border border-electric-blue/20 card-hover">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy to-transparent py-2 px-4">
                    <span className="text-electric-blue font-medium text-sm">{project.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-electric-blue font-medium">Results: {project.results}</span>
                    <Link 
                      to={`/portfolio/${project.id}`} 
                      className="text-white flex items-center hover:text-electric-blue transition-colors"
                    >
                      Details <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Case Study */}
          <div className="mt-16 bg-navy/60 rounded-xl overflow-hidden border border-electric-blue/20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <span className="text-electric-blue font-medium mb-2 block">FEATURED CASE STUDY</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">E-Commerce Revenue Growth</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-1">The Challenge</h4>
                    <p className="text-gray-400">
                      An established e-commerce brand was struggling with high cart abandonment and low conversion rates despite good traffic.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Our Solution</h4>
                    <p className="text-gray-400">
                      We performed a complete UX audit, redesigned the checkout process, implemented A/B testing, and optimized product pages.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">The Results</h4>
                    <ul className="text-gray-400 space-y-1">
                      <li className="flex items-center">
                        <span className="text-electric-blue mr-2">✓</span>
                        Conversion rate increased by 135%
                      </li>
                      <li className="flex items-center">
                        <span className="text-electric-blue mr-2">✓</span>
                        Cart abandonment reduced by 42%
                      </li>
                      <li className="flex items-center">
                        <span className="text-electric-blue mr-2">✓</span>
                        Average order value increased by 28%
                      </li>
                    </ul>
                  </div>
                </div>
                <Button className="btn-primary flex items-center">
                  View Full Case Study <ExternalLink size={16} className="ml-2" />
                </Button>
              </div>
              <div className="bg-charcoal flex items-center justify-center p-8">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="E-commerce Case Study" 
                  className="rounded-lg max-h-[400px] object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <Button className="btn-primary">
            Get in Touch
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
