
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import AdvancedContactForm from '@/components/contact/AdvancedContactForm';
import BookingScheduler from '@/components/contact/BookingScheduler';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Calendar, MessageSquare, Instagram } from 'lucide-react';

const Contact = () => {
  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };
  
  return <Layout>
      {/* WhatsApp Button */}
      <WhatsAppButton />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }} 
        className="bg-black py-20 md:py-28 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-electric-blue/5 filter blur-[100px] animate-pulse-glow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#FF52FF]/5 filter blur-[100px] animate-pulse-glow" style={{
          animationDelay: "1s"
        }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }} 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Get In <span className="text-electric-blue text-glow">Touch</span> With Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }} 
              className="text-xl text-gray-300 mb-8"
            >
              Ready to start your project? Let's create something amazing together.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AdvancedContactForm />
            
            {/* Contact Info */}
            <motion.div initial="hidden" animate="visible" variants={fadeInUpVariants} custom={0} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 relative inline-block">
                  Contact Information
                  <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-electric-blue to-[#FF52FF]"></span>
                </h3>
                <p className="text-gray-400 mb-8">
                  We're here to help! Reach out to us through any of the following methods.
                </p>
              </div>
              
              <motion.div variants={fadeInUpVariants} custom={1} className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric-blue/10 flex items-center justify-center mr-4 group-hover:bg-electric-blue/20 transition-colors duration-300">
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
              
              <motion.div variants={fadeInUpVariants} custom={2} className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric-blue/10 flex items-center justify-center mr-4 group-hover:bg-electric-blue/20 transition-colors duration-300">
                  <Phone className="text-electric-blue group-hover:animate-bounce" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Call Us</h4>
                  <a href="tel:7002642149" className="text-gray-400 hover:text-electric-blue transition-colors">
                    7002642149
                  </a>
                  <p className="text-gray-500 text-sm mt-1">
                    Mon-Fri, 9am-5pm EST
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUpVariants} custom={4} className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric-blue/10 flex items-center justify-center mr-4 group-hover:bg-electric-blue/20 transition-colors duration-300">
                  <Clock className="text-electric-blue group-hover:animate-bounce" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Working Hours</h4>
                  <p className="text-gray-400">
                    Monday - Friday: 9:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-400">
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUpVariants} custom={5} className="pt-8">
                <h4 className="text-white font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <motion.a 
                    whileHover={{ scale: 1.1, y: -5 }} 
                    whileTap={{ scale: 0.95 }} 
                    href="https://www.instagram.com/graphixlab.in?igsh=MWN4NGJiejBkMW9rZQ=="
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue hover:bg-electric-blue hover:text-white transition-colors"
                  >
                    <Instagram size={20} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Section with Google Form */}
      <section className="py-16 bg-black border-t border-electric-blue/20">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Book a Consultation</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Schedule a 30-minute free consultation with our team to discuss your project in detail.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <BookingScheduler />
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-black border-t border-electric-blue/20">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Other Ways to Connect</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the method that works best for you.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} whileHover={{
            y: -10,
            transition: {
              duration: 0.2
            }
          }} className="bg-black border border-electric-blue/20 rounded-xl p-8 text-center hover:shadow-lg hover:shadow-electric-blue/10 transition-all duration-300">
              <div className="mx-auto w-16 h-16 rounded-full bg-electric-blue/10 flex items-center justify-center mb-6 group">
                <Calendar className="text-electric-blue group-hover:animate-bounce" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Schedule a Call</h3>
              <p className="text-gray-400 mb-6">
                Book a convenient time for a 30-minute consultation to discuss your project. Starting at ₹999.
              </p>
              <Button className="btn-primary w-full bg-gradient-to-r from-electric-blue to-[#FF52FF]">Book a Call</Button>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} whileHover={{
            y: -10,
            transition: {
              duration: 0.2
            }
          }} className="bg-black border border-electric-blue/20 rounded-xl p-8 text-center hover:shadow-lg hover:shadow-electric-blue/10 transition-all duration-300">
              <div className="mx-auto w-16 h-16 rounded-full bg-electric-blue/10 flex items-center justify-center mb-6 group">
                <MessageSquare className="text-electric-blue group-hover:animate-bounce" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>
              <p className="text-gray-400 mb-6">
                Chat with one of our representatives for immediate assistance during business hours (9:30 AM - 5:30 PM IST).
              </p>
              <Button className="btn-primary w-full bg-gradient-to-r from-electric-blue to-[#FF52FF]">Start Chat</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <motion.section initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5,
      delay: 0.3
    }} className="py-16 bg-black border-t border-electric-blue/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3,
            delay: 0.1
          }} whileHover={{
            scale: 1.03
          }} className="bg-black border border-electric-blue/20 rounded-xl p-6 hover:border-electric-blue/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">What is your typical process for a new project?</h3>
              <p className="text-gray-400">
                Our process includes an initial consultation, proposal, design approval, development, testing, and launch. We keep you involved at every step to ensure the final product meets your expectations.
              </p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3,
            delay: 0.2
          }} whileHover={{
            scale: 1.03
          }} className="bg-black border border-electric-blue/20 rounded-xl p-6 hover:border-electric-blue/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">How long does it take to complete a website?</h3>
              <p className="text-gray-400">
                Project timelines vary based on complexity, but a typical website takes 4-8 weeks from start to finish. Custom web applications may take longer depending on the features required.
              </p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3,
            delay: 0.3
          }} whileHover={{
            scale: 1.03
          }} className="bg-black border border-electric-blue/20 rounded-xl p-6 hover:border-electric-blue/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer maintenance services?</h3>
              <p className="text-gray-400">
                Yes, we offer ongoing maintenance and support packages to keep your website secure, up-to-date, and performing optimally. We can tailor a maintenance plan to suit your specific needs.
              </p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3,
            delay: 0.4
          }} whileHover={{
            scale: 1.03
          }} className="bg-black border border-electric-blue/20 rounded-xl p-6 hover:border-electric-blue/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-400">
                We accept various payment methods including credit cards, bank transfers, and PayPal. We typically require a 50% deposit to begin work, with the remainder due upon completion.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Layout>;
};
export default Contact;
