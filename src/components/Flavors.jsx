import React from 'react';
import { motion } from 'framer-motion';

const flavors = {
  white: [
    'Dry Roasted Almonds in 29.3% White Couverture Bar',
    'Alphonso Mango in 29.3% White Couverture Bar',
    'Cherries & Berries in 29.3% White Couverture Bar',
    'Nuts & Raisins in 29.3% White Couverture Bar',
    'Fudgy Hazelnut Spread & Roasted Cashew in 29.3% White Couverture Bar',
    'Creamy Malai in 29.3% White Couverture Bar',
    'Cookie & Cream in 29.3% White Couverture Bar'
  ],
  milk: [
    'Filter Kaapi in 35.6% Milk Couverture Bar',
    'Cookie & Cream in 35.6% Milk Couverture Bar',
    'Salted Caramel in 35.6% Milk Couverture Bar',
    'Nutty Butterscotch in 35.6% Milk Couverture Bar',
    'Nuts & Raisins in 35.6% Milk Couverture Bar',
    'Gianduja in 35.6% Milk Couverture Bar',
    'Dry Roasted Cashew in 35.6% Milk Couverture Bar',
    'Caramel Peanut Butter in 35.6% Milk Couverture Bar'
  ],
  dark: [
    'Red Wine & Raisins in 55% Dark Couverture Bar',
    'Rum & Raisins in 55% Dark Couverture Bar',
    'Dry Roasted Almonds in 55% Dark Couverture Bar',
    'Caramelised Peanut Butter in 55% Dark Couverture Bar',
    'Salted Caramel in 55% Dark Couverture Bar',
    'Rose & Cranberries in 55% Dark Couverture Bar',
    'Natural Mint in 55% Dark Couverture Bar',
    'Apricots & Roasted Almonds in 55% Dark Couverture Bar'
  ],
  kunafa: [
    'Kunafa Pistachio Chocolate',
    'Nutella Kunafa Chocolate'
  ]
};

const FlavorList = ({ title, items, delayOffset }) => {
  return (
    <div className="flex-1 bg-cream p-10 border border-champagne/50 luxury-shadow hover:border-gold/30 transition-colors duration-500 rounded-sm">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delayOffset, duration: 0.6 }}
        className="font-serif text-3xl text-chocolate mb-8 text-center"
      >
        {title}
      </motion.h3>
      <ul className="space-y-5">
        {items.map((flavor, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delayOffset + (i * 0.1), duration: 0.5 }}
            className="flex items-start text-text/80 font-light leading-relaxed group"
          >
            <span className="w-1.5 h-1.5 bg-gold rounded-full mr-4 mt-2 shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
            <span className="group-hover:text-chocolate transition-colors duration-300">{flavor}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export const Flavors = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="text-4xl md:text-5xl font-serif text-chocolate"
            >
              Our Exquisite Flavors
            </motion.h2>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="w-16 h-[1px] bg-gold mx-auto mb-6 origin-center"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-text font-light max-w-2xl mx-auto"
          >
            Discover our signature chocolate bars, crafted with premium couverture and exceptional ingredients for an unforgettable tasting experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <FlavorList title="White Chocolate" items={flavors.white} delayOffset={0.2} />
          <FlavorList title="Milk Chocolate" items={flavors.milk} delayOffset={0.4} />
          <FlavorList title="Dark Chocolate" items={flavors.dark} delayOffset={0.6} />
          <FlavorList title="Kunafa Specials" items={flavors.kunafa} delayOffset={0.8} />
        </div>
      </div>
    </section>
  );
};
