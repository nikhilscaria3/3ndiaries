import React from 'react';
import { motion } from 'framer-motion';

export const Services = () => {
  const features = [
    {
      title: 'All India Service',
      description: 'We deliver our premium customized gifts securely to any venue across India.',
      icon: (
        <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'MOQ 100',
      description: 'Our Minimum Order Quantity starts at just 100 pieces, perfect for intimate gatherings or large scale events.',
      icon: (
        <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: 'Major Event Types',
      description: 'Ideal for Corporate Gifting, Weddings, Birthdays, Anniversaries, Conferences, Exhibitions, and Product Launches.',
      icon: (
        <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="overflow-hidden mb-4">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="text-4xl md:text-5xl font-serif text-chocolate"
            >
              Our Services
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
            Delivering exceptional quality and service for all your gifting needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="bg-cream p-10 rounded-sm border border-champagne/50 text-center flex flex-col items-center hover:border-gold/50 transition-colors duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-gold/20">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl text-chocolate mb-4">{feature.title}</h3>
              <p className="font-light text-text/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
