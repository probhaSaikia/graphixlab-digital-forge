
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        {/* Neon blue orb */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-electric-blue/30 blur-[100px] animate-float" style={{ animationDelay: '0s' }}></div>
        
        {/* Purple/pink orb */}
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-[#FF52FF]/30 blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Small star particles */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full opacity-70 animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
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
