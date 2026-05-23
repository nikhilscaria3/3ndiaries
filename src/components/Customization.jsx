import React from 'react';
import { motion } from 'framer-motion';

export const Customization = () => {
  return (
    <section id="customization" className="py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[600px] flex gap-4"
        >
          <div className="w-1/2 h-full flex flex-col gap-4 mt-12">
            <div className="bg-ivory flex-1 rounded-sm shadow-md overflow-hidden relative group">
              <div className="absolute inset-0 bg-olive/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center font-serif text-chocolate">Color Theme</div>
            </div>
            <div className="bg-champagne h-1/3 rounded-sm shadow-md flex items-center justify-center font-script text-2xl text-chocolate">Engraving</div>
          </div>
          <div className="w-1/2 h-full flex flex-col gap-4">
            <div className="bg-blush h-2/5 rounded-sm shadow-md flex items-center justify-center font-serif text-chocolate text-center px-4">Couple Photo</div>
            <div className="bg-white flex-1 rounded-sm shadow-md border border-champagne flex flex-col items-center justify-center p-6 text-center">
              <span className="font-script text-3xl text-gold mb-2">Names & Dates</span>
              <span className="font-serif text-sm tracking-widest text-chocolate uppercase border-t border-gold/30 pt-2 mt-2">Custom details</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-script text-3xl text-gold block mb-2">Truly Yours</span>
          <h2 className="text-4xl md:text-5xl font-serif text-chocolate mb-6">
            Limitless Customization
          </h2>
          <p className="text-text font-light mb-8 text-lg">
            Every celebration is unique, and your chocolates should be too. We offer fully bespoke designs that seamlessly blend with your wedding, baptism, birthday, or housewarming theme.
          </p>
          
          <div className="space-y-6">
            {[
              { title: 'Custom Photo Cover', desc: 'A beautiful illustration or photo on the outer sleeve.' },
              { title: 'Bespoke Monograms', desc: 'Elegant initials intertwined with gold foil.' },
              { title: 'Theme Matching', desc: 'Packaging colors designed to exactly match your event palette.' },
              { title: 'Chocolate Engraving', desc: 'Premium bars with custom messages stamped directly onto the chocolate.' }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-ivory border border-gold/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-chocolate">{item.title}</h4>
                  <p className="font-light text-sm text-text/80 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="btn-primary mt-10">Start Your Design</button>
        </motion.div>
        
      </div>
    </section>
  );
};
