
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MessageCircle, Twitter } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-deep-black border-t border-electric-blue/20 pt-12 pb-6 md:pt-16 md:pb-8">
      {/* Get Started CTA Banner */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-electric-blue/10 via-electric-blue/5 to-transparent border border-electric-blue/30 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who've accelerated their growth with our digital solutions.
          </p>
          <Button 
            asChild 
            className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-electric-blue/25"
          >
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Logo and Description */}
          <div className="lg:pr-4">
            <Link to="/" className="inline-block mb-4 md:mb-6 group">
              <span className="text-xl md:text-2xl font-poppins font-bold text-white group-hover:text-glow transition-all duration-300">
                Graphi<span className="text-neon-pink group-hover:pink-text-glow">X</span>lab
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting digital experiences that convert. We bring your vision to life with cutting-edge tech and creative design.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/graphixlab.in?igsh=MWN4NGJiejBkMW9rZQ==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-electric-blue transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              >
                <Instagram size={isMobile ? 22 : 24} />
              </a>
              <a 
                href="https://x.com/graphixlab25?t=TclTKSLVWzF9q_1_wE0YTw&s=09" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-electric-blue transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              >
                <Twitter size={isMobile ? 22 : 24} />
              </a>
              <a 
                href="https://www.threads.net/@graphixlab.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-electric-blue transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] fill-current"
                >
                  <path d="M13.254 21.885a9.578 9.578 0 0 1-4.758-1.338 6.917 6.917 0 0 1-2.691-2.807A8.517 8.517 0 0 1 4.667 14a9.048 9.048 0 0 1-.488-3.065 8.73 8.73 0 0 1 1.278-4.833A8.166 8.166 0 0 1 8.517 3.39a8.917 8.917 0 0 1 4.479-1.207c1.828 0 3.403.576 4.725 1.728 1.322 1.152 2.133 2.635 2.433 4.45h-2.967a3.184 3.184 0 0 0-1.29-2.095 3.756 3.756 0 0 0-2.434-.82c-1.038 0-1.885.311-2.54.934a3.258 3.258 0 0 0-1.016 2.45h.022c.534-1.09 1.37-1.973 2.51-2.65 1.14-.677 2.405-1.016 3.795-1.016 1.724 0 3.21.496 4.458 1.488a5.09 5.09 0 0 1 1.885 3.899c0 1.588-.576 2.885-1.728 3.89-1.152 1.006-2.647 1.509-4.485 1.509-1.747 0-3.166-.462-4.257-1.387a4.603 4.603 0 0 1-1.642-3.47c0-1.411.576-2.607 1.728-3.588a6.122 6.122 0 0 1 4.062-1.488h.533v2.74a3.619 3.619 0 0 0-2.629 1.09 3.354 3.354 0 0 0-1.058 2.473c0 .977.356 1.782 1.067 2.416.711.633 1.596.95 2.654.95 1.058 0 1.943-.311 2.654-.934a3.078 3.078 0 0 0 1.067-2.432c0-1.09-.4-1.974-1.2-2.651a4.304 4.304 0 0 0-3.036-1.058c-1.193 0-2.187.311-2.98.934a4.563 4.563 0 0 0-1.59 2.385H4.214a8.517 8.517 0 0 0 1.536 3.742 6.917 6.917 0 0 0 2.691 2.807 9.578 9.578 0 0 0 4.758 1.338c1.09 0 2.134-.157 3.131-.472a7.627 7.627 0 0 0 2.718-1.467l.667 1.944a9.168 9.168 0 0 1-3.26 1.763 11.09 11.09 0 0 1-3.692.578z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61575063698366" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-electric-blue transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              >
                <Facebook size={isMobile ? 22 : 24} />
              </a>
              <a 
                href="https://wa.me/7002642149?text=Hello!%20I'm%20interested%20in%20discussing%20a%20project%20with%20you." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-electric-blue transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              >
                <MessageCircle size={isMobile ? 22 : 24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:px-2">
            <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6 relative group">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-electric-blue rounded transition-all duration-300 group-hover:w-16 md:group-hover:w-24"></span>
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link to="/" className="text-gray-400 hover:text-electric-blue hover:underline transition-all duration-300">
                  Home
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link to="/services" className="text-gray-400 hover:text-electric-blue hover:underline transition-all duration-300">
                  Services
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link to="/portfolio" className="text-gray-400 hover:text-electric-blue hover:underline transition-all duration-300">
                  Portfolio
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link to="/about" className="text-gray-400 hover:text-electric-blue hover:underline transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link to="/careers" className="text-gray-400 hover:text-electric-blue hover:underline transition-all duration-300">
                  Careers
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link to="/contact" className="text-gray-400 hover:text-electric-blue hover:underline transition-all duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:px-2">
            <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6 relative group">
              Our Services
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-electric-blue rounded transition-all duration-300 group-hover:w-16 md:group-hover:w-24"></span>
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link to="/services" className="text-gray-400 hover:text-electric-blue hover:underline transition-all duration-300">
                  Web Development
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link to="/services" className="text-gray-400 hover:text-electric-blue hover:underline transition-all duration-300">
                  UI/UX Design
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link to="/services" className="text-gray-400 hover:text-electric-blue hover:underline transition-all duration-300">
                  Mobile Apps
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-all duration-300">
                <Link to="/services" className="text-gray-400 hover:text-electric-blue hover:underline transition-all duration-300">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-2">
            <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6 relative group">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-electric-blue rounded transition-all duration-300 group-hover:w-16 md:group-hover:w-24"></span>
            </h3>
            <ul className="space-y-4 md:space-y-5">
              <li className="flex items-center group hover-glow p-3 rounded-lg transition-all duration-300 hover:bg-electric-blue/5">
                <Phone size={isMobile ? 18 : 20} className="text-electric-blue mr-3 flex-shrink-0 group-hover:animate-pulse" />
                <div className="flex flex-col">
                  <a href="tel:7002642149" className="text-gray-400 group-hover:text-electric-blue transition-colors hover:underline">
                    7002642149
                  </a>
                  <a href="tel:8011551863" className="text-gray-400 group-hover:text-electric-blue transition-colors hover:underline">
                    8011551863
                  </a>
                </div>
              </li>
              
              <li className="flex items-center group hover-glow p-3 rounded-lg transition-all duration-300 hover:bg-electric-blue/5">
                <Mail size={isMobile ? 18 : 20} className="text-electric-blue mr-3 flex-shrink-0 group-hover:animate-pulse" />
                <a href="mailto:graphixlab.in@gmail.com" className="text-gray-400 group-hover:text-electric-blue transition-colors text-sm md:text-base hover:underline">
                  graphixlab.in@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 mt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GraphiXlab Digital Forge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
