
import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 5,
      title: "Grow Your Small Business Online: Digital Services Guide",
      excerpt: "Discover how web development, SEO, digital marketing, and social media can transform your small business's online presence and drive growth.",
      image: "/lovable-uploads/e38798ec-862c-40b4-a391-0c252302dbb2.png",
      date: "May 1, 2025",
      author: "Orama Digital",
      readTime: "10 min read",
      categories: ["Small Business", "Digital Marketing"]
    },
    {
      id: 1,
      title: "The Evolution of Web Design in 2025",
      excerpt: "Discover the latest trends in web design and how they're shaping the digital landscape in 2025.",
      image: "/lovable-uploads/e38798ec-862c-40b4-a391-0c252302dbb2.png",
      date: "May 1, 2025",
      author: "Alex Chen",
      readTime: "5 min read",
      categories: ["Design", "Trends"]
    },
    {
      id: 2,
      title: "Building Accessible React Applications",
      excerpt: "A comprehensive guide to creating inclusive and accessible React applications for all users.",
      image: "/lovable-uploads/eb4f8430-eab5-4fce-8166-fa5c6338973b.png",
      date: "April 28, 2025",
      author: "Jamie Wilson",
      readTime: "8 min read",
      categories: ["Development", "Accessibility"]
    },
    {
      id: 3,
      title: "The Impact of AI in Modern Web Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and interact with websites.",
      image: "/lovable-uploads/d0359efa-bc3e-4d0a-a1ad-efa075324d9b.png",
      date: "April 22, 2025",
      author: "Sam Taylor",
      readTime: "6 min read",
      categories: ["Technology", "AI"]
    },
    {
      id: 4, 
      title: "Optimizing Performance in React Applications",
      excerpt: "Learn the best practices for building high-performance React applications that load quickly and run smoothly.",
      image: "/lovable-uploads/d38ac88d-d681-4b4a-84c4-15db6ce0fbff.png",
      date: "April 15, 2025",
      author: "Morgan Lee",
      readTime: "7 min read",
      categories: ["Development", "Performance"]
    }
  ];

  return (
    <Layout>
      <section className="py-16 md:py-20">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our <span className="text-electric-blue">Blog</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Insights, tutorials, and news from our team of digital experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.id}`}>
                  <Card className="bg-navy/30 border border-electric-blue/20 overflow-hidden h-full hover:border-electric-blue/60 transition-colors duration-300 card-hover">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        {post.categories.map(category => (
                          <Badge 
                            key={category} 
                            className="bg-electric-blue/80 hover:bg-electric-blue text-white"
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl text-white hover:text-electric-blue transition-colors duration-300">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-400 mb-4">
                        {post.excerpt}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="text-sm text-gray-500 flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1 text-electric-blue" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <User size={14} className="mr-1 text-electric-blue" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1 text-electric-blue" />
                        {post.readTime}
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/blog-categories" 
              className="btn-secondary inline-flex items-center"
            >
              Browse All Categories
              <span className="ml-2 text-electric-blue">→</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
