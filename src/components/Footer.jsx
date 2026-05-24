import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    },
  };

  return (
    <footer className="bg-chocolate text-cream py-16 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid md:grid-cols-4 gap-12">
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
            <img src="/3N/bgwhitelogo.png" alt="3NDIARIES Logo" className="h-20 mb-4 drop-shadow-md" />
            <p className="font-light text-cream/70 max-w-sm mb-6">
              Personalized luxury chocolates crafted for your sweetest moments. Based in Kerala, shipping nationwide.
            </p>
            <div className="font-script text-3xl text-gold text-shimmer w-fit">Make it memorable</div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-xl mb-6 text-gold relative inline-block">
              Explore
              <span className="absolute -bottom-2 left-0 w-1/2 h-[1px] bg-gold/50"></span>
            </h3>
            <ul className="space-y-3 font-light text-sm tracking-wider uppercase text-cream/80">
              <li><a href="/collections" className="inline-block hover:text-gold transition-all duration-500 hover:translate-x-2">Collections</a></li>
              <li><a href="/customization" className="inline-block hover:text-gold transition-all duration-500 hover:translate-x-2">Customization</a></li>
              <li><a href="/gallery" className="inline-block hover:text-gold transition-all duration-500 hover:translate-x-2">Gallery</a></li>
              <li><a href="/contact" className="inline-block hover:text-gold transition-all duration-500 hover:translate-x-2">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-xl mb-6 text-gold relative inline-block">
              Connect
              <span className="absolute -bottom-2 left-0 w-1/2 h-[1px] bg-gold/50"></span>
            </h3>
            <ul className="space-y-3 font-light text-sm text-cream/80">
              <li><a href="mailto:hello@3ndiaries.com" className="hover:text-gold transition-colors duration-500">hello@3ndiaries.com</a></li>
              <li><a href="tel:+917561849356" className="hover:text-gold transition-colors duration-500">+91 75618 49356</a></li>
              <li className="pt-4 flex gap-6">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://www.instagram.com/3n_diaries?igsh=b3d0dXY4ZXhlbGRv"
                  className="hover:text-gold transition-colors duration-300 block font-serif tracking-widest text-xs uppercase"
                >
                  Instagram
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-cream/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light text-cream/60 tracking-wider"
        >
          <p>&copy; {new Date().getFullYear()} 3NDIARIES Chocolates. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-script text-lg">Crafted with elegance</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};
