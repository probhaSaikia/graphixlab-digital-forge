import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ExternalLink, GraduationCap, Book, Users, Globe, Mail, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Portfolio = () => {
  const featuredProject = {
    id: 1,
    title: 'Maharshi Excellence Academy',
    category: 'Educational',
    description: 'A comprehensive educational website designed for an academy offering various courses, with student enrollment and information resources.',
    results: 'Live Educational Website',
    link: 'https://maharshiexcellenceacademy.com',
    featured: true
  };
  return <Layout>
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
              <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                Showcasing my educational website project with a focus on creativity and functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-12 bg-black border-t border-electric-blue/10">
        <div className="container mx-auto px-4">
          {/* Featured Educational Project */}
          <div className="mb-16 bg-black/80 rounded-xl overflow-hidden border border-electric-blue/20">
            <div className="p-8 lg:p-12">
              <span className="text-electric-blue font-medium mb-2 block">FEATURED EDUCATIONAL PROJECT</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{featuredProject.title}</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-white font-semibold mb-1">Overview</h4>
                  <p className="text-gray-300">
                    A complete educational website developed for Maharshi Excellence Academy to showcase their courses, 
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
    </Layout>;
};
export default Portfolio;
