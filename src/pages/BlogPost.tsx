
import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock data for blog posts
  const posts = {
    "1": {
      id: 1,
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
    },
    "2": {
      id: 2,
      title: "Building Accessible React Applications",
      content: `
        <p>Accessibility is a critical aspect of modern web development, ensuring that applications are usable by people with diverse abilities and needs.</p>
        
        <h2>Why Accessibility Matters</h2>
        <p>Building accessible applications is not just about compliance with regulations like the WCAG or the ADA. It's about creating inclusive experiences that can be enjoyed by everyone, regardless of their abilities or the devices they use. Accessibility benefits not only users with disabilities but also improves the overall user experience for everyone.</p>
        
        <h2>Key Accessibility Considerations in React</h2>
        <p>When developing React applications, there are several key considerations to keep in mind:</p>
        <ul>
          <li>Semantic HTML: Using appropriate HTML elements helps screen readers and other assistive technologies understand the structure and meaning of your content.</li>
          <li>Keyboard Navigation: Ensure that all interactive elements are accessible via keyboard, as many users cannot use a mouse.</li>
          <li>Focus Management: Properly manage focus to help keyboard users navigate through your application efficiently.</li>
          <li>ARIA Attributes: Use ARIA (Accessible Rich Internet Applications) attributes to provide additional information to assistive technologies.</li>
        </ul>
        
        <h2>Testing for Accessibility</h2>
        <p>Regular testing is essential to ensure your application remains accessible. Tools like Axe, Wave, and Lighthouse can help identify accessibility issues, but manual testing with actual assistive technologies is also crucial.</p>
        
        <h2>The Role of Components Libraries</h2>
        <p>Component libraries like Material-UI, Chakra UI, or Reakit can help streamline the process of building accessible applications by providing pre-built components that already implement many accessibility best practices.</p>
      `,
      image: "/lovable-uploads/eb4f8430-eab5-4fce-8166-fa5c6338973b.png",
      date: "April 28, 2025",
      author: "Jamie Wilson",
      readTime: "8 min read",
      categories: ["Development", "Accessibility"],
      relatedPosts: [
        {
          id: 1,
          title: "The Evolution of Web Design in 2025",
          image: "/lovable-uploads/e38798ec-862c-40b4-a391-0c252302dbb2.png"
        },
        {
          id: 4,
          title: "Optimizing Performance in React Applications",
          image: "/lovable-uploads/d38ac88d-d681-4b4a-84c4-15db6ce0fbff.png"
        }
      ]
    },
    "3": {
      id: 3,
      title: "The Impact of AI in Modern Web Development",
      content: `<p>AI is transforming web development in profound ways...</p>`,
      image: "/lovable-uploads/d0359efa-bc3e-4d0a-a1ad-efa075324d9b.png",
      date: "April 22, 2025",
      author: "Sam Taylor",
      readTime: "6 min read",
      categories: ["Technology", "AI"],
      relatedPosts: [
        {
          id: 1,
          title: "The Evolution of Web Design in 2025",
          image: "/lovable-uploads/e38798ec-862c-40b4-a391-0c252302dbb2.png"
        },
        {
          id: 4,
          title: "Optimizing Performance in React Applications",
          image: "/lovable-uploads/d38ac88d-d681-4b4a-84c4-15db6ce0fbff.png"
        }
      ]
    },
    "4": {
      id: 4,
      title: "Optimizing Performance in React Applications",
      content: `<p>Performance optimization is crucial for React applications...</p>`,
      image: "/lovable-uploads/d38ac88d-d681-4b4a-84c4-15db6ce0fbff.png",
      date: "April 15, 2025",
      author: "Morgan Lee",
      readTime: "7 min read",
      categories: ["Development", "Performance"],
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
    },
    "5": {
      id: 5,
      title: "Grow Your Small Business Online: Digital Services Guide",
      content: `
        <p>In today's digital age, a strong online presence is crucial for business success. Studies show around 80% of consumers research products online before buying, so small businesses without a website or marketing risk losing customers. Web development, SEO, digital marketing, and social media management each help attract and engage customers online.</p>
        
        <h2>Our Digital Services</h2>
        
        <h3>Web Development</h3>
        <p>A professional website is the foundation of your online presence. It builds credibility – a modern site makes your business look trustworthy – and engages visitors with a user-friendly design. A great site also showcases your offerings to a wider audience.</p>
        
        <h3>Search Engine Optimization (SEO)</h3>
        <p>SEO helps customers find your site. By optimizing keywords and content, SEO drives targeted traffic and leads. As one source notes, SEO can "increase the visibility of your business," ensuring "more people are going to know about it".</p>
        
        <h3>Digital Marketing</h3>
        <p>This includes online ads, content marketing, email campaigns, and more. Digital marketing amplifies your brand and targets audiences. It has "revolutionized the way small businesses compete with larger brands," leveling the playing field.</p>
        
        <h3>Social Media Management</h3>
        <p>Active profiles on social platforms (Facebook, Instagram, etc.) build brand awareness and engagement. Great social media marketing can create "devoted brand advocates" and drive leads and sales. Regular posts and interactions foster loyalty and keep customers coming back.</p>
        
        <h2>Integrated Strategy</h2>
        <p>Together, these services form a cohesive strategy. Your website attracts visitors, SEO makes it easy to find you, and digital marketing drives targeted traffic. Social media then keeps people engaged with your brand. This synergy "fosters stronger customer relationships and improves brand loyalty," while a well-aligned approach also "maximizes ROI". Combined, these digital tools help small businesses thrive online.</p>
        
        <div class="bg-navy/30 p-6 rounded-lg border border-electric-blue/20 my-8">
          <h3 class="text-electric-blue mb-2">Why Your Small Business Needs These Services</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>80% of consumers research products online before purchasing</li>
            <li>A professional website builds credibility and trust</li>
            <li>SEO increases visibility and drives targeted traffic</li>
            <li>Digital marketing levels the playing field with larger competitors</li>
            <li>Social media creates brand advocates and fosters customer loyalty</li>
          </ul>
        </div>
        
        <p>Sources: Industry research and expert insights from oramadigitaldesign.com, innovation.fortlewis.edu, searlesgraphics.com, sociallyin.com, and wordstream.com.</p>
      `,
      image: "/lovable-uploads/e38798ec-862c-40b4-a391-0c252302dbb2.png",
      date: "May 1, 2025",
      author: "Orama Digital",
      readTime: "10 min read",
      categories: ["Small Business", "Digital Marketing"],
      relatedPosts: [
        {
          id: 1,
          title: "The Evolution of Web Design in 2025",
          image: "/lovable-uploads/e38798ec-862c-40b4-a391-0c252302dbb2.png"
        },
        {
          id: 3,
          title: "The Impact of AI in Modern Web Development",
          image: "/lovable-uploads/d0359efa-bc3e-4d0a-a1ad-efa075324d9b.png"
        }
      ]
    }
  };

  const post = posts[id as keyof typeof posts] || posts["1"];

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
