import React from 'react';
import { motion } from 'framer-motion';

export const PartnerWithUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } },
  };

  return (
    <section className="py-24 bg-cream border-t border-b border-champagne/40 relative overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto px-6 max-w-4xl text-center"
      >
        <div className="overflow-hidden mb-4">
          <motion.span variants={itemVariants} className="font-script text-3xl text-gold block text-shimmer w-fit mx-auto">Collaborations</motion.span>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif text-chocolate">
            Partner With Us
          </motion.h2>
        </div>
        <motion.p variants={itemVariants} className="text-text font-light mb-10 leading-relaxed">
          Are you a wedding planner, event decorator, caterer, or photographer? We partner with industry professionals to provide premium, white-labeled, or co-branded luxury chocolate gifting for your clients. Enhance your event packages with our bespoke offerings.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
          {['Event Planners', 'Decorators', 'Caterers'].map((title, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="border border-gold/30 p-6 bg-white luxury-shadow flex-1 transition-all duration-[0.8s] ease-[var(--ease-luxury)] hover:border-gold group"
            >
              <h3 className="font-serif text-xl text-chocolate mb-2">{title}</h3>
              <p className="text-xs text-text/70 font-light uppercase tracking-widest group-hover:text-gold transition-colors duration-500">
                {i === 0 ? 'Exclusive Rates' : i === 1 ? 'Theme Matching' : 'Bulk Supply'}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-12">
          <button className="btn-primary mt-10">Inquire About Partnerships</button>
        </motion.div>
      </motion.div>
    </section>
  );
};
