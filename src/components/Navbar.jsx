import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img
            src="/3N/bgwhitelogo.png"
            alt="3NDIARIES Logo"
            className={`h-10 transition-all duration-300`}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase font-medium text-chocolate">
          <a href="#collections" className="hover:text-gold transition-colors">Collections</a>
          <a href="#customization" className="hover:text-gold transition-colors">Customization</a>
          <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>

        <a
          href="https://wa.me/919562849356"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block btn-primary px-6 py-2 text-xs">
          Order Now
        </a>
        {/* Mobile Toggle */}
        <button className="md:hidden text-chocolate" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-cream shadow-lg py-6 flex flex-col items-center space-y-6 md:hidden"
          >
            <a href="#collections" onClick={() => setIsOpen(false)} className="text-chocolate tracking-widest uppercase text-sm">Collections</a>
            <a href="#customization" onClick={() => setIsOpen(false)} className="text-chocolate tracking-widest uppercase text-sm">Customization</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="text-chocolate tracking-widest uppercase text-sm">Gallery</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-chocolate tracking-widest uppercase text-sm">Contact</a>
            <button className="btn-primary w-3/4 py-3">Order Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
