import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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
        <Link to="/" className="flex items-center">
          <img
            src="/3N/bgwhitelogo.png"
            alt="3NDIARIES Logo"
            className={`h-16 transition-all duration-300`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase font-medium text-chocolate">
          <Link to="/collections" className="relative group overflow-hidden py-2 hover:text-gold transition-colors duration-500">
            Collections
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[var(--ease-luxury)]"></span>
          </Link>
          <Link to="/customization" className="relative group overflow-hidden py-2 hover:text-gold transition-colors duration-500">
            Customization
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[var(--ease-luxury)]"></span>
          </Link>
          <Link to="/gallery" className="relative group overflow-hidden py-2 hover:text-gold transition-colors duration-500">
            Gallery
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[var(--ease-luxury)]"></span>
          </Link>
          <Link to="/contact" className="relative group overflow-hidden py-2 hover:text-gold transition-colors duration-500">
            Contact
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[var(--ease-luxury)]"></span>
          </Link>
        </div>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeyqGNP2kVAdL7omHzsxAUytGz2XwhQWAvrJkixoAdCDagHqQ/viewform?usp=sharing&ouid=102357883540256253288"
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
            <Link to="/collections" onClick={() => setIsOpen(false)} className="text-chocolate tracking-widest uppercase text-sm">Collections</Link>
            <Link to="/customization" onClick={() => setIsOpen(false)} className="text-chocolate tracking-widest uppercase text-sm">Customization</Link>
            <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-chocolate tracking-widest uppercase text-sm">Gallery</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-chocolate tracking-widest uppercase text-sm">Contact</Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyqGNP2kVAdL7omHzsxAUytGz2XwhQWAvrJkixoAdCDagHqQ/viewform?usp=sharing&ouid=102357883540256253288" target="_blank" rel="noopener noreferrer" className="btn-primary w-3/4 py-3 text-center block">Order Now</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
