
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-navy/95 backdrop-blur-sm border-b border-electric-blue/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-poppins font-bold text-white">
            Graphi<span className="text-electric-blue">X</span>lab
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-electric-blue transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-white hover:text-electric-blue transition-colors">
            Services
          </Link>
          <Link to="/portfolio" className="text-white hover:text-electric-blue transition-colors">
            Portfolio
          </Link>
          <Link to="/about" className="text-white hover:text-electric-blue transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-electric-blue transition-colors">
            Contact
          </Link>
          <Button className="btn-primary">Let's Talk</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-electric-blue transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-navy border-b border-electric-blue/20 py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-electric-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-electric-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className="text-white hover:text-electric-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-electric-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-electric-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button className="btn-primary w-full mt-4">Let's Talk</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
