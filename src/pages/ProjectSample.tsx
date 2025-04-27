
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ExternalLink, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectSample = () => {
  return (
    <Layout>
      <section className="bg-black border-b border-electric-blue/20 py-20 md:py-28">
        <div className="container mx-auto px-4">
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
                <BreadcrumbLink href="/projects" className="text-gray-400">
                  Projects
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-electric-blue">Travel Agency Website</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Travel Agency Website</h1>
            <p className="text-xl text-gray-300 mb-8">
              A modern and immersive travel website designed to inspire wanderlust and facilitate travel bookings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {/* Project Preview */}
            <Card className="bg-black/80 border border-electric-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Website Preview</CardTitle>
                <CardDescription className="text-gray-400">
                  Clean and modern design focused on user experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-electric-blue/20 mb-6">
                  <img 
                    src="/lovable-uploads/8ea93cc9-96b2-4be5-b2e2-941eceffbe3d.png"
                    alt="Travel Agency Website Preview"
                    className="w-full h-auto"
                  />
                </div>
                <Button asChild className="bg-electric-blue hover:bg-electric-blue/90 text-white">
                  <a 
                    href="https://hilarious-chebakia-b4c5a3.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Visit Website <ExternalLink size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Project Details */}
            <Card className="bg-black/80 border border-electric-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Modern and responsive design</li>
                    <li>• Interactive booking interface</li>
                    <li>• Destination showcase with high-quality images</li>
                    <li>• User-friendly navigation</li>
                    <li>• Contact and inquiry forms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• React.js for the frontend</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Responsive design principles</li>
                    <li>• Modern animation effects</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectSample;
