import React from 'react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Standard Tier',
    weight: '25-30g Mini Bar',
    description: 'Perfect for bulk event guests as a sweet takeaway.',
    features: ['Custom printed cover', 'Choice of 2 flavors', 'Elegant minimal packaging'],
    image: 'bg-blush'
  },
  {
    name: 'Premium Tier',
    weight: '50-55g Bar / Box',
    description: 'Ideal for VIP guests, family, and close friends.',
    features: ['Chocolate engraving', 'Premium gift box', 'Gold foil stamping', 'Choice of 4 flavors'],
    image: 'bg-gold',
    featured: true
  },
  {
    name: 'Ultra Premium',
    weight: 'Custom Hampers',
    description: 'The ultimate luxury gifting experience for your most special guests.',
    features: ['Fully bespoke packaging', 'Custom assortments', 'Premium ribbons & seals', 'Personalized notes'],
    image: 'bg-olive'
  }
];

export const ProductTiers = () => {
  return (
    <section id="collections" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-chocolate mb-4"
          >
            Curated Collections
          </motion.h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mb-6"></div>
          <p className="text-text font-light max-w-2xl mx-auto">
            Choose the perfect gifting tier for your celebration. From elegant mini bars for all your guests to premium engraved boxes for VIPs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-cream p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${tier.featured ? 'border-2 border-gold/30' : 'border border-champagne/50'}`}
            >
              {tier.featured && (
                <div className="absolute -top-4 bg-gold text-white text-xs tracking-widest uppercase py-1 px-4">
                  Most Popular
                </div>
              )}

              <div className={`w-32 h-32 rounded-t-full rounded-b-full mb-8 ${tier.image} opacity-80 flex items-center justify-center`}>
                <span className="font-script text-2xl text-white">Choc</span>
              </div>

              <h3 className="font-serif text-3xl text-chocolate mb-2">{tier.name}</h3>
              <div className="font-sans text-xs tracking-widest text-gold uppercase mb-4">{tier.weight}</div>
              <p className="font-light text-text/80 mb-8">{tier.description}</p>

              <ul className="space-y-3 mb-10 w-full text-left font-light text-sm">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-text/80">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="btn-primary mt-auto">View Details</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
