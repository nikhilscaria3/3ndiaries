import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Customization = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: 'Custom Photo Cover', desc: 'A beautiful illustration or photo on the outer sleeve.', visual: <div className="">
        <img src="/3N/bgimg5.png" alt="" className="object-cover" />
      </div>
    },
    { title: 'Bespoke Monograms', desc: 'Elegant initials intertwined with gold foil.', visual: <div className="w-full h-full bg-ivory flex items-center justify-center font-script text-6xl text-gold shadow-inner border-[8px] border-double border-champagne">S & J</div> },
    { title: 'Theme Matching', desc: 'Packaging colors designed to exactly match your event palette.', visual: <div className="w-full h-full bg-olive/20 flex items-center justify-center font-sans text-xl tracking-widest text-olive shadow-inner uppercase">Sage Theme</div> },
    { title: 'Chocolate Engraving', desc: 'Premium bars with custom messages stamped directly onto the chocolate.', visual: <div className="w-full h-full bg-[#4A3320] flex items-center justify-center font-serif text-2xl text-[#8B5A2B] shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]">Thank You</div> }
  ];

  return (
    <section id="customization" className="py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="relative h-[500px] flex items-center justify-center perspective-[1000px]"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            whileHover={{ rotateY: 8, rotateX: -4, scale: 1.02 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="w-3/4 h-3/4 relative luxury-shadow rounded-sm overflow-hidden border border-champagne/50"
            style={{ transformStyle: "preserve-3d" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05, filter: 'blur(5px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                {features[activeTab].visual}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="overflow-hidden mb-2">
            <motion.span
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="font-script text-3xl text-gold block text-shimmer"
            >
              Truly Yours
            </motion.span>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="text-4xl md:text-5xl font-serif text-chocolate"
            >
              Limitless Customization
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-text font-light mb-8 text-lg"
          >
            Every celebration is unique, and your chocolates should be too. We offer fully bespoke designs that seamlessly blend with your wedding, baptism, birthday, or housewarming theme.
          </motion.p>

          <div className="space-y-4">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                onClick={() => setActiveTab(index)}
                className={`flex gap-4 items-start p-4 rounded-sm cursor-pointer transition-all duration-[0.8s] ease-[var(--ease-luxury)] ${activeTab === index ? 'bg-white shadow-md border border-gold/30 scale-[1.02]' : 'hover:bg-ivory border border-transparent hover:border-champagne'}`}
              >
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-[0.8s] ease-[var(--ease-luxury)] ${activeTab === index ? 'bg-gold border-gold' : 'bg-ivory border-gold/30'}`}>
                  <div className={`w-2 h-2 rounded-full transition-colors duration-[0.8s] ease-[var(--ease-luxury)] ${activeTab === index ? 'bg-white' : 'bg-gold'}`}></div>
                </div>
                <div>
                  <h4 className={`font-serif text-xl transition-colors duration-500 ${activeTab === index ? 'text-gold' : 'text-chocolate'}`}>{item.title}</h4>
                  <p className="font-light text-sm text-text/80 mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="btn-primary mt-8"
          >
            Start Your Design
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
