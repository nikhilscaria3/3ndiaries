import React from 'react';
import { motion } from 'framer-motion';

const collaborators = [
  { name: 'Joan Adry', logo: '/collaborators/Joan_Adry_Logo2.pdf.webp' },
];

export const Collaborators = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto px-6 max-w-6xl text-center"
      >
        <div className="overflow-hidden mb-4">
          <motion.span variants={itemVariants} className="font-script text-3xl text-gold block text-shimmer w-fit mx-auto">Our Partners</motion.span>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif text-chocolate">
            Collaborators
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {collaborators.map((collaborator, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-[var(--ease-luxury)] opacity-70 hover:opacity-100 flex items-center justify-center h-32 w-48"
            >
              <img 
                src={collaborator.logo} 
                alt={collaborator.name} 
                className="max-h-full max-w-full object-contain drop-shadow-md"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
