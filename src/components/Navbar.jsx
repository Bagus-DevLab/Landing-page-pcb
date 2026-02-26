import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  
  // Fungsi untuk custom smooth scroll dengan offset
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Mencegah lompatan default dari tag <a>
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80; // Perkiraan tinggi navbar lu
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-pcb-dark/90 backdrop-blur-md border-b border-pcb-blue/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Text - Gradasi Custom */}
        <div 
          onClick={(e) => handleScroll(e, 'beranda')} 
          className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pcb-blue to-pcb-green cursor-pointer"
        >
          PCB<span className="text-pcb-light text-sm font-medium ml-2 tracking-normal">Smart Kandang</span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-8 text-pcb-light/80 font-medium">
          <a 
            href="#beranda" 
            onClick={(e) => handleScroll(e, 'beranda')} 
            className="hover:text-pcb-green transition-colors"
          >
            Beranda
          </a>
          <a 
            href="#fitur" 
            onClick={(e) => handleScroll(e, 'fitur')} 
            className="hover:text-pcb-blue transition-colors"
          >
            Fitur
          </a>
          <a 
            href="#live-data" 
            onClick={(e) => handleScroll(e, 'live-data')} 
            className="hover:text-pcb-orange transition-colors"
          >
            Live Data
          </a>
        </div>

        {/* CTA Button - Pakai Orange */}
        <div className="hidden md:block">
          <a
            href="https://api.pcb.my.id" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-pcb-orange hover:bg-opacity-80 text-pcb-light rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(250,130,76,0.3)] hover:shadow-[0_0_20px_rgba(250,130,76,0.5)]"
          >
            Buka Dashboard
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-pcb-light cursor-pointer hover:text-pcb-green">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </div>

      </div>
    </motion.nav>
  );
}