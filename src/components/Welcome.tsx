
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Welcome = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide the welcome message after 3 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center z-[100] bg-[#0A192F]"
          style={{
            backgroundImage: `url('/lovable-uploads/6aab4efc-ea86-4f29-8d39-e6450b396ef4.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <img 
                src="/lovable-uploads/1e56e3ab-ca17-4e3a-96cb-d62c665012a8.png" 
                alt="GraphiXlab Logo" 
                className="w-20 h-20 mx-auto mb-4"
              />
            </motion.div>
            
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl font-bold text-white mb-2"
            >
              Welcome to <span className="text-white">Graphi</span><span className="text-neon-pink">X</span><span className="text-white">lab</span>
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-gray-300"
            >
              Crafting digital experiences that convert
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Welcome;
