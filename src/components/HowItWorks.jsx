import React from 'react';
import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const steps = [
    { num: '01', title: 'Choose Your Tier', desc: 'Select between our Standard mini bars or Premium gift boxes based on your guest list.' },
    { num: '02', title: 'Share Your Details', desc: 'Provide us with your custom photo, names, dates, and event color palette.' },
    { num: '03', title: 'Approve Design', desc: 'Review the digital mockups created by our design team and approve for printing.' },
    { num: '04', title: 'Production & Delivery', desc: 'We craft, pack, and securely deliver the chocolates to your venue across India.' }
  ];

  return (
    <section className="py-24 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="font-script text-3xl text-gold block mb-2">The Process</span>
          <h2 className="text-4xl md:text-5xl font-serif text-chocolate mb-4">
            How It Works
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gold/30 -z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-cream border border-gold/40 flex items-center justify-center mb-6 shadow-sm">
                <span className="font-serif text-3xl text-gold">{step.num}</span>
              </div>
              <h3 className="font-serif text-xl text-chocolate mb-3">{step.title}</h3>
              <p className="font-light text-sm text-text/80">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
