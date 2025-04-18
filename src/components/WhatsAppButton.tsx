import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "7002642149";
  const message = "Hello! I'm interested in discussing a project with you.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  useEffect(() => {
    setIsAnimating(true);
    const pulseInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 3000);
    return () => clearInterval(pulseInterval);
  }, []);
  return <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={`fixed bottom-6 right-6 z-50 group ${isHovered ? 'scale-110' : 'scale-100'} transition-all duration-300`} aria-label="Chat on WhatsApp" onMouseEnter={() => {
    setIsHovered(true);
    setShowTooltip(true);
  }} onMouseLeave={() => {
    setIsHovered(false);
    setShowTooltip(false);
  }}>
      {/* Animated rings */}
      <div className={`absolute inset-0 rounded-full ${isAnimating ? 'animate-ping' : ''} bg-[#25D366]/30 duration-1000`}></div>
      <div className={`absolute inset-0 rounded-full opacity-70 ${isHovered ? 'scale-125' : 'scale-110'} transition-all duration-300 bg-[#25D366]/20`}></div>
      
      {/* Main button */}
      <div className="relative flex items-center">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-lg shadow-[#25D366]/30">
          <MessageCircle size={28} className="text-white" strokeWidth={2.5} />
        </div>
        
        {/* Animated "Chat with us" text */}
        <div className={`
            absolute right-16 
            bg-[#25D366] text-white text-sm font-medium px-3 py-2 rounded-lg 
            whitespace-nowrap transform transition-all duration-300 
            ${showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
          `}>
          <span className="relative inline-block animate-bounce">
            Chat with us
          </span>
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#25D366] rotate-45"></div>
        </div>
      </div>

      {/* Floating "Chat with us" text above button */}
      
    </a>;
};
export default WhatsAppButton;