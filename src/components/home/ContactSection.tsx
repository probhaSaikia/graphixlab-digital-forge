
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  Calendar, 
  Send 
} from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-black relative border-t border-electric-blue/20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full bg-electric-blue/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-neon-pink/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Ready to start your project? Reach out to us and let's discuss how we can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-black/70 backdrop-blur-sm p-8 rounded-xl border border-electric-blue/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="text-gray-300 mb-1 block">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your Name" 
                    className="bg-black/60 border-electric-blue/30 focus:border-electric-blue text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-gray-300 mb-1 block">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-black/60 border-electric-blue/30 focus:border-electric-blue text-white"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="text-gray-300 mb-1 block">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="Project Inquiry" 
                  className="bg-black/60 border-electric-blue/30 focus:border-electric-blue text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-gray-300 mb-1 block">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  className="bg-black/60 border-electric-blue/30 focus:border-electric-blue text-white min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full">
                <Send className="mr-2" size={18} />
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold text-white mb-6">Alternative Ways to Reach Us</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric-blue/10 flex items-center justify-center mr-4">
                  <Mail className="text-electric-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Us</h4>
                  <a href="mailto:info@graphixlab.com" className="text-gray-400 hover:text-electric-blue transition-colors">
                    info@graphixlab.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric-blue/10 flex items-center justify-center mr-4">
                  <Phone className="text-electric-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Call Us</h4>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-electric-blue transition-colors">
                    (123) 456-7890
                  </a>
                  <p className="text-gray-500 text-sm mt-1">
                    Mon-Fri, 9am-5pm EST
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric-blue/10 flex items-center justify-center mr-4">
                  <Calendar className="text-electric-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Schedule a Call</h4>
                  <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                    Book a consultation
                  </a>
                  <p className="text-gray-500 text-sm mt-1">
                    30-minute free consultation
                  </p>
                </div>
              </div>
              
              <div className="bg-black/60 p-6 rounded-lg border border-electric-blue/20 mt-8">
                <h4 className="text-white font-semibold mb-3">Ready to get started?</h4>
                <p className="text-gray-400 mb-4">Take the first step towards transforming your digital presence.</p>
                <Button className="btn-primary w-full">
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
