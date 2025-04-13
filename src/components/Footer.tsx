import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-deep-black border-t border-electric-blue/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-poppins font-bold text-white">
                Graphi<span className="text-electric-blue">X</span>lab
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Crafting digital experiences that convert. We bring your vision to life with cutting-edge tech and creative design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-electric-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              
              <li className="flex items-center">
                <Phone size={20} className="text-electric-blue mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-electric-blue transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-electric-blue mr-3 flex-shrink-0" />
                <a href="mailto:info@graphixlab.com" className="text-gray-400 hover:text-electric-blue transition-colors">
                  info@graphixlab.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} GraphiXlab Digital Forge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;