
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '@/context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-deep-black text-foreground">
      {/* Static gradient background instead of animated orbs */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-20 pointer-events-none">
        {/* Cyan/Teal blue static gradient */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-electric-blue/20 blur-[100px]"></div>
        
        {/* Pink static gradient */}
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-neon-pink/20 blur-[100px]"></div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
