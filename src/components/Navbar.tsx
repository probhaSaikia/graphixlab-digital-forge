import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Home, Briefcase, FolderHeart, Users, MessageSquare, BookOpen } from 'lucide-react';
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

  // Enhanced sticky navbar styling
  const navBgClass = scrolled 
    ? 'bg-deep-black/95 backdrop-blur-md shadow-xl border-b border-electric-blue/30 py-2' 
    : 'bg-gradient-to-r from-deep-black/90 to-deep-black/80 backdrop-blur-sm py-3';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`} style={{ position: 'sticky', top: 0 }}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="relative overflow-hidden rounded-full w-12 h-12 mr-3 border-2 border-electric-blue/50 transition-all duration-300 group-hover:scale-110 group-hover:border-electric-blue">
            <img 
              src="/lovable-uploads/1e56e3ab-ca17-4e3a-96cb-d62c665012a8.png" 
              alt="GraphiXlab Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-2xl md:text-3xl font-poppins font-bold tracking-tight">
            Graphi<span className="text-neon-pink">X</span><span className="text-white">lab</span>
          </span>
        </Link>

        {/* Desktop Navigation - Enhanced */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white relative overflow-hidden group flex items-center py-2">
            <Home 
              size={18} 
              className="mr-2 text-electric-blue transition-all duration-300 group-hover:scale-110" 
            />
            <span className="relative z-10 group-hover:text-electric-blue transition-colors duration-300 font-medium">Home</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-electric-blue to-neon-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link to="/services" className="text-white relative overflow-hidden group flex items-center py-2">
            <Briefcase 
              size={18} 
              className="mr-2 text-electric-blue transition-all duration-300 group-hover:scale-110" 
            />
            <span className="relative z-10 group-hover:text-electric-blue transition-colors duration-300 font-medium">Services</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-electric-blue to-neon-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link to="/portfolio" className="text-white relative overflow-hidden group flex items-center py-2">
            <FolderHeart 
              size={18} 
              className="mr-2 text-electric-blue transition-all duration-300 group-hover:scale-110" 
            />
            <span className="relative z-10 group-hover:text-electric-blue transition-colors duration-300 font-medium">Portfolio</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-electric-blue to-neon-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link to="/about" className="text-white relative overflow-hidden group flex items-center py-2">
            <Users 
              size={18} 
              className="mr-2 text-electric-blue transition-all duration-300 group-hover:scale-110" 
            />
            <span className="relative z-10 group-hover:text-electric-blue transition-colors duration-300 font-medium">About</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-electric-blue to-neon-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link to="/contact" className="text-white relative overflow-hidden group flex items-center py-2">
            <MessageSquare 
              size={18} 
              className="mr-2 text-electric-blue transition-all duration-300 group-hover:scale-110" 
            />
            <span className="relative z-10 group-hover:text-electric-blue transition-colors duration-300 font-medium">Contact</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-electric-blue to-neon-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          
          {/* Enhanced CTA Button */}
          <Button 
            onClick={handleCall}
            className="bg-gradient-to-r from-electric-blue to-neon-pink hover:from-electric-blue/80 hover:to-neon-pink/80 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-electric-blue/25 transition-all duration-300 group"
          >
            <Phone className="mr-2 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" size={18} />
            Get Quote
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-electric-blue transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? 
              <X size={28} className="animate-fade-in" /> : 
              <Menu size={28} className="transition-transform hover:rotate-12 hover:scale-110 duration-300" />
            }
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-deep-black/98 backdrop-blur-lg border-b border-electric-blue/20 py-6 px-4 animate-fade-in shadow-xl">
          <div className="flex flex-col space-y-4">
            
            <Link 
              to="/" 
              className="text-white hover:text-electric-blue transition-colors py-3 text-center border border-transparent hover:border-electric-blue/30 rounded-lg flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <Home size={18} className="mr-3 text-electric-blue" />
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-electric-blue transition-colors py-3 text-center border border-transparent hover:border-electric-blue/30 rounded-lg flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <Briefcase size={18} className="mr-3 text-electric-blue" />
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className="text-white hover:text-electric-blue transition-colors py-3 text-center border border-transparent hover:border-electric-blue/30 rounded-lg flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <FolderHeart size={18} className="mr-3 text-electric-blue" />
              Portfolio
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-electric-blue transition-colors py-3 text-center border border-transparent hover:border-electric-blue/30 rounded-lg flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <Users size={18} className="mr-3 text-electric-blue" />
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-electric-blue transition-colors py-3 text-center border border-transparent hover:border-electric-blue/30 rounded-lg flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <MessageSquare size={18} className="mr-3 text-electric-blue" />
              Contact
            </Link>
            <Button 
              onClick={handleCall} 
              className="bg-gradient-to-r from-electric-blue to-neon-pink text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300 mt-4"
            >
              <Phone className="mr-2" size={18} />
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
