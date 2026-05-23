import React from 'react';
import { motion } from 'framer-motion';

export const ContactCTA = () => {
  return (
    <section id="contact" className="relative py-32 bg-chocolate overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full mix-blend-overlay filter blur-[100px]"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-olive rounded-full mix-blend-overlay filter blur-[100px]"
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="overflow-hidden mb-4">
            <motion.span
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="font-script text-4xl text-gold block text-shimmer"
            >
              Let's Create
            </motion.span>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="text-4xl md:text-6xl font-serif text-cream"
            >
              Start Your Custom <br className="hidden md:block" /> Chocolate Order
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-cream/80 font-light max-w-xl mx-auto mb-10 text-lg"
          >
            Connect with our design team on WhatsApp to discuss your theme, share your couple photos, and get a personalized quote.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeyqGNP2kVAdL7omHzsxAUytGz2XwhQWAvrJkixoAdCDagHqQ/viewform?usp=sharing&ouid=102357883540256253288"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-chocolate px-10 py-4 font-medium tracking-widest uppercase text-sm hover:bg-white hover:text-chocolate transition-all duration-[0.8s] ease-[var(--ease-luxury)] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
            >
              Fill Order Form
            </a>
            <a
              href="https://wa.me/919562849356"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gold text-gold px-10 py-4 font-medium tracking-widest uppercase text-sm hover:bg-gold hover:text-chocolate transition-all duration-[0.8s] ease-[var(--ease-luxury)] hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
