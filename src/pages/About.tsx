
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Clock, 
  CheckCircle, 
  Star,
  Globe
} from 'lucide-react';

const About = () => {
  // Skills matrix data
  const skills = [
    { name: 'Web Development', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Graphic Design', level: 80 },
    { name: 'SEO Optimization', level: 85 },
    { name: 'Digital Marketing', level: 75 },
    { name: 'Content Creation', level: 70 },
  ];

  

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">About Us</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Get to know the creative minds behind GraphiXlab Digital Forge.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                With over a year of hands-on experience in digital design and development, this journey began as a solo freelancing venture driven by a passion for creating impactful web experiences. What started as small-scale projects has grown into a mission to blend beautiful design with functional, results-driven solutions.
                </p>
                <p>
                The goal is simple: to craft digital experiences that not only look stunning but also perform seamlessly and deliver real value. Every project is approached as a unique opportunity to combine creativity with strategy, ensuring both visual appeal and technical excellence.
                </p>
                <p>
                At GraphiXlab, the belief is that great design isn't just about aesthetics—it's about creating purposeful, engaging experiences that truly connect with users.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Button asChild className="btn-primary">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button asChild className="btn-secondary">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-electric-blue/10 rounded-lg p-1">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf" 
                  alt="Founder" 
                  className="rounded-lg"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-black border border-electric-blue/20 rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-electric-blue/10 rounded-full p-2">
                    <Award className="text-electric-blue" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">10+ Years</p>
                    <p className="text-gray-400 text-sm">Industry Experience</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-black border border-electric-blue/20 rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-electric-blue/10 rounded-full p-2">
                    <Users className="text-electric-blue" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">100+</p>
                    <p className="text-gray-400 text-sm">Satisfied Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide our work and relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black/60 border border-electric-blue/20 rounded-xl p-6 text-center hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mx-auto w-16 h-16 rounded-full bg-electric-blue/10 flex items-center justify-center mb-4">
                <Star className="text-electric-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-gray-400">
                We strive for excellence in every aspect of our work, from design and development to client communication.
              </p>
            </div>
            
            <div className="bg-black/60 border border-electric-blue/20 rounded-xl p-6 text-center hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mx-auto w-16 h-16 rounded-full bg-electric-blue/10 flex items-center justify-center mb-4">
                <CheckCircle className="text-electric-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
              <p className="text-gray-400">
                We believe in honesty, transparency, and doing what's right for our clients, even when it's challenging.
              </p>
            </div>
            
            <div className="bg-black/60 border border-electric-blue/20 rounded-xl p-6 text-center hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mx-auto w-16 h-16 rounded-full bg-electric-blue/10 flex items-center justify-center mb-4">
                <Clock className="text-electric-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Timeliness</h3>
              <p className="text-gray-400">
                We respect deadlines and deliver high-quality work on time, every time.
              </p>
            </div>
            
            <div className="bg-black/60 border border-electric-blue/20 rounded-xl p-6 text-center hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mx-auto w-16 h-16 rounded-full bg-electric-blue/10 flex items-center justify-center mb-4">
                <Globe className="text-electric-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-gray-400">
                We embrace new technologies and creative approaches to solve complex problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Skills & Expertise</h2>
              <p className="text-gray-400 mb-8">
                Our team combines diverse skills and expertise to deliver comprehensive digital solutions for your business.
              </p>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-electric-blue">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-black h-2 rounded-full border border-electric-blue/10">
                      <div 
                        className="bg-electric-blue h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black p-8 rounded-xl text-center border border-electric-blue/20">
                <div className="text-4xl font-bold text-white mb-2">10+</div>
                <p className="text-gray-400">Years of Experience</p>
              </div>
              <div className="bg-black p-8 rounded-xl text-center border border-electric-blue/20">
                <div className="text-4xl font-bold text-white mb-2">200+</div>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-black p-8 rounded-xl text-center border border-electric-blue/20">
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div className="bg-black p-8 rounded-xl text-center border border-electric-blue/20">
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <p className="text-gray-400">Industry Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/60 border border-electric-blue/20 rounded-xl p-8 relative card-hover">
                <div className="text-electric-blue text-4xl absolute -top-4 left-6">❝</div>
                <p className="text-gray-300 mb-6 pt-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help bring your vision to life with our creative expertise.
          </p>
          <Button asChild className="btn-primary">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
