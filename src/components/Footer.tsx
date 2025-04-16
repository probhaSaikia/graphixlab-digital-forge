
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MessageCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();
  
  return <footer className="bg-deep-black border-t border-electric-blue/20 pt-12 pb-6 md:pt-16 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="inline-block mb-3 md:mb-4 group">
              <span className="text-xl md:text-2xl font-poppins font-bold text-white group-hover:text-glow transition-all duration-300">
                Graphi<span className="text-neon-pink group-hover:pink-text-glow">X</span>lab
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Crafting digital experiences that convert. We bring your vision to life with cutting-edge tech and creative design.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/graphixlab.in?igsh=MWN4NGJiejBkMW9rZQ==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-electric-blue transition-colors transform hover:scale-110 duration-300"
              >
                <Instagram size={isMobile ? 18 : 20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61575063698366" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-electric-blue transition-colors transform hover:scale-110 duration-300"
              >
                <Facebook size={isMobile ? 18 : 20} />
              </a>
              <a 
                href="https://wa.me/7002642149?text=Hello!%20I'm%20interested%20in%20discussing%20a%20project%20with%20you." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-electric-blue transition-colors transform hover:scale-110 duration-300"
              >
                <MessageCircle size={isMobile ? 18 : 20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-4 relative group">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-electric-blue rounded transition-all duration-300 group-hover:w-16 md:group-hover:w-24"></span>
            </h3>
            <ul className="space-y-1 md:space-y-2">
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Home
                </Link>
              </li>
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/services" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Services
                </Link>
              </li>
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/portfolio" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Portfolio
                </Link>
              </li>
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/about" className="text-gray-400 hover:text-electric-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/contact" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-4 relative group">
              Our Services
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-electric-blue rounded transition-all duration-300 group-hover:w-16 md:group-hover:w-24"></span>
            </h3>
            <ul className="space-y-1 md:space-y-2">
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/services" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Web Development
                </Link>
              </li>
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/services" className="text-gray-400 hover:text-electric-blue transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/services" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/services" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-4 relative group">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-electric-blue rounded transition-all duration-300 group-hover:w-16 md:group-hover:w-24"></span>
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center group hover-glow p-2 rounded-lg transition-all duration-300 hover:bg-electric-blue/5">
                <Phone size={isMobile ? 18 : 20} className="text-electric-blue mr-2 md:mr-3 flex-shrink-0 group-hover:animate-pulse" />
                <a href="tel:7002642149" className="text-gray-400 group-hover:text-electric-blue transition-colors">
                  7002642149
                </a>
              </li>
              
              <li className="flex items-center group hover-glow p-2 rounded-lg transition-all duration-300 hover:bg-electric-blue/5">
                <Mail size={isMobile ? 18 : 20} className="text-electric-blue mr-2 md:mr-3 flex-shrink-0 group-hover:animate-pulse" />
                <a href="mailto:graphixlab.in@gmail.com" className="text-gray-400 group-hover:text-electric-blue transition-colors text-sm md:text-base">
                  graphixlab.in@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 mt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GraphiXlab Digital Forge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};

export default Footer;
