
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useToast } from '@/hooks/use-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const { toast } = useToast();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleCall = () => {
    toast({
      title: "Calling GraphiXlab",
      description: "Connecting to 7002642149",
    });
    window.location.href = "tel:7002642149";
  };

  const navBgClass = scrolled 
    ? 'bg-deep-black/95 backdrop-blur-md shadow-lg border-b border-electric-blue/20' 
    : 'bg-gradient-to-r from-deep-black/90 to-deep-black/80 backdrop-blur-sm';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="relative overflow-hidden rounded-full w-10 h-10 mr-2 border-2 border-electric-blue/50 transition-transform group-hover:scale-110">
            <img 
              src="/lovable-uploads/1e56e3ab-ca17-4e3a-96cb-d62c665012a8.png" 
              alt="GraphiXlab Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-2xl font-poppins font-bold tracking-tight">
            Graphi<span className="text-[#FF52FF]">X</span><span className="text-white">lab</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white relative overflow-hidden group">
            <span className="relative z-10 group-hover:text-electric-blue transition-colors duration-300">Home</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-electric-blue to-[#FF52FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link to="/services" className="text-white relative overflow-hidden group">
            <span className="relative z-10 group-hover:text-electric-blue transition-colors duration-300">Services</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-electric-blue to-[#FF52FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link to="/portfolio" className="text-white relative overflow-hidden group">
            <span className="relative z-10 group-hover:text-electric-blue transition-colors duration-300">Portfolio</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-electric-blue to-[#FF52FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link to="/about" className="text-white relative overflow-hidden group">
            <span className="relative z-10 group-hover:text-electric-blue transition-colors duration-300">About</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-electric-blue to-[#FF52FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link to="/contact" className="text-white relative overflow-hidden group">
            <span className="relative z-10 group-hover:text-electric-blue transition-colors duration-300">Contact</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-electric-blue to-[#FF52FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Button 
            onClick={handleCall}
            className="bg-gradient-to-r from-electric-blue to-[#FF52FF] text-white font-poppins font-medium py-3 px-6 rounded-md"
          >
            <Phone className="mr-2" size={18} />
            Let's Talk
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
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
        <div className="md:hidden absolute top-16 left-0 right-0 bg-deep-black/95 backdrop-blur-md border-b border-electric-blue/20 py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-electric-blue transition-colors py-2 pl-2 border-l-2 border-transparent hover:border-electric-blue"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-electric-blue transition-colors py-2 pl-2 border-l-2 border-transparent hover:border-electric-blue"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className="text-white hover:text-electric-blue transition-colors py-2 pl-2 border-l-2 border-transparent hover:border-electric-blue"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-electric-blue transition-colors py-2 pl-2 border-l-2 border-transparent hover:border-electric-blue"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-electric-blue transition-colors py-2 pl-2 border-l-2 border-transparent hover:border-electric-blue"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button 
              onClick={handleCall} 
              className="bg-gradient-to-r from-electric-blue to-[#FF52FF] text-white font-poppins font-medium py-3 px-6 rounded-md flex items-center"
            >
              <Phone className="mr-2" size={18} />
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
