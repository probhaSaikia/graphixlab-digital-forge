
import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock data for a single blog post
  const post = {
    id: parseInt(id || "1"),
    title: "The Evolution of Web Design in 2025",
    content: `
      <p>The digital landscape continues to evolve at an unprecedented pace, with web design trends in 2025 pushing the boundaries of creativity, functionality, and user experience.</p>
      
      <h2>Immersive Experiences</h2>
      <p>One of the most notable trends this year is the rise of immersive experiences. Designers are leveraging advanced 3D rendering, subtle animations, and interactive elements to create websites that feel alive and responsive to user interactions. These immersive experiences are not just visually appealing but also enhance engagement and information retention.</p>
      
      <h2>Adaptive Interfaces</h2>
      <p>Adaptive interfaces that respond to user behavior and preferences are becoming increasingly common. These interfaces use machine learning algorithms to analyze user interactions and adjust the layout, content, and functionality accordingly, providing a personalized experience for each visitor.</p>
      
      <h2>Sustainability-Focused Design</h2>
      <p>As environmental concerns continue to grow, sustainability-focused web design is gaining traction. This approach involves optimizing websites for energy efficiency, reducing carbon footprints, and adopting eco-friendly design practices. From minimalist layouts that require less processing power to green hosting solutions, designers are finding innovative ways to make the web more sustainable.</p>
      
      <h2>Neomorphic Elements</h2>
      <p>Neomorphism, a design style that combines elements of skeuomorphism and flat design, is seeing a resurgence in 2025. This style uses subtle shadows and highlights to create UI elements that appear to extrude from or be impressed into the background, giving a soft, tactile feel to digital interfaces.</p>
      
      <h2>Accessibility as a Priority</h2>
      <p>Accessibility is no longer an afterthought but a fundamental aspect of web design. Designers are embracing inclusive design principles to ensure that websites are usable by people with diverse abilities and needs. This includes considerations for color contrast, keyboard navigation, screen reader compatibility, and much more.</p>
    `,
    image: "/lovable-uploads/e38798ec-862c-40b4-a391-0c252302dbb2.png",
    date: "May 1, 2025",
    author: "Alex Chen",
    readTime: "5 min read",
    categories: ["Design", "Trends"],
    relatedPosts: [
      {
        id: 2,
        title: "Building Accessible React Applications",
        image: "/lovable-uploads/eb4f8430-eab5-4fce-8166-fa5c6338973b.png"
      },
      {
        id: 3,
        title: "The Impact of AI in Modern Web Development",
        image: "/lovable-uploads/d0359efa-bc3e-4d0a-a1ad-efa075324d9b.png"
      }
    ]
  };

  return (
    <Layout>
      <article className="py-16 md:py-20">
        <div className="container px-4 mx-auto">
          <Link to="/blog" className="inline-flex items-center text-electric-blue mb-8 hover:text-white transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8 flex flex-wrap gap-2">
                {post.categories.map(category => (
                  <Badge 
                    key={category} 
                    className="bg-electric-blue/80 hover:bg-electric-blue text-white"
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-10">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1 text-electric-blue" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-1 text-electric-blue" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1 text-electric-blue" />
                  {post.readTime}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-lg overflow-hidden mb-10 neon-border"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-lg md:prose-xl prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-16 pt-8 border-t border-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-white">Related Posts</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <Link to={`/blog/${relatedPost.id}`} className="group">
                      <div className="bg-navy/30 rounded-lg overflow-hidden border border-electric-blue/20 hover:border-electric-blue/60 transition-colors duration-300">
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-white group-hover:text-electric-blue transition-colors">
                            {relatedPost.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
