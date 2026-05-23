import React from 'react';
import { motion } from 'framer-motion';

export const ContactCTA = () => {
  return (
    <section id="contact" className="relative py-32 bg-chocolate overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-olive rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-script text-4xl text-gold block mb-4">Let's Create</span>
          <h2 className="text-4xl md:text-6xl font-serif text-cream mb-6">
            Start Your Custom <br className="hidden md:block" /> Chocolate Order
          </h2>
          <p className="text-cream/80 font-light max-w-xl mx-auto mb-10 text-lg">
            Connect with our design team on WhatsApp to discuss your theme, share your couple photos, and get a personalized quote.
          </p>

          <a
            href="https://wa.me/919562849356"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-chocolate px-10 py-4 font-medium tracking-widest uppercase text-sm hover:bg-white hover:text-chocolate transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};
