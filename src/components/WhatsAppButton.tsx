
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { toast } = useToast();

  const phoneNumber = "7002642149";
  const message = "Hello! I'm interested in discussing a project with you.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Initial notification
    toast({
      title: "Chat with us!",
      description: "We're here to help with your project needs",
      duration: 5000,
    });

    // Pulsing animation
    setIsAnimating(true);
    const pulseInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 3000);
    
    return () => clearInterval(pulseInterval);
  }, []);

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`fixed bottom-6 right-6 z-50 group ${isHovered ? 'scale-110' : 'scale-100'} transition-all duration-300`}
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => {
        setIsHovered(true);
        setShowTooltip(true);
        toast({
          title: "Start a conversation",
          description: "Click to chat with us on WhatsApp",
          duration: 3000,
        });
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowTooltip(false);
      }}
    >
      {/* Animated rings with neutral colors */}
      <div className={`absolute inset-0 rounded-full ${isAnimating ? 'animate-ping' : ''} bg-slate-400/30 duration-1000`}></div>
      <div className={`absolute inset-0 rounded-full opacity-70 ${isHovered ? 'scale-125' : 'scale-110'} transition-all duration-300 bg-slate-300/20`}></div>
      
      {/* Main button with gradient */}
      <div className="relative flex items-center">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-600 to-slate-800 shadow-lg">
          <MessageCircle size={28} className="text-white" strokeWidth={2.5} />
        </div>
        
        {/* Animated tooltip */}
        <div 
          className={`
            absolute right-16 
            bg-slate-800 text-white text-sm font-medium px-3 py-2 rounded-lg 
            whitespace-nowrap transform transition-all duration-300 
            ${showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
          `}
        >
          <span className="relative inline-block animate-bounce">
            Chat with us
          </span>
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
        </div>
      </div>

      {/* Floating text above button */}
      <div 
        className="
          fixed bottom-[4.5rem] right-6 z-40 
          text-sm font-medium text-white 
          bg-slate-800 px-4 py-1 rounded-full
          animate-pulse transform transition-all duration-300
          opacity-90 hover:opacity-100
          shadow-lg
        "
      >
        <span className="animate-[wave_1.5s_ease-in-out_infinite]">
          Chat with us
        </span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
