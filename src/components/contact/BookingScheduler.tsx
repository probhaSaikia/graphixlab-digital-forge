
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const BookingScheduler = () => {
  const [showForm, setShowForm] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-black/70 backdrop-blur-sm p-8 rounded-xl border border-electric-blue/20 shadow-lg hover:shadow-electric-blue/10 transition-all duration-500"
    >
      <h3 className="text-2xl font-semibold text-white mb-6 relative inline-block">
        Schedule a Consultation
        <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-electric-blue to-[#FF52FF]"></span>
      </h3>
      
      <p className="text-gray-400 mb-6">
        Book a 30-minute free consultation with our team to discuss your project needs and how we can help bring your vision to life.
      </p>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center bg-electric-blue/10 p-4 rounded-lg transition-all duration-300 hover:bg-electric-blue/20">
          <Calendar className="text-electric-blue mr-4" size={24} />
          <div>
            <h4 className="text-white font-medium">Choose Your Date</h4>
            <p className="text-gray-400 text-sm">We're available Monday to Friday</p>
          </div>
        </div>
        
        <div className="flex items-center bg-electric-blue/10 p-4 rounded-lg transition-all duration-300 hover:bg-electric-blue/20">
          <Clock className="text-electric-blue mr-4" size={24} />
          <div>
            <h4 className="text-white font-medium">Select a Time Slot</h4>
            <p className="text-gray-400 text-sm">9:30 AM - 5:30 PM IST</p>
          </div>
        </div>
      </div>
      
      {!showForm ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button 
            onClick={() => setShowForm(true)}
            className="w-full bg-gradient-to-r from-electric-blue to-[#FF52FF] text-white font-semibold py-3 px-6 rounded-md hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
          >
            <Calendar className="mr-2" size={18} />
            Book Your Session
          </Button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5 }}
          className="border border-electric-blue/20 rounded-xl overflow-hidden relative"
        >
          <div className="relative pb-[780px] w-full h-0">
            <iframe 
              src="https://forms.gle/dHWmQ9C26PjW6mH99" 
              className="absolute top-0 left-0 w-full h-full bg-black/80"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Loading form...
            </iframe>
          </div>
          <div className="absolute top-2 right-2 z-10">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowForm(false)}
              className="bg-black/80 border-electric-blue/30 text-electric-blue hover:bg-electric-blue/20"
            >
              Close Form
            </Button>
          </div>
          <div className="absolute bottom-2 right-2 z-10">
            <a 
              href="https://forms.gle/dHWmQ9C26PjW6mH99" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-electric-blue hover:text-white transition-colors px-3 py-1 rounded-md bg-black/50"
            >
              Open in new tab
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BookingScheduler;
