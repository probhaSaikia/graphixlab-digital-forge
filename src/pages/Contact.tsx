import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send, Calendar, MessageSquare, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };
  return <Layout>
      {/* Hero Section */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              Ready to start your project? Get in touch with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-[240px] px-[102px]">
            {/* Contact Form */}
            
            
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <p className="text-gray-400 mb-8">
                  We're here to help! Reach out to us through any of the following methods.
                </p>
              </div>
              
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
                  <MapPin className="text-electric-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Our Location</h4>
                  <p className="text-gray-400">
                    123 Digital Avenue, Tech Hub, CA 94107
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Meetings by appointment only
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric-blue/10 flex items-center justify-center mr-4">
                  <Clock className="text-electric-blue" size={24} />
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
              </div>
              
              <div className="pt-8">
                <h4 className="text-white font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue hover:bg-electric-blue hover:text-white transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue hover:bg-electric-blue hover:text-white transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue hover:bg-electric-blue hover:text-white transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue hover:bg-electric-blue hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-black border-t border-electric-blue/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Other Ways to Connect</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the method that works best for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-electric-blue/20 rounded-xl p-8 text-center hover:shadow-lg hover:shadow-electric-blue/10 transition-all duration-300">
              <div className="mx-auto w-16 h-16 rounded-full bg-electric-blue/10 flex items-center justify-center mb-6">
                <Calendar className="text-electric-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Schedule a Call</h3>
              <p className="text-gray-400 mb-6">
                Book a convenient time for a 30-minute consultation to discuss your project.
              </p>
              <Button className="btn-primary w-full">Book a Call</Button>
            </div>
            
            <div className="bg-black border border-electric-blue/20 rounded-xl p-8 text-center hover:shadow-lg hover:shadow-electric-blue/10 transition-all duration-300">
              <div className="mx-auto w-16 h-16 rounded-full bg-electric-blue/10 flex items-center justify-center mb-6">
                <MessageSquare className="text-electric-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>
              <p className="text-gray-400 mb-6">
                Chat with one of our representatives for immediate assistance during business hours.
              </p>
              <Button className="btn-primary w-full">Start Chat</Button>
            </div>
            
            <div className="bg-black border border-electric-blue/20 rounded-xl p-8 text-center hover:shadow-lg hover:shadow-electric-blue/10 transition-all duration-300">
              <div className="mx-auto w-16 h-16 rounded-full bg-electric-blue/10 flex items-center justify-center mb-6">
                <Mail className="text-electric-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Newsletter</h3>
              <p className="text-gray-400 mb-6">
                Subscribe to our newsletter for the latest updates, insights, and special offers.
              </p>
              <div className="flex">
                <Input placeholder="Your Email" className="bg-black/60 border-electric-blue/30 focus:border-electric-blue text-white rounded-r-none" />
                <Button className="bg-electric-blue text-white rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black border-t border-electric-blue/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black border border-electric-blue/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What is your typical process for a new project?</h3>
              <p className="text-gray-400">
                Our process includes an initial consultation, proposal, design approval, development, testing, and launch. We keep you involved at every step to ensure the final product meets your expectations.
              </p>
            </div>
            
            <div className="bg-black border border-electric-blue/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">How long does it take to complete a website?</h3>
              <p className="text-gray-400">
                Project timelines vary based on complexity, but a typical website takes 4-8 weeks from start to finish. Custom web applications may take longer depending on the features required.
              </p>
            </div>
            
            <div className="bg-black border border-electric-blue/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer maintenance services?</h3>
              <p className="text-gray-400">
                Yes, we offer ongoing maintenance and support packages to keep your website secure, up-to-date, and performing optimally. We can tailor a maintenance plan to suit your specific needs.
              </p>
            </div>
            
            <div className="bg-black border border-electric-blue/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-400">
                We accept various payment methods including credit cards, bank transfers, and PayPal. We typically require a 50% deposit to begin work, with the remainder due upon completion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contact;