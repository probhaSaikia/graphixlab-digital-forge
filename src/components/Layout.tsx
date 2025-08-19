import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Welcome from './Welcome';
import { useTheme } from '@/context/ThemeContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({
  children
}: LayoutProps) => {
  const {
    theme
  } = useTheme();
  const location = useLocation();
  const [showWelcome, setShowWelcome] = useState(true);
  const isMobile = useIsMobile();

  // Scroll to top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Only show welcome message on first visit
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setShowWelcome(false);
    } else {
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);
  return <div className="flex flex-col min-h-screen relative overflow-hidden bg-deep-black text-foreground">
      {showWelcome && <Welcome />}
      
      {/* Optimized background with fewer animations for mobile */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none overflow-hidden">
        {/* Primary gradient blob - simplified animation */}
        <motion.div initial={{
        x: "10%",
        y: "30%"
      }} animate={isMobile ? {
        opacity: 0.8
      } : {
        x: ["10%", "15%", "5%", "10%"],
        y: ["30%", "35%", "25%", "30%"]
      }} transition={{
        duration: isMobile ? 0 : 20,
        repeat: Infinity,
        repeatType: "reverse"
      }} className="absolute w-[600px] h-[600px] rounded-full bg-electric-blue/20 blur-[120px]" />
        
        {/* Secondary gradient blob - simplified or removed for mobile */}
        {!isMobile && <motion.div initial={{
        x: "60%",
        y: "60%"
      }} animate={{
        x: ["60%", "65%", "55%", "60%"],
        y: ["60%", "55%", "65%", "60%"]
      }} transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        delay: 2
      }} className="absolute w-[500px] h-[500px] rounded-full bg-neon-pink/20 blur-[100px]" />}
        
        {/* Tertiary smaller accent blobs - removed for mobile */}
        {!isMobile && <motion.div initial={{
        opacity: 0.3,
        scale: 1
      }} animate={{
        opacity: [0.3, 0.5, 0.3],
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse"
      }} className="absolute left-[75%] top-[20%] w-[200px] h-[200px] rounded-full bg-purple-500/20 blur-[50px]" />}
        
        {/* Floating particles - significantly reduced for all devices */}
        <div className="absolute inset-0">
          {isMobile ? [...Array(2)] : [...Array(4)].map((_, i) => <motion.div key={i} initial={{
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5 + 0.2,
          scale: Math.random() * 0.5 + 0.5
        }} animate={{
          y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
          opacity: [0.2, 0.4, 0.2]
        }} transition={{
          duration: 20 + Math.random() * 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }} className="absolute w-2 h-2 rounded-full bg-white blur-[2px]" />)}
        </div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-16 bg-deep-black px-0 mx-0 py-0">
        <motion.div key={location.pathname} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.3
      }}>
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>;
};
export default Layout;