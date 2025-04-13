
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight, GraduationCap, Book, Users, Globe, Mail, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Portfolio = () => {
  // Portfolio categories
  const categories = ['All', 'Educational', 'Web Development', 'UI/UX Design', 'Graphic Design'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Portfolio projects
  const projects = [
    {
      id: 1,
      title: 'Harshi Excellence Academy',
      category: 'Educational',
      description: 'A comprehensive educational website designed for an academy offering various courses, with student enrollment and information resources.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
      results: 'Live Educational Website',
      link: 'https://harshiexcellenceacademy.com',
      featured: true
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
      category: 'Web Development',
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
      category: 'Web Development',
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

  // Featured project (Harshi Excellence Academy)
  const featuredProject = projects.find(project => project.featured);

  return (
    <Layout>
      {/* Hero Section - Enhanced with Electric Blue */}
      <section className="bg-black border-b border-electric-blue/20 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="inline-flex items-center gap-1.5 text-gray-400">
                    <Globe size={16} strokeWidth={2} aria-hidden="true" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-electric-blue">Portfolio</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white neon-text">Project Portfolio</h1>
              <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Showcasing my educational website project and design concepts with a focus on creativity and functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12 bg-black border-t border-electric-blue/10">
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

          {/* Featured Educational Project */}
          {featuredProject && (activeCategory === 'All' || activeCategory === featuredProject.category) && (
            <div className="mb-16 bg-black/80 rounded-xl overflow-hidden border border-electric-blue/20">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <span className="text-electric-blue font-medium mb-2 block">FEATURED EDUCATIONAL PROJECT</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{featuredProject.title}</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-1">Overview</h4>
                      <p className="text-gray-300">
                        A complete educational website developed for Harshi Excellence Academy to showcase their courses, 
                        faculty, and provide an easy way for students to enroll in programs.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Features Implemented</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li className="flex items-center">
                          <GraduationCap size={16} className="text-electric-blue mr-2" />
                          Course catalog with detailed descriptions
                        </li>
                        <li className="flex items-center">
                          <Book size={16} className="text-electric-blue mr-2" />
                          Educational resources and learning materials
                        </li>
                        <li className="flex items-center">
                          <Users size={16} className="text-electric-blue mr-2" />
                          Faculty profiles and testimonials section
                        </li>
                        <li className="flex items-center">
                          <Mail size={16} className="text-electric-blue mr-2" />
                          Contact and enrollment forms
                        </li>
                        <li className="flex items-center">
                          <Smartphone size={16} className="text-electric-blue mr-2" />
                          Fully responsive design for all devices
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button asChild className="btn-primary flex items-center bg-electric-blue hover:bg-electric-blue/90">
                    <a href={featuredProject.link} target="_blank" rel="noopener noreferrer">
                      Visit Website <ExternalLink size={16} className="ml-2" />
                    </a>
                  </Button>
                </div>
                <div className="bg-black flex items-center justify-center p-8">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title} 
                    className="rounded-lg max-h-[400px] object-cover shadow-lg border border-electric-blue/20"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.filter(project => !project.featured).map((project) => (
              <div key={project.id} className="bg-black rounded-xl overflow-hidden border border-electric-blue/20 card-hover shadow-sm hover:shadow-electric-blue/20 transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-electric-blue/20 to-transparent py-2 px-4">
                    <span className="text-electric-blue font-medium text-sm">{project.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-electric-blue font-medium">Results: {project.results}</span>
                    {project.link ? (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white flex items-center hover:text-electric-blue transition-colors"
                      >
                        Visit <ExternalLink size={16} className="ml-1" />
                      </a>
                    ) : (
                      <Link 
                        to={`/portfolio/${project.id}`} 
                        className="text-white flex items-center hover:text-electric-blue transition-colors"
                      >
                        Details <ArrowRight size={16} className="ml-1" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Discuss Your Project?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Let me help you bring your educational or business website vision to life.
            </p>
            <Button asChild className="btn-primary bg-electric-blue hover:bg-electric-blue/90">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
