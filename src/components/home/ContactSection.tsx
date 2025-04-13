
import React from 'react';
import AdvancedContactForm from '@/components/contact/AdvancedContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Calendar
} from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-black relative border-t border-electric-blue/20">
      {/* WhatsApp Button */}
      <WhatsAppButton />
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full bg-electric-blue/10 blur-3xl"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-neon-pink/10 blur-3xl"
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to start your project? Reach out to us and let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AdvancedContactForm />
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 relative inline-block">
              Alternative Ways to Reach Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-electric-blue to-[#FF52FF]"></span>
            </h3>
            
            <div className="space-y-8">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric-blue/10 flex items-center justify-center mr-4 group">
                  <Mail className="text-electric-blue group-hover:animate-bounce" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Us</h4>
                  <a href="mailto:graphixlab.in@gmail.com" className="text-gray-400 hover:text-electric-blue transition-colors">
                    graphixlab.in@gmail.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric-blue/10 flex items-center justify-center mr-4">
                  <Phone className="text-electric-blue group-hover:animate-bounce" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Call Us</h4>
                  <a href="tel:7002642149" className="text-gray-400 hover:text-electric-blue transition-colors">
                    7002642149
                  </a>
                  <p className="text-gray-500 text-sm mt-1">
                    Mon-Fri, 9:30am-5:30pm IST
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric-blue/10 flex items-center justify-center mr-4">
                  <Calendar className="text-electric-blue group-hover:animate-bounce" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Schedule a Call</h4>
                  <a href="/contact" className="text-gray-400 hover:text-electric-blue transition-colors">
                    Book a consultation
                  </a>
                  <p className="text-gray-500 text-sm mt-1">
                    30-minute free consultation
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-black/60 p-6 rounded-lg border border-electric-blue/20 mt-8 hover:shadow-lg hover:shadow-electric-blue/10 transition-all duration-300"
              >
                <h4 className="text-white font-semibold mb-3">Ready to get started?</h4>
                <p className="text-gray-400 mb-4">Take the first step towards transforming your digital presence. Packages start at ₹9,999.</p>
                <a href="/contact" className="block w-full bg-gradient-to-r from-electric-blue to-[#FF52FF] text-white text-center font-semibold py-3 px-6 rounded-md hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1">
                  Start Your Project
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
