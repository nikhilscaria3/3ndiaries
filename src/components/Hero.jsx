import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-ivory">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-champagne rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-20 w-80 h-80 bg-blush rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <span className="font-script text-4xl md:text-5xl text-gold block mb-4">Sweetest Moments</span>
          <h1 className="text-5xl md:text-7xl font-serif text-chocolate leading-tight mb-6">
            Luxury Personalized Chocolates for Every Occasion
          </h1>
          <p className="text-lg md:text-xl text-text font-light mb-10 max-w-lg mx-auto md:mx-0">
            Custom printed covers, engraved chocolate bars, and premium gifting made for weddings, baptisms, birthdays, and unforgettable celebrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="btn-primary">Explore Collections</button>
            <button className="btn-outline">Request Custom Design</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative h-[500px] w-full flex justify-center items-center"
        >
          {/* Luxury Mockup Image */}
          <div className="w-full h-full bg-white shadow-2xl border border-champagne rounded-sm relative flex flex-col items-center justify-center overflow-hidden">
            <img
              src="/3N/couplechoco.jpg"
              alt="Luxury Chocolate"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
